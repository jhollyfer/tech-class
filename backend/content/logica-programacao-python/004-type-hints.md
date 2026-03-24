---
slug: "type-hints"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Type Hints"
subtitulo: "Anotações de tipo para código mais claro"
descricao: "Use type hints para documentar tipos em variáveis, parâmetros e retornos de funções."
ordem: 4
proximosPassos:
  - titulo: "Operadores Aritméticos e Relacionais"
    descricao: "Faça cálculos e comparações em Python"
  - titulo: "Operadores Lógicos e Ternário"
    descricao: "Combine condições com and, or, not e ternário"
quiz:
  - pergunta: "O que acontece se atribuirmos um tipo errado a uma variável com type hint?"
    opcoes: ["O Python gera um erro na execução", "O programa não compila", "Nada — type hints não são obrigatórios em tempo de execução", "A variável é convertida automaticamente"]
    correta: 2
    explicacao: "Type hints são só anotações. O Python ignora eles na hora de rodar."
    explicacaoErrada: "Type hints não geram erros nem convertem valores. São só informativos."
  - pergunta: "Qual é a sintaxe correta para anotar uma variável?"
    opcoes: ["nome: str = 'Ana'", "str nome = 'Ana'", "nome = str('Ana')", "var nome: string = 'Ana'"]
    correta: 0
    explicacao: "A sintaxe é variavel: tipo = valor. O tipo vem depois dos dois-pontos."
    explicacaoErrada: "Em Python: variavel: tipo = valor. Não é como Java ou TypeScript."
  - pergunta: "Para que servem os type hints?"
    opcoes: ["Melhorar a performance", "Converter tipos automaticamente", "Documentar tipos esperados e ajudar ferramentas como IDEs e mypy", "Impedir que tipos errados sejam usados"]
    correta: 2
    explicacao: "Type hints melhoram autocomplete nas IDEs e permitem verificação com mypy."
    explicacaoErrada: "Type hints não afetam performance, não convertem tipos e não impedem erros. São para documentação e ferramentas."
---

## O que são Type Hints?

Type hints são etiquetas opcionais que dizem qual tipo uma variável ou função espera. Como colocar uma plaquinha na caixa dizendo "aqui vai texto".

```python
# Sem type hints
nome = "Ana"
idade = 25

# Com type hints
nome: str = "Ana"
idade: int = 25
```

> [!info]
> Type hints **não mudam** como o programa funciona. Python continua com tipagem dinâmica. As anotações são só informativas.

## Por que usar?

**1. Legibilidade** — quem lê o código sabe o tipo esperado na hora:

```python
# Sem hints — que tipo é cada coisa?
def calcular_desconto(preco, percentual):
    return preco * (1 - percentual / 100)

# Com hints — fica claro!
def calcular_desconto(preco: float, percentual: float) -> float:
    return preco * (1 - percentual / 100)
```

**2. IDE mais esperta** — o VS Code dá autocomplete melhor, avisa quando o tipo está errado e mostra documentação ao passar o mouse.

**3. Verificação com mypy** — encontra erros antes de rodar o código:

```python
def saudacao(nome: str) -> str:
    return f"Olá, {nome}!"

resultado: int = saudacao("Ana")  # mypy: incompatível!
```

```bash
mypy verificar.py
# → error: Incompatible types in assignment
```

## Sintaxe básica

### Em variáveis

```python
nome: str = "Carlos"
idade: int = 30
altura: float = 1.75
ativo: bool = True
resultado: None = None
```

### Em funções — parâmetros e retorno

```python
def saudacao(nome: str, idade: int) -> str:
    return f"Olá, {nome}! Você tem {idade} anos."

# Com valor padrão
def configurar(host: str = "localhost", porta: int = 8080) -> str:
    return f"{host}:{porta}"

# Sem retorno
def exibir(texto: str) -> None:
    print(texto)
```

## Type hints são ignorados na execução

Esse é o ponto principal: o Python **não** gera erro se o tipo real for diferente.

```python
idade: int = "vinte e cinco"  # anotou int, mas é str
print(idade)  # → vinte e cinco (funciona!)

nome: str = 42  # anotou str, mas é int
print(nome)     # → 42 (funciona!)
```

> [!info]
> Type hints são como comentários organizados — ajudam humanos e ferramentas, mas o Python ignora durante a execução.

## Tipos para coleções

```python
# Python 3.9+
nomes: list[str] = ["Ana", "Carlos", "Maria"]
idades: dict[str, int] = {"Ana": 25, "Carlos": 30}
coordenadas: tuple[float, float] = (23.5, -46.6)
ids_unicos: set[int] = {1, 2, 3, 4}
```

### Tipo opcional (pode ser None)

```python
# Python 3.10+
nome: str | None = None

def buscar_usuario(id: int) -> str | None:
    if id == 1:
        return "Ana"
    return None
```

## Exemplo: Calculadora com type hints

```python
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

numero1: float = float(input("Primeiro número: "))
numero2: float = float(input("Segundo número: "))

exibir_resultado("soma", somar(numero1, numero2))
exibir_resultado("subtração", subtrair(numero1, numero2))
exibir_resultado("multiplicação", multiplicar(numero1, numero2))
exibir_resultado("divisão", dividir(numero1, numero2))
```

## Quando usar?

| Situação | Usar? |
| --- | --- |
| Projetos grandes / em equipe | Sim, sempre |
| Funções públicas / APIs | Sim, sempre |
| Scripts rápidos / estudo | Opcional |
| Variáveis óbvias (`x = 5`) | Pode pular |

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
