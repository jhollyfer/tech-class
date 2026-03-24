---
slug: "functions-basics"
modulo: "Módulo 5 — Funções"
titulo: "Funções — Fundamentos"
subtitulo: "Criando funções com def, type hints e parâmetros"
descricao: "Aprenda a criar funções em Python usando def, type hints para parâmetros e retorno, valores padrão e keyword arguments."
ordem: 14
proximosPassos:
  - titulo: "Funções Avançadas"
    descricao: "Lambda, callbacks, recursão e boas práticas com funções"
  - titulo: "Desafio: Par ou Ímpar"
    descricao: "Pratique funções classificando números pares e ímpares"
quiz:
  - pergunta: "Qual é a sintaxe correta para definir uma função com type hints?"
    opcoes: ["function soma(a: int, b: int) -> int:", "def soma(a: int, b: int) -> int:", "def soma(int a, int b) -> int:", "func soma(a int, b int) int:"]
    correta: 1
    explicacao: "✓ Em Python usamos def, type hints após os parâmetros com : tipo, e -> tipo para o retorno."
    explicacaoErrada: "✗ A sintaxe correta usa def, dois-pontos para type hints e seta para retorno: def soma(a: int, b: int) -> int:"
  - pergunta: "O que acontece ao chamar saudar('Carlos') se a função é def saudar(nome: str, saudacao: str = 'Olá') -> str?"
    opcoes: ["Erro — falta um argumento", "Retorna 'Olá, Carlos' usando o valor padrão", "Retorna None", "Retorna apenas 'Carlos'"]
    correta: 1
    explicacao: "✓ O parâmetro saudacao tem valor padrão 'Olá', então pode ser omitido na chamada."
    explicacaoErrada: "✗ Parâmetros com valores padrão são opcionais. Como saudacao='Olá', a chamada saudar('Carlos') usa esse padrão."
  - pergunta: "O que indica -> float na definição de uma função?"
    opcoes: ["Que a função recebe um float", "Que a função retorna um valor do tipo float", "Que a função converte tudo para float", "É apenas um comentário decorativo"]
    correta: 1
    explicacao: "✓ A anotação -> tipo após os parênteses indica o tipo do valor retornado pela função."
    explicacaoErrada: "✗ A seta -> indica o tipo de RETORNO da função. É um type hint que documenta o que a função retorna."
  - pergunta: "O que são keyword arguments?"
    opcoes: ["Argumentos que só aceitam palavras-chave do Python", "Argumentos passados pelo nome do parâmetro, não pela posição", "Argumentos que são obrigatórios", "Argumentos que só aceitam strings"]
    correta: 1
    explicacao: "✓ Keyword arguments permitem passar valores especificando o nome do parâmetro, como calcular(salario=5000, taxa=0.1)."
    explicacaoErrada: "✗ Keyword arguments são argumentos passados pelo NOME, como funcao(nome='Ana'). Isso permite alterar a ordem dos argumentos."
---

## Por que usar Funções?

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas ajudam a:

- **Organizar** o código em partes menores e mais claras
- **Reutilizar** lógica sem repetir código
- **Testar** cada parte do programa de forma independente
- **Documentar** o que cada parte do programa faz

## Definindo Funções com def

A palavra-chave `def` cria uma nova função:

```python
# Função sem parâmetros e sem retorno
def saudar() -> None:
    print("Olá, bem-vindo ao curso!")

saudar()  # → Olá, bem-vindo ao curso!
```

### Funções com Parâmetros e Type Hints

Type hints documentam os tipos esperados dos parâmetros e do retorno:

```python
def somar(a: int, b: int) -> int:
    return a + b

resultado: int = somar(3, 5)
print(resultado)  # → 8

def calcular_area(base: float, altura: float) -> float:
    return base * altura / 2

area: float = calcular_area(10.0, 5.0)
print(f"Área: {area}")  # → Área: 25.0
```

> **Importante:** type hints em Python são **opcionais** e não impedem a execução — são dicas para o programador e para ferramentas de análise. Mas usá-los é uma **boa prática** essencial.

## Tipo de Retorno

A anotação `-> tipo` indica o que a função retorna:

```python
def calcular_media(notas: list[float]) -> float:
    return sum(notas) / len(notas)

media: float = calcular_media([8.5, 7.0, 9.2])
print(f"Média: {media:.1f}")  # → Média: 8.2

def e_aprovado(nota: float) -> bool:
    return nota >= 7.0

print(e_aprovado(8.5))   # → True
print(e_aprovado(5.0))   # → False
```

### Funções que não retornam nada: -> None

```python
def exibir_resultado(nome: str, nota: float) -> None:
    status: str = "Aprovado" if nota >= 7.0 else "Reprovado"
    print(f"{nome}: {nota:.1f} — {status}")

exibir_resultado("Ana", 8.5)    # → Ana: 8.5 — Aprovado
exibir_resultado("Bruno", 5.0)  # → Bruno: 5.0 — Reprovado
```

## Parâmetros com Valores Padrão

Valores padrão tornam parâmetros opcionais:

```python
def saudar(nome: str, saudacao: str = "Olá") -> str:
    return f"{saudacao}, {nome}!"

print(saudar("Ana"))                # → Olá, Ana!
print(saudar("Bruno", "Bom dia"))   # → Bom dia, Bruno!

def calcular_desconto(preco: float, percentual: float = 10.0) -> float:
    desconto: float = preco * (percentual / 100)
    return preco - desconto

print(calcular_desconto(100.0))        # → 90.0 (desconto padrão de 10%)
print(calcular_desconto(100.0, 25.0))  # → 75.0 (desconto de 25%)
```

> **Regra:** parâmetros com valor padrão devem vir **depois** dos parâmetros obrigatórios.

```python
# ✅ Correto
def criar_usuario(nome: str, idade: int, ativo: bool = True) -> None:
    pass

# ❌ Erro de sintaxe — padrão antes de obrigatório
# def criar_usuario(ativo: bool = True, nome: str, idade: int) -> None:
#     pass
```

## Keyword Arguments

Você pode chamar funções passando argumentos **pelo nome**, não pela posição:

```python
def criar_perfil(nome: str, idade: int, cidade: str = "Manaus") -> str:
    return f"{nome}, {idade} anos, mora em {cidade}"

# Argumentos posicionais (pela ordem)
print(criar_perfil("Ana", 25))
# → Ana, 25 anos, mora em Manaus

# Keyword arguments (pelo nome — a ordem não importa)
print(criar_perfil(idade=30, nome="Bruno", cidade="São Paulo"))
# → Bruno, 30 anos, mora em São Paulo

# Misturando: posicionais primeiro, depois keyword
print(criar_perfil("Carla", cidade="Rio", idade=28))
# → Carla, 28 anos, mora em Rio
```

Keyword arguments são especialmente úteis quando a função tem **muitos parâmetros** ou **valores padrão**.

## Retornando Múltiplos Valores

Python permite retornar vários valores usando **tuplas** (via desempacotamento):

```python
def calcular_estatisticas(notas: list[float]) -> tuple[float, float, float]:
    media: float = sum(notas) / len(notas)
    maior: float = max(notas)
    menor: float = min(notas)
    return media, maior, menor

# Desempacotando os valores retornados
media, maior, menor = calcular_estatisticas([8.5, 7.0, 9.2, 6.8])
print(f"Média: {media:.1f}")  # → Média: 7.9
print(f"Maior: {maior}")      # → Maior: 9.2
print(f"Menor: {menor}")      # → Menor: 6.8
```

### Exemplo Prático: Criar Usuário

```python
def criar_usuario(nome: str, email: str) -> tuple[str, str, bool]:
    nome_formatado: str = nome.strip().title()
    email_formatado: str = email.strip().lower()
    valido: bool = "@" in email_formatado and "." in email_formatado
    return nome_formatado, email_formatado, valido

nome, email, valido = criar_usuario("  ana silva  ", "ANA@Email.Com")
print(f"Nome: {nome}")      # → Nome: Ana Silva
print(f"Email: {email}")    # → Email: ana@email.com
print(f"Válido: {valido}")  # → Válido: True
```

## Exemplo Completo: Calculadora de Média

```python
def calcular_media(notas: list[float], pesos: list[float] | None = None) -> float:
    """Calcula a média simples ou ponderada de uma lista de notas."""
    if pesos is None:
        return sum(notas) / len(notas)

    total_ponderado: float = sum(n * p for n, p in zip(notas, pesos))
    total_pesos: float = sum(pesos)
    return total_ponderado / total_pesos

def classificar(media: float) -> str:
    """Retorna a classificação baseada na média."""
    if media >= 9.0:
        return "Excelente"
    elif media >= 7.0:
        return "Aprovado"
    elif media >= 5.0:
        return "Recuperação"
    else:
        return "Reprovado"

# Usando as funções
notas: list[float] = [8.0, 7.5, 9.0]
media: float = calcular_media(notas)
status: str = classificar(media)
print(f"Média: {media:.1f} — {status}")  # → Média: 8.2 — Aprovado

# Com pesos
pesos: list[float] = [2.0, 3.0, 5.0]
media_ponderada: float = calcular_media(notas, pesos)
status_p: str = classificar(media_ponderada)
print(f"Média ponderada: {media_ponderada:.1f} — {status_p}")  # → Média ponderada: 8.4 — Aprovado
```

## Boas Práticas

1. **Um nome descritivo** — o nome deve dizer o que a função faz: `calcular_media`, `e_aprovado`, `formatar_nome`
2. **Type hints sempre** — documente os tipos de entrada e saída
3. **Docstrings** — use aspas triplas para explicar o que a função faz
4. **Responsabilidade única** — cada função deve fazer apenas uma coisa

```python
# ✅ Bom — cada função tem uma responsabilidade
def calcular_total(precos: list[float]) -> float:
    return sum(precos)

def aplicar_desconto(total: float, percentual: float) -> float:
    return total * (1 - percentual / 100)

# ❌ Ruim — função faz coisas demais
def processar_compra_completa(itens, desconto, cliente, email):
    # calcula total, aplica desconto, envia email, salva no banco...
    pass
```

Com esses fundamentos, você já pode criar funções organizadas e reutilizáveis. Na próxima aula, vamos explorar lambda, recursão e funções como parâmetros.
