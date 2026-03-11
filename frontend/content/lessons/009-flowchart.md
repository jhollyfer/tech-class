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

Cada forma tem um significado específico, criando uma linguagem visual universal. É mais preciso que a descrição narrativa e mais visual que o pseudocódigo.

> [!info]
> Fluxogramas são usados não apenas na programação, mas também em processos empresariais, fluxos de trabalho e documentação técnica.

## Os 4 símbolos do fluxograma

- **Elipse (oval)** — Início e Fim do algoritmo
- **Retângulo** — Processo/Ação — qualquer operação: calcular, atribuir valor, incrementar
- **Paralelogramo** — Entrada ou Saída de dados — ler do teclado, exibir na tela
- **Losango (diamante)** — Decisão/Teste condicional — sempre com duas saídas: SIM e NÃO
- **Setas** — indicam a direção do fluxo de execução

> [!alerta]
> O losango (decisão) sempre tem **duas saídas**: SIM e NÃO. É o equivalente visual do `if/else` em TypeScript.

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

## Do fluxograma ao TypeScript

Cada símbolo do fluxograma tem um equivalente direto em TypeScript. Vamos traduzir os três exemplos acima.

### Soma A + B

O fluxo linear (ler, processar, exibir) se traduz diretamente:

```typescript
function somarDoisNumeros(a: number, b: number): number {
  // Ler A e Ler B → parâmetros da função
  const s = a + b;       // Processo: S ← A + B
  return s;              // Exibir S
}

console.log(somarDoisNumeros(3, 7)); // 10
```

### Verificar febre

O losango do fluxograma vira um `if/else`:

```typescript
function verificarFebre(temperatura: number): string {
  // Losango: T > 37?
  if (temperatura > 37) {
    return "Febre detectada";     // Caminho SIM
  } else {
    return "Temperatura normal";  // Caminho NÃO
  }
}

console.log(verificarFebre(38.5)); // "Febre detectada"
console.log(verificarFebre(36.2)); // "Temperatura normal"
```

### Fatorial

A seta que volta no fluxograma vira um `while`:

```typescript
function fatorial(n: number): number {
  let resultado = 1;    // resultado ← 1

  while (n > 1) {       // Losango: N > 1?
    resultado = resultado * n;  // resultado ← resultado × N
    n = n - 1;                  // N ← N - 1
  }                     // Seta volta para o losango

  return resultado;     // Exibir resultado
}

console.log(fatorial(5)); // 120 (5 × 4 × 3 × 2 × 1)
```

> [!sucesso]
> Note a correspondência direta entre os símbolos do fluxograma e o código TypeScript:
> - **Paralelogramo** (ler/exibir) = parâmetros e `console.log`
> - **Retângulo** (processo) = atribuições e cálculos
> - **Losango** (decisão) = `if/else`
> - **Seta que volta** (loop) = `while`
