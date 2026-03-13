---
slug: "arrays-basics"
modulo: "Módulo 4 — Dados e Funções"
titulo: "Arrays: Criação e Manipulação"
subtitulo: "Agrupando dados em coleções ordenadas"
descricao: "Arrays em TypeScript: criar, acessar, modificar, métodos (push, pop, includes, indexOf) e iteração com for."
ordem: 10
proximosPassos:
  - titulo: "Métodos funcionais"
    descricao: "filter, map, reduce e mais"
  - titulo: "Funções"
    descricao: "Organize código em blocos reutilizáveis"
quiz:
  - pergunta: "Qual é o índice do primeiro elemento de um array?"
    opcoes: ["1", "0", "-1", "Depende do array"]
    correta: 1
    explicacao: "✓ Arrays começam no índice 0. O primeiro elemento é [0], o segundo é [1], e assim por diante."
    explicacaoErrada: "✗ Em TypeScript/JavaScript (e na maioria das linguagens), o primeiro elemento de um array está no índice 0."
  - pergunta: "O que faz o método push()?"
    opcoes: ["Remove o primeiro elemento", "Adiciona um elemento no final", "Ordena o array", "Remove o último elemento"]
    correta: 1
    explicacao: "✓ push() adiciona um ou mais elementos no final do array. Para remover do final, use pop()."
    explicacaoErrada: "✗ push() adiciona no final. pop() remove do final. unshift() adiciona no início. shift() remove do início."
---

## O que e um array?

Um array e uma lista ordenada de valores. Imagine uma sala de aula: em vez de criar uma variavel separada para cada nota de cada aluno, voce armazena todas em uma unica lista:

```typescript
const notas: number[] = [8.5, 7.0, 9.2, 6.8];
const nomes: string[] = ["Ana", "Bob", "Carlos"];
const aprovados: boolean[] = [true, true, false, true];
```

O tipo `number[]` indica um array de numeros. `string[]` indica um array de strings. `boolean[]` indica um array de booleanos. Em TypeScript, todos os elementos de um array tipado devem ser do mesmo tipo.

> [!info]
> Voce tambem pode usar a sintaxe `Array<number>` em vez de `number[]`. Ambas sao equivalentes, mas `number[]` e mais comum por ser mais curta.

## Acessando elementos (indice comeca em 0)

Cada elemento tem uma posicao chamada indice. O primeiro elemento esta no indice 0:

```typescript
const frutas: string[] = ["maçã", "banana", "uva", "manga"];

console.log(frutas[0]);     // "maçã" (primeiro)
console.log(frutas[2]);     // "uva" (terceiro)
console.log(frutas[3]);     // "manga" (quarto/último)
console.log(frutas.length); // 4
```

Visualizando os indices:

```
Índice:   0        1        2       3
Valor:  "maçã"  "banana"  "uva"  "manga"
```

> [!alerta]
> Cuidado ao acessar um indice que nao existe. `frutas[10]` retorna `undefined` em vez de dar erro. Sempre verifique se o indice esta dentro do limite (`indice < array.length`).

Para acessar o ultimo elemento sem saber o tamanho:

```typescript
const ultimo: string = frutas[frutas.length - 1]; // "manga"
```

## Modificando arrays

Mesmo declarado com `const`, o **conteudo** de um array pode ser alterado (o `const` impede apenas reatribuir a variavel para outro array). Voce pode adicionar, remover e alterar elementos:

```typescript
const lista: string[] = ["a", "b", "c"];

lista.push("d");          // adiciona no final → ["a","b","c","d"]
lista.pop();               // remove do final → ["a","b","c"]
lista.unshift("z");        // adiciona no início → ["z","a","b","c"]
lista.shift();             // remove do início → ["a","b","c"]
lista[1] = "X";           // modifica posição 1 → ["a","X","c"]
```

Resumo dos metodos de modificacao:

| Metodo      | Acao                    | Retorno                    |
| ----------- | ----------------------- | -------------------------- |
| `push()`    | Adiciona no final       | Novo tamanho do array      |
| `pop()`     | Remove do final         | Elemento removido          |
| `unshift()` | Adiciona no inicio      | Novo tamanho do array      |
| `shift()`   | Remove do inicio        | Elemento removido          |
| `splice()`  | Remove/insere no meio   | Array dos removidos        |

### Removendo e inserindo no meio com splice

O `splice` e versátil --- remove elementos de qualquer posicao e, opcionalmente, insere novos:

```typescript
const cores: string[] = ["vermelho", "azul", "verde", "amarelo"];

// Remove 1 elemento a partir do índice 1
cores.splice(1, 1); // ["vermelho", "verde", "amarelo"]

// Insere "roxo" no índice 1 (sem remover nada)
cores.splice(1, 0, "roxo"); // ["vermelho", "roxo", "verde", "amarelo"]
```

## Metodos que retornam novos valores

Estes metodos **nao modificam** o array original --- eles retornam um novo valor. Isso e importante porque manter os dados originais intactos ajuda a evitar bugs:

### Somando elementos com for

Para acumular valores de um array, use um `for...of` com uma variavel acumuladora:

```typescript
const numeros: number[] = [1, 2, 3, 4, 5];
let soma: number = 0;

for (const n of numeros) {
  soma = soma + n;
}

console.log(soma); // 15
```

> [!sucesso]
> **Resumo rapido:** Para acumular valores de um array, use um `for` simples com uma variavel acumuladora.

## Outros metodos uteis

```typescript
const numeros: number[] = [3, 1, 4, 1, 5, 9, 2, 6];

// includes — verifica se contém
console.log(numeros.includes(5)); // true

// indexOf — encontra a posição
console.log(numeros.indexOf(4)); // 2
```

## Iterando sobre arrays

A forma mais direta de percorrer um array:

```typescript
const alunos: string[] = ["Ana", "Bob", "Carlos"];

for (const aluno of alunos) {
  console.log(`Aluno: ${aluno}`);
}
```

Se precisar do indice junto com o valor, use o `for` classico:

```typescript
for (let i: number = 0; i < alunos.length; i++) {
  console.log(`${i + 1}. ${alunos[i]}`);
}
// 1. Ana
// 2. Bob
// 3. Carlos
```

## Padroes comuns com arrays

### Encontrar o maior valor

```typescript
const valores: number[] = [45, 12, 78, 34, 91, 23];
let maior: number = valores[0];

for (const valor of valores) {
  if (valor > maior) {
    maior = valor;
  }
}

console.log(`Maior valor: ${maior}`); // 91
```

### Contar ocorrencias

```typescript
const votos: string[] = ["A", "B", "A", "C", "B", "A", "A"];
let votosA: number = 0;

for (const voto of votos) {
  if (voto === "A") votosA++;
}

console.log(`Candidato A: ${votosA} votos`); // 4
```

### Criar um novo array a partir de outro

```typescript
const celsius: number[] = [0, 20, 37, 100];
const fahrenheit: number[] = [];

for (const c of celsius) {
  fahrenheit.push((c * 9) / 5 + 32);
}

console.log(fahrenheit); // [32, 68, 98.6, 212]
```

## Exercicio pratico

Dado um array de notas de alunos, escreva um programa que:

1. Calcule a media da turma
2. Filtre os alunos aprovados (nota >= 7)
3. Encontre a maior e a menor nota

```typescript
const notas: number[] = [8.5, 6.0, 9.2, 4.5, 7.0, 5.5, 8.0, 3.0];

// 1. Use um for para calcular a soma, depois divida por notas.length

// 2. Use um for para obter apenas as notas >= 7 (adicione em um novo array com push)

// 3. Use um for para encontrar a maior e a menor nota
```

> [!info]
> Na proxima aula sobre funcoes, voce aprendera a encapsular essa logica em funcoes reutilizaveis, tornando o codigo mais organizado e facil de testar.
