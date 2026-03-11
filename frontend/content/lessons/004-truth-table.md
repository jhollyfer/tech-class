---
slug: "truth-table"
modulo: "Módulo 1 — Lógica Proposicional"
titulo: "Semântica: Tabela Verdade"
subtitulo: "Analisando expressões lógicas com múltiplas variáveis"
descricao: "Construção de tabelas verdade com 2 e 3 variáveis, precedência de operadores, método de preenchimento e o sistema de alarme como exemplo completo."
ordem: 4
proximosPassos:
  - titulo: "Equivalências lógicas"
    descricao: "Descubra quando duas expressões são logicamente iguais"
  - titulo: "Simplificação"
    descricao: "Aprenda a simplificar expressões usando equivalências"
  - titulo: "Exercícios práticos"
    descricao: "Construa tabelas verdade para expressões do cotidiano"
quiz:
  - pergunta: "Com 3 variáveis, quantas linhas tem a tabela verdade?"
    opcoes: ["4", "6", "8", "16"]
    correta: 2
    explicacao: "✓ 2³ = 8 linhas. A fórmula é 2ⁿ onde n é o número de variáveis."
    explicacaoErrada: "✗ A fórmula é 2ⁿ. Com 3 variáveis: 2³ = 8 linhas."
  - pergunta: "Qual operador tem maior precedência?"
    opcoes: ["∧ (E/AND)", "∨ (OU/OR)", "¬ (NÃO/NOT)", "→ (condicional)"]
    correta: 2
    explicacao: "✓ ¬ (NÃO) tem a maior precedência — é avaliado primeiro."
    explicacaoErrada: "✗ A ordem é: ¬ > ∧ > ∨ > → > ↔. O ¬ tem prioridade máxima."
  - pergunta: "No sistema de alarme A ∧ (P ∨ M), se A=V, P=F, M=F, o alarme dispara?"
    opcoes: ["Sim", "Não"]
    correta: 1
    explicacao: "✓ P ∨ M = F ∨ F = F. Depois A ∧ F = F. O alarme não dispara."
    explicacaoErrada: "✗ Sem porta aberta nem movimento, P ∨ M é falso, e V ∧ F = F."
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
| 3 | ∨ | Disjunção (OU) | `\|\|` |
| 4 | → | Condicional | — |
| 5 (menor) | ↔ | Bicondicional | — |

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

## Sistema de alarme com 3 variáveis

Considere um alarme com 3 condições: A (alarme ligado), P (porta aberta), M (movimento detectado).

O alarme dispara quando: **A ∧ (P ∨ M)** — o alarme deve estar ligado E pelo menos uma das condições de risco deve ser verdadeira.

| A | P | M | P ∨ M | A ∧ (P ∨ M) |
|---|---|---|:-----:|:-----------:|
| V | V | V | V | V |
| V | V | F | V | V |
| V | F | V | V | V |
| V | F | F | F | F |
| F | V | V | V | F |
| F | V | F | V | F |
| F | F | V | V | F |
| F | F | F | F | F |

> [!info]
> Observe: quando A=F (alarme desligado), o resultado é **sempre** F, independentemente de P e M. Isso faz sentido no mundo real!

## Na prática com TypeScript

Em TypeScript, os operadores lógicos seguem a mesma precedência da lógica formal:

| Lógica | TypeScript | Precedência |
|:------:|:----------:|:-----------:|
| ¬ | `!` | Maior |
| ∧ | `&&` | Média |
| ∨ | `\|\|` | Menor |

### Gerando uma tabela verdade no código

Podemos gerar tabelas verdade de forma programática, iterando sobre todas as combinações possíveis:

```typescript
function tabelaVerdade() {
  console.log("P     | Q     | P && Q");
  console.log("------|-------|-------");

  for (const p of [true, false]) {
    for (const q of [true, false]) {
      console.log(`${p.toString().padEnd(5)} | ${q.toString().padEnd(5)} | ${p && q}`);
    }
  }
}

tabelaVerdade();
// P     | Q     | P && Q
// ------|-------|-------
// true  | true  | true
// true  | false | false
// false | true  | false
// false | false | false
```

### Tabela verdade com 3 variáveis

Para gerar todas as 8 combinações de 3 variáveis, basta adicionar mais um loop:

```typescript
function tabelaVerdade3Vars() {
  console.log("P     | Q     | R     | Q || R | P && (Q || R)");
  console.log("------|-------|-------|--------|-------------");

  for (const p of [true, false]) {
    for (const q of [true, false]) {
      for (const r of [true, false]) {
        const qOuR = q || r;
        const resultado = p && qOuR;
        console.log(
          `${String(p).padEnd(5)} | ${String(q).padEnd(5)} | ${String(r).padEnd(5)} | ${String(qOuR).padEnd(6)} | ${resultado}`
        );
      }
    }
  }
}

tabelaVerdade3Vars();
```

### Sistema de alarme em TypeScript

O sistema de alarme **A ∧ (P ∨ M)** pode ser implementado como uma função:

```typescript
function alarmeDispara(
  alarmeLigado: boolean,
  portaAberta: boolean,
  movimentoDetectado: boolean
): boolean {
  return alarmeLigado && (portaAberta || movimentoDetectado);
}

// Testando todas as combinações
console.log("=== Sistema de Alarme: A ∧ (P ∨ M) ===\n");

for (const a of [true, false]) {
  for (const p of [true, false]) {
    for (const m of [true, false]) {
      const dispara = alarmeDispara(a, p, m);
      const status = dispara ? "DISPARA!" : "silêncio";
      console.log(`Alarme=${a}, Porta=${p}, Movimento=${m} → ${status}`);
    }
  }
}
```

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
