---
slug: "for-of-break-continue"
modulo: "Módulo 3 — Controle de Fluxo"
titulo: "for...of, break e continue"
subtitulo: "Percorrendo arrays e controlando o fluxo dos loops"
descricao: "for...of para iterar arrays, break para interromper loops e continue para pular iterações em TypeScript."
ordem: 9
proximosPassos:
  - titulo: "Arrays"
    descricao: "Crie e manipule arrays"
  - titulo: "Métodos funcionais"
    descricao: "filter, map, reduce e mais"
quiz:
  - pergunta: "Qual a vantagem do for...of sobre o for clássico?"
    opcoes: ["É mais rápido", "Acessa o valor diretamente sem precisar de índice", "Funciona com números", "Permite modificar o array"]
    correta: 1
    explicacao: "✓ for...of acessa cada valor diretamente (for const item of array), sem precisar gerenciar índices manualmente."
    explicacaoErrada: "✗ for...of é mais limpo quando você só precisa do valor de cada elemento, sem se preocupar com índice."
  - pergunta: "O que o break faz dentro de um loop?"
    opcoes: ["Pula para a próxima iteração", "Encerra o loop completamente", "Pausa o loop temporariamente", "Reinicia o loop"]
    correta: 1
    explicacao: "✓ break encerra o loop inteiro imediatamente. A execução continua após o loop."
    explicacaoErrada: "✗ break sai do loop por completo. Para pular uma iteração, use continue."
  - pergunta: "O que o continue faz dentro de um loop?"
    opcoes: ["Encerra o loop", "Pula o restante da iteração atual e vai para a próxima", "Continua executando normalmente", "Reinicia o loop do início"]
    correta: 1
    explicacao: "✓ continue pula o restante da iteração atual e vai direto para a próxima repetição do loop."
    explicacaoErrada: "✗ continue não encerra o loop — ele pula o resto da iteração atual e segue para a próxima."
---

## for...of --- percorrendo arrays

O `for...of` percorre cada elemento de um array diretamente, sem precisar de indice:

```typescript
const nomes: string[] = ["Ana", "Bruno", "Carol"];

for (const nome of nomes) {
  console.log(`Olá, ${nome}!`);
}
// → Olá, Ana!
// → Olá, Bruno!
// → Olá, Carol!
```

E mais limpo que `for (let i = 0; i < nomes.length; i++)` quando voce so precisa do valor de cada elemento.

### Exemplo pratico: soma de notas

```typescript
const notas: number[] = [8.5, 7.0, 9.2, 6.8];
let total: number = 0;

for (const nota of notas) {
  total += nota;
}

const media: number = total / notas.length;
console.log(`Média: ${media.toFixed(1)}`); // Média: 7.9
```

> [!info]
> Use `for...of` quando precisa apenas do **valor** de cada elemento. Se precisar do **indice** tambem, use o `for` classico: `for (let i = 0; i < array.length; i++)`.

## break --- interromper o loop

O `break` encerra o loop completamente. Util para parar de procurar quando encontrar o que precisa:

```typescript
// Encontrar um nome no array
const nomes: string[] = ["Ana", "Bob", "Carlos", "Diana", "Eduardo"];
const busca: string = "Carlos";

for (const nome of nomes) {
  if (nome === busca) {
    console.log(`${busca} encontrado!`);
    break; // não precisa continuar procurando
  }
}
```

Outro exemplo --- parar no primeiro numero negativo:

```typescript
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i); // 1, 2, 3, 4, 5, 6
}
```

## continue --- pular uma iteracao

O `continue` pula o restante da iteracao atual e vai para a proxima. Util para ignorar elementos que nao interessam:

```typescript
const numeros: number[] = [12, -5, 8, -3, 20, 0, 15];

console.log("Apenas positivos:");
for (const num of numeros) {
  if (num <= 0) continue; // pula negativos e zero
  console.log(num);        // 12, 8, 20, 15
}
```

Pular numeros pares e exibir apenas impares:

```typescript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9
}
```

## Combinando break e continue

```typescript
for (let i: number = 1; i <= 10; i++) {
  if (i === 8) break;          // para o loop no 8
  if (i % 2 === 0) continue;   // pula números pares
  console.log(i);               // 1, 3, 5, 7
}
```

> [!alerta]
> Use `break` e `continue` com moderacao. Muitos deles em um unico loop dificultam a leitura. Se o loop ficou complexo, considere extrair a logica para uma funcao.

## Exercicio pratico

Dado um array de numeros, encontre o primeiro numero primo e pare:

```typescript
const numeros: number[] = [4, 6, 8, 9, 11, 15, 17];

for (const n of numeros) {
  // Pule números menores que 2 com continue
  // Verifique se é primo
  // Se for primo, exiba e use break
}
```

> [!sucesso]
> **Resumo:** `for...of` percorre arrays de forma limpa. `break` encerra o loop. `continue` pula uma iteracao. Use-os para controlar o fluxo dentro de qualquer loop.
