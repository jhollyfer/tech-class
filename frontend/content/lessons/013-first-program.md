---
slug: "first-program"
modulo: "Módulo 3 — Primeiros Programas"
titulo: "Primeiro Programa"
subtitulo: "Escrevendo, entendendo e executando seu primeiro código"
descricao: "Anatomia de um programa: console.log, strings, números, comentários e a diferença entre compilar e interpretar."
ordem: 13
proximosPassos:
  - titulo: "Variáveis e tipos"
    descricao: "Aprenda a armazenar dados no programa"
  - titulo: "Operadores"
    descricao: "Some, subtraia e compare valores"
  - titulo: "Debug"
    descricao: "Encontre e corrija erros no código"
quiz:
  - pergunta: "O que console.log faz?"
    opcoes: ["Cria uma variável", "Exibe uma mensagem no terminal", "Salva um arquivo", "Abre o navegador"]
    correta: 1
    explicacao: "✓ console.log imprime (exibe) valores no terminal. É a principal forma de ver resultados no código."
    explicacaoErrada: "✗ console.log é uma função de saída — ela exibe mensagens e valores no terminal."
  - pergunta: "Como se escreve um texto (string) em JavaScript/TypeScript?"
    opcoes: ["Entre parênteses: (texto)", "Entre colchetes: [texto]", "Entre aspas: \"texto\"", "Entre chaves: {texto}"]
    correta: 2
    explicacao: "✓ Strings são textos entre aspas duplas (\"), aspas simples (') ou crases (`)."
    explicacaoErrada: "✗ Texto (string) sempre vai entre aspas: \"texto\", 'texto' ou `texto`."
  - pergunta: "Qual é o símbolo para comentário de uma linha?"
    opcoes: ["#", "//", "<!-- -->", "**"]
    correta: 1
    explicacao: "✓ // inicia um comentário de uma linha. Tudo após // naquela linha é ignorado pelo programa."
    explicacaoErrada: "✗ Em JavaScript/TypeScript, comentário de uma linha começa com //. O # é usado em outras linguagens."
  - pergunta: "O que acontece ao executar: console.log(Olá) (sem aspas)?"
    opcoes: ["Exibe 'Olá'", "Exibe 'undefined'", "Dá erro", "Não faz nada"]
    correta: 2
    explicacao: "✓ Sem aspas, o programa tenta encontrar uma variável chamada 'Olá' — como ela não existe, dá erro."
    explicacaoErrada: "✗ Sem aspas, 'Olá' é tratado como nome de variável. Como não foi declarada, o programa dá erro."
---

## Olá, mundo!

Todo programador começa aqui. Crie um arquivo `ola.ts` e escreva:

```typescript
// Meu primeiro programa
console.log("Olá, mundo!");
```

Execute no terminal com `npx tsx ola.ts`. O resultado:

```
Olá, mundo!
```

Duas coisas estão acontecendo nesse código:

- **`console.log`** — é uma função que imprime (exibe) valores no terminal. Tudo que você colocar dentro dos parênteses será mostrado.
- **`"Olá, mundo!"`** — é uma **string** (texto). Strings sempre ficam entre aspas.

## Anatomia do programa

Regras básicas de qualquer programa em TypeScript:

- Instruções terminam com **`;`** (ponto e vírgula). Em JavaScript/TypeScript o `;` é tecnicamente opcional, mas usá-lo é uma boa prática — evita ambiguidades.
- **`//`** inicia um comentário de uma linha. O programa ignora tudo após `//`.
- **`/* */`** delimita um comentário de múltiplas linhas.
- O código executa **de cima para baixo**, uma instrução por vez.

```typescript
// Isto é um comentário de uma linha (ignorado pelo programa)

/*
  Isto é um comentário
  de múltiplas linhas
*/

console.log("Primeira linha");  // executa primeiro
console.log("Segunda linha");   // executa depois
```

Comentários existem para explicar o código para humanos. O computador ignora completamente.

## Strings e números

O programa diferencia texto de números:

```typescript
console.log("Texto entre aspas"); // string
console.log(42);                   // número
console.log(3.14);                 // número decimal
console.log("2 + 2 =", 2 + 2);   // misturando
```

Resultado:

```
Texto entre aspas
42
3.14
2 + 2 = 4
```

Strings (texto) sempre vão entre aspas. Números ficam sem aspas. `"42"` é texto. `42` é número. A diferença importa quando fizer cálculos.

## Erros comuns

Estes são os erros mais frequentes para iniciantes:

- **Esquecer aspas:** `console.log(Olá)` — o programa procura uma variável chamada `Olá` e não encontra. Erro.
- **Esquecer parênteses:** `console.log "Olá"` — a sintaxe está incorreta. `console.log` precisa de parênteses. Erro.
- **Maiúsculas erradas:** `Console.Log("Olá")` — não existe `Console.Log` com letras maiúsculas. Erro.

Erros fazem parte do aprendizado. Cada mensagem de erro no terminal é uma pista sobre o que corrigir. Leia a mensagem, identifique a linha indicada e corrija.

> [!alerta]
> JavaScript/TypeScript diferencia maiúsculas de minúsculas. `console.log` funciona, `Console.Log` não. Isso vale para tudo: nomes de variáveis, funções e palavras-chave.