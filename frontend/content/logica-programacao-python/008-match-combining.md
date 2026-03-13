---
slug: "match-combining"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "Match/Case e Condições Combinadas"
subtitulo: "Pattern matching e valores falsy em Python"
descricao: "Aprenda a usar match/case (Python 3.10+), combinar condições com operadores lógicos e entender valores falsy e truthy."
ordem: 8
proximosPassos:
  - titulo: "Loop For com Range"
    descricao: "Crie repetições controladas com for e range()"
  - titulo: "For em Sequências, Break e Continue"
    descricao: "Itere listas, strings e controle o fluxo do loop"
quiz:
  - pergunta: "Qual é o equivalente do 'default' do switch em match/case?"
    opcoes: ["default:", "else:", "case _:", "case default:"]
    correta: 2
    explicacao: "✓ Em match/case, o underscore _ funciona como curinga (wildcard), capturando qualquer valor — equivalente ao default do switch."
    explicacaoErrada: "✗ O padrão curinga em match/case é case _: (underscore). Ele captura qualquer valor não coberto pelos outros cases."
  - pergunta: "Quais destes valores são falsy em Python?"
    opcoes: ["1, 'texto', [1, 2]", "0, '', [], None, False", "'0', '[]', 'False'", "Apenas None e False"]
    correta: 1
    explicacao: "✓ Em Python, são falsy: 0, 0.0, '', [], {}, set(), None, False e outros 'vazios'. Strings como '0' e 'False' são truthy!"
    explicacaoErrada: "✗ Valores falsy são: 0, 0.0, '' (string vazia), [] (lista vazia), {} (dict vazio), None e False. Strings com conteúdo (mesmo '0') são truthy."
  - pergunta: "Como combinamos múltiplos padrões em um mesmo case?"
    opcoes: ["case 1 and 2:", "case 1, 2:", "case 1 | 2:", "case 1 or 2:"]
    correta: 2
    explicacao: "✓ O operador | (pipe) é usado para combinar padrões: case 1 | 2 | 3: significa 'se for 1, 2 ou 3'."
    explicacaoErrada: "✗ Para combinar padrões usamos | (pipe): case 1 | 2 | 3:. Não confundir com or (que é operador lógico, não de padrão)."
  - pergunta: "O match/case está disponível a partir de qual versão do Python?"
    opcoes: ["Python 2.7", "Python 3.8", "Python 3.10", "Python 3.12"]
    correta: 2
    explicacao: "✓ O match/case (structural pattern matching) foi introduzido no Python 3.10, lançado em outubro de 2021."
    explicacaoErrada: "✗ match/case foi adicionado no Python 3.10. Versões anteriores precisam usar if/elif/else para lógica equivalente."
---

## Match/Case — Pattern Matching

O `match/case` foi introduzido no **Python 3.10** como uma forma elegante de comparar um valor contra múltiplos padrões. É similar ao `switch/case` de outras linguagens, mas muito mais poderoso.

### Sintaxe básica

```python
comando = input("Digite um comando: ").lower()

match comando:
    case "iniciar":
        print("Iniciando o sistema...")
    case "pausar":
        print("Sistema pausado.")
    case "parar":
        print("Encerrando o sistema...")
    case _:
        print(f"Comando '{comando}' não reconhecido.")
```

> **Nota:** O `case _:` funciona como o **default** do switch — captura qualquer valor não coberto pelos outros cases.

### Comparação com if/elif

```python
# Com if/elif (funciona em qualquer versão)
dia = 3

if dia == 1:
    nome = "Segunda"
elif dia == 2:
    nome = "Terça"
elif dia == 3:
    nome = "Quarta"
elif dia == 4:
    nome = "Quinta"
elif dia == 5:
    nome = "Sexta"
elif dia == 6:
    nome = "Sábado"
elif dia == 7:
    nome = "Domingo"
else:
    nome = "Inválido"

# Com match/case (Python 3.10+) — mais limpo
match dia:
    case 1:
        nome = "Segunda"
    case 2:
        nome = "Terça"
    case 3:
        nome = "Quarta"
    case 4:
        nome = "Quinta"
    case 5:
        nome = "Sexta"
    case 6:
        nome = "Sábado"
    case 7:
        nome = "Domingo"
    case _:
        nome = "Inválido"

print(nome)  # → Quarta
```

### Combinando padrões com | (pipe)

Use `|` para agrupar múltiplos valores em um mesmo case:

```python
dia = 6

match dia:
    case 1 | 2 | 3 | 4 | 5:
        tipo = "Dia útil"
    case 6 | 7:
        tipo = "Fim de semana"
    case _:
        tipo = "Dia inválido"

print(tipo)  # → Fim de semana
```

### Match com strings

```python
extensao = ".py"

match extensao:
    case ".py":
        linguagem = "Python"
    case ".js" | ".ts":
        linguagem = "JavaScript/TypeScript"
    case ".java":
        linguagem = "Java"
    case ".rs":
        linguagem = "Rust"
    case ".go":
        linguagem = "Go"
    case _:
        linguagem = "Desconhecida"

print(f"Linguagem: {linguagem}")  # → Linguagem: Python
```

### Match com guardas (guard clauses)

Você pode adicionar condições extras com `if`:

```python
nota = 8.5

match nota:
    case n if n >= 9:
        conceito = "Excelente"
    case n if n >= 7:
        conceito = "Bom"
    case n if n >= 5:
        conceito = "Regular"
    case _:
        conceito = "Insuficiente"

print(f"Nota {nota}: {conceito}")  # → Nota 8.5: Bom
```

## Valores Falsy e Truthy

Em Python, qualquer valor pode ser avaliado como booleano. Valores que são considerados "falsos" são chamados **falsy**, e valores "verdadeiros" são **truthy**.

### Valores Falsy (avaliados como False)

```python
# Todos estes são falsy:
print(bool(0))        # → False (zero inteiro)
print(bool(0.0))      # → False (zero float)
print(bool(""))       # → False (string vazia)
print(bool([]))       # → False (lista vazia)
print(bool({}))       # → False (dicionário vazio)
print(bool(set()))    # → False (conjunto vazio)
print(bool(None))     # → False
print(bool(False))    # → False
```

### Valores Truthy (avaliados como True)

```python
# Todos estes são truthy:
print(bool(1))          # → True (qualquer número diferente de 0)
print(bool(-5))         # → True (negativos também!)
print(bool(0.001))      # → True
print(bool("texto"))    # → True (string com conteúdo)
print(bool("0"))        # → True (cuidado! "0" é uma string NÃO vazia)
print(bool("False"))    # → True (cuidado! "False" é uma string NÃO vazia)
print(bool([1, 2]))     # → True (lista com elementos)
print(bool({"a": 1}))   # → True (dicionário com elementos)
```

> **Cuidado:** A string `"0"` e a string `"False"` são **truthy** porque não são strings vazias. Apenas `""` (string vazia) é falsy.

### Uso prático de falsy/truthy

```python
nome = input("Seu nome: ")

# Em vez de comparar com string vazia...
# if nome != "":

# ...use o valor diretamente (mais Pythônico):
if nome:
    print(f"Olá, {nome}!")
else:
    print("Você não digitou um nome.")

# Verificando lista vazia
itens = []

if not itens:
    print("Lista vazia!")
else:
    print(f"A lista tem {len(itens)} itens")
```

## Combinando condições

### Condições complexas com and/or/not

```python
# Sistema de acesso
idade = 25
tem_ingresso = True
eh_vip = False
horario = 22

# Acesso liberado se:
# - Tem ingresso E é maior de idade
# - OU é VIP (VIP entra sem ingresso)
pode_entrar = (tem_ingresso and idade >= 18) or eh_vip
print(f"Pode entrar: {pode_entrar}")  # → True

# Horário de happy hour: entre 17 e 19
happy_hour = 17 <= horario <= 19
print(f"Happy hour: {happy_hour}")  # → False
```

### Verificação de None com condicionais

```python
# Padrão comum: verificar se um valor existe antes de usar
resultado = None

# ❌ Perigoso — pode dar erro se resultado for None
# print(resultado.upper())  # AttributeError!

# ✅ Seguro — verificar primeiro
if resultado is not None:
    print(resultado.upper())
else:
    print("Sem resultado")

# ✅ Alternativa com truthy/falsy (se "" também for inválido)
if resultado:
    print(resultado.upper())
else:
    print("Sem resultado")
```

## Exemplo prático: Menu de restaurante

```python
# restaurante.py — Sistema de pedidos com match/case

print("=== Cardápio do Restaurante ===")
print("1. Hambúrguer   — R$ 25.00")
print("2. Pizza         — R$ 35.00")
print("3. Salada        — R$ 18.00")
print("4. Suco natural  — R$ 10.00")
print("5. Sobremesa     — R$ 15.00")
print()

total = 0.0
pedidos = []

while True:
    escolha = input("Escolha um item (1-5) ou 'fim' para fechar: ")

    if escolha == "fim":
        break

    match escolha:
        case "1":
            total += 25.00
            pedidos.append("Hambúrguer")
        case "2":
            total += 35.00
            pedidos.append("Pizza")
        case "3":
            total += 18.00
            pedidos.append("Salada")
        case "4":
            total += 10.00
            pedidos.append("Suco natural")
        case "5":
            total += 15.00
            pedidos.append("Sobremesa")
        case _:
            print("Opção inválida! Escolha de 1 a 5.")
            continue

    print(f"  Adicionado! Subtotal: R$ {total:.2f}")

print("\n=== Conta Final ===")
if pedidos:
    for item in pedidos:
        print(f"  - {item}")
    print(f"\nTotal: R$ {total:.2f}")
else:
    print("Nenhum pedido realizado.")
```

## Exemplo prático: Classificador de caractere

```python
# classificador.py — Verificar tipo de caractere

caractere = input("Digite um caractere: ")

if len(caractere) != 1:
    print("Por favor, digite apenas um caractere.")
else:
    if caractere.isdigit():
        print(f"'{caractere}' é um dígito")
    elif caractere.isalpha():
        if caractere.isupper():
            print(f"'{caractere}' é uma letra maiúscula")
        else:
            print(f"'{caractere}' é uma letra minúscula")
    elif caractere == " ":
        print("É um espaço em branco")
    else:
        print(f"'{caractere}' é um caractere especial")
```

## Resumo

| Conceito | Sintaxe / Exemplo |
| --- | --- |
| Match/case | `match valor:` / `case padrão:` |
| Curinga (default) | `case _:` |
| Múltiplos padrões | `case 1 \| 2 \| 3:` |
| Guarda | `case x if x > 0:` |
| Valores falsy | `0, 0.0, "", [], {}, None, False` |
| Valores truthy | Tudo que não é falsy |
| Verificar None | `if valor is not None:` |
| Verificar vazio | `if lista:` (truthy se não vazia) |
