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

## O que e match/case?

O `match/case` e o "cardapio de opcoes" do Python. Voce passa um valor e ele encontra o caso que combina. Pense nele como um `if/elif/else` mais elegante quando voce tem muitas opcoes fixas.

Disponivel a partir do Python 3.10.

> [!info]
> `case _:` e o curinga -- funciona como o "default" do switch em outras linguagens. Captura tudo que nao bateu com os outros cases.

## Match/case basico

A estrutura e simples: `match valor:` seguido de varios `case padrao:`:

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
        print(f"'{comando}' nao reconhecido.")
```

Cada `case` testa um valor. O `case _:` no final pega qualquer coisa que nao bateu com os anteriores.

## Combinando padroes com |

Use `|` (pipe) pra agrupar varios valores num unico case:

```python
dia = 6

match dia:
    case 1 | 2 | 3 | 4 | 5:
        tipo = "Dia util"
    case 6 | 7:
        tipo = "Fim de semana"
    case _:
        tipo = "Dia invalido"

print(tipo)  # → Fim de semana
```

> [!alerta]
> Use `|` (pipe) pra combinar padroes, nao `or`. Dentro do `case`, `or` nao funciona como voce espera.

## Match com guardas (if extra)

Voce pode adicionar uma condicao extra depois do padrao usando `if`:

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

O `n` captura o valor e o `if` testa a condicao. E como ter `elif` dentro do `match`.

## Valores falsy e truthy

Alem do `match/case`, Python tem um conceito importante: qualquer valor pode ser tratado como verdadeiro ou falso. Isso permite escrever condicoes mais limpas.

```python
# Falsy -- tratados como False
print(bool(0))       # → False
print(bool(0.0))     # → False
print(bool(""))      # → False (string vazia)
print(bool([]))      # → False (lista vazia)
print(bool({}))      # → False (dict vazio)
print(bool(None))    # → False
```

```python
# Truthy -- tratados como True
print(bool(1))         # → True
print(bool(-5))        # → True
print(bool("texto"))   # → True
print(bool("0"))       # → True (nao e vazio!)
print(bool([1, 2]))    # → True
```

| Valor | Falsy ou Truthy |
|-------|-----------------|
| `0`, `0.0` | Falsy |
| `""` (string vazia) | Falsy |
| `[]`, `{}`, `set()` | Falsy |
| `None` | Falsy |
| `False` | Falsy |
| Qualquer outro valor | Truthy |

> [!alerta]
> `"0"` e `"False"` sao **truthy** porque nao sao strings vazias. So `""` e falsy.

## Uso pratico de falsy/truthy

Saber isso permite escrever condicoes mais curtas e Pythonicas:

```python
nome = input("Seu nome: ")

# Em vez de: if nome != ""
if nome:
    print(f"Ola, {nome}!")
else:
    print("Nao digitou nada.")

# Lista vazia?
itens = []
if not itens:
    print("Lista vazia!")  # → Lista vazia!

# Verificando None antes de usar
resultado = None
if resultado is not None:
    print(resultado.upper())
else:
    print("Sem resultado")  # → Sem resultado
```

> [!sucesso]
> Use `if lista:` pra verificar se uma lista tem itens e `if valor is not None:` pra checar None. Codigo mais limpo e Pythonico.

## Exemplo pratico: menu interativo

```python
print("=== Sistema ===")
print("1 - Novo cadastro")
print("2 - Consultar")
print("3 - Sair")

opcao = input("Escolha: ")

match opcao:
    case "1":
        nome = input("Nome: ")
        if nome:
            print(f"Cadastrado: {nome}")
        else:
            print("Nome nao pode ser vazio!")
    case "2":
        print("Consultando...")
    case "3":
        print("Ate logo!")
    case _:
        print(f"Opcao '{opcao}' invalida.")
```

O `match` cuida da navegacao do menu. Dentro do case `"1"`, o `if nome:` usa truthy/falsy pra validar a entrada sem precisar de `!= ""`.

## Referencias

- [match Statements](https://docs.python.org/3/tutorial/controlflow.html#match-statements) -- documentacao oficial do match/case
- [Structural Pattern Matching](https://realpython.com/python310-new-features/#structural-pattern-matching) -- artigo no Real Python
- [Truth Value Testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing) -- documentacao oficial sobre truthy/falsy
