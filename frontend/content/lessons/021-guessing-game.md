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

Para ler entrada no terminal, usamos o modulo `readline` do Node.js. Ele cria uma interface que conecta a entrada e a saida do terminal:

```typescript
import * as readline from "readline";

const rl: readline.Interface = readline.createInterface({
  input: process.stdin,   // le do teclado
  output: process.stdout, // escreve no terminal
});
```

O metodo `rl.question()` exibe uma pergunta e espera a resposta do jogador. A resposta chega como **string** dentro de um callback.

## Passo 3: Logica de cada tentativa

A funcao `perguntar()` e o coracao do jogo. Ela exibe a pergunta, le a resposta, valida a entrada, compara com o numero secreto e decide o proximo passo:

```typescript
let tentativas: number = 0;

function perguntar(): void {
  rl.question("Seu palpite (1-100): ", (resposta: string): void => {
    // Converte string para numero
    const palpite: number = parseInt(resposta);
    tentativas++;

    // Valida a entrada
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      console.log("Digite um numero valido entre 1 e 100!");
      perguntar(); // pede novamente
      return;
    }

    // Compara com o numero secreto
    if (palpite === secreto) {
      console.log(`Acertou em ${tentativas} tentativa(s)!`);
      rl.close(); // encerra o jogo
    } else if (palpite < secreto) {
      console.log("O numero secreto e MAIOR!");
      perguntar(); // tenta novamente
    } else {
      console.log("O numero secreto e MENOR!");
      perguntar(); // tenta novamente
    }
  });
}
```

> [!info]
> A funcao `perguntar()` chama a si mesma quando o jogador erra. Isso e **recursao** -- uma tecnica onde a funcao se repete ate que uma condicao de parada seja atendida (neste caso, o acerto).

## Passo 4: O jogo completo

Aqui esta o codigo final reunindo todas as partes:

```typescript
import * as readline from "readline";

// --- Configuracao ---
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// --- Estado do jogo ---
const secreto: number = Math.floor(Math.random() * 100) + 1;
let tentativas: number = 0;

// --- Logica principal ---
function perguntar(): void {
  rl.question("Seu palpite (1-100): ", (resposta: string): void => {
    const palpite: number = parseInt(resposta);
    tentativas++;

    // Validacao: entrada precisa ser um numero entre 1 e 100
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      console.log("Digite um numero valido entre 1 e 100!");
      perguntar();
      return;
    }

    // Comparacao com o numero secreto
    if (palpite === secreto) {
      console.log(`Parabens! Acertou o numero ${secreto} em ${tentativas} tentativa(s)!`);
      rl.close();
    } else if (palpite < secreto) {
      console.log("O numero secreto e MAIOR! Tente novamente.");
      perguntar();
    } else {
      console.log("O numero secreto e MENOR! Tente novamente.");
      perguntar();
    }
  });
}

// --- Inicio ---
console.log("=== Jogo de Adivinhacao ===");
console.log("Pensei em um numero entre 1 e 100. Tente adivinhar!\n");
perguntar();
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
| `perguntar()` chamando a si mesma | Recursao (loop) | Funcoes |
| `rl.question("...", callback)` | Callback | Funcoes como parametros |
| `rl.close()` | Controle de fluxo | Finalizacao do programa |

> [!sucesso]
> Este projeto usa **todos** os conceitos dos modulos anteriores: logica booleana, condicionais, funcoes, callbacks e entrada/saida. Se conseguiu acompanhar cada parte, esta pronto para projetos mais complexos.

## Melhorias possiveis

Quer um desafio extra? Tente implementar estas melhorias:

- **Limite de tentativas** -- o jogador tem no maximo 10 tentativas. Se nao acertar, perde e o numero e revelado.
- **Niveis de dificuldade** -- facil (1-50), medio (1-100), dificil (1-500). Pergunte ao jogador antes de comecar.
- **Dica de distancia** -- em vez de apenas "maior/menor", diga se esta "quente" (diferenca < 10) ou "frio" (diferenca > 30).
- **Jogar novamente** -- ao final, pergunte se o jogador quer outra rodada sem precisar reiniciar o programa.
- **Historico de palpites** -- use um array para guardar todos os palpites e exibi-los a cada rodada, evitando repeticoes.
