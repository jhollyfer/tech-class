# Aula 09 — Autenticação JWT com Fastify

**Data:** 06/03 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** II — REST APIs com Fastify

---

## 🎯 Objetivos de Aprendizagem

- Diferenciar autenticação stateless (JWT) de stateful (sessão)
- Entender a estrutura interna de um JWT: header, payload e signature
- Implementar registro e login com hash de senha via `bcryptjs`
- Configurar e usar `@fastify/jwt` para assinar e verificar tokens
- Criar um hook `autenticar` reutilizável como `preHandler`
- Proteger rotas privadas e adotar boas práticas de segurança

---

## 📚 Conteúdo

### 1. Autenticação Stateless vs. Stateful

| | Stateless (JWT) | Stateful (Sessão) |
|---|---|---|
| Estado guardado em | **Token no cliente** | **Servidor (memória/DB)** |
| Escalabilidade | ✅ Alta (qualquer servidor valida) | ⚠️ Requer sessão compartilhada |
| Revogação | ⚠️ Complexa (blacklist) | ✅ Simples (apaga a sessão) |
| Overhead | Baixo (sem busca no DB) | Alto (consulta por requisição) |
| Uso ideal | APIs REST, microsserviços | Web apps tradicionais |

---

### 2. Estrutura de um JWT

Um JWT é composto por três partes separadas por `.`:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9     ← Header (Base64)
.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4LmNvbSIsImlhdCI6MTcwMH0  ← Payload (Base64)
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c              ← Signature (HMAC)
```

**Header:**
```json
{ "alg": "HS256", "typ": "JWT" }
```

**Payload (claims):**
```json
{
  "id": 1,
  "email": "usuario@exemplo.com",
  "role": "admin",
  "iat": 1700000000,   // issued at
  "exp": 1700086400    // expiration
}
```

> ⚠️ O payload é apenas **codificado em Base64**, não criptografado. Nunca coloque senhas ou dados sensíveis no JWT.

Visualize em: **https://jwt.io**

---

### 3. Instalação

```bash
npm install @fastify/jwt bcryptjs
npm install -D @types/bcryptjs
```

---

### 4. Configuração do `@fastify/jwt`

```typescript
// src/app.ts
import Fastify from "fastify"
import jwt from "@fastify/jwt"
import { env } from "./env.js"

export function buildApp() {
  const app = Fastify({ logger: true })

  app.register(jwt, {
    secret: env.JWT_SECRET,
    sign: { expiresIn: "1d" }
  })

  return app
}
```

**`.env`:**
```
JWT_SECRET=minha-chave-super-secreta-com-pelo-menos-32-caracteres
```

---

### 5. Hash de Senha com `bcryptjs`

```typescript
import bcrypt from "bcryptjs"

// Hash (ao criar conta) — bcrypt é lento por design (proteção contra brute force)
const senhaHash = await bcrypt.hash("senha123", 10)
// 10 = salt rounds (custo computacional)

// Verificação (ao fazer login)
const senhaCorreta = await bcrypt.compare("senha123", senhaHash)  // true
const senhaErrada  = await bcrypt.compare("outra", senhaHash)     // false
```

> **Nunca** guarde senhas em texto puro. Sempre use bcrypt.

---

### 6. Rotas de Autenticação

```typescript
// POST /auth/registro
// POST /auth/login

interface UsuarioDB {
  id: number
  nome: string
  email: string
  senhaHash: string
}

const usuarios: UsuarioDB[] = []

const authRoutes: FastifyPluginAsync = async (app) => {
  // Registro
  app.post<{ Body: { nome: string; email: string; senha: string } }>(
    "/registro",
    async (request, reply) => {
      const { nome, email, senha } = request.body

      const existe = usuarios.find(u => u.email === email)
      if (existe) {
        return reply.status(409).send({ error: "E-mail já cadastrado" })
      }

      const senhaHash = await bcrypt.hash(senha, 10)
      const usuario: UsuarioDB = { id: usuarios.length + 1, nome, email, senhaHash }
      usuarios.push(usuario)

      return reply.status(201).send({ mensagem: "Usuário criado com sucesso" })
    }
  )

  // Login
  app.post<{ Body: { email: string; senha: string } }>(
    "/login",
    async (request, reply) => {
      const { email, senha } = request.body

      const usuario = usuarios.find(u => u.email === email)
      if (!usuario) {
        return reply.status(401).send({ error: "Credenciais inválidas" })
      }

      const senhaCorreta = await bcrypt.compare(senha, usuario.senhaHash)
      if (!senhaCorreta) {
        return reply.status(401).send({ error: "Credenciais inválidas" })
      }

      const token = app.jwt.sign({ id: usuario.id, email: usuario.email })
      return { token }
    }
  )
}
```

---

### 7. Hook `autenticar` Reutilizável

```typescript
// src/hooks/autenticar.ts
import { FastifyRequest, FastifyReply } from "fastify"

export async function autenticar(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  try {
    await request.jwtVerify()
  } catch {
    reply.status(401).send({ error: "Token inválido ou ausente" })
  }
}
```

**Usando como `preHandler`:**

```typescript
// Rota protegida — qualquer método
app.get("/perfil", { preHandler: [autenticar] }, async (request) => {
  const payload = request.user as { id: number; email: string }
  return { mensagem: `Olá, usuário ${payload.id}` }
})
```

---

## 💻 Código de Exemplo Completo

```typescript
// src/routes/auth.routes.ts

import { FastifyPluginAsync } from "fastify"
import bcrypt from "bcryptjs"
import { z } from "zod"

interface UsuarioDB {
  id: number
  nome: string
  email: string
  senhaHash: string
  role: "aluno" | "professor" | "admin"
}

const usuarios: UsuarioDB[] = []

const schemaRegistro = z.object({
  nome:  z.string().min(3),
  email: z.string().email(),
  senha: z.string().min(8)
})

const schemaLogin = z.object({
  email: z.string().email(),
  senha: z.string()
})

export const authRoutes: FastifyPluginAsync = async (app) => {
  // POST /auth/registro
  app.post("/registro", async (request, reply) => {
    const resultado = schemaRegistro.safeParse(request.body)
    if (!resultado.success) {
      return reply.status(422).send({ error: "Dados inválidos", detalhes: resultado.error.issues })
    }

    const { nome, email, senha } = resultado.data

    if (usuarios.some(u => u.email === email)) {
      return reply.status(409).send({ error: "E-mail já cadastrado" })
    }

    const senhaHash = await bcrypt.hash(senha, 10)
    const usuario: UsuarioDB = {
      id: usuarios.length + 1,
      nome,
      email,
      senhaHash,
      role: "aluno"
    }
    usuarios.push(usuario)

    return reply.status(201).send({ mensagem: "Conta criada com sucesso!" })
  })

  // POST /auth/login
  app.post("/login", async (request, reply) => {
    const resultado = schemaLogin.safeParse(request.body)
    if (!resultado.success) {
      return reply.status(422).send({ error: "Dados inválidos" })
    }

    const { email, senha } = resultado.data
    const usuario = usuarios.find(u => u.email === email)

    // Mensagem genérica — não revelar se o email existe
    if (!usuario || !(await bcrypt.compare(senha, usuario.senhaHash))) {
      return reply.status(401).send({ error: "Credenciais inválidas" })
    }

    const token = app.jwt.sign({
      id:    usuario.id,
      email: usuario.email,
      role:  usuario.role
    })

    return { token, tipo: "Bearer" }
  })

  // GET /auth/me — rota protegida
  app.get("/me", {
    preHandler: [async (request, reply) => {
      try {
        await request.jwtVerify()
      } catch {
        reply.status(401).send({ error: "Não autenticado" })
      }
    }]
  }, async (request) => {
    return { usuario: request.user }
  })
}
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Hash na Prática
Crie um script separado que:
1. Gera hashes de 3 senhas diferentes
2. Testa a comparação correta e incorreta
3. Mostra o tempo que cada hash leva com `salt rounds` de 10 e 12

---

### Exercício 2 — Auth Completo
Implemente as rotas `/auth/registro` e `/auth/login` para um sistema de **cadastro de pescadores** com:
- Campos: nome, cpf, email, senha, licencaPesca
- Login retorna JWT com `{ id, nome, licencaPesca }`
- Rota `GET /pescadores/meu-perfil` — protegida, retorna os dados do usuário logado

---

### Exercício 3 — Autorização por Role ⭐ (desafio)
Implemente um middleware de autorização que verifica o campo `role` no payload do JWT:

```typescript
// criarAutorizador(rolesPermitidos: string[]) → preHandler
// Uso:
app.delete("/admin/usuarios/:id", {
  preHandler: [autenticar, criarAutorizador(["admin"])]
}, handler)
```

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| @fastify/jwt — Docs | https://github.com/fastify/fastify-jwt | Documentação |
| JWT.io — Debugger | https://jwt.io | Ferramenta |
| bcryptjs — npm | https://www.npmjs.com/package/bcryptjs | Pacote |
| OWASP — Password Storage | https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html | Segurança |
| Artigo: JWT boas práticas | https://curity.io/resources/learn/jwt-best-practices | Leitura |

---

**← Aula anterior:** Aula 08 — Validação de Dados com Zod
**Próxima aula →** Aula 10 — Sessões, Cookies e LGPD
