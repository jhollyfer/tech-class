---
slug: "variables-data-types"
modulo: "Módulo 1 — Começando a Programar"
titulo: "Variáveis e Tipos de Dados"
subtitulo: "Guardando informações no programa"
descricao: "let, const, tipos (string, number, boolean), tipagem e inferência em TypeScript."
ordem: 3
proximosPassos:
  - titulo: "Operadores aritméticos"
    descricao: "Faça cálculos e comparações"
  - titulo: "Operadores lógicos"
    descricao: "Combine condições com &&, || e !"
quiz:
  - pergunta: "Qual a diferença entre let e const?"
    opcoes: ["let é mais rápido", "const permite reatribuição, let não", "let permite reatribuição, const não", "Não há diferença"]
    correta: 2
    explicacao: "✓ let deixa mudar o valor. const trava — não muda nunca."
    explicacaoErrada: "✗ let = pode trocar o valor. const = valor fixo. Use const por padrão."
  - pergunta: "Qual o tipo de true e false em TypeScript?"
    opcoes: ["string", "number", "boolean", "binary"]
    correta: 2
    explicacao: "✓ true e false são boolean — verdadeiro e falso."
    explicacaoErrada: "✗ Valores true/false são do tipo boolean."
  - pergunta: "O que typeof 42 retorna?"
    opcoes: ["\"integer\"", "\"number\"", "\"42\"", "\"string\""]
    correta: 1
    explicacao: "✓ typeof 42 retorna \"number\". Inteiros e decimais são ambos number."
    explicacaoErrada: "✗ 42 é número, então typeof retorna \"number\"."
  - pergunta: "O que acontece ao tentar reatribuir uma const?"
    opcoes: ["O valor muda normalmente", "O programa ignora", "Dá erro", "O valor vira undefined"]
    correta: 2
    explicacao: "✓ Reatribuir const dá erro. Ela existe pra garantir que o valor não mude."
    explicacaoErrada: "✗ const = constante. Tentar mudar gera erro."
  - pergunta: "Qual a forma correta de declarar uma variável com tipo em TypeScript?"
    opcoes: ["var nome = string \"Ana\"", "let nome: string = \"Ana\"", "let string nome = \"Ana\"", "nome: string = \"Ana\""]
    correta: 1
    explicacao: "✓ Sintaxe: let nome: tipo = valor. Dois pontos separam nome e tipo."
    explicacaoErrada: "✗ Em TypeScript, tipo vem depois dos dois pontos: let nome: string = \"Ana\"."
---

## O que são variáveis?

Variáveis guardam valores. Pense nelas como gavetas com etiqueta — cada uma tem um nome e guarda algo dentro.

```typescript
let nome: string = "Maria";   // pode mudar depois
const PI: number = 3.14159;   // não pode mudar (constante)
```

## let vs const

- **`let`** — valor pode ser trocado
- **`const`** — valor fixo, não muda

```typescript
let idade: number = 25;
idade = 26; // ✓ OK

const pais: string = "Brasil";
// pais = "Portugal"; // ✗ ERRO! const não permite
```

**Regra:** use `const` por padrão. Só use `let` quando precisar mudar o valor.

> [!info]
> Existe `var`, mas é a forma antiga. Nunca use `var` — sempre `let` ou `const`.

## Tipos primitivos

```typescript
const nome: string = "Ana";              // texto
const idade: number = 20;                // número
const ativo: boolean = true;             // verdadeiro ou falso
const vazio: null = null;                // vazio de propósito
const indefinido: undefined = undefined; // não definido
```

| Tipo | Exemplo | O que é |
|------|---------|---------|
| `string` | `"Olá"`, `'oi'`, `` `hey` `` | Texto |
| `number` | `42`, `3.14`, `-10` | Número (inteiro ou decimal) |
| `boolean` | `true`, `false` | Verdadeiro ou falso |
| `null` | `null` | Vazio intencional |
| `undefined` | `undefined` | Não definido |

## Tipagem em TypeScript

TypeScript não deixa você misturar tipos:

```typescript
let mensagem: string = "Olá";
// mensagem = 42; // ✗ ERRO! número não é string

let contador: number = 0;
// contador = "dez"; // ✗ ERRO! string não é number
```

> [!sucesso]
> TypeScript pega erros ANTES de rodar. É como um corretor ortográfico pro seu código.

## Inferência de tipo

TypeScript é esperto — se você atribui um valor, ele descobre o tipo sozinho:

```typescript
let nome: string = "Carlos"; // tipo explícito
let sobrenome = "Silva";     // TypeScript sabe que é string
```

> [!info]
> Pra quem tá aprendendo, declare o tipo sempre. Ajuda a fixar o conceito.

## Erros comuns

```typescript
// ✗ tipo errado
let preco: number = "29.90"; // string não é number

// ✓ correto
let preco: number = 29.90;

// ✗ reatribuir const
const nome: string = "Ana";
nome = "Bia"; // ERRO

// ✗ usar antes de declarar
console.log(x); // ERRO — x não existe ainda
let x: number = 10;
```

## typeof — descobrindo o tipo

```typescript
console.log(typeof "Olá");     // → "string"
console.log(typeof 42);        // → "number"
console.log(typeof true);      // → "boolean"
console.log(typeof undefined); // → "undefined"
console.log(typeof null);      // → "object" (bug histórico!)
```

> [!alerta]
> `typeof null` retorna `"object"` em vez de `"null"`. É um bug antigo do JavaScript que nunca foi corrigido.

## Exemplo prático: ficha de cadastro

```typescript
const nome: string = "Maria Silva";
const idade: number = 22;
const matricula: string = "2024001";
const ativo: boolean = true;
let faltas: number = 0;

console.log("=== Ficha do Aluno ===");
console.log(`Nome: ${nome}`);           // → Nome: Maria Silva
console.log(`Idade: ${idade} anos`);    // → Idade: 22 anos
console.log(`Matrícula: ${matricula}`); // → Matrícula: 2024001
console.log(`Situação: ${ativo ? "Ativo" : "Inativo"}`); // → Situação: Ativo
console.log(`Faltas: ${faltas}`);       // → Faltas: 0

faltas = faltas + 1;
console.log(`Faltas após registro: ${faltas}`); // → Faltas após registro: 1
```

`faltas` usa `let` porque muda. O resto usa `const` porque é fixo.
