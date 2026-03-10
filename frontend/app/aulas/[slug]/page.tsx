import { notFound } from "next/navigation";
import { getAulaBySlug, getAllAulaSlugs, aulas } from "@/lib/aulas-data";
import { AulaHeader } from "@/components/aula/aula-header";
import { AulaSection } from "@/components/aula/aula-section";
import { AulaCodeBlock } from "@/components/aula/aula-code-block";
import { AulaCallout } from "@/components/aula/aula-callout";
import { AulaTruthTable } from "@/components/aula/aula-truth-table";
import { AulaNextSteps } from "@/components/aula/aula-next-steps";
import { AulaProgressBar } from "@/components/aula/aula-progress-bar";
import { AulaQuiz } from "@/components/aula/aula-quiz";
import { AulaInterativos } from "@/components/aula/aula-interativos";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAulaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const aula = getAulaBySlug(slug);
  if (!aula) return { title: "Aula não encontrada" };
  return {
    title: `${aula.titulo} — Tech Class`,
    description: aula.descricao,
  };
}

export default async function AulaPage({ params }: PageProps) {
  const { slug } = await params;
  const aula = getAulaBySlug(slug);

  if (!aula) notFound();

  const currentIndex = aulas.findIndex((a) => a.slug === slug);
  const prevAula = currentIndex > 0 ? aulas[currentIndex - 1] : null;
  const nextAula = currentIndex < aulas.length - 1 ? aulas[currentIndex + 1] : null;

  return (
    <main className="min-h-screen pb-16">
      <AulaProgressBar />

      <nav className="sticky top-0 z-40 bg-[var(--color-background)]/80 backdrop-blur-sm border-b border-[var(--color-border)] px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/aulas"
            className="text-sm font-mono text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            ← Todas as aulas
          </Link>
          <span className="text-xs font-mono text-[var(--color-muted)]">
            {String(currentIndex + 1).padStart(2, "0")}/{String(aulas.length).padStart(2, "0")}
          </span>
        </div>
      </nav>

      <AulaHeader
        modulo={aula.modulo}
        titulo={aula.titulo}
        subtitulo={aula.subtitulo}
      />

      {aula.secoes.map((secao, i) => (
        <AulaSection key={i} index={i + 1} titulo={secao.titulo}>
          {secao.conteudo.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {secao.callout && (
            <AulaCallout tipo={secao.callout.tipo}>{secao.callout.texto}</AulaCallout>
          )}
          {secao.truthTable && (
            <AulaTruthTable headers={secao.truthTable.headers} rows={secao.truthTable.rows} />
          )}
          {secao.codeBlock && (
            <AulaCodeBlock tokens={secao.codeBlock.tokens} language={secao.codeBlock.language} />
          )}
        </AulaSection>
      ))}

      <AulaInterativos interativos={aula.interativos} slug={aula.slug} />

      <AulaQuiz questoes={aula.quiz} />

      <AulaNextSteps passos={aula.proximosPassos} />

      {/* Navigation */}
      <div className="max-w-3xl mx-auto px-6 pt-8 border-t border-[var(--color-border)]">
        <div className="flex justify-between gap-4">
          {prevAula ? (
            <Link
              href={`/aulas/${prevAula.slug}`}
              className="flex-1 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors text-left"
            >
              <span className="text-xs font-mono text-[var(--color-muted)]">← Anterior</span>
              <p className="text-sm font-semibold mt-1">{prevAula.titulo}</p>
            </Link>
          ) : <div className="flex-1" />}
          {nextAula ? (
            <Link
              href={`/aulas/${nextAula.slug}`}
              className="flex-1 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors text-right"
            >
              <span className="text-xs font-mono text-[var(--color-muted)]">Próxima →</span>
              <p className="text-sm font-semibold mt-1">{nextAula.titulo}</p>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </main>
  );
}
