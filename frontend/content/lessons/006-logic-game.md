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

Três competidores (A, B e C) fazem afirmações. Sabemos que **pelo menos um mente** e **pelo menos um fala a verdade**.

Usando lógica, devemos descobrir quem é honesto e quem mente.

> [!info]
> A chave é testar TODAS as combinações possíveis e eliminar as que geram contradições. Com 3 pessoas, são 2³ = 8 combinações.

## Montando o problema

Cada competidor faz uma afirmação sobre os outros:

- **A** diz: "B está mentindo" → A afirma **¬B**
- **B** diz: "C está mentindo" → B afirma **¬C**
- **C** diz: "A e B estão mentindo" → C afirma **¬A ∧ ¬B**

**Regra fundamental:** se uma pessoa fala a verdade, sua afirmação **é** verdadeira. Se mente, sua afirmação **é** falsa.

> [!alerta]
> Cuidado: "C afirma ¬A ∧ ¬B" significa que C diz que **ambos** A e B mentem. Se C mente, basta que **pelo menos um** deles fale a verdade para a afirmação de C ser falsa (De Morgan!).

## Teste de hipóteses passo a passo

Vamos testar sistematicamente, assumindo que cada competidor fala a verdade e verificando se isso gera contradição.

### Hipótese 1: A fala verdade (A = V)

| Passo | Raciocínio | Resultado |
|:-----:|-----------|:---------:|
| 1 | A diz ¬B e A fala verdade | B = F |
| 2 | B diz ¬C mas B mente | C = V |
| 3 | C diz ¬A ∧ ¬B e C fala verdade | A = F e B = F |
| 4 | Mas assumimos A = V! | **CONTRADIÇÃO** |

> [!alerta]
> Contradição! Se A fala verdade, chegamos a A = F no passo 3. Impossível. Hipótese descartada.

### Hipótese 2: B fala verdade (B = V)

| Passo | Raciocínio | Resultado |
|:-----:|-----------|:---------:|
| 1 | B diz ¬C e B fala verdade | C = F |
| 2 | C diz ¬A ∧ ¬B mas C mente | ¬(¬A ∧ ¬B) = V, ou seja, A = V ou B = V |
| 3 | B = V, então o passo 2 já é satisfeito | OK |
| 4 | A diz ¬B. Se A = V, então B = F — mas B = V! | A = F (A mente) |
| 5 | Verificação: A=F, B=V, C=F | **CONSISTENTE** |

> [!sucesso]
> Nenhuma contradição! A combinação A=F, B=V, C=F é consistente com todas as afirmações.

### Hipótese 3: C fala verdade (C = V)

| Passo | Raciocínio | Resultado |
|:-----:|-----------|:---------:|
| 1 | C diz ¬A ∧ ¬B e C fala verdade | A = F e B = F |
| 2 | Mas a regra diz que pelo menos um fala verdade | Só C = V |
| 3 | A diz ¬B. A mente, então ¬B é falso → B = V | B = V |
| 4 | Mas no passo 1 concluímos B = F! | **CONTRADIÇÃO** |

> [!alerta]
> Outra contradição! Se C fala verdade, os passos levam a B=V e B=F simultaneamente. Descartada.

## A solução

A única combinação consistente é: **A mente, B fala a verdade, C mente.**

Verificação completa de cada afirmação:

- A (mentiroso) diz "B mente" → falso, pois B fala verdade ✓
- B (verdadeiro) diz "C mente" → verdadeiro, pois C realmente mente ✓
- C (mentiroso) diz "A e B mentem" → falso, pois B fala verdade ✓

> [!sucesso]
> Cada afirmação bate com o status do competidor (verdadeiro ou mentiroso). A solução é única e verificada!

## Tabela verdade completa

Para ser rigoroso, podemos verificar **todas** as 8 combinações possíveis:

| A | B | C | A diz ¬B | B diz ¬C | C diz ¬A∧¬B | Consistente? |
|---|---|---|:--------:|:--------:|:-----------:|:------------:|
| V | V | V | ¬V=F≠V | — | — | ✗ |
| V | V | F | ¬V=F≠V | — | — | ✗ |
| V | F | V | ¬F=V✓ | ¬V=F✓ | ¬V∧¬F=F≠V | ✗ |
| V | F | F | ¬F=V✓ | ¬F=V≠F | — | ✗ |
| F | V | V | ¬V=F✓ | ¬V=F≠V | — | ✗ |
| F | V | F | ¬V=F✓ | ¬F=V✓ | ¬F∧¬V=F✓ | ✓ |
| F | F | V | ¬F=V≠F | — | — | ✗ |
| F | F | F | — | — | — | ✗ (regra) |

> [!info]
> O traço (—) indica que não precisamos continuar verificando: uma falha anterior já invalida a combinação. A linha F,F,F viola a regra de que pelo menos um fala a verdade.

## Resolvendo com TypeScript

Podemos resolver esse puzzle de forma programática, testando todas as combinações automaticamente:

### Função de verificação de consistência

```typescript
function verificarConsistencia(a: boolean, b: boolean, c: boolean): boolean {
  // O que cada pessoa DIZ
  const aDiz = !b;          // A afirma: "B mente"
  const bDiz = !c;          // B afirma: "C mente"
  const cDiz = !a && !b;    // C afirma: "A e B mentem"

  // Se a pessoa fala verdade, sua afirmação deve ser verdadeira
  // Se a pessoa mente, sua afirmação deve ser falsa
  const aConsistente = a === aDiz;  // a=true → aDiz deve ser true
  const bConsistente = b === bDiz;  // b=true → bDiz deve ser true
  const cConsistente = c === cDiz;  // c=true → cDiz deve ser true

  return aConsistente && bConsistente && cConsistente;
}
```

### Testando todas as combinações

```typescript
console.log("=== Resolvendo o puzzle lógico ===\n");
console.log("A     | B     | C     | Resultado");
console.log("------|-------|-------|----------");

for (const a of [true, false]) {
  for (const b of [true, false]) {
    for (const c of [true, false]) {
      // Regra: pelo menos um verdadeiro e pelo menos um mentiroso
      const peloMenosUmV = a || b || c;
      const peloMenosUmF = !a || !b || !c;

      if (!peloMenosUmV || !peloMenosUmF) {
        console.log(
          `${String(a).padEnd(5)} | ${String(b).padEnd(5)} | ${String(c).padEnd(5)} | Viola regra`
        );
        continue;
      }

      const consistente = verificarConsistencia(a, b, c);
      const status = consistente ? "CONSISTENTE!" : "Contradição";
      console.log(
        `${String(a).padEnd(5)} | ${String(b).padEnd(5)} | ${String(c).padEnd(5)} | ${status}`
      );

      if (consistente) {
        console.log(`\n>>> Solução encontrada!`);
        console.log(`    A ${a ? "fala verdade" : "mente"}`);
        console.log(`    B ${b ? "fala verdade" : "mente"}`);
        console.log(`    C ${c ? "fala verdade" : "mente"}`);
      }
    }
  }
}
```

### Generalizando para qualquer puzzle

Podemos tornar o código mais flexível para resolver puzzles semelhantes:

```typescript
type Afirmacao = (estados: boolean[]) => boolean;

function resolverPuzzle(afirmacoes: Afirmacao[], nomes: string[]): void {
  const n = afirmacoes.length;
  const totalCombinacoes = 2 ** n;

  console.log(`Testando ${totalCombinacoes} combinações para ${n} pessoas...\n`);

  for (let i = 0; i < totalCombinacoes; i++) {
    // Gera combinação a partir do número binário
    const estados = Array.from({ length: n }, (_, j) =>
      Boolean((i >> (n - 1 - j)) & 1)
    );

    // Regra: pelo menos um V e pelo menos um F
    if (estados.every((e) => e) || estados.every((e) => !e)) continue;

    // Verifica consistência
    const consistente = estados.every((estado, idx) =>
      estado === afirmacoes[idx](estados)
    );

    if (consistente) {
      console.log("Solução encontrada:");
      estados.forEach((estado, idx) => {
        console.log(`  ${nomes[idx]}: ${estado ? "fala verdade" : "mente"}`);
      });
    }
  }
}

// Definindo o puzzle: [A, B, C]
const afirmacoes: Afirmacao[] = [
  (e) => !e[1],            // A diz: B mente
  (e) => !e[2],            // B diz: C mente
  (e) => !e[0] && !e[1],   // C diz: A e B mentem
];

resolverPuzzle(afirmacoes, ["A", "B", "C"]);
// Solução encontrada:
//   A: mente
//   B: fala verdade
//   C: mente
```

> [!sucesso]
> A versão generalizada pode resolver qualquer puzzle desse tipo! Basta definir as afirmações de cada pessoa como funções. A lógica faz o resto.

> [!info]
> Perceba como o código TypeScript espelha o raciocínio lógico: cada `if`, `&&` e `||` corresponde exatamente aos operadores ∧ e ∨ que usamos na teoria. Programar **é** aplicar lógica.
