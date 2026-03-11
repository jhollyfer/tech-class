# Aula 08 — Validação de Dados com Zod

**Data:** 05/03 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** II — REST APIs com Fastify

---

## 🎯 Objetivos de Aprendizagem

- Entender por que validar dados de entrada é essencial para segurança e integridade
- Criar schemas Zod com os validadores mais comuns
- Derivar tipos TypeScript automaticamente a partir de schemas Zod com `z.infer<>`
- Tratar e formatar erros de validação para o cliente
- Integrar Zod ao Fastify para validar body, params e querystring

---

## 📚 Conteúdo

### 1. Por que Validar Dados de Entrada?

Sem validação, o cliente pode enviar qualquer coisa:

```json
// O que você espera:
{ "nome": "Açaí", "preco": 8.5, "estoque": 100 }

// O que pode chegar:
{ "nome": "", "preco": "muito caro", "estoque": -999, "injetarScript": "<script>alert('xss')</script>" }
```

**Consequências de não validar:**
- Dados corrompidos no banco
- Erros inesperados em produção
- Vulnerabilidades de segurança (SQL Injection, XSS)
- Experiência ruim para o usuário (sem mensagem de erro clara)

---

### 2. Instalação do Zod

```bash
npm install zod
```

---

### 3. Tipos Primitivos do Zod

```typescript
import { z } from "zod"

// Primitivos
const nome    = z.string()
const preco   = z.number()
const ativo   = z.boolean()
const id      = z.number().int().positive()
const data    = z.string().datetime()

// Com validações encadeadas
const email   = z.string().email("E-mail inválido")
const senha   = z.string().min(8, "Mínimo 8 caracteres").max(100)
const cpf     = z.string().length(11, "CPF deve ter 11 dígitos")
const preco2  = z.number().positive("Preço deve ser positivo").max(999999)
const pagina  = z.number().int().min(1).default(1)
```

---

### 4. `z.object()` — Schema de Objeto

```typescript
const schemaProduto = z.object({
  nome: z.string().min(2, "Nome muito curto").max(100),
  preco: z.number().positive("Preço deve ser positivo"),
  categoria: z.enum(["alimento", "bebida", "limpeza"]),
  estoque: z.number().int().min(0).default(0),
  descricao: z.string().optional()  // opcional
})

// Derivar o tipo TypeScript automaticamente
type Produto = z.infer<typeof schemaProduto>
// Equivale a:
// type Produto = {
//   nome: string;
//   preco: number;
//   categoria: "alimento" | "bebida" | "limpeza";
//   estoque: number;
//   descricao?: string | undefined;
// }
```

> `z.infer<typeof schema>` elimina duplicação: você define a validação e o tipo **em um só lugar**.

---

### 5. Parsing e Erros

```typescript
// .parse() — lança ZodError se inválido
const produto = schemaProduto.parse({
  nome: "Açaí",
  preco: 8.5,
  categoria: "alimento"
})
// produto.estoque === 0 (valor padrão aplicado)

// .safeParse() — retorna objeto com success + data ou error (sem lançar exceção)
const resultado = schemaProduto.safeParse({
  nome: "",         // muito curto
  preco: -5,        // negativo
  categoria: "xyz"  // inválido
})

if (!resultado.success) {
  console.log(resultado.error.issues)
  // [
  //   { path: ["nome"], message: "Nome muito curto" },
  //   { path: ["preco"], message: "Preço deve ser positivo" },
  //   { path: ["categoria"], message: "Invalid enum value" },
  // ]
}
```

---

### 6. Transformações e Refinamentos

```typescript
// .transform() — transforma o valor após validação
const schemaComTransform = z.object({
  nome: z.string().transform(s => s.trim().toLowerCase()),
  preco: z.string().transform(Number),   // converte "8.5" → 8.5
})

// .refine() — validação customizada
const schemaSenha = z.object({
  senha: z.string().min(8),
  confirmarSenha: z.string().min(8)
}).refine(data => data.senha === data.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"]
})
```

---

### 7. Schemas para Params e Querystring

```typescript
// Params de rota: /produtos/:id
const schemaParams = z.object({
  id: z.string().transform(Number).pipe(z.number().int().positive())
})

// Querystring: ?page=1&limite=10&categoria=alimento
const schemaQuery = z.object({
  page:      z.string().optional().transform(v => Number(v ?? "1")),
  limite:    z.string().optional().transform(v => Number(v ?? "10")),
  categoria: z.enum(["alimento", "bebida", "limpeza"]).optional()
})
```

---

### 8. Integração Zod + Fastify

```typescript
import { FastifyPluginAsync } from "fastify"
import { z } from "zod"

const schemaCriarProduto = z.object({
  nome:      z.string().min(2).max(100),
  preco:     z.number().positive(),
  categoria: z.enum(["alimento", "bebida", "limpeza"])
})

type CriarProdutoBody = z.infer<typeof schemaCriarProduto>

const produtoRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: CriarProdutoBody }>("/", async (request, reply) => {
    // Validar manualmente com safeParse
    const resultado = schemaCriarProduto.safeParse(request.body)

    if (!resultado.success) {
      return reply.status(422).send({
        error: "Dados inválidos",
        detalhes: resultado.error.issues.map(i => ({
          campo: i.path.join("."),
          mensagem: i.message
        }))
      })
    }

    const produto = resultado.data
    // ... salvar produto
    return reply.status(201).send(produto)
  })
}
```

---

## 💻 Código de Exemplo Completo

```typescript
// src/schemas/embarcacao.schema.ts

import { z } from "zod"

export const schemaCriarEmbarcacao = z.object({
  nome: z.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  tipo: z.enum(["lancha", "barco_regional", "balsa", "canoa_motor"], {
    errorMap: () => ({ message: "Tipo de embarcação inválido" })
  }),
  capacidadePassageiros: z.number()
    .int("Deve ser número inteiro")
    .min(1, "Capacidade mínima é 1 passageiro")
    .max(1000),
  capacidadeCargaKg: z.number()
    .positive("Carga deve ser positiva")
    .max(100000),
  proprietario: z.string().min(3),
  ativa: z.boolean().default(true)
})

export const schemaAtualizarEmbarcacao = schemaCriarEmbarcacao.partial()

export const schemaParamsId = z.object({
  id: z.string().transform(Number).pipe(z.number().int().positive("ID inválido"))
})

export const schemaQueryListar = z.object({
  tipo: z.enum(["lancha", "barco_regional", "balsa", "canoa_motor"]).optional(),
  ativa: z.string().optional().transform(v => v === "true"),
  page: z.string().optional().transform(v => Number(v ?? "1")),
  limite: z.string().optional().transform(v => Number(v ?? "10"))
})

// Tipos derivados
export type CriarEmbarcacaoBody = z.infer<typeof schemaCriarEmbarcacao>
export type AtualizarEmbarcacaoBody = z.infer<typeof schemaAtualizarEmbarcacao>
export type ParamsId = z.infer<typeof schemaParamsId>

// ─── src/routes/embarcacao.routes.ts ─────────────────────
import { FastifyPluginAsync } from "fastify"
import {
  schemaCriarEmbarcacao,
  schemaParamsId,
  schemaQueryListar,
  CriarEmbarcacaoBody,
  ParamsId
} from "../schemas/embarcacao.schema.js"

const embarcacaoRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: CriarEmbarcacaoBody }>("/", async (request, reply) => {
    const resultado = schemaCriarEmbarcacao.safeParse(request.body)

    if (!resultado.success) {
      return reply.status(422).send({
        error: "Dados inválidos",
        detalhes: resultado.error.issues.map(i => ({
          campo: i.path.join("."),
          mensagem: i.message
        }))
      })
    }

    // Dados validados e tipados corretamente
    const { nome, tipo, capacidadePassageiros } = resultado.data
    console.log(`Nova embarcação: ${nome} (${tipo}) — ${capacidadePassageiros} passageiros`)

    return reply.status(201).send({ id: Date.now(), ...resultado.data })
  })
}

export default embarcacaoRoutes
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Schemas Básicos
Crie schemas Zod para as seguintes entidades com validações adequadas:

1. `Usuario` — nome (min 3), email (formato), senha (min 8), cpf (exatamente 11 dígitos), dataNascimento
2. `Endereco` — rua (min 5), numero (positivo), cep (exatamente 8 dígitos), cidade, estado (exatamente 2 letras)

---

### Exercício 2 — Integração com Fastify
Adicione validação Zod às rotas do CRUD de Aluno criado na Aula 07. Todas as rotas devem:
- Validar o body nas rotas POST e PUT
- Validar o parâmetro `:id` nas rotas que usam ID
- Retornar 422 com detalhes dos campos inválidos

---

### Exercício 3 — Schema Avançado ⭐ (desafio)
Crie um schema para um formulário de **compra de passagem fluvial** com:
- Passageiro (nome, cpf, telefone)
- Trajeto (origem, destino — não podem ser iguais, use `.refine()`)
- Data de viagem (deve ser data futura, use `.refine()`)
- Número de bagagens (0 a 5)
- Peso total da bagagem (máx. 50kg por passageiro)

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| Zod — Documentação oficial | https://zod.dev | Documentação |
| Zod — Primitives | https://zod.dev/?id=primitives | Referência |
| Zod — Error handling | https://zod.dev/?id=error-handling | Documentação |
| Artigo: Zod + Fastify | https://dev.to/franciscomendes10866/using-zod-with-fastify | Artigo |

---

**← Aula anterior:** Aula 07 — Introdução ao Fastify e Rotas REST
**Próxima aula →** Aula 09 — Autenticação JWT com Fastify
