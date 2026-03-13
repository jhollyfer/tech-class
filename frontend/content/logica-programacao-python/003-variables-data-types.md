---
slug: "variables-data-types"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Variáveis e Tipos de Dados"
subtitulo: "Armazenando informações com str, int, float, bool e None"
descricao: "Entenda como criar variáveis, os tipos primitivos do Python, f-strings, verificação de tipo e conversão entre tipos."
ordem: 3
proximosPassos:
  - titulo: "Type Hints"
    descricao: "Aprenda a usar anotações de tipo para código mais legível e seguro"
  - titulo: "Operadores Aritméticos e Relacionais"
    descricao: "Realize cálculos e comparações em Python"
quiz:
  - pergunta: "Como criamos uma variável em Python?"
    opcoes: ["let nome = 'Ana'", "var nome = 'Ana'", "nome = 'Ana'", "const nome = 'Ana'"]
    correta: 2
    explicacao: "✓ Em Python, variáveis são criadas diretamente por atribuição: nome = 'Ana'. Não existem palavras-chave como let, var ou const."
    explicacaoErrada: "✗ Python não usa let, var ou const. Basta escrever nome = 'Ana' para criar uma variável."
  - pergunta: "Qual é o resultado de f'Tenho {2 + 3} anos'?"
    opcoes: ["Tenho {2 + 3} anos", "Tenho 2 + 3 anos", "Tenho 5 anos", "Erro de sintaxe"]
    correta: 2
    explicacao: "✓ f-strings avaliam expressões dentro das chaves {}. A expressão 2 + 3 é calculada como 5."
    explicacaoErrada: "✗ f-strings (com f antes das aspas) avaliam o conteúdo das chaves {}. Então {2 + 3} se torna 5."
  - pergunta: "Qual é o tipo do valor None em Python?"
    opcoes: ["str", "bool", "int", "NoneType"]
    correta: 3
    explicacao: "✓ None é um valor especial do tipo NoneType que representa a ausência de valor."
    explicacaoErrada: "✗ None tem seu próprio tipo: NoneType. Ele não é string, bool nem int — representa 'nenhum valor'."
  - pergunta: "O que type(3.14) retorna?"
    opcoes: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'number'>"]
    correta: 2
    explicacao: "✓ 3.14 é um número decimal, portanto seu tipo é float (ponto flutuante)."
    explicacaoErrada: "✗ Números com casas decimais como 3.14 são do tipo float em Python. int seria para números inteiros como 3."
---

## Criando variáveis em Python

Em Python, variáveis são criadas por **atribuição direta** — não existe `let`, `var` ou `const` como em outras linguagens. O tipo é determinado automaticamente pelo valor atribuído (**tipagem dinâmica**).

```python
# Criando variáveis — simplesmente atribua um valor
nome = "Maria"
idade = 25
altura = 1.68
esta_matriculado = True
```

### Convenção de nomenclatura: snake_case

Python usa `snake_case` (palavras separadas por underline) para nomes de variáveis e funções:

```python
# ✅ snake_case — padrão Python
nome_completo = "Ana Silva"
ano_nascimento = 1998
esta_ativo = True

# ❌ camelCase — NÃO é o padrão Python
# nomeCompleto = "Ana Silva"   # funciona, mas não segue a convenção
```

### Reatribuição de variáveis

Como não existe `const`, qualquer variável pode ter seu valor alterado — inclusive para um tipo diferente:

```python
valor = 10        # int
print(valor)      # → 10

valor = "texto"   # agora é str (tipagem dinâmica)
print(valor)      # → texto
```

> **Nota:** Embora possível, mudar o tipo de uma variável pode dificultar a leitura do código. Use com cuidado.

## Tipos primitivos do Python

Python possui cinco tipos básicos que você usará constantemente:

### str — Texto (string)

```python
# Strings podem usar aspas simples ou duplas
nome = "Python"
versao = '3.12'

# Strings de múltiplas linhas com aspas triplas
mensagem = """Olá,
este texto tem
várias linhas."""

# Tamanho de uma string
print(len(nome))  # → 6

# Acessando caracteres (índice começa em 0)
print(nome[0])    # → P
print(nome[-1])   # → n (último caractere)
```

### int — Números inteiros

```python
idade = 25
populacao = 7_900_000_000  # underlines para legibilidade
negativo = -10
zero = 0

print(type(idade))  # → <class 'int'>
```

### float — Números decimais

```python
preco = 19.99
pi = 3.14159
temperatura = -5.2

# Cuidado com precisão de ponto flutuante
print(0.1 + 0.2)  # → 0.30000000000000004 (não exatamente 0.3!)
```

### bool — Verdadeiro ou Falso

```python
ativo = True
bloqueado = False

# Booleanos são resultado de comparações
print(10 > 5)   # → True
print(3 == 7)   # → False

# Importante: True e False com letra maiúscula!
# true ou false (minúsculo) causa NameError
```

### None — Ausência de valor

```python
resultado = None  # "nenhum valor" — equivalente ao null de outras linguagens

print(resultado)        # → None
print(type(resultado))  # → <class 'NoneType'>

# Verificando se algo é None
if resultado is None:
    print("Sem resultado ainda")
```

> **Dica:** Use `is None` em vez de `== None`. O operador `is` verifica identidade, que é mais correto para None.

## f-strings — Interpolação de texto

f-strings (formatted string literals) permitem inserir variáveis e expressões diretamente dentro de strings:

```python
nome = "Ana"
idade = 22

# f-string — coloque f antes das aspas
print(f"Meu nome é {nome} e tenho {idade} anos")
# → Meu nome é Ana e tenho 22 anos

# Expressões dentro das chaves
print(f"No ano que vem terei {idade + 1} anos")
# → No ano que vem terei 23 anos

# Formatando números decimais
preco = 49.9
print(f"Valor: R$ {preco:.2f}")
# → Valor: R$ 49.90

# Alinhamento e preenchimento
for i in range(1, 4):
    print(f"Item {i:02d}: {'=' * (i * 5)}")
# → Item 01: =====
# → Item 02: ==========
# → Item 03: ===============
```

### Comparação com concatenação

```python
nome = "Carlos"
idade = 30

# ❌ Concatenação (mais verboso e propenso a erros)
print("Nome: " + nome + ", Idade: " + str(idade))

# ✅ f-string (mais limpo e legível)
print(f"Nome: {nome}, Idade: {idade}")
```

## Verificando tipos

### type() — Descobrir o tipo

```python
print(type("Olá"))     # → <class 'str'>
print(type(42))        # → <class 'int'>
print(type(3.14))      # → <class 'float'>
print(type(True))      # → <class 'bool'>
print(type(None))      # → <class 'NoneType'>
```

### isinstance() — Verificar se é de um tipo

```python
valor = 42

print(isinstance(valor, int))    # → True
print(isinstance(valor, str))    # → False
print(isinstance(valor, float))  # → False

# Verificar múltiplos tipos
print(isinstance(valor, (int, float)))  # → True (é int OU float?)
```

> **Dica:** Prefira `isinstance()` em vez de `type() ==` quando precisar verificar tipos, pois `isinstance` funciona com herança.

## Conversão de tipos (casting)

Converter entre tipos é muito comum, especialmente ao trabalhar com `input()`:

```python
# String → Inteiro
numero = int("42")
print(numero, type(numero))  # → 42 <class 'int'>

# String → Float
preco = float("19.99")
print(preco, type(preco))    # → 19.99 <class 'float'>

# Número → String
texto = str(100)
print(texto, type(texto))    # → 100 <class 'str'>

# Float → Int (trunca, não arredonda!)
valor = int(3.99)
print(valor)  # → 3 (não 4!)

# Int → Float
decimal = float(10)
print(decimal)  # → 10.0

# Int → Bool
print(bool(0))   # → False
print(bool(1))   # → True
print(bool(-5))  # → True (qualquer número diferente de 0)
```

### Erros de conversão

```python
# ❌ Isto causa ValueError!
# numero = int("abc")     # não é um número válido
# numero = int("3.14")    # int() não aceita string com ponto decimal

# ✅ Para converter "3.14" em inteiro, faça em dois passos:
numero = int(float("3.14"))  # primeiro float, depois int
print(numero)  # → 3
```

## Exemplo prático: Ficha de cadastro

```python
# cadastro.py — Programa interativo de cadastro

print("=== Ficha de Cadastro ===")
print()

nome = input("Nome completo: ")
idade = int(input("Idade: "))
altura = float(input("Altura (em metros): "))
email = input("E-mail: ")

# Calculando ano de nascimento aproximado
ano_nascimento = 2026 - idade

print()
print("--- Dados informados ---")
print(f"Nome:       {nome}")
print(f"Idade:      {idade} anos (nasceu por volta de {ano_nascimento})")
print(f"Altura:     {altura:.2f} m")
print(f"E-mail:     {email}")
print(f"Tipos:      nome={type(nome).__name__}, idade={type(idade).__name__}")
```

## Resumo

| Tipo | Exemplo | Descrição |
| --- | --- | --- |
| `str` | `"Olá"` | Texto |
| `int` | `42` | Número inteiro |
| `float` | `3.14` | Número decimal |
| `bool` | `True` / `False` | Verdadeiro ou falso |
| `None` | `None` | Ausência de valor |
| f-string | `f"Olá {nome}"` | Interpolação de texto |
| `type()` | `type(42)` | Descobrir o tipo |
| `isinstance()` | `isinstance(42, int)` | Verificar o tipo |
