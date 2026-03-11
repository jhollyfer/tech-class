---
slug: "functions"
modulo: "Módulo 4 — Controle de Fluxo"
titulo: "Funções"
subtitulo: "Organizando código em blocos reutilizáveis"
descricao: "Funções em TypeScript: declaração, parâmetros tipados, retorno, arrow functions, valores padrão e escopo."
ordem: 20
proximosPassos:
  - titulo: "Projeto: Jogo de Adivinhação"
    descricao: "Aplique tudo em um jogo interativo"
  - titulo: "Módulos"
    descricao: "Organize código em arquivos separados"
  - titulo: "Objetos e classes"
    descricao: "Combine dados e funções"
quiz:
  - pergunta: "O que a palavra-chave return faz em uma função?"
    opcoes: ["Imprime um valor no terminal", "Encerra a função e devolve um valor", "Declara uma variável", "Chama outra função"]
    correta: 1
    explicacao: "✓ return encerra a execução da função imediatamente e devolve o valor especificado para quem chamou a função."
    explicacaoErrada: "✗ return não imprime nada. Ele encerra a função e devolve um valor. Para imprimir, use console.log."
  - pergunta: "O que significa o tipo void no retorno de uma função?"
    opcoes: ["Retorna zero", "Retorna uma string vazia", "Não retorna nada", "Retorna null"]
    correta: 2
    explicacao: "✓ void indica que a função não retorna nenhum valor. Ela executa uma ação (como console.log) mas não devolve resultado."
    explicacaoErrada: "✗ void significa 'sem retorno'. A função faz algo mas não devolve nenhum valor para quem a chamou."
  - pergunta: "Qual é a sintaxe correta de uma arrow function?"
    opcoes: ["function => (n) { n * 2 }", "const f = (n: number): number => n * 2", "arrow f(n) => n * 2", "const f = n -> n * 2"]
    correta: 1
    explicacao: "✓ Arrow functions usam => após os parâmetros. Para uma expressão simples, o return é implícito."
    explicacaoErrada: "✗ A sintaxe é: const nome = (parametros) => expressão. O => (seta gorda) é o que define uma arrow function."
  - pergunta: "Uma variável declarada dentro de uma função pode ser acessada fora dela?"
    opcoes: ["Sim, sempre", "Sim, se usar const", "Não, ela só existe dentro da função", "Sim, se usar var"]
    correta: 2
    explicacao: "✓ Variáveis declaradas dentro de uma função têm escopo local — existem apenas dentro daquela função."
    explicacaoErrada: "✗ Variáveis declaradas com let ou const dentro de uma função não são acessíveis fora dela. Isso é escopo local."
---

## Declarando funções

Uma função é um bloco de código nomeado que pode ser executado quantas vezes quiser. Em TypeScript, declare os tipos dos parâmetros e do retorno:

```typescript
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // "Olá, Maria!"
```

A função `saudacao` recebe um `nome` do tipo `string` e retorna uma `string`. O `return` encerra a função e devolve o valor.

## Parâmetros e retorno tipados

TypeScript exige que você declare os tipos. Isso previne erros:

```typescript
function somar(a: number, b: number): number {
  return a + b;
}

function exibirMensagem(msg: string): void {
  console.log(msg);
  // void = não retorna nada
}
```

O tipo após os parênteses (`: number`, `: string`, `: void`) indica o que a função retorna. `void` significa que a função não retorna nenhum valor.

## Arrow functions

Arrow functions são uma sintaxe mais curta para escrever funções:

```typescript
const dobrar = (n: number): number => n * 2;
const saudar = (nome: string): string => `Oi, ${nome}`;

// Equivalente a:
// function dobrar(n: number): number { return n * 2; }
```

> [!info]
> Arrow functions são uma sintaxe mais curta. Use-as para funções simples de uma linha. Para funções maiores com múltiplas linhas, a sintaxe tradicional com `function` pode ser mais legível.

Para arrow functions com mais de uma linha, use chaves e `return`:

```typescript
const calcularMedia = (notas: number[]): number => {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length;
};
```

## Valores padrão

Parâmetros podem ter valores padrão, usados quando o argumento não é fornecido:

```typescript
function cumprimentar(nome: string, saudacao: string = "Olá"): string {
  return `${saudacao}, ${nome}!`;
}

console.log(cumprimentar("Ana"));            // "Olá, Ana!"
console.log(cumprimentar("Ana", "Bom dia")); // "Bom dia, Ana!"
```

Parâmetros com valor padrão devem vir por último na lista de parâmetros.

## Escopo de variáveis

Variáveis declaradas dentro de uma função só existem dentro dela. Isso é o escopo local:

```typescript
const global = "visível em todo lugar";

function exemplo() {
  const local = "visível só aqui dentro";
  console.log(global); // funciona
  console.log(local);  // funciona
}

// console.log(local); // ERRO! local não existe aqui fora
```

Variáveis de fora são acessíveis dentro da função. Variáveis de dentro não são acessíveis fora. Isso protege o código — cada função tem seu próprio espaço isolado.

## Funções como parâmetros (callbacks)

Funções podem receber outras funções como parâmetro. Isso é chamado de callback:

```typescript
function executar(operacao: (n: number) => number, valor: number): void {
  console.log(operacao(valor));
}

executar(n => n * 2, 5);  // 10
executar(n => n ** 2, 5); // 25
```

O parâmetro `operacao` tem tipo `(n: number) => number` — uma função que recebe um número e retorna um número. Callbacks são a base de métodos como `map`, `filter` e `find` que você já viu em arrays.
