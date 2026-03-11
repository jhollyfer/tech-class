# Aula 07 — Introdução ao Fastify e Rotas REST

**Data:** 04/03 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** II — REST APIs com Fastify

---

## 🎯 Objetivos de Aprendizagem

- Entender o que é uma API REST: recursos, verbos HTTP e convenções de nomenclatura
- Memorizar os status codes essenciais e quando usar cada um
- Explicar por que Fastify foi escolhido frente a Express e outras opções
- Criar uma API funcional com rotas GET, POST, PUT e DELETE
- Usar `fastify.register()` para organizar rotas em plugins

---

## 📚 Conteúdo

### 1. O que é uma API REST?

**API (Application Programming Interface):** contrato que define como dois sistemas se comunicam.

**REST (Representational State Transfer):** estilo arquitetural com regras:

- **Sem estado (stateless):** cada requisição é independente
- **Recursos identificados por URL:** `/produtos`, `/usuarios/42`
- **Verbos HTTP expressam ações sobre os recursos**
- **Respostas em formato padronizado** (geralmente JSON)

---

### 2. Verbos HTTP e suas Convenções

| Verbo | Ação | URL exemplo | Resposta sucesso |
|---|---|---|---|
| `GET` | Lê/lista recursos | `GET /produtos` | 200 OK |
| `GET` | Lê um recurso | `GET /produtos/1` | 200 OK |
| `POST` | Cria um recurso | `POST /produtos` | 201 Created |
| `PUT` | Substitui um recurso | `PUT /produtos/1` | 200 OK |
| `PATCH` | Atualiza parcialmente | `PATCH /produtos/1` | 200 OK |
| `DELETE` | Remove um recurso | `DELETE /produtos/1` | 204 No Content |

**Boas práticas de nomenclatura:**
```
✅ /produtos           (plural, substantivo)
✅ /produtos/42        (ID como parâmetro de rota)
✅ /produtos/42/fotos  (recurso aninhado)

❌ /getProdutos        (verbo na URL — desnecessário)
❌ /deletarProduto     (verbo na URL)
❌ /produto            (singular inconsistente)
```

---

### 3. Status Codes Essenciais

| Código | Nome | Quando usar |
|---|---|---|
| **200** | OK | Sucesso geral (GET, PUT, PATCH) |
| **201** | Created | Recurso criado com sucesso (POST) |
| **204** | No Content | Operação sem corpo de resposta (DELETE) |
| **400** | Bad Request | Dados inválidos enviados pelo cliente |
| **401** | Unauthorized | Não autenticado (sem token) |
| **403** | Forbidden | Autenticado mas sem permissão |
| **404** | Not Found | Recurso não existe |
| **422** | Unprocessable Entity | Validação falhou (Zod errors) |
| **500** | Internal Server Error | Bug no servidor |

---

### 4. Por que Fastify?

| Característica | Fastify | Express |
|---|---|---|
| Performance | ⚡ ~80k req/s | ~15k req/s |
| TypeScript nativo | ✅ Generics built-in | ⚠️ Requer @types/express |
| Validação integrada | ✅ JSON Schema / Zod | ❌ Manual |
| Logging | ✅ Pino (JSON estruturado) | ❌ Requer lib extra |
| Plugin system | ✅ Encapsulamento garantido | ❌ Middleware global |
| Tamanho | Leve | Leve |

> **Fastify é o framework padrão do mercado para APIs Node.js em 2025.**

---

### 5. Instalação

```bash
npm install fastify
npm install -D @types/node
```

---

### 6. Anatomia de uma Rota Tipada

```typescript
import Fastify from "fastify"

const app = Fastify({ logger: true })

// Tipagem via generics
app.get<{
  Params: { id: string }    // :id na URL
  Querystring: { page: string }  // ?page=1
  Body: { nome: string }    // body do POST/PUT
  Reply: { mensagem: string }   // resposta
}>("/exemplo/:id", async (request, reply) => {
  const { id } = request.params         // tipado como { id: string }
  const { page } = request.query        // tipado como { page: string }

  return reply.status(200).send({ mensagem: `ID: ${id}` })
})
```

---

### 7. CRUD Completo com Fastify

```typescript
app.get("/produtos", handler)          // lista todos
app.get("/produtos/:id", handler)      // busca por ID
app.post("/produtos", handler)         // cria novo
app.put("/produtos/:id", handler)      // substitui
app.patch("/produtos/:id", handler)    // atualiza parcial
app.delete("/produtos/:id", handler)   // remove
```

---

### 8. `fastify.register()` — Organização por Plugins

```typescript
// ─── src/routes/produto.routes.ts ─────────────────────────
import { FastifyPluginAsync } from "fastify"

const produtoRoutes: FastifyPluginAsync = async (app) => {
  app.get("/", async () => {
    return { produtos: [] }
  })

  app.post("/", async (request, reply) => {
    return reply.status(201).send({ mensagem: "Produto criado" })
  })
}

export default produtoRoutes

// ─── src/app.ts ───────────────────────────────────────────
import Fastify from "fastify"
import produtoRoutes from "./routes/produto.routes.js"

export function buildApp() {
  const app = Fastify({ logger: true })

  app.register(produtoRoutes, { prefix: "/api/produtos" })

  return app
}
```

---

## 💻 Código de Exemplo Completo

```typescript
// src/app.ts — API de embarcações

import Fastify, { FastifyPluginAsync } from "fastify"

// ─── Tipos ────────────────────────────────────────────────
interface Embarcacao {
  id: number
  nome: string
  tipo: "lancha" | "barco_regional" | "balsa"
  capacidade: number
}

// ─── "Banco de dados" em memória ─────────────────────────
let embarcacoes: Embarcacao[] = [
  { id: 1, nome: "Flecha do Javari", tipo: "lancha",         capacidade: 40 },
  { id: 2, nome: "Regional Solimões", tipo: "barco_regional", capacidade: 200 },
]
let proximoId = 3

// ─── Plugin de rotas ──────────────────────────────────────
const embarcacaoRoutes: FastifyPluginAsync = async (app) => {
  // GET /api/embarcacoes
  app.get("/", async () => {
    return embarcacoes
  })

  // GET /api/embarcacoes/:id
  app.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const id = Number(request.params.id)
    const embarcacao = embarcacoes.find(e => e.id === id)
    if (!embarcacao) {
      return reply.status(404).send({ error: "Embarcação não encontrada" })
    }
    return embarcacao
  })

  // POST /api/embarcacoes
  app.post<{ Body: Omit<Embarcacao, "id"> }>("/", async (request, reply) => {
    const nova: Embarcacao = { id: proximoId++, ...request.body }
    embarcacoes.push(nova)
    return reply.status(201).send(nova)
  })

  // DELETE /api/embarcacoes/:id
  app.delete<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const id = Number(request.params.id)
    const tamanhoAntes = embarcacoes.length
    embarcacoes = embarcacoes.filter(e => e.id !== id)
    if (embarcacoes.length === tamanhoAntes) {
      return reply.status(404).send({ error: "Embarcação não encontrada" })
    }
    return reply.status(204).send()
  })
}

// ─── App ──────────────────────────────────────────────────
export function buildApp() {
  const app = Fastify({ logger: true })
  app.register(embarcacaoRoutes, { prefix: "/api/embarcacoes" })
  return app
}

// ─── Server ───────────────────────────────────────────────
const app = buildApp()
app.listen({ port: 3000 }, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000")
})
```

**Testar com curl:**
```bash
# Listar
curl http://localhost:3000/api/embarcacoes

# Buscar por ID
curl http://localhost:3000/api/embarcacoes/1

# Criar
curl -X POST http://localhost:3000/api/embarcacoes \
  -H "Content-Type: application/json" \
  -d '{"nome": "Boto Cor de Rosa", "tipo": "lancha", "capacidade": 20}'

# Deletar
curl -X DELETE http://localhost:3000/api/embarcacoes/3
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Primeira Rota
Crie uma API com Fastify que tenha:
- `GET /` → retorna `{ "mensagem": "API funcionando!", "versao": "1.0.0" }`
- `GET /saude` → retorna `{ "status": "ok", "timestamp": "<data atual>" }`

---

### Exercício 2 — CRUD em Memória
Implemente um CRUD completo para `Aluno` com os campos `id`, `nome`, `matricula` e `curso`.
Usando um array em memória como banco de dados temporário.

---

### Exercício 3 — Organização com Plugins ⭐ (desafio)
Refatore o CRUD do Exercício 2 para seguir a estrutura de pastas:

```
src/
├── app.ts
├── server.ts
├── routes/aluno.routes.ts
├── controllers/aluno.controller.ts
└── services/aluno.service.ts
```

Cada camada deve ter uma responsabilidade clara e isolada.

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| Fastify — Docs Oficiais | https://fastify.dev/docs/latest | Documentação |
| Fastify — TypeScript | https://fastify.dev/docs/latest/Reference/TypeScript | Documentação |
| HTTP Status Codes | https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status | Referência |
| REST API Design | https://restfulapi.net | Artigo |
| Hoppscotch (Postman open source) | https://hoppscotch.io | Ferramenta de teste |

---

**← Aula anterior:** Aula 06 — Módulos, Variáveis de Ambiente e AV1
**Próxima aula →** Aula 08 — Validação de Dados com Zod
