---
slug: "arithmetic-relational-operators"
modulo: "Módulo 2 — Operadores"
titulo: "Operadores Aritméticos e Relacionais"
subtitulo: "Cálculos, comparações e atribuições em TypeScript"
descricao: "Operadores aritméticos (+, -, *, /, %, **), relacionais (===, !==, >, <, >=, <=) e de atribuição (+=, -=, *=) em TypeScript."
ordem: 4
proximosPassos:
  - titulo: "Operadores lógicos"
    descricao: "Combine condições com &&, || e operador ternário"
  - titulo: "Condicionais"
    descricao: "Tome decisões no código com if/else"
quiz:
  - pergunta: "O que o operador % (módulo) retorna?"
    opcoes: ["O resultado da divisão", "O resto da divisão", "A porcentagem", "O quociente"]
    correta: 1
    explicacao: "✓ O operador % retorna o resto da divisão. Exemplo: 10 % 3 = 1, porque 10 ÷ 3 = 3 com resto 1."
    explicacaoErrada: "✗ O % não calcula porcentagem — ele retorna o resto da divisão inteira."
  - pergunta: "Qual a diferença entre == e === em TypeScript?"
    opcoes: ["São iguais", "== compara valor e tipo, === só valor", "=== compara valor e tipo sem coerção, == faz coerção", "== é mais seguro"]
    correta: 2
    explicacao: "✓ === (igualdade estrita) compara valor E tipo sem conversão. == faz coerção de tipo e pode gerar bugs."
    explicacaoErrada: "✗ Use sempre === (estrito). O == converte tipos automaticamente: \"5\" == 5 é true, mas \"5\" === 5 é false."
  - pergunta: "O que x += 5 faz?"
    opcoes: ["Compara x com 5", "Atribui 5 a x", "Soma 5 ao valor atual de x", "Subtrai 5 de x"]
    correta: 2
    explicacao: "✓ x += 5 é o mesmo que x = x + 5. É um atalho de atribuição composta."
    explicacaoErrada: "✗ += é atribuição com soma. x += 5 equivale a x = x + 5."
  - pergunta: "Qual o resultado de 2 ** 3?"
    opcoes: ["6", "8", "5", "23"]
    correta: 1
    explicacao: "✓ ** é o operador de potenciação. 2 ** 3 = 2³ = 8."
    explicacaoErrada: "✗ O operador ** eleva à potência. 2 ** 3 significa 2 elevado a 3, que é 8."
---

## Operadores aritmeticos

Operadores aritmeticos realizam calculos matematicos com numeros:

```typescript
const a = 10;
const b = 3;

console.log(a + b);   // 13  — soma
console.log(a - b);   // 7   — subtração
console.log(a * b);   // 30  — multiplicação
console.log(a / b);   // 3.333... — divisão
console.log(a % b);   // 1   — resto da divisão (módulo)
console.log(a ** b);  // 1000 — potenciação (10³)
```

> [!info]
> O operador `%` (modulo) e extremamente util para verificar se um numero e par (`n % 2 === 0`) ou para criar ciclos.

### Ordem das operacoes

TypeScript segue a mesma ordem da matematica: potenciacao, multiplicacao/divisao, soma/subtracao. Use parenteses para alterar a ordem:

```typescript
console.log(2 + 3 * 4);     // 14 (multiplica primeiro)
console.log((2 + 3) * 4);   // 20 (parenteses alteram a ordem)
```

## Operadores relacionais (de comparacao)

Sempre retornam `boolean` (`true` ou `false`). Sao a base de toda decisao no codigo:

```typescript
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false
console.log(5 === 5);  // true  — igual em valor E tipo
console.log(5 !== 3);  // true  — diferente
```

| Operador | Significado | Exemplo | Resultado |
|----------|------------|---------|-----------|
| `===` | Igual (estrito) | `5 === 5` | `true` |
| `!==` | Diferente (estrito) | `5 !== 3` | `true` |
| `>` | Maior que | `10 > 5` | `true` |
| `<` | Menor que | `3 < 8` | `true` |
| `>=` | Maior ou igual | `5 >= 5` | `true` |
| `<=` | Menor ou igual | `3 <= 2` | `false` |

> [!alerta]
> Use sempre `===` em vez de `==`. O `==` faz coercao de tipo e gera bugs sutis:
>
> ```typescript
> console.log(5 == "5");   // true  ← perigoso
> console.log(5 === "5");  // false ← correto
> ```

## Operadores de atribuicao

Atalhos para modificar o valor de uma variavel:

```typescript
let x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x **= 2;  // x = x ** 2 → 36
x %= 5;   // x = x % 5  → 1
```

Os operadores de atribuicao sao uteis em loops e acumuladores. Em vez de escrever `soma = soma + valor`, escreva `soma += valor`.

> [!sucesso]
> Estes operadores sao a base de tudo que vem a seguir. Aritmeticos fazem calculos, relacionais comparam valores (retornando boolean), e atribuicao atualiza variaveis. Domine esses tres grupos antes de avancar.
