---
slug: "conditionals"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "Estruturas Condicionais"
subtitulo: "Tomando decisões com if, elif e else"
descricao: "Use if, elif e else para controlar o fluxo do programa. Entenda indentação e evite erros comuns."
ordem: 7
proximosPassos:
  - titulo: "Match/Case e Condições Combinadas"
    descricao: "Pattern matching e valores falsy em Python"
  - titulo: "Loop For com Range"
    descricao: "Repetições controladas com for e range()"
quiz:
  - pergunta: "Qual palavra-chave é usada para 'senão se' em Python?"
    opcoes: ["else if", "elseif", "elif", "elsif"]
    correta: 2
    explicacao: "Python usa elif (tudo junto). 'else if' separado dá erro."
    explicacaoErrada: "Em Python é elif. Diferente de JavaScript (else if) ou Ruby (elsif)."
  - pergunta: "O que define um bloco de código em Python?"
    opcoes: ["Chaves {}", "Parênteses ()", "Indentação (4 espaços)", "Ponto e vírgula ;"]
    correta: 2
    explicacao: "Python usa indentação (4 espaços) para definir blocos. Sem chaves."
    explicacaoErrada: "Em Python, blocos são definidos pela indentação (4 espaços). Nada de chaves."
  - pergunta: "Por que a ordem dos elif importa?"
    opcoes: ["Não importa, a ordem é irrelevante", "Python executa TODOS os elif verdadeiros", "Python executa apenas o PRIMEIRO bloco verdadeiro e ignora os demais", "Os elif são executados de baixo para cima"]
    correta: 2
    explicacao: "Python vai de cima para baixo e para no primeiro verdadeiro. O resto é ignorado."
    explicacaoErrada: "A ordem importa! Python avalia de cima para baixo e para no primeiro verdadeiro."
  - pergunta: "O que acontece se a indentação estiver errada?"
    opcoes: ["O Python corrige automaticamente", "O programa roda mas com resultado errado", "Ocorre um IndentationError", "O bloco é ignorado"]
    correta: 2
    explicacao: "Indentação errada = IndentationError. O programa nem roda."
    explicacaoErrada: "Python gera IndentationError e o programa não executa."
---

## O if

`if` é como uma portaria: só deixa passar se a condição for verdadeira.

```python
idade = 18

if idade >= 18:
    print("Maior de idade")
    print("Pode tirar carteira")

print("Fim")  # sempre executa (está fora do if)
```

### Indentação define o bloco

Em Python, o que está "para dentro" (4 espaços) pertence ao bloco:

```python
if True:
    print("Dentro do if")   # 4 espaços
    print("Ainda dentro")   # 4 espaços
print("Fora do if")         # sem espaço = fora
```

> [!alerta]
> Indentação errada = erro! Python é rigoroso com isso.

```python
# ❌ ERRO
if True:
print("Olá")  # IndentationError!

# ✅ CORRETO
if True:
    print("Olá")
```

## if / else

`else` é o "senão" — roda quando a condição é falsa:

```python
idade = 15

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
```

## if / elif / else

`elif` testa outra condição. Pode ter quantos quiser:

```python
nota = float(input("Sua nota: "))

if nota >= 9:
    conceito = "A"
elif nota >= 7:
    conceito = "B"
elif nota >= 5:
    conceito = "C"
elif nota >= 3:
    conceito = "D"
else:
    conceito = "E"

print(f"Nota: {nota} — Conceito: {conceito}")
```

### A ordem importa!

Python para no **primeiro** que for verdadeiro:

```python
nota = 9.5

# ❌ Ordem errada
if nota >= 5:
    print("C")    # 9.5 >= 5 é True, para aqui!
elif nota >= 9:
    print("A")    # nunca chega aqui

# ✅ Ordem certa — do mais específico ao mais genérico
if nota >= 9:
    print("A")    # → A
elif nota >= 7:
    print("B")
elif nota >= 5:
    print("C")
```

> [!sucesso]
> Sempre ordene do mais específico para o mais genérico.

## Condicionais aninhados

`if` dentro de `if`:

```python
idade = 20
tem_carteira = True

if idade >= 18:
    if tem_carteira:
        print("Pode dirigir")
    else:
        print("Precisa tirar a carteira")
else:
    print("Menor de idade")
```

Mas dá para simplificar com `and`:

```python
if idade >= 18 and tem_carteira:
    print("Pode dirigir")
```

> [!info]
> Evite mais de 2-3 níveis de aninhamento. Use `and`/`or` para simplificar.

## Exemplo: Classificação de triângulo

```python
a = float(input("Lado A: "))
b = float(input("Lado B: "))
c = float(input("Lado C: "))

# Cada lado deve ser menor que a soma dos outros dois
if a < b + c and b < a + c and c < a + b:
    if a == b == c:
        print("EQUILÁTERO (todos iguais)")
    elif a == b or b == c or a == c:
        print("ISÓSCELES (dois iguais)")
    else:
        print("ESCALENO (todos diferentes)")
else:
    print("NÃO forma um triângulo!")
```

## Exemplo: Calculadora de frete

```python
valor_compra = float(input("Valor da compra (R$): "))
regiao = input("Região (N/NE/CO/SE/S): ").upper()

if valor_compra >= 200:
    frete = 0.0
    print("Frete grátis!")
elif regiao == "SE" or regiao == "S":
    frete = 15.0
elif regiao == "CO":
    frete = 25.0
elif regiao == "NE":
    frete = 30.0
elif regiao == "N":
    frete = 40.0
else:
    print("Região inválida!")
    frete = -1

if frete >= 0:
    total = valor_compra + frete
    print(f"\nCompra:  R$ {valor_compra:.2f}")
    print(f"Frete:   R$ {frete:.2f}")
    print(f"Total:   R$ {total:.2f}")
```

## Exemplo: Sistema de login

```python
USUARIO_CORRETO = "admin"
SENHA_CORRETA = "python123"
MAX_TENTATIVAS = 3

print("=== Login ===\n")
logado = False

for tentativa in range(1, MAX_TENTATIVAS + 1):
    usuario = input("Usuário: ")
    senha = input("Senha: ")

    if usuario == USUARIO_CORRETO and senha == SENHA_CORRETA:
        logado = True
        break
    else:
        restantes = MAX_TENTATIVAS - tentativa
        if restantes > 0:
            print(f"Errado. {restantes} tentativa(s) restante(s).\n")

if logado:
    print(f"\nBem-vindo, {usuario}!")
else:
    print("\nConta bloqueada.")
```

## Erros comuns

```python
# ❌ Esquecer os dois-pontos
# if idade >= 18   # SyntaxError!

# ✅ Correto
if idade >= 18:
    print("OK")

# ❌ Usar = em vez de ==
# if idade = 18:   # SyntaxError!

# ✅ Correto
if idade == 18:
    print("Tem 18 anos")

# Bloco vazio? Use pass
if idade >= 18:
    pass  # TODO: implementar depois
```

## Resumo

| Conceito | Sintaxe |
| --- | --- |
| Condicional simples | `if condição:` |
| Senão | `else:` |
| Senão se | `elif condição:` |
| Bloco vazio | `pass` |
| Indentação | 4 espaços por nível |
| Comparação | `==` (não `=`) |
| Ordem dos elif | Do mais específico ao mais genérico |
