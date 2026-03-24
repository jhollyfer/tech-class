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

## O que sao metodos funcionais?

Essas funcoes processam listas sem modificar os dados originais. Os dados entram, sao transformados ou filtrados, e saem como dados novos. A lista original fica intacta.

As tres principais sao: `filter()` seleciona elementos, `map()` transforma elementos e `sorted()` ordena elementos.

> [!info]
> `filter()` e `map()` retornam objetos especiais (iteradores). Use `list()` para converter o resultado em lista.

## filter -- seleciona quem passa no teste

O `filter()` recebe uma funcao e uma lista. So passam os itens que retornam `True`:

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares: list[int] = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)    # → [2, 4, 6, 8, 10]
print(numeros)  # → [1, 2, 3, ...] (original intacta!)
```

```python
notas: list[float] = [8.5, 4.0, 7.0, 3.5, 9.2, 6.0]
aprovados: list[float] = list(filter(lambda n: n >= 7.0, notas))
print(aprovados)  # → [8.5, 7.0, 9.2]
```

## map -- transforma cada elemento

O `map()` aplica uma funcao em cada item e retorna os resultados:

```python
numeros: list[int] = [1, 2, 3, 4, 5]
dobros: list[int] = list(map(lambda x: x * 2, numeros))
print(dobros)  # → [2, 4, 6, 8, 10]
```

```python
nomes: list[str] = ["ana", "bruno", "carla"]
maiusculos: list[str] = list(map(lambda n: n.upper(), nomes))
print(maiusculos)  # → ["ANA", "BRUNO", "CARLA"]
```

## Combinando filter + map

Primeiro filtra, depois transforma:

```python
numeros: list[int] = [1, 2, 3, 4, 5]
resultado: list[int] = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numeros)))
print(resultado)  # → [4, 16]
```

> [!info]
> A leitura fica de dentro pra fora: primeiro o `filter` roda, depois o `map` transforma. Se ficar confuso, use list comprehension: `[x ** 2 for x in numeros if x % 2 == 0]`.

## sorted -- ordena sem alterar o original

`sorted()` cria uma lista nova, ordenada:

```python
notas: list[float] = [8.5, 4.0, 7.0, 3.5, 9.2]

crescente: list[float] = sorted(notas)
print(crescente)  # → [3.5, 4.0, 7.0, 8.5, 9.2]
print(notas)      # → [8.5, 4.0, 7.0, 3.5, 9.2] (original intacta!)

decrescente: list[float] = sorted(notas, reverse=True)
print(decrescente)  # → [9.2, 8.5, 7.0, 4.0, 3.5]
```

Com `key` voce define o criterio de ordenacao:

```python
nomes: list[str] = ["Carlos", "ana", "Bruno"]
por_nome: list[str] = sorted(nomes, key=lambda n: n.lower())
print(por_nome)  # → ["ana", "Bruno", "Carlos"]
```

## sort vs sorted

```python
numeros: list[int] = [5, 2, 8, 1, 9]
numeros.sort()       # MUDA a lista original
print(numeros)       # → [1, 2, 5, 8, 9]
```

> [!alerta]
> `sort()` muda a lista original e retorna `None`. `sorted()` cria uma lista nova. Na duvida, use `sorted()` para nao perder os dados originais.

## sum, max, min -- funcoes built-in

Calculos rapidos sem precisar de loop:

```python
notas: list[float] = [8.5, 7.0, 9.2, 6.8, 7.5]

print(sum(notas))   # → 39.0
print(max(notas))   # → 9.2
print(min(notas))   # → 6.8

media: float = sum(notas) / len(notas)
print(f"Media: {media:.1f}")  # → Media: 7.8
```

## Exercicio pratico

Dada uma lista de produtos com nome e preco:

1. Filtre os produtos com preco acima de 50
2. Crie uma lista so com os nomes (use map)
3. Ordene por preco crescente

```python
produtos: list[tuple[str, float]] = [
    ("Teclado", 120.0),
    ("Mouse", 45.0),
    ("Monitor", 890.0),
    ("Cabo USB", 15.0),
    ("Headset", 200.0),
]

# 1. list(filter(lambda p: p[1] > 50, produtos))

# 2. list(map(lambda p: p[0], produtos))

# 3. sorted(produtos, key=lambda p: p[1])
```

> [!sucesso]
> Se voce consegue encadear `filter` e `map`, ja esta pensando de forma funcional. Na proxima aula, vamos criar funcoes proprias com `def`.

## Referencias

- [Funcoes built-in](https://docs.python.org/pt-br/3/library/functions.html) -- documentacao oficial (filter, map, sorted, sum, max, min)
- [Python's filter(): Extract Values From Iterables](https://realpython.com/python-filter-function/) -- guia completo no Real Python
- [Curso Python #16 - Funcoes (Parte 1)](https://www.youtube.com/watch?v=ezfr9d7wd_k) -- Curso em Video
