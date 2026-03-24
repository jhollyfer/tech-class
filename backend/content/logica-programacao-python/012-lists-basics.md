---
slug: "lists-basics"
modulo: "Módulo 4 — Estruturas de Dados"
titulo: "Listas — Fundamentos"
subtitulo: "Crie, acesse e modifique listas em Python"
descricao: "Aprenda a criar listas, acessar por índice, fatiar com slicing e usar append, pop, remove."
ordem: 12
proximosPassos:
  - titulo: "Métodos Funcionais com Listas"
    descricao: "Use filter, map e sorted para processar dados"
  - titulo: "Funções — Fundamentos"
    descricao: "Crie funções com def, type hints e parâmetros"
quiz:
  - pergunta: "Qual é o resultado de lista[-1] para lista = [10, 20, 30, 40]?"
    opcoes: ["10", "40", "30", "Erro — índice negativo não existe"]
    correta: 1
    explicacao: "Índice -1 é o último elemento: 40."
    explicacaoErrada: "Em Python, -1 acessa o último elemento da lista."
  - pergunta: "O que retorna numeros[1:4] para numeros = [5, 10, 15, 20, 25]?"
    opcoes: ["[5, 10, 15]", "[10, 15, 20]", "[10, 15, 20, 25]", "[5, 10, 15, 20]"]
    correta: 1
    explicacao: "Slicing [1:4] pega índice 1 até 3 (o 4 não entra): [10, 15, 20]."
    explicacaoErrada: "No slicing, o fim não é incluso. [1:4] = índices 1, 2, 3."
  - pergunta: "Qual é a diferença entre append() e insert()?"
    opcoes: ["append() remove e insert() adiciona", "append() adiciona no final, insert() adiciona em posição específica", "São sinônimos — fazem a mesma coisa", "append() adiciona no início, insert() no final"]
    correta: 1
    explicacao: "append(valor) = final. insert(posição, valor) = onde você quiser."
    explicacaoErrada: "append() vai pro final, insert() vai na posição que você escolher."
  - pergunta: "Como verificar se o valor 7 existe na lista numeros?"
    opcoes: ["numeros.contains(7)", "numeros.has(7)", "7 in numeros", "numeros.exists(7)"]
    correta: 2
    explicacao: "O operador in verifica se um valor está na lista."
    explicacaoErrada: "Em Python, use o operador in: '7 in numeros'."
---

## O que são Listas?

Lista é como uma gaveta com divisórias. Cada divisória guarda um item e tem um número (índice).

Você pode guardar qualquer coisa: números, textos, booleanos, até outras listas.

## Criando Listas

```python
numeros: list[int] = [1, 2, 3, 4, 5]
nomes: list[str] = ["Ana", "Bruno", "Carla"]
notas: list[float] = [8.5, 7.0, 9.2, 6.8]

# Lista vazia
tarefas: list[str] = []
```

> [!info] Use type hints como `list[int]` para deixar claro o tipo de dado da lista.

## Acessando por Índice

Índices começam em **0**:

```python
frutas: list[str] = ["maçã", "banana", "laranja", "uva", "manga"]
#                      0        1         2        3       4
#                     -5       -4        -3       -2      -1

print(frutas[0])    # → "maçã"
print(frutas[2])    # → "laranja"
print(frutas[-1])   # → "manga"    (último)
print(frutas[-2])   # → "uva"      (penúltimo)
```

> [!info] Índices negativos contam de trás pra frente. -1 = último, -2 = penúltimo.

## Tamanho da Lista

```python
notas: list[float] = [8.5, 7.0, 9.2, 6.8, 7.5]
print(len(notas))   # → 5
```

## Slicing — Fatiando Listas

Slicing corta um pedaço da lista:

```python
# lista[início:fim:passo]
# início = incluso, fim = NÃO incluso

numeros: list[int] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

print(numeros[2:5])     # → [20, 30, 40]
print(numeros[:4])      # → [0, 10, 20, 30]
print(numeros[6:])      # → [60, 70, 80, 90]
print(numeros[::2])     # → [0, 20, 40, 60, 80]
print(numeros[::-1])    # → [90, 80, 70, ..., 0]  (invertida!)
```

```python
turma: list[str] = ["Ana", "Bruno", "Carla", "Diego", "Eva"]

top3: list[str] = turma[:3]       # → ["Ana", "Bruno", "Carla"]
ultimos: list[str] = turma[-2:]   # → ["Diego", "Eva"]
copia: list[str] = turma[:]       # cópia da lista inteira
```

## Modificando Listas

Listas são **mutáveis** -- dá pra mudar direto:

```python
notas: list[float] = [8.5, 7.0, 9.2, 6.8]
notas[1] = 7.5
print(notas)  # → [8.5, 7.5, 9.2, 6.8]
```

### Adicionando

```python
frutas: list[str] = ["maçã", "banana"]

# append() — adiciona no FINAL
frutas.append("laranja")
print(frutas)  # → ["maçã", "banana", "laranja"]

# insert(posição, valor) — adiciona ONDE você quiser
frutas.insert(0, "uva")
print(frutas)  # → ["uva", "maçã", "banana", "laranja"]
```

### Removendo

```python
frutas: list[str] = ["maçã", "banana", "laranja", "uva", "banana"]

# pop() — remove o ÚLTIMO e retorna ele
ultimo: str = frutas.pop()
print(ultimo)   # → "banana"
print(frutas)   # → ["maçã", "banana", "laranja", "uva"]

# pop(índice) — remove pela POSIÇÃO
segundo: str = frutas.pop(1)
print(segundo)  # → "banana"

# remove(valor) — remove pelo VALOR (primeira ocorrência)
frutas.remove("laranja")
print(frutas)   # → ["maçã", "uva"]
```

> [!alerta] `pop()` remove por posição. `remove()` remove por valor. Não confunda!

## Operador in

Verifica se algo existe na lista:

```python
cores: list[str] = ["vermelho", "azul", "verde", "amarelo"]

print("azul" in cores)      # → True
print("roxo" in cores)      # → False
print("roxo" not in cores)  # → True

cor: str = "verde"
if cor in cores:
    print(f"{cor} está disponível!")
```

## Método index()

Encontra a posição de um valor:

```python
animais: list[str] = ["gato", "cachorro", "peixe", "gato"]

print(animais.index("cachorro"))  # → 1
print(animais.index("gato"))      # → 0  (primeira ocorrência)

# Se não existir, dá ValueError
# animais.index("leão")  # → ValueError!
```

## Resumo

| Método | O que faz |
| --- | --- |
| `append(x)` | Adiciona x no final |
| `insert(i, x)` | Insere x na posição i |
| `pop()` | Remove e retorna o último |
| `pop(i)` | Remove e retorna o item na posição i |
| `remove(x)` | Remove primeira ocorrência de x |
| `index(x)` | Retorna posição de x |
| `len(lista)` | Retorna o tamanho |