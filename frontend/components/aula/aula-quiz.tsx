"use client";

import { useReducer } from "react";
import { Check, X } from "lucide-react";

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
    <section
      id="quiz"
      className="mt-20 p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl"
    >
      {/* Header with progress dots */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-black flex items-center gap-3">
          <span className="p-2 bg-[var(--color-primary)]/10 rounded-lg text-lg">
            ?
          </span>
          Quiz de fixa&ccedil;&atilde;o
        </h3>
        <div className="flex gap-1.5">
          {questoes.map((_, i) => {
            const respondida = state.respostas[i] !== undefined;
            const acertou = state.respostas[i] === questoes[i].correta;
            return (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  respondida
                    ? acertou
                      ? "bg-[var(--color-success)]"
                      : "bg-[var(--color-error)]"
                    : "bg-[var(--color-border)]"
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        {questoes.map((q, qi) => {
          const respondida = state.respostas[qi] !== undefined;
          const acertou = state.respostas[qi] === q.correta;

          return (
            <div key={qi} className="space-y-3">
              <p className="font-semibold text-base mb-4">
                <span className="font-mono text-[var(--color-muted)] mr-2">
                  {String(qi + 1).padStart(2, "0")}.
                </span>
                {q.pergunta}
              </p>

              <div className="grid gap-3">
                {q.opcoes.map((opcao, oi) => {
                  const isCorrect = oi === q.correta;
                  const isSelected = oi === state.respostas[qi];

                  return (
                    <button
                      key={oi}
                      onClick={() =>
                        dispatch({ type: "RESPONDER", questao: qi, opcao: oi })
                      }
                      disabled={respondida}
                      className={`quiz-card w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between group cursor-pointer ${
                        respondida
                          ? isCorrect
                            ? "border-[var(--color-success)] bg-[var(--color-success)]/5"
                            : isSelected
                              ? "border-[var(--color-error)] bg-[var(--color-error)]/5"
                              : "border-[var(--color-border)] opacity-50"
                          : "border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                      } disabled:cursor-default`}
                      aria-label={`Opção ${oi + 1}: ${opcao}`}
                    >
                      <span
                        className={`text-sm ${
                          respondida && isCorrect
                            ? "font-bold text-[var(--color-success)]"
                            : respondida && isSelected
                              ? "text-[var(--color-error)]"
                              : ""
                        }`}
                      >
                        {opcao}
                      </span>

                      {respondida && isCorrect && (
                        <div className="w-6 h-6 rounded-full bg-[var(--color-success)] flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      )}
                      {respondida && isSelected && !isCorrect && (
                        <div className="w-6 h-6 rounded-full bg-[var(--color-error)] flex items-center justify-center shrink-0">
                          <X className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      )}
                      {!respondida && (
                        <div className="w-6 h-6 rounded-full border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {respondida && (
                <p className="mt-2 text-sm leading-relaxed pl-2 border-l-2 border-[var(--color-border)]">
                  {acertou ? (
                    <span className="text-[var(--color-success)]">{q.explicacao}</span>
                  ) : (
                    <span className="text-[var(--color-error)]">{q.explicacaoErrada}</span>
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {todasRespondidas && !state.finalizado && (
        <div className="mt-8 text-center">
          <button
            onClick={() => dispatch({ type: "FINALIZAR" })}
            className="px-8 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-bold text-sm hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-lg"
          >
            Ver resultado
          </button>
        </div>
      )}

      {state.finalizado && (
        <div className="mt-8 p-8 rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 text-center">
          <p className="text-5xl font-black text-[var(--color-primary)]">
            {acertos}/{questoes.length}
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-3">
            {acertos === questoes.length
              ? "Perfeito! Você acertou tudo!"
              : acertos >= questoes.length / 2
                ? "Bom trabalho! Revise os erros para fixar."
                : "Continue estudando e tente novamente!"}
          </p>
        </div>
      )}
    </section>
  );
}
