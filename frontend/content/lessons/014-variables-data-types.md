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

## O que sao variaveis?

Variaveis sao espacos na memoria que guardam valores. Pense nelas como caixas etiquetadas — cada caixa tem um nome e guarda um valor dentro.

Em TypeScript, existem duas formas de criar variaveis:

```typescript
let nome: string = "Maria";   // pode mudar depois
const PI: number = 3.14159;   // não pode mudar (constante)
```

O nome da variavel e a etiqueta. O valor a direita do `=` e o que vai dentro da caixa. Os dois pontos (`:`) seguidos do tipo dizem ao TypeScript que tipo de valor a caixa aceita.

## let vs const

A diferenca e simples:

- **`let`** — o valor pode ser reatribuido (trocado) depois
- **`const`** — o valor e fixo, nao muda nunca

```typescript
let idade: number = 25;
idade = 26;        // ✓ OK com let

const pais: string = "Brasil";
// pais = "Portugal"; // ✗ ERRO! const não permite reatribuição
```

**Regra pratica:** use `const` por padrao. So use `let` quando precisar mudar o valor depois. Isso torna o codigo mais seguro e previsivel.

> [!info]
> Existe tambem a palavra-chave `var`, que e a forma antiga de declarar variaveis. Ela ainda funciona, mas **nunca use `var`** em codigo novo. Sempre prefira `let` ou `const`.

## Tipos primitivos

TypeScript tem cinco tipos primitivos principais:

```typescript
const nome: string = "Ana";              // texto
const idade: number = 20;                // número (inteiro ou decimal)
const ativo: boolean = true;             // verdadeiro ou falso
const vazio: null = null;                // ausência intencional de valor
const indefinido: undefined = undefined; // valor não definido
```

| Tipo | Exemplo | Descricao |
|------|---------|-----------|
| `string` | `"Ola"`, `'mundo'`, `` `oi` `` | Texto |
| `number` | `42`, `3.14`, `-10` | Numeros inteiros e decimais |
| `boolean` | `true`, `false` | Verdadeiro ou falso |
| `null` | `null` | Vazio intencional |
| `undefined` | `undefined` | Nao definido |

Em JavaScript/TypeScript, nao existe tipo separado para inteiro e decimal — tudo e `number`. `42` e `3.14` sao ambos `number`.

## Tipagem em TypeScript

TypeScript adiciona tipos estaticos ao JavaScript. Voce declara o tipo da variavel e o compilador garante que so valores daquele tipo sejam atribuidos:

```typescript
let mensagem: string = "Olá";
// mensagem = 42; // ✗ ERRO! TypeScript não permite atribuir número a string

let contador: number = 0;
// contador = "dez"; // ✗ ERRO! TypeScript não permite atribuir string a number
```

Sem TypeScript (JavaScript puro), esses erros so apareceriam durante a execucao — talvez em producao, com usuarios usando o sistema. Com TypeScript, o erro aparece antes de executar, no momento em que voce escreve o codigo.

> [!sucesso]
> TypeScript detecta erros ANTES de executar. E como ter um revisor que le seu codigo e avisa quando algo esta errado. Quanto mais cedo um erro e encontrado, mais facil e barato e corrigi-lo.

## Inferencia de tipo

TypeScript e inteligente: quando voce atribui um valor, ele deduz o tipo automaticamente. Isso se chama **inferencia de tipo**:

```typescript
// Com tipo explícito (você declara)
let nome: string = "Carlos";

// Com inferência (TypeScript deduz que é string)
let sobrenome = "Silva";

// Ambos são string — o TypeScript sabe disso
```

> [!info]
> Para iniciantes, recomendamos declarar o tipo explicitamente. Isso ajuda a fixar os conceitos. Com o tempo, voce vai perceber quando a inferencia e suficiente.

## Erros comuns com tipos

```typescript
// ✗ ERRO: tipo incompatível
let preco: number = "29.90";  // string não é number

// ✓ CORRETO
let preco: number = 29.90;

// ✗ ERRO: reatribuir const
const nome: string = "Ana";
nome = "Bia";  // const não permite reatribuição

// ✗ ERRO: usar variável antes de declarar
console.log(x);  // x ainda não existe
let x: number = 10;
```

## typeof — descobrindo o tipo

O operador `typeof` retorna o tipo de qualquer valor:

```typescript
console.log(typeof "Olá");     // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (bug histórico do JavaScript!)
```

> [!alerta]
> `typeof null` retorna `"object"` em vez de `"null"`. Isso e um bug historico do JavaScript que nunca foi corrigido por questoes de compatibilidade. Cuidado com esse caso especial.

## Exemplo pratico: ficha de cadastro

Veja como variaveis e tipos trabalham juntos em um programa real:

```typescript
// Dados do aluno
const nome: string = "Maria Silva";
const idade: number = 22;
const matricula: string = "2024001";
const ativo: boolean = true;
let faltas: number = 0;

// Exibindo a ficha
console.log("=== Ficha do Aluno ===");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade} anos`);
console.log(`Matrícula: ${matricula}`);
console.log(`Situação: ${ativo ? "Ativo" : "Inativo"}`);
console.log(`Faltas: ${faltas}`);

// Registrando uma falta
faltas = faltas + 1;
console.log(`Faltas após registro: ${faltas}`);
```

Resultado:

```
=== Ficha do Aluno ===
Nome: Maria Silva
Idade: 22 anos
Matrícula: 2024001
Situação: Ativo
Faltas: 0
Faltas após registro: 1
```

Note que `faltas` usa `let` porque o valor muda ao longo do programa. Todos os outros dados usam `const` porque nao mudam.
