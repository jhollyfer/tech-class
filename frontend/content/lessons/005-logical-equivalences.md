---
slug: "logical-equivalences"
modulo: "Módulo 1 — Lógica Proposicional"
titulo: "Equivalências lógicas"
subtitulo: "Expressões diferentes, mesmos resultados — simplificando a lógica"
descricao: "Equivalência lógica, simplificação de expressões, Leis de De Morgan, notação alternativa com · e +, e o exemplo do alarme simplificado."
ordem: 5
proximosPassos:
  - titulo: "Jogo de lógica"
    descricao: "Aplique equivalências em um desafio prático"
  - titulo: "Mapas de Karnaugh"
    descricao: "Técnica visual para simplificar expressões"
  - titulo: "Circuitos lógicos"
    descricao: "Veja como equivalências otimizam hardware"
quiz:
  - pergunta: "Duas expressões são equivalentes quando:"
    opcoes:
      - "Têm o mesmo número de variáveis"
      - "Produzem os mesmos resultados para todas as combinações"
      - "Usam os mesmos conectivos"
      - "Têm o mesmo número de parênteses"
    correta: 1
    explicacao: "✓ Equivalência significa mesmos resultados em TODAS as combinações possíveis."
    explicacaoErrada: "✗ A equivalência depende dos resultados, não da forma da expressão."
  - pergunta: "¬(A ∧ B) é equivalente a:"
    opcoes: ["(¬A) ∧ (¬B)", "(¬A) ∨ (¬B)", "A ∨ B", "¬A ∧ B"]
    correta: 1
    explicacao: "✓ Lei de De Morgan: a negação do ∧ vira ∨ com as partes negadas."
    explicacaoErrada: "✗ Pela Lei de De Morgan: ¬(A ∧ B) = (¬A) ∨ (¬B)."
  - pergunta: "Na notação alternativa, o símbolo · (ponto) representa:"
    opcoes: ["OU (disjunção)", "E (conjunção)", "NÃO (negação)", "Condicional"]
    correta: 1
    explicacao: "✓ O ponto (·) representa E (∧), assim como na multiplicação."
    explicacaoErrada: "✗ Na notação alternativa: · = E (∧), + = OU (∨)."
  - pergunta: "¬(A ∨ B) é equivalente a:"
    opcoes: ["(¬A) ∨ (¬B)", "(¬A) ∧ (¬B)", "¬A ∨ B", "A ∧ ¬B"]
    correta: 1
    explicacao: "✓ Lei de De Morgan: a negação do ∨ vira ∧ com as partes negadas."
    explicacaoErrada: "✗ ¬(A ∨ B) = (¬A) ∧ (¬B) — a segunda Lei de De Morgan."
---

## O que é equivalência lógica?

Duas expressões são logicamente equivalentes quando produzem os mesmos resultados para todas as combinações possíveis de valores.

Verificamos isso comparando as tabelas verdade: se as colunas finais são idênticas, as expressões são equivalentes.

Notação alternativa muito usada em eletrônica e circuitos: **·** (ponto) para E e **+** para OU. Assim, A ∧ B pode ser escrito como A·B e A ∨ B como A+B.

## Exemplo do alarme: simplificação real

Imagine que o alarme dispara nas seguintes situações:

**(A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) ∨ (A ∧ ¬B ∧ C)**

Parece complexo, mas podemos simplificar! Nos dois primeiros termos, A e B são comuns:

(A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) = A ∧ B ∧ (C ∨ ¬C) = **A ∧ B** (pois C ∨ ¬C é sempre V)

Resultado final: **A ∧ (B ∨ C)** — muito mais simples! E produz exatamente os mesmos resultados.

> [!sucesso]
> Simplificar expressões reduz o número de portas lógicas necessárias em circuitos reais, economizando energia e espaço no chip.

## Distributiva: a regra fundamental

**A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)**

Funciona como a distributiva da matemática: a × (b + c) = ab + ac.

Na notação alternativa: A·(B+C) = A·B + A·C — idêntico à álgebra!

| A | B | C | A ∧ (B ∨ C) | (A ∧ B) ∨ (A ∧ C) |
|---|---|---|-------------|---------------------|
| V | V | V | V | V |
| V | V | F | V | V |
| V | F | V | V | V |
| V | F | F | F | F |
| F | V | V | F | F |
| F | V | F | F | F |
| F | F | V | F | F |
| F | F | F | F | F |

## Leis de De Morgan

As Leis de De Morgan permitem "distribuir" a negação, trocando ∧ por ∨ e vice-versa:

- **¬(A ∧ B) = (¬A) ∨ (¬B)** — "não é verdade que ambos" = "pelo menos um é falso"
- **¬(A ∨ B) = (¬A) ∧ (¬B)** — "não é verdade que algum" = "ambos são falsos"

Exemplo: "NÃO (está quente E está úmido)" = "NÃO está quente OU NÃO está úmido".

Essas leis são usadíssimas em programação para simplificar condições `if/else` complexas.
