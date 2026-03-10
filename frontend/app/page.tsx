import { aulas } from "@/lib/aulas-data";
import Link from "next/link";

const cursos = [
  {
    id: "lpii",
    titulo: "Lógica de Programação",
    descricao:
      "Lógica proposicional, tabelas verdade, algoritmos e introdução à programação em blocos.",
    totalAulas: aulas.length,
    status: "disponivel" as const,
    href: "/lessons",
  },
  {
    id: "bd",
    titulo: "Banco de Dados",
    descricao:
      "Modelagem relacional, SQL, normalização e administração de bancos de dados.",
    totalAulas: 0,
    status: "em-breve" as const,
    href: "#",
  },
  {
    id: "engsoft",
    titulo: "Engenharia de Software",
    descricao:
      "Ciclo de vida, metodologias ágeis, requisitos, testes e qualidade de software.",
    totalAulas: 0,
    status: "em-breve" as const,
    href: "#",
  },
  {
    id: "web",
    titulo: "Desenvolvimento Web",
    descricao:
      "HTML, CSS, JavaScript, frameworks modernos e deploy de aplicações.",
    totalAulas: 0,
    status: "em-breve" as const,
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="grid-bg relative z-10">
      <main className="min-h-screen" id="inicio">
        {/* Hero */}
        <header className="pt-20 pb-16 px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            Plataforma educacional
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Tech
            <span className="text-[var(--color-primary)]"> Class</span>
          </h1>
          <p className="text-[var(--color-muted)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Aulas interativas de tecnologia com quizzes, simuladores e
            exercícios práticos. Aprenda no seu ritmo.
          </p>
        </header>

        {/* Stats */}
        <div className="max-w-4xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                {aulas.length}
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Aulas disponíveis
              </p>
            </div>
            <div className="text-center border-x border-[var(--color-border)]">
              <p className="text-2xl sm:text-3xl font-bold text-[var(--color-success)]">
                4
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Cursos planejados
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[var(--color-warning)]">
                ∞
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Prática interativa
              </p>
            </div>
          </div>
        </div>

        {/* Cursos */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-sm font-mono text-[var(--color-muted)] uppercase tracking-widest mb-6">
            // Cursos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {cursos.map((curso) => {
              const disponivel = curso.status === "disponivel";
              const cardClass = `group block p-6 rounded-xl border transition-all ${
                disponivel
                  ? "border-l-4 border-l-[var(--color-primary)] border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/5 cursor-pointer"
                  : "border-[var(--color-border)]/50 bg-[var(--color-surface)]/50 opacity-50"
              }`;
              const content = (
                <>
                  <div className="flex items-start justify-between mb-3">
                    {disponivel ? (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                        {curso.totalAulas} aulas
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-muted)]/10 text-[var(--color-muted)]">
                        Em breve
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-bold text-lg mb-2 ${disponivel ? "group-hover:text-[var(--color-primary)] transition-colors" : ""}`}
                  >
                    {curso.titulo}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {curso.descricao}
                  </p>
                  {disponivel && (
                    <p className="text-xs font-mono text-[var(--color-primary)] mt-4 group-hover:translate-x-1 transition-transform">
                      Acessar →
                    </p>
                  )}
                </>
              );
              return disponivel ? (
                <Link key={curso.id} href={curso.href} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <div key={curso.id} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--color-border)] py-8 text-center text-xs text-[var(--color-muted)]">
          <p>Tech Class — Material baseado nas aulas do CETAM</p>
        </footer>
      </main>
    </div>
  );
}
