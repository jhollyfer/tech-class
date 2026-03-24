---
slug: "prime-shopping"
modulo: "Módulo 6 — Projetos Práticos"
titulo: "Desafio: Primos e Carrinho de Compras"
subtitulo: "Dois projetos completos para consolidar seu aprendizado"
descricao: "Construa um verificador de números primos com math.sqrt e um sistema de carrinho de compras com TypedDict — dois projetos que consolidam tudo que você aprendeu."
ordem: 19
proximosPassos:
  - titulo: "Revisão Geral"
    descricao: "Revise todos os conceitos aprendidos até aqui"
  - titulo: "Próximo Módulo"
    descricao: "Avance para tópicos mais avançados de Python"
quiz:
  - pergunta: "Por que verificamos divisores apenas até a raiz quadrada de n para saber se é primo?"
    opcoes: ["Porque a raiz quadrada é sempre prima", "Porque se n tem um divisor maior que √n, também tem um menor que √n", "Porque math.sqrt é mais rápido que divisão", "Porque números primos são sempre menores que sua raiz"]
    correta: 1
    explicacao: "✓ Se n = a × b e a > √n, então b < √n. Logo, basta testar divisores até √n para encontrar todos os fatores."
    explicacaoErrada: "✗ Matematicamente, se um número tem um divisor maior que sua raiz quadrada, obrigatoriamente tem outro menor. Então testar até √n é suficiente."
  - pergunta: "Qual é o tipo correto para definir um carrinho de compras como lista de produtos TypedDict?"
    opcoes: ["Carrinho = dict[Produto]", "Carrinho = list[Produto]", "Carrinho = tuple[Produto]", "Carrinho = set[Produto]"]
    correta: 1
    explicacao: "✓ Um carrinho é uma lista de produtos: Carrinho = list[Produto]. Cada item é um dicionário com a estrutura Produto."
    explicacaoErrada: "✗ O carrinho é uma coleção ordenada de produtos, portanto usamos list[Produto] como type alias."
  - pergunta: "O que faz a função sum(p['preco'] * p['quantidade'] for p in carrinho)?"
    opcoes: ["Soma apenas os preços", "Soma apenas as quantidades", "Calcula o total do carrinho (preço × quantidade de cada item)", "Conta quantos produtos existem"]
    correta: 2
    explicacao: "✓ Para cada produto, multiplica preço × quantidade, e depois soma todos os subtotais — é o total do carrinho."
    explicacaoErrada: "✗ A expressão calcula o subtotal de cada produto (preço × quantidade) e soma todos para obter o total geral."
  - pergunta: "Por que 1 não é considerado um número primo?"
    opcoes: ["Porque é ímpar", "Porque é muito pequeno", "Porque por definição, primos têm exatamente 2 divisores (1 e ele mesmo), e 1 tem apenas 1 divisor", "Porque não é divisível por 2"]
    correta: 2
    explicacao: "✓ Um número primo tem exatamente dois divisores distintos: 1 e ele mesmo. O número 1 tem apenas um divisor (ele mesmo)."
    explicacaoErrada: "✗ Por definição matemática, primos precisam de exatamente 2 divisores. O 1 só tem um divisor (ele mesmo), então não é primo."
---

## Dois Desafios em Um

Nesta aula, vamos construir dois projetos completos que consolidam tudo que você aprendeu: funções, listas, TypedDict, list comprehension e formatação. Cada projeto é independente e completo.

---

## Projeto 1: Números Primos

### O que são Números Primos?

Um número primo é aquele que tem **exatamente dois divisores**: 1 e ele mesmo.

- **Primos:** 2, 3, 5, 7, 11, 13, 17, 19, 23...
- **Não primos:** 1, 4, 6, 8, 9, 10, 12, 14, 15...
- **Caso especial:** 1 **não é primo** (tem apenas 1 divisor)
- **Caso especial:** 2 é o **único primo par**

### Otimização com math.sqrt

Para verificar se n é primo, não precisamos testar todos os divisores até n. Basta ir até a **raiz quadrada**:

```python
import math

# Se n = 36, √36 = 6
# Divisores de 36: 1×36, 2×18, 3×12, 4×9, 6×6
# Todos os pares têm um fator ≤ 6 (a raiz quadrada)
# Então basta testar de 2 até 6!
```

### Passo 1: Função e_primo

```python
import math

def e_primo(n: int) -> bool:
    """Verifica se um número é primo."""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False

    # Testar divisores ímpares de 3 até √n
    limite: int = int(math.sqrt(n)) + 1
    for i in range(3, limite, 2):
        if n % i == 0:
            return False
    return True

# Testando
print(e_primo(2))    # → True
print(e_primo(7))    # → True
print(e_primo(10))   # → False
print(e_primo(97))   # → True
print(e_primo(1))    # → False
```

### Passo 2: Listar Primos até N

```python
def listar_primos_ate(n: int) -> list[int]:
    """Retorna todos os números primos de 2 até n."""
    return [x for x in range(2, n + 1) if e_primo(x)]

# Primos até 50
primos: list[int] = listar_primos_ate(50)
print(primos)
# → [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
```

### Passo 3: Estatísticas de Primos

```python
def exibir_estatisticas_primos(ate: int) -> None:
    """Exibe estatísticas sobre números primos até um valor."""
    primos: list[int] = listar_primos_ate(ate)
    total_numeros: int = ate - 1  # de 2 até ate

    print(f"Números primos de 2 até {ate}:")
    print(f"  Quantidade: {len(primos)}")
    print(f"  Percentual: {len(primos) / total_numeros * 100:.1f}%")
    print(f"  Menor primo: {primos[0]}")
    print(f"  Maior primo: {primos[-1]}")
    print(f"  Soma: {sum(primos)}")
    print(f"\n  Lista: {primos}")
```

### Programa Completo — Primos

```python
import math

def e_primo(n: int) -> bool:
    """Verifica se um número é primo."""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    limite: int = int(math.sqrt(n)) + 1
    for i in range(3, limite, 2):
        if n % i == 0:
            return False
    return True

def listar_primos_ate(n: int) -> list[int]:
    """Retorna todos os primos de 2 até n."""
    return [x for x in range(2, n + 1) if e_primo(x)]

def exibir_primos(ate: int) -> None:
    """Exibe relatório de números primos."""
    primos: list[int] = listar_primos_ate(ate)

    print("=" * 45)
    print(f"{'NÚMEROS PRIMOS':^45}")
    print("=" * 45)
    print(f"  Intervalo: 2 até {ate}")
    print(f"  Encontrados: {len(primos)} primos")
    print(f"  Maior primo: {primos[-1]}")
    print()

    # Exibir em linhas de 10
    for i in range(0, len(primos), 10):
        grupo: list[int] = primos[i:i + 10]
        linha: str = "  ".join(f"{p:>4d}" for p in grupo)
        print(f"  {linha}")

    print("=" * 45)

# Executar
exibir_primos(100)
```

---

## Projeto 2: Carrinho de Compras

### Estrutura de Dados

```python
from typing import TypedDict

class Produto(TypedDict):
    nome: str
    preco: float
    quantidade: int

# Type alias para o carrinho
Carrinho = list[Produto]
```

### Passo 1: Criando Produtos

```python
def criar_produto(nome: str, preco: float, quantidade: int = 1) -> Produto:
    """Cria um produto com os dados fornecidos."""
    return {
        "nome": nome,
        "preco": preco,
        "quantidade": quantidade
    }

# Criando produtos
notebook: Produto = criar_produto("Notebook", 3500.00)
mouse: Produto = criar_produto("Mouse", 89.90, 2)
teclado: Produto = criar_produto("Teclado", 159.90)
```

### Passo 2: Manipulando o Carrinho

```python
def adicionar_produto(carrinho: Carrinho, produto: Produto) -> Carrinho:
    """Adiciona um produto ao carrinho. Retorna o carrinho atualizado."""
    # Verificar se o produto já existe
    for item in carrinho:
        if item["nome"] == produto["nome"]:
            item["quantidade"] += produto["quantidade"]
            return carrinho

    carrinho.append(produto)
    return carrinho

def remover_produto(carrinho: Carrinho, nome: str) -> Carrinho:
    """Remove um produto do carrinho pelo nome."""
    return [p for p in carrinho if p["nome"] != nome]

def atualizar_quantidade(carrinho: Carrinho, nome: str, quantidade: int) -> Carrinho:
    """Atualiza a quantidade de um produto no carrinho."""
    for item in carrinho:
        if item["nome"] == nome:
            item["quantidade"] = quantidade
            return carrinho
    return carrinho
```

### Passo 3: Cálculos

```python
def calcular_subtotal(produto: Produto) -> float:
    """Calcula o subtotal de um produto (preço × quantidade)."""
    return produto["preco"] * produto["quantidade"]

def calcular_total(carrinho: Carrinho) -> float:
    """Calcula o total do carrinho."""
    return sum(calcular_subtotal(p) for p in carrinho)

def calcular_total_itens(carrinho: Carrinho) -> int:
    """Retorna a quantidade total de itens no carrinho."""
    return sum(p["quantidade"] for p in carrinho)

def aplicar_desconto(total: float, percentual: float) -> float:
    """Aplica um desconto percentual ao total."""
    return total * (1 - percentual / 100)
```

### Passo 4: Exibição

```python
def exibir_carrinho(carrinho: Carrinho) -> None:
    """Exibe o carrinho formatado."""
    if len(carrinho) == 0:
        print("  Carrinho vazio!")
        return

    print(f"\n{'CARRINHO DE COMPRAS':^55}")
    print("=" * 55)
    print(f"  {'Produto':<20} {'Preço':>10} {'Qtd':>5} {'Subtotal':>12}")
    print("-" * 55)

    for produto in carrinho:
        subtotal: float = calcular_subtotal(produto)
        print(
            f"  {produto['nome']:<20}"
            f" R$ {produto['preco']:>7.2f}"
            f" {produto['quantidade']:>5d}"
            f" R$ {subtotal:>8.2f}"
        )

    total: float = calcular_total(carrinho)
    itens: int = calcular_total_itens(carrinho)
    print("-" * 55)
    print(f"  {'Total de itens:':<30} {itens:>5d}")
    print(f"  {'TOTAL:':<30} R$ {total:>8.2f}")
    print("=" * 55)
```

### Programa Completo — Carrinho de Compras

```python
from typing import TypedDict

# ===== Tipos =====

class Produto(TypedDict):
    nome: str
    preco: float
    quantidade: int

Carrinho = list[Produto]

# ===== Funções de Dados =====

def criar_produto(nome: str, preco: float, quantidade: int = 1) -> Produto:
    """Cria um novo produto."""
    return {"nome": nome, "preco": preco, "quantidade": quantidade}

def adicionar_produto(carrinho: Carrinho, produto: Produto) -> Carrinho:
    """Adiciona produto ao carrinho (soma quantidade se já existir)."""
    for item in carrinho:
        if item["nome"] == produto["nome"]:
            item["quantidade"] += produto["quantidade"]
            return carrinho
    carrinho.append(produto)
    return carrinho

def remover_produto(carrinho: Carrinho, nome: str) -> Carrinho:
    """Remove produto pelo nome."""
    return [p for p in carrinho if p["nome"] != nome]

# ===== Funções de Cálculo =====

def calcular_subtotal(produto: Produto) -> float:
    """Subtotal = preço × quantidade."""
    return produto["preco"] * produto["quantidade"]

def calcular_total(carrinho: Carrinho) -> float:
    """Total do carrinho."""
    return sum(calcular_subtotal(p) for p in carrinho)

def aplicar_desconto(total: float, percentual: float) -> float:
    """Aplica desconto percentual."""
    return total * (1 - percentual / 100)

# ===== Funções de Exibição =====

def exibir_carrinho(carrinho: Carrinho) -> None:
    """Exibe o carrinho completo."""
    print(f"\n{'CARRINHO DE COMPRAS':^55}")
    print("=" * 55)
    print(f"  {'Produto':<18} {'Preço':>10} {'Qtd':>5} {'Subtotal':>14}")
    print("-" * 55)

    for p in carrinho:
        sub: float = calcular_subtotal(p)
        print(f"  {p['nome']:<18} R$ {p['preco']:>7.2f} {p['quantidade']:>5d}   R$ {sub:>8.2f}")

    total: float = calcular_total(carrinho)
    print("-" * 55)
    print(f"  {'TOTAL':>40}   R$ {total:>8.2f}")

    # Desconto para compras acima de R$ 500
    if total > 500:
        desconto: float = 10.0
        total_desconto: float = aplicar_desconto(total, desconto)
        economia: float = total - total_desconto
        print(f"  {'DESCONTO (10%)':>40}  -R$ {economia:>8.2f}")
        print(f"  {'TOTAL FINAL':>40}   R$ {total_desconto:>8.2f}")

    print("=" * 55)

# ===== Programa Principal =====

def main() -> None:
    carrinho: Carrinho = []

    # Adicionando produtos
    adicionar_produto(carrinho, criar_produto("Notebook", 3500.00))
    adicionar_produto(carrinho, criar_produto("Mouse Gamer", 189.90, 1))
    adicionar_produto(carrinho, criar_produto("Teclado Mecânico", 349.90))
    adicionar_produto(carrinho, criar_produto("Monitor 24\"", 899.90))
    adicionar_produto(carrinho, criar_produto("Mousepad", 39.90, 2))

    # Exibir carrinho
    exibir_carrinho(carrinho)

    # Remover um produto
    print("\n→ Removendo 'Mousepad'...")
    carrinho = remover_produto(carrinho, "Mousepad")
    exibir_carrinho(carrinho)

main()
```

---

## O que Você Aprendeu

Nesses dois projetos, você praticou:

- **math.sqrt()** para otimização de algoritmos
- **List comprehension** para gerar e filtrar dados
- **TypedDict** para estruturar dados complexos
- **Type alias** (`Carrinho = list[Produto]`) para legibilidade
- **Funções compostas** — cada uma com uma única responsabilidade
- **Formatação avançada** com f-strings e alinhamento
- **Imutabilidade** — funções que retornam novos dados em vez de modificar os existentes

Esses padrões são a base da programação profissional em Python. Com eles, você pode construir qualquer sistema de pequeno a médio porte.
