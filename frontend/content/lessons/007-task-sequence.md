---
slug: "task-sequence"
modulo: "Módulo 2 — Algoritmos"
titulo: "Sequência de tarefas"
subtitulo: "Quebrando o problema em partes — a base do pensamento algorítmico"
descricao: "Introdução à estrutura de programas (entrada-processamento-saída), decomposição de problemas em 4 níveis, e a definição formal de algoritmo."
ordem: 7
proximosPassos:
  - titulo: "Descrição narrativa"
    descricao: "Aprenda a escrever algoritmos em linguagem natural"
  - titulo: "Fluxograma"
    descricao: "Represente algoritmos visualmente com diagramas"
  - titulo: "Pseudocódigo"
    descricao: "Escreva algoritmos em formato semi-formal"
quiz:
  - pergunta: "Qual a estrutura fundamental de todo programa?"
    opcoes:
      - "Código, teste e deploy"
      - "Entrada, processamento e saída"
      - "HTML, CSS e JavaScript"
      - "Variáveis, funções e classes"
    correta: 1
    explicacao: "✓ Entrada → Processamento → Saída é a base de qualquer programa."
    explicacaoErrada: "✗ Todo programa recebe dados (entrada), processa e produz resultado (saída)."
  - pergunta: "Decompor um problema significa:"
    opcoes:
      - "Deletar partes desnecessárias"
      - "Dividir em problemas menores e resolvíveis"
      - "Simplificar removendo requisitos"
      - "Traduzir para outra linguagem"
    correta: 1
    explicacao: "✓ Decomposição é dividir um problema grande em subproblemas gerenciáveis."
    explicacaoErrada: "✗ Decompor é quebrar em partes menores, não remover ou simplificar o problema."
  - pergunta: "Um algoritmo deve ser:"
    opcoes:
      - "Infinito e flexível"
      - "Finito, definido e efetivo"
      - "Rápido e curto"
      - "Complexo e completo"
    correta: 1
    explicacao: "✓ Finito (termina), definido (sem ambiguidade) e efetivo (executável)."
    explicacaoErrada: "✗ As três propriedades essenciais são: finitude, definição e efetividade."
  - pergunta: "Programador é quem:"
    opcoes:
      - "Escreve código o dia inteiro"
      - "Resolve problemas e, se precisar, usa código"
      - "Conhece todas as linguagens"
      - "Trabalha com computador"
    correta: 1
    explicacao: "✓ O foco é resolver problemas — código é apenas uma ferramenta para isso."
    explicacaoErrada: "✗ Programador é quem resolve problemas — e se precisar, utiliza código para isso."
---

## Programadores são resolvedores de problemas

Antes de escrever código, um programador precisa ENTENDER o problema e dividi-lo em partes menores.

"Uma pessoa que resolve problemas, e se precisar, utiliza código para isso." O código é a ferramenta, não o objetivo.

Essa habilidade de decomposição é mais importante que qualquer linguagem de programação.

> [!info]
> Programador não é quem escreve código. É quem resolve problemas — e se precisar, usa código para isso.

## Entrada, processamento e saída

Todo programa segue este fluxo:

- **ENTRADA** — dados que o programa recebe (teclado, arquivo, sensor, microfone, câmera)
- **PROCESSAMENTO** — operações realizadas sobre os dados (cálculos, comparações, filtragens)
- **SAÍDA** — resultado entregue ao usuário (tela, arquivo, som, LED, impressora)

Mesmo os programas mais complexos (jogos, IA, redes sociais) seguem essa estrutura fundamental.

```mermaid
graph LR
    A[Entrada] --> B[Processamento]
    B --> C[Saída]
```

## Exemplo: arrumar a casa (decomposição em 4 níveis)

"Arrumar a casa" é um problema grande. Vamos decompor em níveis progressivos:

**NÍVEL 1** — Visão geral: Arrumar a casa

**NÍVEL 2** — Cômodos: Sala → Quartos → Cozinha → Banheiro

**NÍVEL 3** — Tarefas por cômodo:
- Sala: recolher objetos, varrer, passar pano, organizar estante
- Cozinha: lavar louça, limpar fogão, varrer, organizar armários
- Banheiro: limpar vaso, limpar pia, lavar chão, trocar toalhas

**NÍVEL 4** — Subtarefas detalhadas:
- Lavar louça: separar pratos e copos → aplicar detergente → esfregar → enxaguar → secar

Cada nível adiciona mais detalhe. O nível necessário depende de quem vai executar.

## O que é um algoritmo?

Definição formal: "Um algoritmo é uma sequência de tarefas bem definidas e não ambíguas para resolver um problema."

Características de um bom algoritmo:

- **Finito** — tem um número definido de passos e eventualmente termina
- **Definido** — cada passo é claro, sem ambiguidade ("mexa bem" é ambíguo, "mexa por 3 minutos" é definido)
- **Efetivo** — cada passo pode ser executado ("divida por zero" não é efetivo)

Receitas de cozinha, manuais de montagem e roteiros de viagem são algoritmos do dia a dia.
