---
slug: "guessing-game"
modulo: "Módulo 4 — Controle de Fluxo"
titulo: "Projeto: Jogo de Adivinhação"
subtitulo: "Aplicando variáveis, loops e condicionais em um projeto real"
descricao: "Jogo onde o computador escolhe um número e o jogador tenta adivinhar, com dicas de 'maior' ou 'menor'."
ordem: 21
proximosPassos:
  - titulo: "Jogo da Velha"
    descricao: "Um projeto mais complexo com arrays e funções"
  - titulo: "Refatoração"
    descricao: "Melhore a qualidade do seu código"
  - titulo: "Novos jogos"
    descricao: "Crie variações com suas próprias regras"
quiz:
  - pergunta: "Por que usamos parseInt() para converter a resposta do jogador?"
    opcoes: ["Para arredondar o número", "Porque readline retorna string e precisamos de number", "Para verificar se é um número primo", "Para formatar o número"]
    correta: 1
    explicacao: "✓ A entrada do usuário via readline é sempre uma string. parseInt() converte essa string em um número inteiro para poder comparar com o número secreto."
    explicacaoErrada: "✗ readline sempre retorna strings. parseInt() converte '42' (string) em 42 (number) para que a comparação funcione."
  - pergunta: "O que isNaN() verifica?"
    opcoes: ["Se o valor é null", "Se o valor não é um número válido", "Se o valor é negativo", "Se o valor é zero"]
    correta: 1
    explicacao: "✓ isNaN() retorna true se o valor não é um número (Not a Number). Útil para validar entrada do usuário após parseInt()."
    explicacaoErrada: "✗ isNaN() significa 'is Not a Number'. Retorna true quando o valor não pode ser interpretado como número."
  - pergunta: "Qual estrutura controla a repetição do jogo até o acerto?"
    opcoes: ["for com contador", "switch/case", "Recursão via chamada da função perguntar()", "Array de tentativas"]
    correta: 2
    explicacao: "✓ A função perguntar() chama a si mesma quando o jogador erra, criando um loop via recursão que só para quando o palpite está correto."
    explicacaoErrada: "✗ O jogo usa recursão: a função perguntar() chama a si mesma após cada erro. O loop termina quando o palpite é igual ao número secreto."
---

## O projeto

O computador escolhe um número entre 1 e 100. O jogador tenta adivinhar, e a cada tentativa recebe uma dica: o número secreto é maior ou menor que o palpite. O jogo termina quando o jogador acerta e exibe o total de tentativas.

Conceitos aplicados: variáveis, condicionais, loops (recursão), entrada/saída, conversão de tipo e validação.

## Passo 1: Gerando o número secreto

`Math.random()` gera um número decimal entre 0 e 1. Multiplicando por 100 e arredondando para baixo, obtemos um inteiro de 0 a 99. Somando 1, o intervalo fica de 1 a 100:

```typescript
const secreto = Math.floor(Math.random() * 100) + 1;
```

## Passo 2: Lendo a entrada do jogador

Para ler entrada no terminal, usamos o módulo `readline` do Node.js:

```typescript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

O `rl.question()` exibe uma pergunta e espera a resposta do jogador.

## Passo 3: O jogo completo

```typescript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function perguntar() {
  rl.question("Seu palpite (1-100): ", (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      console.log("Digite um número entre 1 e 100!");
      perguntar();
      return;
    }

    if (palpite === secreto) {
      console.log(`Acertou em ${tentativas} tentativas!`);
      rl.close();
    } else if (palpite < secreto) {
      console.log("Maior!");
      perguntar();
    } else {
      console.log("Menor!");
      perguntar();
    }
  });
}

console.log("Pensei em um número entre 1 e 100...");
perguntar();
```

Execute com `npx tsx jogo.ts` e tente adivinhar o número.

## Conceitos aplicados

Cada parte do jogo usa conceitos que você já aprendeu:

- **Variáveis** — `secreto`, `tentativas`, `palpite` armazenam os dados do jogo.
- **Loop** — a função `perguntar()` chama a si mesma (recursão), criando um loop que só para quando o jogador acerta.
- **Condicional** — `if/else if/else` compara o palpite com o número secreto e decide a dica.
- **Entrada/Saída** — `readline` lê o palpite, `console.log` exibe as dicas.
- **Conversão de tipo** — `parseInt()` converte a string digitada em número.
- **Validação** — `isNaN()` verifica se a entrada é válida antes de comparar.

> [!sucesso]
> Este projeto usa TODOS os conceitos dos módulos anteriores: lógica booleana, condicionais, loops e entrada/saída. Se conseguiu acompanhar cada parte, está pronto para projetos mais complexos.
