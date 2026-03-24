---
slug: "for-range"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "Loop For com Range"
subtitulo: "Repetições controladas com for e range()"
descricao: "Aprenda a usar o loop for com range() para criar repetições controladas, contar para frente e para trás, e construir loops aninhados."
ordem: 9
proximosPassos:
  - titulo: "For em Sequências, Break e Continue"
    descricao: "Itere listas, strings e controle o fluxo com break e continue"
  - titulo: "Listas e Tuplas"
    descricao: "Aprenda a trabalhar com coleções de dados em Python"
quiz:
  - pergunta: "O que range(5) gera?"
    opcoes: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1"]
    correta: 1
    explicacao: "✓ range(5) gera os números de 0 até 4 (5 é exclusivo). São 5 números: 0, 1, 2, 3, 4."
    explicacaoErrada: "✗ range(n) começa em 0 e vai até n-1 (o valor final é exclusivo). range(5) = 0, 1, 2, 3, 4."
  - pergunta: "Qual range gera os números 2, 4, 6, 8?"
    opcoes: ["range(2, 8, 2)", "range(2, 9, 2)", "range(2, 10, 2)", "range(1, 8, 2)"]
    correta: 1
    explicacao: "✓ range(2, 9, 2) começa em 2, vai até 8 (9 é exclusivo), pulando de 2 em 2: 2, 4, 6, 8."
    explicacaoErrada: "✗ range(início, fim_exclusivo, passo). Para incluir 8, o fim deve ser 9 (exclusivo). range(2, 9, 2) = 2, 4, 6, 8."
  - pergunta: "Como fazer uma contagem regressiva de 5 até 1 com range?"
    opcoes: ["range(5, 1)", "range(5, 0, -1)", "range(1, 5, -1)", "range(5, 1, 1)"]
    correta: 1
    explicacao: "✓ range(5, 0, -1) começa em 5, vai até 1 (0 é exclusivo), com passo -1: 5, 4, 3, 2, 1."
    explicacaoErrada: "✗ Para contagem regressiva, use passo negativo: range(5, 0, -1). O 0 é exclusivo, então para em 1."
  - pergunta: "O valor final do range é inclusivo ou exclusivo?"
    opcoes: ["Inclusivo", "Exclusivo", "Depende do passo", "Depende do início"]
    correta: 1
    explicacao: "✓ O valor final do range é sempre EXCLUSIVO. range(1, 5) gera 1, 2, 3, 4 — o 5 não está incluído."
    explicacaoErrada: "✗ O valor final é sempre exclusivo em range(). Para incluir o 5, use range(1, 6)."
---

## O loop for

O `for` em Python é usado para repetir um bloco de código um número determinado de vezes ou para percorrer uma sequência de valores.

```python
# Repetir algo 5 vezes
for i in range(5):
    print(f"Repetição {i}")
```

**Saída:**

```
Repetição 0
Repetição 1
Repetição 2
Repetição 3
Repetição 4
```

## A função range()

`range()` gera uma sequência de números inteiros. Ela aceita 1, 2 ou 3 argumentos:

### range(fim) — um argumento

Gera números de **0** até **fim - 1**:

```python
# range(5) → 0, 1, 2, 3, 4
for i in range(5):
    print(i, end=" ")
# → 0 1 2 3 4

# Útil para repetir algo N vezes
for _ in range(3):  # _ indica que não usamos a variável
    print("Python!")
# → Python!
# → Python!
# → Python!
```

### range(início, fim) — dois argumentos

Gera números de **início** até **fim - 1**:

```python
# range(1, 6) → 1, 2, 3, 4, 5
for i in range(1, 6):
    print(i, end=" ")
# → 1 2 3 4 5

# range(10, 15) → 10, 11, 12, 13, 14
for i in range(10, 15):
    print(i, end=" ")
# → 10 11 12 13 14
```

> **Lembre-se:** O valor final é **sempre exclusivo**. Para contar de 1 a 10, use `range(1, 11)`.

### range(início, fim, passo) — três argumentos

Gera números de **início** até **fim - 1**, pulando de **passo** em **passo**:

```python
# De 0 a 10, de 2 em 2 (números pares)
for i in range(0, 11, 2):
    print(i, end=" ")
# → 0 2 4 6 8 10

# De 1 a 10, de 2 em 2 (números ímpares)
for i in range(1, 11, 2):
    print(i, end=" ")
# → 1 3 5 7 9

# De 0 a 100, de 10 em 10
for i in range(0, 101, 10):
    print(i, end=" ")
# → 0 10 20 30 40 50 60 70 80 90 100

# De 5 em 5
for i in range(5, 51, 5):
    print(i, end=" ")
# → 5 10 15 20 25 30 35 40 45 50
```

## Contagem regressiva

Use um **passo negativo** para contar de trás para frente:

```python
# Contagem regressiva de 10 a 1
for i in range(10, 0, -1):
    print(i, end=" ")
print("Lançar!")
# → 10 9 8 7 6 5 4 3 2 1 Lançar!

# De 100 a 0, de 10 em 10
for i in range(100, -1, -10):
    print(i, end=" ")
# → 100 90 80 70 60 50 40 30 20 10 0
```

> **Atenção:** Com passo negativo, o `início` deve ser **maior** que o `fim`. Caso contrário, o range não gera nada:

```python
# Isto não gera nenhum número!
for i in range(1, 10, -1):
    print(i)  # nada acontece (1 < 10, mas passo é -1)
```

## Acumuladores com for

Um padrão muito comum é usar o for para acumular valores:

```python
# Somar números de 1 a 100
soma = 0
for i in range(1, 101):
    soma += i
print(f"Soma de 1 a 100: {soma}")  # → 5050

# Calcular fatorial (5! = 5 × 4 × 3 × 2 × 1)
n = 5
fatorial = 1
for i in range(1, n + 1):
    fatorial *= i
print(f"{n}! = {fatorial}")  # → 5! = 120
```

## Loops aninhados (for dentro de for)

```python
# Tabuada do 1 ao 5
for i in range(1, 6):
    print(f"\n--- Tabuada do {i} ---")
    for j in range(1, 11):
        resultado = i * j
        print(f"{i} x {j:2d} = {resultado:3d}")
```

**Saída (parcial):**

```
--- Tabuada do 1 ---
1 x  1 =   1
1 x  2 =   2
...

--- Tabuada do 2 ---
2 x  1 =   2
2 x  2 =   4
...
```

### Exemplo: Padrão de asteriscos

```python
# Triângulo de asteriscos
n = 5
for i in range(1, n + 1):
    print("*" * i)

# Saída:
# *
# **
# ***
# ****
# *****

# Triângulo invertido
for i in range(n, 0, -1):
    print("*" * i)

# Saída:
# *****
# ****
# ***
# **
# *
```

### Exemplo: Matriz de coordenadas

```python
# Grade 3x3
for linha in range(3):
    for coluna in range(3):
        print(f"({linha},{coluna})", end="  ")
    print()  # nova linha após cada linha da grade

# Saída:
# (0,0)  (0,1)  (0,2)
# (1,0)  (1,1)  (1,2)
# (2,0)  (2,1)  (2,2)
```

## O loop while

Enquanto o `for` repete um número determinado de vezes, o `while` repete **enquanto uma condição for verdadeira**:

```python
# Contagem com while
contador = 1
while contador <= 5:
    print(f"Contagem: {contador}")
    contador += 1
# → Contagem: 1
# → Contagem: 2
# → Contagem: 3
# → Contagem: 4
# → Contagem: 5
```

### while para entrada do usuário

```python
# Repetir até o usuário digitar 'sair'
while True:
    texto = input("Digite algo (ou 'sair'): ")
    if texto == "sair":
        break
    print(f"Você digitou: {texto}")

print("Programa encerrado.")
```

### Cuidado com loops infinitos!

```python
# ❌ Loop infinito — o programa nunca para!
# contador = 1
# while contador <= 5:
#     print(contador)
#     # Esqueceu de incrementar! contador nunca muda

# ✅ Correto — sempre atualize a condição
contador = 1
while contador <= 5:
    print(contador)
    contador += 1  # Essencial!
```

## Exemplo prático: Jogo de adivinhação

```python
# adivinhacao.py — Adivinhe o número secreto

import random

numero_secreto = random.randint(1, 50)
tentativas = 0
max_tentativas = 7

print("=== Jogo de Adivinhação ===")
print(f"Estou pensando em um número de 1 a 50.")
print(f"Você tem {max_tentativas} tentativas.\n")

for tentativa in range(1, max_tentativas + 1):
    palpite = int(input(f"Tentativa {tentativa}/{max_tentativas}: "))

    if palpite == numero_secreto:
        print(f"\nParabéns! Você acertou em {tentativa} tentativa(s)!")
        break
    elif palpite < numero_secreto:
        print("Muito baixo! Tente um número maior.")
    else:
        print("Muito alto! Tente um número menor.")
else:
    # else do for — executa se o loop terminou sem break
    print(f"\nVocê perdeu! O número era {numero_secreto}.")
```

## Resumo

| Conceito | Sintaxe | Exemplo |
| --- | --- | --- |
| range simples | `range(fim)` | `range(5)` → 0,1,2,3,4 |
| range com início | `range(início, fim)` | `range(1, 6)` → 1,2,3,4,5 |
| range com passo | `range(início, fim, passo)` | `range(0, 11, 2)` → 0,2,4,6,8,10 |
| Regressiva | `range(início, fim, -passo)` | `range(5, 0, -1)` → 5,4,3,2,1 |
| while | `while condição:` | Repete enquanto True |
| Variável descartável | `for _ in range(n):` | Quando não usa o índice |
| Fim é **exclusivo** | `range(1, 5)` não inclui 5 | Sempre fim - 1 |
