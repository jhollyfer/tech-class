---
slug: "true-or-false"
modulo: "Módulo 1 — Lógica Proposicional"
titulo: "Verdadeiro ou falso"
subtitulo: "A lógica com dois estados que fundamenta toda a computação"
descricao: "Introdução à lógica de programação, explorando o sistema binário (0 e 1), lógica booleana (verdadeiro/falso) e como os computadores tomam decisões."
ordem: 1
proximosPassos:
  - titulo: "Conectivos lógicos"
    descricao: "Aprenda a combinar proposições com E, OU e NÃO"
  - titulo: "Praticar binário"
    descricao: "Use o simulador de bits para converter números"
  - titulo: "Tabelas verdade"
    descricao: "Construa tabelas para visualizar resultados lógicos"
quiz:
  - pergunta: "Qual é a base do sistema binário?"
    opcoes: ["Base 10", "Base 2", "Base 8", "Base 16"]
    correta: 1
    explicacao: "✓ O sistema binário usa base 2, com apenas dois dígitos: 0 e 1."
    explicacaoErrada: "✗ O sistema binário usa base 2. Base 10 é o decimal, base 8 é octal e base 16 é hexadecimal."
  - pergunta: "\"Que horas são?\" é uma proposição lógica?"
    opcoes: ["Sim, é verdadeira", "Sim, é falsa", "Não é uma proposição", "Depende do contexto"]
    correta: 2
    explicacao: "✓ Perguntas não são proposições. Uma proposição deve poder ser classificada como verdadeira ou falsa."
    explicacaoErrada: "✗ Perguntas não podem ser classificadas como verdadeiras ou falsas, portanto não são proposições."
  - pergunta: "Por que o computador usa apenas dois estados (0 e 1)?"
    opcoes:
      - "Porque é mais barato"
      - "Porque a margem de erro entre dois níveis de voltagem é grande, tornando o sistema confiável"
      - "Porque George Boole mandou"
      - "Porque não existem mais números"
    correta: 1
    explicacao: "✓ Com apenas dois níveis de voltagem, o circuito distingue facilmente entre 'tem sinal' e 'não tem sinal', mesmo com ruído elétrico."
    explicacaoErrada: "✗ A razão é física: dois estados elétricos são muito mais fáceis de distinguir do que múltiplos níveis."
  - pergunta: "Na lógica booleana, quantos valores possíveis existem?"
    opcoes: ["1", "2", "3", "Infinitos"]
    correta: 1
    explicacao: "✓ Exatamente 2: verdadeiro (1) e falso (0)."
    explicacaoErrada: "✗ A lógica booleana possui exatamente 2 valores: verdadeiro e falso."
  - pergunta: "Qual a estrutura básica de todo programa?"
    opcoes:
      - "Início, meio e fim"
      - "Entrada, processamento e saída"
      - "Código, compilação e execução"
      - "Variáveis, funções e classes"
    correta: 1
    explicacao: "✓ Todo programa recebe dados (entrada), processa e produz resultado (saída)."
    explicacaoErrada: "✗ A estrutura fundamental é: entrada → processamento → saída."
---

## O computador só entende dois estados

Toda a computação se baseia em um princípio simples: existem apenas dois estados possíveis — ligado ou desligado, verdadeiro ou falso, 1 ou 0.

Os circuitos eletrônicos do computador trabalham com presença ou ausência de sinal elétrico. Quando há voltagem suficiente, temos 1 (verdadeiro). Quando não há, temos 0 (falso).

Por que apenas dois estados e não três ou dez? Porque com apenas dois níveis de voltagem, a margem de erro é enorme — o circuito consegue distinguir facilmente entre "tem sinal" e "não tem sinal". Se usássemos 10 níveis, qualquer ruído elétrico poderia confundir um nível com outro.

Essa simplicidade é o que torna os computadores tão confiáveis e poderosos: bilhões de decisões sim/não por segundo, com margem de erro desprezível.

> [!info]
> George Boole (1815–1864) criou a álgebra booleana, que usa apenas dois valores: verdadeiro e falso. É a base matemática de toda a computação moderna.

## Proposições lógicas

Uma proposição é uma frase que pode ser classificada como verdadeira ou falsa — nunca as duas ao mesmo tempo, nunca nenhuma.

- "Manaus é a capital do Amazonas" → **Verdadeiro**
- "2 + 2 = 5" → **Falso**
- "Choveu hoje" → pode ser V ou F dependendo do dia, mas no momento da avaliação, tem exatamente um valor
- "João tem mais de 18 anos" → proposição válida — em um dado momento, é V ou F

Perguntas, exclamações e ordens **NÃO** são proposições, pois não podem ser julgadas como verdadeiras ou falsas. "Que horas são?" não é proposição. "Feche a porta!" também não.

## Teste condicional no dia a dia

"Joana pagou a compra?" — Essa é uma pergunta, mas por trás dela há uma proposição: "Joana pagou a compra", que é V ou F.

No computador, toda decisão segue essa lógica: avalia uma condição e age de acordo com o resultado.

Se Joana pagou → liberar produto. Se não pagou → cobrar novamente. Isso é a base do `if/else` em programação.

> [!info]
> Existe a chamada lógica fuzzy (difusa), que trabalha com graus de verdade entre 0 e 1 (por exemplo, 0.7 = "parcialmente verdadeiro"). Ela é usada em máquinas de lavar, ar-condicionado e IA. Mas a lógica clássica que estudamos aqui é estritamente binária: V ou F, sem meio-termo.

## Representações de verdadeiro e falso

Em lógica e programação, usamos diversas formas para representar os dois estados:

| Verdadeiro | Falso |
|---|---|
| V | F |
| 1 | 0 |
| true | false |
| Sim | Não |
| Ligado | Desligado |

## Entrada, processamento e saída

Todo programa segue uma estrutura básica: recebe dados (entrada), processa esses dados e produz um resultado (saída).

A lógica booleana é o coração do processamento — o computador toma decisões avaliando condições que resultam em verdadeiro ou falso.

```typescript
const temperatura: number = 39;

if (temperatura > 38) {
  console.log("Febre detectada");
} else {
  console.log("Temperatura normal");
}
// Saída: "Febre detectada"
```

Neste exemplo, a **entrada** é o valor da temperatura, o **processamento** é a comparação `temperatura > 38` (que resulta em `true` ou `false`), e a **saída** é a mensagem exibida.

## Na prática com TypeScript

Em TypeScript, o tipo que representa verdadeiro ou falso é o `boolean`. Ele aceita apenas dois valores: `true` e `false`.

### Declarando variáveis booleanas

```typescript
const estaChovendo: boolean = true;
const temSol: boolean = false;

console.log(estaChovendo); // true
console.log(temSol);       // false
```

> [!sucesso]
> O TypeScript verifica o tipo em tempo de compilação. Se você tentar atribuir um número ou texto a uma variável `boolean`, o compilador apontará um erro antes mesmo de executar o programa.

### Verificando o tipo com `typeof`

O operador `typeof` retorna uma string indicando o tipo de um valor:

```typescript
console.log(typeof true);    // "boolean"
console.log(typeof 42);      // "number"
console.log(typeof "texto"); // "string"
```

### Tomando decisões com `if/else`

O `if/else` é a tradução direta do raciocínio condicional para código. A condição entre parênteses é avaliada como `true` ou `false`:

```typescript
const joanaPageou: boolean = true;

if (joanaPageou) {
  console.log("Produto liberado");
} else {
  console.log("Cobrar novamente");
}
// Saída: "Produto liberado"
```

> [!alerta]
> Em TypeScript, condições como `if (1)` ou `if ("texto")` funcionam por causa da coerção de tipos, mas isso é considerado má prática. Sempre use valores `boolean` explícitos nas suas condições para manter o código claro e seguro.

## Representações em TypeScript

Veja como os diferentes formatos de representação se relacionam:

| Lógica formal | Binário | TypeScript | Descrição |
|---|---|---|---|
| V | 1 | `true` | Verdadeiro, ligado, sim |
| F | 0 | `false` | Falso, desligado, não |

Em TypeScript, expressões de comparação sempre retornam `boolean`:

```typescript
console.log(10 > 5);    // true  (V)
console.log(3 === 7);   // false (F)
console.log(1 === 1);   // true  (V)
```

> [!info]
> Na lógica formal usamos V e F. No sistema binário usamos 1 e 0. Em TypeScript usamos `true` e `false`. São três formas de expressar a mesma ideia: dois estados possíveis, sem meio-termo.
