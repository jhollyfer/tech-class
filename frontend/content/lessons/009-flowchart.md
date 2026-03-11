---
slug: "flowchart"
modulo: "Módulo 2 — Algoritmos"
titulo: "Algoritmos: Fluxograma"
subtitulo: "Representação visual de algoritmos com símbolos padronizados"
descricao: "Fluxogramas com os 4 símbolos principais (elipse, retângulo, paralelogramo, losango), exemplo de soma, bifurcação com febre e loop do fatorial."
ordem: 9
proximosPassos:
  - titulo: "Pseudocódigo"
    descricao: "Transforme seus fluxogramas em texto semi-formal"
  - titulo: "Diagramas avançados"
    descricao: "Aprenda fluxogramas com múltiplas decisões"
  - titulo: "Ferramentas"
    descricao: "Use ferramentas online para criar fluxogramas"
quiz:
  - pergunta: "Qual forma geométrica representa uma decisão (if/else)?"
    opcoes: ["Retângulo", "Elipse", "Losango", "Paralelogramo"]
    correta: 2
    explicacao: "✓ O losango (diamante) representa testes condicionais com duas saídas: SIM e NÃO."
    explicacaoErrada: "✗ Decisões são representadas pelo losango, sempre com saídas SIM e NÃO."
  - pergunta: "O que representa o paralelogramo no fluxograma?"
    opcoes: ["Decisão", "Processo", "Entrada/Saída de dados", "Início/Fim"]
    correta: 2
    explicacao: "✓ O paralelogramo indica operações de entrada ou saída de dados."
    explicacaoErrada: "✗ Paralelogramo = Entrada/Saída. Retângulo = Processo. Losango = Decisão."
  - pergunta: "Como um loop aparece em um fluxograma?"
    opcoes:
      - "Com um símbolo especial de loop"
      - "Com uma seta que volta a um ponto anterior"
      - "Com linhas tracejadas"
      - "Com um retângulo duplo"
    correta: 1
    explicacao: "✓ Loops são representados por setas que retornam a um ponto anterior do fluxo."
    explicacaoErrada: "✗ Não há símbolo especial — loops são setas que voltam para cima."
  - pergunta: "O que acontece se um loop não tem condição de saída?"
    opcoes:
      - "O programa termina automaticamente"
      - "Gera um erro de compilação"
      - "Loop infinito — nunca termina"
      - "O sistema operacional interrompe"
    correta: 2
    explicacao: "✓ Sem condição de saída, o loop repete para sempre (loop infinito)."
    explicacaoErrada: "✗ Um loop sem condição de parada executa indefinidamente."
---

## O que é um fluxograma?

O fluxograma é uma representação gráfica de um algoritmo, usando formas geométricas conectadas por setas.

Cada forma tem um significado específico, criando uma linguagem visual universal.

É mais preciso que a descrição narrativa e mais visual que o pseudocódigo.

## Os 4 símbolos do fluxograma

- **Elipse (oval)** — Início e Fim do algoritmo
- **Retângulo** — Processo/Ação — qualquer operação: calcular, atribuir valor, incrementar
- **Paralelogramo** — Entrada ou Saída de dados — ler do teclado, exibir na tela
- **Losango (diamante)** — Decisão/Teste condicional — sempre com duas saídas: SIM e NÃO
- **Setas** — indicam a direção do fluxo de execução

> [!info]
> O losango (decisão) sempre tem duas saídas: SIM e NÃO. É o equivalente visual do if/else.

## Exemplo 1: soma A + B (linear)

```mermaid
graph TD
    A([INÍCIO]) --> B[/Ler A/]
    B --> C[/Ler B/]
    C --> D["S ← A + B"]
    D --> E[/Exibir S/]
    E --> F([FIM])
```

Neste caso simples, não há losangos — o fluxo é totalmente linear.

## Exemplo 2: verificar febre (com bifurcação)

```mermaid
graph TD
    A([INÍCIO]) --> B[/Ler temperatura T/]
    B --> C{T > 37?}
    C -->|SIM| D[/Exibir "Febre detectada"/]
    C -->|NÃO| E[/Exibir "Temperatura normal"/]
    D --> F([FIM])
    E --> F
```

O losango cria dois caminhos possíveis — a bifurcação.

## Exemplo 3: fatorial (com loop)

```mermaid
graph TD
    A([INÍCIO]) --> B[/Ler N/]
    B --> C["resultado ← 1"]
    C --> D{N > 1?}
    D -->|NÃO| E[/Exibir resultado/]
    E --> F([FIM])
    D -->|SIM| G["resultado ← resultado × N"]
    G --> H["N ← N - 1"]
    H --> D
```

A seta que volta para cima cria o loop! O losango testa a condição de parada.

> [!alerta]
> Todo loop PRECISA de uma condição de saída, senão o algoritmo nunca termina (loop infinito).
