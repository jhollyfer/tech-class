---
slug: "even-odd-challenge"
modulo: "Módulo 6 — Projetos Práticos"
titulo: "Desafio: Par ou Ímpar"
subtitulo: "Classificando números usando operador módulo e funções"
descricao: "Construa passo a passo um programa que classifica números como pares ou ímpares usando funções, listas e f-strings."
ordem: 16
proximosPassos:
  - titulo: "Desafio: Tabuada"
    descricao: "Gere tabuadas com loops e formatação de texto"
  - titulo: "Desafio: Sistema de Notas"
    descricao: "Avalie uma turma com TypedDict e funções"
quiz:
  - pergunta: "Qual operador verifica se um número é par?"
    opcoes: ["n / 2 == 0", "n // 2 == 0", "n % 2 == 0", "n ** 2 == 0"]
    correta: 2
    explicacao: "✓ O operador % (módulo) retorna o resto da divisão. Se n % 2 == 0, o número é par."
    explicacaoErrada: "✗ O operador módulo (%) retorna o resto da divisão. n % 2 == 0 significa que n é divisível por 2, ou seja, é par."
  - pergunta: "Por que é melhor criar uma função e_par() em vez de usar n % 2 == 0 diretamente?"
    opcoes: ["Porque é mais rápido", "Porque a função dá um nome claro à operação e pode ser reutilizada", "Porque variáveis não aceitam %", "Porque Python exige funções para módulo"]
    correta: 1
    explicacao: "✓ Funções com nomes descritivos tornam o código mais legível e permitem reutilizar a lógica em diferentes partes do programa."
    explicacaoErrada: "✗ Criar funções melhora a legibilidade (e_par(n) é mais claro que n % 2 == 0) e permite reutilização."
  - pergunta: "Qual é o resultado de 7 % 2?"
    opcoes: ["0", "1", "3", "3.5"]
    correta: 1
    explicacao: "✓ 7 dividido por 2 dá 3 com resto 1. O operador % retorna o resto, que é 1."
    explicacaoErrada: "✗ O operador % retorna o RESTO da divisão inteira. 7 ÷ 2 = 3 com resto 1. Então 7 % 2 = 1."
---

## O Desafio

Vamos construir um programa que recebe uma lista de números e classifica cada um como **par** ou **ímpar**. Parece simples, mas vamos usar boas práticas: funções, type hints, f-strings e organização de código.

## Conceito-Chave: Operador Módulo (%)

O operador `%` retorna o **resto da divisão** entre dois números:

```python
print(10 % 2)   # → 0 (10 ÷ 2 = 5, resto 0 → PAR)
print(7 % 2)    # → 1 (7 ÷ 2 = 3, resto 1 → ÍMPAR)
print(15 % 2)   # → 1 (15 ÷ 2 = 7, resto 1 → ÍMPAR)
print(20 % 2)   # → 0 (20 ÷ 2 = 10, resto 0 → PAR)
```

**Regra:**
- Se `n % 2 == 0` → o número é **par**
- Se `n % 2 != 0` → o número é **ímpar**

## Passo 1: Função e_par

Começamos criando uma função simples e reutilizável:

```python
def e_par(numero: int) -> bool:
    """Verifica se um número é par."""
    return numero % 2 == 0

# Testando
print(e_par(4))   # → True
print(e_par(7))   # → False
print(e_par(0))   # → True (zero é par!)
print(e_par(-6))  # → True (negativos também!)
```

## Passo 2: Função de Classificação

Agora criamos uma função que retorna um texto descritivo:

```python
def classificar_numero(numero: int) -> str:
    """Retorna se o número é par ou ímpar como texto."""
    if e_par(numero):
        return "par"
    else:
        return "ímpar"

print(classificar_numero(10))  # → "par"
print(classificar_numero(3))   # → "ímpar"
```

## Passo 3: Processando uma Lista

Vamos iterar por uma lista e classificar cada número:

```python
def classificar_lista(numeros: list[int]) -> None:
    """Exibe a classificação de cada número da lista."""
    for numero in numeros:
        tipo: str = classificar_numero(numero)
        print(f"  {numero:>3d} → {tipo}")

# Testando
numeros: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Classificação dos números:")
classificar_lista(numeros)
```

Saída:
```
Classificação dos números:
    1 → ímpar
    2 → par
    3 → ímpar
    4 → par
    5 → ímpar
    6 → par
    7 → ímpar
    8 → par
    9 → ímpar
   10 → par
```

## Passo 4: Separando Pares e Ímpares

Vamos usar `filter()` e list comprehension para separar os números:

```python
def separar_pares_impares(numeros: list[int]) -> tuple[list[int], list[int]]:
    """Separa uma lista em duas: pares e ímpares."""
    pares: list[int] = [n for n in numeros if e_par(n)]
    impares: list[int] = [n for n in numeros if not e_par(n)]
    return pares, impares
```

## Passo 5: Estatísticas

Adicionando contagens e porcentagens:

```python
def exibir_estatisticas(numeros: list[int]) -> None:
    """Exibe estatísticas sobre pares e ímpares."""
    pares, impares = separar_pares_impares(numeros)
    total: int = len(numeros)

    print(f"\n--- Estatísticas ---")
    print(f"Total de números: {total}")
    print(f"Pares:  {len(pares):>3d} ({len(pares) / total * 100:.0f}%)")
    print(f"Ímpares: {len(impares):>2d} ({len(impares) / total * 100:.0f}%)")
    print(f"\nPares:   {pares}")
    print(f"Ímpares: {impares}")
```

## Programa Completo

Juntando tudo em um programa organizado:

```python
# ===== Funções Auxiliares =====

def e_par(numero: int) -> bool:
    """Verifica se um número é par."""
    return numero % 2 == 0

def classificar_numero(numero: int) -> str:
    """Retorna se o número é par ou ímpar como texto."""
    return "par" if e_par(numero) else "ímpar"

def separar_pares_impares(numeros: list[int]) -> tuple[list[int], list[int]]:
    """Separa uma lista em pares e ímpares."""
    pares: list[int] = [n for n in numeros if e_par(n)]
    impares: list[int] = [n for n in numeros if not e_par(n)]
    return pares, impares

# ===== Funções de Exibição =====

def exibir_classificacao(numeros: list[int]) -> None:
    """Exibe a classificação de cada número."""
    print("Classificação:")
    for numero in numeros:
        tipo: str = classificar_numero(numero)
        simbolo: str = "✓" if e_par(numero) else "✗"
        print(f"  {simbolo} {numero:>3d} é {tipo}")

def exibir_estatisticas(numeros: list[int]) -> None:
    """Exibe estatísticas de pares e ímpares."""
    pares, impares = separar_pares_impares(numeros)
    total: int = len(numeros)

    print(f"\nEstatísticas:")
    print(f"  Total:   {total}")
    print(f"  Pares:   {len(pares)} ({len(pares) / total * 100:.0f}%)")
    print(f"  Ímpares: {len(impares)} ({len(impares) / total * 100:.0f}%)")
    print(f"\n  Lista de pares:   {pares}")
    print(f"  Lista de ímpares: {impares}")

# ===== Programa Principal =====

def main() -> None:
    numeros: list[int] = [12, 7, 24, 3, 18, 9, 42, 15, 30, 1]

    print("=" * 40)
    print("   CLASSIFICADOR PAR OU ÍMPAR")
    print("=" * 40)
    print()

    exibir_classificacao(numeros)
    exibir_estatisticas(numeros)

    # Bônus: usando filter e map
    print("\nBônus — Pares ao quadrado:")
    pares_quadrado: list[int] = list(map(
        lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, numeros)
    ))
    print(f"  {pares_quadrado}")

main()
```

## O que Você Aprendeu

- **Operador módulo** (`%`) para verificar divisibilidade
- **Funções com responsabilidade única** — cada uma faz uma coisa
- **f-strings com formatação** — alinhamento com `>3d`
- **List comprehension** para filtrar dados
- **Desempacotamento de tuplas** para receber múltiplos retornos
- **Composição de funções** — funções pequenas que se combinam

Esse mesmo padrão de separar lógica, classificação e exibição será útil em todos os seus futuros projetos.
