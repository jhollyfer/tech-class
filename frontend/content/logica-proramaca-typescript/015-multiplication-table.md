---
slug: "multiplication-table"
modulo: "Módulo 5 — Prática"
titulo: "Desafio: Tabuada"
subtitulo: "Gerando tabuadas com loops e formatação"
descricao: "Gere a tabuada completa de qualquer número usando for loop, template literals e formatação com padStart."
ordem: 15
proximosPassos:
  - titulo: "Desafio: Sistema de Aprovação"
    descricao: "Classifique alunos por nota"
  - titulo: "Desafio: Números Primos"
    descricao: "Verifique e liste números primos"
quiz:
  - pergunta: "O que padStart(2) faz em uma string?"
    opcoes: ["Remove espaços", "Adiciona espaços no início até ter 2 caracteres", "Adiciona 2 espaços no final", "Converte para número"]
    correta: 1
    explicacao: "✓ padStart(2) preenche o início da string com espaços até ela ter pelo menos 2 caracteres. '1' vira ' 1'."
    explicacaoErrada: "✗ padStart(tamanho) preenche o início com espaços. '1'.padStart(2) resulta em ' 1' — útil para alinhar colunas."
  - pergunta: "Quantas iterações tem um for de 1 a 10?"
    opcoes: ["9", "10", "11", "Depende"]
    correta: 1
    explicacao: "✓ for (let i = 1; i <= 10; i++) executa 10 vezes: i = 1, 2, 3, ..., 10."
    explicacaoErrada: "✗ De 1 até 10 (inclusive) são 10 iterações."
  - pergunta: "O que toString() faz com um número?"
    opcoes: ["Arredonda o número", "Converte para string", "Converte para boolean", "Remove decimais"]
    correta: 1
    explicacao: "✓ toString() converte qualquer valor para sua representação em texto (string)."
    explicacaoErrada: "✗ toString() transforma o número em string. Necessário para usar métodos de string como padStart."
---

## O desafio

**Problema:** gere a tabuada completa de qualquer numero.

### Solucao basica

```typescript
function tabuada(n: number): void {
  console.log(`\n--- Tabuada do ${n} ---`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

tabuada(7);

// → --- Tabuada do 7 ---
// → 7 x 1 = 7
// → 7 x 2 = 14
// → ...
// → 7 x 10 = 70
```

Um `for` de 1 a 10, multiplicando `n` por cada valor de `i`. Simples e direto.

### Versao formatada

Para alinhar os numeros em colunas, use `padStart`:

```typescript
function tabuadaFormatada(n: number): void {
  console.log(`\n--- Tabuada do ${n} ---`);
  for (let i = 1; i <= 10; i++) {
    const multiplicador = i.toString().padStart(2);
    const resultado = (n * i).toString().padStart(3);
    console.log(`${n} x ${multiplicador} = ${resultado}`);
  }
}

tabuadaFormatada(7);

// → --- Tabuada do 7 ---
// → 7 x  1 =   7
// → 7 x  2 =  14
// → 7 x 10 =  70
```

> [!info]
> `padStart(n)` preenche o inicio de uma string com espacos ate ela ter pelo menos `n` caracteres. Isso alinha os numeros em colunas, deixando a saida mais profissional.

### Versao interativa

```typescript
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const entrada = prompt("Digite um número para ver a tabuada: ");
const numero = parseInt(entrada);

if (isNaN(numero)) {
  console.log("Número inválido!");
} else {
  tabuadaFormatada(numero);
}
```

## Exercicio extra

Gere as tabuadas de 1 a 10 de uma vez:

```typescript
for (let n = 1; n <= 10; n++) {
  tabuadaFormatada(n);
}
```

> [!sucesso]
> Conceitos aplicados: funcoes com tipo void, for loop, template literals, `padStart` para formatacao e conversao de tipos com `toString()`.
