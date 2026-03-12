---
slug: "narrative-description"
modulo: "Módulo 2 — Algoritmos"
titulo: "Algoritmos: Descrição narrativa"
subtitulo: "Escrevendo algoritmos passo a passo em linguagem natural"
descricao: "Algoritmos em forma de texto narrativo: receita de pavê, algoritmo de escovar os dentes e as 3 formas de descrever algoritmos."
ordem: 8
proximosPassos:
  - titulo: "Fluxograma"
    descricao: "Represente seus algoritmos com diagramas visuais"
  - titulo: "Pseudocódigo"
    descricao: "Formalize seus algoritmos em linguagem semi-técnica"
  - titulo: "Escreva seus próprios"
    descricao: "Pratique descrevendo tarefas do cotidiano como algoritmos"
quiz:
  - pergunta: "Quais são as 3 formas de descrever um algoritmo?"
    opcoes:
      - "HTML, CSS e JavaScript"
      - "Descrição narrativa, fluxograma e pseudocódigo"
      - "Texto, imagem e vídeo"
      - "Entrada, processamento e saída"
    correta: 1
    explicacao: "✓ As 3 formas são: narrativa (texto), fluxograma (visual) e pseudocódigo (semi-formal)."
    explicacaoErrada: "✗ As formas de representar algoritmos são: descrição narrativa, fluxograma e pseudocódigo."
  - pergunta: "Por que a ordem dos passos é importante em um algoritmo?"
    opcoes:
      - "Por convenção apenas"
      - "Trocar a ordem pode gerar resultados errados"
      - "A ordem não importa"
      - "Para ficar mais organizado visualmente"
    correta: 1
    explicacao: "✓ A sequência é fundamental — passos fora de ordem podem dar resultados errados."
    explicacaoErrada: "✗ Ordem é essencial: não se pode escovar os dentes antes de colocar a pasta."
  - pergunta: "Os ingredientes de uma receita correspondem a qual parte do programa?"
    opcoes: ["Processamento", "Saída", "Entrada", "Variáveis"]
    correta: 2
    explicacao: "✓ Ingredientes são os dados de entrada do algoritmo."
    explicacaoErrada: "✗ Ingredientes = entrada, preparo = processamento, prato pronto = saída."
  - pergunta: "No algoritmo de escovar os dentes, \"SE houver fio dental\" é um exemplo de:"
    opcoes: ["Repetição (loop)", "Condicional (if)", "Entrada", "Saída"]
    correta: 1
    explicacao: "✓ \"SE...ENTÃO\" é uma estrutura condicional — executa apenas se a condição for verdadeira."
    explicacaoErrada: "✗ SE/ENTÃO é a estrutura condicional, equivalente ao if/else em programação."
---

## As 3 formas de descrever algoritmos

Existem três formas principais de representar um algoritmo, do mais informal ao mais formal:

1. **Descrição narrativa** — texto em linguagem natural (português)
2. **Fluxograma** — diagrama visual com formas geométricas e setas
3. **Pseudocódigo** — texto semi-formal que parece código, mas não é executável

Nesta aula, começamos pela mais simples: a descrição narrativa.

> [!info]
> A descrição narrativa é a forma mais acessível de escrever algoritmos. Qualquer pessoa consegue ler e entender, sem conhecimento técnico.

## Receita de pavê de café

A receita é um exemplo perfeito de algoritmo narrativo:

**Ingredientes (ENTRADA):** biscoito champagne, café forte, creme de leite, leite condensado, chocolate em pó.

**Preparo (PROCESSAMENTO) — 4 passos:**

1. Prepare o café forte e deixe esfriar
2. Misture o creme de leite com o leite condensado até ficar homogêneo
3. Molhe os biscoitos no café e monte camadas alternadas (biscoitos + creme)
4. Cubra com chocolate em pó e leve à geladeira por 4 horas

**Resultado (SAÍDA):** pavê de café pronto para servir.

> [!alerta]
> A ORDEM dos passos importa: não se pode cobrir com chocolate antes de montar as camadas! Trocar a sequência gera resultado errado — ou impossível.

## Algoritmo detalhado: escovar os dentes

Para um humano, "escovar os dentes" é suficiente. Mas para um robô, precisamos detalhar cada passo:

1. Pegar a escova de dentes
2. Abrir a pasta de dentes
3. Aplicar pasta sobre as cerdas da escova
4. Molhar a escova com pasta sob a torneira
5. Escovar os dentes fazendo movimentos circulares (**REPETIR** por 2 minutos)
6. **SE** houver fio dental disponível, **ENTÃO** passar fio dental entre os dentes
7. Enxaguar a boca com água

O passo 5 contém uma **REPETIÇÃO** (loop) e o passo 6 contém uma **CONDICIONAL** (if). Mesmo em linguagem natural, as estruturas de programação já aparecem!

## Nível de detalhe

O nível de detalhe depende do público/executor:

- Para um humano adulto: "Escove os dentes" é suficiente
- Para uma criança: precisa dos 7 passos detalhados
- Para um robô: cada passo precisa ser subdividido ("pegar a escova" vira: localizar escova, mover braço, abrir garra, fechar garra, levantar)

Na programação, o nível de detalhe é determinado pela linguagem e pelas bibliotecas disponíveis.

## Do narrativo ao TypeScript

Agora vamos ver como os algoritmos narrativos se traduzem para TypeScript. A lógica é a mesma — muda apenas a forma de escrever.

### Receita como TypeScript

A receita de pavê pode ser representada como uma sequência de funções:

```typescript
// ENTRADA — ingredientes
const biscoito: string = "champagne";
const tipoCafe: string = "forte";
const temCremeDeLeite: boolean = true;
const temLeiteCondensado: boolean = true;
const temChocolateEmPo: boolean = true;

// PROCESSAMENTO — preparo em 4 passos
function prepararCafe(): string {
  return "Café forte preparado e resfriado";
}

function misturarCreme(): string {
  return "Creme de leite com leite condensado homogêneo";
}

function montarCamadas(cafe: string, creme: string): string {
  return "Camadas alternadas de biscoitos molhados e creme";
}

function finalizarPave(camadas: string): string {
  return "Pavê coberto com chocolate em pó, na geladeira por 4 horas";
}

// SAÍDA — resultado
const cafe: string = prepararCafe();
const creme: string = misturarCreme();
const camadas: string = montarCamadas(cafe, creme);
const pave: string = finalizarPave(camadas);

console.log(pave); // "Pavê coberto com chocolate em pó, na geladeira por 4 horas"
```

### Escovar os dentes como TypeScript

Observe como a **REPETIÇÃO** e a **CONDICIONAL** do algoritmo narrativo aparecem no código:

```typescript
function escovarDentes(temFioDental: boolean): void {
  // Passos 1 a 4 — sequência linear
  console.log("Pegar a escova de dentes");
  console.log("Abrir a pasta de dentes");
  console.log("Aplicar pasta sobre as cerdas");
  console.log("Molhar a escova sob a torneira");

  // Passo 5 — REPETIÇÃO (loop)
  for (let segundos = 0; segundos < 120; segundos++) {
    // Escovar fazendo movimentos circulares por 2 minutos
  }
  console.log("Escovação concluída (2 minutos)");

  // Passo 6 — CONDICIONAL (if)
  if (temFioDental) {
    console.log("Passar fio dental entre os dentes");
  }

  // Passo 7 — sequência linear
  console.log("Enxaguar a boca com água");
}

escovarDentes(true);  // com fio dental
escovarDentes(false); // sem fio dental
```

> [!sucesso]
> Veja a correspondência direta: **SE houver fio dental** virou `if (temFioDental)`, e **REPETIR por 2 minutos** virou `for (let segundos = 0; segundos < 120; segundos++)`. A lógica narrativa e o código TypeScript expressam a mesma ideia!

> [!info]
> No TypeScript, o `boolean` (verdadeiro/falso) é o tipo ideal para representar condições como "tem fio dental?" — é exatamente o **SE** do algoritmo narrativo.
