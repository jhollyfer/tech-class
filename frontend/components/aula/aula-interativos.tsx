"use client";

import { AulaFlipBits } from "./aula-flip-bits";
import { AulaSimulator } from "./aula-simulator";
import { AulaExpandableCard } from "./aula-expandable-card";
import { AulaCodeToggle } from "./aula-code-toggle";

export function AulaInterativos({ interativos, slug }: { interativos: string[]; slug: string }) {
  return (
    <>
      {interativos.includes("flip-bits") && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaFlipBits quantidade={8} label="Clique nos bits para alternar entre 0 e 1" />
        </div>
      )}
      {interativos.includes("simulator") && slug === "true-or-false" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Simulador de proposições"
            descricao="Digite uma proposição e verifique se é verdadeira ou falsa."
            inputLabel="Proposição"
            inputPlaceholder="Ex: 2 + 2 = 4"
            verificar={(valor) => {
              const verdadeiras = ["2 + 2 = 4", "2+2=4", "a terra é redonda", "o sol é uma estrela"];
              const falsas = ["2 + 2 = 5", "2+2=5", "a terra é plana"];
              const v = valor.toLowerCase().trim();
              if (verdadeiras.some((t) => v.includes(t)))
                return { correto: true, mensagem: "VERDADEIRO — Esta proposição é verdadeira." };
              if (falsas.some((t) => v.includes(t)))
                return { correto: false, mensagem: "FALSO — Esta proposição é falsa." };
              return { correto: true, mensagem: "Proposição reconhecida. Pense: ela pode ser classificada como V ou F?" };
            }}
          />
        </div>
      )}
      {interativos.includes("simulator") && slug === "logical-connectives" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Simulador AND/OR/NOT"
            descricao="Digite uma expressão como: V E F, V OU F, NÃO V"
            inputLabel="Expressão"
            inputPlaceholder="Ex: V E F"
            verificar={(valor) => {
              const v = valor.toUpperCase().trim();
              const parse = (s: string) => s === "V" || s === "1" || s === "VERDADEIRO";
              if (v.startsWith("NÃO ") || v.startsWith("NAO ")) {
                const op = parse(v.replace(/^N[AÃ]O\s+/, ""));
                const r = !op;
                return { correto: true, mensagem: `NÃO ${op ? "V" : "F"} = ${r ? "V" : "F"}` };
              }
              const andMatch = v.match(/^(V|F|1|0)\s+E\s+(V|F|1|0)$/);
              if (andMatch) {
                const r = parse(andMatch[1]) && parse(andMatch[2]);
                return { correto: true, mensagem: `${andMatch[1]} E ${andMatch[2]} = ${r ? "V" : "F"}` };
              }
              const orMatch = v.match(/^(V|F|1|0)\s+OU\s+(V|F|1|0)$/);
              if (orMatch) {
                const r = parse(orMatch[1]) || parse(orMatch[2]);
                return { correto: true, mensagem: `${orMatch[1]} OU ${orMatch[2]} = ${r ? "V" : "F"}` };
              }
              return { correto: false, mensagem: "Formato: V E F, V OU F, ou NÃO V" };
            }}
          />
        </div>
      )}
      {interativos.includes("simulator") && slug === "conditional-biconditional" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Simulador condicional"
            descricao="Digite: V → F, F → V, V ↔ F (use -> e <->)"
            inputLabel="Expressão"
            inputPlaceholder="Ex: V -> F"
            verificar={(valor) => {
              const v = valor.toUpperCase().trim();
              const parse = (s: string) => s.trim() === "V" || s.trim() === "1";
              const bicond = v.split("<->");
              if (bicond.length === 2) {
                const r = parse(bicond[0]) === parse(bicond[1]);
                return { correto: true, mensagem: `${bicond[0].trim()} ↔ ${bicond[1].trim()} = ${r ? "V" : "F"}` };
              }
              const cond = v.split("->");
              if (cond.length === 2) {
                const p = parse(cond[0]);
                const q = parse(cond[1]);
                const r = !p || q;
                return { correto: true, mensagem: `${cond[0].trim()} → ${cond[1].trim()} = ${r ? "V" : "F"}` };
              }
              return { correto: false, mensagem: "Formato: V -> F ou V <-> F" };
            }}
          />
        </div>
      )}
      {interativos.includes("simulator") && slug === "truth-table" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Simulador de alarme"
            descricao="O alarme dispara quando: A E (P OU M). Digite V ou F para cada: A,P,M"
            inputLabel="A, P, M (ex: V,F,V)"
            inputPlaceholder="V,F,V"
            verificar={(valor) => {
              const parts = valor.toUpperCase().split(",").map((s) => s.trim());
              if (parts.length !== 3 || !parts.every((p) => p === "V" || p === "F"))
                return { correto: false, mensagem: "Digite 3 valores separados por vírgula: V,F,V" };
              const [a, p, m] = parts.map((s) => s === "V");
              const r = a && (p || m);
              return { correto: r, mensagem: r
                ? `ALARME DISPARA! A=${parts[0]}, P OU M=${p || m ? "V" : "F"}`
                : `Alarme silencioso. A=${parts[0]}, P OU M=${p || m ? "V" : "F"}` };
            }}
          />
        </div>
      )}
      {interativos.includes("simulator") && (slug === "logical-equivalences" || slug === "logic-game") && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Testador de expressões"
            descricao="Teste se duas expressões são equivalentes. Digite valores V/F separados por vírgula."
            inputLabel="Resultado expressão 1, Resultado expressão 2"
            inputPlaceholder="V,V"
            verificar={(valor) => {
              const parts = valor.toUpperCase().split(",").map((s) => s.trim());
              if (parts.length !== 2 || !parts.every((p) => p === "V" || p === "F"))
                return { correto: false, mensagem: "Digite dois valores: V,V ou V,F" };
              const equiv = parts[0] === parts[1];
              return { correto: equiv, mensagem: equiv
                ? "EQUIVALENTES — Os resultados são iguais!"
                : "NÃO EQUIVALENTES — Os resultados diferem." };
            }}
          />
        </div>
      )}
      {interativos.includes("expandable-card") && slug === "task-sequence" && (
        <div className="max-w-3xl mx-auto px-6 py-4 space-y-2">
          <AulaExpandableCard titulo="Entrada" resumo="Dados que o programa recebe">
            <p>Teclado, mouse, arquivo, sensor, microfone, câmera... qualquer forma de receber dados do mundo externo.</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Processamento" resumo="Operações sobre os dados">
            <p>Cálculos, comparações, ordenações, filtragens, transformações... o programa manipula os dados recebidos.</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Saída" resumo="Resultado entregue">
            <p>Tela, impressora, arquivo, som, LED, motor... qualquer forma de comunicar o resultado ao mundo externo.</p>
          </AulaExpandableCard>
        </div>
      )}
      {interativos.includes("code-toggle") && slug === "narrative-description" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaCodeToggle
            errado={`1. Escovar os dentes\n2. Colocar pasta na escova\n3. Enxaguar a boca\n4. Pegar a escova`}
            correto={`1. Pegar a escova\n2. Colocar pasta na escova\n3. Escovar os dentes\n4. Enxaguar a boca`}
            explicacao="A ordem dos passos é fundamental em um algoritmo. Não se pode escovar antes de colocar a pasta!"
          />
        </div>
      )}
      {interativos.includes("expandable-card") && slug === "narrative-description" && (
        <div className="max-w-3xl mx-auto px-6 py-4 space-y-2">
          <AulaExpandableCard titulo="Receita: Pavê de Café" resumo="Algoritmo em forma de receita">
            <p className="mb-2 font-semibold">Ingredientes (entrada):</p>
            <p>Biscoito champagne, café forte, creme de leite, leite condensado, chocolate em pó.</p>
            <p className="mt-2 mb-2 font-semibold">Preparo (processamento):</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Prepare o café e reserve</li>
              <li>Misture creme de leite com leite condensado</li>
              <li>Molhe biscoitos no café</li>
              <li>Monte camadas: biscoitos + creme</li>
              <li>Cubra com chocolate em pó</li>
              <li>Geladeira por 4 horas</li>
            </ol>
          </AulaExpandableCard>
        </div>
      )}
      {interativos.includes("expandable-card") && slug === "flowchart" && (
        <div className="max-w-3xl mx-auto px-6 py-4 space-y-2">
          <AulaExpandableCard titulo="Elipse / Círculo" resumo="Início e Fim do algoritmo">
            <p>Marca onde o fluxograma começa e onde termina. Todo fluxograma tem pelo menos um INÍCIO e um FIM.</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Retângulo" resumo="Processo / Ação">
            <p>Representa uma operação: calcular, atribuir valor, incrementar contador. Ex: S = A + B</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Trapézio" resumo="Entrada / Saída de dados">
            <p>Indica leitura de dados (entrada) ou exibição de resultados (saída). Ex: Ler temperatura, Exibir resultado.</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Losango" resumo="Decisão condicional (if/else)">
            <p>Testa uma condição com duas saídas: SIM e NÃO. Cria bifurcações no fluxo. Ex: Temperatura &gt; 38?</p>
          </AulaExpandableCard>
        </div>
      )}
      {interativos.includes("simulator") && slug === "flowchart" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Simulador: verificar febre"
            descricao="Siga o fluxograma: INÍCIO → Ler temp → temp > 38? → resultado"
            inputLabel="Temperatura (°C)"
            inputPlaceholder="Ex: 37.5"
            verificar={(valor) => {
              const temp = parseFloat(valor);
              if (isNaN(temp)) return { correto: false, mensagem: "Digite um número válido" };
              if (temp > 38) return { correto: false, mensagem: `${temp}°C > 38°C → FEBRE detectada! Procure um médico.` };
              return { correto: true, mensagem: `${temp}°C ≤ 38°C → Temperatura NORMAL.` };
            }}
          />
        </div>
      )}
      {interativos.includes("code-toggle") && slug === "pseudocode" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaCodeToggle
            errado={`ler N\nresultado ← 0\nenquanto N > 1 faça\n  resultado ← resultado × N\n  N ← N - 1\nfim-enquanto\nescrever resultado`}
            correto={`ler N\nresultado ← 1\nenquanto N > 1 faça\n  resultado ← resultado × N\n  N ← N - 1\nfim-enquanto\nescrever resultado`}
            explicacao="O resultado deve iniciar em 1, não 0. Qualquer número multiplicado por 0 dá 0, arruinando o fatorial."
          />
        </div>
      )}
      {interativos.includes("simulator") && slug === "pseudocode" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Calculadora de fatorial"
            descricao="Execute o pseudocódigo do fatorial mentalmente e verifique!"
            inputLabel="N! = ? (digite N)"
            inputPlaceholder="Ex: 5"
            verificar={(valor) => {
              const n = parseInt(valor);
              if (isNaN(n) || n < 0) return { correto: false, mensagem: "Digite um número inteiro ≥ 0" };
              if (n > 20) return { correto: false, mensagem: "Número muito grande! Tente até 20." };
              let fat = 1;
              for (let i = 2; i <= n; i++) fat *= i;
              return { correto: true, mensagem: `${n}! = ${fat}` };
            }}
          />
        </div>
      )}
      {interativos.includes("expandable-card") && slug === "block-programming" && (
        <div className="max-w-3xl mx-auto px-6 py-4 space-y-2">
          <AulaExpandableCard titulo="Eventos (amarelo)" resumo="Disparam a execução do programa">
            <p>Quando bandeira verde clicada, quando tecla pressionada, quando ator clicado. São o ponto de partida.</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Movimento (azul)" resumo="Controlam posição e direção">
            <p>Mova 10 passos, gire 15 graus, vá para x:0 y:0. Movem o ator pelo palco.</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Controle (laranja)" resumo="Estruturas de repetição e decisão">
            <p>Repita 10 vezes, se...então...senão, repita até que, espere N segundos. O cérebro do programa.</p>
          </AulaExpandableCard>
          <AulaExpandableCard titulo="Variáveis (vermelho)" resumo="Armazenam dados">
            <p>Mude pontuação para 0, adicione 1 a pontuação. Guardam valores que mudam durante a execução.</p>
          </AulaExpandableCard>
        </div>
      )}
      {interativos.includes("simulator") && slug === "block-programming" && (
        <div className="max-w-3xl mx-auto px-6 py-4">
          <AulaSimulator
            titulo="Qual bloco usar?"
            descricao="Digite uma ação e descubra qual categoria de bloco Scratch usar."
            inputLabel="Ação"
            inputPlaceholder="Ex: mover, repetir, clicar"
            verificar={(valor) => {
              const v = valor.toLowerCase().trim();
              if (["mover", "andar", "girar", "ir", "posição", "passos"].some((k) => v.includes(k)))
                return { correto: true, mensagem: "MOVIMENTO (azul) — Controla posição e direção do ator." };
              if (["repetir", "loop", "enquanto", "se", "senão", "esperar"].some((k) => v.includes(k)))
                return { correto: true, mensagem: "CONTROLE (laranja) — Estruturas de repetição e decisão." };
              if (["clicar", "tecla", "bandeira", "quando", "evento"].some((k) => v.includes(k)))
                return { correto: true, mensagem: "EVENTOS (amarelo) — Disparam ações no programa." };
              if (["dizer", "fantasia", "tamanho", "mostrar", "esconder"].some((k) => v.includes(k)))
                return { correto: true, mensagem: "APARÊNCIA (roxo) — Muda o visual do ator." };
              if (["variável", "pontuação", "contador", "valor"].some((k) => v.includes(k)))
                return { correto: true, mensagem: "VARIÁVEIS (vermelho) — Armazena e manipula dados." };
              if (["som", "tocar", "música", "audio"].some((k) => v.includes(k)))
                return { correto: true, mensagem: "SOM (rosa) — Reproduz sons e músicas." };
              return { correto: true, mensagem: "Tente palavras como: mover, repetir, clicar, dizer, som, variável." };
            }}
          />
        </div>
      )}
    </>
  );
}
