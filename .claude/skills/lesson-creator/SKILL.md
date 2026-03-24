---
name: lesson-creator
description: Gera aulas para o projeto tech-class como arquivos markdown com frontmatter YAML. Use esta skill sempre que o usuario pedir para criar uma aula, gerar conteudo de aula, adicionar uma licao, criar material didatico, ou mencionar "nova aula", "criar aula", "gerar conteudo", "adicionar licao" para qualquer um dos cursos (Programacao, Banco de Dados, Informatica Avancada). Tambem use quando o usuario listar topicos para virar aulas.
---

# Lesson Creator

Skill para gerar aulas do projeto tech-class. Cada aula ensina **um unico conceito**, de forma simples, direta e objetiva.

## Antes de comecar

1. Pergunte ao usuario (se nao ficou claro):
   - **Qual curso?** Programacao, Banco de Dados, ou Informatica Avancada (Word/Excel)
   - **Qual conceito?** Ex: "variaveis", "SELECT", "formatacao de texto"
   - **Qual modulo?** Ex: "Modulo 1 -- Fundamentos"
   - **Qual a ordem?** Numero da aula dentro do curso (ex: 1, 2, 3...)

2. Leia o template de referencia correto antes de gerar:
   - Programacao: `references/template-programacao.md`
   - Banco de Dados: `references/template-banco-dados.md`
   - Informatica Avancada: `references/template-informatica.md`

3. Verifique as aulas existentes no diretorio do curso para evitar duplicatas e manter a numeracao correta.

## Estrutura do arquivo

Cada aula eh um arquivo `.md` com frontmatter YAML + corpo markdown.

### Frontmatter (YAML)

```yaml
---
slug: "nome-do-conceito"
modulo: "Modulo N -- Nome do Modulo"
titulo: "Titulo da Aula"
subtitulo: "Frase curta explicando o que o aluno vai aprender"
descricao: "Descricao breve para listagens (1-2 frases)"
ordem: N
proximosPassos:
  - titulo: "Proximo conceito"
    descricao: "O que vem depois"
  - titulo: "Outro conceito"
    descricao: "Alternativa de estudo"
quiz:
  - pergunta: "Pergunta em portugues?"
    opcoes: ["Opcao A", "Opcao B", "Opcao C", "Opcao D"]
    correta: 0
    explicacao: "Explicacao quando acerta"
    explicacaoErrada: "Explicacao quando erra"
---
```

**Regras do frontmatter:**
- `slug`: kebab-case, sem acentos
- `correta`: indice 0-based da opcao correta
- `quiz`: sempre 4-5 perguntas, sempre 4 opcoes cada
- `proximosPassos`: 2-3 sugestoes de proximos estudos

### Corpo markdown por tipo de curso

#### Curso: Programacao

```markdown
## [Nome do Conceito]

[1-3 paragrafos explicando o conceito de forma simples. Use analogias do dia-a-dia quando possivel.]

> [!info]
> [Dica ou informacao importante sobre o conceito]

## Exemplos

### TypeScript

[Codigo com comentarios mostrando output com // →]

### Python

[Mesmo conceito em Python]

### C++

[Mesmo conceito em C++]

## Exercicios

### Exercicio 1: [Nome descritivo]

[Enunciado claro do que o aluno deve fazer]

### Exercicio 2: [Nome descritivo]

[Enunciado claro do que o aluno deve fazer]

## Referencias

- [Titulo do recurso](URL) -- breve descricao
- [Video/Artigo](URL) -- breve descricao
```

#### Curso: Banco de Dados

```markdown
## [Nome do Conceito]

[Explicacao do conceito SQL/banco de dados]

> [!info]
> [Dica importante]

## Exemplos

### SQL

[Exemplos SQL com comentarios -- resultado esperado]

### Prisma

[Mesmo conceito usando Prisma ORM]

### Drizzle

[Mesmo conceito usando Drizzle ORM]

### Lucid (AdonisJS)

[Mesmo conceito usando Lucid ORM do AdonisJS]

## Exercicios

### Exercicio 1: [Nome descritivo]

[Enunciado com tabela de exemplo se necessario]

### Exercicio 2: [Nome descritivo]

[Enunciado]

## Referencias

- [Recurso](URL) -- descricao
```

#### Curso: Informatica Avancada (Word/Excel)

```markdown
## [Nome do Conceito]

[Explicacao do conceito no Word ou Excel]

> [!info]
> [Dica importante]

## Passo a passo

1. [Primeiro passo com indicacao de menus/botoes em **negrito**]
2. [Segundo passo]
3. [Terceiro passo]

> [!sucesso]
> [Como fica o resultado esperado]

## Exercicios

### Exercicio 1: [Nome descritivo]

[Enunciado pratico]

### Exercicio 2: [Nome descritivo]

[Enunciado pratico]

## Referencias

- [Recurso](URL) -- descricao
```

## Convencoes de escrita

- **Linguagem**: portugues brasileiro, informal mas profissional
- **Tom**: direto, sem enrolacao. Explica como se fosse pra um amigo
- **Codigo**: sempre com comentarios mostrando output (`// →` em TS/C++, `# →` em Python, `-- →` em SQL)
- **Callouts**: use `> [!info]` para dicas, `> [!alerta]` para erros comuns, `> [!sucesso]` para boas praticas
- **1 conceito por aula**: nao misture assuntos. Se "variaveis" eh o tema, nao ensine "funcoes" junto
- **Exercicios**: praticos e resolviveis com o que foi ensinado na aula. Sem pegadinhas

## Onde salvar

- Programacao: `backend/content/programacao/NNN-slug.md`
- Banco de Dados: `backend/content/banco-de-dados/NNN-slug.md`
- Informatica Avancada: `backend/content/informatica-avancada/NNN-slug.md`

O `NNN` eh o numero da ordem com zero-padding (001, 002, 003...).

## Apos gerar

Lembre o usuario que se eh um curso novo, precisa registrar em `backend/app/services/content_service.ts` no objeto `COURSES`.
