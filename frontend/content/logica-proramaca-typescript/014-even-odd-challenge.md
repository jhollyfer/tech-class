---
slug: "even-odd-challenge"
modulo: "Módulo 5 — Prática"
titulo: "Desafio: Par ou Ímpar"
subtitulo: "Classificando números e lendo entrada do usuário"
descricao: "Primeiro desafio prático: classificar números como par ou ímpar, introdução ao prompt-sync para ler entrada do usuário no terminal."
ordem: 14
proximosPassos:
  - titulo: "Desafio: Tabuada"
    descricao: "Gere tabuadas com loops"
  - titulo: "Desafio: Sistema de Aprovação"
    descricao: "Classifique alunos por nota"
quiz:
  - pergunta: "Como verificar se um número é par em TypeScript?"
    opcoes: ["n / 2 === 0", "n % 2 === 0", "n * 2 === 0", "n == par"]
    correta: 1
    explicacao: "✓ O operador % (módulo) retorna o resto da divisão. Se n % 2 === 0, o número é par."
    explicacaoErrada: "✗ Use o operador módulo: n % 2 === 0 significa que n dividido por 2 tem resto 0 — ou seja, é par."
  - pergunta: "O que o prompt-sync faz?"
    opcoes: ["Exibe mensagens no terminal", "Lê entrada do usuário no terminal", "Cria arquivos", "Conecta à internet"]
    correta: 1
    explicacao: "✓ prompt-sync permite ler texto digitado pelo usuário no terminal, similar ao input() do Python."
    explicacaoErrada: "✗ prompt-sync é uma biblioteca para ler entrada do teclado no terminal em Node.js/TypeScript."
  - pergunta: "O que parseInt('42') retorna?"
    opcoes: ["'42' (string)", "42 (number)", "undefined", "NaN"]
    correta: 1
    explicacao: "✓ parseInt() converte uma string numérica em número inteiro. '42' vira 42."
    explicacaoErrada: "✗ parseInt() transforma texto em número inteiro. Se a string não for numérica, retorna NaN."
---

## Configurando entrada do usuario

Ate agora, todos os valores estavam fixos no codigo. Para tornar os programas interativos, vamos usar o `prompt-sync` para ler dados do teclado.

### Instalando o prompt-sync

```bash
npm install prompt-sync
npm install -D @types/prompt-sync
```

### Usando no codigo

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const nome: string = prompt("Qual seu nome? ");
console.log(`Olá, ${nome}!`);

const idadeTexto: string = prompt("Qual sua idade? ");
const idade: number = parseInt(idadeTexto);
console.log(`Você tem ${idade} anos`);
```

> [!info]
> O `prompt()` sempre retorna uma **string**. Para trabalhar com numeros, use `parseInt()` (inteiros) ou `parseFloat()` (decimais) para converter.

## O desafio

**Problema:** dada uma lista de numeros, classifique cada um como par ou impar.

### Versao com array fixo

```typescript
function parOuImpar(n: number): string {
  return n % 2 === 0 ? "par" : "ímpar";
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (const n of numeros) {
  console.log(`${n} é ${parOuImpar(n)}`);
}

// → 1 é ímpar
// → 2 é par
// → 3 é ímpar
// → ...
```

O operador `%` (modulo) retorna o resto da divisao. Se `n % 2 === 0`, o numero e par. Se nao, e impar. O ternario transforma isso em uma unica linha.

### Versao interativa

Agora com entrada do usuario:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

function parOuImpar(n: number): string {
  return n % 2 === 0 ? "par" : "ímpar";
}

let continuar = true;

while (continuar) {
  const entrada = prompt("Digite um número (ou 'sair'): ");

  if (entrada === "sair") {
    continuar = false;
    continue;
  }

  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log("Entrada inválida. Digite um número.");
    continue;
  }

  console.log(`${numero} é ${parOuImpar(numero)}`);
}

console.log("Programa encerrado.");
```

> [!sucesso]
> Conceitos aplicados: funcoes, operador ternario, operador modulo, while loop, break/continue, prompt-sync e validacao de entrada.

## Exercicio extra

Modifique o programa para contar quantos numeros pares e quantos impares o usuario digitou antes de sair:

```typescript
let pares = 0;
let impares = 0;

// Use a versão interativa acima como base
// Incremente pares ou impares conforme a classificação
// Exiba o total ao final
```
