---
slug: "guessing-game"
modulo: "Módulo 5 — Prática"
titulo: "Projeto: Jogo de Adivinhação"
subtitulo: "Aplicando variáveis, loops e condicionais em um projeto real"
descricao: "Jogo onde o computador escolhe um número e o jogador tenta adivinhar com dicas de 'maior' ou 'menor', usando while loop e prompt-sync."
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
    opcoes: ["Para arredondar o número", "Porque prompt retorna string e precisamos de number", "Para verificar se é um número primo", "Para formatar o número"]
    correta: 1
    explicacao: "✓ A entrada do usuário via prompt é sempre uma string. parseInt() converte essa string em um número inteiro para poder comparar com o número secreto."
    explicacaoErrada: "✗ prompt sempre retorna strings. parseInt() converte '42' (string) em 42 (number) para que a comparação funcione."
  - pergunta: "O que isNaN() verifica?"
    opcoes: ["Se o valor é null", "Se o valor não é um número válido", "Se o valor é negativo", "Se o valor é zero"]
    correta: 1
    explicacao: "✓ isNaN() retorna true se o valor não é um número (Not a Number). Útil para validar entrada do usuário após parseInt()."
    explicacaoErrada: "✗ isNaN() significa 'is Not a Number'. Retorna true quando o valor não pode ser interpretado como número."
  - pergunta: "Qual estrutura controla a repetição do jogo até o acerto?"
    opcoes: ["for com contador", "switch/case", "while loop", "Array de tentativas"]
    correta: 2
    explicacao: "✓ O while loop repete o bloco enquanto o jogador não acertar. Quando o palpite é igual ao número secreto, a variável de controle muda e o loop para."
    explicacaoErrada: "✗ O jogo usa um while loop que repete enquanto o jogador não acertar. Quando o palpite é correto, o loop encerra."
---

## O projeto

O computador escolhe um numero aleatorio entre 1 e 100. O jogador tenta adivinhar, e a cada tentativa recebe uma dica: o numero secreto e **maior** ou **menor** que o palpite. O jogo termina quando o jogador acerta e exibe o total de tentativas.

> [!info]
> Este projeto aplica na pratica tudo que voce aprendeu ate aqui: variaveis, tipos, condicionais, funcoes, entrada/saida e conversao de tipos. E o seu primeiro programa interativo completo.

## Passo 1: Gerando o numero secreto

`Math.random()` gera um numero decimal entre 0 e 1. Multiplicando por 100 e arredondando para baixo com `Math.floor()`, obtemos um inteiro de 0 a 99. Somando 1, o intervalo fica de 1 a 100:

```typescript
const secreto: number = Math.floor(Math.random() * 100) + 1;
```

| Expressao | Resultado |
|---|---|
| `Math.random()` | `0.7342...` (exemplo) |
| `* 100` | `73.42...` |
| `Math.floor(...)` | `73` |
| `+ 1` | `74` |

## Passo 2: Configurando a leitura de entrada

Para ler entrada no terminal, usamos o pacote `prompt-sync`. Ele e sincrono — o programa para e espera o usuario digitar:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();
```

A funcao `prompt("...")` exibe a mensagem e retorna o que o jogador digitou como **string**.

## Passo 3: O loop do jogo

O `while` loop e o coracao do jogo. Ele repete as perguntas enquanto o jogador nao acertar:

```typescript
let tentativas: number = 0;
let acertou: boolean = false;

while (!acertou) {
  const resposta: string = prompt("Seu palpite (1-100): ");
  const palpite: number = parseInt(resposta);

  // Valida a entrada
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log("Digite um numero valido entre 1 e 100!");
    continue;
  }

  tentativas++;

  // Compara com o numero secreto
  if (palpite === secreto) {
    console.log(`Acertou em ${tentativas} tentativa(s)!`);
    acertou = true;
  } else if (palpite < secreto) {
    console.log("O numero secreto e MAIOR!");
  } else {
    console.log("O numero secreto e MENOR!");
  }
}
```

> [!info]
> O `while (!acertou)` repete o bloco enquanto `acertou` for `false`. Quando o jogador acerta, `acertou = true` faz o loop parar. O `continue` pula para a proxima iteracao quando a entrada e invalida.

## Passo 4: O jogo completo

Aqui esta o codigo final reunindo todas as partes:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

// --- Estado do jogo ---
const secreto: number = Math.floor(Math.random() * 100) + 1;
let tentativas: number = 0;
let acertou: boolean = false;

// --- Inicio ---
console.log("=== Jogo de Adivinhacao ===");
console.log("Pensei em um numero entre 1 e 100. Tente adivinhar!\n");

// --- Loop principal ---
while (!acertou) {
  const resposta: string = prompt("Seu palpite (1-100): ");
  const palpite: number = parseInt(resposta);

  // Validacao: entrada precisa ser um numero entre 1 e 100
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log("Digite um numero valido entre 1 e 100!");
    continue;
  }

  tentativas++;

  // Comparacao com o numero secreto
  if (palpite === secreto) {
    console.log(`Parabens! Acertou o numero ${secreto} em ${tentativas} tentativa(s)!`);
    acertou = true;
  } else if (palpite < secreto) {
    console.log("O numero secreto e MAIOR! Tente novamente.");
  } else {
    console.log("O numero secreto e MENOR! Tente novamente.");
  }
}
```

Execute com `npx tsx jogo.ts` e tente adivinhar o numero.

## Conceitos aplicados

Cada parte do jogo usa conceitos que voce ja aprendeu:

| Trecho do codigo | Conceito | Licao |
|---|---|---|
| `const secreto: number = ...` | Variavel tipada | Variaveis e tipos |
| `Math.floor(Math.random() * 100) + 1` | Funcoes matematicas | Funcoes |
| `parseInt(resposta)` | Conversao de tipo | Tipos primitivos |
| `isNaN(palpite) \|\| palpite < 1` | Validacao com operadores logicos | Logica booleana |
| `if / else if / else` | Condicional | Condicionais |
| `while (!acertou)` | Loop com condicao | Loops |
| `continue` | Pular iteracao invalida | Loops |
| `prompt("...")` | Leitura de entrada | Entrada e saida |

> [!sucesso]
> Este projeto usa **todos** os conceitos dos modulos anteriores: logica booleana, condicionais, funcoes, loops e entrada/saida. Se conseguiu acompanhar cada parte, esta pronto para projetos mais complexos.

## Melhorias possiveis

Quer um desafio extra? Tente implementar estas melhorias:

- **Limite de tentativas** -- o jogador tem no maximo 10 tentativas. Se nao acertar, perde e o numero e revelado.
- **Niveis de dificuldade** -- facil (1-50), medio (1-100), dificil (1-500). Pergunte ao jogador antes de comecar.
- **Dica de distancia** -- em vez de apenas "maior/menor", diga se esta "quente" (diferenca < 10) ou "frio" (diferenca > 30).
- **Jogar novamente** -- ao final, pergunte se o jogador quer outra rodada sem precisar reiniciar o programa.
- **Historico de palpites** -- use um array para guardar todos os palpites e exibi-los a cada rodada, evitando repeticoes.
