---
slug: "arithmetic-relational-operators"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Operadores Aritméticos e Relacionais"
subtitulo: "Realizando cálculos e comparações em Python"
descricao: "Domine os operadores aritméticos (+, -, *, /, //, %, **), relacionais (==, !=, >, <) e de atribuição composta em Python."
ordem: 5
proximosPassos:
  - titulo: "Operadores Lógicos e Ternário"
    descricao: "Combine condições com and, or, not e expressões condicionais"
  - titulo: "Estruturas Condicionais"
    descricao: "Tome decisões no código com if, elif e else"
quiz:
  - pergunta: "Qual é a diferença entre / e // em Python?"
    opcoes: ["/ é divisão e // é comentário", "/ retorna float e // retorna divisão inteira (truncada)", "São a mesma coisa", "// é divisão e / é módulo"]
    correta: 1
    explicacao: "✓ / sempre retorna float (ex: 7/2 = 3.5), enquanto // faz divisão inteira, truncando o resultado (ex: 7//2 = 3)."
    explicacaoErrada: "✗ / é divisão real (sempre retorna float), enquanto // é divisão inteira (trunca as casas decimais). São operadores diferentes."
  - pergunta: "O que 10 % 3 retorna?"
    opcoes: ["3", "1", "0.33", "10"]
    correta: 1
    explicacao: "✓ O operador % retorna o resto da divisão. 10 dividido por 3 é 3 com resto 1."
    explicacaoErrada: "✗ % é o operador módulo (resto da divisão). 10 ÷ 3 = 3 com resto 1, então 10 % 3 = 1."
  - pergunta: "Qual é o resultado de 2 ** 10?"
    opcoes: ["20", "1024", "100", "210"]
    correta: 1
    explicacao: "✓ ** é o operador de exponenciação. 2 ** 10 = 2 elevado à 10ª potência = 1024."
    explicacaoErrada: "✗ ** é potenciação em Python. 2 ** 10 significa 2¹⁰ = 1024."
  - pergunta: "A expressão 1 <= x <= 10 é válida em Python?"
    opcoes: ["Não, causa erro de sintaxe", "Sim, mas sempre retorna True", "Sim, e verifica se x está entre 1 e 10", "Precisa usar parênteses: (1 <= x) and (x <= 10)"]
    correta: 2
    explicacao: "✓ Python permite comparações encadeadas! 1 <= x <= 10 é equivalente a (1 <= x) and (x <= 10), verificando se x está no intervalo."
    explicacaoErrada: "✗ Python suporta comparações encadeadas nativamente. 1 <= x <= 10 funciona e verifica se x está entre 1 e 10 (inclusive)."
---

## Operadores Aritméticos

Python oferece sete operadores aritméticos para realizar cálculos:

| Operador | Nome | Exemplo | Resultado |
| --- | --- | --- | --- |
| `+` | Adição | `5 + 3` | `8` |
| `-` | Subtração | `10 - 4` | `6` |
| `*` | Multiplicação | `3 * 7` | `21` |
| `/` | Divisão | `7 / 2` | `3.5` |
| `//` | Divisão inteira | `7 // 2` | `3` |
| `%` | Módulo (resto) | `7 % 2` | `1` |
| `**` | Exponenciação | `2 ** 3` | `8` |

### Adição, subtração e multiplicação

Funcionam como esperado, sem surpresas:

```python
soma = 15 + 27
print(soma)  # → 42

diferenca = 100 - 37
print(diferenca)  # → 63

produto = 6 * 7
print(produto)  # → 42

# O + também concatena strings
nome = "Olá" + " " + "Mundo"
print(nome)  # → Olá Mundo

# O * repete strings
linha = "-" * 40
print(linha)  # → ----------------------------------------
```

### Divisão (/) vs Divisão Inteira (//)

Esta é uma diferença crucial em Python:

```python
# / SEMPRE retorna float, mesmo quando a divisão é exata
print(10 / 2)    # → 5.0 (float, não int!)
print(7 / 2)     # → 3.5
print(10 / 3)    # → 3.3333333333333335

# // retorna a divisão truncada (parte inteira)
print(10 // 2)   # → 5 (int)
print(7 // 2)    # → 3 (trunca o .5)
print(10 // 3)   # → 3 (trunca o .333...)

# // com negativos — arredonda para baixo (não para zero!)
print(-7 // 2)   # → -4 (não -3!)
print(7 // -2)   # → -4
```

> **Atenção:** `//` com números negativos arredonda **para baixo** (em direção a menos infinito), não para zero. Isso é diferente de muitas outras linguagens.

### Módulo (%) — Resto da divisão

```python
print(10 % 3)    # → 1 (10 = 3*3 + 1)
print(15 % 5)    # → 0 (divisão exata)
print(17 % 4)    # → 1 (17 = 4*4 + 1)

# Uso prático: verificar se um número é par ou ímpar
numero = 42
if numero % 2 == 0:
    print(f"{numero} é par")    # → 42 é par
else:
    print(f"{numero} é ímpar")
```

### Exponenciação (**)

```python
print(2 ** 3)     # → 8 (2³)
print(5 ** 2)     # → 25 (5²)
print(2 ** 10)    # → 1024 (2¹⁰)
print(9 ** 0.5)   # → 3.0 (raiz quadrada de 9)
print(27 ** (1/3))  # → 3.0 (raiz cúbica de 27)
```

### Precedência de operadores

A ordem de precedência segue a matemática:

```python
# 1. ** (exponenciação)
# 2. * / // % (multiplicação, divisão)
# 3. + - (adição, subtração)

resultado = 2 + 3 * 4      # → 14 (não 20!)
resultado = (2 + 3) * 4    # → 20 (parênteses primeiro)
resultado = 2 ** 3 * 2     # → 16 (8 * 2)
resultado = 10 - 3 * 2 + 1 # → 5 (10 - 6 + 1)
```

> **Dica:** Na dúvida, use parênteses para deixar a ordem explícita e o código mais legível.

## Operadores Relacionais (Comparação)

Operadores relacionais comparam dois valores e retornam `True` ou `False`:

| Operador | Significado | Exemplo | Resultado |
| --- | --- | --- | --- |
| `==` | Igual a | `5 == 5` | `True` |
| `!=` | Diferente de | `5 != 3` | `True` |
| `>` | Maior que | `10 > 5` | `True` |
| `<` | Menor que | `3 < 8` | `True` |
| `>=` | Maior ou igual | `5 >= 5` | `True` |
| `<=` | Menor ou igual | `4 <= 3` | `False` |

```python
idade = 18

print(idade == 18)   # → True
print(idade != 20)   # → True
print(idade > 17)    # → True
print(idade < 21)    # → True
print(idade >= 18)   # → True
print(idade <= 17)   # → False
```

### Comparações encadeadas

Python permite encadear comparações de forma elegante — algo que a maioria das linguagens não suporta:

```python
x = 15

# Forma Pythônica (encadeada)
print(10 <= x <= 20)   # → True (x está entre 10 e 20?)
print(1 < x < 10)      # → False

# Equivalente em outras linguagens
print(10 <= x and x <= 20)   # → True (mesmo resultado)

# Funciona com qualquer combinação
nota = 7.5
print(0 <= nota <= 10)        # → True (nota válida?)
print(7 <= nota < 9)          # → True (nota é "bom"?)
```

### Comparando strings

```python
print("abc" == "abc")    # → True
print("abc" == "ABC")    # → False (case-sensitive!)
print("a" < "b")         # → True (ordem alfabética/Unicode)
print("banana" > "abacaxi")  # → True (b vem depois de a)
```

## Operadores de Atribuição Composta

Combinam uma operação aritmética com atribuição:

```python
x = 10

x += 5     # x = x + 5  → 15
x -= 3     # x = x - 3  → 12
x *= 2     # x = x * 2  → 24
x //= 5   # x = x // 5 → 4
x **= 3   # x = x ** 3 → 64
x %= 10   # x = x % 10 → 4

print(x)   # → 4
```

> **Nota:** Python **não tem** `++` nem `--`. Use `x += 1` e `x -= 1`.

## Exemplo prático: Calculadora de IMC

```python
# imc.py — Calculadora de Índice de Massa Corporal

print("=== Calculadora de IMC ===")
print()

peso = float(input("Seu peso (kg): "))
altura = float(input("Sua altura (m): "))

# Fórmula: IMC = peso / altura²
imc = peso / altura ** 2

print(f"\nSeu IMC: {imc:.1f}")

# Classificação usando comparações
if imc < 18.5:
    print("Classificação: Abaixo do peso")
elif 18.5 <= imc < 25:
    print("Classificação: Peso normal")
elif 25 <= imc < 30:
    print("Classificação: Sobrepeso")
else:
    print("Classificação: Obesidade")
```

## Exemplo prático: Troco em cédulas

```python
# troco.py — Decompor um valor em cédulas

valor = int(input("Digite o valor em reais: "))

cedulas_100 = valor // 100
valor %= 100  # resto após retirar as notas de 100

cedulas_50 = valor // 50
valor %= 50

cedulas_20 = valor // 20
valor %= 20

cedulas_10 = valor // 10
valor %= 10

cedulas_5 = valor // 5
valor %= 5

cedulas_2 = valor // 2
valor %= 2

moedas_1 = valor

print(f"Notas de R$100: {cedulas_100}")
print(f"Notas de R$50:  {cedulas_50}")
print(f"Notas de R$20:  {cedulas_20}")
print(f"Notas de R$10:  {cedulas_10}")
print(f"Notas de R$5:   {cedulas_5}")
print(f"Notas de R$2:   {cedulas_2}")
print(f"Moedas de R$1:  {moedas_1}")
```

## Resumo

| Categoria | Operadores |
| --- | --- |
| Aritméticos | `+  -  *  /  //  %  **` |
| Relacionais | `==  !=  >  <  >=  <=` |
| Atribuição composta | `+=  -=  *=  //=  **=  %=` |
| Comparação encadeada | `a <= x <= b` |
| **Lembre-se:** | `/` sempre retorna float, `//` trunca |
