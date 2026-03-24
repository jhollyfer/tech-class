---
slug: "params-return-callbacks"
modulo: "Módulo 4 — Dados e Funções"
titulo: "Parâmetros, Retorno e Callbacks"
subtitulo: "Parâmetros opcionais, retorno tipado, callbacks e type aliases"
descricao: "Parâmetros opcionais e com valor padrão, tipagem de retorno (void, objetos), funções como parâmetros (callbacks) e introdução a type aliases em TypeScript."
ordem: 13
proximosPassos:
  - titulo: "Desafio: Par ou Ímpar"
    descricao: "Primeiro desafio prático"
  - titulo: "Desafio: Tabuada"
    descricao: "Gere tabuadas com funções"
quiz:
  - pergunta: "O que significa o ? após um parâmetro?"
    opcoes: ["O parâmetro é obrigatório", "O parâmetro é opcional (pode ser undefined)", "O parâmetro é null", "O parâmetro é boolean"]
    correta: 1
    explicacao: "✓ O ? torna o parâmetro opcional. Se não for passado, seu valor será undefined."
    explicacaoErrada: "✗ O ? após o nome do parâmetro indica que ele é opcional — pode ou não ser fornecido."
  - pergunta: "O que é um callback?"
    opcoes: ["Um tipo de variável", "Uma função passada como argumento para outra função", "Um retorno de função", "Um loop especial"]
    correta: 1
    explicacao: "✓ Callback é uma função que você passa como argumento. A função que recebe decide quando e como executá-la."
    explicacaoErrada: "✗ Callback = função como argumento. Exemplo: array.map(callback) — o map chama o callback para cada elemento."
  - pergunta: "Para que serve o type alias?"
    opcoes: ["Para criar variáveis", "Para dar um nome descritivo a um tipo", "Para importar módulos", "Para criar loops"]
    correta: 1
    explicacao: "✓ type alias cria um nome para um tipo, tornando o código mais legível. Exemplo: type Nota = number."
    explicacaoErrada: "✗ type cria um alias (apelido) para um tipo. Não cria variáveis — apenas nomeia tipos para melhor legibilidade."
---

## Parametros opcionais e valores padrao

Parametros podem ser opcionais (marcados com `?`) ou ter valores padrao:

```typescript
// Parâmetro com valor padrão
function potencia(base: number, expoente: number = 2): number {
  return base ** expoente;
}

console.log(potencia(3));      // 9  (usa expoente padrão = 2)
console.log(potencia(2, 10));  // 1024

// Parâmetro opcional (pode ser undefined)
function criarNome(nome: string, sobrenome?: string): string {
  return sobrenome ? `${nome} ${sobrenome}` : nome;
}

console.log(criarNome("Marcos"));              // Marcos
console.log(criarNome("Marcos", "Rodrigues")); // Marcos Rodrigues
```

> [!alerta]
> Parametros com valor padrao e opcionais devem vir **por ultimo** na lista de parametros. `function f(a: string = "oi", b: number)` causa confusao.

## Tipando o retorno

O tipo apos os parenteses indica o que a funcao devolve:

```typescript
// void — função que não retorna valor
function exibirMensagem(msg: string): void {
  console.log(msg);
}

// Retorno de múltiplos valores via objeto
function dividir(a: number, b: number): { resultado: number; resto: number } {
  return {
    resultado: Math.floor(a / b),
    resto: a % b,
  };
}

const { resultado, resto } = dividir(10, 3);
console.log(`Resultado: ${resultado}, Resto: ${resto}`);
// → Resultado: 3, Resto: 1
```

> [!info]
> A desestruturacao (`const { resultado, resto } = ...`) extrai valores de um objeto diretamente em variaveis. E um recurso muito usado em TypeScript moderno.

## Callbacks --- funcoes como parametros

Uma funcao pode receber outra funcao como argumento. Isso se chama **callback**:

```typescript
function aplicarOperacao(
  numeros: number[],
  operacao: (n: number) => number,
): number[] {
  return numeros.map(operacao);
}

const resultado = aplicarOperacao([1, 2, 3, 4], (n) => n * 3);
console.log(resultado); // [3, 6, 9, 12]
```

Voce ja usou callbacks sem perceber: `filter`, `map` e `reduce` recebem callbacks:

```typescript
const notas = [8, 5, 9, 3, 7];

// A arrow function (nota) => nota >= 7 é o callback
const aprovados = notas.filter((nota) => nota >= 7);
```

## type aliases --- nomeando tipos

O `type` cria um nome descritivo para um tipo. Torna o codigo mais legivel, especialmente com objetos:

```typescript
type Aluno = {
  nome: string;
  notas: number[];
};

type Carrinho = Produto[];

function calcularMedia(aluno: Aluno): number {
  const soma = aluno.notas.reduce((acc, n) => acc + n, 0);
  return soma / aluno.notas.length;
}

const ana: Aluno = { nome: "Ana", notas: [8, 9, 7] };
console.log(calcularMedia(ana)); // 8
```

Em vez de repetir `{ nome: string; notas: number[] }` em todo lugar, voce escreve `Aluno`. Mais curto, mais claro.

> [!sucesso]
> Parametros opcionais, callbacks e type aliases sao ferramentas que elevam a qualidade do seu codigo. Voce vai usa-los nos desafios a seguir.

## Principio da responsabilidade unica

Cada funcao deve fazer **uma coisa so**. Se o nome precisa de "E" no meio (ex: `calcularEImprimir`), quebre em duas funcoes:

```typescript
// ✗ Faz duas coisas
function calcularEImprimir(notas: number[]): void {
  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  console.log(`Média: ${media}`);
}

// ✓ Cada uma faz uma coisa
function calcularMedia(notas: number[]): number {
  return notas.reduce((a, b) => a + b, 0) / notas.length;
}

console.log(`Média: ${calcularMedia([8, 7, 9])}`);
```
