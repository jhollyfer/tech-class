---
slug: "functional-array-methods"
modulo: "Módulo 4 — Dados e Funções"
titulo: "Métodos Funcionais de Arrays"
subtitulo: "filter, map, reduce, find, some e every"
descricao: "Métodos funcionais de arrays em TypeScript: filter para filtrar, map para transformar, reduce para acumular, find para buscar, some e every para verificar."
ordem: 11
proximosPassos:
  - titulo: "Funções"
    descricao: "Organize código em blocos reutilizáveis"
  - titulo: "Callbacks"
    descricao: "Passe funções como argumento"
quiz:
  - pergunta: "O que o método filter retorna?"
    opcoes: ["O primeiro elemento encontrado", "Um novo array com os elementos que passam no teste", "true ou false", "O array original modificado"]
    correta: 1
    explicacao: "✓ filter() retorna um NOVO array contendo apenas os elementos que satisfazem a condição. O array original não é modificado."
    explicacaoErrada: "✗ filter() não modifica o original — retorna um novo array apenas com os elementos que passam no critério."
  - pergunta: "Qual método transforma cada elemento e retorna um novo array?"
    opcoes: ["filter", "find", "map", "reduce"]
    correta: 2
    explicacao: "✓ map() aplica uma função a cada elemento e retorna um novo array com os resultados transformados."
    explicacaoErrada: "✗ map() transforma cada elemento. filter() filtra. find() busca um. reduce() acumula."
  - pergunta: "O que reduce faz?"
    opcoes: ["Remove elementos do array", "Acumula um valor percorrendo o array", "Reduz o tamanho do array", "Ordena o array"]
    correta: 1
    explicacao: "✓ reduce() percorre o array acumulando um valor (soma, contagem, objeto, etc.) e retorna o resultado final."
    explicacaoErrada: "✗ reduce() não remove nem redimensiona — ele acumula. Exemplo: somar todos os elementos do array."
  - pergunta: "Qual a diferença entre some e every?"
    opcoes: ["São iguais", "some retorna true se ALGUM satisfaz; every retorna true se TODOS satisfazem", "some retorna array, every retorna boolean", "some é mais rápido"]
    correta: 1
    explicacao: "✓ some() = pelo menos um satisfaz. every() = todos satisfazem. Ambos retornam boolean."
    explicacaoErrada: "✗ some() verifica se ALGUM elemento passa. every() verifica se TODOS passam."
---

## Por que metodos funcionais?

Na aula anterior, voce percorreu arrays com `for` e `for...of`. Metodos funcionais fazem a mesma coisa de forma mais concisa e expressiva. A regra de ouro: **eles nunca modificam o array original** --- sempre retornam um novo valor.

## filter --- selecionar elementos

Retorna um novo array contendo apenas os elementos que passam no criterio:

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0, 5.5];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados); // [8.5, 7.0, 9.5]

const reprovados = notas.filter((nota) => nota < 7);
console.log(reprovados); // [6.0, 5.5]
```

A funcao dentro do `filter` recebe cada elemento e retorna `true` (manter) ou `false` (descartar).

## map --- transformar cada elemento

Aplica uma funcao a cada elemento e retorna um novo array com os resultados:

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0, 5.5];

const arredondadas = notas.map((nota) => Math.round(nota));
console.log(arredondadas); // [9, 7, 10, 6, 6]

const comBonus = notas.map((nota) => nota + 0.5);
console.log(comBonus); // [9.0, 7.5, 10.0, 6.5, 6.0]
```

> [!info]
> `map` sempre retorna um array do mesmo tamanho. Cada elemento do original vira um elemento transformado no novo array.

## reduce --- acumular um valor

Percorre o array acumulando um resultado. O mais versatil dos metodos funcionais:

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0, 5.5];

// Soma de todos os elementos
const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
console.log(soma); // 36.5

// Média
const media = soma / notas.length;
console.log(media); // 7.3
```

O `reduce` recebe dois argumentos: uma funcao com `(acumulador, elementoAtual)` e o valor inicial do acumulador (nesse caso, `0`).

### Exemplo pratico: contar ocorrencias

```typescript
const votos: string[] = ["A", "B", "A", "C", "B", "A"];

const contagem = votos.reduce((acc, voto) => {
  acc[voto] = (acc[voto] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log(contagem); // { A: 3, B: 2, C: 1 }
```

## find --- encontrar o primeiro

Retorna o **primeiro** elemento que satisfaz a condicao, ou `undefined` se nenhum satisfizer:

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0, 5.5];

const primeiraBaixa = notas.find((nota) => nota < 7);
console.log(primeiraBaixa); // 6.0

const notaDez = notas.find((nota) => nota === 10);
console.log(notaDez); // undefined
```

> [!alerta]
> `find` retorna um unico elemento (ou `undefined`), nao um array. Se precisar de todos os elementos que satisfazem a condicao, use `filter`.

## some e every --- verificar condicoes

```typescript
const notas: number[] = [8.5, 7.0, 9.5, 6.0, 5.5];

// some — retorna true se ALGUM elemento satisfaz
const temReprovado = notas.some((nota) => nota < 7);
console.log(temReprovado); // true

// every — retorna true se TODOS satisfazem
const todosAprovados = notas.every((nota) => nota >= 7);
console.log(todosAprovados); // false
```

`some` e `every` retornam `boolean`. Sao uteis para validacoes rapidas.

## Encadeando metodos

Uma das grandes vantagens dos metodos funcionais e que voce pode encadea-los:

```typescript
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros
  .filter((n) => n % 2 === 0)    // [2, 4, 6, 8, 10]
  .map((n) => n * 3)             // [6, 12, 18, 24, 30]
  .reduce((acc, n) => acc + n, 0); // 90

console.log(resultado); // 90
```

> [!sucesso]
> **Resumo rapido:** `filter` seleciona, `map` transforma, `reduce` acumula, `find` busca um, `some`/`every` verificam. Nenhum deles modifica o array original.
