---
slug: "conditionals"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "Estruturas Condicionais"
subtitulo: "Tomando decisões com if, elif e else"
descricao: "Aprenda a usar if, elif e else para controlar o fluxo do seu programa, entenda a indentação como delimitador de blocos e evite erros comuns."
ordem: 7
proximosPassos:
  - titulo: "Match/Case e Condições Combinadas"
    descricao: "Aprenda pattern matching e valores falsy em Python"
  - titulo: "Loop For com Range"
    descricao: "Crie repetições controladas com for e range()"
quiz:
  - pergunta: "Qual palavra-chave é usada para 'senão se' em Python?"
    opcoes: ["else if", "elseif", "elif", "elsif"]
    correta: 2
    explicacao: "✓ Python usa elif (abreviação de else if). Escrever 'else if' como duas palavras causa erro de sintaxe."
    explicacaoErrada: "✗ Em Python é elif (tudo junto). Diferente de JavaScript (else if) ou Ruby (elsif)."
  - pergunta: "O que define um bloco de código em Python?"
    opcoes: ["Chaves {}", "Parênteses ()", "Indentação (4 espaços)", "Ponto e vírgula ;"]
    correta: 2
    explicacao: "✓ Python usa indentação (geralmente 4 espaços) para delimitar blocos de código. Não usa chaves como JavaScript/C."
    explicacaoErrada: "✗ Python é única nesse aspecto: os blocos de código são definidos pela indentação (4 espaços por nível). Chaves não são usadas."
  - pergunta: "Por que a ordem dos elif importa?"
    opcoes: ["Não importa, a ordem é irrelevante", "Python executa TODOS os elif que forem verdadeiros", "Python executa apenas o PRIMEIRO bloco verdadeiro e ignora os demais", "Os elif são executados de baixo para cima"]
    correta: 2
    explicacao: "✓ Python verifica de cima para baixo e executa apenas o primeiro bloco cuja condição for verdadeira. Os demais são ignorados."
    explicacaoErrada: "✗ A ordem importa! Python avalia de cima para baixo e para no primeiro verdadeiro. Se a ordem estiver errada, condições mais específicas podem nunca ser alcançadas."
  - pergunta: "O que acontece se a indentação estiver inconsistente?"
    opcoes: ["O Python corrige automaticamente", "O programa roda mas com resultado errado", "Ocorre um IndentationError", "O bloco é ignorado"]
    correta: 2
    explicacao: "✓ Indentação inconsistente gera IndentationError e o programa não executa. Python é rigoroso quanto à indentação."
    explicacaoErrada: "✗ Python gera IndentationError quando a indentação é inconsistente. Isso impede a execução do programa."
---

## A estrutura if

O `if` executa um bloco de código somente se a condição for verdadeira:

```python
idade = 18

if idade >= 18:
    print("Você é maior de idade")
    print("Pode tirar carteira de motorista")

print("Fim do programa")  # sempre executa (fora do if)
```

### Indentação define os blocos

Em Python, **a indentação é obrigatória** e define quais linhas pertencem ao bloco:

```python
if True:
    print("Linha 1 — dentro do if")
    print("Linha 2 — dentro do if")
    print("Linha 3 — dentro do if")
print("Linha 4 — FORA do if (sempre executa)")
```

> **Convenção:** Use **4 espaços** por nível de indentação. Evite usar Tab, pois pode causar problemas de consistência.

### IndentationError — o erro mais comum para iniciantes

```python
# ❌ ERRO: falta de indentação
if True:
print("Olá")  # IndentationError: expected an indented block

# ❌ ERRO: indentação inconsistente
if True:
    print("Linha 1")
      print("Linha 2")  # IndentationError: unexpected indent

# ✅ CORRETO: indentação consistente
if True:
    print("Linha 1")
    print("Linha 2")
```

## if / else

O `else` executa quando a condição do `if` é falsa:

```python
idade = 15

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
```

### Exemplo: Par ou ímpar

```python
numero = int(input("Digite um número: "))

if numero % 2 == 0:
    print(f"{numero} é par")
else:
    print(f"{numero} é ímpar")
```

## if / elif / else

O `elif` (abreviação de "else if") permite testar múltiplas condições em sequência:

```python
nota = float(input("Digite sua nota: "))

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

### A ordem dos elif importa!

Python avalia de cima para baixo e **para no primeiro verdadeiro**:

```python
nota = 9.5

# ❌ Ordem ERRADA — nota >= 5 é True para 9.5!
if nota >= 5:
    print("C")    # Isto seria impresso! (9.5 >= 5 é True)
elif nota >= 7:
    print("B")    # Nunca alcançado para notas >= 5
elif nota >= 9:
    print("A")    # Nunca alcançado para notas >= 5

# ✅ Ordem CORRETA — do mais restritivo ao menos restritivo
if nota >= 9:
    print("A")    # → A (correto!)
elif nota >= 7:
    print("B")
elif nota >= 5:
    print("C")
```

> **Regra:** Sempre ordene as condições da **mais específica** para a **mais genérica**.

## Condicionais aninhados

Você pode colocar `if` dentro de outro `if`:

```python
idade = 20
tem_carteira = True

if idade >= 18:
    print("Maior de idade")
    if tem_carteira:
        print("Pode dirigir")
    else:
        print("Precisa tirar a carteira")
else:
    print("Menor de idade — não pode dirigir")
```

> **Dica:** Evite mais de 2-3 níveis de aninhamento. Se o código ficar muito aninhado, considere reorganizar usando `and`/`or` ou funções.

### Simplificando com operadores lógicos

```python
# Em vez de aninhar...
if idade >= 18:
    if tem_carteira:
        print("Pode dirigir")

# ...combine as condições:
if idade >= 18 and tem_carteira:
    print("Pode dirigir")
```

## Exemplo prático: Classificação de triângulo

```python
# triangulo.py — Classificar um triângulo pelos lados

print("=== Classificador de Triângulos ===\n")

a = float(input("Lado A: "))
b = float(input("Lado B: "))
c = float(input("Lado C: "))

# Primeiro: verificar se forma um triângulo válido
# (cada lado deve ser menor que a soma dos outros dois)
if a < b + c and b < a + c and c < a + b:
    if a == b == c:
        print("Triângulo EQUILÁTERO (todos os lados iguais)")
    elif a == b or b == c or a == c:
        print("Triângulo ISÓSCELES (dois lados iguais)")
    else:
        print("Triângulo ESCALENO (todos os lados diferentes)")
else:
    print("Estes valores NÃO formam um triângulo válido!")
```

## Exemplo prático: Calculadora de frete

```python
# frete.py — Cálculo de frete por região

print("=== Calculadora de Frete ===\n")

valor_compra = float(input("Valor da compra (R$): "))
regiao = input("Região (N/NE/CO/SE/S): ").upper()

# Frete grátis acima de R$ 200
if valor_compra >= 200:
    frete = 0.0
    print("Frete grátis! (compra acima de R$ 200)")
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
    print(f"\nValor da compra: R$ {valor_compra:.2f}")
    print(f"Frete:           R$ {frete:.2f}")
    print(f"Total:           R$ {total:.2f}")
```

## Exemplo prático: Sistema de login simplificado

```python
# login.py — Verificação de credenciais

USUARIO_CORRETO = "admin"
SENHA_CORRETA = "python123"
MAX_TENTATIVAS = 3

print("=== Sistema de Login ===\n")

tentativas = 0
logado = False

while tentativas < MAX_TENTATIVAS:
    usuario = input("Usuário: ")
    senha = input("Senha: ")
    tentativas += 1

    if usuario == USUARIO_CORRETO and senha == SENHA_CORRETA:
        logado = True
        break
    else:
        restantes = MAX_TENTATIVAS - tentativas
        if restantes > 0:
            print(f"Credenciais inválidas. {restantes} tentativa(s) restante(s).\n")
        else:
            print("Credenciais inválidas.")

if logado:
    print(f"\nBem-vindo, {usuario}!")
else:
    print("\nConta bloqueada por excesso de tentativas.")
```

## Dicas importantes

### 1. Não esqueça os dois-pontos

```python
# ❌ Erro comum: esquecer o : no final
# if idade >= 18   # SyntaxError!

# ✅ Correto
if idade >= 18:
    print("OK")
```

### 2. Cuidado com == vs =

```python
# ❌ = é atribuição, não comparação!
# if idade = 18:   # SyntaxError!

# ✅ == é comparação
if idade == 18:
    print("Tem 18 anos")
```

### 3. Bloco vazio com pass

```python
# Se precisar de um bloco vazio (para implementar depois):
if idade >= 18:
    pass  # TODO: implementar lógica
else:
    print("Menor de idade")
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
