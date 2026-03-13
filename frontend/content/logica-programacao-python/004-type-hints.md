---
slug: "type-hints"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Type Hints"
subtitulo: "Anotações de tipo para código mais legível e seguro"
descricao: "Aprenda a usar type hints para documentar os tipos esperados em variáveis, parâmetros e retornos de funções em Python."
ordem: 4
proximosPassos:
  - titulo: "Operadores Aritméticos e Relacionais"
    descricao: "Aprenda a realizar cálculos e comparações em Python"
  - titulo: "Operadores Lógicos e Ternário"
    descricao: "Combine condições com and, or, not e expressões ternárias"
quiz:
  - pergunta: "O que acontece se atribuirmos um valor de tipo errado a uma variável com type hint?"
    opcoes: ["O Python gera um erro na execução", "O programa não compila", "Nada — type hints não são obrigatórios em tempo de execução", "A variável é convertida automaticamente"]
    correta: 2
    explicacao: "✓ Type hints em Python são apenas anotações. Eles não mudam o comportamento do programa — são ignorados em tempo de execução."
    explicacaoErrada: "✗ Type hints não geram erros nem convertem valores. Eles são puramente informativos — servem para documentação e ferramentas externas."
  - pergunta: "Qual é a sintaxe correta para anotar uma variável com type hint?"
    opcoes: ["nome: str = 'Ana'", "str nome = 'Ana'", "nome = str('Ana')", "var nome: string = 'Ana'"]
    correta: 0
    explicacao: "✓ A sintaxe é variavel: tipo = valor. O tipo vem após os dois-pontos, antes do sinal de atribuição."
    explicacaoErrada: "✗ Em Python, a sintaxe de type hints é variavel: tipo = valor. Não é como Java (tipo variavel) nem TypeScript (var nome: string)."
  - pergunta: "Para que servem os type hints em Python?"
    opcoes: ["Melhorar a performance do código", "Converter tipos automaticamente", "Documentar tipos esperados e ajudar ferramentas como IDEs e mypy", "Impedir que tipos errados sejam usados"]
    correta: 2
    explicacao: "✓ Type hints servem como documentação, melhoram o autocomplete de IDEs e permitem verificação estática com ferramentas como mypy."
    explicacaoErrada: "✗ Type hints não afetam performance, não convertem tipos e não impedem uso de tipos errados. Seu propósito é documentação e suporte a ferramentas."
---

## O que são Type Hints?

Type hints (dicas de tipo) são **anotações opcionais** que indicam qual tipo de dado uma variável, parâmetro ou retorno de função deve ter. Foram introduzidos no Python 3.5 e são cada vez mais usados em projetos profissionais.

```python
# Sem type hints
nome = "Ana"
idade = 25

# Com type hints
nome: str = "Ana"
idade: int = 25
```

> **Importante:** Type hints **não mudam o comportamento** do programa. Python continua sendo uma linguagem de tipagem dinâmica. As anotações são puramente informativas.

## Por que usar Type Hints?

### 1. Legibilidade

O código se torna auto-documentado — outro programador sabe imediatamente o tipo esperado:

```python
# Sem type hints — qual tipo é cada parâmetro?
def calcular_desconto(preco, percentual):
    return preco * (1 - percentual / 100)

# Com type hints — fica claro!
def calcular_desconto(preco: float, percentual: float) -> float:
    return preco * (1 - percentual / 100)
```

### 2. Suporte da IDE

Com type hints, o VS Code oferece:

- **Autocomplete** mais preciso (sugere métodos corretos para o tipo)
- **Avisos** quando você passa um tipo errado
- **Documentação** ao passar o mouse sobre variáveis

### 3. Verificação estática com mypy

O [mypy](https://mypy-lang.org/) é uma ferramenta que analisa type hints e encontra erros antes de executar o código:

```python
# verificar.py
def saudacao(nome: str) -> str:
    return f"Olá, {nome}!"

resultado: int = saudacao("Ana")  # mypy detecta: incompatível!
```

```bash
# No terminal:
mypy verificar.py
# → error: Incompatible types in assignment
#   (expression has type "str", variable has type "int")
```

## Sintaxe básica

### Anotando variáveis

```python
# Tipos primitivos
nome: str = "Carlos"
idade: int = 30
altura: float = 1.75
ativo: bool = True
resultado: None = None

# Também é possível anotar sem atribuir valor
sobrenome: str  # declarada mas não inicializada
```

### Anotando parâmetros de funções

```python
def saudacao(nome: str, idade: int) -> str:
    return f"Olá, {nome}! Você tem {idade} anos."

# Parâmetros com valor padrão
def configurar(host: str = "localhost", porta: int = 8080) -> str:
    return f"{host}:{porta}"
```

### Anotando retorno de funções

A seta `->` indica o tipo de retorno:

```python
def somar(a: int, b: int) -> int:
    return a + b

def dividir(a: float, b: float) -> float:
    return a / b

# Função que não retorna nada
def exibir_mensagem(texto: str) -> None:
    print(texto)
```

## Type Hints não mudam o comportamento

Este é o ponto mais importante: type hints são **ignorados em tempo de execução**. O Python não gera erro se o tipo real for diferente do anotado.

```python
# Isto NÃO gera erro!
idade: int = "vinte e cinco"  # anotou int, mas atribuiu str
print(idade)  # → vinte e cinco (funciona normalmente)

nome: str = 42  # anotou str, mas atribuiu int
print(nome)     # → 42 (funciona normalmente)
```

> Type hints são como **comentários estruturados** — ajudam humanos e ferramentas, mas o Python os ignora durante a execução.

## Tipos para coleções

Para listas, dicionários e outros tipos compostos, podemos especificar o tipo dos elementos:

```python
# Python 3.9+: usar os tipos nativos diretamente
nomes: list[str] = ["Ana", "Carlos", "Maria"]
idades: dict[str, int] = {"Ana": 25, "Carlos": 30}
coordenadas: tuple[float, float] = (23.5, -46.6)

# Conjunto (set)
ids_unicos: set[int] = {1, 2, 3, 4}
```

### Tipos opcionais

Quando uma variável pode ser de um tipo ou `None`:

```python
# Python 3.10+: usar o operador |
nome: str | None = None
idade: int | None = None

# Exemplo prático
def buscar_usuario(id: int) -> str | None:
    if id == 1:
        return "Ana"
    return None  # usuário não encontrado
```

## Exemplo prático: Calculadora com type hints

```python
# calculadora.py — Calculadora simples com type hints

def somar(a: float, b: float) -> float:
    return a + b

def subtrair(a: float, b: float) -> float:
    return a - b

def multiplicar(a: float, b: float) -> float:
    return a * b

def dividir(a: float, b: float) -> float | None:
    if b == 0:
        print("Erro: divisão por zero!")
        return None
    return a / b

def exibir_resultado(operacao: str, resultado: float | None) -> None:
    if resultado is not None:
        print(f"Resultado da {operacao}: {resultado:.2f}")

# Programa principal
numero1: float = float(input("Primeiro número: "))
numero2: float = float(input("Segundo número: "))

exibir_resultado("soma", somar(numero1, numero2))
exibir_resultado("subtração", subtrair(numero1, numero2))
exibir_resultado("multiplicação", multiplicar(numero1, numero2))
exibir_resultado("divisão", dividir(numero1, numero2))
```

## Quando usar Type Hints?

| Situação | Recomendação |
| --- | --- |
| Projetos grandes / em equipe | Fortemente recomendado |
| Funções públicas / APIs | Fortemente recomendado |
| Código de estudo / scripts rápidos | Opcional, mas é boa prática |
| Variáveis locais óbvias | Pode omitir (`x = 5` já é claro) |

## Resumo

| Conceito | Sintaxe |
| --- | --- |
| Variável com tipo | `nome: str = "Ana"` |
| Parâmetro com tipo | `def f(x: int):` |
| Retorno de função | `def f() -> str:` |
| Sem retorno | `def f() -> None:` |
| Tipo opcional | `valor: str \| None` |
| Lista tipada | `nomes: list[str]` |
| Dicionário tipado | `dados: dict[str, int]` |
| Verificação | `mypy arquivo.py` |
