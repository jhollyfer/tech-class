# Aula 10 — Sessões, Cookies e LGPD

**Data:** 09/03 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** II — REST APIs com Fastify

---

## 🎯 Objetivos de Aprendizagem

- Escolher entre JWT e sessão com base no caso de uso
- Configurar `@fastify/session` + `@fastify/cookie` corretamente
- Criar, ler e destruir sessões com `request.session`
- Definir cookies com atributos de segurança adequados
- Compreender os impactos da LGPD para sistemas que usam cookies
- Implementar `@fastify/rate-limit` para proteção contra brute force

---

## 📚 Conteúdo

### 1. JWT vs. Sessão — Quando Usar Cada Um?

| Cenário | JWT | Sessão |
|---|---|---|
| API consumida por apps mobile/SPA | ✅ Ideal | ⚠️ Problemático (cookies/CORS) |
| Web app tradicional com SSR | ⚠️ Menos natural | ✅ Ideal |
| Microsserviços distribuídos | ✅ Ideal (stateless) | ❌ Não escala sem store compartilhada |
| Precisa revogar acesso imediatamente | ❌ Complexo | ✅ Simples (apaga sessão) |
| Dados sensíveis no token | ❌ Evitar | ✅ Seguro (fica no servidor) |

> **Regra prática:** APIs REST → JWT. Web apps com server-side rendering → Sessão.

---

### 2. Instalação

```bash
npm install @fastify/session @fastify/cookie
```

---

### 3. Configuração de Sessão

```typescript
import Fastify from "fastify"
import cookie from "@fastify/cookie"
import session from "@fastify/session"
import { env } from "./env.js"

export function buildApp() {
  const app = Fastify({ logger: true })

  // Cookie deve ser registrado ANTES da sessão
  app.register(cookie)

  app.register(session, {
    secret: env.SESSION_SECRET,  // min 32 chars
    cookie: {
      secure:   env.NODE_ENV === "production",  // HTTPS apenas em produção
      httpOnly: true,             // inacessível via JavaScript (proteção XSS)
      sameSite: "strict",         // proteção CSRF
      maxAge:   24 * 60 * 60 * 1000  // 24 horas em ms
    },
    saveUninitialized: false,  // não criar sessão vazia
  })

  return app
}
```

---

### 4. Criando e Lendo Sessões

```typescript
// Declarar os campos da sessão (tipagem)
declare module "@fastify/session" {
  interface FastifySessionObject {
    usuarioId?: number
    email?: string
    role?: string
  }
}

// ─── Rota de login ────────────────────────────────────────
app.post<{ Body: { email: string; senha: string } }>(
  "/login",
  async (request, reply) => {
    // ... validar credenciais

    // Criar sessão
    request.session.usuarioId = usuario.id
    request.session.email     = usuario.email
    request.session.role      = usuario.role

    return reply.send({ mensagem: "Login realizado com sucesso" })
    // O cookie de sessão é setado automaticamente
  }
)

// ─── Rota protegida ───────────────────────────────────────
app.get("/perfil", async (request, reply) => {
  if (!request.session.usuarioId) {
    return reply.status(401).send({ error: "Não autenticado" })
  }

  return {
    usuarioId: request.session.usuarioId,
    email:     request.session.email
  }
})

// ─── Logout ───────────────────────────────────────────────
app.post("/logout", async (request, reply) => {
  await request.session.destroy()
  return reply.send({ mensagem: "Logout realizado com sucesso" })
})
```

---

### 5. `reply.setCookie()` — Cookies Customizados

```typescript
// Setar cookie manualmente
reply.setCookie("tema", "escuro", {
  httpOnly: false,    // cookie de preferência, pode ser lido pelo JS
  sameSite: "lax",
  maxAge:   30 * 24 * 60 * 60  // 30 dias em segundos
})

// Ler cookie
const tema = request.cookies["tema"]

// Limpar cookie
reply.clearCookie("tema")
```

---

### 6. Atributos de Segurança dos Cookies

| Atributo | Efeito | Quando usar |
|---|---|---|
| `httpOnly: true` | Bloqueia acesso via `document.cookie` no JS | **Sempre** para cookies de sessão |
| `secure: true` | Só trafega em HTTPS | **Sempre** em produção |
| `sameSite: "strict"` | Cookie só enviado para o mesmo domínio | Máxima proteção CSRF |
| `sameSite: "lax"` | Permite navegação normal entre sites | Boa opção padrão |
| `maxAge` / `expires` | Define validade do cookie | Controlar duração da sessão |
| `domain` | Restringe o domínio | Subdomínios específicos |

---

### 7. LGPD e Cookies

A **Lei Geral de Proteção de Dados (Lei 13.709/2018)** impacta diretamente sistemas que usam cookies:

**O que a LGPD exige:**

- **Consentimento explícito** antes de usar cookies não essenciais (analytics, rastreamento)
- **Informar** quais dados são coletados e com qual finalidade
- **Direito de exclusão:** usuário pode solicitar remoção de seus dados
- **Cookies de sessão** (essenciais para o funcionamento) geralmente dispensam consentimento
- **Cookies de rastreamento/analytics** sempre exigem consentimento

**Implementação prática:**
```typescript
// Exemplo: verificar consentimento antes de salvar preferências
app.post("/configuracoes", async (request, reply) => {
  const { consentiu, tema, idioma } = request.body

  if (!consentiu) {
    return reply.status(400).send({
      error: "Consentimento necessário para salvar preferências"
    })
  }

  reply.setCookie("preferencias", JSON.stringify({ tema, idioma }), {
    maxAge: 365 * 24 * 60 * 60
  })

  return { mensagem: "Preferências salvas" }
})
```

---

### 8. Rate Limiting com `@fastify/rate-limit`

```bash
npm install @fastify/rate-limit
```

```typescript
import rateLimit from "@fastify/rate-limit"

// Proteção global
app.register(rateLimit, {
  max: 100,           // máximo 100 requisições
  timeWindow: "1 minute"  // por minuto
})

// Rate limit específico para login (proteção brute force)
app.post("/auth/login", {
  config: {
    rateLimit: {
      max: 5,             // apenas 5 tentativas
      timeWindow: "15 minutes"  // por 15 minutos
    }
  }
}, loginHandler)
```

---

## 💻 Código de Exemplo Completo

```typescript
// src/routes/auth-session.routes.ts

import { FastifyPluginAsync } from "fastify"
import bcrypt from "bcryptjs"
import { z } from "zod"

declare module "@fastify/session" {
  interface FastifySessionObject {
    usuarioId?: number
    nome?: string
    role?: "aluno" | "professor" | "admin"
    ultimoAcesso?: string
  }
}

interface UsuarioDB {
  id: number
  nome: string
  email: string
  senhaHash: string
  role: "aluno" | "professor" | "admin"
}

const usuarios: UsuarioDB[] = [
  {
    id: 1,
    nome: "Professor Indio",
    email: "professor@cetam.am.gov.br",
    senhaHash: "$2a$10$exemplo.hash.aqui",
    role: "professor"
  }
]

const schemaLogin = z.object({
  email: z.string().email(),
  senha: z.string().min(1)
})

export const authSessionRoutes: FastifyPluginAsync = async (app) => {
  // POST /session/login
  app.post("/login", {
    config: { rateLimit: { max: 5, timeWindow: "15 minutes" } }
  }, async (request, reply) => {
    const resultado = schemaLogin.safeParse(request.body)
    if (!resultado.success) {
      return reply.status(422).send({ error: "Dados inválidos" })
    }

    const { email, senha } = resultado.data
    const usuario = usuarios.find(u => u.email === email)

    if (!usuario || !(await bcrypt.compare(senha, usuario.senhaHash))) {
      return reply.status(401).send({ error: "Credenciais inválidas" })
    }

    request.session.usuarioId    = usuario.id
    request.session.nome         = usuario.nome
    request.session.role         = usuario.role
    request.session.ultimoAcesso = new Date().toISOString()

    return { mensagem: `Bem-vindo, ${usuario.nome}!` }
  })

  // GET /session/perfil — protegida
  app.get("/perfil", async (request, reply) => {
    if (!request.session.usuarioId) {
      return reply.status(401).send({ error: "Faça login para continuar" })
    }

    return {
      id:           request.session.usuarioId,
      nome:         request.session.nome,
      role:         request.session.role,
      ultimoAcesso: request.session.ultimoAcesso
    }
  })

  // POST /session/logout
  app.post("/logout", async (request, reply) => {
    const nome = request.session.nome
    await request.session.destroy()
    return { mensagem: `Até logo, ${nome ?? "usuário"}!` }
  })
}
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Sessão Básica
Implemente um sistema de autenticação por sessão para um portal de uma cooperativa local com:
- Registro, login, logout
- Rota `/cooperativa/painel` acessível apenas para membros autenticados
- Sessão expira em 1 hora

---

### Exercício 2 — Cookies de Preferência
Implemente um endpoint `POST /preferencias` que salva as preferências do usuário (tema, idioma, notificações) em um cookie com validade de 30 dias.
O endpoint deve exigir que o campo `consentiu: true` seja enviado no body (requisito LGPD).

---

### Exercício 3 — Rate Limiting Inteligente ⭐ (desafio)
Configure rate limits diferenciados:
- Rotas públicas: 200 req/min
- Rotas de login/registro: 5 req/15min por IP
- Rotas autenticadas: 500 req/min por usuário (use `keyGenerator` baseado no `usuarioId` da sessão)

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| @fastify/session | https://github.com/fastify/session | Documentação |
| @fastify/cookie | https://github.com/fastify/fastify-cookie | Documentação |
| @fastify/rate-limit | https://github.com/fastify/fastify-rate-limit | Documentação |
| LGPD — Lei 13.709/2018 | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm | Lei |
| OWASP — Secure Cookie | https://owasp.org/www-community/controls/SecureCookieAttribute | Segurança |

---

**← Aula anterior:** Aula 09 — Autenticação JWT com Fastify
**Próxima aula →** Aula 11 — Organização Modular e Manipulação de Arquivos
