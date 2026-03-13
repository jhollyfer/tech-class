# Lógica de Programação com Python

> Guia completo e estruturado — do zero ao raciocínio computacional

---

## Sumário

1. [Variáveis e Tipos de Dados](#1-variáveis-e-tipos-de-dados)
2. [Operadores](#2-operadores)
3. [Estruturas de Decisão](#3-estruturas-de-decisão)
4. [Estruturas de Repetição](#4-estruturas-de-repetição)
5. [Listas (Arrays)](#5-listas-arrays)
6. [Funções](#6-funções)
7. [Prática com Problemas Reais](#7-prática-com-problemas-reais)

---

## 1. Variáveis e Tipos de Dados

Uma variável é um **espaço nomeado na memória** para guardar um valor. Python é **dinamicamente tipado** — o tipo é inferido automaticamente pelo valor atribuído, mas você pode (e deve) usar **type hints** para documentar e validar o código.

### 1.1 Declaração de variáveis

Python não usa palavras-chave como `const` ou `let`. A variável é criada no momento da atribuição.

```python
nome = "Marcos"          # str
idade = 25               # int
altura = 1.78            # float
ativo = True             # bool
```

> **Convenção de nomenclatura:** use `snake_case` em Python — ex: `nome_completo`, `media_turma`. Nunca `nomeCompleto` (isso é camelCase, padrão de outras linguagens).

### 1.2 Type hints (anotações de tipo)

A partir do Python 3.5+, você pode anotar os tipos das variáveis. Isso não altera o comportamento, mas melhora a legibilidade e habilita ferramentas de análise estática.

```python
nome: str = "Marcos"
idade: int = 25
altura: float = 1.78
ativo: bool = True
```

### 1.3 Tipos primitivos

#### `str` — texto

```python
nome: str = "Marcos"
curso: str = "Desenvolvimento de Sistemas"

# f-string (interpolação) — forma moderna e recomendada
mensagem = f"Olá, {nome}! Bem-vindo ao {curso}."
print(mensagem)
# → Olá, Marcos! Bem-vindo ao Desenvolvimento de Sistemas.

# Métodos úteis
print(nome.upper())         # MARCOS
print(len(nome))            # 6
print("arc" in nome)        # True
print(nome.replace("a","@"))# M@rcos
print(nome.split("r"))      # ['Ma', 'cos']
```

#### `int` e `float` — números

```python
idade: int = 25
altura: float = 1.78
pi: float = 3.14159

ano_nascimento: int = 2025 - idade
print(ano_nascimento)  # 2000

# Conversão entre tipos
print(int(3.9))    # 3   (trunca, não arredonda)
print(float(10))   # 10.0
print(str(42))     # "42"
```

#### `bool` — verdadeiro ou falso

```python
aprovado: bool = True
em_recuperacao: bool = False

# Booleanos geralmente vêm de comparações
nota = 7.5
passou: bool = nota >= 7.0  # True

# Em Python, True == 1 e False == 0
print(True + True)   # 2
print(False + 1)     # 1
```

#### `None` — ausência de valor

```python
# None é o equivalente ao null de outras linguagens
resultado = None

if resultado is None:
    print("Ainda não foi calculado")
```

### 1.4 Verificando e convertendo tipos

```python
valor = "42"

print(type(valor))          # <class 'str'>
print(isinstance(valor, str))   # True
print(isinstance(valor, int))   # False

# Conversão (casting)
numero = int(valor)         # "42" → 42
print(type(numero))         # <class 'int'>
```

> **Cuidado:** `int("abc")` lança `ValueError`. Sempre trate possíveis erros de conversão.

---

## 2. Operadores

### 2.1 Aritméticos

```python
a = 17
b = 5

print(a + b)   # 22  — soma
print(a - b)   # 12  — subtração
print(a * b)   # 85  — multiplicação
print(a / b)   # 3.4 — divisão (sempre retorna float)
print(a // b)  # 3   — divisão inteira (floor division)
print(a % b)   # 2   — resto da divisão (módulo)
print(a ** b)  # 1419857 — potenciação (17⁵)
```

> **Atenção:** em Python, `/` sempre retorna `float`. Use `//` quando quiser resultado inteiro.

### 2.2 Relacionais (de comparação)

Sempre retornam `bool`.

```python
print(5 > 3)    # True
print(5 < 3)    # False
print(5 >= 5)   # True
print(5 <= 4)   # False
print(5 == 5)   # True
print(5 != 3)   # True

# Python permite encadeamento de comparações — único entre as linguagens
nota = 7.5
print(5 <= nota <= 10)  # True — muito elegante!
```

### 2.3 Lógicos

```python
maior_idade = 18
tem_carteira = True

pode_conduzir = maior_idade >= 18 and tem_carteira   # True
pode_entrar   = maior_idade >= 18 or tem_carteira    # True
menor_idade   = not pode_conduzir                    # False
```

> Python usa palavras em inglês (`and`, `or`, `not`) — não símbolos como `&&`, `||`, `!`.

| Python | Equivalente em outras linguagens | Significado |
| ------ | -------------------------------- | ----------- |
| `and`  | `&&`                             | E lógico    |
| `or`   | `\|\|`                           | OU lógico   |
| `not`  | `!`                              | Negação     |

### 2.4 De atribuição

```python
x = 10
x += 5   # x = x + 5  → 15
x -= 3   # x = x - 3  → 12
x *= 2   # x = x * 2  → 24
x //= 4  # x = x // 4 → 6
x **= 2  # x = x ** 2 → 36
x %= 5   # x = x % 5  → 1
```

### 2.5 Operador ternário (expressão condicional)

```python
nota = 7.5
status = "Aprovado" if nota >= 7 else "Reprovado"
print(status)  # Aprovado
```

---

## 3. Estruturas de Decisão

### 3.1 `if / elif / else`

Python usa `elif` (não `else if`). A **indentação** (4 espaços) define o bloco — não há chaves `{}`.

```python
nota: float = 7.5

if nota >= 9:
    print("Aprovado com excelência")
elif nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

> ⚠️ **Indentação é obrigatória em Python.** Um bloco mal indentado causa `IndentationError`.

### 3.2 `match / case` (Python 3.10+)

Equivalente ao `switch` de outras linguagens.

```python
dia_da_semana: str = "segunda"

match dia_da_semana:
    case "sábado" | "domingo":
        print("Fim de semana — sem aula!")
    case "segunda" | "quarta" | "sexta":
        print("Aula de Lógica de Programação")
    case _:                          # _ é o default
        print("Dia útil normal")
```

### 3.3 Combinando condições

```python
idade: int = 20
tem_documento: bool = True
tem_ingressos: bool = False

# and — todas as condições precisam ser verdadeiras
if idade >= 18 and tem_documento:
    print("Pode entrar no evento")

# or — basta uma ser verdadeira
if tem_ingressos or tem_documento:
    print("Acesso liberado")

# not — negação
if not tem_ingressos:
    print("Compre seu ingresso primeiro")
```

### 3.4 Valores "falsy" em Python

Python considera os seguintes valores como `False` em condições:

```python
# Todos avaliam como False:
if not 0:       print("zero é falsy")
if not "":      print("string vazia é falsy")
if not []:      print("lista vazia é falsy")
if not None:    print("None é falsy")

# Todos os outros são truthy
if "qualquer texto":  print("string não vazia é truthy")
if [1, 2, 3]:         print("lista com elementos é truthy")
```

---

## 4. Estruturas de Repetição

### 4.1 `for` com `range()` — quando sabe o número de iterações

```python
# range(início, fim_exclusivo, passo)
for i in range(1, 6):       # 1, 2, 3, 4, 5
    print(f"Iteração: {i}")

# Conta de trás para frente
for i in range(10, 0, -1):  # 10, 9, 8...1
    print(i)

# De 2 em 2
for i in range(0, 21, 2):   # 0, 2, 4...20
    print(i)
```

### 4.2 `for` percorrendo sequências

```python
nomes = ["Ana", "Bruno", "Carol"]

# Percorrer elementos
for nome in nomes:
    print(f"Olá, {nome}!")

# Percorrer com índice — enumerate()
for indice, nome in enumerate(nomes):
    print(f"{indice}: {nome}")
# → 0: Ana
# → 1: Bruno
# → 2: Carol

# Percorrer string caractere por caractere
for char in "Python":
    print(char)
```

### 4.3 `while` — quando não sabe o número de iterações

```python
tentativas = 0
max_tentativas = 3

while tentativas < max_tentativas:
    print(f"Tentativa {tentativas + 1} de {max_tentativas}")
    tentativas += 1
```

### 4.4 `break` e `continue`

```python
# break — interrompe o loop completamente
for i in range(1, 11):
    if i == 5:
        break
    print(i)  # 1, 2, 3, 4

# continue — pula para a próxima iteração
for i in range(1, 6):
    if i == 3:
        continue
    print(i)  # 1, 2, 4, 5
```

### 4.5 `else` no loop (exclusivo do Python)

O bloco `else` de um loop executa **somente se o loop terminar normalmente** (sem `break`).

```python
for i in range(2, 10):
    if 10 % i == 0:
        print(f"10 é divisível por {i}")
        break
else:
    print("10 não é divisível por nenhum número entre 2 e 9")
```

### 4.6 List Comprehension — loops em uma linha

Uma das features mais elegantes do Python.

```python
numeros = [1, 2, 3, 4, 5]

# Equivale a um for + append
dobrados = [n * 2 for n in numeros]
print(dobrados)  # [2, 4, 6, 8, 10]

# Com filtro
pares = [n for n in numeros if n % 2 == 0]
print(pares)     # [2, 4]
```

---

## 5. Listas (Arrays)

Em Python, o equivalente ao array é a **lista** (`list`). Listas aceitam elementos de tipos diferentes e têm tamanho dinâmico.

### 5.1 Declaração e acesso

```python
notas: list[float] = [8.5, 7.0, 9.5, 6.0]
nomes: list[str]   = ["Ana", "Bruno", "Carol"]

# Acesso por índice (começa em 0)
print(notas[0])   # 8.5  — primeiro
print(notas[2])   # 9.5  — terceiro
print(notas[-1])  # 6.0  — último (índice negativo!)
print(notas[-2])  # 9.5  — penúltimo

# Tamanho
print(len(notas))  # 4
```

### 5.2 Slicing (fatiamento)

```python
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numeros[2:5])    # [2, 3, 4]      — do índice 2 ao 4
print(numeros[:3])     # [0, 1, 2]      — do início ao 2
print(numeros[7:])     # [7, 8, 9]      — do 7 ao fim
print(numeros[::2])    # [0, 2, 4, 6, 8] — de 2 em 2
print(numeros[::-1])   # [9, 8...0]     — invertido
```

### 5.3 Modificação

```python
frutas = ["maçã", "banana", "laranja"]

frutas.append("uva")         # adiciona ao final
frutas.insert(0, "abacaxi")  # insere na posição 0
frutas.pop()                 # remove e retorna o último
frutas.pop(1)                # remove e retorna o índice 1
frutas.remove("banana")      # remove pela valor (primeiro encontrado)

print("banana" in frutas)    # False
print(frutas.index("maçã"))  # 0 (lança ValueError se não existir)
```

### 5.4 Percorrer e calcular

```python
notas: list[float] = [8.5, 7.0, 9.5, 6.0]

# Calcular média manualmente
soma = 0.0
for nota in notas:
    soma += nota
media = soma / len(notas)
print(f"Média: {media}")  # Média: 7.75

# Usando funções built-in
print(sum(notas))   # 31.0
print(max(notas))   # 9.5
print(min(notas))   # 6.0
```

### 5.5 Métodos funcionais com `map`, `filter`, `sorted`

```python
notas = [8.5, 7.0, 9.5, 6.0, 5.5]

# filter — retorna os elementos que passam no critério
aprovados = list(filter(lambda n: n >= 7, notas))
print(aprovados)   # [8.5, 7.0, 9.5]

# map — transforma cada elemento
arredondadas = list(map(round, notas))
print(arredondadas)  # [9, 7, 10, 6, 6]

# sorted — retorna nova lista ordenada (não modifica a original)
em_ordem = sorted(notas)
print(em_ordem)    # [5.5, 6.0, 7.0, 8.5, 9.5]

# Com list comprehension (mais pythônico)
aprovados = [n for n in notas if n >= 7]
arredondadas = [round(n) for n in notas]
```

> **Regra de ouro:** `filter`, `map` e `sorted` nunca modificam a lista original — sempre retornam uma nova. Isso é **imutabilidade**.

---

## 6. Funções

### 6.1 Função simples com type hints

```python
def calcular_media(notas: list[float]) -> float:
    return sum(notas) / len(notas)

media = calcular_media([8, 7, 9, 6])
print(media)  # 7.5
```

### 6.2 Parâmetros opcionais e valores padrão

```python
def potencia(base: float, expoente: int = 2) -> float:
    return base ** expoente

print(potencia(3))      # 9.0  (usa expoente padrão = 2)
print(potencia(2, 10))  # 1024.0

# Parâmetro com valor padrão None (opcional)
def criar_nome(nome: str, sobrenome: str | None = None) -> str:
    if sobrenome:
        return f"{nome} {sobrenome}"
    return nome

print(criar_nome("Marcos"))               # Marcos
print(criar_nome("Marcos", "Rodrigues"))  # Marcos Rodrigues
```

### 6.3 Argumentos nomeados (keyword arguments)

```python
def criar_usuario(nome: str, email: str, ativo: bool = True) -> dict:
    return {"nome": nome, "email": email, "ativo": ativo}

# Passando por nome — a ordem não importa
usuario = criar_usuario(email="ana@email.com", nome="Ana", ativo=False)
print(usuario)
# → {'nome': 'Ana', 'email': 'ana@email.com', 'ativo': False}
```

### 6.4 Retornando múltiplos valores

Python pode retornar uma tupla implicitamente — sem precisar de objeto.

```python
def dividir(a: int, b: int) -> tuple[int, int]:
    return a // b, a % b   # retorna tupla

resultado, resto = dividir(10, 3)
print(f"Resultado: {resultado}, Resto: {resto}")
# → Resultado: 3, Resto: 1
```

### 6.5 Lambda (função anônima)

```python
dobrar = lambda n: n * 2
print(dobrar(5))  # 10

# Muito usado com sorted, filter, map
nomes = ["Carol", "Ana", "Bruno"]
em_ordem = sorted(nomes, key=lambda nome: len(nome))
print(em_ordem)  # ['Ana', 'Carol', 'Bruno'] — ordenado por tamanho
```

### 6.6 Funções como parâmetros

```python
def aplicar_operacao(numeros: list[int], operacao) -> list[int]:
    return [operacao(n) for n in numeros]

resultado = aplicar_operacao([1, 2, 3, 4], lambda n: n * 3)
print(resultado)  # [3, 6, 9, 12]
```

### 6.7 Funções recursivas

```python
def fatorial(n: int) -> int:
    if n <= 1:       # caso base — para a recursão
        return 1
    return n * fatorial(n - 1)  # chama a si mesma

print(fatorial(5))   # 120
print(fatorial(10))  # 3628800
```

> **Princípio da responsabilidade única:** cada função deve fazer **uma coisa só**. Se o nome precisa de "e" no meio (ex: `calcular_e_imprimir`), quebre em duas.

---

## 7. Prática com Problemas Reais

### Desafio 1 — Par ou Ímpar

```python
def par_ou_impar(n: int) -> str:
    return "par" if n % 2 == 0 else "ímpar"

numeros = [1, 2, 3, 4, 5, 6, 7, 8]
for n in numeros:
    print(f"{n} é {par_ou_impar(n)}")

# → 1 é ímpar
# → 2 é par
# ...
```

---

### Desafio 2 — Tabuada

```python
def tabuada(n: int) -> None:
    print(f"\n--- Tabuada do {n} ---")
    for i in range(1, 11):
        print(f"{n} x {i:2d} = {n * i:3d}")

tabuada(7)

# → 7 x  1 =   7
# → 7 x  2 =  14
# → ...
# → 7 x 10 =  70
```

---

### Desafio 3 — Sistema de Aprovação da Turma

```python
from typing import TypedDict

class Aluno(TypedDict):
    nome: str
    notas: list[float]

def calcular_media(notas: list[float]) -> float:
    return sum(notas) / len(notas)

def classificar(media: float) -> str:
    if media >= 9:   return "Excelente"
    if media >= 7:   return "Aprovado"
    if media >= 5:   return "Recuperação"
    return "Reprovado"

def avaliar_turma(turma: list[Aluno]) -> None:
    print("=" * 50)
    print("           RESULTADO DA TURMA")
    print("=" * 50)
    for aluno in turma:
        media = calcular_media(aluno["notas"])
        status = classificar(media)
        icone = "✓" if media >= 7 else "✗"
        print(f"{icone} {aluno['nome']:<15} | Média: {media:.1f} | {status}")
    print("=" * 50)

turma: list[Aluno] = [
    {"nome": "Ana",   "notas": [8.0, 9.0, 7.5]},
    {"nome": "Bruno", "notas": [5.0, 6.0, 4.0]},
    {"nome": "Carol", "notas": [9.5, 10.0, 9.0]},
    {"nome": "Diego", "notas": [6.5, 5.5, 7.0]},
]

avaliar_turma(turma)
```

---

### Desafio 4 — Números Primos

```python
import math

def e_primo(n: int) -> bool:
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def listar_primos_ate(limite: int) -> list[int]:
    return [i for i in range(2, limite + 1) if e_primo(i)]

print(e_primo(7))    # True
print(e_primo(10))   # False

primos = listar_primos_ate(50)
print(primos)
# → [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
```

---

### Desafio 5 — Carrinho de Compras

```python
from typing import TypedDict

class Produto(TypedDict):
    nome: str
    preco: float
    quantidade: int

Carrinho = list[Produto]

def adicionar_produto(carrinho: Carrinho, produto: Produto) -> Carrinho:
    for item in carrinho:
        if item["nome"] == produto["nome"]:
            item["quantidade"] += produto["quantidade"]
            return carrinho
    return carrinho + [produto]

def calcular_total(carrinho: Carrinho) -> float:
    return sum(p["preco"] * p["quantidade"] for p in carrinho)

def exibir_carrinho(carrinho: Carrinho) -> None:
    print("\n🛒 CARRINHO DE COMPRAS")
    print("-" * 42)
    for item in carrinho:
        subtotal = item["preco"] * item["quantidade"]
        print(f"{item['nome']:<15} x{item['quantidade']}  R$ {subtotal:.2f}")
    print("-" * 42)
    print(f"TOTAL: R$ {calcular_total(carrinho):.2f}")

carrinho: Carrinho = []
carrinho = adicionar_produto(carrinho, {"nome": "Teclado", "preco": 150.00, "quantidade": 1})
carrinho = adicionar_produto(carrinho, {"nome": "Mouse",   "preco": 80.00,  "quantidade": 2})
carrinho = adicionar_produto(carrinho, {"nome": "Teclado", "preco": 150.00, "quantidade": 1})

exibir_carrinho(carrinho)

# → 🛒 CARRINHO DE COMPRAS
# → Teclado         x2  R$ 300.00
# → Mouse           x2  R$ 160.00
# → TOTAL: R$ 460.00
```

---

## Mapa de Conceitos

```
VARIÁVEIS
  └─ atribuição direta (sem const/let)
  └─ type hints: str, int, float, bool, None

OPERADORES
  └─ aritméticos: + - * / // % **
  └─ relacionais: == != > < >= <=  (encadeáveis!)
  └─ lógicos: and or not
  └─ ternário: valor_se_true if condição else valor_se_false

DECISÃO
  └─ if / elif / else
  └─ match / case (Python 3.10+)
  └─ valores falsy: 0, "", [], None, False

REPETIÇÃO
  └─ for com range()
  └─ for percorrendo sequências
  └─ while
  └─ break / continue
  └─ else no loop (exclusivo do Python)
  └─ list comprehension

LISTAS
  └─ declaração: list[tipo]
  └─ acesso: lista[índice] (índices negativos!)
  └─ slicing: lista[início:fim:passo]
  └─ mutação: append, insert, pop, remove
  └─ consulta: len, in, index
  └─ funcionais: filter, map, sorted, sum, max, min

FUNÇÕES
  └─ def nome(params) -> tipo:
  └─ parâmetros opcionais e padrão
  └─ keyword arguments
  └─ retorno múltiplo via tupla
  └─ lambda (função anônima)
  └─ recursão
```

---

## O que estudar depois

| Tópico                         | O que cobre                                     |
| ------------------------------ | ----------------------------------------------- |
| **Dicionários e Tuplas**       | Estruturas de dados nativas do Python           |
| **Type hints avançados**       | `Optional`, `Union`, `TypedDict`, `dataclass`   |
| **POO (Orientação a Objetos)** | Classes, herança, encapsulamento, polimorfismo  |
| **Tratamento de erros**        | `try / except / finally`, exceções customizadas |
| **Módulos e pacotes**          | `import`, `pip`, ambientes virtuais (`venv`)    |
| **Assincronismo**              | `asyncio`, `async/await`                        |

---

_Gerado para estudo de Lógica de Programação com Python_
