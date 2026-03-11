---
slug: "pseudocode"
modulo: "Módulo 2 — Algoritmos"
titulo: "Algoritmos: Pseudocódigo"
subtitulo: "Linguagem informal para descrever algoritmos antes do código real"
descricao: "Pseudocódigo com setinha ← para atribuição, palavras-chave, indentação para escopo e exemplos de soma e fatorial."
ordem: 10
proximosPassos:
  - titulo: "Programação em blocos"
    descricao: "Comece a programar visualmente com Scratch"
  - titulo: "Primeira linguagem"
    descricao: "Passe do pseudocódigo para uma linguagem real"
  - titulo: "Estruturas de dados"
    descricao: "Aprenda sobre listas, pilhas e filas"
quiz:
  - pergunta: "Pseudocódigo pode ser executado pelo computador?"
    opcoes: ["Sim, qualquer computador executa", "Não, é apenas para organizar o raciocínio", "Sim, com um compilador especial", "Depende da linguagem"]
    correta: 1
    explicacao: "✓ Pseudocódigo é uma ferramenta para humanos, não é compilável ou interpretável."
    explicacaoErrada: "✗ Pseudocódigo NÃO é executável — é um rascunho para organizar a lógica."
  - pergunta: "O que significa a setinha ← no pseudocódigo?"
    opcoes: ["Comparação (igual a)", "Atribuição (recebe/armazena)", "Seta de fluxo", "Menor ou igual"]
    correta: 1
    explicacao: "✓ A setinha ← significa \"recebe\" ou \"armazena um valor\"."
    explicacaoErrada: "✗ ← é atribuição: a variável à esquerda recebe o valor da expressão à direita."
  - pergunta: "Para que serve a indentação (recuo) no pseudocódigo?"
    opcoes:
      - "Apenas estética"
      - "Mostrar o escopo dos blocos (o que pertence a cada estrutura)"
      - "Economizar espaço"
      - "Indicar comentários"
    correta: 1
    explicacao: "✓ A indentação mostra visualmente quais instruções pertencem a qual bloco (loop, if, etc.)."
    explicacaoErrada: "✗ A indentação é funcional: mostra que instruções recuadas estão dentro do bloco acima."
  - pergunta: "Qual palavra-chave indica repetição no pseudocódigo?"
    opcoes: ["se", "escrever", "enquanto", "ler"]
    correta: 2
    explicacao: "✓ 'Enquanto...faça' é a estrutura de repetição (loop) do pseudocódigo."
    explicacaoErrada: "✗ 'Enquanto' (ou 'repita') são as palavras-chave de repetição."
---

## O que é pseudocódigo?

Pseudocódigo (ou pseudolinguagem) é uma forma de escrever algoritmos que parece com código de programação, mas sem regras rígidas de sintaxe.

Não é executável por computadores — é uma ferramenta para humanos organizarem o raciocínio antes de programar.

É o meio-termo entre a descrição narrativa (muito informal) e o código real (muito formal).

## Variáveis e atribuição com ←

Variáveis armazenam valores. No pseudocódigo, usamos a setinha ← para atribuição:

A setinha ← significa "recebe" ou "armazena". É diferente do = matemático (igualdade).

```pseudocode
programa soma
  ler A
  ler B
  S ← A + B
  escrever S
fim-programa
```

## Palavras-chave do pseudocódigo

As palavras-chave mais comuns:

- `ler` — receber dados de entrada
- `escrever` — exibir dados de saída
- `se...então...senão...fim-se` — estrutura condicional
- `enquanto...faça...fim-enquanto` — loop com teste no início
- `repita...até` — loop com teste no final
- `programa...fim-programa` — delimita o algoritmo

A indentação (recuo) mostra o escopo dos blocos: tudo que está recuado dentro de um "enquanto" pertence ao loop.

## Exemplo: programa fatorial

```pseudocode
programa fatorial
  ler N
  resultado ← 1
  enquanto N > 1 faça
    resultado ← resultado × N
    N ← N - 1
  fim-enquanto
  escrever resultado
fim-programa
```

> [!info]
> Note a indentação: o conteúdo dentro do "enquanto" está recuado, mostrando visualmente que pertence ao loop. Essa prática é obrigatória em Python e recomendada em todas as linguagens.

## Pseudocódigo vs fluxograma

```mermaid
graph LR
    A[Descrição Narrativa] -->|mais formal| B[Pseudocódigo]
    B -->|mais formal| C[Código Real]
    D[Fluxograma] -->|versão textual| B
```

O pseudocódigo é a ponte entre o pensamento lógico e a programação real. Quando você dominar pseudocódigo, traduzir para qualquer linguagem será direto.
