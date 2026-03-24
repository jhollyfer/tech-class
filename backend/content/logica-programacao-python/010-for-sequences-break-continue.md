---
slug: "for-sequences-break-continue"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "For em Sequências, Break e Continue"
subtitulo: "Percorrendo listas, strings e controlando o loop"
descricao: "Percorra listas e strings com for, use enumerate() para índice + valor, e controle o fluxo com break, continue e else."
ordem: 10
proximosPassos:
  - titulo: "Listas e Tuplas"
    descricao: "Crie e manipule coleções de dados"
  - titulo: "Funções"
    descricao: "Organize código em blocos reutilizáveis com def"
quiz:
  - pergunta: "O que enumerate() retorna?"
    opcoes: ["Apenas os valores", "Apenas os índices", "Tuplas com (índice, valor)", "Um dicionário"]
    correta: 2
    explicacao: "enumerate() dá pares (índice, valor) a cada volta do loop."
    explicacaoErrada: "enumerate() gera tuplas (índice, valor). Ex: enumerate(['a', 'b']) dá (0, 'a'), (1, 'b')."
  - pergunta: "Qual a diferença entre break e continue?"
    opcoes: ["São a mesma coisa", "break pausa e continue retoma", "break sai do loop, continue pula para a próxima iteração", "break pula uma iteração, continue sai do loop"]
    correta: 2
    explicacao: "break sai do loop inteiro. continue pula o resto da volta atual e vai pra próxima."
    explicacaoErrada: "break = sair do loop. continue = pular pra próxima volta."
  - pergunta: "Quando o else de um for executa?"
    opcoes: ["Sempre", "Nunca", "Quando o loop termina SEM break", "Quando o loop termina COM break"]
    correta: 2
    explicacao: "else do loop executa só se o loop terminou sem break."
    explicacaoErrada: "O else executa quando o loop termina normalmente (sem break). Se teve break, o else é pulado."
  - pergunta: "Como percorrer uma string caractere por caractere?"
    opcoes: ["for char in string.split():", "for char in string:", "for char in list(string):", "Não é possível"]
    correta: 1
    explicacao: "Strings são iteráveis. for char in 'Python': percorre P, y, t, h, o, n."
    explicacaoErrada: "Basta usar for char in string:. Strings são sequências em Python."
---

## Percorrendo listas

```python
frutas = ["maçã", "banana", "laranja", "uva"]

for fruta in frutas:
    print(f"Eu gosto de {fruta}")
# → Eu gosto de maçã
# → Eu gosto de banana
# → Eu gosto de laranja
# → Eu gosto de uva
```

## Percorrendo strings

Cada volta do loop pega um caractere:

```python
for letra in "Python":
    print(letra, end=" ")
# → P y t h o n
```

### Contando vogais

```python
texto = "Programação em Python"
vogais = "aeiouáéíóúãõâêô"
contador = 0

for char in texto.lower():
    if char in vogais:
        contador += 1

print(f"Vogais: {contador}")  # → 8
```

## enumerate() — índice + valor

Quando precisa saber a **posição** e o **valor** ao mesmo tempo:

```python
frutas = ["maçã", "banana", "laranja"]

# ❌ Funciona, mas é feio
for i in range(len(frutas)):
    print(f"{i}: {frutas[i]}")

# ✅ Com enumerate — limpo!
for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")
# → 0: maçã
# → 1: banana
# → 2: laranja
```

### Começando de outro número

```python
alunos = ["Ana", "Carlos", "Maria"]

for num, aluno in enumerate(alunos, start=1):
    print(f"Aluno {num}: {aluno}")
# → Aluno 1: Ana
# → Aluno 2: Carlos
# → Aluno 3: Maria
```

## break — saindo do loop

`break` encerra o loop na hora:

```python
numeros = [10, 25, 37, 42, 58, 63]

for num in numeros:
    if num == 42:
        print(f"Achei o {num}!")
        break
    print(f"Verificando {num}...")
# → Verificando 10...
# → Verificando 25...
# → Verificando 37...
# → Achei o 42!
```

### Coletando dados até "fim"

```python
nomes = []

while True:
    nome = input("Nome (ou 'fim'): ")
    if nome.lower() == "fim":
        break
    nomes.append(nome)

print(f"Cadastrados: {nomes}")
```

## continue — pulando para a próxima volta

`continue` pula o resto da volta atual:

```python
# Só números pares
for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(i, end=" ")
# → 2 4 6 8 10
```

### break vs continue

```python
print("--- break ---")
for i in range(1, 6):
    if i == 3:
        break       # SAI do loop
    print(i)
# → 1
# → 2

print("--- continue ---")
for i in range(1, 6):
    if i == 3:
        continue    # PULA o 3
    print(i)
# → 1
# → 2
# → 4
# → 5
```

## else no loop

Recurso exclusivo do Python: o `else` roda **só se o loop terminou sem break**.

```python
# Sem break → else executa
for i in range(5):
    print(i, end=" ")
else:
    print("\nTerminou normalmente!")
# → 0 1 2 3 4
# → Terminou normalmente!

# Com break → else NÃO executa
for i in range(5):
    if i == 3:
        break
    print(i, end=" ")
else:
    print("\nTerminou normalmente!")  # não aparece!
# → 0 1 2
```

### Uso perfeito: busca

```python
# Verificar se é primo
numero = 17

for divisor in range(2, numero):
    if numero % divisor == 0:
        print(f"{numero} NÃO é primo (÷ por {divisor})")
        break
else:
    print(f"{numero} É primo!")
# → 17 É primo!
```

```python
# Buscar em lista
alunos = ["Ana", "Carlos", "Maria"]
busca = "Pedro"

for aluno in alunos:
    if aluno == busca:
        print(f"Encontrado: {aluno}")
        break
else:
    print(f"'{busca}' não encontrado.")
# → 'Pedro' não encontrado.
```

## Exemplo: Boletim escolar

```python
alunos = [
    ("Ana", 8.5),
    ("Carlos", 6.2),
    ("Maria", 9.8),
    ("João", 4.5),
    ("Pedro", 7.0),
    ("Lucia", 3.2),
]

print("=== Boletim ===\n")

aprovados = 0
reprovados = 0

for i, (nome, nota) in enumerate(alunos, start=1):
    if nota < 0 or nota > 10:
        continue

    status = "Aprovado" if nota >= 7 else "Reprovado"

    if status == "Aprovado":
        aprovados += 1
    else:
        reprovados += 1

    print(f"{i}. {nome:<10} | {nota:.1f} | {status}")

print(f"\nAprovados: {aprovados}")
print(f"Reprovados: {reprovados}")
print(f"Aprovação: {aprovados / len(alunos) * 100:.0f}%")
```

## Exemplo: Validador de senhas

```python
senhas = ["abc", "Python123!", "12345678", "Senh@Fort3", "aa"]

for senha in senhas:
    problemas = []

    if len(senha) < 8:
        problemas.append("curta demais")

    tem_maiuscula = tem_minuscula = tem_numero = tem_especial = False

    for char in senha:
        if char.isupper():    tem_maiuscula = True
        elif char.islower():  tem_minuscula = True
        elif char.isdigit():  tem_numero = True
        else:                 tem_especial = True

    if not tem_maiuscula: problemas.append("sem maiúscula")
    if not tem_minuscula: problemas.append("sem minúscula")
    if not tem_numero:    problemas.append("sem número")
    if not tem_especial:  problemas.append("sem especial")

    if not problemas:
        print(f"'{senha}' — FORTE")
    else:
        print(f"'{senha}' — FRACA ({', '.join(problemas)})")
```

## List Comprehension (prévia)

Uma forma compacta de criar listas com loop:

```python
# Tradicional
quadrados = []
for i in range(1, 6):
    quadrados.append(i ** 2)

# List comprehension — mesma coisa, uma linha
quadrados = [i ** 2 for i in range(1, 6)]
print(quadrados)  # → [1, 4, 9, 16, 25]

# Com filtro
pares = [i for i in range(1, 11) if i % 2 == 0]
print(pares)  # → [2, 4, 6, 8, 10]
```

> [!info]
> Vamos estudar list comprehension em detalhes na aula de listas.

## Resumo

| Conceito | Sintaxe | O que faz |
| --- | --- | --- |
| Percorrer lista | `for item in lista:` | Cada elemento |
| Percorrer string | `for char in texto:` | Cada caractere |
| Índice + valor | `for i, val in enumerate(seq):` | Posição e valor |
| Início do índice | `enumerate(seq, start=1)` | Começa de outro número |
| Sair do loop | `break` | Encerra o loop |
| Pular volta | `continue` | Vai pra próxima |
| else no loop | `for..else` | Executa se não teve break |
| List comprehension | `[expr for x in seq]` | Lista em uma linha |
