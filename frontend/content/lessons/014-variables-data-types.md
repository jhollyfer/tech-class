---
slug: "variables-data-types"
modulo: "Módulo 3 — Primeiros Programas"
titulo: "Variáveis e Tipos de Dados"
subtitulo: "Armazenando e organizando informações no programa"
descricao: "let, const, tipos primitivos (string, number, boolean), tipagem em TypeScript e conversão entre tipos."
ordem: 14
proximosPassos:
  - titulo: "Entrada e saída"
    descricao: "Leia dados do usuário e exiba resultados"
  - titulo: "Operadores"
    descricao: "Faça cálculos e comparações com variáveis"
  - titulo: "Arrays"
    descricao: "Agrupe múltiplos valores em uma lista"
quiz:
  - pergunta: "Qual a diferença entre let e const?"
    opcoes: ["let é mais rápido", "const permite reatribuição, let não", "let permite reatribuição, const não", "Não há diferença"]
    correta: 2
    explicacao: "✓ let permite mudar o valor depois. const é constante — uma vez atribuído, não muda."
    explicacaoErrada: "✗ let = pode reatribuir. const = constante (valor fixo). Use const por padrão."
  - pergunta: "Qual o tipo de true e false em TypeScript?"
    opcoes: ["string", "number", "boolean", "binary"]
    correta: 2
    explicacao: "✓ true e false são do tipo boolean — representam verdadeiro e falso."
    explicacaoErrada: "✗ Valores lógicos (true/false) são do tipo boolean em TypeScript."
  - pergunta: "O que typeof 42 retorna?"
    opcoes: ["\"integer\"", "\"number\"", "\"42\"", "\"string\""]
    correta: 1
    explicacao: "✓ typeof 42 retorna \"number\". Em JavaScript/TypeScript, inteiros e decimais são ambos 'number'."
    explicacaoErrada: "✗ typeof retorna o tipo do valor. 42 é um número, então retorna \"number\"."
  - pergunta: "O que acontece ao tentar reatribuir uma const?"
    opcoes: ["O valor muda normalmente", "O programa ignora", "Dá erro", "O valor vira undefined"]
    correta: 2
    explicacao: "✓ Tentar reatribuir uma const causa erro. É exatamente para isso que ela serve — garantir que o valor não mude."
    explicacaoErrada: "✗ const = constante. Reatribuir uma constante gera erro de compilação em TypeScript."
  - pergunta: "Qual a forma correta de declarar uma variável com tipo em TypeScript?"
    opcoes: ["var nome = string \"Ana\"", "let nome: string = \"Ana\"", "let string nome = \"Ana\"", "nome: string = \"Ana\""]
    correta: 1
    explicacao: "✓ A sintaxe é: let nomeVariavel: tipo = valor. Os dois pontos separam o nome do tipo."
    explicacaoErrada: "✗ Em TypeScript, o tipo vem após os dois pontos: let nome: string = \"Ana\"."
---

## O que são variáveis?

Variáveis são espaços na memória que guardam valores. Pense nelas como caixas etiquetadas — cada caixa tem um nome e guarda um valor dentro.

Em TypeScript, existem duas formas de criar variáveis:

```typescript
let nome = "Maria";      // pode mudar depois
const PI = 3.14159;       // não pode mudar (constante)
```

O nome da variável é a etiqueta. O valor à direita do `=` é o que vai dentro da caixa.

## let vs const

A diferença é simples:

- **`let`** — o valor pode ser reatribuído (trocado) depois
- **`const`** — o valor é fixo, não muda nunca

```typescript
let idade = 25;
idade = 26;        // ✓ OK com let

const pais = "Brasil";
// pais = "Portugal"; // ✗ ERRO! const não permite reatribuição
```

**Regra prática:** use `const` por padrão. Só use `let` quando precisar mudar o valor depois. Isso torna o código mais seguro e previsível.

## Tipos primitivos

TypeScript tem cinco tipos primitivos principais:

```typescript
const nome: string = "Ana";        // texto
const idade: number = 20;          // número (inteiro ou decimal)
const ativo: boolean = true;       // verdadeiro ou falso
const vazio: null = null;          // ausência intencional de valor
const indefinido: undefined = undefined; // valor não definido
```

| Tipo | Exemplo | Descrição |
|------|---------|-----------|
| string | "Olá" | Texto |
| number | 42, 3.14 | Números |
| boolean | true, false | Lógico |
| null | null | Vazio intencional |
| undefined | undefined | Não definido |

Em JavaScript, não existe tipo separado para inteiro e decimal — tudo é `number`. `42` e `3.14` são ambos `number`.

## Tipagem em TypeScript

TypeScript adiciona tipos estáticos ao JavaScript. Isso significa que você declara o tipo da variável e o compilador garante que só valores daquele tipo sejam atribuídos:

```typescript
let mensagem: string = "Olá";
// mensagem = 42; // ✗ ERRO! TypeScript não permite atribuir número a string
```

Sem TypeScript (JavaScript puro), esse erro só apareceria durante a execução — talvez em produção, com usuários usando o sistema. Com TypeScript, o erro aparece antes de executar, no momento em que você escreve o código.

> [!sucesso]
> TypeScript detecta erros ANTES de executar. É como ter um revisor que lê seu código e avisa quando algo está errado. Quanto mais cedo um erro é encontrado, mais fácil e barato é corrigi-lo.

## typeof — descobrindo o tipo

O operador `typeof` retorna o tipo de qualquer valor:

```typescript
console.log(typeof "Olá");   // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof null);    // "object" (bug histórico do JavaScript)
```

`typeof` é útil para verificar tipos em tempo de execução, especialmente quando você recebe dados de fontes externas (APIs, formulários, arquivos).

```typescript
const valor = "123";

if (typeof valor === "string") {
  console.log("É texto, precisa converter para número");
}
```