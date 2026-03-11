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

Com 2 variáveis temos 4 combinações. Com 3, temos 8. A fórmula é **2ⁿ linhas**, onde n é o número de variáveis.

A tabela verdade lista TODAS as combinações possíveis e calcula o resultado da expressão para cada uma.

> [!info]
> Para n variáveis, a tabela verdade terá 2ⁿ linhas. Com 3 variáveis = 8 linhas, com 4 = 16 linhas.

## Método de construção: preencher de trás para frente

Para 3 variáveis (P, Q, R), preencha as colunas de trás para frente:

- **R** (última variável): alterna V, F, V, F, V, F, V, F (uma a uma)
- **Q** (penúltima): alterna V, V, F, F, V, V, F, F (duas a duas)
- **P** (primeira): alterna V, V, V, V, F, F, F, F (quatro a quatro)

Esse método garante que todas as 2ⁿ combinações apareçam, sem repetição e sem esquecimento.

## Precedência de operadores

Assim como na matemática (multiplicação antes de soma), a lógica tem precedência:

1. **¬** (negação) — maior precedência
2. **∧** (conjunção/E)
3. **∨** (disjunção/OU)
4. **→** (condicional)
5. **↔** (bicondicional) — menor precedência

O ¬ é como o sinal de menos, ∧ é como multiplicação, ∨ é como soma. Use parênteses para alterar a precedência quando necessário.

## Exemplo: decisão de cinema (3 variáveis)

"Vou ao cinema se tiver dinheiro E (o filme for bom OU meus amigos forem)."

Expressão com 3 variáveis: **P ∧ (Q ∨ R)** — dinheiro E (filme bom OU amigos vão).

## Sistema de alarme com 3 variáveis

Considere um alarme com 3 condições: A (alarme ligado), P (porta aberta), M (movimento detectado).

O alarme dispara quando: **A ∧ (P ∨ M)** — o alarme deve estar ligado E pelo menos uma das condições de risco deve ser verdadeira.

| A | P | M | P ∨ M | A ∧ (P ∨ M) |
|---|---|---|-------|-------------|
| V | V | V | V | V |
| V | V | F | V | V |
| V | F | V | V | V |
| V | F | F | F | F |
| F | V | V | V | F |
| F | V | F | V | F |
| F | F | V | V | F |
| F | F | F | F | F |
