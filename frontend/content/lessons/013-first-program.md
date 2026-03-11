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

## Ola, mundo!

Todo programador comeca aqui. Crie um arquivo `ola.ts` e escreva:

```typescript
// Meu primeiro programa em TypeScript
console.log("Olá, mundo!");
```

Execute no terminal:

```bash
npx tsx ola.ts
```

Resultado:

```
Olá, mundo!
```

Duas coisas estao acontecendo nesse codigo:

- **`console.log`** — e uma funcao que imprime (exibe) valores no terminal. Tudo que voce colocar dentro dos parenteses sera mostrado.
- **`"Olá, mundo!"`** — e uma **string** (texto). Strings sempre ficam entre aspas.

> [!sucesso]
> Se voce viu "Ola, mundo!" no terminal, parabens! Voce acabou de executar seu primeiro programa em TypeScript.

## Anatomia do programa

Regras basicas de qualquer programa em TypeScript:

- Instrucoes terminam com **`;`** (ponto e virgula). Em TypeScript o `;` e tecnicamente opcional, mas usa-lo e uma boa pratica — evita ambiguidades.
- **`//`** inicia um comentario de uma linha. O programa ignora tudo apos `//`.
- **`/* */`** delimita um comentario de multiplas linhas.
- O codigo executa **de cima para baixo**, uma instrucao por vez.

```typescript
// Isto é um comentário de uma linha (ignorado pelo programa)

/*
  Isto é um comentário
  de múltiplas linhas
*/

console.log("Primeira linha");  // executa primeiro
console.log("Segunda linha");   // executa depois
```

Resultado:

```
Primeira linha
Segunda linha
```

Comentarios existem para explicar o codigo para humanos. O computador ignora completamente.

## Strings e numeros

O programa diferencia texto de numeros:

```typescript
console.log("Texto entre aspas");  // string (texto)
console.log(42);                    // number (número inteiro)
console.log(3.14);                  // number (número decimal)
console.log("2 + 2 =", 2 + 2);    // misturando texto e cálculo
```

Resultado:

```
Texto entre aspas
42
3.14
2 + 2 = 4
```

Strings (texto) sempre vao entre aspas. Numeros ficam sem aspas. `"42"` e texto. `42` e numero. A diferenca importa quando fizer calculos:

```typescript
console.log(10 + 5);      // 15 — soma numérica
console.log("10" + "5");  // "105" — concatenação de texto!
```

> [!alerta]
> Cuidado com a diferenca entre `10 + 5` (soma = 15) e `"10" + "5"` (juncao de textos = "105"). Quando voce usa `+` com strings, ele junta os textos em vez de somar.

## Mais exemplos praticos

Voce pode exibir varios tipos de informacao com `console.log`:

```typescript
// Exibindo múltiplos valores de uma vez
console.log("Nome:", "Ana", "| Idade:", 20);

// Fazendo cálculos diretamente
console.log("Dobro de 7:", 7 * 2);
console.log("Metade de 100:", 100 / 2);

// Usando crases (template literals) — veremos mais sobre isso adiante
console.log(`O resultado de 3 + 4 é ${3 + 4}`);
```

Resultado:

```
Nome: Ana | Idade: 20
Dobro de 7: 14
Metade de 100: 50
O resultado de 3 + 4 é 7
```

## Erros comuns

Estes sao os erros mais frequentes para iniciantes:

**Esquecer aspas:**

```typescript
// ✗ ERRADO — o programa procura uma variável chamada Olá
console.log(Olá);

// ✓ CORRETO — texto entre aspas
console.log("Olá");
```

**Esquecer parenteses:**

```typescript
// ✗ ERRADO — sintaxe incorreta
console.log "Olá";

// ✓ CORRETO — com parênteses
console.log("Olá");
```

**Maiusculas erradas:**

```typescript
// ✗ ERRADO — não existe Console.Log
Console.Log("Olá");

// ✓ CORRETO — tudo minúsculo
console.log("Olá");
```

> [!info]
> Erros fazem parte do aprendizado. Cada mensagem de erro no terminal e uma pista sobre o que corrigir. Leia a mensagem com atencao, identifique a linha indicada e corrija.

> [!alerta]
> JavaScript/TypeScript diferencia maiusculas de minusculas. `console.log` funciona, `Console.Log` nao. Isso vale para tudo: nomes de variaveis, funcoes e palavras-chave.
