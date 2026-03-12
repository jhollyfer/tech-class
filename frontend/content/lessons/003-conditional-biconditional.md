---
slug: "conditional-biconditional"
modulo: "Módulo 1 — Lógica Proposicional"
titulo: "Consequências lógicas"
subtitulo: "Condicional (se...então) e bicondicional (se e somente se)"
descricao: "Lógica de causa e efeito: proposições condicionais e bicondicionais com exemplos práticos e falácias lógicas."
ordem: 3
proximosPassos:
  - titulo: "Tabela verdade completa"
    descricao: "Aprenda a construir tabelas com múltiplas variáveis"
  - titulo: "Prática com condicionais"
    descricao: "Resolva exercícios de condicional e bicondicional"
quiz:
  - pergunta: "Se P é verdadeiro e Q é falso, qual o valor de P → Q?"
    opcoes: ["Verdadeiro", "Falso"]
    correta: 1
    explicacao: "✓ A condicional só é falsa quando P é V e Q é F. É o único caso de falsidade."
    explicacaoErrada: "✗ Quando a condição é verdadeira mas a consequência é falsa, a condicional é falsa."
  - pergunta: "Se P é falso, qual o valor de P → Q (qualquer Q)?"
    opcoes: ["Sempre verdadeiro", "Sempre falso", "Depende de Q"]
    correta: 0
    explicacao: "✓ Quando a condição é falsa, a condicional é sempre verdadeira, independente de Q."
    explicacaoErrada: "✗ Uma condição falsa torna a condicional automaticamente verdadeira."
  - pergunta: "P ↔ Q é verdadeiro quando:"
    opcoes:
      - "P e Q são ambos verdadeiros"
      - "P e Q são ambos falsos"
      - "P e Q têm o mesmo valor"
      - "P e Q têm valores diferentes"
    correta: 2
    explicacao: "✓ A bicondicional é verdadeira quando ambos têm o mesmo valor (V-V ou F-F)."
    explicacaoErrada: "✗ A bicondicional exige que P e Q tenham exatamente o mesmo valor lógico."
  - pergunta: "\"Se é cachorro, então é animal\" é verdadeiro. Podemos concluir que \"Se é animal, então é cachorro\"?"
    opcoes: ["Sim, a recíproca é sempre verdadeira", "Não, a recíproca pode ser falsa", "Depende do animal"]
    correta: 1
    explicacao: "✓ P → Q não implica Q → P. A recíproca é uma afirmação diferente que precisa ser provada separadamente."
    explicacaoErrada: "✗ A recíproca (inverter P e Q) nem sempre é verdadeira. Um gato é animal mas não é cachorro."
---

## A lógica de causa e efeito

No dia a dia, constantemente usamos raciocínios do tipo "se acontecer X, então Y". Isso é a **condicional**.

"Se fizer calor, vou ao shopping" — a ida ao shopping é consequência do calor.

Na lógica formal, escrevemos **P → Q** (se P, então Q).

Atenção: a condicional NÃO diz o que acontece quando não faz calor! Se não fizer calor, posso ir ou não ir ao shopping — a promessa continua válida.

## Tabela verdade da condicional

A condicional só é **FALSA** em um caso: quando a condição (P) é verdadeira, mas a consequência (Q) é falsa.

"Se fizer calor, vou ao shopping" — análise completa:

- Faz calor (V) e fui ao shopping (V) → promessa cumprida (**V**)
- Faz calor (V) e NÃO fui ao shopping (F) → promessa quebrada (**F**)
- NÃO faz calor (F) e fui ao shopping (V) → não prometi nada sobre frio, tudo bem (**V**)
- NÃO faz calor (F) e NÃO fui ao shopping (F) → idem, tudo bem (**V**)

| P | Q | P → Q |
|---|---|-------|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

> [!alerta]
> Quando a condição é falsa, a condicional é sempre verdadeira — independente da consequência. Uma promessa só pode ser quebrada se a condição era verdadeira.

## Condicional vs. bicondicional

Para entender a diferença:

- "Se você quiser, vamos ao cinema" → **condicional**. Se você não quiser, eu posso ir sozinho ou não.
- "Vamos ao cinema se e somente se você quiser" → **bicondicional**. Se você não for, eu também não vou.

A diferença é sutil no português do dia a dia, mas na lógica formal é enorme.

## Bicondicional — se e somente se

A bicondicional (P ↔ Q) é verdadeira quando P e Q têm o **MESMO** valor: ambos verdadeiros ou ambos falsos.

"A lâmpada acende se e somente se o interruptor está ligado" — os dois estados estão completamente vinculados.

| P | Q | P ↔ Q |
|---|---|-------|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | V |

## Cuidado com falácias lógicas!

Uma falácia clássica: "Deus é amor. O amor é cego. Rei Charles é cego. Logo, Rei Charles é Deus."

Cada passo parece fazer sentido isoladamente, mas a conclusão é absurda. O erro está em tratar relações diferentes como se fossem a mesma coisa.

Na lógica formal, esse tipo de erro é evitado porque as regras são precisas: **P → Q não significa Q → P** (a recíproca não é necessariamente verdadeira).

"Se é cachorro, então é animal" (V). Mas "Se é animal, então é cachorro"? (F — pode ser um gato!)

> [!alerta]
> A lógica formal existe justamente para evitar falácias. Sempre verifique se cada passo da dedução é válido pela tabela verdade.

## Na prática com TypeScript

### O `if/else` como condicional (→)

O `if/else` do TypeScript é a implementação direta da condicional lógica. "Se P, então faça Q":

```typescript
const fezCalor: boolean = true;

if (fezCalor) {
  console.log("Vou ao shopping");
}
// Saída: "Vou ao shopping"
```

Com o bloco `else`, definimos o que acontece quando a condição é falsa:

```typescript
const choveu: boolean = false;

if (choveu) {
  console.log("Levar guarda-chuva");
} else {
  console.log("Dia livre de chuva");
}
// Saída: "Dia livre de chuva"
```

> [!info]
> Note a diferença: na lógica formal, quando P é falso, P → Q é verdadeiro independente de Q. No código, o bloco `else` permite definir explicitamente o que fazer quando a condição é falsa — algo que a lógica formal simplesmente ignora.

### Operador ternário: condicional compacta

O operador ternário é uma forma resumida de escrever `if/else` que retorna um valor:

```typescript
const temperatura: number = 35;

const mensagem: string = temperatura > 30
  ? "Está calor"
  : "Temperatura agradável";

console.log(mensagem);  // "Está calor"
```

A estrutura é: `condição ? valorSeVerdadeiro : valorSeFalso`. É muito útil quando você precisa atribuir um valor com base em uma condição.

### Bicondicional com `===`

A bicondicional (↔) verifica se dois valores são iguais — ambos verdadeiros ou ambos falsos. Em TypeScript, o operador `===` faz exatamente isso para booleanos:

```typescript
const interruptorLigado: boolean = true;
const lampadaAcesa: boolean = true;

// Bicondicional: P ↔ Q (verdadeiro quando P e Q têm o mesmo valor)
const sistemaFuncionando: boolean = interruptorLigado === lampadaAcesa;
console.log(sistemaFuncionando);  // true

// Testando todos os casos da bicondicional:
console.log(true === true);    // true  (V ↔ V = V)
console.log(true === false);   // false (V ↔ F = F)
console.log(false === true);   // false (F ↔ V = F)
console.log(false === false);  // true  (F ↔ F = V)
```

> [!sucesso]
> O operador `===` entre dois booleanos produz exatamente o resultado da tabela verdade da bicondicional. Compare os quatro resultados acima com a tabela P ↔ Q.

### Tabela de equivalências

| Conceito | Lógica formal | TypeScript |
|---|---|---|
| Condicional | P → Q | `if (p) { q }` |
| Bicondicional | P ↔ Q | `p === q` |
| Condicional falsa | P é V e Q é F | `p && !q` |
| Condicional compacta | — | `p ? valorV : valorF` |

> [!alerta]
> Cuidado: o `if/else` do TypeScript não é 100% equivalente ao operador → da lógica formal. Na lógica, P → Q é uma expressão que retorna V ou F. No código, `if/else` é um comando que executa blocos. A equivalência mais direta seria a expressão `!p || q`, que reproduz exatamente a tabela verdade da condicional.
