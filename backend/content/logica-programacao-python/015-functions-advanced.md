---
slug: "functions-advanced"
modulo: "Módulo 5 — Funções"
titulo: "Funções Avançadas"
subtitulo: "Lambda, callbacks, recursão e boas práticas"
descricao: "Domine lambda, funções como parâmetros, recursão e responsabilidade única."
ordem: 15
proximosPassos:
  - titulo: "Desafio: Par ou Ímpar"
    descricao: "Pratique funções classificando números pares e ímpares"
  - titulo: "Desafio: Tabuada"
    descricao: "Gere tabuadas com loops e formatação de texto"
quiz:
  - pergunta: "Qual é a sintaxe correta de uma função lambda?"
    opcoes: ["lambda: x => x * 2", "lambda x: x * 2", "def lambda(x): return x * 2", "(x) -> x * 2"]
    correta: 1
    explicacao: "A sintaxe é: lambda parâmetros: expressão."
    explicacaoErrada: "Lambda em Python: lambda parâmetros: expressão. Sem setas ou def."
  - pergunta: "Qual é o caso base na recursão do fatorial?"
    opcoes: ["fatorial(n) == n", "n == 1 ou n == 0", "n == -1", "Não precisa de caso base"]
    correta: 1
    explicacao: "Quando n é 0 ou 1, retorna 1. Sem isso, a recursão nunca para."
    explicacaoErrada: "Toda recursão precisa de caso base. No fatorial: n == 0 ou n == 1."
  - pergunta: "O que é o Princípio de Responsabilidade Única (SRP)?"
    opcoes: ["Cada arquivo deve ter apenas uma função", "Cada função deve fazer apenas uma coisa bem feita", "Cada variável deve ser usada apenas uma vez", "Cada classe deve ter apenas um método"]
    correta: 1
    explicacao: "Cada função faz uma coisa e faz bem."
    explicacaoErrada: "SRP = cada função tem UMA responsabilidade."
  - pergunta: "O que significa passar uma função como parâmetro?"
    opcoes: ["Executar a função antes de passá-la", "Enviar o código fonte como texto", "Passar a referência da função para outra função usar", "Criar uma cópia da função"]
    correta: 2
    explicacao: "Funções são objetos. Você passa a referência (sem parênteses) para outra função."
    explicacaoErrada: "Passar função = enviar a referência dela para outra função executar."
---

## O que sao funcoes avancadas?

Lambda e uma funcao anonima que cabe em uma linha. Voce usa quando precisa de algo rapido, geralmente como argumento de outra funcao. Alem de lambda, Python permite passar funcoes como parametros (callbacks) e ate fazer funcoes que chamam a si mesmas (recursao).

O conceito mais importante desta aula e o Principio de Responsabilidade Unica: cada funcao faz uma coisa so. Isso deixa o codigo mais facil de testar e manter.

> [!info]
> Se a lambda ficou complicada, use `def`. Lambda deve ser simples e curta.

## Lambda -- funcao mini em uma linha

A sintaxe e `lambda parametros: expressao`. Sem `def`, sem `return`, sem nome:

```python
dobrar = lambda x: x * 2
print(dobrar(5))  # → 10
```

Lambda brilha como argumento de outras funcoes:

```python
numeros: list[int] = [5, 2, 8, 1, 9, 3]

ordenados: list[int] = sorted(numeros, key=lambda x: -x)
print(ordenados)  # → [9, 8, 5, 3, 2, 1]

maiores: list[int] = list(filter(lambda x: x > 5, numeros))
print(maiores)  # → [8, 9]

quadrados: list[int] = list(map(lambda x: x ** 2, numeros))
print(quadrados)  # → [25, 4, 64, 1, 81, 9]
```

## Lambda com multiplos parametros

Da pra usar mais de um parametro:

```python
alunos: list[tuple[str, float]] = [("Ana", 8.5), ("Bruno", 7.0), ("Carla", 9.2)]
por_nota: list[tuple[str, float]] = sorted(alunos, key=lambda a: a[1], reverse=True)
print(por_nota)  # → [('Carla', 9.2), ('Ana', 8.5), ('Bruno', 7.0)]
```

## Funcoes como parametros (callbacks)

Em Python, funcoes sao objetos. Voce pode passar uma funcao como argumento de outra:

```python
def aplicar_operacao(a: float, b: float, operacao) -> float:
    return operacao(a, b)

soma: float = aplicar_operacao(10, 5, lambda a, b: a + b)
print(f"Soma: {soma}")  # → Soma: 15

mult: float = aplicar_operacao(10, 5, lambda a, b: a * b)
print(f"Multiplicacao: {mult}")  # → Multiplicacao: 50
```

## Callback com Callable tipado

Para tipar corretamente o parametro que recebe uma funcao, use `Callable`:

```python
from typing import Callable

def processar_lista(
    numeros: list[float],
    transformar: Callable[[float], float]
) -> list[float]:
    return [transformar(n) for n in numeros]

valores: list[float] = [10, 20, 30, 40, 50]
dobrados: list[float] = processar_lista(valores, lambda x: x * 2)
print(dobrados)  # → [20, 40, 60, 80, 100]
```

> [!info]
> `Callable[[float], float]` significa: recebe um `float` e retorna um `float`. O primeiro item e a lista de tipos dos parametros, o segundo e o tipo de retorno.

## Recursao -- funcao que chama a si mesma

Toda recursao precisa de duas coisas: um **caso base** (quando parar) e um **caso recursivo** (chamar com dado menor):

```python
def fatorial(n: int) -> int:
    if n == 0 or n == 1:  # caso base
        return 1
    return n * fatorial(n - 1)  # caso recursivo

print(fatorial(5))  # → 120 (5 * 4 * 3 * 2 * 1)
```

> [!alerta]
> Python tem limite de cerca de 1000 chamadas recursivas. Para problemas grandes, prefira loops. Toda recursao precisa de caso base, senao entra em loop infinito.

## Responsabilidade Unica (SRP)

Cada funcao faz UMA coisa. Compare:

```python
# Ruim — faz tudo junto
def processar_aluno(nome: str, notas: list[float]) -> None:
    media = sum(notas) / len(notas)
    status = "Aprovado" if media >= 7 else "Reprovado"
    print(f"{nome}: {media:.1f} - {status}")
```

```python
# Bom — cada funcao tem seu papel
def calcular_media(notas: list[float]) -> float:
    return sum(notas) / len(notas)

def classificar(media: float) -> str:
    return "Aprovado" if media >= 7.0 else "Reprovado"

def exibir_resultado(nome: str, media: float, status: str) -> None:
    print(f"{nome}: {media:.1f} - {status}")
```

## Exercicio pratico

Crie um mini sistema de calculadora usando callbacks:

1. Uma funcao `calcular(a, b, operacao)` que recebe dois numeros e uma funcao
2. Lambdas para soma, subtracao, multiplicacao e divisao
3. Use `Callable` para tipar o parametro `operacao`

```python
from typing import Callable

# 1. def calcular(a: float, b: float, operacao: Callable[[float, float], float]) -> float:

# 2. Teste com lambdas:
# calcular(10, 3, lambda a, b: a + b)  → 13
# calcular(10, 3, lambda a, b: a - b)  → 7
# calcular(10, 3, lambda a, b: a * b)  → 30
# calcular(10, 3, lambda a, b: a / b)  → 3.33
```

> [!sucesso]
> Se voce consegue passar funcoes como argumentos e entende recursao, ja domina os conceitos avancados de funcoes em Python.

## Referencias

- [Lambda Expressions](https://docs.python.org/pt-br/3/tutorial/controlflow.html#lambda-expressions) -- documentacao oficial Python
- [Recursion in Python](https://realpython.com/python-recursion/) -- guia completo no Real Python
- [Curso Python #16 - Funcoes (Parte 2)](https://www.youtube.com/watch?v=etjJ_4Eney0) -- Curso em Video
