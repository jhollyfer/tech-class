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
    slug: "true-or-false",
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
          "Por que apenas dois estados e não três ou dez? Porque com apenas dois níveis de voltagem, a margem de erro é enorme — o circuito consegue distinguir facilmente entre 'tem sinal' e 'não tem sinal'. Se usássemos 10 níveis, qualquer ruído elétrico poderia confundir um nível com outro.",
          "Essa simplicidade é o que torna os computadores tão confiáveis e poderosos: bilhões de decisões sim/não por segundo, com margem de erro desprezível.",
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
          "\"Choveu hoje\" → pode ser V ou F dependendo do dia, mas no momento da avaliação, tem exatamente um valor.",
          "\"João tem mais de 18 anos\" → proposição válida — em um dado momento, é V ou F.",
          "Perguntas, exclamações e ordens NÃO são proposições, pois não podem ser julgadas como verdadeiras ou falsas. \"Que horas são?\" não é proposição. \"Feche a porta!\" também não.",
        ],
      },
      {
        titulo: "Teste condicional no dia a dia",
        conteudo: [
          "\"Joana pagou a compra?\" — Essa é uma pergunta, mas por trás dela há uma proposição: \"Joana pagou a compra\", que é V ou F.",
          "No computador, toda decisão segue essa lógica: avalia uma condição e age de acordo com o resultado.",
          "Se Joana pagou → liberar produto. Se não pagou → cobrar novamente. Isso é a base do if/else em programação.",
        ],
        callout: {
          texto: "Existe a chamada lógica fuzzy (difusa), que trabalha com graus de verdade entre 0 e 1 (por exemplo, 0.7 = \"parcialmente verdadeiro\"). Ela é usada em máquinas de lavar, ar-condicionado e IA. Mas a lógica clássica que estudamos aqui é estritamente binária: V ou F, sem meio-termo.",
          tipo: "info",
        },
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
        pergunta: "Por que o computador usa apenas dois estados (0 e 1)?",
        opcoes: [
          "Porque é mais barato",
          "Porque a margem de erro entre dois níveis de voltagem é grande, tornando o sistema confiável",
          "Porque George Boole mandou",
          "Porque não existem mais números",
        ],
        correta: 1,
        explicacao: "✓ Com apenas dois níveis de voltagem, o circuito distingue facilmente entre 'tem sinal' e 'não tem sinal', mesmo com ruído elétrico.",
        explicacaoErrada: "✗ A razão é física: dois estados elétricos são muito mais fáceis de distinguir do que múltiplos níveis.",
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
    slug: "logical-connectives",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Conectivos lógicos",
    subtitulo: "E, OU e NÃO — combinando proposições para criar expressões complexas",
    descricao: "Exploração dos conectivos lógicos E (∧), OU (∨) e NÃO (¬), com tabelas verdade, símbolos formais e exemplos práticos.",
    secoes: [
      {
        titulo: "Conectivos: a cola da lógica",
        conteudo: [
          "Proposições isoladas são limitadas. O poder da lógica está em combiná-las usando conectivos.",
          "Os três conectivos fundamentais são: E (conjunção, símbolo ∧), OU (disjunção, símbolo ∨) e NÃO (negação, símbolo ¬).",
          "Com apenas esses três operadores, é possível construir qualquer expressão lógica.",
          "Para n variáveis, a tabela verdade terá 2ⁿ linhas. Com 2 variáveis = 4 linhas, com 3 = 8, com 4 = 16.",
        ],
      },
      {
        titulo: "Conjunção — E (AND) — símbolo ∧",
        conteudo: [
          "A conjunção (E) só é verdadeira quando AMBAS as proposições são verdadeiras.",
          "Exemplo central: \"Eu comi arroz E purê\". Vamos analisar as 4 combinações possíveis:",
          "Comi arroz (V) E comi purê (V) → V — de fato comi os dois.",
          "Comi arroz (V) E comi purê (F) → F — disse que comi os dois, mas não comi purê. Mentira.",
          "Comi arroz (F) E comi purê (V) → F — disse que comi os dois, mas não comi arroz. Mentira.",
          "Comi arroz (F) E comi purê (F) → F — não comi nenhum dos dois. Mentira.",
        ],
        truthTable: {
          headers: ["P", "Q", "P ∧ Q"],
          rows: [
            ["V", "V", "V"],
            ["V", "F", "F"],
            ["F", "V", "F"],
            ["F", "F", "F"],
          ],
        },
        callout: {
          texto: "O E (∧) é rigoroso: basta uma parte ser falsa para o resultado todo ser falso. É como multiplicação: qualquer fator zero zera tudo.",
          tipo: "alerta",
        },
      },
      {
        titulo: "Disjunção — OU (OR) — símbolo ∨",
        conteudo: [
          "A disjunção (OU) é verdadeira quando PELO MENOS UMA proposição é verdadeira.",
          "\"Vou de ônibus OU de carro\" — basta um ser verdade.",
          "Otimização importante: se o computador avalia P e P já é V, ele NÃO precisa testar Q — já sabe que P OU Q é V. Isso se chama avaliação de curto-circuito (short-circuit evaluation).",
          "Existe também o OU exclusivo (XOR): verdadeiro quando apenas uma das partes é verdadeira, não ambas.",
        ],
        truthTable: {
          headers: ["P", "Q", "P ∨ Q"],
          rows: [
            ["V", "V", "V"],
            ["V", "F", "V"],
            ["F", "V", "V"],
            ["F", "F", "F"],
          ],
        },
      },
      {
        titulo: "Negação — NÃO (NOT) — símbolo ¬",
        conteudo: [
          "A negação simplesmente inverte o valor: verdadeiro vira falso, e falso vira verdadeiro.",
          "Se P é \"Está chovendo\" (verdadeiro), então ¬P é \"Não está chovendo\" (falso).",
        ],
        truthTable: {
          headers: ["P", "¬P"],
          rows: [
            ["V", "F"],
            ["F", "V"],
          ],
        },
      },
    ],
    quiz: [
      {
        pergunta: "Se P é verdadeiro e Q é falso, qual o resultado de P ∧ Q (P E Q)?",
        opcoes: ["Verdadeiro", "Falso"],
        correta: 1,
        explicacao: "✓ Na conjunção (∧), ambas precisam ser verdadeiras. Como Q é falso, o resultado é falso.",
        explicacaoErrada: "✗ P ∧ Q só é verdadeiro quando P e Q são ambos verdadeiros.",
      },
      {
        pergunta: "Se P é falso e Q é verdadeiro, qual o resultado de P ∨ Q (P OU Q)?",
        opcoes: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "✓ Na disjunção (∨), basta um ser verdadeiro. Q é verdadeiro, então P ∨ Q é verdadeiro.",
        explicacaoErrada: "✗ O OU só é falso quando ambas as partes são falsas.",
      },
      {
        pergunta: "Qual o resultado de ¬V (NÃO Verdadeiro)?",
        opcoes: ["Verdadeiro", "Falso", "Indeterminado"],
        correta: 1,
        explicacao: "✓ A negação inverte: ¬V = F.",
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
        pergunta: "Se o computador avalia P ∨ Q e P já é verdadeiro, ele precisa testar Q?",
        opcoes: ["Sim, sempre testa tudo", "Não, já retorna V (curto-circuito)", "Depende da linguagem"],
        correta: 1,
        explicacao: "✓ Avaliação de curto-circuito: se P é V no OU, o resultado já é V sem precisar testar Q.",
        explicacaoErrada: "✗ No OU, se o primeiro operando é V, o resultado já é V — o computador pula o segundo teste.",
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
    slug: "conditional-biconditional",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Consequências lógicas",
    subtitulo: "Condicional (se...então) e bicondicional (se e somente se)",
    descricao: "Lógica de causa e efeito: proposições condicionais e bicondicionais com exemplos práticos, história do Patrick Maia e falácias lógicas.",
    secoes: [
      {
        titulo: "A lógica de causa e efeito",
        conteudo: [
          "No dia a dia, constantemente usamos raciocínios do tipo 'se acontecer X, então Y'. Isso é a condicional.",
          "\"Se fizer calor, vou ao shopping\" — a ida ao shopping é consequência do calor.",
          "Na lógica formal, escrevemos P → Q (se P, então Q).",
          "Atenção: a condicional NÃO diz o que acontece quando não faz calor! Se não fizer calor, posso ir ou não ir ao shopping — a promessa continua válida.",
        ],
      },
      {
        titulo: "Tabela verdade da condicional",
        conteudo: [
          "A condicional só é FALSA em um caso: quando a condição (P) é verdadeira, mas a consequência (Q) é falsa.",
          "\"Se fizer calor, vou ao shopping\" — análise completa:",
          "Faz calor (V) e fui ao shopping (V) → promessa cumprida (V)",
          "Faz calor (V) e NÃO fui ao shopping (F) → promessa quebrada (F)",
          "NÃO faz calor (F) e fui ao shopping (V) → não prometi nada sobre frio, tudo bem (V)",
          "NÃO faz calor (F) e NÃO fui ao shopping (F) → idem, tudo bem (V)",
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
          texto: "Quando a condição é falsa, a condicional é sempre verdadeira — independente da consequência. Isso pode parecer estranho, mas é consistente na lógica formal: uma promessa só pode ser quebrada se a condição era verdadeira.",
          tipo: "alerta",
        },
      },
      {
        titulo: "A história do Patrick Maia",
        conteudo: [
          "O professor Patrick Maia ilustra a diferença entre condicional e bicondicional com um exemplo brilhante:",
          "\"Você quer ir ao cinema?\" (pergunta aberta) é diferente de \"Eu o convido para ir ao cinema\" (compromisso).",
          "\"Se você quiser, vamos ao cinema\" → condicional. Se você não quiser, eu posso ir sozinho ou não.",
          "\"Vamos ao cinema se e somente se você quiser\" → bicondicional. Se você não for, eu também não vou.",
          "A diferença é sutil no português do dia a dia, mas na lógica formal é enorme.",
        ],
      },
      {
        titulo: "Bicondicional — se e somente se",
        conteudo: [
          "A bicondicional (P ↔ Q) é verdadeira quando P e Q têm o MESMO valor: ambos verdadeiros ou ambos falsos.",
          "\"A lâmpada acende se e somente se o interruptor está ligado\" — os dois estados estão completamente vinculados.",
          "Diferença crucial: no \"se\" (→), a consequência pode acontecer por outros motivos. No \"se e somente se\" (↔), os dois estão obrigatoriamente ligados.",
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
        titulo: "Cuidado com falácias lógicas!",
        conteudo: [
          "Uma falácia clássica: \"Deus é amor. O amor é cego. Rei Charles é cego. Logo, Rei Charles é Deus.\"",
          "Cada passo parece fazer sentido isoladamente, mas a conclusão é absurda. O erro está em tratar relações diferentes como se fossem a mesma coisa.",
          "Na lógica formal, esse tipo de erro é evitado porque as regras são precisas: P → Q não significa Q → P (a recíproca não é necessariamente verdadeira).",
          "\"Se é cachorro, então é animal\" (V). Mas \"Se é animal, então é cachorro\"? (F — pode ser um gato!)",
        ],
        callout: {
          texto: "A lógica formal existe justamente para evitar falácias. Sempre verifique se cada passo da dedução é válido pela tabela verdade.",
          tipo: "alerta",
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
        pergunta: "\"Se é cachorro, então é animal\" é verdadeiro. Podemos concluir que \"Se é animal, então é cachorro\"?",
        opcoes: ["Sim, a recíproca é sempre verdadeira", "Não, a recíproca pode ser falsa", "Depende do animal"],
        correta: 1,
        explicacao: "✓ P → Q não implica Q → P. A recíproca é uma afirmação diferente que precisa ser provada separadamente.",
        explicacaoErrada: "✗ A recíproca (inverter P e Q) nem sempre é verdadeira. Um gato é animal mas não é cachorro.",
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
    slug: "truth-table",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Semântica: Tabela Verdade",
    subtitulo: "Analisando expressões lógicas com múltiplas variáveis",
    descricao: "Construção de tabelas verdade com 2 e 3 variáveis, precedência de operadores, método de preenchimento e o sistema de alarme como exemplo completo.",
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
        titulo: "Método de construção: preencher de trás para frente",
        conteudo: [
          "Para 3 variáveis (P, Q, R), preencha as colunas de trás para frente:",
          "R (última variável): alterna V, F, V, F, V, F, V, F (uma a uma)",
          "Q (penúltima): alterna V, V, F, F, V, V, F, F (duas a duas)",
          "P (primeira): alterna V, V, V, V, F, F, F, F (quatro a quatro)",
          "Esse método garante que todas as 2ⁿ combinações apareçam, sem repetição e sem esquecimento.",
        ],
      },
      {
        titulo: "Precedência de operadores",
        conteudo: [
          "Assim como na matemática (multiplicação antes de soma), a lógica tem precedência:",
          "1º ¬ (negação) → 2º ∧ (conjunção/E) → 3º ∨ (disjunção/OU) → 4º → (condicional) → 5º ↔ (bicondicional)",
          "Ou seja: ¬ é como o sinal de menos, ∧ é como multiplicação, ∨ é como soma.",
          "Use parênteses para alterar a precedência quando necessário.",
        ],
      },
      {
        titulo: "Exemplo completo: decisão de cinema (3 variáveis)",
        conteudo: [
          "\"Se eu tiver dinheiro (P) E o filme for legal (Q), ENTÃO vou ao cinema (resultado).\"",
          "Expressão: P ∧ Q → resultado. Com 2 variáveis de entrada, temos 4 linhas.",
          "Mas vamos complicar: \"Vou ao cinema se tiver dinheiro E (o filme for bom OU meus amigos forem)\".",
          "Expressão com 3 variáveis: P ∧ (Q ∨ R) — dinheiro E (filme bom OU amigos vão).",
        ],
      },
      {
        titulo: "Sistema de alarme com 3 variáveis",
        conteudo: [
          "Considere um alarme com 3 condições: A (alarme ligado), P (porta aberta), M (movimento detectado).",
          "O alarme dispara quando: A ∧ (P ∨ M) — o alarme deve estar ligado E pelo menos uma das condições de risco deve ser verdadeira.",
          "Expressão completa: Alarme = A ∧ (P ∨ M)",
        ],
        truthTable: {
          headers: ["A", "P", "M", "P ∨ M", "A ∧ (P ∨ M)"],
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
        opcoes: ["∧ (E/AND)", "∨ (OU/OR)", "¬ (NÃO/NOT)", "→ (condicional)"],
        correta: 2,
        explicacao: "✓ ¬ (NÃO) tem a maior precedência — é avaliado primeiro.",
        explicacaoErrada: "✗ A ordem é: ¬ > ∧ > ∨ > → > ↔. O ¬ tem prioridade máxima.",
      },
      {
        pergunta: "No sistema de alarme A ∧ (P ∨ M), se A=V, P=F, M=F, o alarme dispara?",
        opcoes: ["Sim", "Não"],
        correta: 1,
        explicacao: "✓ P ∨ M = F ∨ F = F. Depois A ∧ F = F. O alarme não dispara.",
        explicacaoErrada: "✗ Sem porta aberta nem movimento, P ∨ M é falso, e V ∧ F = F.",
      },
      {
        pergunta: "Ao preencher a tabela verdade de trás para frente, a última variável alterna como?",
        opcoes: ["V,V,F,F,V,V,F,F", "V,F,V,F,V,F,V,F", "V,V,V,V,F,F,F,F", "F,V,F,V,F,V,F,V"],
        correta: 1,
        explicacao: "✓ A última variável alterna uma a uma: V,F,V,F,V,F,V,F.",
        explicacaoErrada: "✗ A última variável alterna individualmente: V,F,V,F... A penúltima: V,V,F,F...",
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
    slug: "logical-equivalences",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Equivalências lógicas",
    subtitulo: "Expressões diferentes, mesmos resultados — simplificando a lógica",
    descricao: "Equivalência lógica, simplificação de expressões, Leis de De Morgan, notação alternativa com · e +, e o exemplo do alarme simplificado.",
    secoes: [
      {
        titulo: "O que é equivalência lógica?",
        conteudo: [
          "Duas expressões são logicamente equivalentes quando produzem os mesmos resultados para todas as combinações possíveis de valores.",
          "Verificamos isso comparando as tabelas verdade: se as colunas finais são idênticas, as expressões são equivalentes.",
          "Notação alternativa muito usada em eletrônica e circuitos: · (ponto) para E e + para OU. Assim, A ∧ B pode ser escrito como A·B e A ∨ B como A+B.",
        ],
      },
      {
        titulo: "Exemplo do alarme: simplificação real",
        conteudo: [
          "Imagine que o alarme dispara nas seguintes situações (cada linha é um caso):",
          "(A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) ∨ (A ∧ ¬B ∧ C)",
          "Isso parece complexo, mas podemos simplificar! Nos dois primeiros termos, A e B são comuns:",
          "(A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) = A ∧ B ∧ (C ∨ ¬C) = A ∧ B (pois C ∨ ¬C é sempre V)",
          "Então fica: (A ∧ B) ∨ (A ∧ ¬B ∧ C) = A ∧ (B ∨ (¬B ∧ C)) = A ∧ (B ∨ C)",
          "Resultado final: A ∧ (B ∨ C) — muito mais simples! E produz exatamente os mesmos resultados.",
        ],
        callout: {
          texto: "Simplificar expressões reduz o número de portas lógicas necessárias em circuitos reais, economizando energia e espaço no chip.",
          tipo: "sucesso",
        },
      },
      {
        titulo: "Distributiva: a regra fundamental",
        conteudo: [
          "A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)",
          "Funciona como a distributiva da matemática: a × (b + c) = ab + ac.",
          "Na notação alternativa: A·(B+C) = A·B + A·C — idêntico à álgebra!",
        ],
        truthTable: {
          headers: ["A", "B", "C", "A ∧ (B ∨ C)", "(A ∧ B) ∨ (A ∧ C)"],
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
      },
      {
        titulo: "Leis de De Morgan",
        conteudo: [
          "As Leis de De Morgan permitem 'distribuir' a negação, trocando ∧ por ∨ e vice-versa:",
          "¬(A ∧ B) = (¬A) ∨ (¬B) — \"não é verdade que ambos\" = \"pelo menos um é falso\"",
          "¬(A ∨ B) = (¬A) ∧ (¬B) — \"não é verdade que algum\" = \"ambos são falsos\"",
          "Exemplo do professor: \"NÃO (está quente E está úmido)\" = \"NÃO está quente OU NÃO está úmido\".",
          "Essas leis são usadíssimas em programação para simplificar condições if/else complexas.",
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
        pergunta: "¬(A ∧ B) é equivalente a:",
        opcoes: ["(¬A) ∧ (¬B)", "(¬A) ∨ (¬B)", "A ∨ B", "¬A ∧ B"],
        correta: 1,
        explicacao: "✓ Lei de De Morgan: a negação do ∧ vira ∨ com as partes negadas.",
        explicacaoErrada: "✗ Pela Lei de De Morgan: ¬(A ∧ B) = (¬A) ∨ (¬B).",
      },
      {
        pergunta: "Na notação alternativa, o símbolo · (ponto) representa:",
        opcoes: ["OU (disjunção)", "E (conjunção)", "NÃO (negação)", "Condicional"],
        correta: 1,
        explicacao: "✓ O ponto (·) representa E (∧), assim como na multiplicação.",
        explicacaoErrada: "✗ Na notação alternativa: · = E (∧), + = OU (∨).",
      },
      {
        pergunta: "¬(A ∨ B) é equivalente a:",
        opcoes: ["(¬A) ∨ (¬B)", "(¬A) ∧ (¬B)", "¬A ∨ B", "A ∧ ¬B"],
        correta: 1,
        explicacao: "✓ Lei de De Morgan: a negação do ∨ vira ∧ com as partes negadas.",
        explicacaoErrada: "✗ ¬(A ∨ B) = (¬A) ∧ (¬B) — a segunda Lei de De Morgan.",
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
    slug: "logic-game",
    modulo: "Módulo 1 — Lógica Proposicional",
    titulo: "Um jogo simples de lógica",
    subtitulo: "Quem está mentindo? Resolvendo puzzles com tabelas verdade",
    descricao: "Jogo lógico completo do professor com três competidores (A, B, C) — teste de hipóteses passo a passo até encontrar quem fala a verdade.",
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
          "A diz: \"B está mentindo\" (ou seja, A afirma ¬B)",
          "B diz: \"C está mentindo\" (ou seja, B afirma ¬C)",
          "C diz: \"A e B estão mentindo\" (ou seja, C afirma ¬A ∧ ¬B)",
          "Regra: se uma pessoa fala a verdade, sua afirmação É verdadeira. Se mente, sua afirmação É falsa.",
        ],
      },
      {
        titulo: "Teste de hipóteses passo a passo",
        conteudo: [
          "HIPÓTESE 1: Suponha que A fala verdade (A=V).",
          "→ A diz ¬B, e A fala verdade, então B mente (B=F).",
          "→ B diz ¬C, mas B mente, então ¬C é falso → C fala verdade (C=V).",
          "→ C diz ¬A ∧ ¬B. C fala verdade, então ¬A ∧ ¬B deve ser V → A=F e B=F.",
          "→ Mas assumimos A=V! CONTRADIÇÃO. ✗ Descartada.",
          "",
          "HIPÓTESE 2: Suponha que B fala verdade (B=V).",
          "→ B diz ¬C, e B fala verdade, então C mente (C=F).",
          "→ C diz ¬A ∧ ¬B. C mente, então ¬A ∧ ¬B é falso → pelo menos um entre A e B fala verdade.",
          "→ B=V, então a condição já é satisfeita. ✓",
          "→ A diz ¬B. Se A fala verdade, B mente — mas B=V. Contradição → A mente (A=F). ✓",
          "→ Verificação: A=F, B=V, C=F. A mente ao dizer ¬B (B é V). B fala verdade ao dizer ¬C (C é F). C mente ao dizer ¬A∧¬B (¬F∧¬V = V∧F = F). CONSISTENTE! ✓",
        ],
      },
      {
        titulo: "A solução",
        conteudo: [
          "A única combinação consistente é: A mente, B fala a verdade, C mente.",
          "Verificação completa:",
          "A (mentiroso) diz \"B mente\" → falso, pois B fala verdade ✓",
          "B (verdadeiro) diz \"C mente\" → verdadeiro, pois C realmente mente ✓",
          "C (mentiroso) diz \"A e B mentem\" → falso, pois B fala verdade ✓",
          "Todas as afirmações são consistentes com quem é mentiroso e quem é verdadeiro.",
        ],
        truthTable: {
          headers: ["A", "B", "C", "A diz ¬B", "B diz ¬C", "C diz ¬A∧¬B", "Consistente?"],
          rows: [
            ["V", "V", "V", "¬V=F≠V", "—", "—", "✗"],
            ["V", "V", "F", "¬V=F≠V", "—", "—", "✗"],
            ["V", "F", "V", "¬F=V✓", "¬V=F✓", "¬V∧¬F=F≠V", "✗"],
            ["V", "F", "F", "¬F=V✓", "¬F=V≠F", "—", "✗"],
            ["F", "V", "V", "¬V=F✓", "¬V=F≠V", "—", "✗"],
            ["F", "V", "F", "¬V=F✓", "¬F=V✓", "¬F∧¬V=F✓", "✓"],
            ["F", "F", "V", "¬F=V≠F", "—", "—", "✗"],
            ["F", "F", "F", "—", "—", "—", "✗ (regra)"],
          ],
        },
        callout: {
          texto: "Resultado: B fala a verdade. A e C mentem. O método sistemático garante que não perdemos nenhuma possibilidade.",
          tipo: "sucesso",
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
        pergunta: "No jogo, quem fala a verdade?",
        opcoes: ["A", "B", "C", "A e C"],
        correta: 1,
        explicacao: "✓ B é o único que fala a verdade. A e C mentem.",
        explicacaoErrada: "✗ Testando todas as combinações, a única consistente é A=F, B=V, C=F.",
      },
      {
        pergunta: "Se A diz '¬B' e A MENTE, o que podemos concluir sobre B?",
        opcoes: ["B mente", "B fala verdade", "Nada", "B também mente"],
        correta: 1,
        explicacao: "✓ Se A mente, sua afirmação (¬B) é falsa. Logo, B NÃO é falso → B fala verdade.",
        explicacaoErrada: "✗ Mentiroso faz afirmação falsa: ¬B é falso → B é verdadeiro.",
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
    slug: "task-sequence",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Sequência de tarefas",
    subtitulo: "Quebrando o problema em partes — a base do pensamento algorítmico",
    descricao: "Introdução à estrutura de programas (entrada-processamento-saída), decomposição de problemas em 4 níveis, e a definição formal de algoritmo.",
    secoes: [
      {
        titulo: "Programadores são resolvedores de problemas",
        conteudo: [
          "Antes de escrever código, um programador precisa ENTENDER o problema e dividi-lo em partes menores.",
          "Como disse o professor: \"Uma pessoa que resolve problemas, e se precisar, utiliza código para isso.\" O código é a ferramenta, não o objetivo.",
          "Essa habilidade de decomposição é mais importante que qualquer linguagem de programação.",
        ],
        callout: {
          texto: "\"Programador não é quem escreve código. É quem resolve problemas — e se precisar, usa código para isso.\"",
          tipo: "info",
        },
      },
      {
        titulo: "Entrada, processamento e saída",
        conteudo: [
          "Todo programa segue este fluxo:",
          "ENTRADA → dados que o programa recebe (teclado, arquivo, sensor, microfone, câmera)",
          "PROCESSAMENTO → operações realizadas sobre os dados (cálculos, comparações, filtragens)",
          "SAÍDA → resultado entregue ao usuário (tela, arquivo, som, LED, impressora)",
          "Mesmo os programas mais complexos (jogos, IA, redes sociais) seguem essa estrutura fundamental.",
        ],
      },
      {
        titulo: "Exemplo: arrumar a casa (decomposição em 4 níveis)",
        conteudo: [
          "\"Arrumar a casa\" é um problema grande. O professor decompõe em 4 níveis progressivos:",
          "",
          "NÍVEL 1 — Visão geral: Arrumar a casa",
          "",
          "NÍVEL 2 — Cômodos: Sala → Quartos → Cozinha → Banheiro",
          "",
          "NÍVEL 3 — Tarefas por cômodo:",
          "  Sala: recolher objetos, varrer, passar pano, organizar estante",
          "  Cozinha: lavar louça, limpar fogão, varrer, organizar armários",
          "  Banheiro: limpar vaso, limpar pia, lavar chão, trocar toalhas",
          "",
          "NÍVEL 4 — Subtarefas detalhadas:",
          "  Lavar louça: separar pratos e copos → aplicar detergente → esfregar → enxaguar → secar",
          "",
          "Cada nível adiciona mais detalhe. O nível necessário depende de quem vai executar.",
        ],
      },
      {
        titulo: "O que é um algoritmo?",
        conteudo: [
          "Definição formal do professor: \"Um algoritmo é uma sequência de tarefas bem definidas e não ambíguas para resolver um problema.\"",
          "Características de um bom algoritmo:",
          "• Finito — tem um número definido de passos e eventualmente termina",
          "• Definido — cada passo é claro, sem ambiguidade (\"mexa bem\" é ambíguo, \"mexa por 3 minutos\" é definido)",
          "• Efetivo — cada passo pode ser executado (\"divida por zero\" não é efetivo)",
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
        pergunta: "Segundo o professor, programador é quem:",
        opcoes: [
          "Escreve código o dia inteiro",
          "Resolve problemas e, se precisar, usa código",
          "Conhece todas as linguagens",
          "Trabalha com computador",
        ],
        correta: 1,
        explicacao: "✓ O foco é resolver problemas — código é apenas uma ferramenta para isso.",
        explicacaoErrada: "✗ O professor define: \"Uma pessoa que resolve problemas, e se precisar, utiliza código para isso.\"",
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
    slug: "narrative-description",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Algoritmos: Descrição narrativa",
    subtitulo: "Escrevendo algoritmos passo a passo em linguagem natural",
    descricao: "Algoritmos em forma de texto narrativo: receita completa de pavê de café (4 passos), algoritmo de escovar os dentes (7 passos) e as 3 formas de descrever algoritmos.",
    secoes: [
      {
        titulo: "As 3 formas de descrever algoritmos",
        conteudo: [
          "Existem três formas principais de representar um algoritmo, do mais informal ao mais formal:",
          "1. Descrição narrativa — texto em linguagem natural (português)",
          "2. Fluxograma — diagrama visual com formas geométricas e setas",
          "3. Pseudocódigo — texto semi-formal que parece código, mas não é executável",
          "Nesta aula, começamos pela mais simples: a descrição narrativa.",
        ],
      },
      {
        titulo: "Receita completa de pavê de café",
        conteudo: [
          "O professor usa a receita de pavê de café como exemplo perfeito de algoritmo narrativo:",
          "",
          "Ingredientes (ENTRADA): biscoito champagne, café forte, creme de leite, leite condensado, chocolate em pó.",
          "",
          "Preparo (PROCESSAMENTO) — 4 passos principais:",
          "Passo 1: Prepare o café forte e deixe esfriar",
          "Passo 2: Misture o creme de leite com o leite condensado até ficar homogêneo",
          "Passo 3: Molhe os biscoitos no café e monte camadas alternadas (biscoitos + creme)",
          "Passo 4: Cubra com chocolate em pó e leve à geladeira por 4 horas",
          "",
          "Resultado (SAÍDA): pavê de café pronto para servir.",
        ],
        callout: {
          texto: "Note que a ORDEM dos passos importa: não se pode cobrir com chocolate antes de montar as camadas! Trocar a sequência gera resultado errado — ou impossível.",
          tipo: "alerta",
        },
      },
      {
        titulo: "Algoritmo detalhado: escovar os dentes",
        conteudo: [
          "Para um humano, \"escovar os dentes\" é suficiente. Mas para um robô, precisamos detalhar cada passo:",
          "",
          "1. Pegar a escova de dentes",
          "2. Abrir a pasta de dentes",
          "3. Aplicar pasta sobre as cerdas da escova",
          "4. Molhar a escova com pasta sob a torneira",
          "5. Escovar os dentes fazendo movimentos circulares (REPETIR por 2 minutos)",
          "6. SE houver fio dental disponível, ENTÃO passar fio dental entre os dentes",
          "7. Enxaguar a boca com água",
          "",
          "Note que o passo 5 contém uma REPETIÇÃO (loop) e o passo 6 contém uma CONDICIONAL (if). Mesmo em linguagem natural, as estruturas de programação já aparecem!",
        ],
      },
      {
        titulo: "Nível de detalhe",
        conteudo: [
          "O nível de detalhe depende do público/executor.",
          "Para um humano adulto: \"Escove os dentes\" é suficiente.",
          "Para uma criança: precisa dos 7 passos detalhados.",
          "Para um robô: cada passo precisa ser subdividido (\"pegar a escova\" vira: localizar escova → mover braço → abrir garra → fechar garra → levantar).",
          "Na programação, o nível de detalhe é determinado pela linguagem e pelas bibliotecas disponíveis.",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Quais são as 3 formas de descrever um algoritmo?",
        opcoes: [
          "HTML, CSS e JavaScript",
          "Descrição narrativa, fluxograma e pseudocódigo",
          "Texto, imagem e vídeo",
          "Entrada, processamento e saída",
        ],
        correta: 1,
        explicacao: "✓ As 3 formas são: narrativa (texto), fluxograma (visual) e pseudocódigo (semi-formal).",
        explicacaoErrada: "✗ As formas de representar algoritmos são: descrição narrativa, fluxograma e pseudocódigo.",
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
        pergunta: "No algoritmo de escovar os dentes, \"SE houver fio dental\" é um exemplo de:",
        opcoes: ["Repetição (loop)", "Condicional (if)", "Entrada", "Saída"],
        correta: 1,
        explicacao: "✓ \"SE...ENTÃO\" é uma estrutura condicional — executa apenas se a condição for verdadeira.",
        explicacaoErrada: "✗ SE/ENTÃO é a estrutura condicional, equivalente ao if/else em programação.",
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
    slug: "flowchart",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Algoritmos: Fluxograma",
    subtitulo: "Representação visual de algoritmos com símbolos padronizados",
    descricao: "Fluxogramas com os 4 símbolos principais (elipse, retângulo, paralelogramo, losango), exemplo linear de soma, bifurcação com febre, e loop do fatorial.",
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
        titulo: "Os 4 símbolos do fluxograma",
        conteudo: [
          "Conforme o professor, os símbolos corretos são:",
          "ELIPSE (oval) → Início e Fim do algoritmo. Todo fluxograma tem pelo menos um INÍCIO e um FIM.",
          "RETÂNGULO → Processo/Ação — qualquer operação: calcular, atribuir valor, incrementar.",
          "PARALELOGRAMO → Entrada ou Saída de dados — ler do teclado, exibir na tela, imprimir.",
          "LOSANGO (diamante) → Decisão/Teste condicional — sempre com duas saídas: SIM e NÃO.",
          "SETAS → indicam a direção do fluxo de execução.",
        ],
        callout: {
          texto: "O losango (decisão) sempre tem duas saídas: SIM e NÃO. É o equivalente visual do if/else. Um paralelogramo é usado para E/S, não um trapézio.",
          tipo: "info",
        },
      },
      {
        titulo: "Exemplo 1: soma A + B (linear, sem decisão)",
        conteudo: [
          "INÍCIO (elipse)",
          "  ↓",
          "Ler A (paralelogramo)",
          "  ↓",
          "Ler B (paralelogramo)",
          "  ↓",
          "S ← A + B (retângulo)",
          "  ↓",
          "Exibir S (paralelogramo)",
          "  ↓",
          "FIM (elipse)",
          "",
          "Neste caso simples, não há losangos — o fluxo é totalmente linear.",
        ],
      },
      {
        titulo: "Exemplo 2: verificar febre T > 37 (com bifurcação)",
        conteudo: [
          "INÍCIO (elipse)",
          "  ↓",
          "Ler temperatura T (paralelogramo)",
          "  ↓",
          "T > 37? (losango)",
          "  SIM → Exibir \"Febre detectada\" (paralelogramo) → FIM",
          "  NÃO → Exibir \"Temperatura normal\" (paralelogramo) → FIM",
          "",
          "Aqui o losango cria dois caminhos possíveis — a bifurcação.",
        ],
      },
      {
        titulo: "Exemplo 3: fatorial (com loop / seta de retorno)",
        conteudo: [
          "INÍCIO → Ler N → resultado ← 1",
          "  ↓",
          "N > 1? (losango)",
          "  NÃO → Exibir resultado → FIM",
          "  SIM → resultado ← resultado × N → N ← N - 1 → (seta volta para N > 1?)",
          "",
          "A seta que volta para cima cria o loop! O losango testa a condição de parada.",
          "Todo loop PRECISA de uma condição de saída, senão o algoritmo nunca termina (loop infinito).",
        ],
      },
    ],
    quiz: [
      {
        pergunta: "Qual forma geométrica representa uma decisão (if/else)?",
        opcoes: ["Retângulo", "Elipse", "Losango", "Paralelogramo"],
        correta: 2,
        explicacao: "✓ O losango (diamante) representa testes condicionais com duas saídas: SIM e NÃO.",
        explicacaoErrada: "✗ Decisões são representadas pelo losango, sempre com saídas SIM e NÃO.",
      },
      {
        pergunta: "O que representa o paralelogramo no fluxograma?",
        opcoes: ["Decisão", "Processo", "Entrada/Saída de dados", "Início/Fim"],
        correta: 2,
        explicacao: "✓ O paralelogramo indica operações de entrada ou saída de dados.",
        explicacaoErrada: "✗ Paralelogramo = Entrada/Saída. Retângulo = Processo. Losango = Decisão.",
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
    slug: "pseudocode",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Algoritmos: Pseudocódigo",
    subtitulo: "Linguagem informal para descrever algoritmos antes do código real",
    descricao: "Pseudocódigo com setinha ← para atribuição, palavras-chave (enquanto, se, repita, fim), indentação para escopo, e exemplos de soma e fatorial.",
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
        titulo: "Variáveis e atribuição com ←",
        conteudo: [
          "Variáveis armazenam valores. No pseudocódigo do professor, usamos a setinha ← para atribuição:",
          "A setinha ← significa \"recebe\" ou \"armazena\". É diferente do = matemático (igualdade).",
        ],
        codeBlock: {
          tokens: [
            { text: "programa", type: "keyword" },
            { text: " soma\n" },
            { text: "  ", type: "keyword" },
            { text: "ler", type: "keyword" },
            { text: " A\n" },
            { text: "  " },
            { text: "ler", type: "keyword" },
            { text: " B\n" },
            { text: "  " },
            { text: "S", type: "keyword" },
            { text: " ← A + B\n" },
            { text: "  " },
            { text: "escrever", type: "keyword" },
            { text: " S\n" },
            { text: "fim-programa", type: "keyword" },
          ],
          language: "pseudocódigo",
        },
      },
      {
        titulo: "Palavras-chave do pseudocódigo",
        conteudo: [
          "As palavras-chave mais comuns usadas pelo professor:",
          "• ler — receber dados de entrada",
          "• escrever — exibir dados de saída",
          "• se...então...senão...fim-se — estrutura condicional",
          "• enquanto...faça...fim-enquanto — loop com teste no início",
          "• repita...até — loop com teste no final",
          "• programa...fim-programa — delimita o algoritmo",
          "A indentação (recuo) mostra o escopo dos blocos: tudo que está recuado dentro de um 'enquanto' pertence ao loop.",
        ],
      },
      {
        titulo: "Exemplo: programa fatorial",
        conteudo: [
          "O professor escreve o fatorial exatamente assim:",
        ],
        codeBlock: {
          tokens: [
            { text: "programa", type: "keyword" },
            { text: " fatorial\n" },
            { text: "  " },
            { text: "ler", type: "keyword" },
            { text: " N\n" },
            { text: "  " },
            { text: "resultado", type: "keyword" },
            { text: " ← " },
            { text: "1", type: "number" },
            { text: "\n  " },
            { text: "enquanto", type: "keyword" },
            { text: " N > " },
            { text: "1", type: "number" },
            { text: " " },
            { text: "faça\n", type: "keyword" },
            { text: "    resultado ← resultado × N\n" },
            { text: "    N ← N - " },
            { text: "1", type: "number" },
            { text: "\n  " },
            { text: "fim-enquanto\n", type: "keyword" },
            { text: "  " },
            { text: "escrever", type: "keyword" },
            { text: " resultado\n" },
            { text: "fim-programa", type: "keyword" },
          ],
          language: "pseudocódigo",
        },
        callout: {
          texto: "Note a indentação: o conteúdo dentro do 'enquanto' está recuado, mostrando visualmente que pertence ao loop. Essa prática é obrigatória em Python e recomendada em todas as linguagens.",
          tipo: "info",
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
        pergunta: "O que significa a setinha ← no pseudocódigo?",
        opcoes: ["Comparação (igual a)", "Atribuição (recebe/armazena)", "Seta de fluxo", "Menor ou igual"],
        correta: 1,
        explicacao: "✓ A setinha ← significa \"recebe\" ou \"armazena um valor\".",
        explicacaoErrada: "✗ ← é atribuição: a variável à esquerda recebe o valor da expressão à direita.",
      },
      {
        pergunta: "Para que serve a indentação (recuo) no pseudocódigo?",
        opcoes: [
          "Apenas estética",
          "Mostrar o escopo dos blocos (o que pertence a cada estrutura)",
          "Economizar espaço",
          "Indicar comentários",
        ],
        correta: 1,
        explicacao: "✓ A indentação mostra visualmente quais instruções pertencem a qual bloco (loop, if, etc.).",
        explicacaoErrada: "✗ A indentação é funcional: mostra que instruções recuadas estão dentro do bloco acima.",
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
    slug: "block-programming",
    modulo: "Módulo 2 — Algoritmos",
    titulo: "Escrevendo programas em blocos",
    subtitulo: "Programação visual com Scratch — encaixando blocos como peças de Lego",
    descricao: "Programação visual em blocos com Scratch: interface (palco, ator, blocos), 4 exemplos práticos do gato, e formas dos blocos (hexagonal, arredondado, quadrado).",
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
        titulo: "A interface do Scratch",
        conteudo: [
          "O Scratch tem 3 áreas principais:",
          "PALCO (à direita) — onde o resultado do programa aparece. O ator (sprite) se movimenta aqui.",
          "ATOR (sprite) — o personagem que executa as ações. O padrão é o gato do Scratch.",
          "BLOCOS (à esquerda) — categorias coloridas de blocos que você arrasta para a área de scripts.",
          "A área de scripts (centro) é onde você monta o programa encaixando blocos.",
        ],
      },
      {
        titulo: "Categorias de blocos e suas formas",
        conteudo: [
          "Eventos (amarelo) — disparam ações: 'quando bandeira clicada', 'quando tecla pressionada'",
          "Movimento (azul) — movem o ator: 'mova 10 passos', 'gire 15 graus'",
          "Aparência (roxo) — mudam visual: 'diga olá', 'próxima fantasia'",
          "Som (rosa) — reproduzem sons: 'toque som meow'",
          "Controle (laranja) — estruturas: 'repita 10 vezes', 'se...então'",
          "Variáveis (vermelho) — armazenam dados: 'mude X para 0'",
          "",
          "Formas dos blocos indicam seu tipo:",
          "Blocos HEXAGONAIS (6 lados) → condições booleanas (verdadeiro/falso)",
          "Blocos ARREDONDADOS → valores (números, textos)",
          "Blocos QUADRADOS (com encaixes) → ações/comandos",
        ],
      },
      {
        titulo: "Exemplo 1: gato caminhando (repetição + fantasia)",
        conteudo: [
          "Quando bandeira verde clicada:",
          "  Repita 10 vezes:",
          "    Mova 10 passos",
          "    Próxima fantasia",
          "    Espere 0.2 segundos",
          "",
          "O bloco 'próxima fantasia' alterna entre as imagens do gato (pernas abertas / fechadas), criando animação de caminhada.",
        ],
      },
      {
        titulo: "Exemplo 2: gato andando pelo cenário",
        conteudo: [
          "Quando bandeira verde clicada:",
          "  Repita sempre (loop infinito):",
          "    Mova 10 passos",
          "    Próxima fantasia",
          "    Se tocar na borda, volte",
          "",
          "O 'repita sempre' cria um loop infinito — o gato anda sem parar até você clicar no botão vermelho.",
        ],
      },
      {
        titulo: "Exemplo 3: gato pulando",
        conteudo: [
          "Quando bandeira verde clicada:",
          "  Deslize 0.3 segundos até x: (posição atual) y: (posição atual + 100)",
          "  Deslize 0.3 segundos até x: (posição atual) y: (posição original)",
          "",
          "O bloco 'deslize' move o ator suavemente até uma posição. Alterando Y para cima e depois voltando, criamos o efeito de pulo.",
        ],
      },
      {
        titulo: "Exemplo 4: fatorial no Scratch (com variáveis e loop)",
        conteudo: [
          "Programa completo de fatorial usando blocos do Scratch:",
          "",
          "Quando bandeira verde clicada:",
          "  Pergunte \"Digite um número\" e espere",
          "  Mude N para (resposta)",
          "  Mude resultado para 1",
          "  Repita até que N ≤ 1:",
          "    Mude resultado para (resultado × N)",
          "    Adicione -1 a N",
          "  Diga (resultado)",
          "",
          "Este exemplo mostra que Scratch pode fazer cálculos reais! O bloco 'pergunte' é entrada, variáveis armazenam dados, e 'repita até que' é o loop.",
        ],
        callout: {
          texto: "O fatorial no Scratch usa os mesmos conceitos do pseudocódigo: variáveis, loop com condição de parada, e entrada/saída. A diferença é apenas visual — a lógica é idêntica.",
          tipo: "info",
        },
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
        pergunta: "Blocos hexagonais (6 lados) no Scratch representam:",
        opcoes: ["Ações/comandos", "Valores numéricos", "Condições booleanas (V/F)", "Eventos"],
        correta: 2,
        explicacao: "✓ Blocos hexagonais são condições booleanas — retornam verdadeiro ou falso.",
        explicacaoErrada: "✗ Hexagonal = condição (V/F), arredondado = valor, quadrado = ação.",
      },
      {
        pergunta: "Qual bloco cria a animação de caminhada do gato?",
        opcoes: ["Mova 10 passos", "Próxima fantasia", "Gire 15 graus", "Deslize até"],
        correta: 1,
        explicacao: "✓ 'Próxima fantasia' alterna entre as imagens do gato, criando animação de caminhada.",
        explicacaoErrada: "✗ A animação vem da troca de fantasias (imagens) do ator, não do movimento.",
      },
      {
        pergunta: "As 3 áreas da interface do Scratch são:",
        opcoes: [
          "Código, terminal e saída",
          "Palco, ator e blocos/scripts",
          "Editor, compilador e depurador",
          "Entrada, processamento e saída",
        ],
        correta: 1,
        explicacao: "✓ O Scratch tem: palco (resultado visual), ator (personagem) e área de blocos/scripts.",
        explicacaoErrada: "✗ A interface do Scratch é visual: palco à direita, blocos à esquerda, scripts no centro.",
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
