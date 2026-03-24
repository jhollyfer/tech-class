---
slug: "arithmetic-relational-operators"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Operadores Aritméticos e Relacionais"
subtitulo: "Cálculos e comparações em Python"
descricao: "Use operadores aritméticos (+, -, *, /, //, %, **), relacionais (==, !=, >, <) e de atribuição composta."
ordem: 5
proximosPassos:
  - titulo: "Operadores Lógicos e Ternário"
    descricao: "Combine condições com and, or, not e ternário"
  - titulo: "Estruturas Condicionais"
    descricao: "Tome decisões com if, elif e else"
quiz:
  - pergunta: "Qual é a diferença entre / e // em Python?"
    opcoes: ["/ é divisão e // é comentário", "/ retorna float e // retorna divisão inteira (truncada)", "São a mesma coisa", "// é divisão e / é módulo"]
    correta: 1
    explicacao: "/ sempre retorna float (7/2 = 3.5). // faz divisão inteira (7//2 = 3)."
    explicacaoErrada: "/ é divisão real (float), // é divisão inteira (trunca as casas)."
  - pergunta: "O que 10 % 3 retorna?"
    opcoes: ["3", "1", "0.33", "10"]
    correta: 1
    explicacao: "% retorna o resto da divisão. 10 ÷ 3 = 3 com resto 1."
    explicacaoErrada: "% é o módulo (resto). 10 ÷ 3 = 3 com resto 1."
  - pergunta: "Qual é o resultado de 2 ** 10?"
    opcoes: ["20", "1024", "100", "210"]
    correta: 1
    explicacao: "** é potência. 2 ** 10 = 2 elevado a 10 = 1024."
    explicacaoErrada: "** é potenciação. 2 ** 10 = 2¹⁰ = 1024."
  - pergunta: "A expressão 1 <= x <= 10 é válida em Python?"
    opcoes: ["Não, causa erro de sintaxe", "Sim, mas sempre retorna True", "Sim, e verifica se x está entre 1 e 10", "Precisa usar parênteses: (1 <= x) and (x <= 10)"]
    correta: 2
    explicacao: "Python permite comparações encadeadas! 1 <= x <= 10 verifica se x está no intervalo."
    explicacaoErrada: "Python suporta isso nativamente. É o mesmo que (1 <= x) and (x <= 10)."
---

## Operadores Aritméticos

Python tem 7 operadores para fazer contas:

| Operador | Nome | Exemplo | Resultado |
| --- | --- | --- | --- |
| `+` | Adição | `5 + 3` | `8` |
| `-` | Subtração | `10 - 4` | `6` |
| `*` | Multiplicação | `3 * 7` | `21` |
| `/` | Divisão | `7 / 2` | `3.5` |
| `//` | Divisão inteira | `7 // 2` | `3` |
| `%` | Resto (módulo) | `7 % 2` | `1` |
| `**` | Potência | `2 ** 3` | `8` |

### O básico

```python
print(15 + 27)   # → 42
print(100 - 37)  # → 63
print(6 * 7)     # → 42

# + também junta strings
print("Olá" + " " + "Mundo")  # → Olá Mundo

# * repete strings
print("-" * 40)  # → ----------------------------------------
```

### Divisão (/) vs Divisão Inteira (//)

Essa diferença é importante:

```python
# / SEMPRE retorna float
print(10 / 2)   # → 5.0 (float, não int!)
print(7 / 2)    # → 3.5

# // corta as casas decimais
print(10 // 2)  # → 5
print(7 // 2)   # → 3
```

> [!alerta]
> `//` com negativos arredonda **para baixo**, não para zero: `-7 // 2` dá `-4`, não `-3`.

### Resto (%) e Potência (**)

```python
# % — resto da divisão
print(10 % 3)   # → 1 (10 = 3×3 + 1)
print(15 % 5)   # → 0 (divisão exata)

# Truque útil: verificar par/ímpar
numero = 42
if numero % 2 == 0:
    print(f"{numero} é par")  # → 42 é par

# ** — potência
print(2 ** 3)    # → 8 (2³)
print(5 ** 2)    # → 25 (5²)
print(9 ** 0.5)  # → 3.0 (raiz quadrada)
```

### Ordem das operações

Igual na matemática: potência primeiro, depois multiplicação/divisão, depois soma/subtração.

```python
print(2 + 3 * 4)    # → 14 (não 20!)
print((2 + 3) * 4)  # → 20 (parênteses primeiro)
```

> [!sucesso]
> Na dúvida, use parênteses. Deixa o código mais claro.

## Operadores Relacionais

Comparam dois valores e retornam `True` ou `False`:

| Operador | Significado | Exemplo | Resultado |
| --- | --- | --- | --- |
| `==` | Igual | `5 == 5` | `True` |
| `!=` | Diferente | `5 != 3` | `True` |
| `>` | Maior que | `10 > 5` | `True` |
| `<` | Menor que | `3 < 8` | `True` |
| `>=` | Maior ou igual | `5 >= 5` | `True` |
| `<=` | Menor ou igual | `4 <= 3` | `False` |

```python
idade = 18
print(idade == 18)  # → True
print(idade > 17)   # → True
print(idade <= 17)  # → False
```

### Comparações encadeadas

Python permite algo que a maioria das linguagens não faz:

```python
x = 15
print(10 <= x <= 20)  # → True (x está entre 10 e 20?)

nota = 7.5
print(7 <= nota < 9)  # → True (nota é "bom"?)
```

### Comparando strings

```python
print("abc" == "abc")   # → True
print("abc" == "ABC")   # → False (diferencia maiúsculas!)
print("a" < "b")        # → True (ordem alfabética)
```

## Atribuição Composta

Atalhos para fazer uma operação e guardar o resultado:

```python
x = 10
x += 5    # x = x + 5  → 15
x -= 3    # x = x - 3  → 12
x *= 2    # x = x * 2  → 24
x //= 5   # x = x // 5 → 4
x **= 3   # x = x ** 3 → 64
x %= 10   # x = x % 10 → 4
```

> [!info]
> Python **não tem** `++` nem `--`. Use `x += 1` e `x -= 1`.

## Exemplo: Calculadora de IMC

```python
peso = float(input("Seu peso (kg): "))
altura = float(input("Sua altura (m): "))

imc = peso / altura ** 2

print(f"\nSeu IMC: {imc:.1f}")

if imc < 18.5:
    print("Abaixo do peso")
elif 18.5 <= imc < 25:
    print("Peso normal")
elif 25 <= imc < 30:
    print("Sobrepeso")
else:
    print("Obesidade")
```

## Exemplo: Troco em cédulas

```python
valor = int(input("Valor em reais: "))

cedulas_100 = valor // 100
valor %= 100

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
