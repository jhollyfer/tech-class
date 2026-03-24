---
slug: "loops"
modulo: "Módulo 3 — Controle de Fluxo"
titulo: "Estruturas de Repetição"
subtitulo: "Automatizando tarefas com for, while e do-while"
descricao: "Loops for, while, do-while, for...of, break e continue em TypeScript."
ordem: 8
proximosPassos:
  - titulo: "for...of e break/continue"
    descricao: "Percorra arrays e controle o fluxo"
  - titulo: "Arrays"
    descricao: "Agrupe dados em listas"
quiz:
  - pergunta: "Quais são as três partes do loop for?"
    opcoes: ["entrada, saída, retorno", "inicialização, condição, incremento", "variável, operador, valor", "início, meio, fim"]
    correta: 1
    explicacao: "✓ O for tem três partes separadas por ponto e vírgula: inicialização (let i = 0), condição (i < 10) e incremento (i++)."
    explicacaoErrada: "✗ A estrutura do for é: for (inicialização; condição; incremento). Exemplo: for (let i = 0; i < 10; i++)."
  - pergunta: "Quando usar while em vez de for?"
    opcoes: ["Nunca, for é sempre melhor", "Quando sabe exatamente quantas vezes repetir", "Quando não sabe quantas vezes vai repetir", "Quando quer executar apenas uma vez"]
    correta: 2
    explicacao: "✓ while é ideal quando a quantidade de repetições depende de uma condição que pode mudar de forma imprevisível durante a execução."
    explicacaoErrada: "✗ Use while quando não sabe quantas vezes o loop vai rodar. Use for quando sabe a quantidade de repetições."
  - pergunta: "O que causa um loop infinito?"
    opcoes: ["Usar break dentro do loop", "A condição nunca se tornar falsa", "Usar continue dentro do loop", "Declarar variáveis dentro do loop"]
    correta: 1
    explicacao: "✓ Se a condição do loop nunca se torna falsa, ele roda para sempre (loop infinito) e trava o programa."
    explicacaoErrada: "✗ Loop infinito acontece quando a condição nunca fica falsa. Sempre garanta que algo dentro do loop eventualmente mude a condição."
---

## Por que precisamos de loops?

Imagine que voce precisa exibir os numeros de 1 a 100. Sem loops, precisaria escrever 100 linhas de `console.log`. Com um loop, basta uma unica estrutura que repete automaticamente. Loops sao fundamentais em programacao --- praticamente todo programa real usa repeticao.

## for --- quando sabe quantas vezes repetir

O `for` e o loop mais comum. Use quando sabe a quantidade de repeticoes:

```typescript
for (let i: number = 1; i <= 5; i++) {
  console.log(`Contagem: ${i}`);
}
// Contagem: 1, 2, 3, 4, 5
```

O `for` tem tres partes separadas por `;`:

1. **Inicializacao** --- `let i = 1` --- executa uma vez antes do loop comecar.
2. **Condicao** --- `i <= 5` --- testada antes de cada repeticao. Se falsa, o loop para.
3. **Incremento** --- `i++` --- executa apos cada repeticao.

O fluxo e: inicializa, testa condicao, executa bloco, incrementa, testa condicao, executa bloco, incrementa... ate a condicao ser falsa.

### Exemplo pratico: soma de numeros

```typescript
let soma: number = 0;

for (let i: number = 1; i <= 100; i++) {
  soma += i;
}

console.log(`Soma de 1 a 100: ${soma}`); // 5050
```

### Contagem regressiva

O incremento nao precisa ser `i++`. Pode ser qualquer alteracao:

```typescript
for (let i: number = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Lançamento!");
```

> [!info]
> O `for` e ideal quando voce sabe **exatamente** quantas vezes repetir: percorrer um intervalo de numeros, iterar N vezes, ou trabalhar com indices.

## while --- quando nao sabe quantas vezes

O `while` repete enquanto a condicao for verdadeira. Use quando a quantidade de repeticoes e imprevisivel:

```typescript
let tentativas: number = 0;
let acertou: boolean = false;

while (!acertou) {
  tentativas++;
  acertou = Math.random() > 0.8;
}
console.log(`Acertou em ${tentativas} tentativas`);
```

Nao sabemos quantas tentativas serao necessarias --- pode ser 1, pode ser 20. O `while` e perfeito para esse tipo de situacao.

### Exemplo pratico: encontrar um divisor

```typescript
function menorDivisor(n: number): number {
  let divisor: number = 2;

  while (n % divisor !== 0) {
    divisor++;
  }

  return divisor;
}

console.log(menorDivisor(15)); // 3
console.log(menorDivisor(7));  // 7 (é primo)
```

> [!alerta]
> Todo `while` **precisa** de uma condicao que eventualmente se torne falsa, senao gera loop infinito. Um loop infinito trava o programa. Sempre garanta que algo dentro do loop mude a condicao.

## do-while --- executa pelo menos uma vez

O `do-while` e como o `while`, mas executa o bloco **primeiro** e testa a condicao **depois**. Isso garante pelo menos uma execucao:

```typescript
let numero: number;

do {
  numero = Math.floor(Math.random() * 10);
  console.log(`Gerou: ${numero}`);
} while (numero !== 7);

console.log("Encontrou o 7!");
```

A diferenca pratica: `while` pode nunca executar (se a condicao ja comeca falsa). `do-while` sempre executa pelo menos uma vez.

> [!info]
> **Quando usar do-while?** Quando voce precisa executar a acao pelo menos uma vez antes de verificar a condicao. Exemplos classicos: menus que mostram opcoes antes de pedir a escolha, ou validacao que pede dados ate receberem um valor valido.

## Exemplo: tabuada

Um exemplo pratico que combina `for` com template literals:

```typescript
const numero: number = 7;

console.log(`Tabuada do ${numero}:`);
for (let i: number = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
```

Resultado:

```
Tabuada do 7:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
```

## Exercicio pratico

Tente resolver estes desafios usando loops:

**Desafio 1:** Calcule o fatorial de um numero (ex: 5! = 5 x 4 x 3 x 2 x 1 = 120).

```typescript
const n: number = 5;
let fatorial: number = 1;

// Use um loop for para calcular n!
// Dica: multiplique fatorial por cada número de 1 até n
```

**Desafio 2:** Encontre todos os numeros pares entre 1 e 50 e conte quantos sao.

```typescript
let contadorPares: number = 0;

// Use for + continue para pular os ímpares
// Exiba cada par e, no final, o total
```
