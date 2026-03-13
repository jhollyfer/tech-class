---
slug: "for-sequences-break-continue"
modulo: "Módulo 3 — Estruturas de Controle"
titulo: "For em Sequências, Break e Continue"
subtitulo: "Iterando listas, strings e controlando o fluxo do loop"
descricao: "Aprenda a iterar listas e strings com for, usar enumerate() para obter índice e valor, controlar o fluxo com break e continue, e entender o else no loop."
ordem: 10
proximosPassos:
  - titulo: "Listas e Tuplas"
    descricao: "Aprenda a criar e manipular coleções de dados em Python"
  - titulo: "Funções"
    descricao: "Organize seu código em blocos reutilizáveis com def"
quiz:
  - pergunta: "O que enumerate() retorna ao iterar uma lista?"
    opcoes: ["Apenas os valores", "Apenas os índices", "Tuplas com (índice, valor)", "Um dicionário"]
    correta: 2
    explicacao: "✓ enumerate() retorna pares (índice, valor) a cada iteração, permitindo acessar tanto a posição quanto o elemento."
    explicacaoErrada: "✗ enumerate() gera tuplas (índice, valor). Exemplo: enumerate(['a', 'b']) produz (0, 'a'), (1, 'b')."
  - pergunta: "Qual é a diferença entre break e continue?"
    opcoes: ["São a mesma coisa", "break pausa e continue retoma", "break sai do loop, continue pula para a próxima iteração", "break pula uma iteração, continue sai do loop"]
    correta: 2
    explicacao: "✓ break encerra o loop completamente. continue pula o restante da iteração atual e vai para a próxima."
    explicacaoErrada: "✗ break = sair do loop inteiro. continue = pular o resto da iteração atual e ir para a próxima. São comportamentos diferentes."
  - pergunta: "Quando o bloco else de um loop for é executado?"
    opcoes: ["Sempre, após o loop", "Nunca — else não funciona com for", "Somente quando o loop termina SEM break", "Somente quando o loop termina COM break"]
    correta: 2
    explicacao: "✓ O else do loop executa somente se o loop terminou normalmente (sem break). Se break foi usado, o else é ignorado."
    explicacaoErrada: "✗ O else de um loop é exclusivo do Python. Ele executa quando o loop termina sem break. Se houve break, o else é pulado."
  - pergunta: "Como iterar uma string caractere por caractere?"
    opcoes: ["for char in string.split():", "for char in string:", "for char in list(string):", "Não é possível iterar strings"]
    correta: 1
    explicacao: "✓ Strings são iteráveis em Python. for char in 'Python': percorre cada caractere: P, y, t, h, o, n."
    explicacaoErrada: "✗ Em Python, strings são sequências iteráveis. Basta usar for char in string: para percorrer cada caractere."
---

## Iterando sequências com for

Em Python, o `for` pode percorrer **qualquer sequência iterável**: listas, strings, tuplas, dicionários e mais.

### Iterando listas

```python
frutas = ["maçã", "banana", "laranja", "uva"]

for fruta in frutas:
    print(f"Eu gosto de {fruta}")

# Saída:
# Eu gosto de maçã
# Eu gosto de banana
# Eu gosto de laranja
# Eu gosto de uva
```

### Iterando strings

Strings são sequências de caracteres e podem ser percorridas diretamente:

```python
palavra = "Python"

for letra in palavra:
    print(letra, end=" ")
# → P y t h o n

# Contando vogais
texto = "Programação em Python"
vogais = "aeiouáéíóúãõâêô"
contador = 0

for char in texto.lower():
    if char in vogais:
        contador += 1

print(f"\nTotal de vogais: {contador}")  # → Total de vogais: 8
```

### Iterando listas de números

```python
notas = [8.5, 7.0, 9.2, 6.8, 8.0]

soma = 0
for nota in notas:
    soma += nota

media = soma / len(notas)
print(f"Média: {media:.1f}")  # → Média: 7.9
```

## enumerate() — Índice + Valor

Quando você precisa do **índice** e do **valor** ao mesmo tempo, use `enumerate()`:

```python
frutas = ["maçã", "banana", "laranja", "uva"]

# Sem enumerate — funciona, mas é feio
for i in range(len(frutas)):
    print(f"{i}: {frutas[i]}")

# Com enumerate — Pythônico e elegante!
for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")

# Saída (ambos):
# 0: maçã
# 1: banana
# 2: laranja
# 3: uva
```

### Começando o índice em outro valor

```python
# Índice começando em 1 (útil para exibir ao usuário)
alunos = ["Ana", "Carlos", "Maria", "João"]

for numero, aluno in enumerate(alunos, start=1):
    print(f"Aluno {numero}: {aluno}")

# Saída:
# Aluno 1: Ana
# Aluno 2: Carlos
# Aluno 3: Maria
# Aluno 4: João
```

### Encontrando a posição de um elemento

```python
temperaturas = [22.5, 28.3, 31.0, 19.8, 25.4, 33.2, 27.1]

# Encontrar o dia mais quente
maior_temp = temperaturas[0]
dia_mais_quente = 0

for i, temp in enumerate(temperaturas):
    if temp > maior_temp:
        maior_temp = temp
        dia_mais_quente = i

print(f"Dia mais quente: dia {dia_mais_quente + 1} ({maior_temp}°C)")
# → Dia mais quente: dia 6 (33.2°C)
```

## break — Saindo do loop

O `break` encerra o loop **imediatamente**, pulando todas as iterações restantes:

```python
# Procurar um número específico
numeros = [10, 25, 37, 42, 58, 63, 71]

for num in numeros:
    print(f"Verificando {num}...")
    if num == 42:
        print(f"Encontrei o {num}!")
        break  # sai do loop

print("Busca encerrada.")

# Saída:
# Verificando 10...
# Verificando 25...
# Verificando 37...
# Verificando 42...
# Encontrei o 42!
# Busca encerrada.
```

### break em loops de entrada

```python
# Coletar nomes até digitar 'fim'
nomes = []

while True:
    nome = input("Digite um nome (ou 'fim'): ")
    if nome.lower() == "fim":
        break
    nomes.append(nome)

print(f"\nNomes cadastrados: {nomes}")
```

## continue — Pulando para a próxima iteração

O `continue` pula o **restante da iteração atual** e vai direto para a próxima:

```python
# Imprimir apenas números pares
for i in range(1, 11):
    if i % 2 != 0:
        continue  # pula ímpares
    print(i, end=" ")
# → 2 4 6 8 10

# Ignorar valores negativos
valores = [10, -3, 25, -7, 8, -1, 30]
soma_positivos = 0

for v in valores:
    if v < 0:
        continue  # ignora negativos
    soma_positivos += v

print(f"\nSoma dos positivos: {soma_positivos}")  # → 73
```

### Diferença visual: break vs continue

```python
print("--- break ---")
for i in range(1, 6):
    if i == 3:
        break      # SAI do loop no 3
    print(i)
# → 1
# → 2

print("\n--- continue ---")
for i in range(1, 6):
    if i == 3:
        continue   # PULA o 3
    print(i)
# → 1
# → 2
# → 4
# → 5
```

## else no loop — Exclusivo do Python!

Python tem um recurso único: o bloco `else` em loops. Ele é executado **somente quando o loop termina normalmente** (sem `break`).

```python
# else é executado (loop terminou sem break)
for i in range(5):
    print(i, end=" ")
else:
    print("\nLoop completou normalmente!")
# → 0 1 2 3 4
# → Loop completou normalmente!

# else NÃO é executado (loop terminou com break)
for i in range(5):
    if i == 3:
        break
    print(i, end=" ")
else:
    print("\nLoop completou normalmente!")  # não imprime!
# → 0 1 2
```

### Uso prático: Busca com confirmação

O `else` no loop é perfeito para buscas — ele executa quando o item **não foi encontrado**:

```python
# Verificar se um número é primo
numero = 17

for divisor in range(2, numero):
    if numero % divisor == 0:
        print(f"{numero} NÃO é primo (divisível por {divisor})")
        break
else:
    # Só executa se nenhum divisor foi encontrado (sem break)
    print(f"{numero} É primo!")
# → 17 É primo!

numero = 15
for divisor in range(2, numero):
    if numero % divisor == 0:
        print(f"{numero} NÃO é primo (divisível por {divisor})")
        break
else:
    print(f"{numero} É primo!")
# → 15 NÃO é primo (divisível por 3)
```

### Busca em lista com else

```python
alunos = ["Ana", "Carlos", "Maria", "João"]
busca = "Pedro"

for aluno in alunos:
    if aluno == busca:
        print(f"Encontrado: {aluno}")
        break
else:
    print(f"'{busca}' não foi encontrado na lista.")
# → 'Pedro' não foi encontrado na lista.
```

## Exemplo prático: Processador de notas

```python
# notas.py — Processar e classificar notas dos alunos

alunos = [
    ("Ana", 8.5),
    ("Carlos", 6.2),
    ("Maria", 9.8),
    ("João", 4.5),
    ("Pedro", 7.0),
    ("Lucia", 3.2),
]

print("=== Boletim Escolar ===\n")

aprovados = 0
reprovados = 0

for i, (nome, nota) in enumerate(alunos, start=1):
    # Pular notas inválidas
    if nota < 0 or nota > 10:
        continue

    status = "Aprovado" if nota >= 7 else "Reprovado"

    if status == "Aprovado":
        aprovados += 1
    else:
        reprovados += 1

    print(f"{i}. {nome:<10} | Nota: {nota:.1f} | {status}")

print(f"\nAprovados: {aprovados}")
print(f"Reprovados: {reprovados}")
print(f"Taxa de aprovação: {aprovados / len(alunos) * 100:.0f}%")
```

**Saída:**

```
=== Boletim Escolar ===

1. Ana        | Nota: 8.5 | Aprovado
2. Carlos     | Nota: 6.2 | Reprovado
3. Maria      | Nota: 9.8 | Aprovado
4. João       | Nota: 4.5 | Reprovado
5. Pedro      | Nota: 7.0 | Aprovado
6. Lucia      | Nota: 3.2 | Reprovado

Aprovados: 3
Reprovados: 3
Taxa de aprovação: 50%
```

## Exemplo prático: Validador de senhas

```python
# validador.py — Verificar força de senhas

senhas = ["abc", "Python123!", "12345678", "Senh@Fort3", "aa"]

print("=== Validador de Senhas ===\n")

for senha in senhas:
    problemas = []

    if len(senha) < 8:
        problemas.append("mínimo 8 caracteres")

    tem_maiuscula = False
    tem_minuscula = False
    tem_numero = False
    tem_especial = False

    for char in senha:
        if char.isupper():
            tem_maiuscula = True
        elif char.islower():
            tem_minuscula = True
        elif char.isdigit():
            tem_numero = True
        else:
            tem_especial = True

    if not tem_maiuscula:
        problemas.append("falta letra maiúscula")
    if not tem_minuscula:
        problemas.append("falta letra minúscula")
    if not tem_numero:
        problemas.append("falta número")
    if not tem_especial:
        problemas.append("falta caractere especial")

    if not problemas:
        print(f"'{senha}' — FORTE")
    else:
        print(f"'{senha}' — FRACA ({', '.join(problemas)})")
```

## List Comprehension — Prévia

Python oferece uma forma compacta de criar listas a partir de loops, chamada **list comprehension**:

```python
# Forma tradicional
quadrados = []
for i in range(1, 6):
    quadrados.append(i ** 2)
print(quadrados)  # → [1, 4, 9, 16, 25]

# List comprehension — mesma coisa, uma linha!
quadrados = [i ** 2 for i in range(1, 6)]
print(quadrados)  # → [1, 4, 9, 16, 25]

# Com condição (filtro)
pares = [i for i in range(1, 11) if i % 2 == 0]
print(pares)  # → [2, 4, 6, 8, 10]

# Transformando strings
nomes = ["ana", "carlos", "maria"]
maiusculos = [nome.upper() for nome in nomes]
print(maiusculos)  # → ['ANA', 'CARLOS', 'MARIA']
```

> List comprehension será estudada em mais detalhes quando abordarmos listas.

## Resumo

| Conceito | Sintaxe | Descrição |
| --- | --- | --- |
| Iterar lista | `for item in lista:` | Percorre cada elemento |
| Iterar string | `for char in texto:` | Percorre cada caractere |
| Índice + valor | `for i, val in enumerate(seq):` | Acessa posição e valor |
| Início do índice | `enumerate(seq, start=1)` | Começa em outro número |
| Sair do loop | `break` | Encerra o loop |
| Pular iteração | `continue` | Vai para a próxima |
| else no loop | `for..else` / `while..else` | Executa se não teve break |
| List comprehension | `[expr for x in seq]` | Criar lista em uma linha |
