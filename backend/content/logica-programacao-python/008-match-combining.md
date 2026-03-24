---
slug: "match-combining"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "Match/Case e Condições Combinadas"
subtitulo: "Pattern matching e valores falsy em Python"
descricao: "Use match/case (Python 3.10+), combine condições e entenda valores falsy e truthy."
ordem: 8
proximosPassos:
  - titulo: "Loop For com Range"
    descricao: "Repetições controladas com for e range()"
  - titulo: "For em Sequências, Break e Continue"
    descricao: "Percorra listas, strings e controle o loop"
quiz:
  - pergunta: "Qual é o equivalente do 'default' do switch em match/case?"
    opcoes: ["default:", "else:", "case _:", "case default:"]
    correta: 2
    explicacao: "case _: (underscore) captura qualquer valor. É o 'default' do match/case."
    explicacaoErrada: "O curinga é case _: (underscore). Captura tudo que não bateu com os outros cases."
  - pergunta: "Quais valores são falsy em Python?"
    opcoes: ["1, 'texto', [1, 2]", "0, '', [], None, False", "'0', '[]', 'False'", "Apenas None e False"]
    correta: 1
    explicacao: "Falsy: 0, 0.0, '' (vazio), [] (vazio), {}, None, False. '0' e 'False' são truthy!"
    explicacaoErrada: "Falsy: 0, '', [], {}, None, False. Strings com conteudo (mesmo '0') são truthy."
  - pergunta: "Como combinar padrões em um case?"
    opcoes: ["case 1 and 2:", "case 1, 2:", "case 1 | 2:", "case 1 or 2:"]
    correta: 2
    explicacao: "Use | (pipe): case 1 | 2 | 3: significa 'se for 1, 2 ou 3'."
    explicacaoErrada: "Para combinar padrões use | (pipe). Não confundir com or."
  - pergunta: "A partir de qual versão do Python existe match/case?"
    opcoes: ["Python 2.7", "Python 3.8", "Python 3.10", "Python 3.12"]
    correta: 2
    explicacao: "match/case foi introduzido no Python 3.10."
    explicacaoErrada: "match/case é do Python 3.10. Versões anteriores usam if/elif/else."
---

## Match/Case

Pense no `match/case` como um "cardápio de opções". Você dá um valor e o Python encontra o case que combina.

Disponível a partir do **Python 3.10**.

### Sintaxe básica

```python
comando = input("Comando: ").lower()

match comando:
    case "iniciar":
        print("Iniciando...")
    case "pausar":
        print("Pausado.")
    case "parar":
        print("Encerrando...")
    case _:
        print(f"'{comando}' não reconhecido.")
```

> [!info]
> `case _:` é o "se nenhum outro bateu" — funciona como o default do switch.

### Comparação com if/elif

```python
# Com if/elif
dia = 3
if dia == 1:
    nome = "Segunda"
elif dia == 2:
    nome = "Terça"
elif dia == 3:
    nome = "Quarta"
else:
    nome = "Inválido"

# Com match/case — mais limpo
match dia:
    case 1: nome = "Segunda"
    case 2: nome = "Terça"
    case 3: nome = "Quarta"
    case _: nome = "Inválido"

print(nome)  # → Quarta
```

### Combinando padrões com |

Use `|` para agrupar vários valores num case:

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

### Match com guardas (if extra)

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

Em Python, qualquer valor pode ser tratado como verdadeiro ou falso.

### Falsy (tratados como False)

```python
print(bool(0))       # → False
print(bool(0.0))     # → False
print(bool(""))      # → False (string vazia)
print(bool([]))      # → False (lista vazia)
print(bool({}))      # → False (dict vazio)
print(bool(None))    # → False
print(bool(False))   # → False
```

### Truthy (tratados como True)

```python
print(bool(1))         # → True
print(bool(-5))        # → True
print(bool("texto"))   # → True
print(bool("0"))       # → True (não é vazio!)
print(bool("False"))   # → True (não é vazio!)
print(bool([1, 2]))    # → True
```

> [!alerta]
> `"0"` e `"False"` são **truthy** porque não são strings vazias. Só `""` é falsy.

### Uso prático

```python
nome = input("Seu nome: ")

# Em vez de: if nome != ""
if nome:
    print(f"Olá, {nome}!")
else:
    print("Não digitou nada.")

# Lista vazia?
itens = []
if not itens:
    print("Lista vazia!")
```

## Combinando condições

```python
idade = 25
tem_ingresso = True
eh_vip = False

# Pode entrar se: (tem ingresso E maior) OU é VIP
pode_entrar = (tem_ingresso and idade >= 18) or eh_vip
print(f"Pode entrar: {pode_entrar}")  # → True
```

### Verificando None antes de usar

```python
resultado = None

# ❌ Pode dar erro
# print(resultado.upper())  # AttributeError!

# ✅ Verifica primeiro
if resultado is not None:
    print(resultado.upper())
else:
    print("Sem resultado")
```

## Exemplo: Menu de restaurante

```python
print("=== Cardápio ===")
print("1. Hambúrguer — R$ 25")
print("2. Pizza      — R$ 35")
print("3. Salada     — R$ 18")
print("4. Suco       — R$ 10")
print("5. Sobremesa  — R$ 15")
print()

total = 0.0
pedidos = []

while True:
    escolha = input("Item (1-5) ou 'fim': ")

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
            pedidos.append("Suco")
        case "5":
            total += 15.00
            pedidos.append("Sobremesa")
        case _:
            print("Opção inválida!")
            continue

    print(f"  Subtotal: R$ {total:.2f}")

print("\n=== Conta ===")
if pedidos:
    for item in pedidos:
        print(f"  - {item}")
    print(f"\nTotal: R$ {total:.2f}")
else:
    print("Nenhum pedido.")
```

## Resumo

| Conceito | Sintaxe |
| --- | --- |
| Match/case | `match valor:` / `case padrão:` |
| Curinga (default) | `case _:` |
| Múltiplos padrões | `case 1 \| 2 \| 3:` |
| Guarda | `case x if x > 0:` |
| Valores falsy | `0, 0.0, "", [], {}, None, False` |
| Valores truthy | Tudo que não é falsy |
| Verificar None | `if valor is not None:` |
| Verificar vazio | `if lista:` (truthy se tem itens) |
