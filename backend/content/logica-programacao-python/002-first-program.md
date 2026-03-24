---
slug: "first-program"
modulo: "Módulo 1 — Começando com Python"
titulo: "Primeiro Programa"
subtitulo: "Escrevendo e executando seu primeiro código Python"
descricao: "Aprenda a usar print(), input() e comentários para criar seus primeiros programas interativos em Python."
ordem: 2
proximosPassos:
  - titulo: "Variáveis e Tipos de Dados"
    descricao: "Aprenda a armazenar informações usando str, int, float, bool e None"
  - titulo: "Type Hints"
    descricao: "Descubra como anotar tipos para código mais legível"
quiz:
  - pergunta: "Qual função é usada para exibir informações na tela em Python?"
    opcoes: ["echo()", "print()", "console.log()", "write()"]
    correta: 1
    explicacao: "✓ print() é a função padrão do Python para exibir dados no terminal."
    explicacaoErrada: "✗ Em Python usamos print(). echo é do shell, console.log é do JavaScript e write é um método de arquivos."
  - pergunta: "O que a função input() retorna?"
    opcoes: ["Um número inteiro", "Um valor booleano", "Sempre uma string", "Depende do que o usuário digitar"]
    correta: 2
    explicacao: "✓ input() sempre retorna uma string (str), mesmo que o usuário digite um número. Para obter um número, é preciso converter com int() ou float()."
    explicacaoErrada: "✗ input() sempre retorna uma string. Se o usuário digitar 42, o resultado será '42' (texto). É necessário converter manualmente."
  - pergunta: "Como escrevemos um comentário de uma linha em Python?"
    opcoes: ["// comentário", "/* comentário */", "# comentário", "-- comentário"]
    correta: 2
    explicacao: "✓ Em Python, comentários de uma linha começam com # (cerquilha). Tudo após o # na mesma linha é ignorado."
    explicacaoErrada: "✗ Python usa # para comentários de linha. // é usado em JavaScript/C, /* */ em C/Java, e -- em SQL."
  - pergunta: "Como executamos um arquivo Python chamado programa.py no terminal?"
    opcoes: ["run programa.py", "python programa.py", "execute programa.py", "start programa.py"]
    correta: 1
    explicacao: "✓ Usamos o comando python programa.py (ou python3 programa.py em alguns sistemas) para executar um arquivo Python."
    explicacaoErrada: "✗ O comando correto é python programa.py. O interpretador Python lê e executa o arquivo diretamente."
---

## Exibindo informações com print()

A função `print()` é a ferramenta mais básica para exibir informações no terminal. Ela aceita qualquer tipo de dado e o converte automaticamente em texto.

```python
# Exibindo texto (string)
print("Olá, mundo!")

# Exibindo números
print(42)
print(3.14)

# Exibindo valores booleanos
print(True)
print(False)
```

**Saída:**

```
Olá, mundo!
42
3.14
True
False
```

### Imprimindo múltiplos valores

Você pode passar vários valores para `print()`, separados por vírgula. Por padrão, eles são separados por um espaço:

```python
print("Meu nome é", "Ana", "e tenho", 25, "anos")
# → Meu nome é Ana e tenho 25 anos
```

### Personalizando o separador e o final

```python
# Mudando o separador (sep)
print("Python", "é", "legal", sep="-")
# → Python-é-legal

# Mudando o caractere final (end) — padrão é \n (nova linha)
print("Carregando", end="...")
print("Pronto!")
# → Carregando...Pronto!
```

## Comentários em Python

Comentários servem para documentar o código. O Python ignora tudo que vem depois do `#` na mesma linha.

```python
# Isto é um comentário de linha inteira
print("Olá")  # Isto é um comentário ao lado do código

# Comentários são úteis para:
# - Explicar o que o código faz
# - Deixar lembretes para você mesmo
# - Desativar temporariamente uma linha de código
# print("Esta linha não será executada")
```

> **Nota:** Python não tem comentários de bloco como `/* */` do JavaScript. Para múltiplas linhas, use `#` em cada linha ou use strings de múltiplas linhas com `"""` (docstrings).

```python
"""
Isto tecnicamente é uma string de múltiplas linhas,
mas é frequentemente usada como comentário de bloco
ou documentação de funções (docstring).
"""
```

## Lendo dados do usuário com input()

A função `input()` pausa o programa e espera o usuário digitar algo. Ela **sempre retorna uma string**.

```python
nome = input("Qual é o seu nome? ")
print("Olá,", nome)
```

**Execução:**

```
Qual é o seu nome? Maria
Olá, Maria
```

### Cuidado: input() sempre retorna string!

```python
idade = input("Qual sua idade? ")
print(type(idade))  # → <class 'str'>
```

Mesmo que o usuário digite `25`, o valor será a **string** `"25"`, não o **número** `25`.

### Convertendo a entrada para número

Para trabalhar com números, é preciso converter usando `int()` ou `float()`:

```python
# Convertendo para inteiro
idade = int(input("Qual sua idade? "))
print("No ano que vem você terá", idade + 1, "anos")

# Convertendo para decimal
altura = float(input("Qual sua altura em metros? "))
print("Sua altura:", altura)
```

## Estrutura básica de um script Python

Um programa Python é simplesmente um arquivo `.py` com instruções que são executadas de cima para baixo:

```python
# programa.py — Meu primeiro programa interativo

# 1. Saudação
print("=== Calculadora de Idade ===")
print()

# 2. Coletando dados do usuário
nome = input("Qual é o seu nome? ")
ano_nascimento = int(input("Em que ano você nasceu? "))

# 3. Calculando
idade = 2026 - ano_nascimento

# 4. Exibindo o resultado
print()
print("Olá,", nome + "!")
print("Você tem (ou fará)", idade, "anos em 2026.")
```

**Execução:**

```
=== Calculadora de Idade ===

Qual é o seu nome? Carlos
Em que ano você nasceu? 1998

Olá, Carlos!
Você tem (ou fará) 28 anos em 2026.
```

## Exemplo prático: Conversor de temperatura

Vamos criar um programa completo que converte Celsius para Fahrenheit:

```python
# conversor.py — Conversor de temperatura

print("🌡️ Conversor Celsius → Fahrenheit")
print("-" * 35)

celsius = float(input("Digite a temperatura em Celsius: "))

# Fórmula: F = C × 9/5 + 32
fahrenheit = celsius * 9 / 5 + 32

print(f"{celsius}°C equivale a {fahrenheit}°F")
```

**Execução:**

```
🌡️ Conversor Celsius → Fahrenheit
-----------------------------------
Digite a temperatura em Celsius: 30
30.0°C equivale a 86.0°F
```

> **Dica:** O `f` antes das aspas em `f"{celsius}°C"` cria uma **f-string**, que permite inserir variáveis diretamente no texto. Vamos estudar isso em detalhes na próxima aula!

## Erros comuns para evitar

```python
# ❌ Erro: tentar somar string com número
idade = input("Idade: ")  # retorna string
# print(idade + 1)  # TypeError!

# ✅ Correto: converter antes
idade = int(input("Idade: "))
print(idade + 1)  # Agora funciona!

# ❌ Erro: esquecer os parênteses
# print "Olá"  # SyntaxError em Python 3!

# ✅ Correto: sempre usar parênteses
print("Olá")
```

## Resumo

| Conceito | Exemplo |
| --- | --- |
| Exibir na tela | `print("texto")` |
| Ler do usuário | `input("mensagem")` |
| Comentário | `# texto ignorado` |
| Converter para inteiro | `int(input("número: "))` |
| Converter para decimal | `float(input("decimal: "))` |
| Executar arquivo | `python arquivo.py` |
