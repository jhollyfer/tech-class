---
slug: "list-comprehension"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "List Comprehension"
subtitulo: "Criando listas de forma elegante em uma linha"
descricao: "Aprenda a usar list comprehension para criar e transformar listas de forma concisa e pythônica."
ordem: 11
proximosPassos:
  - titulo: "Listas — Fundamentos"
    descricao: "Domine a declaração, acesso e modificação de listas em Python"
  - titulo: "Métodos Funcionais com Listas"
    descricao: "Aprenda filter, map, sorted e outras funções para processar dados"
quiz:
  - pergunta: "Qual é a sintaxe correta de uma list comprehension básica?"
    opcoes: ["[for x in lista: x * 2]", "[x * 2 for x in lista]", "list(x * 2, for x in lista)", "[x * 2 in lista for x]"]
    correta: 1
    explicacao: "✓ A sintaxe correta é [expressão for variável in iterável]. A expressão vem primeiro, depois o for."
    explicacaoErrada: "✗ Em list comprehension, a expressão vem antes do for: [x * 2 for x in lista]."
  - pergunta: "Como filtrar apenas números pares de uma lista usando list comprehension?"
    opcoes: ["[x for x in lista if x % 2 == 0]", "[x % 2 == 0 for x in lista]", "[if x % 2 == 0 for x in lista]", "[x for x in lista where x % 2 == 0]"]
    correta: 0
    explicacao: "✓ A condição if vem no final da comprehension: [x for x in lista if x % 2 == 0]."
    explicacaoErrada: "✗ Para filtrar, adicionamos if no final: [x for x in lista if x % 2 == 0]. A palavra where não existe em Python."
  - pergunta: "Qual é o equivalente de list comprehension usando for tradicional?"
    opcoes: ["resultado = lista.map(lambda x: x * 2)", "resultado = []; for x in lista: resultado += x * 2", "resultado = []\nfor x in lista:\n    resultado.append(x * 2)", "resultado = for x in lista: x * 2"]
    correta: 2
    explicacao: "✓ O padrão tradicional é criar uma lista vazia, iterar com for e usar append para cada elemento."
    explicacaoErrada: "✗ O equivalente tradicional usa uma lista vazia + for + append. List comprehension simplifica esse padrão."
  - pergunta: "O que produz a expressão {x: x**2 for x in range(4)}?"
    opcoes: ["[0, 1, 4, 9]", "{0: 0, 1: 1, 2: 4, 3: 9}", "{0, 1, 4, 9}", "Erro de sintaxe"]
    correta: 1
    explicacao: "✓ Usando chaves com x: valor, criamos um dict comprehension. Cada chave é mapeada ao seu quadrado."
    explicacaoErrada: "✗ Com chaves {} e a sintaxe chave: valor, criamos um dicionário (dict comprehension), não uma lista."
---

## O que é List Comprehension?

List comprehension é uma das funcionalidades mais poderosas e elegantes do Python. Ela permite criar listas novas a partir de iteráveis existentes em **uma única linha de código**.

Em vez de escrever várias linhas com `for` e `append`, você condensa tudo em uma expressão clara e concisa.

## Sintaxe Básica

A estrutura fundamental é:

```python
nova_lista = [expressão for variável in iterável]
```

Vamos ver na prática:

```python
# Criar uma lista com os quadrados de 1 a 5
quadrados: list[int] = [x ** 2 for x in range(1, 6)]
print(quadrados)  # → [1, 4, 9, 16, 25]

# Converter temperaturas de Celsius para Fahrenheit
celsius: list[float] = [0, 20, 37, 100]
fahrenheit: list[float] = [(c * 9/5) + 32 for c in celsius]
print(fahrenheit)  # → [32.0, 68.0, 98.6, 212.0]

# Criar lista de strings formatadas
nomes: list[str] = ["ana", "carlos", "bia"]
saudacoes: list[str] = [f"Olá, {nome.title()}!" for nome in nomes]
print(saudacoes)  # → ['Olá, Ana!', 'Olá, Carlos!', 'Olá, Bia!']
```

## Comprehension com Condição (Filtro)

Você pode adicionar uma condição `if` para filtrar elementos:

```python
nova_lista = [expressão for variável in iterável if condição]
```

Exemplos práticos:

```python
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Apenas números pares
pares: list[int] = [x for x in numeros if x % 2 == 0]
print(pares)  # → [2, 4, 6, 8, 10]

# Apenas números maiores que 5
maiores: list[int] = [x for x in numeros if x > 5]
print(maiores)  # → [6, 7, 8, 9, 10]

# Palavras com mais de 3 letras
palavras: list[str] = ["sol", "lua", "estrela", "céu", "universo"]
longas: list[str] = [p for p in palavras if len(p) > 3]
print(longas)  # → ['estrela', 'universo']
```

## Comparação: For Tradicional vs Comprehension

Veja como o mesmo resultado fica mais conciso com list comprehension:

```python
# ❌ Abordagem tradicional (4 linhas)
quadrados: list[int] = []
for x in range(1, 11):
    if x % 2 == 0:
        quadrados.append(x ** 2)

# ✅ List comprehension (1 linha)
quadrados: list[int] = [x ** 2 for x in range(1, 11) if x % 2 == 0]

# Ambos produzem: [4, 16, 36, 64, 100]
```

A list comprehension é mais **pythônica** — é o jeito que desenvolvedores Python experientes escrevem código.

## Comprehension com Expressão Condicional

Você também pode usar `if/else` na **expressão** (antes do `for`):

```python
numeros: list[int] = [1, 2, 3, 4, 5]

# Classificar cada número como par ou ímpar
classificacao: list[str] = ["par" if x % 2 == 0 else "ímpar" for x in numeros]
print(classificacao)  # → ['ímpar', 'par', 'ímpar', 'par', 'ímpar']

# Substituir negativos por zero
valores: list[int] = [10, -3, 5, -7, 8]
positivos: list[int] = [x if x > 0 else 0 for x in valores]
print(positivos)  # → [10, 0, 5, 0, 8]
```

> **Atenção:** quando o `if/else` vem **antes** do `for`, é uma expressão condicional (ternário). Quando o `if` vem **depois** do `for`, é um filtro.

## Comprehensions Aninhadas

Para trabalhar com estruturas bidimensionais:

```python
# Achatar uma matriz (lista de listas)
matriz: list[list[int]] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
plana: list[int] = [num for linha in matriz for num in linha]
print(plana)  # → [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Criar pares de coordenadas
coordenadas: list[tuple[int, int]] = [(x, y) for x in range(3) for y in range(3)]
print(coordenadas)
# → [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

## Dict e Set Comprehension

A mesma ideia funciona para dicionários e conjuntos:

```python
# Dict comprehension — mapear palavras ao seu tamanho
palavras: list[str] = ["python", "é", "incrível"]
tamanhos: dict[str, int] = {p: len(p) for p in palavras}
print(tamanhos)  # → {'python': 6, 'é': 1, 'incrível': 8}

# Set comprehension — valores únicos
numeros: list[int] = [1, 2, 2, 3, 3, 3, 4]
unicos: set[int] = {x for x in numeros}
print(unicos)  # → {1, 2, 3, 4}

# Dict com filtro
notas: dict[str, float] = {"Ana": 9.5, "Bruno": 6.0, "Carla": 4.5, "Diego": 8.0}
aprovados: dict[str, float] = {nome: nota for nome, nota in notas.items() if nota >= 7.0}
print(aprovados)  # → {'Ana': 9.5, 'Diego': 8.0}
```

## Quando NÃO Usar List Comprehension

Nem sempre list comprehension é a melhor escolha:

```python
# ❌ Comprehension muito complexa — difícil de ler
resultado = [f(x) for x in dados if g(x) > 0 for y in h(x) if y != z]

# ✅ Melhor usar for tradicional quando a lógica é complexa
resultado = []
for x in dados:
    if g(x) > 0:
        for y in h(x):
            if y != z:
                resultado.append(f(x))
```

**Regra prática:** se a comprehension não cabe confortavelmente em uma linha, use `for` tradicional.

## Resumo

| Padrão | Sintaxe |
| --- | --- |
| Básico | `[expr for x in iterável]` |
| Com filtro | `[expr for x in iterável if cond]` |
| Com ternário | `[expr1 if cond else expr2 for x in iterável]` |
| Aninhado | `[expr for x in iter1 for y in iter2]` |
| Dict | `{chave: valor for x in iterável}` |
| Set | `{expr for x in iterável}` |

List comprehension é uma ferramenta essencial no Python. Domine essa sintaxe e seu código ficará mais limpo, legível e eficiente.
