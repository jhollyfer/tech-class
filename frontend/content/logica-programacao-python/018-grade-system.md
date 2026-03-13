---
slug: "grade-system"
modulo: "Módulo 6 — Projetos Práticos"
titulo: "Desafio: Sistema de Notas"
subtitulo: "Avaliando uma turma com TypedDict, funções e formatação"
descricao: "Construa um sistema completo de avaliação usando TypedDict para estruturar dados, funções para lógica e f-strings para exibição."
ordem: 18
proximosPassos:
  - titulo: "Desafio: Primos e Carrinho de Compras"
    descricao: "Dois projetos completos para consolidar seu aprendizado"
  - titulo: "Revisão do Módulo"
    descricao: "Revise os conceitos de funções e estruturas de dados"
quiz:
  - pergunta: "O que é um TypedDict em Python?"
    opcoes: ["Um dicionário que só aceita strings", "Um tipo que define a estrutura de um dicionário com tipos específicos para cada chave", "Um dicionário que converte valores automaticamente", "Uma classe que herda de dict"]
    correta: 1
    explicacao: "✓ TypedDict define a forma esperada de um dicionário — quais chaves existem e qual o tipo de cada valor."
    explicacaoErrada: "✗ TypedDict cria um tipo que especifica exatamente quais chaves um dicionário deve ter e o tipo de cada valor."
  - pergunta: "Qual é a vantagem de separar calcular_media() e classificar() em funções distintas?"
    opcoes: ["Não há vantagem — uma função só seria mais simples", "Cada função pode ser testada e reutilizada independentemente", "Python exige funções separadas", "É necessário para TypedDict funcionar"]
    correta: 1
    explicacao: "✓ Funções com responsabilidade única podem ser testadas, reutilizadas e modificadas sem afetar outras partes do código."
    explicacaoErrada: "✗ Separar funções segue o SRP: cada uma pode ser testada sozinha, reutilizada em outros contextos e modificada sem efeitos colaterais."
  - pergunta: "Como acessar o campo 'nome' de um TypedDict aluno?"
    opcoes: ["aluno.nome", "aluno->nome", "aluno['nome']", "aluno.get_nome()"]
    correta: 2
    explicacao: "✓ TypedDict usa a mesma sintaxe de dicionários: aluno['nome']. Não usa ponto como classes."
    explicacaoErrada: "✗ TypedDict é um dicionário tipado. Acessa-se os valores com colchetes: aluno['nome'], não com ponto."
---

## O Desafio

Vamos criar um sistema de avaliação de alunos que:

1. Define a estrutura de dados de um aluno com **TypedDict**
2. Calcula a **média** de cada aluno
3. **Classifica** por faixa (Excelente, Aprovado, Recuperação, Reprovado)
4. **Exibe** um relatório formatado da turma

## Conceito-Chave: TypedDict

`TypedDict` permite definir a forma exata de um dicionário — quais chaves ele deve ter e qual o tipo de cada valor:

```python
from typing import TypedDict

class Aluno(TypedDict):
    nome: str
    notas: list[float]

# Criando um aluno com a estrutura definida
aluno: Aluno = {
    "nome": "Ana Silva",
    "notas": [8.5, 7.0, 9.2]
}

# Acessando campos
print(aluno["nome"])    # → "Ana Silva"
print(aluno["notas"])   # → [8.5, 7.0, 9.2]
```

> **Diferença de classes:** TypedDict é um dicionário com tipos definidos. Acessa-se com `aluno["nome"]` (colchetes), não `aluno.nome` (ponto).

## Passo 1: Definindo as Estruturas

```python
from typing import TypedDict

class Aluno(TypedDict):
    nome: str
    notas: list[float]

class Resultado(TypedDict):
    nome: str
    media: float
    status: str
```

Temos dois tipos:
- `Aluno` — dados de entrada (nome e notas)
- `Resultado` — dados processados (nome, média e status)

## Passo 2: Função de Média

```python
def calcular_media(notas: list[float]) -> float:
    """Calcula a média aritmética de uma lista de notas."""
    if len(notas) == 0:
        return 0.0
    return sum(notas) / len(notas)

# Testando
print(calcular_media([8.5, 7.0, 9.2]))   # → 8.23...
print(calcular_media([5.0, 4.5, 6.0]))   # → 5.16...
print(calcular_media([]))                  # → 0.0
```

## Passo 3: Função de Classificação

```python
def classificar(media: float) -> str:
    """Classifica o aluno pela média."""
    if media >= 9.0:
        return "Excelente"
    elif media >= 7.0:
        return "Aprovado"
    elif media >= 5.0:
        return "Recuperação"
    else:
        return "Reprovado"

# Testando
print(classificar(9.5))   # → "Excelente"
print(classificar(7.5))   # → "Aprovado"
print(classificar(5.5))   # → "Recuperação"
print(classificar(3.0))   # → "Reprovado"
```

## Passo 4: Avaliando um Aluno

```python
def avaliar_aluno(aluno: Aluno) -> Resultado:
    """Processa um aluno e retorna seu resultado."""
    media: float = calcular_media(aluno["notas"])
    status: str = classificar(media)
    return {
        "nome": aluno["nome"],
        "media": media,
        "status": status
    }

# Testando
aluno: Aluno = {"nome": "Ana", "notas": [8.5, 7.0, 9.2]}
resultado: Resultado = avaliar_aluno(aluno)
print(resultado)
# → {'nome': 'Ana', 'media': 8.23..., 'status': 'Aprovado'}
```

## Passo 5: Avaliando a Turma Inteira

```python
def avaliar_turma(turma: list[Aluno]) -> list[Resultado]:
    """Avalia todos os alunos da turma."""
    return [avaliar_aluno(aluno) for aluno in turma]
```

## Passo 6: Exibição Formatada

```python
def exibir_cabecalho() -> None:
    """Exibe o cabeçalho do relatório."""
    print("=" * 55)
    print(f"{'RELATÓRIO DA TURMA':^55}")
    print("=" * 55)
    print(f"  {'Aluno':<20} {'Média':>8} {'Status':>15}")
    print("-" * 55)

def exibir_resultado(resultado: Resultado) -> None:
    """Exibe uma linha do relatório."""
    nome: str = resultado["nome"]
    media: float = resultado["media"]
    status: str = resultado["status"]
    print(f"  {nome:<20} {media:>8.1f} {status:>15}")

def exibir_resumo(resultados: list[Resultado]) -> None:
    """Exibe o resumo da turma."""
    total: int = len(resultados)
    medias: list[float] = [r["media"] for r in resultados]

    # Contagem por status
    excelentes: int = len([r for r in resultados if r["status"] == "Excelente"])
    aprovados: int = len([r for r in resultados if r["status"] == "Aprovado"])
    recuperacao: int = len([r for r in resultados if r["status"] == "Recuperação"])
    reprovados: int = len([r for r in resultados if r["status"] == "Reprovado"])

    print("-" * 55)
    print(f"\n  Resumo da Turma:")
    print(f"    Total de alunos:   {total}")
    print(f"    Média da turma:    {sum(medias) / len(medias):.1f}")
    print(f"    Maior média:       {max(medias):.1f}")
    print(f"    Menor média:       {min(medias):.1f}")
    print(f"\n  Distribuição:")
    print(f"    Excelente:    {excelentes:>3d} ({excelentes / total * 100:.0f}%)")
    print(f"    Aprovado:     {aprovados:>3d} ({aprovados / total * 100:.0f}%)")
    print(f"    Recuperação:  {recuperacao:>3d} ({recuperacao / total * 100:.0f}%)")
    print(f"    Reprovado:    {reprovados:>3d} ({reprovados / total * 100:.0f}%)")
```

## Programa Completo

```python
from typing import TypedDict

# ===== Tipos =====

class Aluno(TypedDict):
    nome: str
    notas: list[float]

class Resultado(TypedDict):
    nome: str
    media: float
    status: str

# ===== Funções de Lógica =====

def calcular_media(notas: list[float]) -> float:
    """Calcula a média aritmética."""
    if len(notas) == 0:
        return 0.0
    return sum(notas) / len(notas)

def classificar(media: float) -> str:
    """Classifica o aluno pela média."""
    if media >= 9.0:
        return "Excelente"
    elif media >= 7.0:
        return "Aprovado"
    elif media >= 5.0:
        return "Recuperação"
    else:
        return "Reprovado"

def avaliar_aluno(aluno: Aluno) -> Resultado:
    """Processa um aluno e retorna seu resultado."""
    media: float = calcular_media(aluno["notas"])
    return {"nome": aluno["nome"], "media": media, "status": classificar(media)}

def avaliar_turma(turma: list[Aluno]) -> list[Resultado]:
    """Avalia todos os alunos."""
    return [avaliar_aluno(aluno) for aluno in turma]

# ===== Funções de Exibição =====

def exibir_relatorio(resultados: list[Resultado]) -> None:
    """Exibe o relatório completo da turma."""
    print("=" * 55)
    print(f"{'RELATÓRIO DA TURMA':^55}")
    print("=" * 55)
    print(f"  {'Aluno':<20} {'Média':>8} {'Status':>15}")
    print("-" * 55)

    for r in sorted(resultados, key=lambda x: x["media"], reverse=True):
        print(f"  {r['nome']:<20} {r['media']:>8.1f} {r['status']:>15}")

    # Resumo
    medias: list[float] = [r["media"] for r in resultados]
    total: int = len(resultados)
    print("-" * 55)
    print(f"  Média da turma: {sum(medias) / total:.1f}")
    print(f"  Melhor nota: {max(medias):.1f} | Pior nota: {min(medias):.1f}")
    print("=" * 55)

# ===== Programa Principal =====

def main() -> None:
    turma: list[Aluno] = [
        {"nome": "Ana Silva",      "notas": [9.5, 8.8, 9.2]},
        {"nome": "Bruno Costa",    "notas": [7.0, 6.5, 7.8]},
        {"nome": "Carla Souza",    "notas": [5.0, 4.5, 6.0]},
        {"nome": "Diego Lima",     "notas": [3.0, 4.0, 2.5]},
        {"nome": "Eva Rodrigues",  "notas": [8.0, 9.0, 8.5]},
        {"nome": "Felipe Santos",  "notas": [6.5, 7.0, 5.5]},
    ]

    resultados: list[Resultado] = avaliar_turma(turma)
    exibir_relatorio(resultados)

main()
```

## O que Você Aprendeu

- **TypedDict** para definir a estrutura de dicionários com tipos
- **Composição de funções** — `calcular_media` → `classificar` → `avaliar_aluno` → `avaliar_turma`
- **List comprehension** para processar coleções
- **Formatação avançada** com f-strings — alinhamento, largura fixa, casas decimais
- **sorted() com lambda** para ordenar resultados
- **Separação de responsabilidades** — lógica separada da exibição

Esse padrão de TypedDict + funções compostas é a base para construir sistemas reais em Python.
