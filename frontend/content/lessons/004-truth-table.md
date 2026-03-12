---
slug: "truth-table"
modulo: "Módulo 1 — Lógica Proposicional"
titulo: "Semântica: Tabela Verdade"
subtitulo: "Analisando expressões lógicas com múltiplas variáveis"
descricao: "Construção de tabelas verdade com 2 e 3 variáveis, precedência de operadores e método de preenchimento."
ordem: 4
proximosPassos:
  - titulo: "Exercícios práticos"
    descricao: "Construa tabelas verdade para expressões do cotidiano"
quiz:
  - pergunta: "Com 3 variáveis, quantas linhas tem a tabela verdade?"
    opcoes: ["4", "6", "8", "16"]
    correta: 2
    explicacao: "✓ 2³ = 8 linhas. A fórmula é 2ⁿ onde n é o número de variáveis."
    explicacaoErrada: "✗ A fórmula é 2ⁿ. Com 3 variáveis: 2³ = 8 linhas."
  - pergunta: "Qual operador tem maior precedência?"
    opcoes: ["∧ (E/AND)", "∨ (OU/OR)", "¬ (NÃO/NOT)"]
    correta: 2
    explicacao: "✓ ¬ (NÃO) tem a maior precedência — é avaliado primeiro."
    explicacaoErrada: "✗ A ordem é: ¬ > ∧ > ∨. O ¬ tem prioridade máxima."
  - pergunta: "Ao preencher a tabela verdade de trás para frente, a última variável alterna como?"
    opcoes: ["V,V,F,F,V,V,F,F", "V,F,V,F,V,F,V,F", "V,V,V,V,F,F,F,F", "F,V,F,V,F,V,F,V"]
    correta: 1
    explicacao: "✓ A última variável alterna uma a uma: V,F,V,F,V,F,V,F."
    explicacaoErrada: "✗ A última variável alterna individualmente: V,F,V,F... A penúltima: V,V,F,F..."
---

## Tabela verdade com múltiplas variáveis

A tabela verdade é a ferramenta fundamental da lógica proposicional: ela lista **todas** as combinações possíveis de valores das variáveis e calcula o resultado da expressão para cada uma delas.

Com 2 variáveis temos 4 combinações. Com 3, temos 8. A fórmula geral é **2ⁿ linhas**, onde n é o número de variáveis.

> [!info]
> Para n variáveis, a tabela verdade terá 2ⁿ linhas. Com 3 variáveis = 8 linhas, com 4 = 16 linhas, com 5 = 32 linhas.

### Exemplo com 2 variáveis: P ∧ Q

| P | Q | P ∧ Q |
|---|---|-------|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

A conjunção (∧) só é verdadeira quando **ambas** as variáveis são verdadeiras.

## Método de construção: preencher de trás para frente

Para 3 variáveis (P, Q, R), preencha as colunas da direita para a esquerda:

- **R** (última variável): alterna V, F, V, F, V, F, V, F (uma a uma)
- **Q** (penúltima): alterna V, V, F, F, V, V, F, F (duas a duas)
- **P** (primeira): alterna V, V, V, V, F, F, F, F (quatro a quatro)

Esse método garante que todas as 2ⁿ combinações apareçam, sem repetição e sem esquecimento.

> [!sucesso]
> O padrão é simples: a última variável alterna de 1 em 1, a penúltima de 2 em 2, a anterior de 4 em 4, e assim por diante (potências de 2).

## Precedência de operadores

Assim como na matemática (multiplicação antes de soma), a lógica tem uma ordem de precedência:

| Prioridade | Operador | Nome | Equivalente em TS |
|:----------:|:--------:|------|:------------------:|
| 1 (maior) | ¬ | Negação (NÃO) | `!` |
| 2 | ∧ | Conjunção (E) | `&&` |
| 3 (menor) | ∨ | Disjunção (OU) | `\|\|` |

O ¬ é como o sinal de menos, ∧ é como multiplicação, ∨ é como soma. Use parênteses para alterar a precedência quando necessário.

> [!alerta]
> Sem parênteses, `¬P ∧ Q` significa `(¬P) ∧ Q` e **não** `¬(P ∧ Q)`. A negação sempre se aplica primeiro!

## Exemplo: decisão de cinema (3 variáveis)

"Vou ao cinema se tiver dinheiro E (o filme for bom OU meus amigos forem)."

Expressão com 3 variáveis: **P ∧ (Q ∨ R)** — dinheiro E (filme bom OU amigos vão).

| P (dinheiro) | Q (filme bom) | R (amigos vão) | Q ∨ R | P ∧ (Q ∨ R) |
|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | V |
| V | V | F | V | V |
| V | F | V | V | V |
| V | F | F | F | F |
| F | V | V | V | F |
| F | V | F | V | F |
| F | F | V | V | F |
| F | F | F | F | F |

Sem dinheiro (P=F), nada feito. Com dinheiro, precisa de pelo menos uma das outras condições.

## Na prática com TypeScript

Em TypeScript, os operadores lógicos seguem a mesma precedência da lógica formal:

| Lógica | TypeScript | Precedência |
|:------:|:----------:|:-----------:|
| ¬ | `!` | Maior |
| ∧ | `&&` | Média |
| ∨ | `\|\|` | Menor |

### Precedência na prática

TypeScript respeita a mesma precedência da lógica. Compare:

```typescript
const a = true;
const b = false;
const c = true;

// Sem parênteses: ! tem prioridade, depois &&, depois ||
const resultado1 = !a || b && c;
// Equivale a: (!a) || (b && c)
// = false || (false && true)
// = false || false
// = false

// Com parênteses alterando a precedência
const resultado2 = !(a || b) && c;
// = !(true || false) && true
// = !true && true
// = false && true
// = false

console.log(`!a || b && c     = ${resultado1}`);   // false
console.log(`!(a || b) && c   = ${resultado2}`);    // false
```

> [!sucesso]
> Em TypeScript, a precedência `!` > `&&` > `||` espelha exatamente a precedência lógica `¬` > `∧` > `∨`. Se você entende uma, entende a outra!
