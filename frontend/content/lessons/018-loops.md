---
slug: "loops"
modulo: "Módulo 4 — Controle de Fluxo"
titulo: "Estruturas de Repetição"
subtitulo: "Automatizando tarefas com for, while e do-while"
descricao: "Loops for, while, do-while, for...of, break e continue em TypeScript."
ordem: 18
proximosPassos:
  - titulo: "Listas e arrays"
    descricao: "Combine loops com arrays"
  - titulo: "Funções"
    descricao: "Encapsule loops em funções reutilizáveis"
  - titulo: "Projetos"
    descricao: "Crie programas com repetição"
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
  - pergunta: "Qual a diferença entre break e continue?"
    opcoes: ["São a mesma coisa", "break para o loop, continue pula para a próxima iteração", "break pula, continue para", "Ambos encerram o programa"]
    correta: 1
    explicacao: "✓ break encerra o loop completamente. continue pula o restante da iteração atual e vai para a próxima."
    explicacaoErrada: "✗ break sai do loop inteiro. continue pula o resto da iteração atual e segue para a próxima repetição."
---

## for — quando sabe quantas vezes repetir

O `for` é o loop mais comum. Use quando sabe a quantidade de repetições:

```typescript
for (let i = 1; i <= 5; i++) {
  console.log(`Contagem: ${i}`);
}
// Contagem: 1, 2, 3, 4, 5
```

O `for` tem três partes separadas por `;`:

1. **Inicialização** — `let i = 1` — executa uma vez antes do loop começar.
2. **Condição** — `i <= 5` — testada antes de cada repetição. Se falsa, o loop para.
3. **Incremento** — `i++` — executa após cada repetição.

O fluxo é: inicializa, testa condição, executa bloco, incrementa, testa condição, executa bloco, incrementa... até a condição ser falsa.

## while — quando não sabe quantas vezes

O `while` repete enquanto a condição for verdadeira. Use quando a quantidade de repetições é imprevisível:

```typescript
let tentativas = 0;
let acertou = false;

while (!acertou) {
  tentativas++;
  acertou = Math.random() > 0.8;
}
console.log(`Acertou em ${tentativas} tentativas`);
```

> [!alerta]
> Todo while PRECISA de uma condição que eventualmente se torne falsa, senão gera loop infinito. Um loop infinito trava o programa. Sempre garanta que algo dentro do loop mude a condição.

## do-while — executa pelo menos uma vez

O `do-while` é como o `while`, mas executa o bloco primeiro e testa a condição depois. Isso garante pelo menos uma execução:

```typescript
let numero: number;
do {
  numero = Math.floor(Math.random() * 10);
  console.log(numero);
} while (numero !== 7);
```

A diferença prática: `while` pode nunca executar (se a condição já começa falsa). `do-while` sempre executa pelo menos uma vez.

## for...of — iterando sobre arrays

O `for...of` percorre cada elemento de um array diretamente, sem precisar de índice:

```typescript
const frutas = ["maçã", "banana", "uva"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

É mais limpo que `for (let i = 0; i < frutas.length; i++)` quando você só precisa do valor de cada elemento.

## break e continue

Dois comandos controlam o fluxo dentro de loops:

- **`break`** — encerra o loop completamente.
- **`continue`** — pula o restante da iteração atual e vai para a próxima.

```typescript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;       // para o loop
  if (i % 2 === 0) continue; // pula para próxima iteração
  console.log(i);            // 1, 3
}
```

O `break` é útil para sair de um loop quando encontra o que procurava. O `continue` é útil para pular elementos que não interessam.

## Exemplo: tabuada

Um exemplo prático que combina `for` com template literals:

```typescript
const numero = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} × ${i} = ${numero * i}`);
}
```

Resultado:

```
7 × 1 = 7
7 × 2 = 14
7 × 3 = 21
...
7 × 10 = 70
```
