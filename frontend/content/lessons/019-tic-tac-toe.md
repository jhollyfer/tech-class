---
slug: "tic-tac-toe"
modulo: "Módulo 5 — Prática"
titulo: "Projeto: Jogo da Velha"
subtitulo: "Arrays, funções e lógica combinados em um jogo clássico"
descricao: "Jogo da velha completo no terminal com prompt-sync e while loop: tabuleiro como array, verificação de vitória, alternância de jogadores e validação de jogadas."
ordem: 19
proximosPassos:
  - titulo: "Desafios extras"
    descricao: "Adicione IA simples para jogar contra o computador"
  - titulo: "Interface web"
    descricao: "Crie uma versão visual com HTML e CSS"
quiz:
  - pergunta: "Por que o tabuleiro é representado como um array de 9 posições?"
    opcoes: ["Porque arrays são mais rápidos", "Porque o tabuleiro 3x3 tem 9 casas e cada posição armazena o estado", "Porque TypeScript exige arrays", "Porque é mais bonito"]
    correta: 1
    explicacao: "✓ Um array de 9 posições mapeia diretamente as 9 casas do tabuleiro 3x3. Cada posição armazena o número (vazia), 'X' ou 'O'."
    explicacaoErrada: "✗ O array de 9 posições representa as 9 casas do tabuleiro. Cada elemento guarda o estado atual daquela casa."
  - pergunta: "Como o jogo verifica se alguém venceu?"
    opcoes: ["Conta quantos X e O existem", "Testa todas as combinações de 3 em linha (linhas, colunas, diagonais)", "Verifica apenas as diagonais", "Compara com um tabuleiro de referência"]
    correta: 1
    explicacao: "✓ O array combinacoes lista todas as 8 possibilidades de vitória (3 linhas, 3 colunas, 2 diagonais). Um for...of testa se alguma foi preenchida pelo mesmo jogador."
    explicacaoErrada: "✗ São 8 combinações vencedoras: 3 linhas, 3 colunas e 2 diagonais. O jogo testa todas com um for...of."
  - pergunta: "O que acontece quando jogadas chega a 9 sem nenhum vencedor?"
    opcoes: ["O jogo reinicia", "O último jogador vence", "É declarado empate", "O jogo dá erro"]
    correta: 2
    explicacao: "✓ Se todas as 9 casas foram preenchidas e ninguém completou uma linha de 3, o jogo declara empate e encerra."
    explicacaoErrada: "✗ Com 9 jogadas feitas e nenhuma combinação vencedora, todas as casas estão ocupadas — é empate."
---

## O projeto

Jogo da velha completo no terminal para dois jogadores. Tabuleiro 3x3, alternancia entre X e O, validacao de jogadas, deteccao de vitoria e empate. Este e o projeto mais completo do curso ate aqui -- ele combina arrays, funcoes, condicionais, loops e logica de jogo em um programa real.

> [!info]
> Vamos construir o jogo passo a passo. Cada etapa adiciona uma funcionalidade nova. Ao final, tudo se conecta em um programa funcional.

## Passo a passo

### Passo 1: Representando o tabuleiro

O tabuleiro 3x3 tem 9 casas. Usamos um **array de strings** com 9 posicoes. Inicialmente, cada posicao contem seu numero (1 a 9) para que o jogador saiba qual escolher:

```typescript
const tabuleiro: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
```

Visualmente, o array mapeia assim:

```
 1 | 2 | 3      tabuleiro[0] | tabuleiro[1] | tabuleiro[2]
-----------      ------------------------------------------
 4 | 5 | 6      tabuleiro[3] | tabuleiro[4] | tabuleiro[5]
-----------      ------------------------------------------
 7 | 8 | 9      tabuleiro[6] | tabuleiro[7] | tabuleiro[8]
```

Quando um jogador escolhe a posicao 5, `tabuleiro[4]` muda de `"5"` para `"X"` ou `"O"`.

### Passo 2: Exibindo o tabuleiro

Uma funcao dedicada para desenhar o tabuleiro no terminal. Ela sera chamada antes de cada jogada:

```typescript
function exibirTabuleiro(tabuleiro: string[]): void {
  console.log(`
  ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
  ---------
  ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
  ---------
  ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}
  `);
}
```

A funcao recebe o tabuleiro como parametro e usa template literals para formatar a saida. O tipo `void` indica que ela apenas exibe informacao, sem retornar nada.

### Passo 3: Verificando vitoria

Existem **8 formas de vencer**: 3 linhas, 3 colunas e 2 diagonais. Cada combinacao e um array de 3 indices que representam as posicoes no tabuleiro:

```typescript
const combinacoesVitoria: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
  [0, 4, 8], [2, 4, 6],             // diagonais
];

function verificarVitoria(tabuleiro: string[], jogador: string): boolean {
  for (const combo of combinacoesVitoria) {
    const a: number = combo[0];
    const b: number = combo[1];
    const c: number = combo[2];

    if (tabuleiro[a] === jogador &&
        tabuleiro[b] === jogador &&
        tabuleiro[c] === jogador) {
      return true;
    }
  }
  return false;
}
```

A funcao percorre cada combinacao com `for...of`. Para cada uma, extrai os 3 indices e verifica se as 3 posicoes foram preenchidas pelo mesmo jogador.

### Passo 4: Validando a jogada

Antes de marcar uma posicao, precisamos verificar se a jogada e valida -- a posicao deve estar entre 1 e 9, e a casa nao pode ja estar ocupada:

```typescript
function jogadaValida(tabuleiro: string[], posicao: number): boolean {
  return posicao >= 0 && posicao <= 8 &&
    tabuleiro[posicao] !== "X" &&
    tabuleiro[posicao] !== "O";
}
```

A funcao retorna `true` se a posicao esta dentro do intervalo **e** a casa ainda nao foi marcada com X ou O.

### Passo 5: O loop do jogo

O jogo alterna entre jogadores X e O. Cada turno exibe o tabuleiro, pede a jogada, valida, marca no tabuleiro e verifica vitoria ou empate. Usamos um `while` loop para repetir os turnos:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let jogadorAtual: string = "X";
let jogadas: number = 0;
let fimDeJogo: boolean = false;

while (!fimDeJogo) {
  exibirTabuleiro(tabuleiro);

  const resposta: string = prompt(`Jogador ${jogadorAtual}, escolha (1-9): `);
  const posicao: number = parseInt(resposta) - 1;

  // Valida a jogada
  if (!jogadaValida(tabuleiro, posicao)) {
    console.log("Jogada invalida! Escolha uma posicao livre de 1 a 9.");
    continue;
  }

  // Marca a posicao
  tabuleiro[posicao] = jogadorAtual;
  jogadas++;

  // Verifica vitoria
  if (verificarVitoria(tabuleiro, jogadorAtual)) {
    exibirTabuleiro(tabuleiro);
    console.log(`Jogador ${jogadorAtual} venceu! Parabens!`);
    fimDeJogo = true;
    continue;
  }

  // Verifica empate
  if (jogadas === 9) {
    exibirTabuleiro(tabuleiro);
    console.log("Empate! Ninguem venceu.");
    fimDeJogo = true;
    continue;
  }

  // Alterna o jogador
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}
```

> [!info]
> O operador ternario `jogadorAtual === "X" ? "O" : "X"` alterna o jogador de forma concisa. Se e X, muda para O; se e O, muda para X.

### Passo 6: Codigo completo

Aqui esta o jogo reunindo todas as partes:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

// --- Estado do jogo ---
const tabuleiro: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let jogadorAtual: string = "X";
let jogadas: number = 0;
let fimDeJogo: boolean = false;

// --- Combinacoes vencedoras ---
const combinacoesVitoria: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
  [0, 4, 8], [2, 4, 6],             // diagonais
];

// --- Funcoes ---
function exibirTabuleiro(tab: string[]): void {
  console.log(`
  ${tab[0]} | ${tab[1]} | ${tab[2]}
  ---------
  ${tab[3]} | ${tab[4]} | ${tab[5]}
  ---------
  ${tab[6]} | ${tab[7]} | ${tab[8]}
  `);
}

function verificarVitoria(tab: string[], jogador: string): boolean {
  for (const combo of combinacoesVitoria) {
    const a: number = combo[0];
    const b: number = combo[1];
    const c: number = combo[2];

    if (tab[a] === jogador &&
        tab[b] === jogador &&
        tab[c] === jogador) {
      return true;
    }
  }
  return false;
}

function jogadaValida(tab: string[], posicao: number): boolean {
  return posicao >= 0 && posicao <= 8 &&
    tab[posicao] !== "X" &&
    tab[posicao] !== "O";
}

// --- Inicio ---
console.log("=== Jogo da Velha ===");
console.log("Jogador X comeca!\n");

// --- Loop principal ---
while (!fimDeJogo) {
  exibirTabuleiro(tabuleiro);

  const resposta: string = prompt(`Jogador ${jogadorAtual}, escolha (1-9): `);
  const posicao: number = parseInt(resposta) - 1;

  if (!jogadaValida(tabuleiro, posicao)) {
    console.log("Jogada invalida! Escolha uma posicao livre de 1 a 9.");
    continue;
  }

  tabuleiro[posicao] = jogadorAtual;
  jogadas++;

  if (verificarVitoria(tabuleiro, jogadorAtual)) {
    exibirTabuleiro(tabuleiro);
    console.log(`Jogador ${jogadorAtual} venceu! Parabens!`);
    fimDeJogo = true;
    continue;
  }

  if (jogadas === 9) {
    exibirTabuleiro(tabuleiro);
    console.log("Empate! Ninguem venceu.");
    fimDeJogo = true;
    continue;
  }

  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}
```

Execute com `npx tsx velha.ts` e jogue com um amigo no terminal.

## Conceitos aplicados

Este projeto integra todos os conceitos do modulo:

| Trecho do codigo | Conceito | Licao |
|---|---|---|
| `const tabuleiro: string[]` | Array tipado | Arrays |
| `combinacoesVitoria: number[][]` | Array de arrays | Arrays |
| `exibirTabuleiro()`, `verificarVitoria()` | Funcoes com parametros tipados | Funcoes |
| `while (!fimDeJogo)` | Loop com condicao | Loops |
| `prompt("...")` | Leitura de entrada | Entrada e saida |
| `if / else if / else` | Condicionais | Condicionais |
| `for (const combo of combinacoesVitoria)` | Iteracao sobre array | Arrays |
| `jogadorAtual === "X" ? "O" : "X"` | Operador ternario | Condicionais |
| `parseInt(resposta) - 1` | Conversao de tipo | Tipos |

> [!sucesso]
> Este e o projeto mais completo do curso. Ele combina arrays, funcoes, condicionais, loops e entrada/saida em um programa real e funcional. Se entendeu cada parte, voce domina os fundamentos de programacao.

## Melhorias possiveis

Quer ir alem? Aqui estao sugestoes para expandir o jogo:

- **Jogar contra o computador** -- implemente uma IA simples que escolhe posicoes aleatorias livres. Para um desafio maior, faca a IA priorizar o centro, depois os cantos.
- **Placar entre rodadas** -- use variaveis para contar vitorias de X, vitorias de O e empates. Ao final de cada rodada, pergunte se os jogadores querem jogar novamente.
- **Tabuleiro maior** -- adapte o jogo para um tabuleiro 4x4 ou 5x5. Voce precisara atualizar o array de combinacoes vencedoras.
- **Destaque colorido** -- use codigos ANSI para colorir o X de vermelho e o O de azul no terminal: `"\x1b[31mX\x1b[0m"` para vermelho.
- **Validacao de nomes** -- pergunte os nomes dos jogadores no inicio e use-os em vez de "Jogador X" e "Jogador O".
