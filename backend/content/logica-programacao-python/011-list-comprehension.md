---
slug: "list-comprehension"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "List Comprehension"
subtitulo: "Crie listas em uma linha só"
descricao: "Aprenda a criar e filtrar listas de forma rápida usando list comprehension."
ordem: 11
proximosPassos:
  - titulo: "Listas — Fundamentos"
    descricao: "Aprenda a criar, acessar e modificar listas"
  - titulo: "Métodos Funcionais com Listas"
    descricao: "Use filter, map e sorted para processar dados"
quiz:
  - pergunta: "Qual é a sintaxe correta de list comprehension?"
    opcoes: ["[for x in lista: x * 2]", "[x * 2 for x in lista]", "list(x * 2, for x in lista)", "[x * 2 in lista for x]"]
    correta: 1
    explicacao: "A expressão vem primeiro, depois o for: [x * 2 for x in lista]."
    explicacaoErrada: "A expressão vem antes do for: [x * 2 for x in lista]."
  - pergunta: "Como filtrar só números pares com list comprehension?"
    opcoes: ["[x for x in lista if x % 2 == 0]", "[x % 2 == 0 for x in lista]", "[if x % 2 == 0 for x in lista]", "[x for x in lista where x % 2 == 0]"]
    correta: 0
    explicacao: "O if vem no final: [x for x in lista if x % 2 == 0]."
    explicacaoErrada: "Para filtrar, o if vai no final. E Python não tem where."
  - pergunta: "Qual o equivalente com for tradicional?"
    opcoes: ["resultado = lista.map(lambda x: x * 2)", "resultado = []; for x in lista: resultado += x * 2", "resultado = []\nfor x in lista:\n    resultado.append(x * 2)", "resultado = for x in lista: x * 2"]
    correta: 2
    explicacao: "O padrão tradicional: lista vazia + for + append."
    explicacaoErrada: "O equivalente usa lista vazia + for + append."
  - pergunta: "O que produz {x: x**2 for x in range(4)}?"
    opcoes: ["[0, 1, 4, 9]", "{0: 0, 1: 1, 2: 4, 3: 9}", "{0, 1, 4, 9}", "Erro de sintaxe"]
    correta: 1
    explicacao: "Com chaves e chave: valor, cria um dicionário."
    explicacaoErrada: "Chaves {} com chave: valor = dicionário, não lista."
---

## O que é List Comprehension?

Pense numa fábrica: matéria-prima entra, produto sai. List comprehension faz isso com listas -- transforma ou filtra dados em **uma linha**.

## Sintaxe Básica

```python
nova_lista = [expressão for variável in iterável]
```

```python
quadrados: list[int] = [x ** 2 for x in range(1, 6)]
print(quadrados)  # → [1, 4, 9, 16, 25]

celsius: list[float] = [0, 20, 37, 100]
fahrenheit: list[float] = [(c * 9/5) + 32 for c in celsius]
print(fahrenheit)  # → [32.0, 68.0, 98.6, 212.0]

nomes: list[str] = ["ana", "carlos", "bia"]
saudacoes: list[str] = [f"Olá, {nome.title()}!" for nome in nomes]
print(saudacoes)  # → ['Olá, Ana!', 'Olá, Carlos!', 'Olá, Bia!']
```

## Com Filtro (if)

Adicione `if` no final para filtrar:

```python
nova_lista = [expressão for variável in iterável if condição]
```

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares: list[int] = [x for x in numeros if x % 2 == 0]
print(pares)  # → [2, 4, 6, 8, 10]

maiores: list[int] = [x for x in numeros if x > 5]
print(maiores)  # → [6, 7, 8, 9, 10]

palavras: list[str] = ["sol", "lua", "estrela", "céu", "universo"]
longas: list[str] = [p for p in palavras if len(p) > 3]
print(longas)  # → ['estrela', 'universo']
```

## For Tradicional vs Comprehension

```python
# For tradicional (4 linhas)
quadrados: list[int] = []
for x in range(1, 11):
    if x % 2 == 0:
        quadrados.append(x ** 2)

# List comprehension (1 linha)
quadrados: list[int] = [x ** 2 for x in range(1, 11) if x % 2 == 0]

# Ambos: [4, 16, 36, 64, 100]
```

> [!sucesso] List comprehension é o jeito "pythônico" de escrever. Mais curto e mais legível.

## Com if/else (Ternário)

Quando o `if/else` vem **antes** do `for`, é uma escolha entre dois valores:

```python
numeros: list[int] = [1, 2, 3, 4, 5]

classificacao: list[str] = ["par" if x % 2 == 0 else "ímpar" for x in numeros]
print(classificacao)  # → ['ímpar', 'par', 'ímpar', 'par', 'ímpar']

valores: list[int] = [10, -3, 5, -7, 8]
positivos: list[int] = [x if x > 0 else 0 for x in valores]
print(positivos)  # → [10, 0, 5, 0, 8]
```

> [!alerta] `if` **depois** do for = filtro. `if/else` **antes** do for = escolha entre dois valores.

## Comprehensions Aninhadas

Para listas dentro de listas:

```python
matriz: list[list[int]] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
plana: list[int] = [num for linha in matriz for num in linha]
print(plana)  # → [1, 2, 3, 4, 5, 6, 7, 8, 9]

coordenadas: list[tuple[int, int]] = [(x, y) for x in range(3) for y in range(3)]
print(coordenadas)
# → [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

## Dict e Set Comprehension

Mesma ideia, mas com `{}`:

```python
# Dict — mapear palavras ao tamanho
palavras: list[str] = ["python", "é", "incrível"]
tamanhos: dict[str, int] = {p: len(p) for p in palavras}
print(tamanhos)  # → {'python': 6, 'é': 1, 'incrível': 8}

# Set — valores únicos
numeros: list[int] = [1, 2, 2, 3, 3, 3, 4]
unicos: set[int] = {x for x in numeros}
print(unicos)  # → {1, 2, 3, 4}

# Dict com filtro
notas: dict[str, float] = {"Ana": 9.5, "Bruno": 6.0, "Carla": 4.5, "Diego": 8.0}
aprovados: dict[str, float] = {nome: nota for nome, nota in notas.items() if nota >= 7.0}
print(aprovados)  # → {'Ana': 9.5, 'Diego': 8.0}
```

## Quando NÃO Usar

Se ficou difícil de ler, use `for` tradicional:

```python
# Difícil de ler
resultado = [f(x) for x in dados if g(x) > 0 for y in h(x) if y != z]

# Melhor assim
resultado = []
for x in dados:
    if g(x) > 0:
        for y in h(x):
            if y != z:
                resultado.append(f(x))
```

> [!info] Regra: se não cabe em uma linha confortável, use for tradicional.

## Resumo

| Padrão | Sintaxe |
| --- | --- |
| Básico | `[expr for x in iterável]` |
| Com filtro | `[expr for x in iterável if cond]` |
| Com ternário | `[expr1 if cond else expr2 for x in iterável]` |
| Aninhado | `[expr for x in iter1 for y in iter2]` |
| Dict | `{chave: valor for x in iterável}` |
| Set | `{expr for x in iterável}` |