---
slug: "conditionals"
modulo: "Módulo 4 — Controle de Fluxo"
titulo: "Estruturas Condicionais"
subtitulo: "Tomando decisões no código com if, else e switch"
descricao: "if, else if, else, switch/case, operadores de comparação e operador ternário em TypeScript."
ordem: 16
proximosPassos:
  - titulo: "Condicionais aninhadas"
    descricao: "Combine múltiplas decisões"
  - titulo: "Operadores lógicos"
    descricao: "Use &&, || e ! nas condições"
  - titulo: "Loops"
    descricao: "Repita ações automaticamente"
quiz:
  - pergunta: "O que acontece quando a condição de um if é falsa e não há else?"
    opcoes: ["O programa dá erro", "O bloco do if executa mesmo assim", "Nada acontece, o programa segue adiante", "O programa para de executar"]
    correta: 2
    explicacao: "✓ Se a condição é falsa e não existe else, o programa simplesmente pula o bloco do if e continua executando o que vem depois."
    explicacaoErrada: "✗ Sem else, o bloco do if é ignorado quando a condição é falsa. O programa segue normalmente."
  - pergunta: "Qual operador verifica igualdade estrita em TypeScript?"
    opcoes: ["=", "==", "===", "!="]
    correta: 2
    explicacao: "✓ === compara valor E tipo sem conversão. É o operador recomendado em TypeScript/JavaScript."
    explicacaoErrada: "✗ O = é atribuição, o == faz conversão de tipo. Use === para igualdade estrita (valor e tipo)."
  - pergunta: "Quando usar switch em vez de if/else if?"
    opcoes: ["Quando há apenas 2 opções", "Quando há muitos valores fixos para comparar", "Quando a condição usa maior/menor", "Nunca, switch é obsoleto"]
    correta: 1
    explicacao: "✓ switch é ideal quando você compara uma variável contra vários valores fixos (strings, números). Fica mais legível que uma cadeia longa de if/else if."
    explicacaoErrada: "✗ switch é útil quando há muitos valores fixos para comparar. Para condições com >, <, >=, use if/else."
  - pergunta: "O que faz: const x = idade >= 18 ? 'maior' : 'menor'?"
    opcoes: ["Declara duas variáveis", "Atribui 'maior' se idade >= 18, senão 'menor'", "Dá erro de sintaxe", "Compara duas strings"]
    correta: 1
    explicacao: "✓ O operador ternário (condição ? valorSeVerdadeiro : valorSeFalso) é um if/else compacto em uma linha."
    explicacaoErrada: "✗ Isso é o operador ternário: se a condição for verdadeira, retorna o valor antes do :, senão retorna o valor depois."
---

## if e else — a decisão básica

Programas precisam tomar decisões. O `if` executa um bloco de código apenas se a condição for verdadeira:

```typescript
const idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

A condição fica entre parênteses `()`. O código a executar fica entre chaves `{}`. Se a condição for verdadeira, executa o bloco do `if`. Se for falsa, executa o bloco do `else`.

O `else` é opcional. Sem ele, o programa simplesmente pula o bloco quando a condição é falsa.

## Operadores de comparação

Toda condição usa operadores de comparação que retornam `true` ou `false`:

| Operador | Significado       | Exemplo        | Resultado |
| -------- | ----------------- | -------------- | --------- |
| `===`    | Igual (estrito)   | `5 === 5`      | `true`    |
| `!==`    | Diferente (estrito)| `5 !== 3`     | `true`    |
| `>`      | Maior que         | `10 > 5`       | `true`    |
| `<`      | Menor que         | `3 < 8`        | `true`    |
| `>=`     | Maior ou igual    | `5 >= 5`       | `true`    |
| `<=`     | Menor ou igual    | `3 <= 2`       | `false`   |

> [!alerta]
> Use `===` (igualdade estrita) em vez de `==` em TypeScript/JavaScript. O `==` faz conversão de tipo e pode causar bugs sutis. Exemplo: `"5" == 5` é `true`, mas `"5" === 5` é `false`.

## else if — múltiplas condições

Quando há mais de duas possibilidades, use `else if` para encadear condições:

```typescript
const nota = 7.5;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

As condições são testadas de cima para baixo. A primeira que for verdadeira executa seu bloco, e as demais são ignoradas. A ordem importa.

## switch — quando há muitas opções fixas

O `switch` compara uma variável contra valores específicos. É mais legível que vários `else if` quando se trata de valores fixos:

```typescript
const dia = "segunda";

switch (dia) {
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
  case "sexta":
    console.log("Dia útil");
    break;
  case "sábado":
  case "domingo":
    console.log("Final de semana");
    break;
  default:
    console.log("Dia inválido");
}
```

Cada `case` compara o valor. O `break` encerra o switch — sem ele, a execução "cai" para o próximo case. O `default` funciona como o `else`: executa quando nenhum case corresponde.

## Operador ternário — if em uma linha

Para decisões simples que atribuem um valor, o operador ternário é mais conciso:

```typescript
const status = idade >= 18 ? "maior" : "menor";
```

A sintaxe é: `condição ? valorSeVerdadeiro : valorSeFalso`. Use apenas para expressões simples. Para lógica complexa, prefira `if/else` — legibilidade vem primeiro.
