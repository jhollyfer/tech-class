# Aula 06 — Módulos, Variáveis de Ambiente e AV1

**Data:** 03/03 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** I — Fundamentos do TypeScript

---

## 🎯 Objetivos de Aprendizagem

- Distinguir ES Modules (`import/export`) de CommonJS (`require`) e saber qual usar
- Organizar projetos com named exports, export default e barrels (`index.ts`)
- Ler e tipar variáveis de ambiente com `process.env`
- Validar variáveis de ambiente em tempo de inicialização com Zod
- Separar responsabilidades em camadas (`routes/`, `controllers/`, `services/`)
- Realizar a AV1 com exercícios práticos de TypeScript puro

---

## 📚 Conteúdo

### 1. ES Modules vs. CommonJS

O Node.js suporta dois sistemas de módulos. O projeto usa **ES Modules**:

| Característica | ES Modules (`import/export`) | CommonJS (`require`) |
|---|---|---|
| Sintaxe | `import { x } from './y'` | `const x = require('./y')` |
| Padrão TypeScript | ✅ Recomendado | ❌ Legado |
| `package.json` | `"type": "module"` | padrão (ou `"type": "commonjs"`) |
| Análise estática | ✅ Sim | ❌ Parcial |
| Tree-shaking | ✅ Sim | ❌ Não |

**`package.json`:**
```json
{
  "type": "module"
}
```

---

### 2. Named Exports vs. Export Default

```typescript
// ─── src/utils/formatters.ts ───────────────────────────────

// Named exports — pode exportar múltiplos
export function formatarMoeda(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

export function formatarData(data: Date): string {
  return data.toLocaleDateString("pt-BR")
}

export const MOEDA_PADRAO = "BRL"

// ─── Importação ───────────────────────────────────────────
import { formatarMoeda, formatarData } from "./utils/formatters.js"
```

```typescript
// ─── Export default — um por arquivo ─────────────────────
// src/app.ts
export default class App {
  // ...
}

// Importação (o nome pode ser qualquer um)
import App from "./app.js"
import MinhaApp from "./app.js"  // também funciona
```

> **Prefira named exports** — mais fáceis de encontrar com autocomplete e refatorar.

---

### 3. Barrels — `index.ts`

Barrel centraliza exports de um diretório, simplificando imports:

```typescript
// ─── src/utils/index.ts (barrel) ──────────────────────────
export * from "./formatters.js"
export * from "./validators.js"
export * from "./constants.js"

// ─── Antes (sem barrel) ───────────────────────────────────
import { formatarMoeda } from "../../utils/formatters.js"
import { validarCPF }    from "../../utils/validators.js"

// ─── Depois (com barrel) ──────────────────────────────────
import { formatarMoeda, validarCPF } from "../../utils/index.js"
```

---

### 4. Variáveis de Ambiente

Variáveis de ambiente guardam configurações sensíveis (senhas, chaves de API, portas) **fora do código**:

```bash
# .env (NUNCA commitar no Git!)
PORT=3000
DATABASE_URL=postgresql://user:senha@localhost:5432/minhadb
JWT_SECRET=minha-chave-super-secreta-min-32-chars
NODE_ENV=development
```

```typescript
// Problema: process.env retorna string | undefined
const porta = process.env.PORT  // tipo: string | undefined
porta.toUpperCase()              // ERRO: porta pode ser undefined
```

---

### 5. Validação de Env com Zod

```typescript
// src/env.ts
import { z } from "zod"

const envSchema = z.object({
  PORT: z.string().transform(Number).default("3000"),
  DATABASE_URL: z.string().url("DATABASE_URL deve ser uma URL válida"),
  JWT_SECRET: z.string().min(32, "JWT_SECRET deve ter pelo menos 32 caracteres"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development")
})

// .parse() lança erro em tempo de inicialização se algo estiver errado
export const env = envSchema.parse(process.env)

// Agora 'env.PORT' é number, não string | undefined
// 'env.NODE_ENV' é "development" | "production" | "test"
```

```typescript
// src/server.ts — usando o env validado
import { env } from "./env.js"

console.log(`Servidor na porta ${env.PORT}`)  // TypeScript sabe que é number
```

---

### 6. Separação de Responsabilidades

```
src/
├── env.ts                    ← variáveis de ambiente validadas
├── app.ts                    ← configuração do Fastify (plugins, rotas)
├── server.ts                 ← inicialização e listen()
├── routes/
│   ├── produto.routes.ts     ← registra as rotas de produto
│   └── usuario.routes.ts
├── controllers/
│   ├── produto.controller.ts ← recebe req/res, chama service
│   └── usuario.controller.ts
└── services/
    ├── produto.service.ts    ← regras de negócio puras
    └── usuario.service.ts
```

**Fluxo de responsabilidade:**
```
HTTP Request
    ↓
  Route (define URL + método HTTP)
    ↓
  Controller (valida entrada, chama service, formata resposta)
    ↓
  Service (lógica de negócio, sem conhecer HTTP)
    ↓
  Repository/DB (acesso a dados) ← veremos nas próximas unidades
```

---

### 7. `app.ts` vs. `server.ts`

```typescript
// ─── src/app.ts ───────────────────────────────────────────
import Fastify from "fastify"

export function buildApp() {
  const app = Fastify({ logger: true })

  // registrar plugins e rotas aqui
  // app.register(produtoRoutes, { prefix: "/api/produtos" })

  return app
}

// ─── src/server.ts ────────────────────────────────────────
import { buildApp } from "./app.js"
import { env } from "./env.js"

const app = buildApp()

app.listen({ port: env.PORT, host: "0.0.0.0" }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
```

> Separar `app.ts` de `server.ts` facilita testes — nos testes você importa `buildApp()` sem iniciar o servidor.

---

## 💻 Código de Exemplo Completo

```typescript
// src/env.ts
import { z } from "zod"

export const env = z.object({
  PORT: z.string().transform(Number).default("3000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  APP_NAME: z.string().default("Sistema Local Amazônia")
}).parse(process.env)

// src/utils/formatters.ts
export function formatarMoeda(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

export function formatarData(data: Date): string {
  return data.toLocaleDateString("pt-BR")
}

// src/utils/index.ts (barrel)
export * from "./formatters.js"

// src/services/produto.service.ts
interface Produto {
  id: number
  nome: string
  preco: number
}

const produtos: Produto[] = [
  { id: 1, nome: "Açaí (litro)", preco: 8.0 },
  { id: 2, nome: "Pirarucu (kg)", preco: 35.0 }
]

export function listarProdutos(): Produto[] {
  return produtos
}

export function buscarProdutoPorId(id: number): Produto | undefined {
  return produtos.find(p => p.id === id)
}

// src/server.ts
import { env } from "./env.js"
import { listarProdutos } from "./services/produto.service.js"
import { formatarMoeda } from "./utils/index.js"

console.log(`🚀 ${env.APP_NAME} — porta ${env.PORT}`)

const lista = listarProdutos()
lista.forEach(p => {
  console.log(`  ${p.nome}: ${formatarMoeda(p.preco)}`)
})
```

---

## 🎓 AV1 — Avaliação (TypeScript Puro)

### Descrição
Desenvolver um **sistema de cadastro e consulta de embarcações** utilizando TypeScript puro (sem frameworks), aplicando todos os conceitos das Aulas 01 a 06.

### Requisitos Obrigatórios

1. **Modelagem com tipos e interfaces** (Aula 02)
   - `Embarcacao`, `Proprietario`, `TipoEmbarcacao` (literal type)

2. **Funções tipadas** (Aula 05)
   - `cadastrarEmbarcacao()`, `listarEmbarcacoes()`, `buscarPorNome()`

3. **Iteração e transformação** (Aula 04)
   - Filtrar por tipo, calcular capacidade total da frota

4. **Módulos organizados** (Aula 06)
   - Separar em pelo menos: `types/`, `services/`, `utils/`

5. **Validação de env** (Aula 06)
   - Ao menos `APP_NAME` e `VERSION` validados com Zod

### Critérios de Avaliação

| Critério | Peso |
|---|---|
| Tipagem correta e sem `any` | 30% |
| Organização em módulos | 25% |
| Funcionalidade completa | 25% |
| Código legível e boas práticas | 20% |

**Entrega:** repositório Git com commits semânticos (Conventional Commits)

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| Node.js — process.env | https://nodejs.org/api/process.html#processenv | Documentação |
| Zod — Getting Started | https://zod.dev | Documentação |
| ES Modules no Node.js | https://nodejs.org/api/esm.html | Documentação |
| Conventional Commits | https://www.conventionalcommits.org/pt-br | Referência |
| .gitignore para Node | https://github.com/github/gitignore/blob/main/Node.gitignore | Template |

---

**← Aula anterior:** Aula 05 — Funções Tipadas e Generics
**Próxima aula →** Aula 07 — Introdução ao Fastify e Rotas REST
