---
slug: "logical-ternary-operators"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Operadores Lógicos e Ternário"
subtitulo: "Combinando condições com and, or, not e expressões condicionais"
descricao: "Aprenda a combinar condições com operadores lógicos (and, or, not), entenda tabelas verdade e use o operador ternário em Python."
ordem: 6
proximosPassos:
  - titulo: "Estruturas Condicionais"
    descricao: "Aprenda a tomar decisões com if, elif e else"
  - titulo: "Match/Case e Condições Combinadas"
    descricao: "Pattern matching e valores falsy em Python"
quiz:
  - pergunta: "Qual é o operador lógico E em Python?"
    opcoes: ["&&", "AND", "and", "&"]
    correta: 2
    explicacao: "✓ Python usa a palavra and (minúscula) como operador lógico E. Diferente de JavaScript/C que usam &&."
    explicacaoErrada: "✗ Em Python, os operadores lógicos são palavras em inglês minúsculas: and, or, not. Não usamos &&, || ou !."
  - pergunta: "Qual é o resultado de not True?"
    opcoes: ["0", "None", "False", "true"]
    correta: 2
    explicacao: "✓ not inverte o valor booleano. not True resulta em False."
    explicacaoErrada: "✗ O operador not inverte o booleano: not True = False e not False = True."
  - pergunta: "Qual é a sintaxe do operador ternário em Python?"
    opcoes: ["condition ? a : b", "a if condition else b", "if condition then a else b", "condition && a || b"]
    correta: 1
    explicacao: "✓ Em Python, a expressão ternária é: valor_se_verdadeiro if condição else valor_se_falso."
    explicacaoErrada: "✗ A sintaxe ternária em Python é diferente: valor_se_verdadeiro if condição else valor_se_falso. Não usa ? : como JavaScript."
  - pergunta: "O que True and False or True retorna?"
    opcoes: ["True", "False", "None", "Erro"]
    correta: 0
    explicacao: "✓ and tem prioridade sobre or. Primeiro: True and False = False. Depois: False or True = True."
    explicacaoErrada: "✗ A precedência é: and primeiro, or depois. True and False = False, depois False or True = True."
---

## Operadores Lógicos

Python usa **palavras em inglês** para operadores lógicos, diferente de muitas linguagens que usam símbolos:

| Python | Outras linguagens | Significado |
| --- | --- | --- |
| `and` | `&&` | E lógico — ambos devem ser verdadeiros |
| `or` | `\|\|` | OU lógico — pelo menos um deve ser verdadeiro |
| `not` | `!` | NÃO lógico — inverte o valor |

```python
# and — AMBOS devem ser True
print(True and True)     # → True
print(True and False)    # → False
print(False and True)    # → False
print(False and False)   # → False

# or — pelo menos UM deve ser True
print(True or True)      # → True
print(True or False)     # → True
print(False or True)     # → True
print(False or False)    # → False

# not — inverte o valor
print(not True)          # → False
print(not False)         # → True
```

## Tabelas Verdade

### and (E lógico)

| A | B | A and B |
| --- | --- | --- |
| True | True | **True** |
| True | False | False |
| False | True | False |
| False | False | False |

> **Regra:** `and` só retorna `True` quando **ambos** são `True`.

### or (OU lógico)

| A | B | A or B |
| --- | --- | --- |
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | **False** |

> **Regra:** `or` só retorna `False` quando **ambos** são `False`.

### not (NÃO lógico)

| A | not A |
| --- | --- |
| True | False |
| False | True |

## Exemplos práticos

```python
idade = 25
tem_carteira = True
saldo = 1500.0

# Verificar se pode alugar um carro
pode_alugar = idade >= 21 and tem_carteira
print(f"Pode alugar carro: {pode_alugar}")  # → True

# Verificar se tem desconto (jovem OU idoso)
tem_desconto = idade < 18 or idade >= 65
print(f"Tem desconto: {tem_desconto}")  # → False

# Verificar se NÃO está endividado
nao_endividado = not (saldo < 0)
print(f"Não endividado: {nao_endividado}")  # → True

# Combinando múltiplas condições
aprovado = idade >= 18 and tem_carteira and saldo >= 500
print(f"Aprovado: {aprovado}")  # → True
```

## Precedência dos operadores lógicos

A ordem de prioridade é: `not` > `and` > `or`

```python
# not é avaliado primeiro, depois and, depois or
resultado = True or False and not False
# Passo 1: not False → True
# Passo 2: False and True → False
# Passo 3: True or False → True
print(resultado)  # → True

# Use parênteses para deixar a intenção clara!
resultado = (True or False) and (not False)
print(resultado)  # → True
```

> **Dica:** Sempre use parênteses quando combinar `and` e `or` na mesma expressão. Isso torna o código mais legível e evita bugs.

## Avaliação de curto-circuito (short-circuit)

Python usa **avaliação de curto-circuito**: se o resultado já está determinado, ele não avalia o restante.

### and — para no primeiro False

```python
# Se o primeiro valor é False, o segundo nem é avaliado
# Porque False and (qualquer coisa) é sempre False
resultado = False and print("Isto não aparece")
# print() não é executado!

# Exemplo prático: verificar antes de dividir
divisor = 0
if divisor != 0 and 10 / divisor > 2:
    print("OK")
# 10 / divisor NÃO é avaliado porque divisor != 0 já é False
```

### or — para no primeiro True

```python
# Se o primeiro valor é True, o segundo nem é avaliado
# Porque True or (qualquer coisa) é sempre True
resultado = True or print("Isto não aparece")
# print() não é executado!

# Exemplo prático: valor padrão
nome = "" or "Anônimo"
print(nome)  # → Anônimo (string vazia é falsy)

nome = "Carlos" or "Anônimo"
print(nome)  # → Carlos (string não vazia é truthy)
```

### Valores retornados (não é sempre True/False!)

Em Python, `and` e `or` retornam **o valor real**, não necessariamente `True`/`False`:

```python
# and retorna o primeiro valor falsy ou o último valor
print(1 and 2 and 3)     # → 3 (todos truthy, retorna o último)
print(1 and 0 and 3)     # → 0 (0 é falsy, para ali)
print("" and "texto")    # → "" (string vazia é falsy)

# or retorna o primeiro valor truthy ou o último valor
print(0 or "" or "Olá")  # → "Olá" (primeiro truthy)
print(0 or "" or None)   # → None (nenhum truthy, retorna o último)
print("Ana" or "Carlos") # → "Ana" (primeiro truthy)
```

## Operador Ternário

O operador ternário em Python permite escrever um `if/else` em uma única linha:

```python
# Sintaxe:
# valor_se_verdadeiro if condição else valor_se_falso

idade = 20
status = "maior" if idade >= 18 else "menor"
print(status)  # → maior
```

### Comparação com outras linguagens

```python
# JavaScript/C: condição ? valor_verdadeiro : valor_falso
# Python:       valor_verdadeiro if condição else valor_falso

# Note que a ordem é diferente!
# Em Python, o valor desejado vem PRIMEIRO
```

### Exemplos práticos

```python
# Classificação simples
nota = 7.5
resultado = "Aprovado" if nota >= 7 else "Reprovado"
print(resultado)  # → Aprovado

# Paridade
numero = 15
paridade = "par" if numero % 2 == 0 else "ímpar"
print(f"{numero} é {paridade}")  # → 15 é ímpar

# Formatação condicional
quantidade = 1
texto = f"{quantidade} item" if quantidade == 1 else f"{quantidade} itens"
print(texto)  # → 1 item

quantidade = 5
texto = f"{quantidade} item" if quantidade == 1 else f"{quantidade} itens"
print(texto)  # → 5 itens

# Dentro de f-strings
saldo = -50
print(f"Status: {'positivo' if saldo >= 0 else 'negativo'}")
# → Status: negativo
```

### Ternário encadeado (use com moderação)

```python
nota = 8.5
conceito = "A" if nota >= 9 else "B" if nota >= 7 else "C" if nota >= 5 else "D"
print(conceito)  # → B

# Mais legível com parênteses:
conceito = (
    "A" if nota >= 9 else
    "B" if nota >= 7 else
    "C" if nota >= 5 else
    "D"
)
```

> **Atenção:** Ternários encadeados podem ficar confusos. Se a lógica for complexa, prefira `if/elif/else` convencional.

## Exemplo prático: Validação de formulário

```python
# validacao.py — Validando dados com operadores lógicos

print("=== Cadastro de Usuário ===\n")

nome = input("Nome: ")
email = input("E-mail: ")
idade = int(input("Idade: "))
senha = input("Senha: ")

# Validações com operadores lógicos
nome_valido = len(nome) >= 2
email_valido = "@" in email and "." in email
idade_valida = 13 <= idade <= 120
senha_valida = len(senha) >= 6

# Resultado
print("\n--- Validação ---")
print(f"Nome válido:  {'Sim' if nome_valido else 'Não (mínimo 2 caracteres)'}")
print(f"E-mail válido: {'Sim' if email_valido else 'Não (deve conter @ e .)'}")
print(f"Idade válida: {'Sim' if idade_valida else 'Não (entre 13 e 120)'}")
print(f"Senha válida: {'Sim' if senha_valida else 'Não (mínimo 6 caracteres)'}")

# Tudo válido?
tudo_ok = nome_valido and email_valido and idade_valida and senha_valida
print(f"\nCadastro: {'Aprovado!' if tudo_ok else 'Corrija os erros acima.'}")
```

## Resumo

| Conceito | Sintaxe | Descrição |
| --- | --- | --- |
| E lógico | `and` | Ambos devem ser True |
| OU lógico | `or` | Pelo menos um True |
| NÃO lógico | `not` | Inverte o valor |
| Ternário | `a if cond else b` | if/else em uma linha |
| Precedência | `not > and > or` | Ordem de avaliação |
| Curto-circuito | `and` para no False, `or` para no True | Otimização automática |
