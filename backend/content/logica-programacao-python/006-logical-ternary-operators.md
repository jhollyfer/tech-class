---
slug: "logical-ternary-operators"
modulo: "Módulo 2 — Fundamentos da Linguagem"
titulo: "Operadores Lógicos e Ternário"
subtitulo: "Combinando condições com and, or, not e ternário"
descricao: "Combine condições com and, or, not, entenda curto-circuito e use o operador ternário."
ordem: 6
proximosPassos:
  - titulo: "Estruturas Condicionais"
    descricao: "Tome decisões com if, elif e else"
  - titulo: "Match/Case e Condições Combinadas"
    descricao: "Pattern matching e valores falsy em Python"
quiz:
  - pergunta: "Qual é o operador lógico E em Python?"
    opcoes: ["&&", "AND", "and", "&"]
    correta: 2
    explicacao: "Python usa and (minúsculo). Diferente de JavaScript que usa &&."
    explicacaoErrada: "Em Python os operadores lógicos são palavras: and, or, not. Não &&, || ou !."
  - pergunta: "Qual é o resultado de not True?"
    opcoes: ["0", "None", "False", "true"]
    correta: 2
    explicacao: "not inverte o booleano. not True = False."
    explicacaoErrada: "not inverte: not True = False, not False = True."
  - pergunta: "Qual é a sintaxe do operador ternário em Python?"
    opcoes: ["condition ? a : b", "a if condition else b", "if condition then a else b", "condition && a || b"]
    correta: 1
    explicacao: "Em Python: valor_verdadeiro if condição else valor_falso."
    explicacaoErrada: "A sintaxe é: valor_verdadeiro if condição else valor_falso. Não usa ? : como JavaScript."
  - pergunta: "O que True and False or True retorna?"
    opcoes: ["True", "False", "None", "Erro"]
    correta: 0
    explicacao: "and tem prioridade. True and False = False. Depois: False or True = True."
    explicacaoErrada: "Precedência: and primeiro, or depois. True and False = False, depois False or True = True."
---

## Operadores Lógicos

Python usa palavras em vez de símbolos:

| Python | Outras linguagens | Significado |
| --- | --- | --- |
| `and` | `&&` | E — ambos verdadeiros |
| `or` | `\|\|` | OU — pelo menos um verdadeiro |
| `not` | `!` | NÃO — inverte |

```python
# and — os DOIS precisam ser True
print(True and True)    # → True
print(True and False)   # → False

# or — pelo menos UM precisa ser True
print(True or False)    # → True
print(False or False)   # → False

# not — inverte
print(not True)         # → False
print(not False)        # → True
```

## Tabelas Verdade

### and

| A | B | A and B |
| --- | --- | --- |
| True | True | **True** |
| True | False | False |
| False | True | False |
| False | False | False |

> [!info]
> `and` só dá True quando **os dois** são True.

### or

| A | B | A or B |
| --- | --- | --- |
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | **False** |

> [!info]
> `or` só dá False quando **os dois** são False.

## Exemplos do dia a dia

```python
idade = 25
tem_carteira = True
saldo = 1500.0

# Pode alugar carro? (precisa dos dois)
pode_alugar = idade >= 21 and tem_carteira
print(f"Pode alugar: {pode_alugar}")  # → True

# Tem desconto? (jovem OU idoso)
tem_desconto = idade < 18 or idade >= 65
print(f"Desconto: {tem_desconto}")  # → False

# Está no verde? (saldo positivo)
no_verde = not (saldo < 0)
print(f"No verde: {no_verde}")  # → True
```

## Precedência: not > and > or

```python
resultado = True or False and not False
# 1. not False → True
# 2. False and True → False
# 3. True or False → True
print(resultado)  # → True
```

> [!sucesso]
> Use parênteses quando misturar `and` e `or`. Fica mais claro e evita bugs.

## Curto-circuito

Python é esperto: se já sabe o resultado, não avalia o resto.

### and — para no primeiro False

```python
# Se o primeiro é False, nem olha o segundo
divisor = 0
if divisor != 0 and 10 / divisor > 2:
    print("OK")
# divisor != 0 já é False, então 10/divisor NÃO é avaliado (evita erro!)
```

### or — para no primeiro True

```python
# Se o primeiro é True, nem olha o segundo
nome = "" or "Anônimo"
print(nome)  # → Anônimo (string vazia é "falso")

nome = "Carlos" or "Anônimo"
print(nome)  # → Carlos
```

### and e or retornam o valor real, não só True/False

```python
print(1 and 2 and 3)     # → 3 (todos "verdadeiros", retorna o último)
print(1 and 0 and 3)     # → 0 (0 é "falso", para ali)
print(0 or "" or "Olá")  # → "Olá" (primeiro "verdadeiro")
```

## Operador Ternário

Um `if/else` em uma linha só:

```python
# Sintaxe: valor_se_true if condição else valor_se_false

idade = 20
status = "maior" if idade >= 18 else "menor"
print(status)  # → maior
```

### Exemplos práticos

```python
nota = 7.5
resultado = "Aprovado" if nota >= 7 else "Reprovado"
print(resultado)  # → Aprovado

numero = 15
paridade = "par" if numero % 2 == 0 else "ímpar"
print(f"{numero} é {paridade}")  # → 15 é ímpar

# Dentro de f-strings
saldo = -50
print(f"Status: {'positivo' if saldo >= 0 else 'negativo'}")
# → Status: negativo

# Singular/plural
qtd = 1
print(f"{qtd} item" if qtd == 1 else f"{qtd} itens")
# → 1 item
```

### Ternário encadeado (use com moderação)

```python
nota = 8.5
conceito = (
    "A" if nota >= 9 else
    "B" if nota >= 7 else
    "C" if nota >= 5 else
    "D"
)
print(conceito)  # → B
```

> [!alerta]
> Se ficar confuso, use `if/elif/else` normal. Legibilidade vem primeiro.

## Exemplo: Validação de formulário

```python
print("=== Cadastro ===\n")

nome = input("Nome: ")
email = input("E-mail: ")
idade = int(input("Idade: "))
senha = input("Senha: ")

nome_ok = len(nome) >= 2
email_ok = "@" in email and "." in email
idade_ok = 13 <= idade <= 120
senha_ok = len(senha) >= 6

print("\n--- Validação ---")
print(f"Nome:  {'OK' if nome_ok else 'Mínimo 2 caracteres'}")
print(f"Email: {'OK' if email_ok else 'Deve conter @ e .'}")
print(f"Idade: {'OK' if idade_ok else 'Entre 13 e 120'}")
print(f"Senha: {'OK' if senha_ok else 'Mínimo 6 caracteres'}")

tudo_ok = nome_ok and email_ok and idade_ok and senha_ok
print(f"\nCadastro: {'Aprovado!' if tudo_ok else 'Corrija os erros.'}")
```

## Resumo

| Conceito | Sintaxe | O que faz |
| --- | --- | --- |
| E lógico | `and` | Ambos devem ser True |
| OU lógico | `or` | Pelo menos um True |
| NÃO lógico | `not` | Inverte o valor |
| Ternário | `a if cond else b` | if/else em uma linha |
| Precedência | `not > and > or` | Ordem de avaliação |
| Curto-circuito | `and` para no False, `or` para no True | Otimização automática |
