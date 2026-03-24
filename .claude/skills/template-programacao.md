---
slug: "variaveis"
modulo: "Modulo 1 -- Fundamentos"
titulo: "Variaveis"
subtitulo: "Guardando informacoes no seu programa"
descricao: "Aprenda o que sao variaveis e como usar para armazenar dados no seu codigo."
ordem: 2
proximosPassos:
  - titulo: "Tipos de dados"
    descricao: "Conheca os diferentes tipos de informacao que uma variavel pode guardar"
  - titulo: "Operadores"
    descricao: "Aprenda a fazer calculos e comparacoes com variaveis"
quiz:
  - pergunta: "O que eh uma variavel?"
    opcoes: ["Um tipo de arquivo", "Um espaco na memoria para guardar um valor", "Um comando do terminal", "Um erro no codigo"]
    correta: 1
    explicacao: "Uma variavel eh como uma caixa com etiqueta onde voce guarda um valor para usar depois."
    explicacaoErrada: "Variavel nao eh arquivo, comando nem erro. Eh um espaco na memoria do computador onde voce armazena dados."
  - pergunta: "Qual a forma correta de declarar uma variavel em TypeScript?"
    opcoes: ["variavel nome = 'Ana'", "let nome = 'Ana'", "var: nome = 'Ana'", "nome == 'Ana'"]
    correta: 1
    explicacao: "Em TypeScript usamos let ou const seguido do nome da variavel, sinal de igual e o valor."
    explicacaoErrada: "A sintaxe correta eh: let nome = 'Ana'. Usamos let para variaveis que podem mudar e const para as que nao mudam."
  - pergunta: "Qual a diferenca entre let e const?"
    opcoes: ["Nenhuma, sao iguais", "let eh para numeros e const para texto", "let pode mudar de valor, const nao", "const eh mais rapido"]
    correta: 2
    explicacao: "let permite reatribuir o valor depois. const trava o valor — uma vez definido, nao muda."
    explicacaoErrada: "A diferenca eh que let permite mudar o valor depois (reatribuir), enquanto const mantem o valor fixo."
  - pergunta: "O que acontece se voce tentar mudar o valor de uma const?"
    opcoes: ["O valor muda normalmente", "O programa ignora a mudanca", "Da erro", "O valor vira undefined"]
    correta: 2
    explicacao: "Tentar reatribuir uma const gera um erro de compilacao. Isso eh uma protecao — se voce declarou como constante, o valor nao deve mudar."
    explicacaoErrada: "O programa da erro. const significa constante — o valor eh definido uma vez e nao pode ser alterado."
---

## Variaveis

Variavel eh um espaco na memoria do computador onde voce guarda um valor. Pense numa caixa com uma etiqueta: a etiqueta eh o nome da variavel e o conteudo dentro eh o valor.

Voce cria uma variavel, da um nome pra ela e coloca um valor. Depois pode usar esse nome em qualquer lugar do codigo pra acessar o valor.

> [!info]
> Existem dois tipos de variavel: `let` (pode mudar o valor depois) e `const` (valor fixo, nao muda). Na duvida, use `const`. Só use `let` quando realmente precisar mudar o valor.

## Exemplos

### TypeScript

```typescript
// Criando variaveis
const nome: string = 'Ana'
const idade: number = 25
let pontos: number = 0

console.log(nome)   // → Ana
console.log(idade)  // → 25

// Mudando o valor de uma variavel let
pontos = 10
console.log(pontos) // → 10

// const nao pode mudar:
// nome = 'Carlos'  // ✗ Erro! const nao permite reatribuicao
```

### Python

```python
# Criando variaveis
nome = "Ana"
idade = 25
pontos = 0

print(nome)   # → Ana
print(idade)  # → 25

# Mudando o valor
pontos = 10
print(pontos) # → 10

# Em Python nao existe const nativo,
# mas a convencao eh usar MAIUSCULAS para constantes:
PI = 3.14159
```

### C++

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    // Criando variaveis
    const string nome = "Ana";
    int idade = 25;
    int pontos = 0;

    cout << nome << endl;   // → Ana
    cout << idade << endl;  // → 25

    // Mudando o valor
    pontos = 10;
    cout << pontos << endl; // → 10

    // const nao pode mudar:
    // nome = "Carlos";  // ✗ Erro! const nao permite reatribuicao

    return 0;
}
```

## Exercicios

### Exercicio 1: Ficha do aluno

Crie variaveis para guardar seu nome, sua idade e sua nota. Depois imprima tudo no terminal.

### Exercicio 2: Contador de passos

Crie uma variavel `passos` comecando em 0. Some 100 passos tres vezes (simulando tres caminhadas). Imprima o total.

## Referencias

- [MDN Web Docs — Variaveis](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables) -- explicacao detalhada sobre variaveis em JavaScript/TypeScript
- [W3Schools — Python Variables](https://www.w3schools.com/python/python_variables.asp) -- tutorial interativo de variaveis em Python
- [Curso em Video — Variaveis (YouTube)](https://www.youtube.com/watch?v=Ofktsne-utM) -- videoaula em portugues sobre variaveis
