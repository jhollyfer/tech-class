---
slug: "input-output"
modulo: "Módulo 3 — Primeiros Programas"
titulo: "Entrada e Saída de Dados"
subtitulo: "Lendo dados do usuário e exibindo resultados formatados"
descricao: "prompt/readline para entrada, console.log para saída, template literals e um programa completo de cálculo de média."
ordem: 15
proximosPassos:
  - titulo: "Estruturas condicionais"
    descricao: "Tome decisões no código com if/else"
  - titulo: "Formatação"
    descricao: "Aprenda a formatar números e datas"
  - titulo: "Projetos"
    descricao: "Crie programas que interagem com o usuário"
quiz:
  - pergunta: "Qual função exibe dados no terminal?"
    opcoes: ["print()", "echo()", "console.log()", "write()"]
    correta: 2
    explicacao: "✓ console.log() é a função padrão para exibir dados no terminal em JavaScript/TypeScript."
    explicacaoErrada: "✗ Em JavaScript/TypeScript, a saída no terminal é feita com console.log(). print() é de outras linguagens."
  - pergunta: "O que são template literals?"
    opcoes: ["Strings entre aspas simples", "Strings entre crases com ${} para expressões", "Comentários especiais", "Variáveis de template"]
    correta: 1
    explicacao: "✓ Template literals usam crases (`) e permitem inserir expressões com ${expressão} dentro do texto."
    explicacaoErrada: "✗ Template literals usam crase (`) e ${} para inserir valores dinâmicos: `Olá, ${nome}`."
  - pergunta: "Para ler entrada do usuário no Node.js, usamos:"
    opcoes: ["input()", "scanf()", "readline", "prompt()"]
    correta: 2
    explicacao: "✓ No Node.js, o módulo readline permite ler dados digitados pelo usuário no terminal."
    explicacaoErrada: "✗ No Node.js (terminal), usamos o módulo readline. prompt() é do navegador, não do terminal."
  - pergunta: "parseInt(\"42\") retorna:"
    opcoes: ["\"42\" (string)", "42 (number)", "NaN", "undefined"]
    correta: 1
    explicacao: "✓ parseInt converte a string \"42\" para o número inteiro 42."
    explicacaoErrada: "✗ parseInt() converte texto para número inteiro. \"42\" vira 42."
---

## Saída: console.log

`console.log` é a principal forma de exibir dados no terminal. Aceita um ou mais valores separados por vírgula:

```typescript
console.log("Texto simples");
console.log("Soma:", 2 + 3);
console.log(`Resultado: ${2 + 3}`); // template literal
```

Resultado:

```
Texto simples
Soma: 5
Resultado: 5
```

Quando você passa vários valores separados por vírgula, `console.log` exibe todos na mesma linha, separados por espaço.

## Template literals (crase)

Template literals são a forma mais prática de montar textos com valores dinâmicos:

```typescript
const nome = "Ana";
const idade = 20;
console.log(`${nome} tem ${idade} anos`); // "Ana tem 20 anos"
```

> [!info]
> Template literals usam crase (\`) em vez de aspas. Dentro delas, `${expressão}` é substituído pelo valor da expressão. Qualquer expressão válida funciona: variáveis, cálculos, chamadas de função.

Comparando as formas de montar texto:

```typescript
// Concatenação (forma antiga, mais verbosa)
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");

// Template literal (forma moderna, mais legível)
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
```

Ambas produzem o mesmo resultado, mas template literals são mais fáceis de ler e manter.

## Entrada: lendo dados do usuário

No Node.js, a leitura de dados do terminal usa o módulo `readline`:

```typescript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual seu nome? ", (resposta) => {
  console.log(`Olá, ${resposta}!`);
  rl.close();
});
```

O que acontece nesse código:

1. `import` carrega o módulo readline
2. `createInterface` conecta o programa ao terminal (entrada e saída)
3. `rl.question` exibe a pergunta e espera o usuário digitar
4. A resposta vem como parâmetro da função callback
5. `rl.close()` encerra a leitura

## Convertendo tipos

Dados digitados pelo usuário chegam sempre como **string** (texto). Para fazer cálculos, é necessário converter:

```typescript
const textoIdade = "25";
const idade = parseInt(textoIdade);    // string → número inteiro
const preco = parseFloat("19.90");     // string → número decimal
const volta = String(42);              // número → string
```

| Função | Converte | Exemplo |
|--------|----------|---------|
| parseInt() | string → inteiro | parseInt("25") → 25 |
| parseFloat() | string → decimal | parseFloat("19.90") → 19.9 |
| String() | qualquer → string | String(42) → "42" |
| Number() | string → número | Number("3.14") → 3.14 |

Se a conversão falhar, o resultado é `NaN` (Not a Number):

```typescript
console.log(parseInt("abc")); // NaN — não é um número válido
```

## Programa completo: calculadora de média

Juntando entrada, processamento e saída em um programa funcional:

```typescript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nota 1: ", (n1) => {
  rl.question("Nota 2: ", (n2) => {
    const media = (parseFloat(n1) + parseFloat(n2)) / 2;
    console.log(`Média: ${media.toFixed(1)}`);
    rl.close();
  });
});
```

Execução:

```
Nota 1: 7.5
Nota 2: 8.3
Média: 7.9
```

O método `.toFixed(1)` formata o número com uma casa decimal. `parseFloat` converte o texto digitado em número decimal antes do cálculo.