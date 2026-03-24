---
slug: "for-range"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "Loop For com Range"
subtitulo: "Repetições controladas com for e range()"
descricao: "Use for com range() para repetir código, contar pra frente e pra trás, e fazer loops aninhados."
ordem: 9
proximosPassos:
  - titulo: "For em Sequências, Break e Continue"
    descricao: "Percorra listas, strings e controle o loop com break e continue"
  - titulo: "Listas e Tuplas"
    descricao: "Trabalhe com coleções de dados"
quiz:
  - pergunta: "O que range(5) gera?"
    opcoes: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1"]
    correta: 1
    explicacao: "range(5) gera 0, 1, 2, 3, 4. Começa em 0, o 5 fica de fora."
    explicacaoErrada: "range(n) vai de 0 até n-1. range(5) = 0, 1, 2, 3, 4."
  - pergunta: "Qual range gera 2, 4, 6, 8?"
    opcoes: ["range(2, 8, 2)", "range(2, 9, 2)", "range(2, 10, 2)", "range(1, 8, 2)"]
    correta: 1
    explicacao: "range(2, 9, 2): começa em 2, vai até 8 (9 fica fora), de 2 em 2."
    explicacaoErrada: "range(inicio, fim_exclusivo, passo). Para incluir 8, o fim deve ser 9."
  - pergunta: "Como contar de 5 até 1?"
    opcoes: ["range(5, 1)", "range(5, 0, -1)", "range(1, 5, -1)", "range(5, 1, 1)"]
    correta: 1
    explicacao: "range(5, 0, -1) = 5, 4, 3, 2, 1. O 0 fica de fora."
    explicacaoErrada: "Para contar pra trás, use passo negativo: range(5, 0, -1)."
  - pergunta: "O valor final do range é inclusivo ou exclusivo?"
    opcoes: ["Inclusivo", "Exclusivo", "Depende do passo", "Depende do início"]
    correta: 1
    explicacao: "Sempre exclusivo. range(1, 5) gera 1, 2, 3, 4. O 5 fica de fora."
    explicacaoErrada: "O fim é sempre exclusivo. Para incluir o 5, use range(1, 6)."
---

## O loop for

`for` repete um bloco de código. Pense nele como "para cada número de 0 a 4, faça isso":

```python
for i in range(5):
    print(f"Repetição {i}")
# → Repetição 0
# → Repetição 1
# → Repetição 2
# → Repetição 3
# → Repetição 4
```

## range() — gerando sequências de números

### range(fim) — um argumento

Gera de **0** até **fim - 1**:

```python
for i in range(5):
    print(i, end=" ")
# → 0 1 2 3 4

# Não precisa da variável? Use _
for _ in range(3):
    print("Python!")
# → Python!
# → Python!
# → Python!
```

### range(início, fim) — dois argumentos

Gera de **início** até **fim - 1**:

```python
for i in range(1, 6):
    print(i, end=" ")
# → 1 2 3 4 5
```

> [!alerta]
> O fim é sempre **exclusivo**. Para contar de 1 a 10, use `range(1, 11)`.

### range(início, fim, passo) — três argumentos

Pula de **passo** em **passo**:

```python
# Pares de 0 a 10
for i in range(0, 11, 2):
    print(i, end=" ")
# → 0 2 4 6 8 10

# Ímpares de 1 a 9
for i in range(1, 11, 2):
    print(i, end=" ")
# → 1 3 5 7 9

# De 10 em 10
for i in range(0, 101, 10):
    print(i, end=" ")
# → 0 10 20 30 40 50 60 70 80 90 100
```

## Contagem regressiva

Use passo negativo:

```python
for i in range(10, 0, -1):
    print(i, end=" ")
print("Lançar!")
# → 10 9 8 7 6 5 4 3 2 1 Lançar!
```

> [!alerta]
> Com passo negativo, o início deve ser **maior** que o fim. Senão não gera nada.

## Acumuladores

Padrão muito comum: juntar valores ao longo do loop.

```python
# Somar de 1 a 100
soma = 0
for i in range(1, 101):
    soma += i
print(f"Soma: {soma}")  # → 5050

# Fatorial (5! = 5 × 4 × 3 × 2 × 1)
n = 5
fatorial = 1
for i in range(1, n + 1):
    fatorial *= i
print(f"{n}! = {fatorial}")  # → 5! = 120
```

## Loops aninhados (for dentro de for)

```python
# Tabuada do 1 ao 3
for i in range(1, 4):
    print(f"\n--- Tabuada do {i} ---")
    for j in range(1, 11):
        print(f"{i} x {j:2d} = {i * j:3d}")
```

### Padrão de asteriscos

```python
n = 5
for i in range(1, n + 1):
    print("*" * i)
# *
# **
# ***
# ****
# *****
```

### Grade de coordenadas

```python
for linha in range(3):
    for coluna in range(3):
        print(f"({linha},{coluna})", end="  ")
    print()
# (0,0)  (0,1)  (0,2)
# (1,0)  (1,1)  (1,2)
# (2,0)  (2,1)  (2,2)
```

## O loop while

`while` repete **enquanto** a condição for verdadeira:

```python
contador = 1
while contador <= 5:
    print(f"Contagem: {contador}")
    contador += 1
# → Contagem: 1, 2, 3, 4, 5
```

### Loop até o usuário sair

```python
while True:
    texto = input("Digite algo (ou 'sair'): ")
    if texto == "sair":
        break
    print(f"Você digitou: {texto}")
```

> [!alerta]
> Cuidado com loop infinito! Sempre atualize a condição ou use `break`.

```python
# ❌ Loop infinito (esqueceu de incrementar)
# contador = 1
# while contador <= 5:
#     print(contador)  # nunca para!

# ✅ Correto
contador = 1
while contador <= 5:
    print(contador)
    contador += 1
```

## Exemplo: Jogo de adivinhação

```python
import random

numero_secreto = random.randint(1, 50)
max_tentativas = 7

print("=== Adivinhação ===")
print(f"Número de 1 a 50. Você tem {max_tentativas} tentativas.\n")

for tentativa in range(1, max_tentativas + 1):
    palpite = int(input(f"Tentativa {tentativa}/{max_tentativas}: "))

    if palpite == numero_secreto:
        print(f"\nAcertou em {tentativa} tentativa(s)!")
        break
    elif palpite < numero_secreto:
        print("Muito baixo!")
    else:
        print("Muito alto!")
else:
    # else do for = rodou tudo sem break
    print(f"\nPerdeu! Era {numero_secreto}.")
```

## Resumo

| Conceito | Sintaxe | Exemplo |
| --- | --- | --- |
| range simples | `range(fim)` | `range(5)` = 0,1,2,3,4 |
| range com início | `range(início, fim)` | `range(1, 6)` = 1,2,3,4,5 |
| range com passo | `range(início, fim, passo)` | `range(0, 11, 2)` = 0,2,4,6,8,10 |
| Regressiva | `range(início, fim, -passo)` | `range(5, 0, -1)` = 5,4,3,2,1 |
| while | `while condição:` | Repete enquanto True |
| Variável descartável | `for _ in range(n):` | Quando não usa o índice |
| Fim é **exclusivo** | `range(1, 5)` não inclui 5 | Sempre fim - 1 |
