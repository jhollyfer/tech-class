---
slug: "lists-basics"
modulo: "Módulo 4 — Estruturas de Dados"
titulo: "Listas — Fundamentos"
subtitulo: "Declarando, acessando e modificando listas em Python"
descricao: "Aprenda a criar listas, acessar elementos por índice, usar slicing e métodos de modificação como append, insert, pop e remove."
ordem: 12
proximosPassos:
  - titulo: "Métodos Funcionais com Listas"
    descricao: "Aprenda filter, map, sorted e funções built-in para processar dados"
  - titulo: "Funções — Fundamentos"
    descricao: "Crie funções com def, type hints e parâmetros"
quiz:
  - pergunta: "Qual é o resultado de lista[-1] para lista = [10, 20, 30, 40]?"
    opcoes: ["10", "40", "30", "Erro — índice negativo não existe"]
    correta: 1
    explicacao: "✓ Índices negativos acessam do final para o início. -1 é o último elemento, que neste caso é 40."
    explicacaoErrada: "✗ Em Python, -1 acessa o último elemento da lista. Para lista = [10, 20, 30, 40], lista[-1] retorna 40."
  - pergunta: "O que retorna a expressão numeros[1:4] para numeros = [5, 10, 15, 20, 25]?"
    opcoes: ["[5, 10, 15]", "[10, 15, 20]", "[10, 15, 20, 25]", "[5, 10, 15, 20]"]
    correta: 1
    explicacao: "✓ Slicing [1:4] pega do índice 1 até o 3 (4 não incluso). Ou seja: [10, 15, 20]."
    explicacaoErrada: "✗ No slicing [início:fim], o fim NÃO é incluso. [1:4] retorna os índices 1, 2 e 3: [10, 15, 20]."
  - pergunta: "Qual é a diferença entre append() e insert()?"
    opcoes: ["append() remove e insert() adiciona", "append() adiciona no final, insert() adiciona em posição específica", "São sinônimos — fazem a mesma coisa", "append() adiciona no início, insert() no final"]
    correta: 1
    explicacao: "✓ append(valor) sempre adiciona no final da lista. insert(posição, valor) adiciona na posição indicada."
    explicacaoErrada: "✗ append() adiciona ao final da lista, enquanto insert() permite escolher a posição exata para inserir o elemento."
  - pergunta: "Como verificar se o valor 7 existe na lista numeros?"
    opcoes: ["numeros.contains(7)", "numeros.has(7)", "7 in numeros", "numeros.exists(7)"]
    correta: 2
    explicacao: "✓ O operador in verifica se um valor está presente na lista. Retorna True ou False."
    explicacaoErrada: "✗ Em Python, usamos o operador in: '7 in numeros'. Não existem métodos contains(), has() ou exists() em listas."
---

## O que são Listas?

Listas são a estrutura de dados mais usada em Python. Elas armazenam **coleções ordenadas de elementos** que podem ser acessados, modificados, adicionados e removidos.

Uma lista pode conter qualquer tipo de dado — números, strings, booleanos, ou até outras listas.

## Declarando Listas

```python
# Lista simples
numeros: list[int] = [1, 2, 3, 4, 5]
nomes: list[str] = ["Ana", "Bruno", "Carla"]
notas: list[float] = [8.5, 7.0, 9.2, 6.8]

# Lista vazia
tarefas: list[str] = []

# Lista mista (evitar quando possível — prefira type hints)
mista: list = [1, "texto", True, 3.14]
```

> **Dica:** use **type hints** como `list[int]` para deixar claro qual tipo de dado a lista armazena. Isso ajuda na leitura do código e na detecção de erros.

## Acessando Elementos por Índice

Cada elemento tem uma posição (índice), começando em **0**:

```python
frutas: list[str] = ["maçã", "banana", "laranja", "uva", "manga"]

#                      0        1         2        3       4
#                     -5       -4        -3       -2      -1

print(frutas[0])    # → "maçã"    (primeiro elemento)
print(frutas[2])    # → "laranja" (terceiro elemento)
print(frutas[4])    # → "manga"   (último elemento)
print(frutas[-1])   # → "manga"   (último, usando índice negativo)
print(frutas[-2])   # → "uva"     (penúltimo)
```

### Índices Negativos

Índices negativos contam **do final para o início**:

```python
alunos: list[str] = ["Ana", "Bruno", "Carla", "Diego", "Eva"]

print(alunos[-1])   # → "Eva"    (último)
print(alunos[-2])   # → "Diego"  (penúltimo)
print(alunos[-3])   # → "Carla"  (antepenúltimo)
```

Isso é extremamente útil quando você quer acessar os últimos elementos sem precisar saber o tamanho da lista.

## Tamanho da Lista: len()

A função `len()` retorna a quantidade de elementos:

```python
notas: list[float] = [8.5, 7.0, 9.2, 6.8, 7.5]
print(len(notas))   # → 5

nomes: list[str] = []
print(len(nomes))   # → 0
```

## Slicing — Fatiando Listas

Slicing permite extrair **partes** de uma lista:

```python
# Sintaxe: lista[início:fim:passo]
# início: índice inicial (incluso) — padrão: 0
# fim:    índice final (NÃO incluso) — padrão: len(lista)
# passo:  de quantos em quantos — padrão: 1

numeros: list[int] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

print(numeros[2:5])     # → [20, 30, 40]       (índice 2 até 4)
print(numeros[:4])      # → [0, 10, 20, 30]    (do início até índice 3)
print(numeros[6:])      # → [60, 70, 80, 90]   (do índice 6 até o fim)
print(numeros[::2])     # → [0, 20, 40, 60, 80] (de 2 em 2)
print(numeros[::-1])    # → [90, 80, 70, ..., 0] (lista invertida!)
print(numeros[1:7:2])   # → [10, 30, 50]       (índice 1 a 6, de 2 em 2)
```

### Exemplos Práticos de Slicing

```python
# Três primeiros alunos
turma: list[str] = ["Ana", "Bruno", "Carla", "Diego", "Eva"]
top3: list[str] = turma[:3]
print(top3)  # → ["Ana", "Bruno", "Carla"]

# Últimos dois elementos
ultimos: list[str] = turma[-2:]
print(ultimos)  # → ["Diego", "Eva"]

# Copiar a lista inteira
copia: list[str] = turma[:]
```

## Modificando Listas

Listas são **mutáveis** — você pode alterar seus elementos diretamente:

```python
notas: list[float] = [8.5, 7.0, 9.2, 6.8]

# Alterar um elemento pelo índice
notas[1] = 7.5
print(notas)  # → [8.5, 7.5, 9.2, 6.8]
```

### Métodos de Adição

```python
frutas: list[str] = ["maçã", "banana"]

# append() — adiciona ao FINAL da lista
frutas.append("laranja")
print(frutas)  # → ["maçã", "banana", "laranja"]

# insert(posição, valor) — adiciona em posição ESPECÍFICA
frutas.insert(0, "uva")
print(frutas)  # → ["uva", "maçã", "banana", "laranja"]

frutas.insert(2, "manga")
print(frutas)  # → ["uva", "maçã", "manga", "banana", "laranja"]
```

### Métodos de Remoção

```python
frutas: list[str] = ["maçã", "banana", "laranja", "uva", "banana"]

# pop() — remove e retorna o ÚLTIMO elemento
ultimo: str = frutas.pop()
print(ultimo)   # → "banana"
print(frutas)   # → ["maçã", "banana", "laranja", "uva"]

# pop(índice) — remove e retorna elemento na posição
segundo: str = frutas.pop(1)
print(segundo)  # → "banana"
print(frutas)   # → ["maçã", "laranja", "uva"]

# remove(valor) — remove a PRIMEIRA ocorrência do valor
frutas.remove("laranja")
print(frutas)   # → ["maçã", "uva"]
```

> **Diferença importante:** `pop()` remove por **posição** (índice), enquanto `remove()` remove por **valor**.

## Operador in — Verificando Existência

O operador `in` verifica se um valor está na lista:

```python
cores: list[str] = ["vermelho", "azul", "verde", "amarelo"]

print("azul" in cores)      # → True
print("roxo" in cores)      # → False
print("roxo" not in cores)  # → True

# Usando em condições
cor: str = "verde"
if cor in cores:
    print(f"{cor} está disponível!")
else:
    print(f"{cor} não encontrada.")
```

## Método index() — Encontrando a Posição

```python
animais: list[str] = ["gato", "cachorro", "peixe", "gato"]

posicao: int = animais.index("cachorro")
print(posicao)  # → 1

# index() retorna a PRIMEIRA ocorrência
posicao_gato: int = animais.index("gato")
print(posicao_gato)  # → 0 (não 3!)

# Se o elemento não existir, gera ValueError
# animais.index("leão")  # → ValueError!
```

## Exemplo Prático: Sistema de Notas

```python
# Gerenciando notas de uma turma
notas: list[float] = [8.5, 7.0, 9.2, 6.8, 7.5, 5.0, 8.0]

# Informações básicas
print(f"Total de alunos: {len(notas)}")
print(f"Primeira nota: {notas[0]}")
print(f"Última nota: {notas[-1]}")

# Três melhores (após ordenar)
notas_ordenadas: list[float] = sorted(notas, reverse=True)
top3: list[float] = notas_ordenadas[:3]
print(f"Top 3 notas: {top3}")  # → [9.2, 8.5, 8.0]

# Adicionando uma nota
notas.append(9.8)
print(f"Nova lista: {notas}")

# Verificando se existe nota 10
if 10.0 in notas:
    print("Alguém tirou nota máxima!")
else:
    print("Ninguém tirou 10 ainda.")
```

## Resumo dos Métodos

| Método | O que faz | Exemplo |
| --- | --- | --- |
| `append(x)` | Adiciona x ao final | `lista.append(5)` |
| `insert(i, x)` | Insere x na posição i | `lista.insert(0, 5)` |
| `pop()` | Remove e retorna o último | `lista.pop()` |
| `pop(i)` | Remove e retorna o item na posição i | `lista.pop(2)` |
| `remove(x)` | Remove primeira ocorrência de x | `lista.remove(5)` |
| `index(x)` | Retorna posição de x | `lista.index(5)` |
| `len(lista)` | Retorna o tamanho | `len(lista)` |

Com esses fundamentos, você já consegue trabalhar com listas na maioria das situações. Na próxima aula, vamos aprender métodos funcionais como `filter()`, `map()` e `sorted()` para processar listas de forma avançada.
