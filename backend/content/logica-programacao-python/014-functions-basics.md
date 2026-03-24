---
slug: "functions-basics"
modulo: "Módulo 5 — Funções"
titulo: "Funções — Fundamentos"
subtitulo: "Crie funções com def, type hints e parâmetros"
descricao: "Aprenda a criar funções com def, tipos de retorno, valores padrão e keyword arguments."
ordem: 14
proximosPassos:
  - titulo: "Funções Avançadas"
    descricao: "Lambda, callbacks, recursão e boas práticas"
  - titulo: "Desafio: Par ou Ímpar"
    descricao: "Pratique funções classificando números pares e ímpares"
quiz:
  - pergunta: "Qual a sintaxe correta para uma função com type hints?"
    opcoes: ["function soma(a: int, b: int) -> int:", "def soma(a: int, b: int) -> int:", "def soma(int a, int b) -> int:", "func soma(a int, b int) int:"]
    correta: 1
    explicacao: "Em Python: def + type hints com : tipo + retorno com -> tipo."
    explicacaoErrada: "A sintaxe usa def, : para tipos dos parâmetros e -> para retorno."
  - pergunta: "O que acontece ao chamar saudar('Carlos') se a função é def saudar(nome: str, saudacao: str = 'Olá') -> str?"
    opcoes: ["Erro — falta um argumento", "Retorna 'Olá, Carlos' usando o valor padrão", "Retorna None", "Retorna apenas 'Carlos'"]
    correta: 1
    explicacao: "saudacao tem valor padrão 'Olá', então pode ser omitido."
    explicacaoErrada: "Parâmetros com valor padrão são opcionais."
  - pergunta: "O que indica -> float na definição de uma função?"
    opcoes: ["Que a função recebe um float", "Que a função retorna um valor do tipo float", "Que a função converte tudo para float", "É apenas um comentário decorativo"]
    correta: 1
    explicacao: "A seta -> indica o tipo do valor que a função retorna."
    explicacaoErrada: "-> indica o tipo de RETORNO, não de entrada."
  - pergunta: "O que são keyword arguments?"
    opcoes: ["Argumentos que só aceitam palavras-chave do Python", "Argumentos passados pelo nome do parâmetro, não pela posição", "Argumentos que são obrigatórios", "Argumentos que só aceitam strings"]
    correta: 1
    explicacao: "São argumentos passados pelo nome, tipo calcular(salario=5000)."
    explicacaoErrada: "Keyword arguments = passar pelo nome do parâmetro, não pela ordem."
---

## Por que usar Funções?

Função é como uma receita: você define os passos uma vez e usa quantas vezes quiser.

- **Organiza** o código em pedaços menores
- **Reutiliza** lógica sem copiar e colar
- **Facilita testes** de cada parte separadamente

## Criando com def

```python
def saudar() -> None:
    print("Olá, bem-vindo ao curso!")

saudar()  # → Olá, bem-vindo ao curso!
```

### Com Parâmetros e Type Hints

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

> [!info] Type hints são opcionais, mas use sempre. Ajudam você e quem ler o código.

## Tipo de Retorno

`-> tipo` diz o que a função retorna:

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

Funções que não retornam nada usam `-> None`:

```python
def exibir_resultado(nome: str, nota: float) -> None:
    status: str = "Aprovado" if nota >= 7.0 else "Reprovado"
    print(f"{nome}: {nota:.1f} — {status}")

exibir_resultado("Ana", 8.5)    # → Ana: 8.5 — Aprovado
exibir_resultado("Bruno", 5.0)  # → Bruno: 5.0 — Reprovado
```

## Valores Padrão

Tornam parâmetros opcionais:

```python
def saudar(nome: str, saudacao: str = "Olá") -> str:
    return f"{saudacao}, {nome}!"

print(saudar("Ana"))                # → Olá, Ana!
print(saudar("Bruno", "Bom dia"))   # → Bom dia, Bruno!

def calcular_desconto(preco: float, percentual: float = 10.0) -> float:
    desconto: float = preco * (percentual / 100)
    return preco - desconto

print(calcular_desconto(100.0))        # → 90.0  (desconto padrão 10%)
print(calcular_desconto(100.0, 25.0))  # → 75.0  (desconto 25%)
```

> [!alerta] Parâmetros com valor padrão devem vir **depois** dos obrigatórios.

```python
# Correto
def criar_usuario(nome: str, idade: int, ativo: bool = True) -> None:
    pass

# Erro — padrão antes de obrigatório
# def criar_usuario(ativo: bool = True, nome: str, idade: int) -> None:
```

## Keyword Arguments

Passe argumentos **pelo nome**, sem se preocupar com a ordem:

```python
def criar_perfil(nome: str, idade: int, cidade: str = "Manaus") -> str:
    return f"{nome}, {idade} anos, mora em {cidade}"

# Pela ordem (posicional)
print(criar_perfil("Ana", 25))
# → Ana, 25 anos, mora em Manaus

# Pelo nome (keyword) — ordem não importa
print(criar_perfil(idade=30, nome="Bruno", cidade="São Paulo"))
# → Bruno, 30 anos, mora em São Paulo

# Misturando: posicionais primeiro, keyword depois
print(criar_perfil("Carla", cidade="Rio", idade=28))
# → Carla, 28 anos, mora em Rio
```

> [!info] Keyword arguments são ótimos quando a função tem muitos parâmetros.

## Retornando Múltiplos Valores

Use tuplas:

```python
def calcular_estatisticas(notas: list[float]) -> tuple[float, float, float]:
    media: float = sum(notas) / len(notas)
    maior: float = max(notas)
    menor: float = min(notas)
    return media, maior, menor

media, maior, menor = calcular_estatisticas([8.5, 7.0, 9.2, 6.8])
print(f"Média: {media:.1f}")  # → Média: 7.9
print(f"Maior: {maior}")      # → Maior: 9.2
print(f"Menor: {menor}")      # → Menor: 6.8
```

## Exemplo Completo

```python
def calcular_media(notas: list[float], pesos: list[float] | None = None) -> float:
    if pesos is None:
        return sum(notas) / len(notas)
    total_ponderado: float = sum(n * p for n, p in zip(notas, pesos))
    return total_ponderado / sum(pesos)

def classificar(media: float) -> str:
    if media >= 9.0:
        return "Excelente"
    elif media >= 7.0:
        return "Aprovado"
    elif media >= 5.0:
        return "Recuperação"
    else:
        return "Reprovado"

notas: list[float] = [8.0, 7.5, 9.0]
media: float = calcular_media(notas)
print(f"Média: {media:.1f} — {classificar(media)}")  # → Média: 8.2 — Aprovado

pesos: list[float] = [2.0, 3.0, 5.0]
media_p: float = calcular_media(notas, pesos)
print(f"Ponderada: {media_p:.1f} — {classificar(media_p)}")  # → Ponderada: 8.4 — Aprovado
```

## Boas Práticas

> [!sucesso] 4 regras de ouro para funções:

1. **Nome descritivo** — `calcular_media`, `e_aprovado`, `formatar_nome`
2. **Type hints sempre** — documente entrada e saída
3. **Uma responsabilidade** — cada função faz só uma coisa
4. **Docstrings** — explique o que a função faz com `""" """`

```python
# Bom — cada função faz uma coisa
def calcular_total(precos: list[float]) -> float:
    return sum(precos)

def aplicar_desconto(total: float, percentual: float) -> float:
    return total * (1 - percentual / 100)

# Ruim — faz coisas demais
def processar_compra_completa(itens, desconto, cliente, email):
    # calcula total, aplica desconto, envia email, salva no banco...
    pass
```