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

## O que sao condicionais?

Condicionais permitem que o programa tome decisoes. O `if` funciona como uma portaria: so deixa o codigo passar se a condicao for verdadeira. Com `elif` voce testa alternativas e com `else` cobre o caso em que nada deu certo.

Em Python, o que define um bloco de codigo e a **indentacao** (4 espacos). Nada de chaves como em outras linguagens.

> [!info]
> Sempre ordene seus `elif` do mais especifico pro mais generico. Python para no primeiro que for verdadeiro e ignora o resto.

## if simples

A forma mais basica: se a condicao for verdadeira, executa o bloco. Senao, pula:

```python
idade = 18

if idade >= 18:
    print("Maior de idade")     # → Maior de idade
    print("Pode tirar carteira")

print("Fim")  # sempre executa (esta fora do if)
```

Tudo que esta indentado (4 espacos pra dentro) pertence ao `if`. A linha `print("Fim")` esta fora -- roda sempre.

## if / else

Quando voce quer tratar os dois caminhos -- verdadeiro **e** falso:

```python
idade = 15

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")  # → Menor de idade
```

## if / elif / else

Quando existem varias possibilidades, use `elif` (abreviacao de "else if"):

```python
nota = 8.5

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

print(f"Nota: {nota} - Conceito: {conceito}")
# → Nota: 8.5 - Conceito: B
```

Python avalia de cima pra baixo e para no **primeiro** verdadeiro. `8.5 >= 9`? Nao. `8.5 >= 7`? Sim -- entra ali e ignora o resto.

## A ordem importa!

Se voce colocar a condicao mais generica primeiro, ela "engole" as mais especificas:

```python
nota = 9.5

# Errado -- ordem generica primeiro
if nota >= 5:
    print("C")    # 9.5 >= 5 e True, para aqui!
elif nota >= 9:
    print("A")    # nunca chega aqui

# Correto -- do mais especifico ao mais generico
if nota >= 9:
    print("A")    # → A
elif nota >= 7:
    print("B")
elif nota >= 5:
    print("C")
```

> [!alerta]
> Sempre va do mais especifico pro mais generico. Se a primeira condicao for muito ampla, as de baixo nunca executam.

## Indentacao

Em Python, indentacao nao e estetica -- e **obrigatoria**. Ela define o que pertence a cada bloco:

```python
if True:
    print("Dentro do if")     # 4 espacos = pertence ao if
    print("Ainda dentro")     # 4 espacos = pertence ao if
print("Fora do if")           # 0 espacos = fora
```

> [!alerta]
> Indentacao errada gera `IndentationError` e o programa nem roda. Cuidado tambem pra nao esquecer os dois-pontos `:` depois da condicao.

## Condicionais aninhados vs and

Voce pode aninhar `if` dentro de `if`, mas na maioria dos casos `and` fica mais limpo:

```python
idade = 20
tem_carteira = True

# Aninhado (funciona, mas fica fundo)
if idade >= 18:
    if tem_carteira:
        print("Pode dirigir")

# Simplificado com and
if idade >= 18 and tem_carteira:
    print("Pode dirigir")  # → Pode dirigir
```

## Erros comuns

```python
# Esquecer os dois-pontos
# if idade >= 18   # SyntaxError!

# Usar = em vez de ==
# if idade = 18:   # SyntaxError! (= e atribuicao, == e comparacao)

# Bloco vazio? Use pass
if idade >= 18:
    pass  # TODO: implementar depois
```

## Exemplo pratico: classificador de faixa etaria

```python
nome = input("Nome: ")
idade = int(input("Idade: "))

if idade < 0:
    faixa = "Idade invalida"
elif idade <= 12:
    faixa = "Crianca"
elif idade <= 17:
    faixa = "Adolescente"
elif idade <= 59:
    faixa = "Adulto"
else:
    faixa = "Idoso"

print(f"{nome}, {idade} anos - {faixa}")
# Nome: Ana
# Idade: 22
# → Ana, 22 anos - Adulto
```

Cada faixa e exclusiva -- so uma delas executa. O `else` no final pega todos acima de 59.

## Referencias

- [if Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements) -- documentacao oficial
- [Conditional Statements in Python](https://realpython.com/python-conditional-statements/) -- guia no Real Python
- [Curso Python #11 - Condicoes (if/elif/else)](https://www.youtube.com/watch?v=K10u3XIf1-Q) -- Curso em Video, PT-BR
