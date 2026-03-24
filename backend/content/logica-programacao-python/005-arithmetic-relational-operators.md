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

## Pra que servem operadores?

Python tem operadores pra fazer contas e pra comparar valores. Os aritmeticos resolvem calculos matematicos. Os relacionais comparam dois valores e devolvem `True` ou `False`.

Saber a diferenca entre `/` e `//`, entender o `%` e usar comparacoes encadeadas vai facilitar muito sua vida nos proximos programas.

> [!info]
> Python segue a mesma ordem da matematica: potencia primeiro, depois multiplicacao/divisao, depois soma/subtracao. Na duvida, use parenteses.

## Operadores aritmeticos

Os basicos voce ja conhece. A novidade sao `//` (divisao inteira), `%` (resto) e `**` (potencia):

```python
print(15 + 27)   # → 42
print(100 - 37)  # → 63
print(6 * 7)     # → 42
```

| Operador | O que faz | Exemplo | Resultado |
|----------|-----------|---------|-----------|
| `+` | Soma | `15 + 27` | `42` |
| `-` | Subtracao | `100 - 37` | `63` |
| `*` | Multiplicacao | `6 * 7` | `42` |
| `/` | Divisao (float) | `7 / 2` | `3.5` |
| `//` | Divisao inteira | `7 // 2` | `3` |
| `%` | Resto (modulo) | `10 % 3` | `1` |
| `**` | Potencia | `2 ** 3` | `8` |

## / vs // -- divisao real e inteira

Essa e uma das maiores fontes de confusao. A barra simples **sempre** retorna float. A barra dupla corta as casas decimais:

```python
# / sempre retorna float
print(10 / 2)    # → 5.0
print(7 / 2)     # → 3.5

# // corta as casas decimais (divisao inteira)
print(10 // 2)   # → 5
print(7 // 2)    # → 3
```

> [!alerta]
> `//` com negativos arredonda pra baixo, nao pra zero: `-7 // 2` da `-4`, nao `-3`.

## % -- resto da divisao

O operador `%` (modulo) retorna o **resto** da divisao. Super util pra saber se um numero e par ou impar:

```python
print(10 % 3)    # → 1
print(15 % 5)    # → 0

# Truque: par ou impar
numero = 42
if numero % 2 == 0:
    print(f"{numero} e par")   # → 42 e par
else:
    print(f"{numero} e impar")
```

## ** -- potencia e raiz

`**` e a potenciacao. E tambem serve pra raiz quadrada (potencia de `0.5`):

```python
print(2 ** 3)    # → 8
print(9 ** 0.5)  # → 3.0 (raiz quadrada)
print(2 ** 10)   # → 1024
```

## Operadores relacionais

Relacionais comparam dois valores e devolvem `True` ou `False`:

```python
idade = 18
print(idade == 18)   # → True
print(idade != 18)   # → False
print(idade > 17)    # → True
print(idade < 21)    # → True
print(idade >= 18)   # → True
print(idade <= 17)   # → False
```

| Operador | Significado | Exemplo | Resultado |
|----------|-------------|---------|-----------|
| `==` | Igual a | `5 == 5` | `True` |
| `!=` | Diferente de | `5 != 3` | `True` |
| `>` | Maior que | `10 > 5` | `True` |
| `<` | Menor que | `3 < 7` | `True` |
| `>=` | Maior ou igual | `5 >= 5` | `True` |
| `<=` | Menor ou igual | `4 <= 3` | `False` |

## Comparacoes encadeadas

Isso e exclusivo do Python! Voce pode encadear comparacoes de forma natural:

```python
x = 15
print(10 <= x <= 20)  # → True
print(1 <= x <= 10)   # → False

# Strings comparam pela ordem alfabetica
print("abc" == "abc")   # → True
print("abc" == "ABC")   # → False
print("a" < "b")        # → True
```

> [!sucesso]
> `1 <= x <= 10` e o mesmo que `(1 <= x) and (x <= 10)`, so que muito mais legivel. Usa isso!

## Atribuicao composta

Atalhos pra modificar o valor de uma variavel:

```python
x = 10
x += 5    # x = x + 5  → 15
x -= 3    # x = x - 3  → 12
x *= 2    # x = x * 2  → 24
x //= 5   # x = x // 5 → 4
x **= 3   # x = x ** 3 → 64
x %= 10   # x = x % 10 → 4
print(x)  # → 4
```

> [!alerta]
> Python nao tem `++` nem `--`. Use `x += 1` e `x -= 1`.

## Ordem das operacoes

Mesma regra da matematica. Parenteses sempre ganham:

```python
print(2 + 3 * 4)    # → 14 (multiplicacao primeiro)
print((2 + 3) * 4)  # → 20 (parenteses primeiro)
```

## Exemplo pratico: calculadora de IMC

```python
peso = float(input("Peso (kg): "))
altura = float(input("Altura (m): "))

imc = peso / altura ** 2

print(f"Seu IMC: {imc:.1f}")
# Peso (kg): 70
# Altura (m): 1.75
# → Seu IMC: 22.9
```

Aqui `**` tem prioridade sobre `/`, entao `altura ** 2` e calculado primeiro. Depois o `peso` e dividido pelo resultado.

## Referencias

- [Expressions -- Python docs](https://docs.python.org/3/reference/expressions.html) -- referencia oficial sobre operadores
- [Operators and Expressions in Python](https://realpython.com/python-operators-expressions/) -- guia detalhado no Real Python
- [Curso Python #09 - Operadores Aritmeticos](https://www.youtube.com/watch?v=Yrp-EEqkaok) -- Curso em Video, PT-BR
