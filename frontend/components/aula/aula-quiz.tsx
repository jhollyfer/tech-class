"use client";

import { useReducer } from "react";

export interface QuizQuestion {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
  explicacaoErrada: string;
}

interface AulaQuizProps {
  questoes: QuizQuestion[];
}

type QuizState = {
  respostas: Record<number, number>;
  finalizado: boolean;
};

type QuizAction =
  | { type: "RESPONDER"; questao: number; opcao: number }
  | { type: "FINALIZAR" };

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "RESPONDER":
      if (state.respostas[action.questao] !== undefined) return state;
      return {
        ...state,
        respostas: { ...state.respostas, [action.questao]: action.opcao },
      };
    case "FINALIZAR":
      return { ...state, finalizado: true };
    default:
      return state;
  }
}

export function AulaQuiz({ questoes }: AulaQuizProps) {
  const [state, dispatch] = useReducer(quizReducer, {
    respostas: {},
    finalizado: false,
  });

  const totalRespondidas = Object.keys(state.respostas).length;
  const acertos = questoes.filter(
    (q, i) => state.respostas[i] === q.correta,
  ).length;
  const todasRespondidas = totalRespondidas === questoes.length;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="font-mono text-sm text-[var(--color-primary)] opacity-60">?</span>
        Quiz de fixação
      </h2>

      <div className="space-y-6">
        {questoes.map((q, qi) => {
          const respondida = state.respostas[qi] !== undefined;
          const acertou = state.respostas[qi] === q.correta;

          return (
            <div
              key={qi}
              className={`rounded-lg border p-5 transition-colors ${
                respondida
                  ? acertou
                    ? "border-[var(--color-aula-success)]/40 bg-[var(--color-aula-success)]/5"
                    : "border-[var(--color-aula-error)]/40 bg-[var(--color-aula-error)]/5"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
            >
              <p className="font-semibold text-sm mb-4">
                <span className="font-mono text-[var(--color-muted)] mr-2">
                  {String(qi + 1).padStart(2, "0")}.
                </span>
                {q.pergunta}
              </p>

              <div className="grid gap-2">
                {q.opcoes.map((opcao, oi) => (
                  <button
                    key={oi}
                    onClick={() => dispatch({ type: "RESPONDER", questao: qi, opcao: oi })}
                    disabled={respondida}
                    className={`text-left px-4 py-2.5 rounded-md text-sm font-mono transition-colors cursor-pointer ${
                      respondida
                        ? oi === q.correta
                          ? "bg-[var(--color-aula-success)]/15 text-[var(--color-aula-success)]"
                          : oi === state.respostas[qi]
                            ? "bg-[var(--color-aula-error)]/15 text-[var(--color-aula-error)]"
                            : "bg-[var(--color-surface)] text-[var(--color-muted)]"
                        : "bg-[var(--color-surface)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
                    } disabled:cursor-default border border-transparent ${
                      respondida && oi === q.correta ? "border-[var(--color-aula-success)]/30" : ""
                    }`}
                    aria-label={`Opção ${oi + 1}: ${opcao}`}
                  >
                    {opcao}
                  </button>
                ))}
              </div>

              {respondida && (
                <p className="mt-3 text-sm leading-relaxed">
                  {acertou ? (
                    <span className="text-[var(--color-aula-success)]">{q.explicacao}</span>
                  ) : (
                    <span className="text-[var(--color-aula-error)]">{q.explicacaoErrada}</span>
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {todasRespondidas && !state.finalizado && (
        <div className="mt-6 text-center">
          <button
            onClick={() => dispatch({ type: "FINALIZAR" })}
            className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Ver resultado
          </button>
        </div>
      )}

      {state.finalizado && (
        <div className="mt-8 p-6 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 text-center">
          <p className="text-3xl font-bold text-[var(--color-primary)]">
            {acertos}/{questoes.length}
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-2">
            {acertos === questoes.length
              ? "Perfeito! Você acertou tudo!"
              : acertos >= questoes.length / 2
                ? "Bom trabalho! Revise os erros para fixar."
                : "Continue estudando e tente novamente!"}
          </p>
        </div>
      )}
    </div>
  );
}
