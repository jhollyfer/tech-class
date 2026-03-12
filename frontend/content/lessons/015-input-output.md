---
slug: "input-output"
modulo: "Módulo 3 — Primeiros Programas"
titulo: "Entrada e Saída de Dados"
subtitulo: "Lendo dados do usuário e exibindo resultados formatados"
descricao: "prompt-sync para entrada, console.log para saída, template literals e um programa completo de cálculo de média."
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
    opcoes: ["input()", "scanf()", "prompt-sync", "prompt()"]
    correta: 2
    explicacao: "✓ No Node.js, o pacote prompt-sync permite ler dados digitados pelo usuário no terminal de forma simples e síncrona."
    explicacaoErrada: "✗ No Node.js (terminal), usamos o pacote prompt-sync. prompt() é do navegador, não do terminal."
  - pergunta: "parseInt(\"42\") retorna:"
    opcoes: ["\"42\" (string)", "42 (number)", "NaN", "undefined"]
    correta: 1
    explicacao: "✓ parseInt converte a string \"42\" para o número inteiro 42."
    explicacaoErrada: "✗ parseInt() converte texto para número inteiro. \"42\" vira 42."
---

## Saida: console.log

`console.log` e a principal forma de exibir dados no terminal. Aceita um ou mais valores separados por virgula:

```typescript
console.log("Texto simples");
console.log("Soma:", 2 + 3);
console.log("Nome:", "Ana", "- Idade:", 20);
```

Resultado:

```
Texto simples
Soma: 5
Nome: Ana - Idade: 20
```

Quando voce passa varios valores separados por virgula, `console.log` exibe todos na mesma linha, separados por espaco.

### Outras funcoes de saida

Alem do `console.log`, existem outras funcoes uteis para exibir informacoes:

```typescript
console.log("Informação normal");        // saída padrão
console.warn("Atenção: valor alto!");     // aviso (aparece em amarelo em alguns terminais)
console.error("Erro: arquivo não encontrado"); // erro (aparece em vermelho)
console.table({ nome: "Ana", idade: 20 }); // exibe em formato de tabela
```

> [!info]
> `console.warn` e `console.error` funcionam igual ao `console.log`, mas ajudam a diferenciar mensagens normais de avisos e erros. Em navegadores, eles aparecem com cores diferentes no console.

## Template literals (crase)

Template literals sao a forma mais pratica de montar textos com valores dinamicos:

```typescript
const nome: string = "Ana";
const idade: number = 20;
console.log(`${nome} tem ${idade} anos`);
```

Resultado:

```
Ana tem 20 anos
```

> [!info]
> Template literals usam crase (\`) em vez de aspas. Dentro delas, `${expressao}` e substituido pelo valor da expressao. Qualquer expressao valida funciona: variaveis, calculos, chamadas de funcao.

### Mais exemplos com template literals

```typescript
const aluno: string = "Carlos";
const nota1: number = 8.5;
const nota2: number = 7.0;
const media: number = (nota1 + nota2) / 2;

console.log(`Média de ${aluno}: ${media.toFixed(1)}`);
```

Resultado:

```
Média de Carlos: 7.8
```

> [!alerta]
> Nao confunda crase (\`) com aspas simples ('). Elas parecem similares mas sao teclas diferentes. No teclado brasileiro, a crase fica ao lado da tecla "1".

## Entrada: lendo dados do usuario

No Node.js, a leitura de dados do terminal usa o pacote `prompt-sync`. Ele e simples e sincrono — o programa para e espera o usuario digitar:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const nome: string = prompt("Qual seu nome? ");
console.log(`Olá, ${nome}!`);
```

O que acontece nesse codigo:

1. **`import`** carrega o pacote prompt-sync
2. **`PromptSync()`** cria a funcao `prompt` que le do terminal
3. **`prompt("...")`** exibe a pergunta e espera o usuario digitar
4. O valor digitado e retornado como `string`

### Lendo multiplos valores

Para fazer varias perguntas, basta chamar `prompt` varias vezes:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const nome: string = prompt("Seu nome: ");
const idadeTexto: string = prompt("Sua idade: ");
const idade: number = parseInt(idadeTexto);

console.log(`${nome} tem ${idade} anos.`);
```

> [!info]
> Toda entrada do usuario chega como `string`, mesmo que ele digite um numero. Por isso e necessario converter com `parseInt` ou `parseFloat` antes de fazer calculos.

## Convertendo tipos

Dados digitados pelo usuario chegam sempre como **string** (texto). Para fazer calculos, e necessario converter:

```typescript
const textoIdade: string = "25";
const idade: number = parseInt(textoIdade);      // string → número inteiro
const preco: number = parseFloat("19.90");        // string → número decimal
const volta: string = String(42);                 // número → string
const textoNumero: string = (42).toString();      // outra forma: número → string
```

| Funcao | Converte | Exemplo | Resultado |
|--------|----------|---------|-----------|
| `parseInt()` | string para inteiro | `parseInt("25")` | `25` |
| `parseFloat()` | string para decimal | `parseFloat("19.90")` | `19.9` |
| `String()` | qualquer para string | `String(42)` | `"42"` |
| `Number()` | string para numero | `Number("3.14")` | `3.14` |

Se a conversao falhar, o resultado e `NaN` (Not a Number):

```typescript
console.log(parseInt("abc"));      // NaN — não é um número válido
console.log(Number(""));           // 0 — string vazia vira 0
console.log(Number("12abc"));      // NaN — contém letras
console.log(parseFloat("12.5abc")); // 12.5 — lê até onde consegue
```

> [!alerta]
> Sempre verifique se a conversao deu certo antes de usar o valor. Use `isNaN()` para testar:

```typescript
const entrada: string = "abc";
const numero: number = parseInt(entrada);

if (isNaN(numero)) {
  console.log("Valor inválido! Digite um número.");
} else {
  console.log(`Número: ${numero}`);
}
```

## Programa completo: calculadora de media

Juntando entrada, processamento e saida em um programa funcional:

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

console.log("=== Calculadora de Média ===");
console.log("");

// Lê as notas
const nota1: number = parseFloat(prompt("Digite a nota 1: "));
const nota2: number = parseFloat(prompt("Digite a nota 2: "));

// Verifica se as notas são válidas
if (isNaN(nota1) || isNaN(nota2)) {
  console.log("Erro: digite apenas números válidos.");
} else {
  // Calcula e exibe o resultado
  const media: number = (nota1 + nota2) / 2;
  console.log("");
  console.log(`Nota 1: ${nota1}`);
  console.log(`Nota 2: ${nota2}`);
  console.log(`Média: ${media.toFixed(1)}`);
  console.log(`Situação: ${media >= 7 ? "Aprovado" : "Reprovado"}`);
}
```

Execute com:

```bash
npx tsx media.ts
```

Exemplo de execucao:

```
=== Calculadora de Média ===

Digite a nota 1: 7.5
Digite a nota 2: 8.3

Nota 1: 7.5
Nota 2: 8.3
Média: 7.9
Situação: Aprovado
```

> [!sucesso]
> Este programa usa tudo que aprendemos ate agora: variaveis com tipos, template literals, leitura do usuario, conversao de tipos e saida formatada. Salve este codigo e experimente modificar: adicione uma terceira nota, mude a nota minima de aprovacao ou exiba uma mensagem diferente para cada faixa de nota.
