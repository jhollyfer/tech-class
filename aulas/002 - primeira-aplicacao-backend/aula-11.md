# Aula 11 — Organização Modular e Manipulação de Arquivos

**Data:** 10/03 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** II — REST APIs com Fastify

---

## 🎯 Objetivos de Aprendizagem

- Usar o módulo nativo `fs/promises` para operações de arquivo
- Compreender o conceito de Streams e quando utilizá-las
- Implementar upload de arquivos com `@fastify/multipart` com segurança
- Servir arquivos estáticos com `@fastify/static`
- Configurar o Pino Logger para logging estruturado em desenvolvimento e produção
- Consolidar a separação de camadas: routes, controllers, services

---

## 📚 Conteúdo

### 1. `fs/promises` — Sistema de Arquivos Nativo

O módulo `fs/promises` é nativo do Node.js — não precisa instalar:

```typescript
import { readFile, writeFile, appendFile, mkdir, stat, unlink } from "fs/promises"
import { join } from "path"
```

**Operações essenciais:**

```typescript
const PASTA_DADOS = "./dados"

// Criar diretório (recursive: não falha se já existir)
await mkdir(PASTA_DADOS, { recursive: true })

// Escrever arquivo (sobrescreve se existir)
await writeFile(join(PASTA_DADOS, "config.json"), JSON.stringify({ versao: "1.0" }, null, 2))

// Ler arquivo
const conteudo = await readFile(join(PASTA_DADOS, "config.json"), "utf-8")
const config = JSON.parse(conteudo)

// Adicionar ao final do arquivo (logs, por exemplo)
await appendFile(join(PASTA_DADOS, "app.log"), `[${new Date().toISOString()}] Servidor iniciado\n`)

// Verificar se arquivo existe
const info = await stat(join(PASTA_DADOS, "config.json"))
console.log(`Arquivo criado em: ${info.birthtime}`)
console.log(`Tamanho: ${info.size} bytes`)

// Deletar arquivo
await unlink(join(PASTA_DADOS, "temp.txt"))
```

---

### 2. Streams — Processamento em Partes

Streams permitem ler/escrever dados **em partes** sem carregar tudo na memória. Fundamentais para:
- Arquivos grandes (logs, backups, vídeos)
- Upload/download de arquivos
- Leitura de CSV linha a linha

```typescript
import { createReadStream, createWriteStream } from "fs"

// Copiar arquivo grande sem carregar na memória
const origem  = createReadStream("./relatorio-2025.csv")
const destino = createWriteStream("./backup/relatorio-2025.csv")

origem.pipe(destino)

destino.on("finish", () => {
  console.log("Cópia concluída!")
})
```

**Stream de leitura linha a linha:**
```typescript
import { createInterface } from "readline"

const rl = createInterface({
  input: createReadStream("./dados/manifesto.csv")
})

for await (const linha of rl) {
  const [nome, destino, bagagem] = linha.split(",")
  console.log(`Processando: ${nome} → ${destino}`)
}
```

---

### 3. Upload com `@fastify/multipart`

```bash
npm install @fastify/multipart
```

```typescript
import multipart from "@fastify/multipart"
import { join } from "path"
import { createWriteStream } from "fs"
import { mkdir } from "fs/promises"
import { pipeline } from "stream/promises"

app.register(multipart, {
  limits: {
    fileSize: 5 * 1024 * 1024,  // 5 MB máximo
    files: 3                      // máximo 3 arquivos por upload
  }
})

// Rota de upload
app.post("/upload", async (request, reply) => {
  const PASTA_UPLOADS = "./uploads"
  await mkdir(PASTA_UPLOADS, { recursive: true })

  const arquivo = await request.file()

  if (!arquivo) {
    return reply.status(400).send({ error: "Nenhum arquivo enviado" })
  }

  // Validar tipo MIME
  const tiposPermitidos = ["image/jpeg", "image/png", "application/pdf"]
  if (!tiposPermitidos.includes(arquivo.mimetype)) {
    return reply.status(422).send({
      error: "Tipo de arquivo não permitido",
      permitidos: tiposPermitidos
    })
  }

  // Salvar arquivo com nome seguro
  const nomeArquivo = `${Date.now()}-${arquivo.filename.replace(/[^a-zA-Z0-9._-]/g, "_")}`
  const caminhoSalvar = join(PASTA_UPLOADS, nomeArquivo)

  await pipeline(arquivo.file, createWriteStream(caminhoSalvar))

  return reply.status(201).send({
    mensagem: "Arquivo enviado com sucesso",
    arquivo: nomeArquivo,
    tipo: arquivo.mimetype
  })
})
```

---

### 4. Arquivos Estáticos com `@fastify/static`

```bash
npm install @fastify/static
```

```typescript
import fastifyStatic from "@fastify/static"
import { join } from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

app.register(fastifyStatic, {
  root:   join(__dirname, "../public"),
  prefix: "/static/"
})

// Agora arquivos em /public/ são servidos como /static/arquivo.pdf
// Exemplo: GET /static/manual.pdf
```

---

### 5. Pino Logger — Logging Estruturado

O Fastify usa **Pino** como logger padrão. Pino é extremamente rápido e produz JSON estruturado:

```typescript
// Configuração em app.ts
const app = Fastify({
  logger: env.NODE_ENV === "development"
    ? {
        level: "info",
        transport: {
          target: "pino-pretty",  // formato legível em desenvolvimento
          options: { colorize: true }
        }
      }
    : {
        level: "info"  // JSON puro em produção (para Datadog, CloudWatch, etc.)
      }
})
```

```bash
npm install -D pino-pretty
```

**Usando o logger nas rotas:**
```typescript
app.get("/produtos", async (request, reply) => {
  request.log.info("Listando produtos")
  request.log.warn({ filtro: "preco>100" }, "Filtro aplicado")

  try {
    const produtos = await listarProdutos()
    return produtos
  } catch (erro) {
    request.log.error({ erro }, "Erro ao listar produtos")
    return reply.status(500).send({ error: "Erro interno" })
  }
})
```

**Saída em desenvolvimento (pino-pretty):**
```
[10:32:15] INFO: Listando produtos
[10:32:15] INFO: request completed { statusCode: 200, responseTime: 2.3 }
```

**Saída em produção (JSON):**
```json
{"level":30,"time":1709123535000,"msg":"Listando produtos","reqId":"req-1"}
```

---

### 6. Separação Final de Camadas

```
src/
├── env.ts
├── app.ts                          ← Fastify + plugins
├── server.ts                       ← listen()
│
├── routes/
│   ├── index.ts                    ← barrel de rotas
│   └── embarcacao.routes.ts
│
├── controllers/
│   └── embarcacao.controller.ts    ← req/reply, chama service
│
├── services/
│   └── embarcacao.service.ts       ← regras de negócio
│
├── schemas/
│   └── embarcacao.schema.ts        ← schemas Zod
│
├── hooks/
│   └── autenticar.ts               ← preHandlers reutilizáveis
│
└── utils/
    ├── arquivo.utils.ts            ← helpers de fs
    └── index.ts                    ← barrel
```

**Responsabilidade de cada camada:**

| Camada | Responsabilidade | Conhece HTTP? |
|---|---|---|
| Route | Registrar URL + verbo + preHandlers | ✅ |
| Controller | Validar entrada, chamar service, formatar resposta | ✅ |
| Service | Lógica de negócio pura | ❌ |
| Schema | Definição de tipos e validações Zod | ❌ |
| Hook | Middleware reutilizável (auth, logging) | ✅ |
| Utils | Funções auxiliares sem efeitos colaterais | ❌ |

---

## 💻 Código de Exemplo Completo

```typescript
// src/utils/arquivo.utils.ts

import { readFile, writeFile, mkdir } from "fs/promises"
import { join } from "path"

const PASTA_DB = "./db"

export async function lerJSON<T>(arquivo: string): Promise<T | null> {
  try {
    const conteudo = await readFile(join(PASTA_DB, `${arquivo}.json`), "utf-8")
    return JSON.parse(conteudo) as T
  } catch {
    return null
  }
}

export async function salvarJSON<T>(arquivo: string, dados: T): Promise<void> {
  await mkdir(PASTA_DB, { recursive: true })
  await writeFile(
    join(PASTA_DB, `${arquivo}.json`),
    JSON.stringify(dados, null, 2),
    "utf-8"
  )
}

// src/services/embarcacao.service.ts

import { lerJSON, salvarJSON } from "../utils/arquivo.utils.js"

interface Embarcacao {
  id: number
  nome: string
  tipo: string
  capacidade: number
}

export async function listarEmbarcacoes(): Promise<Embarcacao[]> {
  return (await lerJSON<Embarcacao[]>("embarcacoes")) ?? []
}

export async function criarEmbarcacao(dados: Omit<Embarcacao, "id">): Promise<Embarcacao> {
  const lista = await listarEmbarcacoes()
  const nova: Embarcacao = { id: Date.now(), ...dados }
  await salvarJSON("embarcacoes", [...lista, nova])
  return nova
}

// src/controllers/embarcacao.controller.ts

import { FastifyRequest, FastifyReply } from "fastify"
import { listarEmbarcacoes, criarEmbarcacao } from "../services/embarcacao.service.js"
import { schemaCriarEmbarcacao } from "../schemas/embarcacao.schema.js"

export async function handleListar(_req: FastifyRequest, reply: FastifyReply) {
  const embarcacoes = await listarEmbarcacoes()
  return reply.send(embarcacoes)
}

export async function handleCriar(request: FastifyRequest, reply: FastifyReply) {
  const resultado = schemaCriarEmbarcacao.safeParse(request.body)
  if (!resultado.success) {
    return reply.status(422).send({ error: "Dados inválidos", detalhes: resultado.error.issues })
  }

  const nova = await criarEmbarcacao(resultado.data)
  return reply.status(201).send(nova)
}
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — CRUD com JSON como Banco
Implemente um CRUD completo de `Produto` que persiste os dados em um arquivo `db/produtos.json`. Ao reiniciar o servidor, os dados devem continuar salvos.

---

### Exercício 2 — Upload de Documentos
Adicione ao sistema de cadastro de embarcações a possibilidade de enviar a **documentação da embarcação** (PDF, máx. 2MB).
- Validar tipo MIME
- Salvar com nome baseado no ID da embarcação
- Retornar URL para download

---

### Exercício 3 — Logger Customizado ⭐ (desafio)
Crie um sistema de log de auditoria que:
1. Registra em `logs/auditoria.log` toda requisição autenticada
2. Cada linha: `[timestamp] [usuarioId] [método] [rota] [statusCode]`
3. Implementado como hook `onResponse` global
4. Usa `appendFile` de forma assíncrona sem bloquear a resposta

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| Node.js — fs/promises | https://nodejs.org/api/fs.html#promises-api | Documentação |
| @fastify/multipart | https://github.com/fastify/fastify-multipart | Documentação |
| @fastify/static | https://github.com/fastify/fastify-static | Documentação |
| Pino Logger | https://getpino.io | Documentação |
| Node.js Streams | https://nodejs.org/api/stream.html | Documentação |

---

**← Aula anterior:** Aula 10 — Sessões, Cookies e LGPD
**Próxima aula →** Aula 12 — OOP com TypeScript: Classes e Herança
