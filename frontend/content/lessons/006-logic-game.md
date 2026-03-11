---
slug: "logic-game"
modulo: "Módulo 1 — Lógica Proposicional"
titulo: "Um jogo simples de lógica"
subtitulo: "Quem está mentindo? Resolvendo puzzles com tabelas verdade"
descricao: "Jogo lógico com três competidores (A, B, C) — teste de hipóteses passo a passo até encontrar quem fala a verdade."
ordem: 6
proximosPassos:
  - titulo: "Sequência de tarefas"
    descricao: "Aprenda a decompor problemas em etapas menores"
  - titulo: "Puzzles avançados"
    descricao: "Resolva problemas com mais competidores e regras"
  - titulo: "Lógica em jogos"
    descricao: "Veja como a lógica é usada em game design"
quiz:
  - pergunta: "Com 3 pessoas (V ou F cada), quantas combinações devemos testar?"
    opcoes: ["3", "6", "8", "9"]
    correta: 2
    explicacao: "✓ 2³ = 8 combinações possíveis."
    explicacaoErrada: "✗ Cada pessoa pode ser V ou F: 2 × 2 × 2 = 8 combinações."
  - pergunta: "No jogo, quem fala a verdade?"
    opcoes: ["A", "B", "C", "A e C"]
    correta: 1
    explicacao: "✓ B é o único que fala a verdade. A e C mentem."
    explicacaoErrada: "✗ Testando todas as combinações, a única consistente é A=F, B=V, C=F."
  - pergunta: "Se A diz '¬B' e A MENTE, o que podemos concluir sobre B?"
    opcoes: ["B mente", "B fala verdade", "Nada", "B também mente"]
    correta: 1
    explicacao: "✓ Se A mente, sua afirmação (¬B) é falsa. Logo, B NÃO é falso → B fala verdade."
    explicacaoErrada: "✗ Mentiroso faz afirmação falsa: ¬B é falso → B é verdadeiro."
  - pergunta: "Uma contradição em lógica significa que:"
    opcoes:
      - "A resposta é falsa"
      - "A combinação testada é impossível"
      - "Precisamos de mais dados"
      - "O problema não tem solução"
    correta: 1
    explicacao: "✓ Uma contradição mostra que aquela combinação específica não pode ser a resposta."
    explicacaoErrada: "✗ Contradição = aquela hipótese é impossível, mas outras podem funcionar."
---

## O desafio

Três competidores (A, B e C) fazem afirmações. Sabemos que pelo menos um mente e pelo menos um fala a verdade.

Usando lógica, devemos descobrir quem é honesto e quem mente.

> [!info]
> A chave é testar TODAS as combinações possíveis e eliminar as que geram contradições.

## Montando o problema

- **A** diz: "B está mentindo" (ou seja, A afirma ¬B)
- **B** diz: "C está mentindo" (ou seja, B afirma ¬C)
- **C** diz: "A e B estão mentindo" (ou seja, C afirma ¬A ∧ ¬B)

Regra: se uma pessoa fala a verdade, sua afirmação É verdadeira. Se mente, sua afirmação É falsa.

## Teste de hipóteses passo a passo

**HIPÓTESE 1:** Suponha que A fala verdade (A=V).

→ A diz ¬B, e A fala verdade, então B mente (B=F).
→ B diz ¬C, mas B mente, então ¬C é falso → C fala verdade (C=V).
→ C diz ¬A ∧ ¬B. C fala verdade, então ¬A ∧ ¬B deve ser V → A=F e B=F.
→ Mas assumimos A=V! **CONTRADIÇÃO.** Descartada.

**HIPÓTESE 2:** Suponha que B fala verdade (B=V).

→ B diz ¬C, e B fala verdade, então C mente (C=F).
→ C diz ¬A ∧ ¬B. C mente, então ¬A ∧ ¬B é falso → pelo menos um entre A e B fala verdade.
→ B=V, então a condição já é satisfeita.
→ A diz ¬B. Se A fala verdade, B mente — mas B=V. Contradição → A mente (A=F).
→ Verificação: A=F, B=V, C=F. **CONSISTENTE!**

## A solução

A única combinação consistente é: **A mente, B fala a verdade, C mente.**

Verificação completa:
- A (mentiroso) diz "B mente" → falso, pois B fala verdade ✓
- B (verdadeiro) diz "C mente" → verdadeiro, pois C realmente mente ✓
- C (mentiroso) diz "A e B mentem" → falso, pois B fala verdade ✓

| A | B | C | A diz ¬B | B diz ¬C | C diz ¬A∧¬B | Consistente? |
|---|---|---|----------|----------|-------------|--------------|
| V | V | V | ¬V=F≠V | — | — | ✗ |
| V | V | F | ¬V=F≠V | — | — | ✗ |
| V | F | V | ¬F=V✓ | ¬V=F✓ | ¬V∧¬F=F≠V | ✗ |
| V | F | F | ¬F=V✓ | ¬F=V≠F | — | ✗ |
| F | V | V | ¬V=F✓ | ¬V=F≠V | — | ✗ |
| F | V | F | ¬V=F✓ | ¬F=V✓ | ¬F∧¬V=F✓ | ✓ |
| F | F | V | ¬F=V≠F | — | — | ✗ |
| F | F | F | — | — | — | ✗ (regra) |

> [!sucesso]
> Resultado: B fala a verdade. A e C mentem. O método sistemático garante que não perdemos nenhuma possibilidade.
