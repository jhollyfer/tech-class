---
slug: "functions-arrow"
modulo: "Módulo 4 — Dados e Funções"
titulo: "Funções e Arrow Functions"
subtitulo: "Organizando código em blocos reutilizáveis"
descricao: "Funções em TypeScript: declaração, parâmetros tipados, retorno, arrow functions, valores padrão e escopo."
ordem: 12
proximosPassos:
  - titulo: "Parâmetros e callbacks"
    descricao: "Parâmetros opcionais, retorno e callbacks"
  - titulo: "Desafios"
    descricao: "Coloque funções em prática"
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

## O que são funções?

Imagine que você precisa calcular o desconto de um produto em vários lugares do seu programa. Sem funções, você copiaria o mesmo código repetidamente. Com funções, você escreve a lógica uma vez e reutiliza quantas vezes precisar.

Uma **função** é um bloco de código nomeado que realiza uma tarefa específica. Em TypeScript, declaramos os tipos dos parâmetros e do retorno para garantir segurança:

```typescript
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // "Olá, Maria!"
console.log(saudacao("João"));  // "Olá, João!"
```

A função `saudacao` recebe um `nome` do tipo `string` e retorna uma `string`. A palavra-chave `return` encerra a função e devolve o valor para quem a chamou.

> [!info]
> Funções seguem o princípio DRY (Don't Repeat Yourself): escreva uma vez, use muitas vezes. Se você está copiando e colando código, provavelmente precisa de uma função.

## Parâmetros e retorno tipados

TypeScript exige que você declare os tipos dos parâmetros e do retorno. Isso previne erros antes mesmo de executar o código:

```typescript
function somar(a: number, b: number): number {
  return a + b;
}

function exibirMensagem(msg: string): void {
  console.log(msg);
  // void = não retorna nada
}

function estaAprovado(nota: number): boolean {
  return nota >= 7;
}
```

O tipo após os parênteses (`: number`, `: string`, `: void`, `: boolean`) indica o que a função retorna. `void` significa que a função não retorna nenhum valor -- ela apenas executa uma acao.

### Exemplo prático: calculadora de desconto

```typescript
function calcularDesconto(preco: number, percentual: number): number {
  const desconto: number = preco * (percentual / 100);
  return preco - desconto;
}

const precoOriginal: number = 120;
const precoFinal: number = calcularDesconto(precoOriginal, 15);
console.log(`De R$${precoOriginal} por R$${precoFinal}`); // "De R$120 por R$102"
```

Observe que a função recebe dois números e retorna um número. O TypeScript garante que ninguem passe uma string por engano.

## Arrow functions

Arrow functions sao uma sintaxe mais curta para escrever funções. Sao especialmente uteis para funções simples de uma linha:

```typescript
const dobrar = (n: number): number => n * 2;
const saudar = (nome: string): string => `Oi, ${nome}`;
const ehPar = (n: number): boolean => n % 2 === 0;

console.log(dobrar(7));       // 14
console.log(saudar("Ana"));   // "Oi, Ana"
console.log(ehPar(4));        // true
```

> [!info]
> Quando uma arrow function tem apenas uma expressao, o `return` e implicito -- o valor e retornado automaticamente. Para funções com mais de uma linha, use chaves `{}` e `return` explicito.

Para arrow functions com multiplas linhas, use chaves e `return`:

```typescript
const saudacaoCompleta = (nome: string, hora: number): string => {
  if (hora < 12) return `Bom dia, ${nome}!`;
  if (hora < 18) return `Boa tarde, ${nome}!`;
  return `Boa noite, ${nome}!`;
};

console.log(saudacaoCompleta("Ana", 9));  // "Bom dia, Ana!"
console.log(saudacaoCompleta("Ana", 15)); // "Boa tarde, Ana!"
```

## Valores padrao

Parametros podem ter valores padrao, usados quando o argumento nao e fornecido:

```typescript
function cumprimentar(nome: string, saudacao: string = "Ola"): string {
  return `${saudacao}, ${nome}!`;
}

console.log(cumprimentar("Ana"));            // "Ola, Ana!"
console.log(cumprimentar("Ana", "Bom dia")); // "Bom dia, Ana!"
```

Outro exemplo pratico -- uma funcao que formata precos:

```typescript
function formatarPreco(valor: number, moeda: string = "R$"): string {
  return `${moeda} ${valor.toFixed(2)}`;
}

console.log(formatarPreco(49.9));          // "R$ 49.90"
console.log(formatarPreco(49.9, "US$"));   // "US$ 49.90"
```

> [!alerta]
> Parametros com valor padrao devem vir por ultimo na lista de parametros. `function f(a: string = "oi", b: number)` causa confusao porque voce nao pode pular o primeiro argumento.

## Escopo de variaveis

Variaveis declaradas dentro de uma funcao so existem dentro dela. Isso e o **escopo local**:

```typescript
const mensagem: string = "visivel em todo lugar";

function exemplo(): void {
  const local: string = "visivel so aqui dentro";
  console.log(mensagem); // funciona -- variavel de fora
  console.log(local);    // funciona -- variavel local
}

exemplo();
// console.log(local); // ERRO! local nao existe aqui fora
```

Variaveis de fora sao acessiveis dentro da funcao. Variaveis de dentro nao sao acessiveis fora. Isso protege o codigo -- cada funcao tem seu proprio espaco isolado.

```typescript
function contarAte(limite: number): void {
  for (let i = 1; i <= limite; i++) {
    console.log(i);
  }
  // i tambem nao existe aqui -- escopo do for
}

contarAte(3);
// console.log(i); // ERRO! i nao existe fora da funcao
```

## Resumo

| Conceito | Sintaxe | Quando usar |
|---|---|---|
| Funcao tradicional | `function nome(p: tipo): tipo {}` | Funcoes nomeadas reutilizaveis |
| Arrow function | `const f = (p: tipo): tipo => ...` | Funcoes curtas |
| Valor padrao | `function f(p: tipo = valor)` | Parametros opcionais |

> [!sucesso]
> Funcoes sao o bloco fundamental da programacao. Dominar funcoes e essencial para tudo que vem a seguir: projetos, manipulacao de dados e programacao assincrona.
