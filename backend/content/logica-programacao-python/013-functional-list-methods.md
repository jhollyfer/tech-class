---
slug: "functional-list-methods"
modulo: "Módulo 4 — Estruturas de Dados"
titulo: "Métodos Funcionais com Listas"
subtitulo: "filter, map, sorted e funções built-in"
descricao: "Use filter(), map(), sorted(), sum(), max() e min() para processar listas sem alterar os dados originais."
ordem: 13
proximosPassos:
  - titulo: "Funções — Fundamentos"
    descricao: "Crie funções com def, type hints e parâmetros"
  - titulo: "Funções Avançadas"
    descricao: "Lambda, callbacks, recursão e boas práticas"
quiz:
  - pergunta: "Qual é a diferença entre filter() e map()?"
    opcoes: ["filter() transforma e map() filtra", "filter() seleciona elementos e map() transforma elementos", "São a mesma coisa com nomes diferentes", "filter() ordena e map() filtra"]
    correta: 1
    explicacao: "filter() seleciona quem passa no teste. map() transforma cada elemento."
    explicacaoErrada: "filter() = selecionar. map() = transformar. São coisas diferentes."
  - pergunta: "Qual é a diferença entre sorted() e sort()?"
    opcoes: ["sorted() modifica a lista original, sort() cria uma nova", "sort() modifica a lista original, sorted() cria uma nova lista", "sorted() só funciona com números, sort() com qualquer tipo", "Não há diferença prática"]
    correta: 1
    explicacao: "sort() muda a lista original. sorted() cria uma lista nova."
    explicacaoErrada: "sort() altera a lista direto. sorted() retorna uma lista nova."
  - pergunta: "O que acontece com a lista original ao usar filter() ou map()?"
    opcoes: ["É modificada automaticamente", "Nada — a lista original permanece inalterada", "É apagada da memória", "É convertida para tupla"]
    correta: 1
    explicacao: "filter() e map() nunca alteram a lista original."
    explicacaoErrada: "Essas funções criam dados novos. A lista original fica intacta."
  - pergunta: "Como somar todos os elementos de numeros = [10, 20, 30]?"
    opcoes: ["numeros.soma()", "total(numeros)", "sum(numeros)", "numeros.sum()"]
    correta: 2
    explicacao: "sum() é uma função built-in que soma todos os elementos."
    explicacaoErrada: "Use sum(numeros). É uma função do Python, não um método da lista."
---

## Ideia Central

Essas funções processam listas **sem modificar os dados originais**. Pense nelas como máquinas numa linha de produção: os dados entram, são processados, e saem novos dados.

## filter() — Selecionar

Passa uma função que retorna True/False. Só quem passa no teste fica:

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares: list[int] = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)     # → [2, 4, 6, 8, 10]
print(numeros)   # → [1, 2, 3, ...] (original intacta!)
```

```python
notas: list[float] = [8.5, 4.0, 7.0, 3.5, 9.2, 6.0, 5.5]

aprovados: list[float] = list(filter(lambda n: n >= 7.0, notas))
print(aprovados)  # → [8.5, 7.0, 9.2]

palavras: list[str] = ["amor", "brisa", "estrela", "ilha", "nuvem", "oceano"]
com_vogal: list[str] = list(filter(lambda p: p[0] in "aeiou", palavras))
print(com_vogal)  # → ["amor", "estrela", "ilha", "oceano"]
```

## map() — Transformar

Aplica uma função a **cada elemento** e retorna os resultados:

```python
numeros: list[int] = [1, 2, 3, 4, 5]

dobros: list[int] = list(map(lambda x: x * 2, numeros))
print(dobros)    # → [2, 4, 6, 8, 10]
print(numeros)   # → [1, 2, 3, 4, 5] (original intacta!)
```

```python
nomes: list[str] = ["ana", "bruno", "carla"]
maiusculos: list[str] = list(map(lambda n: n.upper(), nomes))
print(maiusculos)  # → ["ANA", "BRUNO", "CARLA"]

notas: list[float] = [8.5, 7.0, 9.2]
formatadas: list[str] = list(map(lambda n: f"Nota: {n:.1f}", notas))
print(formatadas)  # → ["Nota: 8.5", "Nota: 7.0", "Nota: 9.2"]
```

## Combinando filter() + map()

Primeiro filtra, depois transforma:

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Pegar pares e elevar ao quadrado
resultado: list[int] = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numeros)))
print(resultado)  # → [4, 16, 36, 64, 100]
```

## sorted() — Ordenar sem Alterar

Retorna uma **lista nova** ordenada:

```python
notas: list[float] = [8.5, 4.0, 7.0, 3.5, 9.2]

crescente: list[float] = sorted(notas)
print(crescente)  # → [3.5, 4.0, 7.0, 8.5, 9.2]

decrescente: list[float] = sorted(notas, reverse=True)
print(decrescente)  # → [9.2, 8.5, 7.0, 4.0, 3.5]

print(notas)  # → [8.5, 4.0, 7.0, 3.5, 9.2] (original intacta!)
```

### sorted() vs sort()

```python
numeros: list[int] = [5, 2, 8, 1, 9]

# sort() — MUDA a lista original
numeros.sort()
print(numeros)  # → [1, 2, 5, 8, 9] (mudou!)

# sorted() — CRIA lista nova
numeros2: list[int] = [5, 2, 8, 1, 9]
ordenados: list[int] = sorted(numeros2)
print(numeros2)    # → [5, 2, 8, 1, 9] (não mudou)
```

> [!alerta] `sort()` muda a lista original. `sorted()` cria uma nova. Na dúvida, use `sorted()`.

### Ordenação com key

```python
nomes: list[str] = ["Carlos", "ana", "Bruno", "diana"]

# Ignorar maiúsculas
ordenados: list[str] = sorted(nomes, key=lambda n: n.lower())
print(ordenados)  # → ["ana", "Bruno", "Carlos", "diana"]

# Por tamanho
por_tamanho: list[str] = sorted(nomes, key=lambda n: len(n))
print(por_tamanho)  # → ["ana", "Bruno", "Carlos", "diana"]
```

## sum(), max(), min()

Funções prontas do Python:

```python
notas: list[float] = [8.5, 7.0, 9.2, 6.8, 7.5]

print(sum(notas))   # → 39.0
print(max(notas))   # → 9.2
print(min(notas))   # → 6.8

media: float = sum(notas) / len(notas)
print(f"Média: {media:.1f}")  # → Média: 7.8
```

```python
palavras: list[str] = ["sol", "estrela", "lua", "universo"]

mais_longa: str = max(palavras, key=lambda p: len(p))
print(mais_longa)  # → "universo"

mais_curta: str = min(palavras, key=lambda p: len(p))
print(mais_curta)  # → "sol"
```

## Funcional vs List Comprehension

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# filter + map
pares_dobro: list[int] = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 0, numeros)))

# List comprehension (mais legível)
pares_dobro: list[int] = [x * 2 for x in numeros if x % 2 == 0]

# Ambos: [4, 8, 12, 16, 20]
```

> [!info] List comprehension costuma ser mais legível. Use filter/map quando já tiver funções prontas.

## Resumo

| Função | O que faz | Altera original? |
| --- | --- | --- |
| `filter(fn, lista)` | Seleciona elementos | Não |
| `map(fn, lista)` | Transforma elementos | Não |
| `sorted(lista)` | Ordena elementos | Não |
| `lista.sort()` | Ordena elementos | **Sim** |
| `sum(lista)` | Soma todos | Não |
| `max(lista)` | Retorna o maior | Não |
| `min(lista)` | Retorna o menor | Não |