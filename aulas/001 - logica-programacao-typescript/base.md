# Lógica de Programação com TypeScript

> Guia completo e estruturado — do zero ao raciocínio computacional

---

## Sumário

1. [Variáveis e Tipos de Dados](#1-variáveis-e-tipos-de-dados)
2. [Operadores](#2-operadores)
3. [Estruturas de Decisão](#3-estruturas-de-decisão)
4. [Estruturas de Repetição](#4-estruturas-de-repetição)
5. [Arrays (Vetores)](#5-arrays-vetores)
6. [Funções](#6-funções)
7. [Prática com Problemas Reais](#7-prática-com-problemas-reais)

---

## 1. Variáveis e Tipos de Dados

Uma variável é um **espaço nomeado na memória** para guardar um valor. No TypeScript, toda variável possui um **tipo** que define o que pode ser armazenado e quais operações são permitidas.

### 1.1 Declaração de variáveis

| Palavra-chave | Pode reatribuir? | Escopo | Uso recomendado                       |
| ------------- | ---------------- | ------ | ------------------------------------- |
| `const`       | ❌ Não           | Bloco  | Maioria dos casos                     |
| `let`         | ✅ Sim           | Bloco  | Quando o valor muda                   |
| `var`         | ✅ Sim           | Função | ⚠️ Evite — comportamento imprevisível |

```typescript
const nome: string = "Marcos"; // valor fixo
let idade: number = 25; // pode mudar
idade = 26; // OK
```

### 1.2 Tipos primitivos

#### `string` — texto

```typescript
const nome: string = "Marcos";
const curso: string = "Desenvolvimento de Sistemas";

// Template literal (interpolação)
const mensagem = `Olá, ${nome}! Bem-vindo ao ${curso}.`;
console.log(mensagem);
// → Olá, Marcos! Bem-vindo ao Desenvolvimento de Sistemas.

// Métodos úteis
console.log(nome.toUpperCase()); // MARCOS
console.log(nome.length); // 6
console.log(nome.includes("arc")); // true
```

#### `number` — número (inteiro ou decimal)

```typescript
const idade: number = 25;
const altura: number = 1.78;
const pi: number = 3.14159;

const anoNascimento: number = 2025 - idade;
console.log(anoNascimento); // 2000
```

#### `boolean` — verdadeiro ou falso

```typescript
const aprovado: boolean = true;
const emRecuperacao: boolean = false;

// Booleanos geralmente vêm de comparações
const nota = 7.5;
const passou: boolean = nota >= 7.0; // true
```

#### `any` e `unknown`

```typescript
// ⚠️ any desliga a verificação de tipo — evite
let valor: any = "texto";
valor = 42; // TypeScript aceita, mas é perigoso

// ✅ unknown é mais seguro — exige verificação antes do uso
let dado: unknown = "olá";
if (typeof dado === "string") {
  console.log(dado.toUpperCase()); // TypeScript agora sabe que é string
}
```

### 1.3 Inferência de tipos

TypeScript consegue deduzir o tipo automaticamente pelo valor atribuído — você não precisa sempre declarar o tipo explicitamente.

```typescript
const nome = "Marcos"; // TypeScript infere: string
const idade = 25; // TypeScript infere: number
const ativo = true; // TypeScript infere: boolean
```

> **Boas práticas:** prefira a inferência em variáveis locais simples. Declare o tipo explicitamente em parâmetros de funções e retornos.

---

## 2. Operadores

Operadores transformam e comparam valores. São a base para criar qualquer lógica condicional.

### 2.1 Aritméticos

```typescript
const a = 10;
const b = 3;

console.log(a + b); // 13  — soma
console.log(a - b); // 7   — subtração
console.log(a * b); // 30  — multiplicação
console.log(a / b); // 3.333... — divisão
console.log(a % b); // 1   — resto da divisão (módulo)
console.log(a ** b); // 1000 — potenciação (10³)
```

> **Dica:** o operador `%` (módulo) é extremamente útil para verificar se um número é par (`n % 2 === 0`) ou para criar ciclos.

### 2.2 Relacionais (de comparação)

Sempre retornam `boolean`.

```typescript
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
console.log(5 === 5); // true  — igual em valor E tipo (prefira sempre este)
console.log(5 !== 3); // true  — diferente
```

> ⚠️ **Atenção:** use sempre `===` em vez de `==`. O `==` faz coerção de tipo e gera bugs sutis:
>
> ```typescript
> console.log(5 == "5"); // true  ← perigoso
> console.log(5 === "5"); // false ← correto
> ```

### 2.3 Lógicos

Combinam condições booleanas.

| Operador | Nome      | Resultado                                     |
| -------- | --------- | --------------------------------------------- |
| `&&`     | AND (E)   | `true` somente se **ambos** forem verdadeiros |
| `\|\|`   | OR (OU)   | `true` se **pelo menos um** for verdadeiro    |
| `!`      | NOT (NÃO) | Inverte o booleano                            |

```typescript
const maioridade = 18;
const temCarteira = true;

const podeConduizir = maioridade >= 18 && temCarteira; // true
const podeEntrar = maioridade >= 18 || temCarteira; // true
const menorIdade = !podeConduizir; // false
```

### 2.4 De atribuição

```typescript
let x = 10;
x += 5; // x = x + 5  → 15
x -= 3; // x = x - 3  → 12
x *= 2; // x = x * 2  → 24
x /= 4; // x = x / 4  → 6
x **= 2; // x = x ** 2 → 36
x %= 5; // x = x % 5  → 1
```

### 2.5 Operador ternário

Decisão rápida em uma única linha: `condição ? valorSeVerdadeiro : valorSeFalso`

```typescript
const nota = 7.5;
const status = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(status); // Aprovado
```

---

## 3. Estruturas de Decisão

Permitem que o programa **escolha um caminho** com base em uma condição. O fluxo deixa de ser linear.

### 3.1 `if / else if / else`

```typescript
const nota: number = 7.5;

if (nota >= 9) {
  console.log("Aprovado com excelência");
} else if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

### 3.2 `switch / case`

Ideal quando se compara **um único valor** contra múltiplas opções fixas.

```typescript
const diaDaSemana: string = "segunda";

switch (diaDaSemana) {
  case "sábado":
  case "domingo":
    console.log("Fim de semana — sem aula!");
    break;
  case "segunda":
  case "quarta":
  case "sexta":
    console.log("Aula de Lógica de Programação");
    break;
  default:
    console.log("Dia útil normal");
}
```

> **Não esqueça o `break`!** Sem ele, o código "cai" para o próximo `case` automaticamente.

### 3.3 Combinando condições

```typescript
const idade: number = 20;
const temDocumento: boolean = true;
const temIngressos: boolean = false;

// AND — todas as condições precisam ser verdadeiras
if (idade >= 18 && temDocumento) {
  console.log("Pode entrar no evento");
}

// OR — basta uma ser verdadeira
if (temIngressos || temDocumento) {
  console.log("Acesso liberado");
}

// Negação
if (!temIngressos) {
  console.log("Compre seu ingresso primeiro");
}
```

---

## 4. Estruturas de Repetição

Repetem um bloco de código enquanto uma condição for verdadeira. A chave está sempre em ter uma **condição de parada** para evitar loops infinitos.

### 4.1 `for` — quando sabe o número de iterações

```
for (inicialização; condição; incremento) { ... }
```

```typescript
// Conta de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log(`Iteração: ${i}`);
}

// Conta de trás para frente
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Passo personalizado (de 2 em 2)
for (let i = 0; i <= 20; i += 2) {
  console.log(i); // 0, 2, 4, 6...
}
```

### 4.2 `while` — quando não sabe o número de iterações

```typescript
let tentativas = 0;
const maxTentativas = 3;

while (tentativas < maxTentativas) {
  console.log(`Tentativa ${tentativas + 1} de ${maxTentativas}`);
  tentativas++;
}
// → Tentativa 1 de 3
// → Tentativa 2 de 3
// → Tentativa 3 de 3
```

### 4.3 `do...while` — executa ao menos uma vez

```typescript
let numero: number;

do {
  numero = Math.floor(Math.random() * 10); // 0 a 9
  console.log(`Número sorteado: ${numero}`);
} while (numero !== 5);

console.log("Sortou o 5! Fim.");
```

### 4.4 `for...of` — percorrer elementos de um array

```typescript
const nomes: string[] = ["Ana", "Bruno", "Carol"];

for (const nome of nomes) {
  console.log(`Olá, ${nome}!`);
}
// → Olá, Ana!
// → Olá, Bruno!
// → Olá, Carol!
```

### 4.5 `break` e `continue`

```typescript
// break — interrompe o loop completamente
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i); // 1, 2, 3, 4
}

// continue — pula para a próxima iteração
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1, 2, 4, 5
}
```

> ⚠️ **Loop infinito:** sempre garanta que a condição de parada seja alcançada. Um `while (true)` sem `break` trava o programa.

---

## 5. Arrays (Vetores)

Arrays agrupam múltiplos valores em uma única variável, acessíveis por **índice** (que começa em `0`).

### 5.1 Declaração e acesso

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0];
const nomes: string[] = ["Ana", "Bruno", "Carol"];

// Acesso por índice (começa em 0)
console.log(notas[0]); // 8.5 — primeiro elemento
console.log(notas[2]); // 9.5 — terceiro elemento
console.log(notas[notas.length - 1]); // 6.0 — último elemento

// Tamanho do array
console.log(notas.length); // 4
```

### 5.2 Modificação

```typescript
const frutas: string[] = ["maçã", "banana", "laranja"];

frutas.push("uva"); // adiciona ao final     → ["maçã", "banana", "laranja", "uva"]
frutas.pop(); // remove do final        → ["maçã", "banana", "laranja"]
frutas.unshift("abacaxi"); // adiciona no início   → ["abacaxi", "maçã", "banana", "laranja"]
frutas.shift(); // remove do início       → ["maçã", "banana", "laranja"]

// Verificar se existe
console.log(frutas.includes("banana")); // true

// Índice de um elemento
console.log(frutas.indexOf("banana")); // 1
```

### 5.3 Percorrer com `for`

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0];

// Calcular média manualmente
let soma = 0;
for (const nota of notas) {
  soma += nota;
}
const media = soma / notas.length;
console.log(`Média: ${media}`); // Média: 7.75
```

### 5.4 Métodos modernos (funcionais)

Estes métodos são fundamentais no dia a dia com TypeScript/JavaScript.

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0, 5.5];

// filter — retorna novo array com os elementos que passam no critério
const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados); // [8.5, 7.0, 9.5]

// map — transforma cada elemento, retorna novo array
const arredondadas = notas.map((nota) => Math.round(nota));
console.log(arredondadas); // [9, 7, 10, 6, 6]

// reduce — acumula um valor percorrendo o array
const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
console.log(soma); // 40.5

// find — retorna o primeiro elemento que satisfaz a condição
const primeiraNota10 = notas.find((nota) => nota === 10);
console.log(primeiraNota10); // undefined (não tem 10 nesse array)

// some — retorna true se ALGUM elemento satisfaz
const temReprovado = notas.some((nota) => nota < 7);
console.log(temReprovado); // true

// every — retorna true se TODOS satisfazem
const todosAprovados = notas.every((nota) => nota >= 7);
console.log(todosAprovados); // false
```

> **Regra de ouro:** `filter`, `map` e `reduce` nunca modificam o array original — sempre retornam um novo. Isso é chamado de **imutabilidade**.

---

## 6. Funções

Funções encapsulam um trecho de lógica **reutilizável**. Recebem entradas (parâmetros), processam e produzem uma saída (retorno).

```
PARÂMETROS → PROCESSAMENTO → RETURN
 (entrada)      (lógica)      (saída)
```

### 6.1 Função declarativa

```typescript
function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length;
}

const media = calcularMedia([8, 7, 9, 6]);
console.log(media); // 7.5
```

### 6.2 Arrow function

Sintaxe moderna e mais concisa — muito usada com React e Node.js.

```typescript
// Forma completa
const saudacao = (nome: string): string => {
  return `Olá, ${nome}!`;
};

// Forma curta (sem chaves quando é uma só expressão)
const dobrar = (n: number): number => n * 2;

console.log(saudacao("Marcos")); // Olá, Marcos!
console.log(dobrar(5)); // 10
```

### 6.3 Parâmetros opcionais e valores padrão

```typescript
// Parâmetro com valor padrão
function potencia(base: number, expoente: number = 2): number {
  return base ** expoente;
}

console.log(potencia(3)); // 9  (usa expoente padrão = 2)
console.log(potencia(2, 10)); // 1024

// Parâmetro opcional (pode ser undefined)
function criarNome(nome: string, sobrenome?: string): string {
  return sobrenome ? `${nome} ${sobrenome}` : nome;
}

console.log(criarNome("Marcos")); // Marcos
console.log(criarNome("Marcos", "Rodrigues")); // Marcos Rodrigues
```

### 6.4 Tipando o retorno

```typescript
// void — função que não retorna valor
function exibirMensagem(msg: string): void {
  console.log(msg);
}

// Retorno de múltiplos valores via objeto
function dividir(a: number, b: number): { resultado: number; resto: number } {
  return {
    resultado: Math.floor(a / b),
    resto: a % b,
  };
}

const { resultado, resto } = dividir(10, 3);
console.log(`Resultado: ${resultado}, Resto: ${resto}`);
// → Resultado: 3, Resto: 1
```

### 6.5 Funções como parâmetros (callbacks)

```typescript
// A função recebe outra função como argumento
function aplicarOperacao(
  numeros: number[],
  operacao: (n: number) => number,
): number[] {
  return numeros.map(operacao);
}

const resultado = aplicarOperacao([1, 2, 3, 4], (n) => n * 3);
console.log(resultado); // [3, 6, 9, 12]
```

> **Princípio da responsabilidade única:** cada função deve fazer **uma coisa só**. Se o nome precisa de "E" no meio (ex: `calcularEImprimir`), quebre em duas funções.

---

## 7. Prática com Problemas Reais

Chegou a hora de combinar tudo. Os desafios abaixo são progressivos — resolva antes de ver a solução.

---

### Desafio 1 — Par ou Ímpar

**Problema:** dada uma lista de números, classifique cada um como par ou ímpar.

```typescript
function parOuImpar(n: number): string {
  return n % 2 === 0 ? "par" : "ímpar";
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (const n of numeros) {
  console.log(`${n} é ${parOuImpar(n)}`);
}

// → 1 é ímpar
// → 2 é par
// → 3 é ímpar
// ...
```

---

### Desafio 2 — Tabuada

**Problema:** gere a tabuada completa de qualquer número.

```typescript
function tabuada(n: number): void {
  console.log(`\n--- Tabuada do ${n} ---`);
  for (let i = 1; i <= 10; i++) {
    console.log(
      `${n} x ${i.toString().padStart(2)} = ${(n * i).toString().padStart(3)}`,
    );
  }
}

tabuada(7);

// → --- Tabuada do 7 ---
// → 7 x  1 =   7
// → 7 x  2 =  14
// → ...
// → 7 x 10 =  70
```

---

### Desafio 3 — Sistema de Aprovação da Turma

**Problema:** dada uma lista de alunos com suas notas, calcule a média e classifique cada um.

```typescript
type Aluno = {
  nome: string;
  notas: number[];
};

function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length;
}

function classificar(media: number): string {
  if (media >= 9) return "Excelente";
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

function avaliarTurma(turma: Aluno[]): void {
  console.log("=".repeat(45));
  console.log("          RESULTADO DA TURMA");
  console.log("=".repeat(45));

  for (const aluno of turma) {
    const media = calcularMedia(aluno.notas);
    const status = classificar(media);
    const icone = media >= 7 ? "✓" : "✗";
    console.log(
      `${icone} ${aluno.nome.padEnd(15)} | Média: ${media.toFixed(1)} | ${status}`,
    );
  }

  console.log("=".repeat(45));
}

const turma: Aluno[] = [
  { nome: "Ana", notas: [8.0, 9.0, 7.5] },
  { nome: "Bruno", notas: [5.0, 6.0, 4.0] },
  { nome: "Carol", notas: [9.5, 10.0, 9.0] },
  { nome: "Diego", notas: [6.5, 5.5, 7.0] },
];

avaliarTurma(turma);

// → ==============================================
// →           RESULTADO DA TURMA
// → ==============================================
// → ✓ Ana             | Média: 8.2 | Aprovado
// → ✗ Bruno           | Média: 5.0 | Recuperação
// → ✓ Carol           | Média: 9.5 | Excelente
// → ✓ Diego           | Média: 6.3 | Recuperação
// → ==============================================
```

---

### Desafio 4 — Números Primos

**Problema:** verifique se um número é primo e liste todos os primos até N.

```typescript
function ePrimo(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // tem divisor → não é primo
  }
  return true;
}

function listarPrimosAte(limite: number): number[] {
  const primos: number[] = [];
  for (let i = 2; i <= limite; i++) {
    if (ePrimo(i)) primos.push(i);
  }
  return primos;
}

console.log(ePrimo(7)); // true
console.log(ePrimo(10)); // false

const primos = listarPrimosAte(50);
console.log(primos);
// → [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
```

---

### Desafio 5 — Juntando tudo: Carrinho de Compras

**Problema:** simule as operações básicas de um carrinho de compras.

```typescript
type Produto = {
  nome: string;
  preco: number;
  quantidade: number;
};

type Carrinho = Produto[];

function adicionarProduto(carrinho: Carrinho, produto: Produto): Carrinho {
  const existente = carrinho.find((p) => p.nome === produto.nome);
  if (existente) {
    return carrinho.map((p) =>
      p.nome === produto.nome
        ? { ...p, quantidade: p.quantidade + produto.quantidade }
        : p,
    );
  }
  return [...carrinho, produto];
}

function calcularTotal(carrinho: Carrinho): number {
  return carrinho.reduce((total, p) => total + p.preco * p.quantidade, 0);
}

function exibirCarrinho(carrinho: Carrinho): void {
  console.log("\n🛒 CARRINHO DE COMPRAS");
  console.log("-".repeat(40));
  for (const item of carrinho) {
    const subtotal = item.preco * item.quantidade;
    console.log(
      `${item.nome.padEnd(15)} x${item.quantidade}  R$ ${subtotal.toFixed(2)}`,
    );
  }
  console.log("-".repeat(40));
  console.log(`TOTAL: R$ ${calcularTotal(carrinho).toFixed(2)}`);
}

// Uso
let carrinho: Carrinho = [];

carrinho = adicionarProduto(carrinho, {
  nome: "Teclado",
  preco: 150.0,
  quantidade: 1,
});
carrinho = adicionarProduto(carrinho, {
  nome: "Mouse",
  preco: 80.0,
  quantidade: 2,
});
carrinho = adicionarProduto(carrinho, {
  nome: "Teclado",
  preco: 150.0,
  quantidade: 1,
}); // já existe

exibirCarrinho(carrinho);

// → 🛒 CARRINHO DE COMPRAS
// → ----------------------------------------
// → Teclado         x2  R$ 300.00
// → Mouse           x2  R$ 160.00
// → ----------------------------------------
// → TOTAL: R$ 460.00
```

---

## Mapa de Conceitos

```
VARIÁVEIS
  └─ const / let
  └─ tipos: string, number, boolean, unknown

OPERADORES
  └─ aritméticos: + - * / % **
  └─ relacionais: === !== > < >= <=
  └─ lógicos: && || !
  └─ ternário: condição ? a : b

DECISÃO
  └─ if / else if / else
  └─ switch / case / default
  └─ operador ternário

REPETIÇÃO
  └─ for (contador)
  └─ while (condição)
  └─ do...while (executa ao menos 1x)
  └─ for...of (percorrer arrays)
  └─ break / continue

ARRAYS
  └─ declaração: tipo[]
  └─ acesso: arr[índice]
  └─ mutação: push, pop, shift, unshift
  └─ consulta: length, includes, indexOf
  └─ funcionais: filter, map, reduce, find, some, every

FUNÇÕES
  └─ declarativa: function nome(params): tipo { }
  └─ arrow: const nome = (params): tipo => { }
  └─ parâmetros opcionais e padrão
  └─ void vs retorno tipado
  └─ callback (função como argumento)
```

---

## O que estudar depois

| Tópico                         | O que cobre                                     |
| ------------------------------ | ----------------------------------------------- |
| **Tipos avançados do TS**      | Interfaces, type aliases, union types, generics |
| **POO (Orientação a Objetos)** | Classes, herança, encapsulamento, polimorfismo  |
| **Assincronismo**              | Promises, async/await, fetch de APIs            |
| **Estruturas de Dados**        | Pilhas, filas, árvores, grafos                  |
| **Algoritmos clássicos**       | Busca binária, ordenação, recursão              |

---

_Gerado para estudo de Lógica de Programação com TypeScript_
