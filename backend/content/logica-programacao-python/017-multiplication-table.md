---
slug: "multiplication-table"
modulo: "Módulo 6 — Projetos Práticos"
titulo: "Desafio: Tabuada"
subtitulo: "Gerando tabuadas com loops e formatação de texto"
descricao: "Construa um gerador de tabuadas usando for, range, f-strings com alinhamento e funções reutilizáveis."
ordem: 17
proximosPassos:
  - titulo: "Desafio: Sistema de Notas"
    descricao: "Avalie uma turma completa com TypedDict e funções"
  - titulo: "Desafio: Primos e Carrinho"
    descricao: "Dois projetos completos para consolidar seu aprendizado"
quiz:
  - pergunta: "O que retorna range(1, 11)?"
    opcoes: ["Números de 0 a 10", "Números de 1 a 11", "Números de 1 a 10", "Números de 0 a 11"]
    correta: 2
    explicacao: "✓ range(1, 11) gera números de 1 até 10. O valor final (11) NÃO é incluso."
    explicacaoErrada: "✗ range(início, fim) gera números de início até fim-1. Então range(1, 11) vai de 1 a 10."
  - pergunta: "O que faz {:2d} em uma f-string?"
    opcoes: ["Converte para decimal com 2 casas", "Formata como inteiro com 2 caracteres de largura", "Multiplica o número por 2", "Mostra apenas 2 dígitos"]
    correta: 1
    explicacao: "✓ {:2d} formata um inteiro (d = decimal/inteiro) com largura mínima de 2 caracteres, alinhado à direita."
    explicacaoErrada: "✗ No formato {:2d}, 2 é a largura mínima e d significa inteiro decimal. Números com 1 dígito ganham espaço à esquerda."
  - pergunta: "Qual é o resultado de f'{5:>3d} x {3:>2d} = {15:>3d}'?"
    opcoes: ["5 x 3 = 15", "  5 x  3 =  15", "005 x 03 = 015", "5   x 3  = 15 "]
    correta: 1
    explicacao: "✓ O > alinha à direita. {:>3d} usa 3 espaços, {:>2d} usa 2 espaços. Números menores ganham espaços à esquerda."
    explicacaoErrada: "✗ O formato >Nd alinha à direita com N caracteres de largura. Espaços são adicionados à esquerda de números menores."
---

## O Desafio

Vamos criar um programa que gera tabuadas de multiplicação com formatação profissional. Começamos simples e evoluímos até um gerador completo com alinhamento visual.

## Conceito-Chave: range()

A função `range()` gera sequências de números para usar em loops:

```python
# range(fim) — de 0 até fim-1
for i in range(5):
    print(i, end=" ")  # → 0 1 2 3 4

# range(início, fim) — de início até fim-1
for i in range(1, 6):
    print(i, end=" ")  # → 1 2 3 4 5

# range(início, fim, passo) — com intervalo customizado
for i in range(0, 20, 5):
    print(i, end=" ")  # → 0 5 10 15
```

Para a tabuada, usaremos `range(1, 11)` para gerar os multiplicadores de 1 a 10.

## Conceito-Chave: Formatação com f-strings

F-strings permitem alinhar texto em colunas com largura fixa:

```python
# {:Nd} — inteiro com N caracteres de largura
print(f"{5:2d}")    # → " 5"  (2 caracteres, alinha à direita)
print(f"{42:2d}")   # → "42"  (já ocupa 2, sem alteração)
print(f"{5:3d}")    # → "  5" (3 caracteres)

# {:>Nd} — explicitamente alinhado à direita
print(f"{7:>3d}")   # → "  7"

# {:<Nd} — alinhado à esquerda
print(f"{7:<3d}")   # → "7  "

# {:0Nd} — preenchido com zeros
print(f"{7:03d}")   # → "007"
```

## Passo 1: Tabuada Simples

```python
def gerar_tabuada(numero: int) -> None:
    """Exibe a tabuada de um número de 1 a 10."""
    print(f"\nTabuada do {numero}:")
    print("-" * 20)
    for i in range(1, 11):
        resultado: int = numero * i
        print(f"  {numero} x {i} = {resultado}")

gerar_tabuada(7)
```

Saída:
```
Tabuada do 7:
--------------------
  7 x 1 = 7
  7 x 2 = 14
  7 x 3 = 21
  ...
  7 x 10 = 70
```

## Passo 2: Formatação Alinhada

Agora vamos alinhar os números para ficar visualmente organizado:

```python
def gerar_tabuada_formatada(numero: int) -> None:
    """Exibe a tabuada com alinhamento profissional."""
    print(f"\n╔══════════════════════╗")
    print(f"║   Tabuada do {numero:>2d}      ║")
    print(f"╠══════════════════════╣")
    for i in range(1, 11):
        resultado: int = numero * i
        print(f"║  {numero:>2d}  x  {i:>2d}  =  {resultado:>3d}  ║")
    print(f"╚══════════════════════╝")

gerar_tabuada_formatada(8)
```

Saída:
```
╔══════════════════════╗
║   Tabuada do  8      ║
╠══════════════════════╣
║   8  x   1  =    8  ║
║   8  x   2  =   16  ║
║   8  x   3  =   24  ║
...
║   8  x  10  =   80  ║
╚══════════════════════╝
```

## Passo 3: Retornando a Tabuada como Lista

Em vez de imprimir diretamente, podemos retornar os dados para processamento:

```python
def calcular_tabuada(numero: int) -> list[tuple[int, int, int]]:
    """Retorna a tabuada como lista de tuplas (numero, multiplicador, resultado)."""
    return [(numero, i, numero * i) for i in range(1, 11)]

# Usando os dados
tabuada_do_5: list[tuple[int, int, int]] = calcular_tabuada(5)
for num, mult, res in tabuada_do_5:
    print(f"{num} x {mult:>2d} = {res:>3d}")
```

## Passo 4: Múltiplas Tabuadas

Gerando várias tabuadas de uma vez:

```python
def gerar_multiplas_tabuadas(inicio: int, fim: int) -> None:
    """Gera tabuadas de inicio até fim."""
    for numero in range(inicio, fim + 1):
        gerar_tabuada_formatada(numero)
        print()  # Linha em branco entre tabuadas
```

## Passo 5: Tabuadas Lado a Lado

Para um visual mais avançado, exibindo tabuadas em colunas:

```python
def gerar_tabuadas_lado_a_lado(numeros: list[int]) -> None:
    """Exibe várias tabuadas lado a lado."""
    separador: str = "   "

    # Cabeçalho
    headers: list[str] = [f"  Tabuada do {n:>2d}  " for n in numeros]
    print(separador.join(headers))
    print(separador.join(["=" * 18 for _ in numeros]))

    # Linhas
    for i in range(1, 11):
        linhas: list[str] = []
        for numero in numeros:
            resultado: int = numero * i
            linhas.append(f"  {numero:>2d} x {i:>2d} = {resultado:>3d} ")
        print(separador.join(linhas))

    print()

gerar_tabuadas_lado_a_lado([2, 5, 9])
```

Saída:
```
  Tabuada do  2      Tabuada do  5      Tabuada do  9
==================   ==================   ==================
   2 x  1 =   2      5 x  1 =   5      9 x  1 =   9
   2 x  2 =   4      5 x  2 =  10      9 x  2 =  18
   ...
```

## Programa Completo

```python
# ===== Funções de Cálculo =====

def calcular_tabuada(numero: int, ate: int = 10) -> list[tuple[int, int, int]]:
    """Retorna a tabuada como lista de tuplas."""
    return [(numero, i, numero * i) for i in range(1, ate + 1)]

# ===== Funções de Exibição =====

def exibir_tabuada_simples(numero: int) -> None:
    """Exibe tabuada em formato simples."""
    tabuada = calcular_tabuada(numero)
    print(f"\nTabuada do {numero}:")
    print("-" * 22)
    for num, mult, res in tabuada:
        print(f"  {num:>2d}  x  {mult:>2d}  =  {res:>3d}")
    print()

def exibir_tabuada_decorada(numero: int) -> None:
    """Exibe tabuada com bordas decorativas."""
    tabuada = calcular_tabuada(numero)
    print(f"\n┌──────────────────────┐")
    print(f"│   Tabuada do {numero:>2d}      │")
    print(f"├──────────────────────┤")
    for num, mult, res in tabuada:
        print(f"│  {num:>2d}  x  {mult:>2d}  =  {res:>3d}  │")
    print(f"└──────────────────────┘")

def exibir_tabuadas_lado_a_lado(numeros: list[int]) -> None:
    """Exibe várias tabuadas em colunas."""
    sep: str = "  "
    largura: int = 18

    # Cabeçalho
    cabecalhos: list[str] = [f"{'Tabuada do ' + str(n):^{largura}}" for n in numeros]
    print(sep.join(cabecalhos))
    print(sep.join(["─" * largura for _ in numeros]))

    # Dados
    for i in range(1, 11):
        partes: list[str] = []
        for numero in numeros:
            resultado: int = numero * i
            partes.append(f" {numero:>2d} x {i:>2d} = {resultado:>3d}  ")
        print(sep.join(partes))

# ===== Programa Principal =====

def main() -> None:
    print("=" * 40)
    print("    GERADOR DE TABUADAS")
    print("=" * 40)

    # Tabuada individual
    exibir_tabuada_decorada(7)

    # Múltiplas tabuadas lado a lado
    print("\nTabuadas lado a lado:")
    exibir_tabuadas_lado_a_lado([3, 6, 9])

main()
```

## O que Você Aprendeu

- **range(início, fim)** para gerar sequências numéricas
- **f-strings com formatação** — `{:2d}`, `{:>3d}`, `{:^10}` para alinhamento
- **Funções que retornam dados** vs funções que exibem dados
- **List comprehension** para gerar a tabuada de forma concisa
- **Composição** — funções pequenas que podem ser combinadas de diferentes formas

O mesmo padrão de separar cálculo e apresentação será essencial nos próximos desafios.
