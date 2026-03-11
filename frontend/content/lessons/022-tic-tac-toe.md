---
slug: "tic-tac-toe"
modulo: "Módulo 4 — Controle de Fluxo"
titulo: "Projeto: Jogo da Velha"
subtitulo: "Arrays, funções e lógica combinados em um jogo clássico"
descricao: "Jogo da velha completo no terminal: tabuleiro como array, verificação de vitória, alternância de jogadores e validação de jogadas."
ordem: 22
proximosPassos:
  - titulo: "Desafios extras"
    descricao: "Adicione IA simples para jogar contra o computador"
  - titulo: "Banco de dados"
    descricao: "Salve o placar dos jogadores"
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
    explicacao: "✓ O array combinacoes lista todas as 8 possibilidades de vitória (3 linhas, 3 colunas, 2 diagonais). O método some() testa se alguma foi preenchida pelo mesmo jogador."
    explicacaoErrada: "✗ São 8 combinações vencedoras: 3 linhas, 3 colunas e 2 diagonais. O jogo testa todas usando some()."
  - pergunta: "O que acontece quando jogadas chega a 9 sem nenhum vencedor?"
    opcoes: ["O jogo reinicia", "O último jogador vence", "É declarado empate", "O jogo dá erro"]
    correta: 2
    explicacao: "✓ Se todas as 9 casas foram preenchidas e ninguém completou uma linha de 3, o jogo declara empate e encerra."
    explicacaoErrada: "✗ Com 9 jogadas feitas e nenhuma combinação vencedora, todas as casas estão ocupadas — é empate."
---

## O projeto

Jogo da velha completo no terminal para dois jogadores. Tabuleiro 3x3, alternância entre X e O, validação de jogadas, detecção de vitória e empate. Este é o projeto mais completo do curso até aqui.

## Passo 1: O tabuleiro

O tabuleiro é um array de 9 posições. Inicialmente, cada posição contém seu número (1 a 9) para o jogador saber qual escolher:

```typescript
const tabuleiro: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function exibirTabuleiro(): void {
  console.log(`
  ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
  ---------
  ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
  ---------
  ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}
  `);
}
```

Quando um jogador escolhe a posição 5, `tabuleiro[4]` muda de `"5"` para `"X"` ou `"O"`.

## Passo 2: Verificar vitória

Existem 8 formas de vencer: 3 linhas, 3 colunas e 2 diagonais. Cada combinação é um array de 3 índices:

```typescript
const combinacoes = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
  [0, 4, 8], [2, 4, 6],             // diagonais
];

function verificarVitoria(jogador: string): boolean {
  return combinacoes.some(([a, b, c]) =>
    tabuleiro[a] === jogador &&
    tabuleiro[b] === jogador &&
    tabuleiro[c] === jogador
  );
}
```

O método `some()` retorna `true` se qualquer combinação tiver as 3 posições preenchidas pelo mesmo jogador. A desestruturação `[a, b, c]` extrai os 3 índices de cada combinação.

## Passo 3: Loop do jogo

O jogo alterna entre jogadores X e O. Cada turno exibe o tabuleiro, pede a jogada, valida, marca no tabuleiro e verifica vitória ou empate:

```typescript
import * as readline from "readline";

const tabuleiro: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const combinacoes = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function exibirTabuleiro(): void {
  console.log(`
  ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
  ---------
  ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
  ---------
  ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}
  `);
}

function verificarVitoria(jogador: string): boolean {
  return combinacoes.some(([a, b, c]) =>
    tabuleiro[a] === jogador &&
    tabuleiro[b] === jogador &&
    tabuleiro[c] === jogador
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let jogadorAtual = "X";
let jogadas = 0;

function jogar() {
  exibirTabuleiro();
  rl.question(`Jogador ${jogadorAtual}, escolha (1-9): `, (resposta) => {
    const posicao = parseInt(resposta) - 1;

    if (posicao < 0 || posicao > 8 || tabuleiro[posicao] === "X" || tabuleiro[posicao] === "O") {
      console.log("Jogada inválida!");
      jogar();
      return;
    }

    tabuleiro[posicao] = jogadorAtual;
    jogadas++;

    if (verificarVitoria(jogadorAtual)) {
      exibirTabuleiro();
      console.log(`Jogador ${jogadorAtual} venceu!`);
      rl.close();
      return;
    }

    if (jogadas === 9) {
      exibirTabuleiro();
      console.log("Empate!");
      rl.close();
      return;
    }

    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    jogar();
  });
}

jogar();
```

Execute com `npx tsx velha.ts` e jogue com um amigo no terminal.

## Conceitos aplicados

Este projeto integra todos os conceitos do módulo:

- **Array** — tabuleiro como array de 9 posições, combinações de vitória como array de arrays.
- **Funções** — `exibirTabuleiro`, `verificarVitoria`, `jogar` encapsulam responsabilidades distintas.
- **Loops** — recursão via `jogar()` para alternância de turnos.
- **Condicionais** — verificar vitória, empate, jogada válida e alternância de jogador.
- **Métodos de array** — `some()` para checar combinações vencedoras.
- **Operador ternário** — `jogadorAtual === "X" ? "O" : "X"` para alternar jogadores.

> [!sucesso]
> Este é o projeto mais completo do curso. Ele combina arrays, funções, condicionais, loops e entrada/saída em um programa real e funcional. Se entendeu cada parte, domina os fundamentos de programação.
