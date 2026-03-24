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

## Criando variáveis

Variável é como uma caixa com etiqueta onde você guarda um valor. Em Python, basta dar um nome e atribuir:

```python
nome = "Maria"
idade = 25
altura = 1.68
esta_matriculado = True
```

O tipo é definido automaticamente pelo valor. Sem `let`, `var` ou `const`.

### Nomes usam snake_case

```python
# ✅ Padrão Python
nome_completo = "Ana Silva"
ano_nascimento = 1998

# ❌ Não é o padrão
# nomeCompleto = "Ana Silva"
```

### Variáveis podem mudar de valor

```python
valor = 10        # int
valor = "texto"   # agora é str
print(valor)      # → texto
```

> [!info]
> Mudar o tipo de uma variável funciona, mas pode confundir quem lê o código. Evite quando possível.

## Os 5 tipos básicos

### str — Texto

```python
nome = "Python"
versao = '3.12'

# Texto com várias linhas
mensagem = """Olá,
várias linhas aqui."""

print(len(nome))   # → 6 (tamanho)
print(nome[0])     # → P (primeiro caractere)
print(nome[-1])    # → n (último caractere)
```

### int — Número inteiro

```python
idade = 25
populacao = 7_900_000_000  # underlines ajudam a ler
print(type(idade))  # → <class 'int'>
```

### float — Número decimal

```python
preco = 19.99
pi = 3.14159

print(0.1 + 0.2)  # → 0.30000000000000004 (isso é normal!)
```

> [!info]
> Decimais no computador nem sempre são exatos. `0.1 + 0.2` não dá exatamente `0.3`.

### bool — Verdadeiro ou Falso

```python
ativo = True
bloqueado = False

print(10 > 5)   # → True
print(3 == 7)   # → False
```

> [!alerta]
> `True` e `False` com letra maiúscula! `true` ou `false` dá erro.

### None — Nenhum valor

Pense no None como uma caixa vazia. Ela existe, mas não tem nada dentro.

```python
resultado = None
print(type(resultado))  # → <class 'NoneType'>

if resultado is None:
    print("Sem resultado ainda")
```

> [!sucesso]
> Use `is None` em vez de `== None`. É a forma correta.

## f-strings — Texto com variáveis

Coloque `f` antes das aspas e use `{}` para inserir variáveis:

```python
nome = "Ana"
idade = 22

print(f"Meu nome é {nome} e tenho {idade} anos")
# → Meu nome é Ana e tenho 22 anos

print(f"No ano que vem terei {idade + 1} anos")
# → No ano que vem terei 23 anos

# Formatando decimais
preco = 49.9
print(f"Valor: R$ {preco:.2f}")
# → Valor: R$ 49.90
```

### f-string vs concatenação

```python
# ❌ Concatenação (chato de escrever)
print("Nome: " + nome + ", Idade: " + str(idade))

# ✅ f-string (limpo e fácil)
print(f"Nome: {nome}, Idade: {idade}")
```

## Descobrindo e verificando tipos

```python
# type() — qual é o tipo?
print(type("Olá"))   # → <class 'str'>
print(type(42))      # → <class 'int'>
print(type(3.14))    # → <class 'float'>
print(type(True))    # → <class 'bool'>
print(type(None))    # → <class 'NoneType'>

# isinstance() — é desse tipo?
valor = 42
print(isinstance(valor, int))          # → True
print(isinstance(valor, str))          # → False
print(isinstance(valor, (int, float))) # → True (é int OU float?)
```

## Conversão de tipos

```python
# String → Número
numero = int("42")       # → 42
preco = float("19.99")   # → 19.99

# Número → String
texto = str(100)          # → "100"

# Float → Int (corta as casas, não arredonda!)
valor = int(3.99)
print(valor)  # → 3

# Número → Bool
print(bool(0))   # → False
print(bool(1))   # → True
print(bool(-5))  # → True (qualquer número diferente de 0)
```

> [!alerta]
> `int("3.14")` dá erro! Converta em dois passos: `int(float("3.14"))`.

## Exemplo: Ficha de cadastro

```python
print("=== Ficha de Cadastro ===")
print()

nome = input("Nome completo: ")
idade = int(input("Idade: "))
altura = float(input("Altura (metros): "))
email = input("E-mail: ")

ano_nascimento = 2026 - idade

print()
print(f"Nome:   {nome}")
print(f"Idade:  {idade} anos (nasceu ~{ano_nascimento})")
print(f"Altura: {altura:.2f} m")
print(f"E-mail: {email}")
```

## Resumo

| Tipo | Exemplo | O que é |
| --- | --- | --- |
| `str` | `"Olá"` | Texto |
| `int` | `42` | Número inteiro |
| `float` | `3.14` | Número decimal |
| `bool` | `True` / `False` | Verdadeiro ou falso |
| `None` | `None` | Nenhum valor |
| f-string | `f"Olá {nome}"` | Texto com variáveis |
| `type()` | `type(42)` | Descobrir o tipo |
| `isinstance()` | `isinstance(42, int)` | Verificar o tipo |
