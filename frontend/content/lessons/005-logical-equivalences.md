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

Duas expressões são **logicamente equivalentes** quando produzem os mesmos resultados para **todas** as combinações possíveis de valores. Escrevemos isso como:

**Expressão₁ ≡ Expressão₂**

Para verificar equivalência, comparamos as tabelas verdade: se as colunas finais são idênticas, as expressões são equivalentes.

> [!info]
> Equivalência lógica é uma das ferramentas mais poderosas da lógica. Ela permite trocar uma expressão complexa por outra mais simples, mantendo o mesmo comportamento.

### Notação alternativa

Notação muito usada em eletrônica e circuitos digitais:

| Lógica | Notação alternativa | Equivalente |
|:------:|:-------------------:|:-----------:|
| A ∧ B | A · B | Multiplicação |
| A ∨ B | A + B | Soma |

Assim, A ∧ B pode ser escrito como A·B e A ∨ B como A+B.

## Exemplo do alarme: simplificação real

Imagine que o alarme dispara nas seguintes situações:

**(A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) ∨ (A ∧ ¬B ∧ C)**

Parece complexo, mas podemos simplificar! Nos dois primeiros termos, A e B são comuns:

(A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) = A ∧ B ∧ (C ∨ ¬C) = **A ∧ B** (pois C ∨ ¬C é sempre V)

Agora combinamos com o terceiro termo:

(A ∧ B) ∨ (A ∧ ¬B ∧ C) = A ∧ (B ∨ (¬B ∧ C)) = **A ∧ (B ∨ C)**

Resultado final: **A ∧ (B ∨ C)** — muito mais simples! E produz exatamente os mesmos resultados.

> [!sucesso]
> Simplificar expressões reduz o número de portas lógicas necessárias em circuitos reais, economizando energia e espaço no chip. No software, simplifica condições `if/else`.

## Distributiva: a regra fundamental

**A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)**

Funciona como a distributiva da matemática: a × (b + c) = ab + ac.

Na notação alternativa: A·(B+C) = A·B + A·C — idêntico à álgebra!

| A | B | C | A ∧ (B ∨ C) | (A ∧ B) ∨ (A ∧ C) |
|---|---|---|:-----------:|:------------------:|
| V | V | V | V | V |
| V | V | F | V | V |
| V | F | V | V | V |
| V | F | F | F | F |
| F | V | V | F | F |
| F | V | F | F | F |
| F | F | V | F | F |
| F | F | F | F | F |

> [!info]
> As colunas finais são idênticas em todas as 8 linhas, confirmando a equivalência.

## Leis de De Morgan

As Leis de De Morgan permitem "distribuir" a negação, trocando ∧ por ∨ e vice-versa:

- **¬(A ∧ B) = (¬A) ∨ (¬B)** — "não é verdade que ambos" = "pelo menos um é falso"
- **¬(A ∨ B) = (¬A) ∧ (¬B)** — "não é verdade que algum" = "ambos são falsos"

Exemplo do cotidiano: "NÃO (está quente E está úmido)" = "NÃO está quente OU NÃO está úmido".

### Verificação com tabela verdade: primeira lei

| A | B | A ∧ B | ¬(A ∧ B) | ¬A | ¬B | (¬A) ∨ (¬B) |
|---|---|:-----:|:--------:|:--:|:--:|:-----------:|
| V | V | V | F | F | F | F |
| V | F | F | V | F | V | V |
| F | V | F | V | V | F | V |
| F | F | F | V | V | V | V |

> [!sucesso]
> As colunas ¬(A ∧ B) e (¬A) ∨ (¬B) são idênticas. De Morgan confirmado!

## Principais equivalências — resumo

| Nome | Equivalência |
|------|:------------|
| Dupla negação | ¬(¬A) ≡ A |
| De Morgan 1 | ¬(A ∧ B) ≡ (¬A) ∨ (¬B) |
| De Morgan 2 | ¬(A ∨ B) ≡ (¬A) ∧ (¬B) |
| Distributiva 1 | A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C) |
| Distributiva 2 | A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C) |
| Complemento | A ∨ ¬A ≡ V |
| Contradição | A ∧ ¬A ≡ F |

## Na prática com TypeScript

As equivalências lógicas têm aplicação direta em programação. Toda vez que você escreve uma condição `if`, está usando lógica proposicional — e as equivalências permitem simplificar essas condições.

### Leis de De Morgan em código

Em TypeScript, as Leis de De Morgan se aplicam diretamente:

```typescript
// Lei de De Morgan 1: !(a && b) === (!a || !b)
// Lei de De Morgan 2: !(a || b) === (!a && !b)

function verificarDeMorgan(a: boolean, b: boolean): void {
  // Primeira lei
  const lei1_esquerda = !(a && b);
  const lei1_direita = !a || !b;
  console.log(`a=${a}, b=${b}: !(a && b) = ${lei1_esquerda}, (!a || !b) = ${lei1_direita}, iguais? ${lei1_esquerda === lei1_direita}`);

  // Segunda lei
  const lei2_esquerda = !(a || b);
  const lei2_direita = !a && !b;
  console.log(`a=${a}, b=${b}: !(a || b) = ${lei2_esquerda}, (!a && !b) = ${lei2_direita}, iguais? ${lei2_esquerda === lei2_direita}`);
}

// Testando todas as combinações
for (const a of [true, false]) {
  for (const b of [true, false]) {
    verificarDeMorgan(a, b);
  }
}
// Resultado: SEMPRE iguais — De Morgan funciona!
```

### Provando equivalência automaticamente

Podemos criar uma função genérica que testa se duas expressões lógicas são equivalentes, verificando **todas** as combinações:

```typescript
type Expressao2Vars = (a: boolean, b: boolean) => boolean;

function saoEquivalentes(expr1: Expressao2Vars, expr2: Expressao2Vars): boolean {
  for (const a of [true, false]) {
    for (const b of [true, false]) {
      if (expr1(a, b) !== expr2(a, b)) {
        console.log(`Diferença encontrada: a=${a}, b=${b}`);
        return false;
      }
    }
  }
  return true;
}

// Provando De Morgan: !(a && b) === (!a || !b)
const deMorgan1a: Expressao2Vars = (a, b) => !(a && b);
const deMorgan1b: Expressao2Vars = (a, b) => !a || !b;

console.log("De Morgan 1:", saoEquivalentes(deMorgan1a, deMorgan1b)); // true

// Provando De Morgan: !(a || b) === (!a && !b)
const deMorgan2a: Expressao2Vars = (a, b) => !(a || b);
const deMorgan2b: Expressao2Vars = (a, b) => !a && !b;

console.log("De Morgan 2:", saoEquivalentes(deMorgan2a, deMorgan2b)); // true
```

### Simplificando condições complexas

Na prática, De Morgan ajuda a tornar condições `if` mais legíveis:

```typescript
interface Usuario {
  idade: number;
  emailVerificado: boolean;
  contaBloqueada: boolean;
}

function podeAcessar(usuario: Usuario): boolean {
  // Versão complexa (difícil de ler):
  // if (!(usuario.idade < 18 || !usuario.emailVerificado || usuario.contaBloqueada))

  // Aplicando De Morgan para simplificar:
  // !(A || B || C) === !A && !B && !C
  if (usuario.idade >= 18 && usuario.emailVerificado && !usuario.contaBloqueada) {
    return true;
  }
  return false;
}

// Testando
const joao: Usuario = { idade: 20, emailVerificado: true, contaBloqueada: false };
const maria: Usuario = { idade: 16, emailVerificado: true, contaBloqueada: false };
const pedro: Usuario = { idade: 25, emailVerificado: false, contaBloqueada: false };

console.log(`João: ${podeAcessar(joao)}`);   // true
console.log(`Maria: ${podeAcessar(maria)}`); // false (menor de 18)
console.log(`Pedro: ${podeAcessar(pedro)}`); // false (email não verificado)
```

> [!alerta]
> Sempre que encontrar `!(condição1 || condição2)` no código, considere reescrever como `!condição1 && !condição2`. Fica mais fácil de ler e menos propenso a erros.

### Simplificação do alarme em TypeScript

A simplificação que fizemos na teoria funciona no código também:

```typescript
// Versão original (complexa)
function alarmeOriginal(a: boolean, b: boolean, c: boolean): boolean {
  return (a && b && c) || (a && b && !c) || (a && !b && c);
}

// Versão simplificada
function alarmeSimplificado(a: boolean, b: boolean, c: boolean): boolean {
  return a && (b || c);
}

// Provando que são equivalentes
console.log("=== Verificando equivalência ===");
let equivalentes = true;

for (const a of [true, false]) {
  for (const b of [true, false]) {
    for (const c of [true, false]) {
      const r1 = alarmeOriginal(a, b, c);
      const r2 = alarmeSimplificado(a, b, c);
      if (r1 !== r2) equivalentes = false;
      console.log(`a=${a}, b=${b}, c=${c}: original=${r1}, simplificado=${r2}`);
    }
  }
}

console.log(`\nSão equivalentes? ${equivalentes}`); // true
```

> [!sucesso]
> Código mais simples é mais fácil de manter, testar e entender. As equivalências lógicas são a base para refatorar condições complexas no seu código.
