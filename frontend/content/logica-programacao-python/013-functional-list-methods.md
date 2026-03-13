---
slug: "functional-list-methods"
modulo: "Módulo 4 — Estruturas de Dados"
titulo: "Métodos Funcionais com Listas"
subtitulo: "filter, map, sorted e funções built-in para processar dados"
descricao: "Aprenda a usar filter(), map(), sorted(), sum(), max() e min() para processar listas sem modificar os dados originais."
ordem: 13
proximosPassos:
  - titulo: "Funções — Fundamentos"
    descricao: "Crie funções com def, type hints e parâmetros"
  - titulo: "Funções Avançadas"
    descricao: "Lambda, callbacks, recursão e boas práticas com funções"
quiz:
  - pergunta: "Qual é a diferença entre filter() e map()?"
    opcoes: ["filter() transforma e map() filtra", "filter() seleciona elementos e map() transforma elementos", "São a mesma coisa com nomes diferentes", "filter() ordena e map() filtra"]
    correta: 1
    explicacao: "✓ filter() seleciona elementos que atendem a uma condição. map() aplica uma transformação a cada elemento."
    explicacaoErrada: "✗ filter() SELECIONA elementos (retorna ou descarta), enquanto map() TRANSFORMA cada elemento (aplica uma função)."
  - pergunta: "Qual é a diferença entre sorted() e sort()?"
    opcoes: ["sorted() modifica a lista original, sort() cria uma nova", "sort() modifica a lista original, sorted() cria uma nova lista", "sorted() só funciona com números, sort() com qualquer tipo", "Não há diferença prática"]
    correta: 1
    explicacao: "✓ sort() modifica a lista original (in-place). sorted() cria e retorna uma NOVA lista ordenada, mantendo a original intacta."
    explicacaoErrada: "✗ sort() altera a lista diretamente (in-place), enquanto sorted() retorna uma nova lista sem modificar a original."
  - pergunta: "O que acontece com a lista original ao usar filter() ou map()?"
    opcoes: ["É modificada automaticamente", "Nada — a lista original permanece inalterada", "É apagada da memória", "É convertida para tupla"]
    correta: 1
    explicacao: "✓ Funções como filter() e map() são imutáveis — elas criam novos objetos sem alterar os dados originais."
    explicacaoErrada: "✗ filter() e map() NUNCA modificam a lista original. Elas retornam novos iteradores, preservando os dados originais."
  - pergunta: "Como obter a soma de todos os elementos de uma lista numeros = [10, 20, 30]?"
    opcoes: ["numeros.soma()", "total(numeros)", "sum(numeros)", "numeros.sum()"]
    correta: 2
    explicacao: "✓ sum() é uma função built-in do Python que retorna a soma de todos os elementos numéricos de um iterável."
    explicacaoErrada: "✗ A função correta é sum(numeros). É uma função built-in, não um método da lista."
---

## Programação Funcional com Listas

Python oferece funções que permitem processar listas de forma declarativa — você descreve **o que** quer fazer, não **como** fazer passo a passo. As principais são `filter()`, `map()` e `sorted()`.

O princípio fundamental dessas funções é a **imutabilidade**: elas **nunca modificam** a lista original. Sempre criam novos dados.

## filter() — Selecionando Elementos

`filter()` recebe uma função que retorna `True` ou `False` e seleciona apenas os elementos que passam no teste:

```python
# Sintaxe: filter(função, iterável)
# Retorna um iterador — use list() para converter

numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filtrar apenas números pares
pares: list[int] = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)     # → [2, 4, 6, 8, 10]
print(numeros)   # → [1, 2, 3, ...] (original inalterada!)
```

### Mais Exemplos com filter()

```python
notas: list[float] = [8.5, 4.0, 7.0, 3.5, 9.2, 6.0, 5.5]

# Notas de aprovação (>= 7.0)
aprovados: list[float] = list(filter(lambda n: n >= 7.0, notas))
print(aprovados)  # → [8.5, 7.0, 9.2]

# Notas de reprovação (< 5.0)
reprovados: list[float] = list(filter(lambda n: n < 5.0, notas))
print(reprovados)  # → [4.0, 3.5]

# Palavras que começam com vogal
palavras: list[str] = ["amor", "brisa", "estrela", "ilha", "nuvem", "oceano"]
com_vogal: list[str] = list(filter(lambda p: p[0] in "aeiou", palavras))
print(com_vogal)  # → ["amor", "estrela", "ilha", "oceano"]
```

## map() — Transformando Elementos

`map()` aplica uma função a **cada elemento** da lista e retorna os resultados transformados:

```python
# Sintaxe: map(função, iterável)

numeros: list[int] = [1, 2, 3, 4, 5]

# Dobrar cada número
dobros: list[int] = list(map(lambda x: x * 2, numeros))
print(dobros)    # → [2, 4, 6, 8, 10]
print(numeros)   # → [1, 2, 3, 4, 5] (original inalterada!)
```

### Mais Exemplos com map()

```python
# Converter para maiúsculas
nomes: list[str] = ["ana", "bruno", "carla"]
maiusculos: list[str] = list(map(lambda n: n.upper(), nomes))
print(maiusculos)  # → ["ANA", "BRUNO", "CARLA"]

# Calcular o quadrado de cada número
valores: list[int] = [3, 7, 2, 9, 5]
quadrados: list[int] = list(map(lambda x: x ** 2, valores))
print(quadrados)  # → [9, 49, 4, 81, 25]

# Formatar notas como string
notas: list[float] = [8.5, 7.0, 9.2]
formatadas: list[str] = list(map(lambda n: f"Nota: {n:.1f}", notas))
print(formatadas)  # → ["Nota: 8.5", "Nota: 7.0", "Nota: 9.2"]
```

## Combinando filter() e map()

Você pode encadear essas funções para criar pipelines de processamento:

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Pegar os pares e calcular o quadrado de cada um
resultado: list[int] = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numeros)))
print(resultado)  # → [4, 16, 36, 64, 100]
```

## sorted() — Ordenando sem Modificar

`sorted()` retorna uma **nova lista** ordenada, sem alterar a original:

```python
notas: list[float] = [8.5, 4.0, 7.0, 3.5, 9.2]

# Ordem crescente (padrão)
crescente: list[float] = sorted(notas)
print(crescente)  # → [3.5, 4.0, 7.0, 8.5, 9.2]

# Ordem decrescente
decrescente: list[float] = sorted(notas, reverse=True)
print(decrescente)  # → [9.2, 8.5, 7.0, 4.0, 3.5]

print(notas)  # → [8.5, 4.0, 7.0, 3.5, 9.2] (original inalterada!)
```

### sorted() vs sort()

```python
numeros: list[int] = [5, 2, 8, 1, 9]

# sort() — modifica a lista original (in-place)
numeros.sort()
print(numeros)  # → [1, 2, 5, 8, 9] (lista foi alterada!)

# sorted() — cria uma nova lista
numeros2: list[int] = [5, 2, 8, 1, 9]
ordenados: list[int] = sorted(numeros2)
print(ordenados)   # → [1, 2, 5, 8, 9] (nova lista)
print(numeros2)    # → [5, 2, 8, 1, 9] (original intacta)
```

### Ordenação Customizada com key

```python
nomes: list[str] = ["Carlos", "ana", "Bruno", "diana"]

# Ordenar ignorando maiúsculas/minúsculas
ordenados: list[str] = sorted(nomes, key=lambda n: n.lower())
print(ordenados)  # → ["ana", "Bruno", "Carlos", "diana"]

# Ordenar por tamanho da string
por_tamanho: list[str] = sorted(nomes, key=lambda n: len(n))
print(por_tamanho)  # → ["ana", "Bruno", "Carlos", "diana"]
```

## Funções Built-in: sum(), max(), min()

Python tem funções embutidas para operações comuns com listas numéricas:

```python
notas: list[float] = [8.5, 7.0, 9.2, 6.8, 7.5]

# Soma de todos os elementos
total: float = sum(notas)
print(f"Soma: {total}")       # → Soma: 39.0

# Maior valor
maior: float = max(notas)
print(f"Maior nota: {maior}") # → Maior nota: 9.2

# Menor valor
menor: float = min(notas)
print(f"Menor nota: {menor}") # → Menor nota: 6.8

# Calcular média
media: float = sum(notas) / len(notas)
print(f"Média: {media:.1f}")  # → Média: 7.8
```

### max() e min() com key

```python
palavras: list[str] = ["sol", "estrela", "lua", "universo"]

# Palavra mais longa
mais_longa: str = max(palavras, key=lambda p: len(p))
print(mais_longa)  # → "universo"

# Palavra mais curta
mais_curta: str = min(palavras, key=lambda p: len(p))
print(mais_curta)  # → "sol"
```

## Comparação: Funcional vs List Comprehension

List comprehension é geralmente considerada mais **pythônica** e legível:

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# ✅ filter + map
pares_dobro: list[int] = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 0, numeros)))

# ✅ List comprehension (mais legível)
pares_dobro: list[int] = [x * 2 for x in numeros if x % 2 == 0]

# Ambos produzem: [4, 8, 12, 16, 20]
```

> **Quando usar cada um?** List comprehension é preferida na maioria dos casos por ser mais legível. Use `filter()`/`map()` quando estiver compondo funções ou trabalhando com funções já existentes.

## Resumo

| Função | O que faz | Modifica original? |
| --- | --- | --- |
| `filter(fn, lista)` | Seleciona elementos | Não |
| `map(fn, lista)` | Transforma elementos | Não |
| `sorted(lista)` | Ordena elementos | Não |
| `lista.sort()` | Ordena elementos | **Sim** |
| `sum(lista)` | Soma todos | Não |
| `max(lista)` | Retorna o maior | Não |
| `min(lista)` | Retorna o menor | Não |

O princípio de imutabilidade torna seu código mais seguro e previsível — você sempre sabe que os dados originais estão preservados.
