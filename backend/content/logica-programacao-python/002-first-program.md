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

## O que e o Python?

Python e uma linguagem de programacao simples e poderosa. Voce escreve instrucoes num arquivo `.py` e o computador executa linha por linha, de cima pra baixo.

Pra comecar, voce so precisa de tres coisas: `print()` pra mostrar algo na tela, `input()` pra ler o que o usuario digita, e `#` pra deixar comentarios no codigo.

> [!info]
> Para rodar um arquivo Python, salve com extensao `.py` e execute no terminal com `python arquivo.py` (ou `python3` em alguns sistemas).

## print() -- mostrando coisas na tela

`print()` e a funcao mais basica do Python. Ela recebe um valor e exibe no terminal.

```python
print("Ola, mundo!")  # → Ola, mundo!
print(42)             # → 42
print(3.14)           # → 3.14
```

Voce pode passar varios valores separados por virgula. O Python coloca um espaco entre eles automaticamente:

```python
print("Nome:", "Ana", "- Idade:", 25)
# → Nome: Ana - Idade: 25
```

Da pra personalizar o separador e o final da linha:

```python
print("Python", "e", "legal", sep="-")
# → Python-e-legal

print("Carregando", end="...")
print("Pronto!")
# → Carregando...Pronto!
```

| Parametro | O que faz | Padrao |
|-----------|-----------|--------|
| `sep` | Separador entre os valores | `" "` (espaco) |
| `end` | O que vem no final da linha | `"\n"` (quebra de linha) |

## Comentarios com #

Comentarios sao anotacoes no codigo que o Python ignora completamente. Servem pra voce (e pra quem for ler depois) entender o que aquele trecho faz.

```python
# Isto e um comentario -- Python ignora tudo depois do #
print("Ola")  # Comentario ao lado do codigo

# Desativar uma linha temporariamente:
# print("Esta linha nao roda")
```

> [!info]
> Use comentarios pra explicar o **porque**, nao o **o que**. O codigo ja mostra o que ele faz -- o comentario explica a intencao.

## input() -- lendo dados do usuario

`input()` pausa o programa e espera o usuario digitar algo. O que ele digitar volta como **string** (texto).

```python
nome = input("Qual e o seu nome? ")
print("Ola,", nome)
# Qual e o seu nome? Maria
# → Ola, Maria
```

Mesmo que o usuario digite um numero, `input()` retorna texto:

```python
idade = input("Sua idade? ")
print(type(idade))  # → <class 'str'>
```

> [!alerta]
> `input()` **sempre** retorna string. Se voce digitar `42`, vem `"42"` (texto). Para fazer contas, converta com `int()` ou `float()`.

## Convertendo a entrada do usuario

Para trabalhar com numeros vindos do `input()`, voce precisa converter antes de usar:

```python
idade = int(input("Sua idade? "))
print("Ano que vem:", idade + 1)
# Sua idade? 20
# → Ano que vem: 21

altura = float(input("Sua altura em metros? "))
print("Altura:", altura)
# Sua altura em metros? 1.75
# → Altura: 1.75
```

## f-strings -- texto com variaveis

O `f` antes das aspas cria uma **f-string**. Ela permite colocar variaveis e expressoes dentro do texto usando `{}`:

```python
nome = "Ana"
idade = 22
print(f"Meu nome e {nome} e tenho {idade} anos")
# → Meu nome e Ana e tenho 22 anos
```

## Erros comuns

```python
# Somar string com numero
idade = input("Idade: ")    # retorna string
# print(idade + 1)          # TypeError!

# Correto: converter antes
idade = int(input("Idade: "))
print(idade + 1)             # → funciona!

# Esquecer os parenteses
# print "Ola"               # SyntaxError!

# Correto: sempre usar parenteses
print("Ola")                 # → Ola
```

## Exemplo pratico: conversor de temperatura

```python
# conversor.py

celsius = float(input("Temperatura em Celsius: "))

# Formula: F = C x 9/5 + 32
fahrenheit = celsius * 9 / 5 + 32

print(f"{celsius}°C = {fahrenheit}°F")
# Temperatura em Celsius: 100
# → 100.0°C = 212.0°F
```

`celsius` vem do `input()` e precisa de `float()` porque temperatura pode ter decimais. A f-string monta o resultado final de forma legivel.

## Referencias

- [Built-in Functions: print()](https://docs.python.org/3/library/functions.html#print) -- documentacao oficial do print()
- [Built-in Functions: input()](https://docs.python.org/3/library/functions.html#input) -- documentacao oficial do input()
- [Curso Python #03 - Primeiro Programa](https://www.youtube.com/watch?v=RWRnIGo-qMc) -- Curso em Video, PT-BR
