---
slug: "lists-arrays"
modulo: "Módulo 4 — Controle de Fluxo"
titulo: "Listas e Arrays"
subtitulo: "Agrupando dados em coleções ordenadas"
descricao: "Arrays em TypeScript: criar, acessar, modificar, métodos (push, pop, map, filter, find) e iteração."
ordem: 19
proximosPassos:
  - titulo: "Funções"
    descricao: "Crie funções que processam arrays"
  - titulo: "Objetos"
    descricao: "Agrupe dados relacionados"
  - titulo: "Projeto: Jogo"
    descricao: "Use arrays em um jogo interativo"
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
  - pergunta: "Qual método cria um NOVO array com cada elemento transformado?"
    opcoes: ["filter", "find", "map", "push"]
    correta: 2
    explicacao: "✓ map() aplica uma função a cada elemento e retorna um novo array com os resultados. O array original não é modificado."
    explicacaoErrada: "✗ map() transforma cada elemento e retorna um novo array. filter() filtra elementos. find() encontra um único elemento."
  - pergunta: "O que retorna numeros.filter(n => n > 3) se numeros = [1, 2, 3, 4, 5]?"
    opcoes: ["[1, 2, 3]", "[4, 5]", "[3, 4, 5]", "true"]
    correta: 1
    explicacao: "✓ filter() retorna um novo array com apenas os elementos que satisfazem a condição. 4 e 5 são maiores que 3."
    explicacaoErrada: "✗ filter(n => n > 3) mantém apenas elementos maiores que 3. De [1, 2, 3, 4, 5], sobram [4, 5]."
---

## O que é um array?

Um array é uma lista ordenada de valores. Em vez de criar uma variável para cada nota de um aluno, armazene todas em um único array:

```typescript
const notas: number[] = [8.5, 7.0, 9.2, 6.8];
const nomes: string[] = ["Ana", "Bob", "Carlos"];
```

O tipo `number[]` indica um array de números. `string[]` indica um array de strings. Arrays podem conter qualquer tipo, mas todos os elementos devem ser do mesmo tipo.

## Acessando elementos (índice começa em 0)

Cada elemento tem uma posição chamada índice. O primeiro elemento está no índice 0:

```typescript
console.log(notas[0]);     // 8.5 (primeiro)
console.log(notas[3]);     // 6.8 (quarto)
console.log(notas.length); // 4
```

> [!info]
> Índices começam em 0, não em 1. O primeiro elemento é `[0]`, o segundo é `[1]`, e assim por diante. A propriedade `.length` retorna a quantidade total de elementos.

## Modificando arrays

Arrays são mutáveis. Você pode adicionar, remover e alterar elementos:

```typescript
const lista: string[] = ["a", "b", "c"];
lista.push("d");          // adiciona no final → ["a","b","c","d"]
lista.pop();               // remove do final → ["a","b","c"]
lista.unshift("z");        // adiciona no início → ["z","a","b","c"]
lista[1] = "X";           // modifica posição 1 → ["z","X","b","c"]
```

Resumo dos métodos de modificação:

| Método      | Ação                    |
| ----------- | ----------------------- |
| `push()`    | Adiciona no final       |
| `pop()`     | Remove do final         |
| `unshift()` | Adiciona no início      |
| `shift()`   | Remove do início        |

## Métodos úteis

Estes métodos não modificam o array original — eles retornam um novo valor:

```typescript
const numeros = [1, 2, 3, 4, 5];

// map — transforma cada elemento
const dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter — filtra elementos
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]

// find — encontra o primeiro que satisfaz
const maior3 = numeros.find(n => n > 3); // 4

// reduce — reduz a um valor
const soma = numeros.reduce((acc, n) => acc + n, 0); // 15
```

- **`map`** — aplica uma função a cada elemento e retorna um novo array.
- **`filter`** — retorna um novo array com apenas os elementos que passam no teste.
- **`find`** — retorna o primeiro elemento que satisfaz a condição (ou `undefined`).
- **`reduce`** — acumula todos os elementos em um único valor.

## Iterando com for...of

A forma mais direta de percorrer um array:

```typescript
const alunos = ["Ana", "Bob", "Carlos"];

for (const aluno of alunos) {
  console.log(`Aluno: ${aluno}`);
}
```

Se precisar do índice junto com o valor, use `forEach`:

```typescript
alunos.forEach((aluno, indice) => {
  console.log(`${indice + 1}. ${aluno}`);
});
```
