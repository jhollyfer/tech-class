# Desafios de Lógica de Programação com TypeScript

> 35+ exercícios práticos — do iniciante ao intermediário

Cada desafio tem: **enunciado**, **exemplo de entrada/saída esperada** e **dica de raciocínio**.  
Tente resolver antes de buscar qualquer solução. O erro faz parte do aprendizado.

---

## Módulo 1 — Variáveis e Tipos de Dados

### Desafio 1.1 — Ficha de Aluno

Declare variáveis para armazenar as informações de um aluno: nome, idade, matrícula, nota média e se está ativo. Exiba todas as informações em uma única string formatada usando template literal.

```
// Saída esperada:
// Aluno: Marcos Rodrigues | Matrícula: 2024001 | Idade: 22 anos
// Nota Média: 8.5 | Status: Ativo
```

> **Dica:** use `const` para dados fixos e escolha o tipo correto para cada informação.

---

### Desafio 1.2 — Conversor de Temperatura

Declare uma variável com temperatura em Celsius e converta para Fahrenheit e Kelvin. Exiba os três valores.

```
// Entrada: 100 (Celsius)
// Saída:
// Celsius:    100°C
// Fahrenheit: 212°F
// Kelvin:     373.15K
```

> **Fórmulas:** `F = C * 9/5 + 32` | `K = C + 273.15`

---

### Desafio 1.3 — Troca de Valores

Declare duas variáveis `a` e `b` com valores diferentes. Troque os valores entre elas **sem usar uma terceira variável auxiliar**. Exiba antes e depois.

```
// Antes: a = 10, b = 25
// Depois: a = 25, b = 10
```

> **Dica:** pesquise sobre destructuring assignment do TypeScript/JavaScript.

---

### Desafio 1.4 — Detector de Tipo em Runtime

Crie variáveis de tipos diferentes (`string`, `number`, `boolean`). Para cada uma, use `typeof` para detectar e exibir o tipo junto com o valor.

```
// Saída esperada:
// "Marcos" → tipo: string
// 42       → tipo: number
// true     → tipo: boolean
```

> **Dica:** o operador `typeof` retorna uma string com o nome do tipo.

---

### Desafio 1.5 — Calculadora de IMC

Declare variáveis para peso (kg) e altura (m). Calcule o IMC e armazene o resultado em uma variável com o tipo correto. Exiba o valor com 2 casas decimais.

```
// Entrada: peso = 75, altura = 1.78
// Saída: IMC: 23.67
```

> **Fórmula:** `IMC = peso / (altura * altura)`

---

### Desafio 1.6 — Informações de Produto

Declare variáveis para: nome do produto, preço unitário, quantidade em estoque e se está disponível. Calcule o valor total em estoque e exiba um resumo formatado.

```
// Saída esperada:
// Produto: Notebook | Preço: R$ 3.500,00
// Estoque: 12 unidades | Total: R$ 42.000,00 | Disponível: Sim
```

---

## Módulo 2 — Operadores

### Desafio 2.1 — Calculadora Básica

Dados dois números `a` e `b`, calcule e exiba o resultado das 5 operações aritméticas básicas (`+`, `-`, `*`, `/`, `%`).

```
// Entrada: a = 17, b = 5
// Saída:
// 17 + 5 = 22
// 17 - 5 = 12
// 17 * 5 = 85
// 17 / 5 = 3.4
// 17 % 5 = 2
```

---

### Desafio 2.2 — Verificador de Acesso

Dados: idade, se tem cadastro e se assinou o plano premium. Usando **somente operadores lógicos** (sem if/else), crie expressões booleanas que respondam:

- Pode acessar conteúdo básico? (apenas precisa ter cadastro)
- Pode acessar conteúdo premium? (precisa ter cadastro E plano premium)
- Está bloqueado? (não tem cadastro E é menor de 18)

```
// Entrada: idade = 17, temCadastro = true, premium = false
// Saída:
// Acesso básico:   true
// Acesso premium:  false
// Bloqueado:       false
```

---

### Desafio 2.3 — Tabela Verdade do AND

Sem usar variáveis booleanas prontas, gere as 4 combinações possíveis do operador `&&` com dois operandos e exiba o resultado de cada uma.

```
// Saída:
// true  && true  = true
// true  && false = false
// false && true  = false
// false && false = false
```

---

### Desafio 2.4 — Calculadora de Troco

Dados o valor de uma compra e o valor pago pelo cliente, calcule se o troco é necessário, o valor do troco e se o cliente pagou exatamente.

```
// Entrada: compra = 47.50, pago = 50.00
// Saída:
// Valor da compra: R$ 47.50
// Valor pago:      R$ 50.00
// Troco:           R$ 2.50
// Pagamento exato: false
```

---

### Desafio 2.5 — Verificador de Divisibilidade

Dado um número, verifique usando o operador `%` se ele é divisível por 2, 3, 5 e 10. Exiba `true` ou `false` para cada.

```
// Entrada: 60
// Saída:
// Divisível por 2:  true
// Divisível por 3:  true
// Divisível por 5:  true
// Divisível por 10: true
```

---

### Desafio 2.6 — Comparador de Senhas

Dados dois campos de senha (como strings), use operadores relacionais e lógicos para verificar: se são iguais, se ambas têm mais de 8 caracteres e se a confirmação é válida.

```
// Entrada: senha = "minhasenha123", confirmacao = "minhasenha123"
// Saída:
// Senhas iguais:        true
// Tamanho suficiente:   true
// Cadastro liberado:    true
```

---

## Módulo 3 — Estruturas de Decisão

### Desafio 3.1 — Classificador de Notas

Dado um valor de nota (0–10), classifique o aluno em: Excelente (≥9), Aprovado (≥7), Recuperação (≥5) ou Reprovado (<5). Use `if/else if/else`.

```
// Entrada: 6.5
// Saída: Situação: Recuperação
```

---

### Desafio 3.2 — Calculadora com Operação Escolhida

Dados dois números e um símbolo de operação (`+`, `-`, `*`, `/`), use `switch` para calcular e exibir o resultado. Trate a divisão por zero como caso especial.

```
// Entrada: 10, "/", 0
// Saída: Erro: divisão por zero não permitida

// Entrada: 10, "*", 4
// Saída: 10 * 4 = 40
```

---

### Desafio 3.3 — Classificador de Triângulo

Dados três lados, verifique primeiro se formam um triângulo válido. Se sim, classifique como: Equilátero (todos iguais), Isósceles (dois iguais) ou Escaleno (todos diferentes).

```
// Entrada: a = 5, b = 5, c = 8
// Saída: Triângulo Isósceles

// Entrada: a = 1, b = 2, c = 10
// Saída: Não forma um triângulo
```

> **Dica de triângulo válido:** cada lado deve ser menor que a soma dos outros dois.

---

### Desafio 3.4 — Calculadora de Frete

Dado o peso de um pacote (kg) e o estado de destino, calcule o frete com base nas regras:

- Até 1kg: R$ 15,00
- 1kg a 5kg: R$ 30,00
- Acima de 5kg: R$ 50,00
- Se o destino for o mesmo estado: desconto de 20%

```
// Entrada: peso = 3, destino = "AM", origem = "AM"
// Saída: Frete: R$ 24.00 (com desconto de 20%)

// Entrada: peso = 3, destino = "SP", origem = "AM"
// Saída: Frete: R$ 30.00
```

---

### Desafio 3.5 — Verificador de Ano Bissexto

Dado um ano, verifique se é bissexto. A regra é: divisível por 4, **exceto** os divisíveis por 100, **a menos que** também sejam divisíveis por 400.

```
// Entrada: 2000 → Bissexto (divisível por 400)
// Entrada: 1900 → Não bissexto (divisível por 100, mas não por 400)
// Entrada: 2024 → Bissexto (divisível por 4 e não por 100)
// Entrada: 2023 → Não bissexto
```

---

### Desafio 3.6 — Semáforo Inteligente

Dado o estado atual do semáforo (`"verde"`, `"amarelo"` ou `"vermelho"`), use switch para:

- Exibir a instrução ao motorista
- Exibir o próximo estado do semáforo

```
// Entrada: "verde"
// Saída:
// Instrução: Siga em frente
// Próximo estado: amarelo
```

---

## Módulo 4 — Estruturas de Repetição

### Desafio 4.1 — Tabuada Completa

Dado um número, exiba a tabuada completa de 1 a 10 usando `for`. Formate a saída de forma alinhada.

```
// Entrada: 7
// Saída:
// 7 x  1 =   7
// 7 x  2 =  14
// ...
// 7 x 10 =  70
```

---

### Desafio 4.2 — Contagem Regressiva com Mensagem Final

Use um loop `while` para fazer uma contagem regressiva de N até 0. Ao chegar em 0, exiba "🚀 Lançamento!".

```
// Entrada: 5
// Saída:
// 5...
// 4...
// 3...
// 2...
// 1...
// 🚀 Lançamento!
```

---

### Desafio 4.3 — Soma de Dígitos

Dado um número inteiro positivo, use um loop para somar todos os seus dígitos.

```
// Entrada: 4523
// Saída: Soma dos dígitos de 4523 = 14  (4+5+2+3)
```

> **Dica:** use `%` e `Math.floor()` para extrair os dígitos um por um, ou converta para string e percorra os caracteres.

---

### Desafio 4.4 — Sequência de Fibonacci

Gere os primeiros N termos da sequência de Fibonacci (cada número é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8...).

```
// Entrada: 10
// Saída: 0 1 1 2 3 5 8 13 21 34
```

---

### Desafio 4.5 — Números Primos até N

Liste todos os números primos de 2 até N. Um número é primo se for divisível apenas por 1 e por ele mesmo.

```
// Entrada: 30
// Saída: 2 3 5 7 11 13 17 19 23 29
```

> **Dica de otimização:** para verificar se N é primo, você só precisa testar divisores até `Math.sqrt(N)`.

---

### Desafio 4.6 — Validador com Tentativas Limitadas

Simule um sistema de login com senha fixa. O usuário tem 3 tentativas. Se acertar, exiba "Acesso concedido". Se esgotar, exiba "Conta bloqueada". (Use variáveis para simular as tentativas.)

```
// Senha correta: "ts2024"
// Tentativa 1: "errada"  → "Senha incorreta. 2 tentativas restantes."
// Tentativa 2: "errada"  → "Senha incorreta. 1 tentativa restante."
// Tentativa 3: "ts2024"  → "Acesso concedido!"
```

> **Dica:** use um array de tentativas pré-definidas e `do...while` ou `for` com `break`.

---

### Desafio 4.7 — Padrão de Asteriscos

Use loops aninhados (`for` dentro de `for`) para imprimir um triângulo de asteriscos.

```
// Entrada: 5
// Saída:
// *
// **
// ***
// ****
// *****
```

> **Desafio extra:** inverta o triângulo (começa com 5 asteriscos e vai diminuindo).

---

## Módulo 5 — Arrays

### Desafio 5.1 — Estatísticas de Notas

Dado um array de notas, calcule e exiba: maior nota, menor nota, média da turma e quantos alunos foram aprovados (nota >= 7).

```
// Entrada: [8.5, 6.0, 9.5, 5.0, 7.0, 4.5, 10.0]
// Saída:
// Maior nota:   10.0
// Menor nota:   4.5
// Média:        7.21
// Aprovados:    4 de 7
```

---

### Desafio 5.2 — Remover Duplicatas

Dado um array com valores repetidos, retorne um novo array apenas com os valores únicos, mantendo a ordem de aparição.

```
// Entrada: [1, 2, 2, 3, 4, 3, 5, 1]
// Saída:   [1, 2, 3, 4, 5]
```

> **Dica:** use o método `includes()` para verificar se o valor já foi adicionado.

---

### Desafio 5.3 — Inverter Array

Inverta a ordem dos elementos de um array **sem usar o método `.reverse()`**.

```
// Entrada: ["a", "b", "c", "d", "e"]
// Saída:   ["e", "d", "c", "b", "a"]
```

> **Dica:** percorra o array de trás para frente com um `for`.

---

### Desafio 5.4 — Segundo Maior Valor

Dado um array de números, encontre o segundo maior valor sem usar `.sort()`.

```
// Entrada: [3, 1, 7, 4, 7, 2, 5]
// Saída:   Segundo maior: 5
```

---

### Desafio 5.5 — Achatar Array de Notas por Aluno

Dado um array de objetos com nome e notas, retorne apenas os nomes dos alunos que têm **todas** as notas acima de 6.

```typescript
// Entrada:
const turma = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Bruno", notas: [5, 8, 7] },
  { nome: "Carol", notas: [9, 8, 10] },
];

// Saída: ["Ana", "Carol"]
```

> **Dica:** use `.filter()` combinado com `.every()`.

---

### Desafio 5.6 — Contador de Ocorrências

Dado um array de strings (ex: lista de frutas), conte quantas vezes cada elemento aparece e exiba o resultado.

```
// Entrada: ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]
// Saída:
// maçã:    3 vez(es)
// banana:  2 vez(es)
// laranja: 1 vez(es)
```

> **Dica:** percorra o array e use um objeto como dicionário `{ [fruta]: contagem }`.

---

### Desafio 5.7 — Mesclar e Ordenar Arrays

Dados dois arrays de números ordenados, mescle-os em um único array também ordenado, **sem usar `.sort()`**.

```
// Entrada: [1, 3, 5, 7] e [2, 4, 6, 8]
// Saída:   [1, 2, 3, 4, 5, 6, 7, 8]
```

---

## Módulo 6 — Funções

### Desafio 6.1 — Funções Matemáticas Puras

Crie as funções: `somar`, `subtrair`, `multiplicar`, `dividir` e `potencia`, cada uma recebendo dois parâmetros `number` e retornando `number`. A função `dividir` deve lançar um erro se o divisor for zero.

```typescript
// Assinaturas esperadas:
function somar(a: number, b: number): number;
function dividir(a: number, b: number): number; // lança Error se b === 0
```

---

### Desafio 6.2 — Função de Validação de CPF (formato)

Crie uma função que receba um CPF como string e valide **somente o formato** `"000.000.000-00"`. Retorne `true` se for válido ou `false` caso contrário.

```
// "123.456.789-09" → true
// "12345678909"    → false
// "123.456.789-0"  → false
```

> **Dica:** verifique o `length`, os pontos nas posições corretas e o traço.

---

### Desafio 6.3 — Fábrica de Saudações

Crie uma função `criarSaudacao` que recebe o turno (`"manhã"`, `"tarde"` ou `"noite"`) e retorna **outra função** que recebe um nome e retorna a saudação completa.

```typescript
const saudacaoManha = criarSaudacao("manhã");
console.log(saudacaoManha("Marcos")); // "Bom dia, Marcos!"
console.log(saudacaoManha("Ana")); // "Bom dia, Ana!"

const saudacaoNoite = criarSaudacao("noite");
console.log(saudacaoNoite("Bruno")); // "Boa noite, Bruno!"
```

> **Conceito:** isso é chamado de **closure** — uma função que "lembra" do contexto em que foi criada.

---

### Desafio 6.4 — Calculadora de Desconto Genérica

Crie uma função `aplicarDesconto` que recebe um valor, um percentual de desconto e uma função de arredondamento opcional (padrão: `Math.floor`). Retorne o valor com desconto aplicado.

```typescript
aplicarDesconto(100, 15); // → 85
aplicarDesconto(100, 15, Math.ceil); // → 85
aplicarDesconto(99.9, 10, Math.round); // → 90
```

---

### Desafio 6.5 — Pipeline de Transformação

Crie uma função `pipeline` que recebe um valor inicial e um **array de funções**. Aplique cada função em sequência, passando o resultado de uma para a próxima.

```typescript
const resultado = pipeline(5, [
  (n: number) => n * 2, // 10
  (n: number) => n + 3, // 13
  (n: number) => n ** 2, // 169
]);
console.log(resultado); // 169
```

> **Dica:** use `.reduce()` para encadear as funções.

---

### Desafio 6.6 — Função Recursiva: Fatorial

Crie uma função recursiva `fatorial(n)` que calcule `n!` sem usar nenhum loop.

```
// fatorial(0) → 1
// fatorial(1) → 1
// fatorial(5) → 120
// fatorial(10) → 3628800
```

> **Regra da recursão:** a função chama a si mesma com um valor **menor** e tem um **caso base** que para a recursão.

---

### Desafio 6.7 — Memoização Simples

Crie uma função `memoizar` que recebe uma função e retorna uma versão "memorizada" dela — ou seja, se já foi chamada com os mesmos argumentos, retorna o resultado em cache em vez de recalcular.

```typescript
const fatorialMemo = memoizar(fatorial);

fatorialMemo(10); // calcula e guarda no cache
fatorialMemo(10); // retorna do cache sem recalcular
```

> **Dica:** use um objeto como cache `{ [args]: resultado }`.

---

## Módulo 7 — Prática com Problemas Reais

### Desafio 7.1 — Sistema de Estoque

Crie um sistema simples com as funções:

- `adicionarProduto` — adiciona ou atualiza quantidade
- `removerProduto` — remove um produto pelo nome
- `buscarProduto` — retorna o produto ou `undefined`
- `listarEstoque` — exibe todos os produtos formatados
- `calcularValorTotal` — retorna o valor total do estoque

```typescript
type Produto = { nome: string; preco: number; quantidade: number };
```

---

### Desafio 7.2 — Jogo de Adivinhação

Simule um jogo onde o computador "sorteia" um número entre 1 e 100 (pode declarar fixo para testar) e o usuário tem 7 tentativas para adivinhar. A cada tentativa, informe se o palpite é maior, menor ou correto.

```
// Número secreto: 42
// Tentativa 1: 50 → "Menor! 6 tentativas restantes."
// Tentativa 2: 25 → "Maior! 5 tentativas restantes."
// Tentativa 3: 42 → "🎉 Acertou em 3 tentativas!"
```

> **Dica:** use um array com as tentativas pré-definidas para simular sem input do usuário.

---

### Desafio 7.3 — Analisador de Texto

Dada uma string de texto, crie funções que retornem:

- Número de palavras
- Número de caracteres (sem espaços)
- Palavra mais longa
- Número de vogais
- As 3 palavras mais frequentes

```
// Entrada: "o rato roeu a roupa do rei de roma"
// Saída:
// Palavras:         9
// Caracteres:       29
// Palavra mais longa: "roupa"
// Vogais:           14
// Mais frequentes:  ["o", "de", "rato"]
```

---

### Desafio 7.4 — Conversor de Bases Numéricas

Crie funções para converter um número entre as bases: decimal, binário, octal e hexadecimal. Não use `parseInt()` ou `.toString(base)` — implemente a lógica manualmente.

```
// decimalParaBinario(10)  → "1010"
// decimalParaOctal(255)   → "377"
// binarioParaDecimal("1010") → 10
```

---

### Desafio 7.5 — Mini Banco de Dados em Memória

Crie um sistema de cadastro de usuários com as operações: `criar`, `ler`, `atualizar`, `deletar` e `listar` (CRUD completo). Use um array como banco de dados e funções tipadas.

```typescript
type Usuario = { id: number; nome: string; email: string; ativo: boolean };

// criar({ nome: "Ana", email: "ana@email.com" }) → { id: 1, nome: "Ana", ... }
// ler(1) → { id: 1, nome: "Ana", ... }
// atualizar(1, { nome: "Ana Lima" }) → { id: 1, nome: "Ana Lima", ... }
// deletar(1) → true
// listar() → [...]
```

---

### Desafio 7.6 — Calculadora de Parcelamentos

Dado o valor de uma compra, número de parcelas e taxa de juros mensal, calcule o valor de cada parcela e o total pago com juros. Exiba a tabela completa de parcelas.

```
// Entrada: valor = 1000, parcelas = 3, jurosMensal = 2%
// Saída:
// Parcela 1: R$ 346.75 | Saldo restante: R$ 673.25
// Parcela 2: R$ 346.75 | Saldo restante: R$ 340.07
// Parcela 3: R$ 346.75 | Saldo restante: R$ 0.00
// Total pago: R$ 1.040.25 | Juros: R$ 40.25
```

> **Fórmula:** `P = PV * (i * (1+i)^n) / ((1+i)^n - 1)`

---

### Desafio 7.7 — Validador de Formulário

Crie um conjunto de funções de validação e uma função principal `validarFormulario` que recebe um objeto com os dados e retorna um objeto com os erros encontrados (campo vazio = campo válido).

```typescript
type FormularioCadastro = {
  nome: string;
  email: string;
  senha: string;
  idade: number;
};

// Regras:
// nome: mínimo 3 caracteres, sem números
// email: precisa conter "@" e "."
// senha: mínimo 8 caracteres, pelo menos 1 número
// idade: entre 18 e 120

// validarFormulario({ nome: "Al", email: "sem-arroba", senha: "abc", idade: 15 })
// → {
//     nome:  "Nome deve ter no mínimo 3 caracteres",
//     email: "Email inválido",
//     senha: "Senha deve ter no mínimo 8 caracteres e conter um número",
//     idade: "Idade mínima é 18 anos"
//   }
```

---

## Tabela de Dificuldade

| Desafio   | Módulo     | Dificuldade    |
| --------- | ---------- | -------------- |
| 1.1 a 1.4 | Variáveis  | ⭐ Fácil       |
| 1.5, 1.6  | Variáveis  | ⭐⭐ Médio     |
| 2.1 a 2.4 | Operadores | ⭐ Fácil       |
| 2.5, 2.6  | Operadores | ⭐⭐ Médio     |
| 3.1, 3.2  | Decisão    | ⭐ Fácil       |
| 3.3 a 3.5 | Decisão    | ⭐⭐ Médio     |
| 3.6       | Decisão    | ⭐⭐ Médio     |
| 4.1, 4.2  | Repetição  | ⭐ Fácil       |
| 4.3 a 4.5 | Repetição  | ⭐⭐ Médio     |
| 4.6, 4.7  | Repetição  | ⭐⭐ Médio     |
| 5.1, 5.2  | Arrays     | ⭐⭐ Médio     |
| 5.3 a 5.5 | Arrays     | ⭐⭐ Médio     |
| 5.6, 5.7  | Arrays     | ⭐⭐⭐ Difícil |
| 6.1, 6.2  | Funções    | ⭐⭐ Médio     |
| 6.3, 6.4  | Funções    | ⭐⭐⭐ Difícil |
| 6.5 a 6.7 | Funções    | ⭐⭐⭐ Difícil |
| 7.1, 7.2  | Prática    | ⭐⭐ Médio     |
| 7.3 a 7.5 | Prática    | ⭐⭐⭐ Difícil |
| 7.6, 7.7  | Prática    | ⭐⭐⭐ Difícil |

---

## Como praticar com eficiência

1. **Leia o enunciado completo** antes de escrever qualquer linha.
2. **Esboce o algoritmo em português** (pseudocódigo) antes de codar.
3. **Escreva o código** e rode os casos de teste do enunciado.
4. **Crie seus próprios casos de teste**, incluindo casos extremos (zero, negativo, vazio).
5. **Refatore**: o código funciona — agora como torná-lo mais limpo e legível?

---

_37 desafios — Lógica de Programação com TypeScript_
