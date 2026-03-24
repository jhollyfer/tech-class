---
slug: "first-program"
modulo: "Módulo 1 — Começando com Python"
titulo: "Primeiro Programa"
subtitulo: "print(), input() e comentários"
descricao: "Crie seus primeiros programas usando print(), input() e comentários."
ordem: 2
proximosPassos:
  - titulo: "Variáveis e Tipos de Dados"
    descricao: "Guarde informações com str, int, float, bool e None"
  - titulo: "Type Hints"
    descricao: "Anote tipos para deixar o código mais claro"
quiz:
  - pergunta: "Qual função exibe informações na tela?"
    opcoes: ["echo()", "print()", "console.log()", "write()"]
    correta: 1
    explicacao: "print() é a função do Python para mostrar coisas no terminal."
    explicacaoErrada: "Em Python usamos print(). echo é do shell, console.log do JavaScript."
  - pergunta: "O que input() retorna?"
    opcoes: ["Um número inteiro", "Um valor booleano", "Sempre uma string", "Depende do que o usuário digitar"]
    correta: 2
    explicacao: "input() sempre retorna string. Mesmo se digitar 42, vem '42' (texto)."
    explicacaoErrada: "input() sempre retorna string. Para ter um número, converta com int() ou float()."
  - pergunta: "Como escrevemos um comentário em Python?"
    opcoes: ["// comentário", "/* comentário */", "# comentário", "-- comentário"]
    correta: 2
    explicacao: "Comentários começam com #. Tudo depois do # na linha é ignorado."
    explicacaoErrada: "Python usa # para comentários. // é JavaScript, /* */ é C/Java, -- é SQL."
  - pergunta: "Como executamos um arquivo Python no terminal?"
    opcoes: ["run programa.py", "python programa.py", "execute programa.py", "start programa.py"]
    correta: 1
    explicacao: "O comando é python programa.py (ou python3 em alguns sistemas)."
    explicacaoErrada: "O comando correto é python programa.py."
---

## Exibindo coisas com print()

`print()` mostra informações no terminal. Pense nele como o "falar" do Python.

```python
print("Olá, mundo!")  # → Olá, mundo!
print(42)             # → 42
print(3.14)           # → 3.14
print(True)           # → True
```

Pode passar vários valores separados por vírgula:

```python
print("Meu nome é", "Ana", "e tenho", 25, "anos")
# → Meu nome é Ana e tenho 25 anos
```

### Personalizando separador e final

```python
print("Python", "é", "legal", sep="-")
# → Python-é-legal

print("Carregando", end="...")
print("Pronto!")
# → Carregando...Pronto!
```

## Comentários

Tudo depois do `#` é ignorado pelo Python. Serve para anotar o código.

```python
# Isto é um comentário
print("Olá")  # Comentário ao lado do código

# Desativar uma linha temporariamente:
# print("Esta linha não roda")
```

> [!info]
> Python não tem comentários de bloco como `/* */`. Para várias linhas, use `#` em cada uma.

## Lendo dados com input()

`input()` pausa o programa e espera o usuário digitar algo. Sempre retorna **texto** (string).

```python
nome = input("Qual é o seu nome? ")
print("Olá,", nome)
# Qual é o seu nome? Maria
# → Olá, Maria
```

> [!alerta]
> input() **sempre** retorna string, mesmo se o usuário digitar um número!

```python
idade = input("Qual sua idade? ")
print(type(idade))  # → <class 'str'>
```

### Convertendo para número

```python
idade = int(input("Qual sua idade? "))
print("No ano que vem:", idade + 1, "anos")

altura = float(input("Sua altura em metros? "))
print("Sua altura:", altura)
```

## Exemplo: Calculadora de Idade

```python
# programa.py

print("=== Calculadora de Idade ===")
print()

nome = input("Qual é o seu nome? ")
ano_nascimento = int(input("Em que ano você nasceu? "))

idade = 2026 - ano_nascimento

print()
print("Olá,", nome + "!")
print("Você tem (ou fará)", idade, "anos em 2026.")
```

## Exemplo: Conversor de temperatura

```python
# conversor.py

celsius = float(input("Temperatura em Celsius: "))

# Fórmula: F = C × 9/5 + 32
fahrenheit = celsius * 9 / 5 + 32

print(f"{celsius}°C = {fahrenheit}°F")
```

> [!info]
> O `f` antes das aspas cria uma **f-string** — permite colocar variáveis dentro do texto com `{}`.

## Erros comuns

```python
# ❌ Somar string com número
idade = input("Idade: ")    # retorna string
# print(idade + 1)          # TypeError!

# ✅ Converter antes
idade = int(input("Idade: "))
print(idade + 1)             # → funciona!

# ❌ Esquecer os parênteses
# print "Olá"               # SyntaxError!

# ✅ Sempre usar parênteses
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
