---
slug: "prime-numbers"
modulo: "Módulo 5 — Prática"
titulo: "Desafio: Números Primos"
subtitulo: "Verificando e listando números primos"
descricao: "Verificar se um número é primo usando loops e Math.sqrt, listar todos os primos até N e otimizar com raiz quadrada."
ordem: 17
proximosPassos:
  - titulo: "Projeto: Carrinho de Compras"
    descricao: "Simule um carrinho com arrays e funções"
  - titulo: "Projeto: Jogo da Velha"
    descricao: "Jogo completo no terminal"
quiz:
  - pergunta: "O que é um número primo?"
    opcoes: ["Divisível por qualquer número", "Divisível apenas por 1 e por ele mesmo", "Apenas números ímpares", "Números maiores que 10"]
    correta: 1
    explicacao: "✓ Um número primo só é divisível por 1 e por si mesmo. Exemplos: 2, 3, 5, 7, 11, 13."
    explicacaoErrada: "✗ Primo = divisível apenas por 1 e por ele mesmo. 2 é primo (e é par!). 9 não é primo (3 x 3)."
  - pergunta: "Por que verificamos divisores apenas até Math.sqrt(n)?"
    opcoes: ["Por convenção", "Porque é mais rápido e suficiente — se não achou divisor até a raiz, não vai achar depois", "Porque Math.sqrt é obrigatório", "Não faz diferença"]
    correta: 1
    explicacao: "✓ Se n tem um divisor maior que √n, então ele também tem um menor que √n. Basta verificar até a raiz."
    explicacaoErrada: "✗ Otimização matemática: divisores vêm em pares (a × b = n). Se a > √n, então b < √n — já teria sido encontrado."
  - pergunta: "O número 1 é primo?"
    opcoes: ["Sim", "Não", "Depende", "Só se for ímpar"]
    correta: 1
    explicacao: "✓ Por definição, 1 não é primo. Primos começam em 2 (o menor e único primo par)."
    explicacaoErrada: "✗ 1 não é primo por definição. O menor primo é 2."
---

## O que e um numero primo?

Um numero e primo se so e divisivel por 1 e por ele mesmo. Exemplos: 2, 3, 5, 7, 11, 13. O numero 1 nao e primo por definicao.

## Verificando se e primo

```typescript
function ePrimo(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // tem divisor → não é primo
  }
  return true;
}

console.log(ePrimo(7));   // true
console.log(ePrimo(10));  // false
console.log(ePrimo(2));   // true
console.log(ePrimo(1));   // false
```

### Por que Math.sqrt?

Em vez de testar divisores ate `n - 1`, testamos apenas ate a raiz quadrada de `n`. Se `n` tem um divisor maior que `√n`, ele tambem tem um menor que `√n` --- entao ja teria sido encontrado.

Para `n = 100`, em vez de testar 98 divisores (2 a 99), testamos apenas 9 (2 a 10). Quanto maior o numero, maior a economia.

> [!info]
> `Math.sqrt(n)` retorna a raiz quadrada de `n`. `Math.sqrt(100)` retorna `10`. E uma funcao da biblioteca matematica padrao do JavaScript.

## Listando primos ate N

```typescript
function listarPrimosAte(limite: number): number[] {
  const primos: number[] = [];
  for (let i = 2; i <= limite; i++) {
    if (ePrimo(i)) primos.push(i);
  }
  return primos;
}

const primos = listarPrimosAte(50);
console.log(primos);
// → [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
```

A funcao percorre todos os numeros de 2 ate o limite e usa `ePrimo` para filtrar. O resultado e um array com todos os primos encontrados.

### Versao interativa

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const entrada = prompt("Listar primos até: ");
const limite = parseInt(entrada);

if (isNaN(limite) || limite < 2) {
  console.log("Digite um número válido (>= 2)");
} else {
  const primos = listarPrimosAte(limite);
  console.log(`Encontrados ${primos.length} primos até ${limite}:`);
  console.log(primos.join(", "));
}
```

> [!sucesso]
> Conceitos aplicados: funcoes com retorno boolean, for loop, Math.sqrt para otimizacao, guard clause, arrays com push e prompt-sync.

## Exercicio extra

Crie uma funcao que retorna o N-esimo primo (ex: o 10o primo e 29):

```typescript
function nEsimoPrimo(n: number): number {
  // Conte primos até encontrar o n-ésimo
  // Dica: use um while loop e incremente um contador
}
```
