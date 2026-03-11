---
slug: "logical-connectives"
modulo: "Módulo 1 — Lógica Proposicional"
titulo: "Conectivos lógicos"
subtitulo: "E, OU e NÃO — combinando proposições para criar expressões complexas"
descricao: "Exploração dos conectivos lógicos E (∧), OU (∨) e NÃO (¬), com tabelas verdade, símbolos formais e exemplos práticos."
ordem: 2
proximosPassos:
  - titulo: "Condicional e bicondicional"
    descricao: "Aprenda as consequências lógicas: se...então e se e somente se"
  - titulo: "Combinações complexas"
    descricao: "Construa expressões com múltiplos conectivos"
  - titulo: "Circuitos lógicos"
    descricao: "Veja como E, OU e NÃO funcionam em hardware"
quiz:
  - pergunta: "Se P é verdadeiro e Q é falso, qual o resultado de P ∧ Q (P E Q)?"
    opcoes: ["Verdadeiro", "Falso"]
    correta: 1
    explicacao: "✓ Na conjunção (∧), ambas precisam ser verdadeiras. Como Q é falso, o resultado é falso."
    explicacaoErrada: "✗ P ∧ Q só é verdadeiro quando P e Q são ambos verdadeiros."
  - pergunta: "Se P é falso e Q é verdadeiro, qual o resultado de P ∨ Q (P OU Q)?"
    opcoes: ["Verdadeiro", "Falso"]
    correta: 0
    explicacao: "✓ Na disjunção (∨), basta um ser verdadeiro. Q é verdadeiro, então P ∨ Q é verdadeiro."
    explicacaoErrada: "✗ O OU só é falso quando ambas as partes são falsas."
  - pergunta: "Qual o resultado de ¬V (NÃO Verdadeiro)?"
    opcoes: ["Verdadeiro", "Falso", "Indeterminado"]
    correta: 1
    explicacao: "✓ A negação inverte: ¬V = F."
    explicacaoErrada: "✗ A negação sempre inverte o valor lógico."
  - pergunta: "No OU exclusivo (XOR), quando P e Q são ambos verdadeiros, o resultado é:"
    opcoes: ["Verdadeiro", "Falso"]
    correta: 1
    explicacao: "✓ O XOR é falso quando ambos são iguais. Se P e Q são ambos V, o XOR é falso."
    explicacaoErrada: "✗ No OU exclusivo, o resultado é verdadeiro apenas quando os valores são diferentes."
  - pergunta: "Se o computador avalia P ∨ Q e P já é verdadeiro, ele precisa testar Q?"
    opcoes: ["Sim, sempre testa tudo", "Não, já retorna V (curto-circuito)", "Depende da linguagem"]
    correta: 1
    explicacao: "✓ Avaliação de curto-circuito: se P é V no OU, o resultado já é V sem precisar testar Q."
    explicacaoErrada: "✗ No OU, se o primeiro operando é V, o resultado já é V — o computador pula o segundo teste."
---

## Conectivos: a cola da lógica

Proposições isoladas são limitadas. O poder da lógica está em combiná-las usando conectivos.

Os três conectivos fundamentais são: **E** (conjunção, símbolo ∧), **OU** (disjunção, símbolo ∨) e **NÃO** (negação, símbolo ¬).

Com apenas esses três operadores, é possível construir qualquer expressão lógica.

Para n variáveis, a tabela verdade terá 2ⁿ linhas. Com 2 variáveis = 4 linhas, com 3 = 8, com 4 = 16.

## Conjunção — E (AND) — símbolo ∧

A conjunção (E) só é verdadeira quando **AMBAS** as proposições são verdadeiras.

Exemplo: "Eu comi arroz **E** purê". Analisando as 4 combinações:

- Comi arroz (V) E comi purê (V) → **V** — de fato comi os dois
- Comi arroz (V) E comi purê (F) → **F** — disse que comi os dois, mas não comi purê
- Comi arroz (F) E comi purê (V) → **F** — disse que comi os dois, mas não comi arroz
- Comi arroz (F) E comi purê (F) → **F** — não comi nenhum dos dois

| P | Q | P ∧ Q |
|---|---|-------|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

> [!alerta]
> O E (∧) é rigoroso: basta uma parte ser falsa para o resultado todo ser falso. É como multiplicação: qualquer fator zero zera tudo.

## Disjunção — OU (OR) — símbolo ∨

A disjunção (OU) é verdadeira quando **PELO MENOS UMA** proposição é verdadeira.

"Vou de ônibus **OU** de carro" — basta um ser verdade.

Otimização importante: se o computador avalia P e P já é V, ele NÃO precisa testar Q — já sabe que P OU Q é V. Isso se chama **avaliação de curto-circuito** (short-circuit evaluation).

Existe também o **OU exclusivo (XOR)**: verdadeiro quando apenas uma das partes é verdadeira, não ambas.

| P | Q | P ∨ Q |
|---|---|-------|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

## Negação — NÃO (NOT) — símbolo ¬

A negação simplesmente inverte o valor: verdadeiro vira falso, e falso vira verdadeiro.

Se P é "Está chovendo" (verdadeiro), então ¬P é "Não está chovendo" (falso).

| P | ¬P |
|---|---|
| V | F |
| F | V |
