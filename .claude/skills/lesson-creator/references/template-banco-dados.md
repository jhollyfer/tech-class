---
slug: "select-basico"
modulo: "Modulo 1 -- Consultas"
titulo: "SELECT Basico"
subtitulo: "Buscando dados em uma tabela"
descricao: "Aprenda a usar o comando SELECT para consultar dados em um banco de dados."
ordem: 1
proximosPassos:
  - titulo: "WHERE"
    descricao: "Filtre os resultados da sua consulta"
  - titulo: "ORDER BY"
    descricao: "Ordene os resultados por uma coluna"
quiz:
  - pergunta: "Para que serve o comando SELECT?"
    opcoes: ["Criar uma tabela", "Buscar dados de uma tabela", "Apagar dados", "Alterar dados"]
    correta: 1
    explicacao: "SELECT eh o comando para buscar (consultar) dados. Eh o mais usado no dia-a-dia."
    explicacaoErrada: "SELECT serve para buscar dados, nao para criar, apagar ou alterar. Para essas acoes existem CREATE, DELETE e UPDATE."
  - pergunta: "O que faz SELECT * FROM alunos?"
    opcoes: ["Apaga todos os alunos", "Retorna todas as colunas de todos os alunos", "Cria a tabela alunos", "Conta quantos alunos existem"]
    correta: 1
    explicacao: "O * (asterisco) significa 'todas as colunas'. Entao SELECT * FROM alunos retorna tudo da tabela alunos."
    explicacaoErrada: "O asterisco (*) eh um coringa que significa 'tudo'. SELECT * FROM alunos busca todas as colunas de todos os registros."
  - pergunta: "Como buscar apenas o nome e email dos alunos?"
    opcoes: ["SELECT nome email FROM alunos", "SELECT nome, email FROM alunos", "SELECT (nome, email) FROM alunos", "GET nome, email FROM alunos"]
    correta: 1
    explicacao: "Listamos as colunas separadas por virgula apos o SELECT. Sem parenteses, sem ponto e virgula entre elas."
    explicacaoErrada: "A sintaxe correta eh: SELECT nome, email FROM alunos. Colunas separadas por virgula, sem parenteses."
  - pergunta: "Qual palavra-chave indica de qual tabela estamos buscando?"
    opcoes: ["IN", "AT", "FROM", "WHERE"]
    correta: 2
    explicacao: "FROM indica a tabela de origem dos dados. SELECT ... FROM tabela."
    explicacaoErrada: "FROM eh a palavra que indica a tabela. A estrutura eh sempre: SELECT colunas FROM tabela."
---

## SELECT Basico

O SELECT eh o comando mais importante do SQL. Ele serve para buscar dados de uma tabela. Toda vez que voce quer ver o que tem no banco de dados, usa SELECT.

A estrutura basica eh: `SELECT o_que FROM de_onde`.

> [!info]
> O asterisco `*` eh um coringa que significa "todas as colunas". Use quando quiser ver tudo, mas no dia-a-dia prefira listar so as colunas que precisa — eh mais rapido e mais claro.

## Exemplos

### SQL

```sql
-- Tabela de exemplo: alunos
-- | id | nome       | email              | nota |
-- |----|------------|--------------------|------|
-- | 1  | Ana Silva  | ana@email.com      | 8.5  |
-- | 2  | Carlos     | carlos@email.com   | 7.0  |
-- | 3  | Maria      | maria@email.com    | 9.2  |

-- Buscar tudo
SELECT * FROM alunos;
-- → Retorna todas as linhas com todas as colunas

-- Buscar colunas especificas
SELECT nome, nota FROM alunos;
-- → Retorna apenas nome e nota de todos os alunos

-- Buscar uma coluna so
SELECT email FROM alunos;
-- → Retorna apenas os emails
```

### Prisma

```typescript
// Buscar tudo
const alunos = await prisma.aluno.findMany()
// → Retorna todos os alunos com todas as colunas

// Buscar colunas especificas
const nomeENota = await prisma.aluno.findMany({
  select: { nome: true, nota: true }
})
// → Retorna apenas nome e nota de todos os alunos

// Buscar uma coluna so
const emails = await prisma.aluno.findMany({
  select: { email: true }
})
// → Retorna apenas os emails
```

### Drizzle

```typescript
import { alunos } from './schema'

// Buscar tudo
const todos = await db.select().from(alunos)
// → Retorna todos os alunos com todas as colunas

// Buscar colunas especificas
const nomeENota = await db.select({
  nome: alunos.nome,
  nota: alunos.nota
}).from(alunos)
// → Retorna apenas nome e nota de todos os alunos

// Buscar uma coluna so
const emails = await db.select({ email: alunos.email }).from(alunos)
// → Retorna apenas os emails
```

### Lucid (AdonisJS)

```typescript
import Aluno from '#models/aluno'

// Buscar tudo
const alunos = await Aluno.all()
// → Retorna todos os alunos com todas as colunas

// Buscar colunas especificas
const nomeENota = await Aluno.query().select('nome', 'nota')
// → Retorna apenas nome e nota de todos os alunos

// Buscar uma coluna so
const emails = await Aluno.query().select('email')
// → Retorna apenas os emails
```

## Exercicios

### Exercicio 1: Lista de produtos

Imagine uma tabela `produtos` com as colunas: id, nome, preco, estoque. Escreva um SELECT que retorne apenas o nome e o preco de todos os produtos.

### Exercicio 2: Dados do funcionario

Imagine uma tabela `funcionarios` com: id, nome, cargo, salario, departamento. Escreva dois SELECTs: um que retorne tudo e outro que retorne apenas nome e cargo.

## Referencias

- [W3Schools — SQL SELECT](https://www.w3schools.com/sql/sql_select.asp) -- tutorial interativo com exemplos
- [Curso em Video — SQL para iniciantes (YouTube)](https://www.youtube.com/watch?v=Ofktsne-utM) -- videoaula em portugues
