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

Jogo da velha completo no terminal para dois jogadores. Tabuleiro 3x3, alternancia entre X e O, validacao de jogadas, deteccao de vitoria e empate. Este e o projeto mais completo do curso ate aqui -- ele combina arrays, funcoes, condicionais, callbacks e logica de jogo em um programa real.

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
  return combinacoesVitoria.some(([a, b, c]: number[]): boolean =>
    tabuleiro[a] === jogador &&
    tabuleiro[b] === jogador &&
    tabuleiro[c] === jogador
  );
}
```

O metodo `some()` percorre cada combinacao e retorna `true` se **alguma** delas tiver as 3 posicoes preenchidas pelo mesmo jogador. A desestruturacao `[a, b, c]` extrai os 3 indices de cada combinacao.

> [!info]
> `some()` e um metodo de array que recebe um callback e retorna `true` se **pelo menos um** elemento satisfaz a condicao. E perfeito para perguntar: "alguma das 8 combinacoes foi completada?"

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

O jogo alterna entre jogadores X e O. Cada turno exibe o tabuleiro, pede a jogada, valida, marca no tabuleiro e verifica vitoria ou empate. Usamos recursao (a funcao `jogar` chama a si mesma) para repetir os turnos:

```typescript
import * as readline from "readline";

const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let jogadorAtual: string = "X";
let jogadas: number = 0;

function jogar(): void {
  exibirTabuleiro(tabuleiro);

  rl.question(`Jogador ${jogadorAtual}, escolha (1-9): `, (resposta: string): void => {
    const posicao: number = parseInt(resposta) - 1;

    // Valida a jogada
    if (!jogadaValida(tabuleiro, posicao)) {
      console.log("Jogada invalida! Escolha uma posicao livre de 1 a 9.");
      jogar(); // pede novamente
      return;
    }

    // Marca a posicao
    tabuleiro[posicao] = jogadorAtual;
    jogadas++;

    // Verifica vitoria
    if (verificarVitoria(tabuleiro, jogadorAtual)) {
      exibirTabuleiro(tabuleiro);
      console.log(`Jogador ${jogadorAtual} venceu! Parabens!`);
      rl.close();
      return;
    }

    // Verifica empate
    if (jogadas === 9) {
      exibirTabuleiro(tabuleiro);
      console.log("Empate! Ninguem venceu.");
      rl.close();
      return;
    }

    // Alterna o jogador e continua
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    jogar();
  });
}
```

> [!info]
> O operador ternario `jogadorAtual === "X" ? "O" : "X"` alterna o jogador de forma concisa. Se e X, muda para O; se e O, muda para X.

### Passo 6: Codigo completo

Aqui esta o jogo reunindo todas as partes:

```typescript
import * as readline from "readline";

// --- Configuracao ---
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// --- Estado do jogo ---
const tabuleiro: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let jogadorAtual: string = "X";
let jogadas: number = 0;

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
  return combinacoesVitoria.some(([a, b, c]: number[]): boolean =>
    tab[a] === jogador &&
    tab[b] === jogador &&
    tab[c] === jogador
  );
}

function jogadaValida(tab: string[], posicao: number): boolean {
  return posicao >= 0 && posicao <= 8 &&
    tab[posicao] !== "X" &&
    tab[posicao] !== "O";
}

// --- Loop principal ---
function jogar(): void {
  exibirTabuleiro(tabuleiro);

  rl.question(`Jogador ${jogadorAtual}, escolha (1-9): `, (resposta: string): void => {
    const posicao: number = parseInt(resposta) - 1;

    if (!jogadaValida(tabuleiro, posicao)) {
      console.log("Jogada invalida! Escolha uma posicao livre de 1 a 9.");
      jogar();
      return;
    }

    tabuleiro[posicao] = jogadorAtual;
    jogadas++;

    if (verificarVitoria(tabuleiro, jogadorAtual)) {
      exibirTabuleiro(tabuleiro);
      console.log(`Jogador ${jogadorAtual} venceu! Parabens!`);
      rl.close();
      return;
    }

    if (jogadas === 9) {
      exibirTabuleiro(tabuleiro);
      console.log("Empate! Ninguem venceu.");
      rl.close();
      return;
    }

    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    jogar();
  });
}

// --- Inicio ---
console.log("=== Jogo da Velha ===");
console.log("Jogador X comeca!\n");
jogar();
```

Execute com `npx tsx velha.ts` e jogue com um amigo no terminal.

## Conceitos aplicados

Este projeto integra todos os conceitos do modulo:

| Trecho do codigo | Conceito | Licao |
|---|---|---|
| `const tabuleiro: string[]` | Array tipado | Arrays |
| `combinacoesVitoria: number[][]` | Array de arrays | Arrays |
| `exibirTabuleiro()`, `verificarVitoria()` | Funcoes com parametros tipados | Funcoes |
| `jogar()` chamando a si mesma | Recursao (loop) | Funcoes |
| `rl.question("...", callback)` | Callback | Funcoes como parametros |
| `if / else if / else` | Condicionais | Condicionais |
| `some(([a, b, c]) => ...)` | Metodo de array com callback | Arrays + Funcoes |
| `jogadorAtual === "X" ? "O" : "X"` | Operador ternario | Condicionais |
| `parseInt(resposta) - 1` | Conversao de tipo | Tipos |

> [!sucesso]
> Este e o projeto mais completo do curso. Ele combina arrays, funcoes, condicionais, callbacks e entrada/saida em um programa real e funcional. Se entendeu cada parte, voce domina os fundamentos de programacao.

## Melhorias possiveis

Quer ir alem? Aqui estao sugestoes para expandir o jogo:

- **Jogar contra o computador** -- implemente uma IA simples que escolhe posicoes aleatorias livres. Para um desafio maior, faca a IA priorizar o centro, depois os cantos.
- **Placar entre rodadas** -- use variaveis para contar vitorias de X, vitorias de O e empates. Ao final de cada rodada, pergunte se os jogadores querem jogar novamente.
- **Tabuleiro maior** -- adapte o jogo para um tabuleiro 4x4 ou 5x5. Voce precisara atualizar o array de combinacoes vencedoras.
- **Destaque colorido** -- use codigos ANSI para colorir o X de vermelho e o O de azul no terminal: `"\x1b[31mX\x1b[0m"` para vermelho.
- **Validacao de nomes** -- pergunte os nomes dos jogadores no inicio e use-os em vez de "Jogador X" e "Jogador O".
