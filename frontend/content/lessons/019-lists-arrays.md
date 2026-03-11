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

### map --- transforma cada elemento

```typescript
const precos: number[] = [100, 200, 350, 50];
const comDesconto: number[] = precos.map((preco: number) => preco * 0.9);

console.log(comDesconto); // [90, 180, 315, 45]
console.log(precos);      // [100, 200, 350, 50] (original intacto)
```

O `map` aplica uma funcao a **cada elemento** e retorna um **novo array** com os resultados. O array original permanece intacto.

### filter --- filtra elementos

```typescript
const idades: number[] = [15, 22, 17, 30, 12, 25];
const maiores: number[] = idades.filter((idade: number) => idade >= 18);

console.log(maiores); // [22, 30, 25]
```

O `filter` retorna um novo array contendo apenas os elementos que passam no teste (retornam `true`).

### find --- encontra o primeiro

```typescript
const alunos: string[] = ["Ana", "Bob", "Carlos", "Diana"];
const resultado: string | undefined = alunos.find(
  (aluno: string) => aluno.startsWith("C")
);

console.log(resultado); // "Carlos"
```

O `find` retorna o **primeiro** elemento que satisfaz a condicao, ou `undefined` se nenhum satisfizer. Perceba que o tipo inclui `| undefined` --- o TypeScript nos obriga a considerar esse caso.

### reduce --- acumula em um unico valor

```typescript
const numeros: number[] = [1, 2, 3, 4, 5];
const soma: number = numeros.reduce(
  (acumulador: number, atual: number) => acumulador + atual,
  0
);

console.log(soma); // 15
```

O `reduce` percorre o array acumulando valores. O `0` no final e o valor inicial do acumulador. E o metodo mais poderoso, mas tambem o mais complexo.

> [!sucesso]
> **Resumo rapido:** `map` transforma, `filter` seleciona, `find` busca um, `reduce` acumula. Esses quatro metodos sao essenciais para trabalhar com arrays em TypeScript.

## Outros metodos uteis

```typescript
const numeros: number[] = [3, 1, 4, 1, 5, 9, 2, 6];

// includes — verifica se contém
console.log(numeros.includes(5)); // true

// indexOf — encontra a posição
console.log(numeros.indexOf(4)); // 2

// some — verifica se algum satisfaz
const temNegativo: boolean = numeros.some((n: number) => n < 0);
console.log(temNegativo); // false

// every — verifica se todos satisfazem
const todosMaioresQueZero: boolean = numeros.every((n: number) => n > 0);
console.log(todosMaioresQueZero); // true

// sort — ordena (modifica o original!)
const ordenados: number[] = [...numeros].sort((a: number, b: number) => a - b);
console.log(ordenados); // [1, 1, 2, 3, 4, 5, 6, 9]
```

> [!alerta]
> O metodo `sort()` **modifica o array original**. Para manter o original intacto, crie uma copia antes de ordenar usando `[...array]` (spread operator).

## Iterando sobre arrays

A forma mais direta de percorrer um array:

```typescript
const alunos: string[] = ["Ana", "Bob", "Carlos"];

for (const aluno of alunos) {
  console.log(`Aluno: ${aluno}`);
}
```

Se precisar do indice junto com o valor, use `forEach`:

```typescript
alunos.forEach((aluno: string, indice: number) => {
  console.log(`${indice + 1}. ${aluno}`);
});
// 1. Ana
// 2. Bob
// 3. Carlos
```

Para casos em que voce precisa do indice para logica mais complexa (como comparar com o proximo elemento), o `for` classico ainda e a melhor opcao:

```typescript
const temperaturas: number[] = [22, 25, 23, 28, 30, 27];

for (let i: number = 1; i < temperaturas.length; i++) {
  const diferenca: number = temperaturas[i] - temperaturas[i - 1];
  const direcao: string = diferenca > 0 ? "subiu" : "desceu";
  console.log(`Dia ${i + 1}: ${direcao} ${Math.abs(diferenca)}°C`);
}
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
const fahrenheit: number[] = celsius.map(
  (c: number) => (c * 9) / 5 + 32
);

console.log(fahrenheit); // [32, 68, 98.6, 212]
```

## Exercicio pratico

Dado um array de notas de alunos, escreva um programa que:

1. Calcule a media da turma
2. Filtre os alunos aprovados (nota >= 7)
3. Encontre a maior e a menor nota

```typescript
const notas: number[] = [8.5, 6.0, 9.2, 4.5, 7.0, 5.5, 8.0, 3.0];

// 1. Use reduce para calcular a soma, depois divida por notas.length

// 2. Use filter para obter apenas as notas >= 7

// 3. Use Math.max(...notas) e Math.min(...notas) para encontrar os extremos
//    Dica: o ... (spread) "espalha" o array como argumentos da função
```

> [!info]
> Na proxima aula sobre funcoes, voce aprendera a encapsular essa logica em funcoes reutilizaveis, tornando o codigo mais organizado e facil de testar.
