---
slug: "functions-advanced"
modulo: "Módulo 5 — Funções"
titulo: "Funções Avançadas"
subtitulo: "Lambda, callbacks, recursão e boas práticas"
descricao: "Domine lambda functions, funções como parâmetros, recursão e o princípio de responsabilidade única."
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
    explicacao: "✓ A sintaxe é: lambda parâmetros: expressão. Exemplo: lambda x: x * 2."
    explicacaoErrada: "✗ Lambda em Python usa a sintaxe: lambda parâmetros: expressão. Não usa setas (=>) nem def."
  - pergunta: "Qual é o caso base na recursão do fatorial?"
    opcoes: ["fatorial(n) == n", "n == 1 ou n == 0", "n == -1", "Não precisa de caso base"]
    correta: 1
    explicacao: "✓ O caso base do fatorial é n == 0 ou n == 1, onde o resultado é 1. Sem caso base, a recursão seria infinita."
    explicacaoErrada: "✗ Toda recursão precisa de um caso base para parar. No fatorial, quando n é 0 ou 1, retornamos 1."
  - pergunta: "O que é o Princípio de Responsabilidade Única (SRP)?"
    opcoes: ["Cada arquivo deve ter apenas uma função", "Cada função deve fazer apenas uma coisa bem feita", "Cada variável deve ser usada apenas uma vez", "Cada classe deve ter apenas um método"]
    correta: 1
    explicacao: "✓ SRP diz que cada função deve ter uma única responsabilidade — fazer uma coisa e fazer bem."
    explicacaoErrada: "✗ O SRP se aplica a funções: cada uma deve ter UMA responsabilidade clara e bem definida."
  - pergunta: "O que significa passar uma função como parâmetro?"
    opcoes: ["Executar a função antes de passá-la", "Enviar o código fonte como texto", "Passar a referência da função para outra função usar", "Criar uma cópia da função"]
    correta: 2
    explicacao: "✓ Em Python, funções são objetos. Você pode passar a referência (sem parênteses) para outra função que a executará."
    explicacaoErrada: "✗ Funções são objetos em Python. Passar uma função como parâmetro significa enviar sua referência para outra função usar."
---

## Funções Lambda

Lambda é uma forma de criar funções **pequenas e anônimas** em uma única linha:

```python
# Sintaxe: lambda parâmetros: expressão

# Função normal
def dobrar(x: int) -> int:
    return x * 2

# Equivalente com lambda
dobrar_lambda = lambda x: x * 2

print(dobrar(5))         # → 10
print(dobrar_lambda(5))  # → 10
```

### Quando Usar Lambda?

Lambda é ideal para funções **curtas e descartáveis**, especialmente como argumento de outras funções:

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
# Lambda com dois parâmetros
somar = lambda a, b: a + b
print(somar(3, 5))  # → 8

# Ordenar tuplas pelo segundo elemento
alunos: list[tuple[str, float]] = [("Ana", 8.5), ("Bruno", 7.0), ("Carla", 9.2)]
por_nota: list[tuple[str, float]] = sorted(alunos, key=lambda aluno: aluno[1], reverse=True)
print(por_nota)  # → [('Carla', 9.2), ('Ana', 8.5), ('Bruno', 7.0)]
```

> **Regra prática:** se a lambda ficar complexa demais, use `def` com um nome descritivo. Lambda deve ser simples e legível.

## Funções como Parâmetros (Callbacks)

Em Python, funções são **objetos de primeira classe** — podem ser passadas como argumentos para outras funções:

```python
def aplicar_operacao(a: float, b: float, operacao) -> float:
    return operacao(a, b)

# Passando diferentes operações
soma: float = aplicar_operacao(10, 5, lambda a, b: a + b)
print(f"Soma: {soma}")  # → Soma: 15

subtracao: float = aplicar_operacao(10, 5, lambda a, b: a - b)
print(f"Subtração: {subtracao}")  # → Subtração: 5

multiplicacao: float = aplicar_operacao(10, 5, lambda a, b: a * b)
print(f"Multiplicação: {multiplicacao}")  # → Multiplicação: 50
```

### Exemplo Prático: Processamento de Lista

```python
from typing import Callable

def processar_lista(
    numeros: list[float],
    transformar: Callable[[float], float]
) -> list[float]:
    """Aplica uma transformação a cada elemento da lista."""
    return [transformar(n) for n in numeros]

valores: list[float] = [10, 20, 30, 40, 50]

# Diferentes transformações
dobrados: list[float] = processar_lista(valores, lambda x: x * 2)
print(dobrados)  # → [20, 40, 60, 80, 100]

com_desconto: list[float] = processar_lista(valores, lambda x: x * 0.9)
print(com_desconto)  # → [9.0, 18.0, 27.0, 36.0, 45.0]

raizes: list[float] = processar_lista(valores, lambda x: x ** 0.5)
print(raizes)  # → [3.16..., 4.47..., 5.47..., 6.32..., 7.07...]
```

## Recursão

Recursão é quando uma função **chama a si mesma**. Toda recursão precisa de:

1. **Caso base** — condição que para a recursão
2. **Caso recursivo** — a função chamando a si mesma com dados menores

### Fatorial

O fatorial de n (n!) é: n * (n-1) * (n-2) * ... * 1

```python
def fatorial(n: int) -> int:
    # Caso base
    if n == 0 or n == 1:
        return 1
    # Caso recursivo
    return n * fatorial(n - 1)

print(fatorial(5))   # → 120 (5 * 4 * 3 * 2 * 1)
print(fatorial(0))   # → 1
print(fatorial(10))  # → 3628800
```

### Como a Recursão Funciona?

Vamos rastrear a execução de `fatorial(4)`:

```
fatorial(4)
  → 4 * fatorial(3)
    → 4 * 3 * fatorial(2)
      → 4 * 3 * 2 * fatorial(1)
        → 4 * 3 * 2 * 1  (caso base!)
        → 24
```

### Soma de Lista com Recursão

```python
def soma_recursiva(numeros: list[int]) -> int:
    # Caso base: lista vazia
    if len(numeros) == 0:
        return 0
    # Caso recursivo: primeiro + soma do resto
    return numeros[0] + soma_recursiva(numeros[1:])

print(soma_recursiva([1, 2, 3, 4, 5]))  # → 15
```

### Contagem Regressiva

```python
def contagem_regressiva(n: int) -> None:
    if n <= 0:
        print("Lançar! 🚀")
        return
    print(n)
    contagem_regressiva(n - 1)

contagem_regressiva(5)
# → 5, 4, 3, 2, 1, Lançar! 🚀
```

> **Cuidado:** Python tem um limite padrão de ~1000 chamadas recursivas. Para problemas muito grandes, prefira loops.

## Princípio de Responsabilidade Única (SRP)

Cada função deve fazer **uma coisa e fazer bem**:

```python
# ❌ Ruim — função faz coisas demais
def processar_aluno(nome: str, notas: list[float]) -> None:
    media = sum(notas) / len(notas)
    if media >= 7:
        status = "Aprovado"
    else:
        status = "Reprovado"
    print(f"{nome}: {media:.1f} - {status}")

# ✅ Bom — cada função tem uma responsabilidade
def calcular_media(notas: list[float]) -> float:
    """Calcula a média das notas."""
    return sum(notas) / len(notas)

def classificar(media: float) -> str:
    """Classifica o aluno pela média."""
    return "Aprovado" if media >= 7.0 else "Reprovado"

def exibir_resultado(nome: str, media: float, status: str) -> None:
    """Exibe o resultado formatado."""
    print(f"{nome}: {media:.1f} - {status}")

# Usando — cada peça é reutilizável e testável
notas: list[float] = [8.5, 7.0, 9.2]
media: float = calcular_media(notas)
status: str = classificar(media)
exibir_resultado("Ana", media, status)
```

### Benefícios do SRP

1. **Testabilidade** — você pode testar `calcular_media` separadamente
2. **Reutilização** — `classificar` funciona com qualquer média, não só de alunos
3. **Manutenção** — se a regra de aprovação mudar, só altera uma função
4. **Legibilidade** — o nome da função já diz o que ela faz

## Exemplo Completo: Pipeline de Processamento

```python
from typing import Callable

def pipeline(
    dados: list[float],
    *operacoes: Callable[[list[float]], list[float]]
) -> list[float]:
    """Aplica uma sequência de operações a uma lista."""
    resultado: list[float] = dados
    for operacao in operacoes:
        resultado = operacao(resultado)
    return resultado

# Operações individuais
def filtrar_positivos(nums: list[float]) -> list[float]:
    return [n for n in nums if n > 0]

def dobrar(nums: list[float]) -> list[float]:
    return [n * 2 for n in nums]

def ordenar(nums: list[float]) -> list[float]:
    return sorted(nums)

# Compondo operações
valores: list[float] = [5, -3, 8, -1, 2, 7, -4]
resultado: list[float] = pipeline(valores, filtrar_positivos, dobrar, ordenar)
print(resultado)  # → [4, 10, 14, 16]
```

Funções avançadas tornam seu código mais flexível e expressivo. Com lambda, callbacks e recursão, você pode resolver problemas complexos de forma elegante.
