---
slug: "variables-data-types"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Variáveis e Tipos de Dados"
subtitulo: "Guardando informações com str, int, float, bool e None"
descricao: "Crie variáveis, conheça os tipos do Python, use f-strings e converta entre tipos."
ordem: 3
proximosPassos:
  - titulo: "Type Hints"
    descricao: "Anote tipos para código mais legível"
  - titulo: "Operadores Aritméticos e Relacionais"
    descricao: "Faça cálculos e comparações em Python"
quiz:
  - pergunta: "Como criamos uma variável em Python?"
    opcoes: ["let nome = 'Ana'", "var nome = 'Ana'", "nome = 'Ana'", "const nome = 'Ana'"]
    correta: 2
    explicacao: "Em Python, basta escrever nome = 'Ana'. Não existe let, var ou const."
    explicacaoErrada: "Python não usa let, var ou const. É só nome = 'Ana'."
  - pergunta: "Qual é o resultado de f'Tenho {2 + 3} anos'?"
    opcoes: ["Tenho {2 + 3} anos", "Tenho 2 + 3 anos", "Tenho 5 anos", "Erro de sintaxe"]
    correta: 2
    explicacao: "f-strings calculam o que está dentro das {}. Então {2 + 3} vira 5."
    explicacaoErrada: "f-strings (com f antes das aspas) avaliam as expressões dentro de {}."
  - pergunta: "Qual é o tipo do valor None?"
    opcoes: ["str", "bool", "int", "NoneType"]
    correta: 3
    explicacao: "None tem seu próprio tipo: NoneType. Representa 'nenhum valor'."
    explicacaoErrada: "None é do tipo NoneType. Não é string, bool nem int."
  - pergunta: "O que type(3.14) retorna?"
    opcoes: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'number'>"]
    correta: 2
    explicacao: "3.14 tem casas decimais, então é float."
    explicacaoErrada: "Números com ponto decimal são float. Inteiros como 3 seriam int."
---

## O que sao variaveis?

Variaveis guardam valores. Pense nelas como gavetas com etiqueta -- cada uma tem um nome e guarda algo dentro. Em Python, nao precisa declarar o tipo: ele e definido automaticamente pelo valor que voce atribui.

```python
nome = "Maria"
idade = 25
altura = 1.68
ativo = True
resultado = None
```

Sem `let`, sem `var`, sem `const`. E so escrever o nome, o `=` e o valor.

> [!info]
> Python usa `snake_case` para nomes de variaveis: `nome_completo`, `ano_nascimento`. Nada de `camelCase`.

## Os 5 tipos basicos

Python tem cinco tipos primitivos. Cada valor que voce cria pertence a um deles:

```python
print(type("Ana"))    # → <class 'str'>
print(type(25))       # → <class 'int'>
print(type(1.68))     # → <class 'float'>
print(type(True))     # → <class 'bool'>
print(type(None))     # → <class 'NoneType'>
```

| Tipo | Exemplo | O que e |
|------|---------|---------|
| `str` | `"Ola"`, `'oi'` | Texto |
| `int` | `42`, `-10`, `7_000` | Numero inteiro |
| `float` | `3.14`, `-0.5` | Numero decimal |
| `bool` | `True`, `False` | Verdadeiro ou falso |
| `None` | `None` | Nenhum valor (caixa vazia) |

## str -- texto

Strings sao textos entre aspas simples ou duplas. Ambas funcionam igual:

```python
nome = "Python"
print(len(nome))   # → 6
print(nome[0])     # → P
print(nome[-1])    # → n
```

## int e float -- numeros

`int` e numero inteiro, `float` e numero com casas decimais. Underlines ajudam a ler numeros grandes:

```python
populacao = 7_900_000_000  # underlines sao ignorados
print(type(populacao))     # → <class 'int'>

preco = 19.99
print(type(preco))         # → <class 'float'>

# Cuidado com float!
print(0.1 + 0.2)  # → 0.30000000000000004 (normal!)
```

## bool -- verdadeiro ou falso

Booleanos so tem dois valores: `True` e `False`. Sempre com letra maiuscula!

```python
print(10 > 5)   # → True
print(3 == 7)   # → False
```

> [!alerta]
> `True` e `False` com letra maiuscula! `true` ou `false` da `NameError`.

## None -- nenhum valor

`None` representa a ausencia de valor. E como uma caixa vazia de proposito.

```python
resultado = None

if resultado is None:
    print("Sem resultado ainda")  # → Sem resultado ainda
```

> [!info]
> Para verificar `None`, use `is None` em vez de `== None`. E a forma correta e Pythonica.

## f-strings -- texto com variaveis

O `f` antes das aspas permite colocar variaveis e expressoes dentro do texto:

```python
nome = "Ana"
idade = 22

print(f"Meu nome e {nome} e tenho {idade} anos")
# → Meu nome e Ana e tenho 22 anos

print(f"Ano que vem terei {idade + 1} anos")
# → Ano que vem terei 23 anos

# Formatando decimais
preco = 49.9
print(f"Valor: R$ {preco:.2f}")
# → Valor: R$ 49.90
```

## Conversao de tipos

Voce pode converter entre tipos usando funcoes como `int()`, `float()`, `str()` e `bool()`:

```python
# String para numero
numero = int("42")       # → 42
preco = float("19.99")   # → 19.99

# Numero para string
texto = str(100)          # → "100"

# Float para int (corta as casas, nao arredonda!)
valor = int(3.99)
print(valor)  # → 3

# Numero para bool
print(bool(0))   # → False
print(bool(1))   # → True
print(bool(-5))  # → True (qualquer numero diferente de 0)
```

> [!alerta]
> `int("3.14")` da erro! Converta em dois passos: `int(float("3.14"))`.

## type() e isinstance() -- descobrindo o tipo

`type()` retorna o tipo exato. `isinstance()` verifica se o valor pertence a um tipo (ou a varios):

```python
valor = 42
print(type(valor))                     # → <class 'int'>
print(isinstance(valor, int))          # → True
print(isinstance(valor, str))          # → False
print(isinstance(valor, (int, float))) # → True
```

## Erros comuns

```python
# Usar o nome antes de criar
# print(x)  # NameError: name 'x' is not defined

# Trocar o tipo na conversao
# int("abc")  # ValueError!

# Esquecer o f na f-string
print("Tenho {idade} anos")   # → Tenho {idade} anos (nao substituiu!)
print(f"Tenho {idade} anos")  # → Tenho 22 anos
```

## Exemplo pratico: ficha de cadastro

```python
nome = "Maria Silva"
idade = 22
matricula = "2024001"
ativo = True
faltas = 0

print("=== Ficha do Aluno ===")
print(f"Nome: {nome}")            # → Nome: Maria Silva
print(f"Idade: {idade} anos")     # → Idade: 22 anos
print(f"Matricula: {matricula}")  # → Matricula: 2024001
print(f"Situacao: {'Ativo' if ativo else 'Inativo'}")  # → Situacao: Ativo
print(f"Faltas: {faltas}")        # → Faltas: 0

faltas = faltas + 1
print(f"Faltas apos registro: {faltas}")  # → Faltas apos registro: 1
```

`faltas` muda ao longo do programa. O resto nao muda, mas em Python nao existe `const` -- tudo e variavel.

## Referencias

- [Built-in Types](https://docs.python.org/3/library/stdtypes.html) -- documentacao oficial dos tipos do Python
- [Python f-strings](https://realpython.com/python-f-strings/) -- guia completo de f-strings no Real Python
- [Curso Python #09 - Variaveis](https://www.youtube.com/watch?v=nao2VV2N5rU) -- Curso em Video, PT-BR
