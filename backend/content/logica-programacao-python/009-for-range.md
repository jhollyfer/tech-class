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

## O que e o for com range?

O `for` repete um bloco de codigo um numero determinado de vezes. Junto com `range()`, voce controla exatamente quantas repeticoes quer, de onde comecar e de quanto em quanto pular.

Pense no `range()` como um gerador de sequencias numericas. Voce define inicio, fim e passo, e ele entrega os numeros um por um para o `for`.

> [!info]
> O fim do `range()` e sempre **exclusivo**. `range(1, 5)` gera 1, 2, 3, 4. O 5 fica de fora. Para incluir o 5, use `range(1, 6)`.

## range com um argumento

Quando voce passa so um numero, o range comeca em 0 e vai ate esse numero (sem incluir ele):

```python
for i in range(5):
    print(i, end=" ")
# → 0 1 2 3 4
```

Se nao precisa da variavel do loop, use `_`:

```python
for _ in range(3):
    print("Python!")
# → Python!
# → Python!
# → Python!
```

## range com dois argumentos

Aqui voce define o inicio e o fim. O inicio e incluso, o fim e exclusivo:

```python
for i in range(1, 6):
    print(i, end=" ")
# → 1 2 3 4 5
```

## range com tres argumentos

O terceiro argumento e o passo -- de quanto em quanto pular:

```python
# Pares de 0 a 10
for i in range(0, 11, 2):
    print(i, end=" ")
# → 0 2 4 6 8 10

# Impares de 1 a 9
for i in range(1, 11, 2):
    print(i, end=" ")
# → 1 3 5 7 9
```

## Contagem regressiva

Com passo negativo, voce conta de tras pra frente:

```python
for i in range(10, 0, -1):
    print(i, end=" ")
print("Lancar!")
# → 10 9 8 7 6 5 4 3 2 1 Lancar!
```

> [!alerta]
> Com passo negativo, o inicio deve ser maior que o fim. Senao o range nao gera nada e o loop nao executa.

## Acumuladores

Um padrao super comum: usar uma variavel pra ir somando ou multiplicando a cada volta do loop.

```python
# Somar de 1 a 100
soma: int = 0
for i in range(1, 101):
    soma += i
print(f"Soma: {soma}")  # → Soma: 5050
```

```python
# Fatorial (5! = 5 x 4 x 3 x 2 x 1)
n: int = 5
fatorial: int = 1
for i in range(1, n + 1):
    fatorial *= i
print(f"{n}! = {fatorial}")  # → 5! = 120
```

## Loops aninhados

Um `for` dentro de outro. O loop interno roda completo a cada volta do externo:

```python
# Tabuada do 1 ao 3
for i in range(1, 4):
    print(f"\n--- Tabuada do {i} ---")
    for j in range(1, 11):
        print(f"{i} x {j:2d} = {i * j:3d}")
```

```python
# Padrao de asteriscos
n: int = 5
for i in range(1, n + 1):
    print("*" * i)
# → *
# → **
# → ***
# → ****
# → *****
```

## While -- repeticao com condicao

Diferente do `for`, o `while` repete enquanto uma condicao for verdadeira:

```python
contador: int = 1
while contador <= 5:
    print(f"Contagem: {contador}")
    contador += 1
# → Contagem: 1
# → Contagem: 2
# → Contagem: 3
# → Contagem: 4
# → Contagem: 5
```

> [!alerta]
> Cuidado com loop infinito! Sempre atualize a condicao dentro do while ou use `break` para sair.

## Exercicio pratico

Use `for` e `range()` para:

1. Imprimir todos os multiplos de 3 entre 1 e 50
2. Calcular a soma dos numeros pares de 1 a 100
3. Criar uma contagem regressiva de 20 ate 1 pulando de 2 em 2

```python
# 1. Multiplos de 3: use range(3, 51, 3)

# 2. Soma dos pares: acumulador + range(2, 101, 2)

# 3. Contagem regressiva: range(20, 0, -2)
```

> [!sucesso]
> Se voce consegue montar o range certo pra cada caso, ja dominou a logica. Na proxima aula, vamos percorrer listas e strings com for.

## Referencias

- [for Statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements) -- documentacao oficial do for
- [range()](https://docs.python.org/3/library/stdtypes.html#range) -- documentacao oficial do range
- [Curso Python #09 - Estruturas de Repeticao (for)](https://www.youtube.com/watch?v=cL4YDtFnCt4) -- Curso em Video
