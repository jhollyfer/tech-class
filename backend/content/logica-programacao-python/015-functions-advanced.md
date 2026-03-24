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

## Lambda

Lambda é uma função **mini** que cabe em uma linha:

```python
# Função normal
def dobrar(x: int) -> int:
    return x * 2

# Mesma coisa com lambda
dobrar_lambda = lambda x: x * 2

print(dobrar(5))         # → 10
print(dobrar_lambda(5))  # → 10
```

Lambda brilha quando usada como argumento de outras funções:

```python
numeros: list[int] = [5, 2, 8, 1, 9, 3]

# Ordenar por valor absoluto
valores: list[int] = [-5, 3, -1, 8, -3]
ordenados: list[int] = sorted(valores, key=lambda x: abs(x))
print(ordenados)  # → [-1, 3, -3, -5, 8]

# Filtrar maiores que 5
maiores: list[int] = list(filter(lambda x: x > 5, numeros))
print(maiores)  # → [8, 9]

# Elevar ao quadrado
quadrados: list[int] = list(map(lambda x: x ** 2, numeros))
print(quadrados)  # → [25, 4, 64, 1, 81, 9]
```

### Lambda com Múltiplos Parâmetros

```python
somar = lambda a, b: a + b
print(somar(3, 5))  # → 8

# Ordenar tuplas pelo segundo elemento
alunos: list[tuple[str, float]] = [("Ana", 8.5), ("Bruno", 7.0), ("Carla", 9.2)]
por_nota: list[tuple[str, float]] = sorted(alunos, key=lambda aluno: aluno[1], reverse=True)
print(por_nota)  # → [('Carla', 9.2), ('Ana', 8.5), ('Bruno', 7.0)]
```

> [!alerta] Se a lambda ficou complicada, use `def`. Lambda deve ser simples e curta.

## Funções como Parâmetros (Callbacks)

Funções são objetos em Python. Dá pra passar uma função como argumento de outra:

```python
def aplicar_operacao(a: float, b: float, operacao) -> float:
    return operacao(a, b)

soma: float = aplicar_operacao(10, 5, lambda a, b: a + b)
print(f"Soma: {soma}")  # → Soma: 15

subtracao: float = aplicar_operacao(10, 5, lambda a, b: a - b)
print(f"Subtração: {subtracao}")  # → Subtração: 5

multiplicacao: float = aplicar_operacao(10, 5, lambda a, b: a * b)
print(f"Multiplicação: {multiplicacao}")  # → Multiplicação: 50
```

### Exemplo: Processamento de Lista

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

com_desconto: list[float] = processar_lista(valores, lambda x: x * 0.9)
print(com_desconto)  # → [9.0, 18.0, 27.0, 36.0, 45.0]
```

## Recursão

Recursão é quando uma função chama **a si mesma**. Precisa de duas coisas:

1. **Caso base** — quando parar
2. **Caso recursivo** — chamar a si mesma com dados menores

### Fatorial

```python
def fatorial(n: int) -> int:
    if n == 0 or n == 1:  # caso base
        return 1
    return n * fatorial(n - 1)  # caso recursivo

print(fatorial(5))   # → 120 (5 * 4 * 3 * 2 * 1)
print(fatorial(0))   # → 1
```

Como funciona `fatorial(4)`:

```
fatorial(4)
  → 4 * fatorial(3)
    → 4 * 3 * fatorial(2)
      → 4 * 3 * 2 * fatorial(1)
        → 4 * 3 * 2 * 1  (caso base!)
        → 24
```

### Soma Recursiva

```python
def soma_recursiva(numeros: list[int]) -> int:
    if len(numeros) == 0:  # caso base
        return 0
    return numeros[0] + soma_recursiva(numeros[1:])

print(soma_recursiva([1, 2, 3, 4, 5]))  # → 15
```

### Contagem Regressiva

```python
def contagem_regressiva(n: int) -> None:
    if n <= 0:
        print("Lançar!")
        return
    print(n)
    contagem_regressiva(n - 1)

contagem_regressiva(5)
# → 5, 4, 3, 2, 1, Lançar!
```

> [!alerta] Python tem limite de ~1000 chamadas recursivas. Para problemas grandes, prefira loops.

## Responsabilidade Única (SRP)

Cada função faz **uma coisa só**:

```python
# Ruim — faz tudo junto
def processar_aluno(nome: str, notas: list[float]) -> None:
    media = sum(notas) / len(notas)
    status = "Aprovado" if media >= 7 else "Reprovado"
    print(f"{nome}: {media:.1f} - {status}")

# Bom — cada função tem seu papel
def calcular_media(notas: list[float]) -> float:
    return sum(notas) / len(notas)

def classificar(media: float) -> str:
    return "Aprovado" if media >= 7.0 else "Reprovado"

def exibir_resultado(nome: str, media: float, status: str) -> None:
    print(f"{nome}: {media:.1f} - {status}")

# Usando
notas: list[float] = [8.5, 7.0, 9.2]
media: float = calcular_media(notas)
status: str = classificar(media)
exibir_resultado("Ana", media, status)
```

> [!sucesso] Benefícios do SRP: mais fácil de testar, reutilizar e dar manutenção.

## Exemplo Completo: Pipeline

```python
from typing import Callable

def pipeline(
    dados: list[float],
    *operacoes: Callable[[list[float]], list[float]]
) -> list[float]:
    resultado: list[float] = dados
    for operacao in operacoes:
        resultado = operacao(resultado)
    return resultado

def filtrar_positivos(nums: list[float]) -> list[float]:
    return [n for n in nums if n > 0]

def dobrar(nums: list[float]) -> list[float]:
    return [n * 2 for n in nums]

def ordenar(nums: list[float]) -> list[float]:
    return sorted(nums)

valores: list[float] = [5, -3, 8, -1, 2, 7, -4]
resultado: list[float] = pipeline(valores, filtrar_positivos, dobrar, ordenar)
print(resultado)  # → [4, 10, 14, 16]
```