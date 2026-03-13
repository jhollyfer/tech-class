---
slug: "conditionals"
modulo: "Módulo 3 — Controle de Fluxo"
titulo: "Estruturas Condicionais (if/else)"
subtitulo: "Tomando decisões no código com if e else"
descricao: "if, else if, else, operadores de comparação e operador ternário em TypeScript."
ordem: 6
proximosPassos:
  - titulo: "switch/case"
    descricao: "Aprenda switch e combine condições"
  - titulo: "Loops"
    descricao: "Repita ações automaticamente"
quiz:
  - pergunta: "O que acontece quando a condição de um if é falsa e não há else?"
    opcoes: ["O programa dá erro", "O bloco do if executa mesmo assim", "Nada acontece, o programa segue adiante", "O programa para de executar"]
    correta: 2
    explicacao: "✓ Se a condição é falsa e não existe else, o programa simplesmente pula o bloco do if e continua executando o que vem depois."
    explicacaoErrada: "✗ Sem else, o bloco do if é ignorado quando a condição é falsa. O programa segue normalmente."
  - pergunta: "Qual operador verifica igualdade estrita em TypeScript?"
    opcoes: ["=", "==", "===", "!="]
    correta: 2
    explicacao: "✓ === compara valor E tipo sem conversão. É o operador recomendado em TypeScript/JavaScript."
    explicacaoErrada: "✗ O = é atribuição, o == faz conversão de tipo. Use === para igualdade estrita (valor e tipo)."
  - pergunta: "O que faz: const x = idade >= 18 ? 'maior' : 'menor'?"
    opcoes: ["Declara duas variáveis", "Atribui 'maior' se idade >= 18, senão 'menor'", "Dá erro de sintaxe", "Compara duas strings"]
    correta: 1
    explicacao: "✓ O operador ternário (condição ? valorSeVerdadeiro : valorSeFalso) é um if/else compacto em uma linha."
    explicacaoErrada: "✗ Isso é o operador ternário: se a condição for verdadeira, retorna o valor antes do :, senão retorna o valor depois."
---

## if e else --- a decisao basica

Programas precisam tomar decisoes. Ate agora, todo codigo que escrevemos executava linha por linha, de cima para baixo, sem desvios. Mas programas reais precisam reagir a situacoes diferentes. O `if` permite que um bloco de codigo execute apenas quando uma condicao for verdadeira:

```typescript
const idade: number = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

A condicao fica entre parenteses `()`. O codigo a executar fica entre chaves `{}`. Se a condicao for verdadeira, executa o bloco do `if`. Se for falsa, executa o bloco do `else`.

O `else` e opcional. Sem ele, o programa simplesmente pula o bloco quando a condicao e falsa:

```typescript
const temperatura: number = 35;

if (temperatura > 30) {
  console.log("Está muito quente hoje!");
}
// Se temperatura <= 30, nada acontece e o programa segue
```

> [!info]
> A condicao dentro do `if` sempre resulta em um valor booleano (`true` ou `false`). Qualquer expressao que produza um booleano pode ser usada como condicao.

## Operadores de comparacao

Toda condicao usa operadores de comparacao que retornam `true` ou `false`:

| Operador | Significado        | Exemplo        | Resultado |
| -------- | ------------------ | -------------- | --------- |
| `===`    | Igual (estrito)    | `5 === 5`      | `true`    |
| `!==`    | Diferente (estrito)| `5 !== 3`      | `true`    |
| `>`      | Maior que          | `10 > 5`       | `true`    |
| `<`      | Menor que          | `3 < 8`        | `true`    |
| `>=`     | Maior ou igual     | `5 >= 5`       | `true`    |
| `<=`     | Menor ou igual     | `3 <= 2`       | `false`   |

> [!alerta]
> Use `===` (igualdade estrita) em vez de `==` em TypeScript/JavaScript. O `==` faz conversao de tipo e pode causar bugs sutis. Exemplo: `"5" == 5` e `true`, mas `"5" === 5` e `false`. O TypeScript ja ajuda a evitar isso com verificacao de tipos, mas o habito de usar `===` e fundamental.

Veja alguns exemplos praticos:

```typescript
const nota: number = 7;
const nome: string = "Ana";

console.log(nota > 5);         // true
console.log(nota === 7);       // true
console.log(nome !== "Bob");   // true
console.log(nota <= 6);        // false
```

## else if --- multiplas condicoes

Quando ha mais de duas possibilidades, use `else if` para encadear condicoes. Um exemplo classico e o sistema de notas:

```typescript
const nota: number = 7.5;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

As condicoes sao testadas de cima para baixo. A primeira que for verdadeira executa seu bloco, e as demais sao ignoradas. A ordem importa: se colocasse `nota >= 5` antes de `nota >= 9`, uma nota 10 cairia em "Recuperacao".

Outro exemplo do mundo real --- um semaforo:

```typescript
const corSemaforo: string = "vermelho";

if (corSemaforo === "verde") {
  console.log("Siga em frente");
} else if (corSemaforo === "amarelo") {
  console.log("Atenção, prepare para parar");
} else if (corSemaforo === "vermelho") {
  console.log("Pare!");
} else {
  console.log("Cor inválida");
}
```

> [!info]
> O `else` final funciona como uma "rede de seguranca" --- ele captura qualquer caso que nao foi coberto pelas condicoes anteriores.

## Operador ternario --- if em uma linha

Para decisoes simples que atribuem um valor, o operador ternario e mais conciso:

```typescript
const idade: number = 20;
const status: string = idade >= 18 ? "maior" : "menor";

console.log(`Classificação: ${status} de idade`);
```

A sintaxe e: `condicao ? valorSeVerdadeiro : valorSeFalso`.

Mais um exemplo pratico:

```typescript
const saldo: number = 150;
const mensagem: string = saldo >= 0 ? "Saldo positivo" : "Conta no vermelho";

console.log(mensagem); // "Saldo positivo"
```

> [!alerta]
> Use o ternario apenas para expressoes simples. Para logica complexa, prefira `if/else` --- legibilidade vem primeiro. Evite aninhar ternarios (`a ? b ? c : d : e`), pois fica muito dificil de entender.

## Exercicio pratico

Tente criar um programa que classifica a faixa etaria de uma pessoa:

- **Crianca**: 0 a 11 anos
- **Adolescente**: 12 a 17 anos
- **Adulto**: 18 a 59 anos
- **Idoso**: 60 anos ou mais

```typescript
const idade: number = 25;

// Sua solução aqui:
// Use if/else if/else para classificar a idade
// e exiba a faixa etária no console
```

