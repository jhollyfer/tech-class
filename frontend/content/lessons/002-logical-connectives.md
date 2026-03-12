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

| Lógica formal | TypeScript | Nome | Descrição |
|---|---|---|---|
| ∧ | `&&` | E (AND) | Verdadeiro quando ambos são verdadeiros |
| ∨ | `\|\|` | OU (OR) | Verdadeiro quando pelo menos um é verdadeiro |
| ¬ | `!` | NÃO (NOT) | Inverte o valor lógico |

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

| P | Q | P ∨ Q |
|---|---|-------|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

> [!info]
> Existe também o **OU exclusivo (XOR)**: verdadeiro quando apenas uma das partes é verdadeira, não ambas. Em TypeScript, não há operador lógico XOR, mas podemos simulá-lo com `p !== q` para booleanos.

## Negação — NÃO (NOT) — símbolo ¬

A negação simplesmente inverte o valor: verdadeiro vira falso, e falso vira verdadeiro.

Se P é "Está chovendo" (verdadeiro), então ¬P é "Não está chovendo" (falso).

| P | ¬P |
|---|---|
| V | F |
| F | V |

## Avaliação de curto-circuito

Quando o computador avalia expressões lógicas, ele pode "pular" parte da avaliação se o resultado já estiver definido:

- **No E (&&):** se o primeiro valor é `false`, o resultado já é `false` — não precisa avaliar o segundo.
- **No OU (||):** se o primeiro valor é `true`, o resultado já é `true` — não precisa avaliar o segundo.

Isso se chama **avaliação de curto-circuito** (short-circuit evaluation) e é uma otimização importante que também afeta o comportamento do código.

## Na prática com TypeScript

### Operadores lógicos

Em TypeScript, os conectivos lógicos são representados por operadores:

```typescript
const p: boolean = true;
const q: boolean = false;

// E (AND) — operador &&
console.log(p && q);  // false — ambos precisam ser true

// OU (OR) — operador ||
console.log(p || q);  // true — basta um ser true

// NÃO (NOT) — operador !
console.log(!p);       // false — inverte o valor
console.log(!q);       // true  — inverte o valor
```

### Curto-circuito na prática

O curto-circuito não é apenas uma otimização — ele permite padrões de código úteis:

```typescript
const a: boolean = false;
const b: boolean = true;

// No &&: se o primeiro é false, já retorna false
console.log(a && b);  // false (não precisou avaliar b)

// No ||: se o primeiro é true, já retorna true
console.log(b || a);  // true (não precisou avaliar a)
```

### Exemplo do mundo real: controle de acesso

Imagine um sistema que verifica se um usuário pode acessar um conteúdo:

```typescript
const idade: number = 20;
const temCarteira: boolean = true;
const estaComOculos: boolean = false;

// Conjunção (E): todas as condições precisam ser verdadeiras
if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
// Saída: "Pode dirigir"

// Disjunção (OU): basta uma condição ser verdadeira
if (temCarteira || estaComOculos) {
  console.log("Tem documento de identificação");
}
// Saída: "Tem documento de identificação"

// Negação (NÃO): inverte a condição
if (!estaComOculos) {
  console.log("Não está com óculos");
}
// Saída: "Não está com óculos"
```

