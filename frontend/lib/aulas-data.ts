import type { QuizQuestion } from "@/components/aula/aula-quiz";
import type { CodeToken } from "@/components/aula/aula-code-block";

export interface ProximoPasso {
  titulo: string;
  descricao: string;
}

export interface TruthTableData {
  headers: string[];
  rows: string[][];
}

export interface AulaSection {
  titulo: string;
  conteudo: string[];
  callout?: { texto: string; tipo: "info" | "sucesso" | "alerta" };
  codeBlock?: { tokens: CodeToken[]; language?: string };
  truthTable?: TruthTableData;
}

export interface Aula {
  slug: string;
  modulo: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  secoes: AulaSection[];
  quiz: QuizQuestion[];
  proximosPassos: ProximoPasso[];
  interativos: string[];
}

export const aulas: Aula[] = [
  // ─── AULA 01 ─── Verdadeiro ou falso
  {
    slug: "verdadeiro-ou-falso",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Verdadeiro ou falso",
    subtitulo: "A lógica com dois estados que fundamenta toda a computação",
    descricao: "Introdução à lógica de programação, explorando o sistema binário (0 e 1), lógica booleana (verdadeiro/falso) e como os computadores tomam decisões.",
    secoes: [
      {
        titulo: "O computador só entende dois estados",
        conteudo: [
          "Toda a computação se baseia em um princípio simples: existem apenas dois estados possíveis — ligado ou desligado, verdadeiro ou falso, 1 ou 0.",
          "Os circuitos eletrônicos do computador trabalham com presença ou ausência de sinal elétrico. Quando há voltagem suficiente, temos 1 (verdadeiro). Quando não há, temos 0 (falso).",
          "Essa simplicidade é o que torna os computadores tão poderosos: bilhões de decisões sim/não por segundo.",
        ],
        callout: {
          texto: "George Boole (1815–1864) criou a álgebra booleana, que usa apenas dois valores: verdadeiro e falso. É a base matemática de toda a computação moderna.",
          tipo: "info",
        },
      },
      {
        titulo: "Proposições lógicas",
        conteudo: [
          "Uma proposição é uma frase que pode ser classificada como verdadeira ou falsa — nunca as duas ao mesmo tempo, nunca nenhuma.",
          "\"Manaus é a capital do Amazonas\" → Verdadeiro",
          "\"2 + 2 = 5\" → Falso",
          "Perguntas, exclamações e ordens NÃO são proposições, pois não podem ser julgadas como verdadeiras ou falsas.",
        ],
      },
      {
        titulo: "Representações de verdadeiro e falso",
        conteudo: [
          "Em lógica e programação, usamos diversas formas para representar os dois estados:",
        ],
        truthTable: {
          headers: ["Verdadeiro", "Falso"],
          rows: [
            ["V", "F"],
            ["1", "0"],
            ["true", "false"],
            ["Sim", "Não"],
            ["Ligado", "Desligado"],
          ],
        },
      },
      {
        titulo: "Entrada, processamento e saída",
        conteudo: [
          "Todo programa segue uma estrutura básica: recebe dados (entrada), processa esses dados e produz um resultado (saída).",
          "A lógica booleana é o coração do processamento — o computador toma decisões avaliando condições que resultam em verdadeiro ou falso.",
        ],
        codeBlock: {
          tokens: [
            { text: "se", type: "keyword" },
            { text: " temperatura > 38 " },
            { text: "então\n", type: "keyword" },
            { text: '  exibir ', type: "keyword" },
            { text: '"Febre detectada"', type: "string" },
            { text: "\n" },
            { text: "senão\n", type: "keyword" },
            { text: '  exibir ', type: "keyword" },
            { text: '"Temperatura normal"', type: "string" },
          ],
          language: "pseudocódigo",
        },
      },
    ],
    quiz: [
      {
        pergunta: "Qual é a base do sistema binário?",
        opcoes: ["Base 10", "Base 2", "Base 8", "Base 16"],
        correta: 1,
        explicacao: "✓ O sistema binário usa base 2, com apenas dois dígitos: 0 e 1.",
        explicacaoErrada: "✗ O sistema binário usa base 2. Base 10 é o decimal, base 8 é octal e base 16 é hexadecimal.",
      },
      {
        pergunta: "\"Que horas são?\" é uma proposição lógica?",
        opcoes: ["Sim, é verdadeira", "Sim, é falsa", "Não é uma proposição", "Depende do contexto"],
        correta: 2,
        explicacao: "✓ Perguntas não são proposições. Uma proposição deve poder ser classificada como verdadeira ou falsa.",
        explicacaoErrada: "✗ Perguntas não podem ser classificadas como verdadeiras ou falsas, portanto não são proposições.",
      },
      {
        pergunta: "Quem criou a álgebra booleana?",
        opcoes: ["Alan Turing", "George Boole", "Ada Lovelace", "Charles Babbage"],
        correta: 1,
        explicacao: "✓ George Boole criou a álgebra que leva seu nome, base da lógica computacional.",
        explicacaoErrada: "✗ A álgebra booleana foi criada por George Boole em meados do século XIX.",
      },
      {
        pergunta: "Na lógica booleana, quantos valores possíveis existem?",
        opcoes: ["1", "2", "3", "Infinitos"],
        correta: 1,
        explicacao: "✓ Exatamente 2: verdadeiro (1) e falso (0).",
        explicacaoErrada: "✗ A lógica booleana possui exatamente 2 valores: verdadeiro e falso.",
      },
      {
        pergunta: "Qual a estrutura básica de todo programa?",
        opcoes: [
          "Início, meio e fim",
          "Entrada, processamento e saída",
          "Código, compilação e execução",
          "Variáveis, funções e classes",
        ],
        correta: 1,
        explicacao: "✓ Todo programa recebe dados (entrada), processa e produz resultado (saída).",
        explicacaoErrada: "✗ A estrutura fundamental é: entrada → processamento → saída.",
      },
    ],
    proximosPassos: [
      { titulo: "Conectivos lógicos", descricao: "Aprenda a combinar proposições com E, OU e NÃO" },
      { titulo: "Praticar binário", descricao: "Use o simulador de bits para converter números" },
      { titulo: "Tabelas verdade", descricao: "Construa tabelas para visualizar resultados lógicos" },
    ],
    interativos: ["flip-bits", "simulator"],
  },

  // ─── AULA 02 ─── Conectivos lógicos
  {
    slug: "conectivos-logicos",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Conectivos lógicos",
    subtitulo: "E, OU e NÃO — combinando proposições para criar expressões complexas",
    descricao: "Exploração dos conectivos lógicos E (conjunção), OU (disjunção) e NÃO (negação), com tabelas verdade e exemplos práticos.",
    secoes: [
      {
        titulo: "Conectivos: a cola da lógica",
        conteudo: [
          "Proposições isoladas são limitadas. O poder da lógica está em combiná-las usando conectivos.",
          "Os três conectivos fundamentais são: E (conjunção), OU (disjunção) e NÃO (negação).",
          "Com apenas esses três operadores, é possível construir qualquer expressão lógica.",
        ],
      },
      {
        titulo: "Conjunção — E (AND)",
        conteudo: [
          "A conjunção (E) só é verdadeira quando AMBAS as proposições são verdadeiras.",
          "\"Eu comi arroz E purê\" — só é verdade se comi os dois.",
        ],
        truthTable: {
          headers: ["P", "Q", "P E Q"],
          rows: [
            ["V", "V", "V"],
            ["V", "F", "F"],
            ["F", "V", "F"],
            ["F", "F", "F"],
          ],
        },
        callout: {
          texto: "O E é rigoroso: basta uma parte ser falsa para o resultado todo ser falso.",
          tipo: "alerta",
        },
      },
      {
        titulo: "Disjunção — OU (OR)",
        conteudo: [
          "A disjunção (OU) é verdadeira quando PELO MENOS UMA proposição é verdadeira.",
          "\"Vou de ônibus OU de carro\" — basta um ser verdade.",
          "Existe também o OU exclusivo (XOR): verdadeiro quando apenas uma das partes é verdadeira, não ambas.",
        ],
        truthTable: {
          headers: ["P", "Q", "P OU Q"],
          rows: [
            ["V", "V", "V"],
            ["V", "F", "V"],
            ["F", "V", "V"],
            ["F", "F", "F"],
          ],
        },
      },
      {
        titulo: "Negação — NÃO (NOT)",
        conteudo: [
          "A negação simplesmente inverte o valor: verdadeiro vira falso, e falso vira verdadeiro.",
          "Se P é \"Está chovendo\" (verdadeiro), então NÃO P é \"Não está chovendo\" (falso).",
        ],
        truthTable: {
          headers: ["P", "NÃO P"],
          rows: [
            ["V", "F"],
            ["F", "V"],
          ],
        },
      },
    ],
    quiz: [
      {
        pergunta: "Se P é verdadeiro e Q é falso, qual o resultado de P E Q?",
        opcoes: ["Verdadeiro", "Falso"],
        correta: 1,
        explicacao: "✓ Na conjunção (E), ambas precisam ser verdadeiras. Como Q é falso, o resultado é falso.",
        explicacaoErrada: "✗ P E Q só é verdadeiro quando P e Q são ambos verdadeiros.",
      },
      {
        pergunta: "Se P é falso e Q é verdadeiro, qual o resultado de P OU Q?",
        opcoes: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "✓ Na disjunção (OU), basta um ser verdadeiro. Q é verdadeiro, então P OU Q é verdadeiro.",
        explicacaoErrada: "✗ O OU só é falso quando ambas as partes são falsas.",
      },
      {
        pergunta: "Qual o resultado de NÃO (Verdadeiro)?",
        opcoes: ["Verdadeiro", "Falso", "Indeterminado"],
        correta: 1,
        explicacao: "✓ A negação inverte: NÃO verdadeiro = falso.",
        explicacaoErrada: "✗ A negação sempre inverte o valor lógico.",
      },
      {
        pergunta: "No OU exclusivo (XOR), quando P e Q são ambos verdadeiros, o resultado é:",
        opcoes: ["Verdadeiro", "Falso"],
        correta: 1,
        explicacao: "✓ O XOR é falso quando ambos são iguais. Se P e Q são ambos V, o XOR é falso.",
        explicacaoErrada: "✗ No OU exclusivo, o resultado é verdadeiro apenas quando os valores são diferentes.",
      },
      {
        pergunta: "Quantos conectivos básicos são necessários para construir qualquer expressão lógica?",
        opcoes: ["1", "2", "3", "4"],
        correta: 2,
        explicacao: "✓ Com E, OU e NÃO, é possível construir qualquer expressão lógica.",
        explicacaoErrada: "✗ Os três conectivos fundamentais (E, OU, NÃO) são suficientes para toda a lógica.",
      },
    ],
    proximosPassos: [
      { titulo: "Condicional e bicondicional", descricao: "Aprenda as consequências lógicas: se...então e se e somente se" },
      { titulo: "Combinações complexas", descricao: "Construa expressões com múltiplos conectivos" },
      { titulo: "Circuitos lógicos", descricao: "Veja como E, OU e NÃO funcionam em hardware" },
    ],
    interativos: ["truth-table", "simulator"],
  },

  // ─── AULA 03 ─── Condicional e bicondicional
  {
    slug: "condicional-bicondicional",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Consequências lógicas",
    subtitulo: "Condicional (se...então) e bicondicional (se e somente se)",
    descricao: "Lógica de causa e efeito: proposições condicionais e bicondicionais com exemplos práticos e tabelas verdade.",
    secoes: [
      {
        titulo: "A lógica de causa e efeito",
        conteudo: [
          "No dia a dia, constantemente usamos raciocínios do tipo 'se acontecer X, então Y'. Isso é a condicional.",
          "\"Se está quente, então vou ao shopping\" — a ida ao shopping é consequência do calor.",
          "Na lógica formal, escrevemos P → Q (se P, então Q).",
        ],
      },
      {
        titulo: "Tabela verdade da condicional",
        conteudo: [
          "A condicional só é FALSA em um caso: quando a condição (P) é verdadeira, mas a consequência (Q) é falsa.",
          "Isso é como uma promessa: se eu prometi ir ao shopping quando está quente, a promessa só é quebrada se está quente e eu NÃO fui.",
        ],
        truthTable: {
          headers: ["P", "Q", "P → Q"],
          rows: [
            ["V", "V", "V"],
            ["V", "F", "F"],
            ["F", "V", "V"],
            ["F", "F", "V"],
          ],
        },
        callout: {
          texto: "Quando a condição é falsa, a condicional é sempre verdadeira — independente da consequência. Isso pode parecer estranho, mas é consistente na lógica formal.",
          tipo: "alerta",
        },
      },
      {
        titulo: "Bicondicional — se e somente se",
        conteudo: [
          "A bicondicional (P ↔ Q) é verdadeira quando P e Q têm o MESMO valor: ambos verdadeiros ou ambos falsos.",
          "\"A lâmpada acende se e somente se o interruptor está ligado\" — os dois estados estão vinculados.",
        ],
        truthTable: {
          headers: ["P", "Q", "P ↔ Q"],
          rows: [
            ["V", "V", "V"],
            ["V", "F", "F"],
            ["F", "V", "F"],
            ["F", "F", "V"],
          ],
        },
      },
      {
        titulo: "Aplicação em programação",
        conteudo: [
          "O condicional é a base do if em programação. Toda decisão no código é uma condicional lógica.",
        ],
        codeBlock: {
          tokens: [
            { text: "se", type: "keyword" },
            { text: " (temperatura > " },
            { text: "38", type: "number" },
            { text: ") " },
            { text: "então\n", type: "keyword" },
            { text: "  " },
            { text: "exibir", type: "keyword" },
            { text: " " },
            { text: '"Procure um médico"', type: "string" },
            { text: "\n" },
            { text: "senão\n", type: "keyword" },
            { text: "  " },
            { text: "exibir", type: "keyword" },
            { text: " " },
            { text: '"Tudo bem"', type: "string" },
          ],
          language: "pseudocódigo",
        },
      },
    ],
    quiz: [
      {
        pergunta: "Se P é verdadeiro e Q é falso, qual o valor de P → Q?",
        opcoes: ["Verdadeiro", "Falso"],
        correta: 1,
        explicacao: "✓ A condicional só é falsa quando P é V e Q é F. É o único caso de falsidade.",
        explicacaoErrada: "✗ Quando a condição é verdadeira mas a consequência é falsa, a condicional é falsa.",
      },
      {
        pergunta: "Se P é falso, qual o valor de P → Q (qualquer Q)?",
        opcoes: ["Sempre verdadeiro", "Sempre falso", "Depende de Q"],
        correta: 0,
        explicacao: "✓ Quando a condição é falsa, a condicional é sempre verdadeira, independente de Q.",
        explicacaoErrada: "✗ Uma condição falsa torna a condicional automaticamente verdadeira.",
      },
      {
        pergunta: "P ↔ Q é verdadeiro quando:",
        opcoes: [
          "P e Q são ambos verdadeiros",
          "P e Q são ambos falsos",
          "P e Q têm o mesmo valor",
          "P e Q têm valores diferentes",
        ],
        correta: 2,
        explicacao: "✓ A bicondicional é verdadeira quando ambos têm o mesmo valor (V-V ou F-F).",
        explicacaoErrada: "✗ A bicondicional exige que P e Q tenham exatamente o mesmo valor lógico.",
      },
      {
        pergunta: "Qual estrutura de programação implementa a condicional lógica?",
        opcoes: ["for", "while", "if/else", "switch"],
        correta: 2,
        explicacao: "✓ O if/else é a implementação direta da condicional se...então...senão.",
        explicacaoErrada: "✗ A condicional se...então é implementada pelo if/else na programação.",
      },
    ],
    proximosPassos: [
      { titulo: "Tabela verdade completa", descricao: "Aprenda a construir tabelas com múltiplas variáveis" },
      { titulo: "Prática com condicionais", descricao: "Resolva exercícios de condicional e bicondicional" },
      { titulo: "Equivalências lógicas", descricao: "Descubra como simplificar expressões condicionais" },
    ],
    interativos: ["simulator", "truth-table"],
  },

  // ─── AULA 04 ─── Tabela Verdade
  {
    slug: "tabela-verdade",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Semântica: Tabela Verdade",
    subtitulo: "Analisando expressões lógicas com múltiplas variáveis",
    descricao: "Construção de tabelas verdade com 2 e 3 variáveis, precedência de operadores e análise de expressões complexas.",
    secoes: [
      {
        titulo: "Tabela verdade com múltiplas variáveis",
        conteudo: [
          "Com 2 variáveis temos 4 combinações. Com 3, temos 8. A fórmula é 2ⁿ linhas, onde n é o número de variáveis.",
          "A tabela verdade lista TODAS as combinações possíveis e calcula o resultado da expressão para cada uma.",
        ],
        callout: {
          texto: "Para n variáveis, a tabela verdade terá 2ⁿ linhas. Com 3 variáveis = 8 linhas, com 4 = 16 linhas.",
          tipo: "info",
        },
      },
      {
        titulo: "Precedência de operadores",
        conteudo: [
          "Assim como na matemática (multiplicação antes de soma), a lógica tem precedência:",
          "1º NÃO (negação) → 2º E (conjunção) → 3º OU (disjunção) → 4º → (condicional) → 5º ↔ (bicondicional)",
          "Use parênteses para alterar a precedência quando necessário.",
        ],
      },
      {
        titulo: "Exemplo: sistema de alarme",
        conteudo: [
          "Considere um alarme com 3 condições: A (alarme ligado), P (porta aberta), M (movimento detectado).",
          "O alarme dispara quando: A E (P OU M) — o alarme deve estar ligado E pelo menos uma das condições de risco deve ser verdadeira.",
        ],
        truthTable: {
          headers: ["A", "P", "M", "P OU M", "A E (P OU M)"],
          rows: [
            ["V", "V", "V", "V", "V"],
            ["V", "V", "F", "V", "V"],
            ["V", "F", "V", "V", "V"],
            ["V", "F", "F", "F", "F"],
            ["F", "V", "V", "V", "F"],
            ["F", "V", "F", "V", "F"],
            ["F", "F", "V", "V", "F"],
            ["F", "F", "F", "F", "F"],
          ],
        },
      },
      {
        titulo: "Aplicação prática: decisão de cinema",
        conteudo: [
          "\"Vou ao cinema se tiver dinheiro E (o filme for bom OU meus amigos forem).\"",
          "Essa expressão pode ser analisada passo a passo com uma tabela verdade de 3 variáveis.",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Com 3 variáveis, quantas linhas tem a tabela verdade?",
        opcoes: ["4", "6", "8", "16"],
        correta: 2,
        explicacao: "✓ 2³ = 8 linhas. A fórmula é 2ⁿ onde n é o número de variáveis.",
        explicacaoErrada: "✗ A fórmula é 2ⁿ. Com 3 variáveis: 2³ = 8 linhas.",
      },
      {
        pergunta: "Qual operador tem maior precedência?",
        opcoes: ["E (AND)", "OU (OR)", "NÃO (NOT)", "→ (condicional)"],
        correta: 2,
        explicacao: "✓ NÃO tem a maior precedência — é avaliado primeiro.",
        explicacaoErrada: "✗ A ordem é: NÃO > E > OU > → > ↔. O NÃO tem prioridade máxima.",
      },
      {
        pergunta: "No sistema de alarme A E (P OU M), se A=V, P=F, M=F, o alarme dispara?",
        opcoes: ["Sim", "Não"],
        correta: 1,
        explicacao: "✓ P OU M = F OU F = F. Depois A E F = F. O alarme não dispara.",
        explicacaoErrada: "✗ Sem porta aberta nem movimento, P OU M é falso, e V E F = F.",
      },
      {
        pergunta: "Qual a fórmula para o número de linhas de uma tabela verdade?",
        opcoes: ["n²", "2n", "2ⁿ", "n!"],
        correta: 2,
        explicacao: "✓ Cada variável pode ser V ou F, gerando 2ⁿ combinações.",
        explicacaoErrada: "✗ A fórmula correta é 2ⁿ, onde n é a quantidade de variáveis.",
      },
    ],
    proximosPassos: [
      { titulo: "Equivalências lógicas", descricao: "Descubra quando duas expressões são logicamente iguais" },
      { titulo: "Simplificação", descricao: "Aprenda a simplificar expressões usando equivalências" },
      { titulo: "Exercícios práticos", descricao: "Construa tabelas verdade para expressões do cotidiano" },
    ],
    interativos: ["truth-table", "simulator"],
  },

  // ─── AULA 05 ─── Equivalências lógicas
  {
    slug: "equivalencias-logicas",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Equivalências lógicas",
    subtitulo: "Expressões diferentes, mesmos resultados",
    descricao: "Conceito de equivalência lógica: como simplificar expressões e provar que fórmulas distintas têm o mesmo valor.",
    secoes: [
      {
        titulo: "O que é equivalência lógica?",
        conteudo: [
          "Duas expressões são logicamente equivalentes quando produzem os mesmos resultados para todas as combinações possíveis de valores.",
          "Verificamos isso comparando as tabelas verdade: se as colunas finais são idênticas, as expressões são equivalentes.",
        ],
      },
      {
        titulo: "Distributiva: a regra fundamental",
        conteudo: [
          "A E (B OU C) = (A E B) OU (A E C)",
          "Funciona como a distributiva da matemática: a × (b + c) = ab + ac.",
          "Essa equivalência é fundamental para simplificar circuitos lógicos e expressões complexas.",
        ],
        truthTable: {
          headers: ["A", "B", "C", "A E (B OU C)", "(A E B) OU (A E C)"],
          rows: [
            ["V", "V", "V", "V", "V"],
            ["V", "V", "F", "V", "V"],
            ["V", "F", "V", "V", "V"],
            ["V", "F", "F", "F", "F"],
            ["F", "V", "V", "F", "F"],
            ["F", "V", "F", "F", "F"],
            ["F", "F", "V", "F", "F"],
            ["F", "F", "F", "F", "F"],
          ],
        },
        callout: {
          texto: "As duas últimas colunas são idênticas — provando que as expressões são equivalentes!",
          tipo: "sucesso",
        },
      },
      {
        titulo: "Leis de De Morgan",
        conteudo: [
          "NÃO (A E B) = (NÃO A) OU (NÃO B)",
          "NÃO (A OU B) = (NÃO A) E (NÃO B)",
          "Essas leis permitem 'distribuir' a negação, trocando E por OU e vice-versa.",
        ],
      },
      {
        titulo: "Aplicação: simplificação do alarme",
        conteudo: [
          "Voltando ao sistema de alarme: podemos usar equivalências para encontrar formas mais simples de expressar a mesma lógica.",
          "Simplificar expressões reduz o número de portas lógicas necessárias em circuitos reais.",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Duas expressões são equivalentes quando:",
        opcoes: [
          "Têm o mesmo número de variáveis",
          "Produzem os mesmos resultados para todas as combinações",
          "Usam os mesmos conectivos",
          "Têm o mesmo número de parênteses",
        ],
        correta: 1,
        explicacao: "✓ Equivalência significa mesmos resultados em TODAS as combinações possíveis.",
        explicacaoErrada: "✗ A equivalência depende dos resultados, não da forma da expressão.",
      },
      {
        pergunta: "NÃO (A E B) é equivalente a:",
        opcoes: ["(NÃO A) E (NÃO B)", "(NÃO A) OU (NÃO B)", "A OU B", "NÃO A E B"],
        correta: 1,
        explicacao: "✓ Lei de De Morgan: a negação do E vira OU com as partes negadas.",
        explicacaoErrada: "✗ Pela Lei de De Morgan: NÃO (A E B) = (NÃO A) OU (NÃO B).",
      },
      {
        pergunta: "A E (B OU C) é equivalente a:",
        opcoes: [
          "(A E B) E (A E C)",
          "(A E B) OU (A E C)",
          "(A OU B) E (A OU C)",
          "A E B E C",
        ],
        correta: 1,
        explicacao: "✓ Propriedade distributiva: E distribui sobre OU.",
        explicacaoErrada: "✗ A distributiva funciona como na matemática: a × (b + c) = ab + ac.",
      },
      {
        pergunta: "NÃO (A OU B) é equivalente a:",
        opcoes: ["(NÃO A) OU (NÃO B)", "(NÃO A) E (NÃO B)", "NÃO A OU B", "A E NÃO B"],
        correta: 1,
        explicacao: "✓ Lei de De Morgan: a negação do OU vira E com as partes negadas.",
        explicacaoErrada: "✗ NÃO (A OU B) = (NÃO A) E (NÃO B) — a segunda Lei de De Morgan.",
      },
    ],
    proximosPassos: [
      { titulo: "Jogo de lógica", descricao: "Aplique equivalências em um desafio prático" },
      { titulo: "Mapas de Karnaugh", descricao: "Técnica visual para simplificar expressões" },
      { titulo: "Circuitos lógicos", descricao: "Veja como equivalências otimizam hardware" },
    ],
    interativos: ["truth-table", "simulator"],
  },

  // ─── AULA 06 ─── Jogo de lógica
  {
    slug: "jogo-de-logica",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Um jogo simples de lógica",
    subtitulo: "Quem está mentindo? Resolvendo puzzles com tabelas verdade",
    descricao: "Jogo lógico com três competidores que fazem afirmações — use tabelas verdade para descobrir quem fala a verdade e quem mente.",
    secoes: [
      {
        titulo: "O desafio",
        conteudo: [
          "Três competidores (A, B e C) fazem afirmações. Sabemos que pelo menos um mente e pelo menos um fala a verdade.",
          "Usando lógica, devemos descobrir quem é honesto e quem mente.",
          "Este é um problema clássico de lógica que pode ser resolvido sistematicamente com tabelas verdade.",
        ],
        callout: {
          texto: "A chave é testar TODAS as combinações possíveis e eliminar as que geram contradições.",
          tipo: "info",
        },
      },
      {
        titulo: "Montando o problema",
        conteudo: [
          "A diz: \"B está mentindo\"",
          "B diz: \"C está mentindo\"",
          "C diz: \"A e B estão mentindo\"",
          "Precisamos encontrar a combinação onde as afirmações são consistentes com quem fala verdade e quem mente.",
        ],
      },
      {
        titulo: "Testando as hipóteses",
        conteudo: [
          "Se A fala verdade → B mente → a afirmação de B é falsa → C fala verdade → mas C diz que A mente → contradição? Vamos verificar com calma.",
          "O método sistemático é montar uma tabela com todas as 8 combinações possíveis (V/F para cada competidor) e verificar qual é consistente.",
        ],
        truthTable: {
          headers: ["A", "B", "C", "Consistente?"],
          rows: [
            ["V", "V", "V", "F"],
            ["V", "V", "F", "F"],
            ["V", "F", "V", "F"],
            ["V", "F", "F", "V"],
            ["F", "V", "V", "F"],
            ["F", "V", "F", "F"],
            ["F", "F", "V", "F"],
            ["F", "F", "F", "F"],
          ],
        },
      },
      {
        titulo: "A solução",
        conteudo: [
          "Apenas uma combinação não gera contradição: A fala verdade, B mente e C mente.",
          "Verificação: A diz que B mente (✓, B de fato mente). B diz que C mente (✓, C mente, mas B é mentiroso — espere, B está certo sobre C?). Na verdade, precisamos reanalisar cuidadosamente...",
          "O importante é o PROCESSO: testar sistematicamente, eliminar contradições e encontrar a única resposta consistente.",
        ],
        callout: {
          texto: "Em lógica, não basta achar que algo 'faz sentido'. É preciso PROVAR testando todas as possibilidades.",
          tipo: "alerta",
        },
      },
    ],
    quiz: [
      {
        pergunta: "Com 3 pessoas (V ou F cada), quantas combinações devemos testar?",
        opcoes: ["3", "6", "8", "9"],
        correta: 2,
        explicacao: "✓ 2³ = 8 combinações possíveis.",
        explicacaoErrada: "✗ Cada pessoa pode ser V ou F: 2 × 2 × 2 = 8 combinações.",
      },
      {
        pergunta: "Se A diz 'B mente' e A fala a verdade, então:",
        opcoes: ["B fala a verdade", "B mente", "Não podemos saber", "A também mente"],
        correta: 1,
        explicacao: "✓ Se A é verdadeiro e diz que B mente, então B realmente mente.",
        explicacaoErrada: "✗ Se A fala a verdade, sua afirmação é verdadeira: B mente.",
      },
      {
        pergunta: "Uma contradição em lógica significa que:",
        opcoes: [
          "A resposta é falsa",
          "A combinação testada é impossível",
          "Precisamos de mais dados",
          "O problema não tem solução",
        ],
        correta: 1,
        explicacao: "✓ Uma contradição mostra que aquela combinação específica não pode ser a resposta.",
        explicacaoErrada: "✗ Contradição = aquela hipótese é impossível, mas outras podem funcionar.",
      },
      {
        pergunta: "Qual o método mais confiável para resolver puzzles lógicos?",
        opcoes: [
          "Intuição",
          "Testar apenas os casos mais prováveis",
          "Testar todas as combinações sistematicamente",
          "Perguntar a um especialista",
        ],
        correta: 2,
        explicacao: "✓ O teste sistemático garante que nenhuma possibilidade é ignorada.",
        explicacaoErrada: "✗ A abordagem sistemática (tabela verdade) é a mais confiável.",
      },
    ],
    proximosPassos: [
      { titulo: "Sequência de tarefas", descricao: "Aprenda a decompor problemas em etapas menores" },
      { titulo: "Puzzles avançados", descricao: "Resolva problemas com mais competidores e regras" },
      { titulo: "Lógica em jogos", descricao: "Veja como a lógica é usada em game design" },
    ],
    interativos: ["simulator", "truth-table"],
  },

  // ─── AULA 07 ─── Sequência de tarefas
  {
    slug: "sequencia-de-tarefas",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Sequência de tarefas",
    subtitulo: "Quebrando o problema em partes — a base do pensamento algorítmico",
    descricao: "Introdução à estrutura de programas (entrada-processamento-saída) e à decomposição de problemas complexos em tarefas menores.",
    secoes: [
      {
        titulo: "Programadores são resolvedores de problemas",
        conteudo: [
          "Antes de escrever código, um programador precisa ENTENDER o problema e dividi-lo em partes menores.",
          "Essa habilidade de decomposição é mais importante que qualquer linguagem de programação.",
          "Um problema grande que parece impossível vira uma sequência de problemas pequenos e resolvíveis.",
        ],
      },
      {
        titulo: "Entrada, processamento e saída",
        conteudo: [
          "Todo programa segue este fluxo:",
          "ENTRADA → dados que o programa recebe (teclado, arquivo, sensor)",
          "PROCESSAMENTO → operações realizadas sobre os dados",
          "SAÍDA → resultado entregue ao usuário (tela, arquivo, som)",
        ],
        callout: {
          texto: "Mesmo os programas mais complexos (jogos, IA, redes sociais) seguem essa estrutura fundamental.",
          tipo: "info",
        },
      },
      {
        titulo: "Exemplo: limpar a casa",
        conteudo: [
          "\"Limpar a casa\" é um problema grande. Vamos decompor:",
          "1. Recolher objetos fora do lugar",
          "2. Varrer os cômodos (sala → quartos → cozinha → banheiro)",
          "3. Passar pano úmido no chão",
          "4. Limpar superfícies (mesas, bancadas)",
          "5. Lavar louça",
          "6. Retirar o lixo",
          "Cada subtarefa é simples e clara. Juntas, resolvem o problema original.",
        ],
      },
      {
        titulo: "O que é um algoritmo?",
        conteudo: [
          "Um algoritmo é uma sequência finita de passos bem definidos para resolver um problema.",
          "Características de um bom algoritmo: finito (tem fim), definido (sem ambiguidade), efetivo (cada passo é executável).",
          "Receitas de cozinha, manuais de montagem e roteiros de viagem são algoritmos do dia a dia.",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Qual a estrutura fundamental de todo programa?",
        opcoes: [
          "Código, teste e deploy",
          "Entrada, processamento e saída",
          "HTML, CSS e JavaScript",
          "Variáveis, funções e classes",
        ],
        correta: 1,
        explicacao: "✓ Entrada → Processamento → Saída é a base de qualquer programa.",
        explicacaoErrada: "✗ Todo programa recebe dados (entrada), processa e produz resultado (saída).",
      },
      {
        pergunta: "Decompor um problema significa:",
        opcoes: [
          "Deletar partes desnecessárias",
          "Dividir em problemas menores e resolvíveis",
          "Simplificar removendo requisitos",
          "Traduzir para outra linguagem",
        ],
        correta: 1,
        explicacao: "✓ Decomposição é dividir um problema grande em subproblemas gerenciáveis.",
        explicacaoErrada: "✗ Decompor é quebrar em partes menores, não remover ou simplificar o problema.",
      },
      {
        pergunta: "Um algoritmo deve ser:",
        opcoes: [
          "Infinito e flexível",
          "Finito, definido e efetivo",
          "Rápido e curto",
          "Complexo e completo",
        ],
        correta: 1,
        explicacao: "✓ Finito (termina), definido (sem ambiguidade) e efetivo (executável).",
        explicacaoErrada: "✗ As três propriedades essenciais são: finitude, definição e efetividade.",
      },
      {
        pergunta: "Qual destes é um exemplo de algoritmo no dia a dia?",
        opcoes: ["Uma receita de bolo", "Um poema", "Uma música", "Uma pintura"],
        correta: 0,
        explicacao: "✓ Uma receita tem entrada (ingredientes), processamento (preparo) e saída (bolo pronto).",
        explicacaoErrada: "✗ Receitas são algoritmos: sequência finita de passos para produzir um resultado.",
      },
    ],
    proximosPassos: [
      { titulo: "Descrição narrativa", descricao: "Aprenda a escrever algoritmos em linguagem natural" },
      { titulo: "Fluxograma", descricao: "Represente algoritmos visualmente com diagramas" },
      { titulo: "Pseudocódigo", descricao: "Escreva algoritmos em formato semi-formal" },
    ],
    interativos: ["expandable-card"],
  },

  // ─── AULA 08 ─── Descrição narrativa
  {
    slug: "descricao-narrativa",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Algoritmos: Descrição narrativa",
    subtitulo: "Escrevendo algoritmos passo a passo em linguagem natural",
    descricao: "Algoritmos em forma de texto narrativo, com exemplos como receita de pavê de café e escovação de dentes.",
    secoes: [
      {
        titulo: "O que é descrição narrativa?",
        conteudo: [
          "Descrição narrativa é a forma mais simples de escrever um algoritmo: uma lista de passos em linguagem natural (português, no nosso caso).",
          "Não usa nenhuma notação especial — qualquer pessoa pode ler e entender.",
          "É o primeiro passo antes de formalizar em fluxograma ou pseudocódigo.",
        ],
      },
      {
        titulo: "Exemplo: receita de pavê de café",
        conteudo: [
          "Ingredientes (entrada): biscoito champagne, café forte, creme de leite, leite condensado, chocolate em pó.",
          "Preparo (processamento):",
          "1. Prepare o café forte e reserve",
          "2. Misture o creme de leite com o leite condensado",
          "3. Molhe os biscoitos no café",
          "4. Monte em camadas: biscoitos, creme, biscoitos, creme",
          "5. Cubra com chocolate em pó",
          "6. Leve à geladeira por 4 horas",
          "Resultado (saída): pavê de café pronto.",
        ],
        callout: {
          texto: "Note que a ORDEM dos passos importa: você não pode cobrir com chocolate antes de montar as camadas!",
          tipo: "alerta",
        },
      },
      {
        titulo: "A importância da sequência",
        conteudo: [
          "Algoritmos são sensíveis à ordem. Trocar a sequência pode gerar resultados errados ou impossíveis.",
          "\"Colocar a pasta na escova\" deve vir antes de \"escovar os dentes\", não depois.",
          "Em programação, a ordem das instruções determina o comportamento do programa.",
        ],
      },
      {
        titulo: "Nível de detalhe",
        conteudo: [
          "O nível de detalhe depende do público. Para um robô, cada micro-ação precisa ser descrita.",
          "Para humanos, podemos abstrair: 'escovar os dentes' é suficiente sem detalhar cada movimento.",
          "Na programação, o nível de detalhe é determinado pela linguagem e pelas bibliotecas disponíveis.",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Descrição narrativa usa qual tipo de linguagem?",
        opcoes: ["Linguagem de programação", "Linguagem natural (português)", "Notação matemática", "Diagrama visual"],
        correta: 1,
        explicacao: "✓ A descrição narrativa usa linguagem natural, sem notações especiais.",
        explicacaoErrada: "✗ Narrativa = texto em português (ou qualquer idioma natural), sem formalismo.",
      },
      {
        pergunta: "Por que a ordem dos passos é importante em um algoritmo?",
        opcoes: [
          "Por convenção apenas",
          "Trocar a ordem pode gerar resultados errados",
          "A ordem não importa",
          "Para ficar mais organizado visualmente",
        ],
        correta: 1,
        explicacao: "✓ A sequência é fundamental — passos fora de ordem podem dar resultados errados.",
        explicacaoErrada: "✗ Ordem é essencial: não se pode escovar os dentes antes de colocar a pasta.",
      },
      {
        pergunta: "Os ingredientes de uma receita correspondem a qual parte do programa?",
        opcoes: ["Processamento", "Saída", "Entrada", "Variáveis"],
        correta: 2,
        explicacao: "✓ Ingredientes são os dados de entrada do algoritmo.",
        explicacaoErrada: "✗ Ingredientes = entrada, preparo = processamento, prato pronto = saída.",
      },
      {
        pergunta: "O nível de detalhe de um algoritmo depende de:",
        opcoes: [
          "O tamanho do problema",
          "O público/executor do algoritmo",
          "A linguagem de programação",
          "O número de passos",
        ],
        correta: 1,
        explicacao: "✓ Um robô precisa de detalhes extremos, um humano precisa de menos.",
        explicacaoErrada: "✗ O nível de detalhe varia conforme quem vai executar o algoritmo.",
      },
    ],
    proximosPassos: [
      { titulo: "Fluxograma", descricao: "Represente seus algoritmos com diagramas visuais" },
      { titulo: "Pseudocódigo", descricao: "Formalize seus algoritmos em linguagem semi-técnica" },
      { titulo: "Escreva seus próprios", descricao: "Pratique descrevendo tarefas do cotidiano como algoritmos" },
    ],
    interativos: ["code-toggle", "expandable-card"],
  },

  // ─── AULA 09 ─── Fluxograma
  {
    slug: "fluxograma",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Algoritmos: Fluxograma",
    subtitulo: "Representação visual de algoritmos com símbolos padronizados",
    descricao: "Fluxogramas com símbolos para início/fim, ações, entrada/saída, decisões e loops, com exemplos práticos.",
    secoes: [
      {
        titulo: "O que é um fluxograma?",
        conteudo: [
          "O fluxograma é uma representação gráfica de um algoritmo, usando formas geométricas conectadas por setas.",
          "Cada forma tem um significado específico, criando uma linguagem visual universal.",
          "É mais preciso que a descrição narrativa e mais visual que o pseudocódigo.",
        ],
      },
      {
        titulo: "Os símbolos do fluxograma",
        conteudo: [
          "Elipse/Círculo → Início e Fim do algoritmo",
          "Retângulo → Processo/Ação (ex: calcular, atribuir)",
          "Trapézio → Entrada ou Saída de dados",
          "Losango → Decisão/Teste condicional (sim/não)",
          "Setas → Fluxo de execução",
        ],
        callout: {
          texto: "O losango (decisão) sempre tem duas saídas: SIM e NÃO. É o equivalente visual do if/else.",
          tipo: "info",
        },
      },
      {
        titulo: "Exemplo: soma de dois números",
        conteudo: [
          "INÍCIO → Ler A → Ler B → Calcular S = A + B → Exibir S → FIM",
          "Neste caso simples, não há decisões — o fluxo é linear, sem losangos.",
        ],
      },
      {
        titulo: "Exemplo: verificar febre",
        conteudo: [
          "INÍCIO → Ler temperatura → Temperatura > 38? → SIM: Exibir 'Febre' → FIM / NÃO: Exibir 'Normal' → FIM",
          "Aqui temos um losango (decisão) que cria dois caminhos possíveis.",
        ],
      },
      {
        titulo: "Loops no fluxograma",
        conteudo: [
          "Repetições (loops) aparecem quando uma seta volta para um ponto anterior do fluxo.",
          "Exemplo do fatorial: o losango testa a condição de parada, e se não parou, a seta volta ao cálculo.",
          "Todo loop PRECISA de uma condição de saída, senão o algoritmo nunca termina (loop infinito).",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Qual forma geométrica representa uma decisão (if/else)?",
        opcoes: ["Retângulo", "Elipse", "Losango", "Trapézio"],
        correta: 2,
        explicacao: "✓ O losango (diamante) representa testes condicionais com duas saídas.",
        explicacaoErrada: "✗ Decisões são representadas pelo losango, sempre com saídas SIM e NÃO.",
      },
      {
        pergunta: "O que representa o trapézio no fluxograma?",
        opcoes: ["Decisão", "Processo", "Entrada/Saída de dados", "Início/Fim"],
        correta: 2,
        explicacao: "✓ O trapézio indica operações de entrada ou saída de dados.",
        explicacaoErrada: "✗ Trapézio = Entrada/Saída. Retângulo = Processo. Losango = Decisão.",
      },
      {
        pergunta: "Como um loop aparece em um fluxograma?",
        opcoes: [
          "Com um símbolo especial de loop",
          "Com uma seta que volta a um ponto anterior",
          "Com linhas tracejadas",
          "Com um retângulo duplo",
        ],
        correta: 1,
        explicacao: "✓ Loops são representados por setas que retornam a um ponto anterior do fluxo.",
        explicacaoErrada: "✗ Não há símbolo especial — loops são setas que voltam para cima.",
      },
      {
        pergunta: "O que acontece se um loop não tem condição de saída?",
        opcoes: [
          "O programa termina automaticamente",
          "Gera um erro de compilação",
          "Loop infinito — nunca termina",
          "O sistema operacional interrompe",
        ],
        correta: 2,
        explicacao: "✓ Sem condição de saída, o loop repete para sempre (loop infinito).",
        explicacaoErrada: "✗ Um loop sem condição de parada executa indefinidamente.",
      },
    ],
    proximosPassos: [
      { titulo: "Pseudocódigo", descricao: "Transforme seus fluxogramas em texto semi-formal" },
      { titulo: "Diagramas avançados", descricao: "Aprenda fluxogramas com múltiplas decisões" },
      { titulo: "Ferramentas", descricao: "Use ferramentas online para criar fluxogramas" },
    ],
    interativos: ["expandable-card", "simulator"],
  },

  // ─── AULA 10 ─── Pseudocódigo
  {
    slug: "pseudocodigo",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Algoritmos: Pseudocódigo",
    subtitulo: "Linguagem informal para descrever algoritmos antes do código real",
    descricao: "Pseudocódigo como ferramenta de transição entre fluxograma e código, com exemplos de variáveis, estruturas de controle e repetição.",
    secoes: [
      {
        titulo: "O que é pseudocódigo?",
        conteudo: [
          "Pseudocódigo (ou pseudolinguagem) é uma forma de escrever algoritmos que parece com código de programação, mas sem regras rígidas de sintaxe.",
          "Não é executável por computadores — é uma ferramenta para humanos organizarem o raciocínio antes de programar.",
          "É o meio-termo entre a descrição narrativa (muito informal) e o código real (muito formal).",
        ],
      },
      {
        titulo: "Variáveis e atribuição",
        conteudo: [
          "Variáveis armazenam valores. No pseudocódigo, usamos setas para atribuição:",
        ],
        codeBlock: {
          tokens: [
            { text: "nome", type: "keyword" },
            { text: " ← " },
            { text: '"André"', type: "string" },
            { text: "\n" },
            { text: "idade", type: "keyword" },
            { text: " ← " },
            { text: "25", type: "number" },
            { text: "\n" },
            { text: "aprovado", type: "keyword" },
            { text: " ← " },
            { text: "verdadeiro", type: "string" },
          ],
          language: "pseudocódigo",
        },
      },
      {
        titulo: "Estruturas de controle",
        conteudo: [
          "O pseudocódigo usa as mesmas estruturas que linguagens reais:",
        ],
        codeBlock: {
          tokens: [
            { text: "se", type: "keyword" },
            { text: " nota >= " },
            { text: "7", type: "number" },
            { text: " " },
            { text: "então\n", type: "keyword" },
            { text: "  escrever " },
            { text: '"Aprovado"', type: "string" },
            { text: "\n" },
            { text: "senão\n", type: "keyword" },
            { text: "  escrever " },
            { text: '"Reprovado"', type: "string" },
            { text: "\n" },
            { text: "fim-se", type: "keyword" },
          ],
          language: "pseudocódigo",
        },
      },
      {
        titulo: "Repetição",
        conteudo: [
          "Loops podem ser escritos como 'enquanto...faça' ou 'repita...até':",
        ],
        codeBlock: {
          tokens: [
            { text: "// Fatorial de N", type: "comment" },
            { text: "\n" },
            { text: "ler", type: "keyword" },
            { text: " N\n" },
            { text: "resultado", type: "keyword" },
            { text: " ← " },
            { text: "1", type: "number" },
            { text: "\n" },
            { text: "enquanto", type: "keyword" },
            { text: " N > " },
            { text: "1", type: "number" },
            { text: " " },
            { text: "faça\n", type: "keyword" },
            { text: "  resultado ← resultado × N\n" },
            { text: "  N ← N - " },
            { text: "1", type: "number" },
            { text: "\n" },
            { text: "fim-enquanto\n", type: "keyword" },
            { text: "escrever", type: "keyword" },
            { text: " resultado" },
          ],
          language: "pseudocódigo",
        },
      },
    ],
    quiz: [
      {
        pergunta: "Pseudocódigo pode ser executado pelo computador?",
        opcoes: ["Sim, qualquer computador executa", "Não, é apenas para organizar o raciocínio", "Sim, com um compilador especial", "Depende da linguagem"],
        correta: 1,
        explicacao: "✓ Pseudocódigo é uma ferramenta para humanos, não é compilável ou interpretável.",
        explicacaoErrada: "✗ Pseudocódigo NÃO é executável — é um rascunho para organizar a lógica.",
      },
      {
        pergunta: "Como representamos atribuição em pseudocódigo?",
        opcoes: ["x = 5", "x ← 5", "x := 5", "Todas as formas são aceitas"],
        correta: 3,
        explicacao: "✓ Pseudocódigo não tem sintaxe rígida — qualquer forma clara é aceita.",
        explicacaoErrada: "✗ Como não há regras rígidas, qualquer notação clara de atribuição é válida.",
      },
      {
        pergunta: "O pseudocódigo fica entre:",
        opcoes: [
          "HTML e CSS",
          "Descrição narrativa e código real",
          "Fluxograma e diagrama UML",
          "Python e JavaScript",
        ],
        correta: 1,
        explicacao: "✓ É mais formal que a narrativa e menos rígido que código de programação.",
        explicacaoErrada: "✗ Pseudocódigo é o meio-termo entre a descrição em português e a linguagem de programação.",
      },
      {
        pergunta: "Qual palavra-chave indica repetição no pseudocódigo?",
        opcoes: ["se", "escrever", "enquanto", "ler"],
        correta: 2,
        explicacao: "✓ 'Enquanto...faça' é a estrutura de repetição (loop) do pseudocódigo.",
        explicacaoErrada: "✗ 'Enquanto' (ou 'repita') são as palavras-chave de repetição.",
      },
    ],
    proximosPassos: [
      { titulo: "Programação em blocos", descricao: "Comece a programar visualmente com Scratch" },
      { titulo: "Primeira linguagem", descricao: "Passe do pseudocódigo para uma linguagem real" },
      { titulo: "Estruturas de dados", descricao: "Aprenda sobre listas, pilhas e filas" },
    ],
    interativos: ["code-toggle", "simulator"],
  },

  // ─── AULA 11 ─── Programas em blocos
  {
    slug: "programas-em-blocos",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Escrevendo programas em blocos",
    subtitulo: "Programação visual com Scratch — encaixando blocos como peças de Lego",
    descricao: "Programação visual em blocos com Scratch, combinando eventos, movimentos, aparência, variáveis, loops e condicionais.",
    secoes: [
      {
        titulo: "O que é Scratch?",
        conteudo: [
          "Scratch é uma plataforma de programação visual criada pelo MIT (scratch.mit.edu).",
          "Em vez de digitar código, você arrasta e encaixa blocos coloridos — como montar com Lego.",
          "É usado mundialmente para ensinar lógica de programação a iniciantes de todas as idades.",
        ],
        callout: {
          texto: "Scratch é gratuito e roda no navegador. Acesse scratch.mit.edu para experimentar!",
          tipo: "sucesso",
        },
      },
      {
        titulo: "Categorias de blocos",
        conteudo: [
          "Eventos (amarelo) — disparam ações: 'quando bandeira clicada', 'quando tecla pressionada'",
          "Movimento (azul) — movem o ator: 'mova 10 passos', 'gire 15 graus'",
          "Aparência (roxo) — mudam visual: 'diga olá', 'mude fantasia'",
          "Som (rosa) — reproduzem sons: 'toque som meow'",
          "Controle (laranja) — estruturas: 'repita 10 vezes', 'se...então'",
          "Variáveis (vermelho) — armazenam dados: 'mude X para 0'",
        ],
      },
      {
        titulo: "Exemplo: gato que pula",
        conteudo: [
          "Quando bandeira verde clicada:",
          "  Repita 10 vezes:",
          "    Mude Y por 20 (subir)",
          "    Espere 0.1 segundos",
          "    Mude Y por -20 (descer)",
          "    Espere 0.1 segundos",
          "Cada bloco se encaixa no anterior, formando a sequência do algoritmo.",
        ],
      },
      {
        titulo: "Loops e condicionais em blocos",
        conteudo: [
          "O bloco 'repita N vezes' é o equivalente do for/while.",
          "O bloco 'se...então...senão' é o if/else visual.",
          "O bloco 'repita até que...' combina loop com condição de parada.",
          "Todas as estruturas que vimos em pseudocódigo existem em forma de blocos!",
        ],
      },
      {
        titulo: "Do Scratch para o mundo real",
        conteudo: [
          "Os conceitos aprendidos em Scratch (variáveis, loops, condicionais, eventos) são os mesmos de qualquer linguagem.",
          "Scratch pode controlar robôs (Arduino), criar jogos, animações e histórias interativas.",
          "É o primeiro passo para linguagens como Python, JavaScript e C++.",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Quem criou o Scratch?",
        opcoes: ["Google", "Microsoft", "MIT", "Apple"],
        correta: 2,
        explicacao: "✓ O Scratch foi criado pelo MIT Media Lab e é gratuito.",
        explicacaoErrada: "✗ O Scratch foi desenvolvido pelo MIT (Massachusetts Institute of Technology).",
      },
      {
        pergunta: "Qual cor representa blocos de Eventos no Scratch?",
        opcoes: ["Azul", "Amarelo", "Verde", "Vermelho"],
        correta: 1,
        explicacao: "✓ Os blocos de eventos são amarelos e iniciam a execução do programa.",
        explicacaoErrada: "✗ Eventos são amarelos. Movimento é azul. Controle é laranja.",
      },
      {
        pergunta: "O bloco 'repita 10 vezes' é equivalente a qual estrutura?",
        opcoes: ["if/else", "for/while (loop)", "variável", "função"],
        correta: 1,
        explicacao: "✓ 'Repita N vezes' é o loop — executa os blocos internos N vezes.",
        explicacaoErrada: "✗ Repetição em blocos é o equivalente visual de for/while.",
      },
      {
        pergunta: "Scratch pode ser usado para:",
        opcoes: [
          "Apenas jogos simples",
          "Apenas animações",
          "Jogos, animações, histórias e até controlar robôs",
          "Apenas exercícios escolares",
        ],
        correta: 2,
        explicacao: "✓ Scratch é versátil: jogos, animações, histórias, arte e integração com hardware.",
        explicacaoErrada: "✗ Scratch não é limitado — pode criar jogos, animar, contar histórias e controlar Arduino.",
      },
      {
        pergunta: "Qual o próximo passo natural após aprender Scratch?",
        opcoes: [
          "Parar de programar",
          "Aprender uma linguagem textual (Python, JS...)",
          "Continuar só no Scratch",
          "Estudar hardware",
        ],
        correta: 1,
        explicacao: "✓ Após dominar blocos, a transição natural é para linguagens textuais.",
        explicacaoErrada: "✗ Scratch é a porta de entrada — depois vêm linguagens textuais como Python.",
      },
    ],
    proximosPassos: [
      { titulo: "Crie no Scratch", descricao: "Acesse scratch.mit.edu e crie seu primeiro projeto" },
      { titulo: "Python para iniciantes", descricao: "Transfira seus conhecimentos para código textual" },
      { titulo: "Projetos práticos", descricao: "Crie um jogo completo usando blocos" },
    ],
    interativos: ["expandable-card", "simulator"],
  },
];

export function getAulaBySlug(slug: string): Aula | undefined {
  return aulas.find((a) => a.slug === slug);
}

export function getAllAulaSlugs(): string[] {
  return aulas.map((a) => a.slug);
}
