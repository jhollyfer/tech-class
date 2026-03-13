---
slug: "logical-ternary-operators"
modulo: "Módulo 2 — Operadores"
titulo: "Operadores Lógicos e Ternário"
subtitulo: "Combinando condições e decisões rápidas em uma linha"
descricao: "Operadores lógicos (&&, ||, !) para combinar condições booleanas e operador ternário para decisões inline em TypeScript."
ordem: 5
proximosPassos:
  - titulo: "Condicionais"
    descricao: "Tome decisões no código com if/else"
  - titulo: "Loops"
    descricao: "Repita ações automaticamente"
quiz:
  - pergunta: "O que && retorna quando uma das condições é falsa?"
    opcoes: ["true", "false", "undefined", "null"]
    correta: 1
    explicacao: "✓ O operador && (E) só retorna true quando AMBAS as condições são verdadeiras. Se qualquer uma for falsa, retorna false."
    explicacaoErrada: "✗ && exige que os dois lados sejam true. Basta um ser false para o resultado ser false."
  - pergunta: "O que || retorna quando ambas as condições são falsas?"
    opcoes: ["true", "false", "undefined", "0"]
    correta: 1
    explicacao: "✓ O operador || (OU) só retorna false quando AMBAS são falsas. Basta uma ser verdadeira para retornar true."
    explicacaoErrada: "✗ || precisa de pelo menos um lado true. Se ambos forem false, retorna false."
  - pergunta: "O que faz: const status = nota >= 7 ? 'Aprovado' : 'Reprovado'?"
    opcoes: ["Declara duas variáveis", "Atribui 'Aprovado' se nota >= 7, senão 'Reprovado'", "Dá erro de sintaxe", "Compara duas strings"]
    correta: 1
    explicacao: "✓ O operador ternário (condição ? valorSeVerdadeiro : valorSeFalso) é um if/else compacto em uma linha."
    explicacaoErrada: "✗ Isso é o operador ternário: se a condição for verdadeira, retorna o valor antes do :, senão retorna o valor depois."
---

## Operadores logicos

Operadores logicos combinam condicoes booleanas. Sao essenciais para criar logica mais complexa:

| Operador | Nome      | Resultado                                     |
| -------- | --------- | --------------------------------------------- |
| `&&`     | AND (E)   | `true` somente se **ambos** forem verdadeiros |
| `\|\|`   | OR (OU)   | `true` se **pelo menos um** for verdadeiro    |
| `!`      | NOT (NÃO) | Inverte o booleano                            |

```typescript
const maioridade = 18;
const temCarteira = true;

const podeConduizir = maioridade >= 18 && temCarteira; // true
const podeEntrar = maioridade >= 18 || temCarteira;    // true
const menorIdade = !(maioridade >= 18);                // false
```

### `&&` (E) --- ambos precisam ser verdadeiros

```typescript
const idade: number = 20;
const temDocumento: boolean = true;

if (idade >= 18 && temDocumento) {
  console.log("Pode entrar no evento");
}
```

### `||` (OU) --- basta um ser verdadeiro

```typescript
const temIngressos: boolean = false;
const ehVIP: boolean = true;

if (temIngressos || ehVIP) {
  console.log("Acesso liberado");
}
```

### `!` (NAO) --- inverte o valor

```typescript
const logado: boolean = false;

if (!logado) {
  console.log("Por favor, faça login");
}
```

> [!info]
> A ordem de precedencia e: `!` (primeiro), depois `&&`, depois `||`. Use parenteses para deixar a intencao clara: `(a && b) || c` e diferente de `a && (b || c)`.

## Operador ternario

Decisao rapida em uma unica linha. Sintaxe: `condicao ? valorSeVerdadeiro : valorSeFalso`

```typescript
const nota = 7.5;
const status = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(status); // Aprovado
```

E equivalente a:

```typescript
let status: string;
if (nota >= 7) {
  status = "Aprovado";
} else {
  status = "Reprovado";
}
```

Mais exemplos praticos:

```typescript
const saldo: number = 150;
const mensagem = saldo >= 0 ? "Saldo positivo" : "Conta no vermelho";

const idade: number = 15;
const categoria = idade >= 18 ? "adulto" : "menor";

const temperatura: number = 35;
const clima = temperatura > 30 ? "quente" : "agradável";
```

> [!alerta]
> Use o ternario apenas para expressoes simples. Para logica complexa, prefira `if/else` --- legibilidade vem primeiro. Evite aninhar ternarios (`a ? b ? c : d : e`), pois fica muito dificil de entender.

> [!sucesso]
> Operadores logicos e o ternario sao ferramentas do dia a dia. `&&` e `||` combinam condicoes, `!` inverte, e o ternario substitui `if/else` simples em uma linha. Voce vai usa-los em praticamente todo programa.
