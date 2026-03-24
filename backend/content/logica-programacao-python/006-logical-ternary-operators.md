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

## O que sao operadores logicos?

Operadores logicos combinam condicoes. Em vez de simbolos como `&&` e `||`, Python usa palavras: `and`, `or` e `not`. Mais facil de ler, mais facil de entender.

> [!info]
> Precedencia dos operadores logicos: `not` primeiro, depois `and`, depois `or`. Na duvida, use parenteses.

## and -- os dois precisam ser True

`and` so retorna `True` se **ambas** as condicoes forem verdadeiras:

```python
print(True and True)    # → True
print(True and False)   # → False
print(False and True)   # → False
print(False and False)  # → False
```

Na pratica:

```python
idade = 25
tem_carteira = True

pode_alugar = idade >= 21 and tem_carteira
print(f"Pode alugar: {pode_alugar}")  # → Pode alugar: True
```

## or -- pelo menos um precisa ser True

`or` retorna `True` se **qualquer uma** das condicoes for verdadeira:

```python
print(True or False)    # → True
print(False or True)    # → True
print(False or False)   # → False
```

Na pratica:

```python
idade = 25
tem_desconto = idade < 18 or idade >= 65
print(f"Desconto: {tem_desconto}")  # → Desconto: False
```

## not -- inverte o valor

`not` simplesmente inverte: `True` vira `False` e vice-versa.

```python
print(not True)   # → False
print(not False)  # → True

saldo = 1500.0
no_verde = not (saldo < 0)
print(f"No verde: {no_verde}")  # → No verde: True
```

## Curto-circuito

Python e esperto: se ja sabe o resultado, ele **para de avaliar** o resto da expressao. Isso se chama curto-circuito.

```python
# and para no primeiro False
divisor = 0
if divisor != 0 and 10 / divisor > 2:
    print("OK")
# divisor != 0 ja e False, entao 10/divisor NAO e avaliado (evita erro!)

# or para no primeiro True
nome = "" or "Anonimo"
print(nome)  # → Anonimo

nome = "Carlos" or "Anonimo"
print(nome)  # → Carlos
```

Detalhe importante: `and` e `or` retornam o **valor real**, nao so `True`/`False`:

```python
print(1 and 2 and 3)     # → 3
print(1 and 0 and 3)     # → 0
print(0 or "" or "Ola")  # → Ola
```

> [!sucesso]
> Use `valor or "padrao"` como um valor padrao rapido. Se `valor` for falsy (vazio, zero, None), o padrao entra no lugar.

## Operador ternario

O ternario e um atalho pra escrever um `if/else` em uma linha so. A sintaxe e: `valor_se_true if condicao else valor_se_false`.

```python
idade = 20
status = "maior" if idade >= 18 else "menor"
print(status)  # → maior

nota = 7.5
resultado = "Aprovado" if nota >= 7 else "Reprovado"
print(resultado)  # → Aprovado
```

Funciona dentro de f-strings tambem:

```python
saldo = -50
print(f"Status: {'positivo' if saldo >= 0 else 'negativo'}")
# → Status: negativo

# Singular/plural
qtd = 1
print(f"{qtd} item" if qtd == 1 else f"{qtd} itens")
# → 1 item
```

> [!alerta]
> Se o ternario ficar confuso ou longo demais, use `if/elif/else` normal. Legibilidade vem primeiro.

## Tabela resumo

| Operador | O que faz | Exemplo | Resultado |
|----------|-----------|---------|-----------|
| `and` | Ambos True | `True and False` | `False` |
| `or` | Pelo menos um True | `True or False` | `True` |
| `not` | Inverte | `not True` | `False` |
| ternario | if inline | `"sim" if True else "nao"` | `"sim"` |

## Exemplo pratico: validacao de formulario

```python
nome = input("Nome: ")
idade_str = input("Idade: ")
email = input("Email: ")

nome_valido = len(nome) >= 2
idade_valida = idade_str.isdigit() and int(idade_str) >= 18
email_valido = "@" in email and "." in email

tudo_ok = nome_valido and idade_valida and email_valido

status = "Cadastro aprovado!" if tudo_ok else "Dados invalidos."
print(status)
```

Cada validacao e uma condicao simples. O `and` combina todas no final. O ternario decide a mensagem.

## Referencias

- [Boolean Operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not) -- documentacao oficial
- [Conditional Expressions](https://docs.python.org/3/reference/expressions.html#conditional-expressions) -- operador ternario na doc oficial
- [Curso Python #10 - Condicoes](https://www.youtube.com/watch?v=K10u3XIf1-Q) -- Curso em Video, PT-BR
