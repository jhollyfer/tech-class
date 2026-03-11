import { notFound } from "next/navigation";
import { getLessonBySlug, getAllLessons } from "@/lib/lessons";
import { AulaHeader } from "@/components/aula/aula-header";
import { AulaNextSteps } from "@/components/aula/aula-next-steps";
import { AulaProgressBar } from "@/components/aula/aula-progress-bar";
import { AulaQuiz } from "@/components/aula/aula-quiz";
import { MarkdownContent } from "@/components/aula/markdown-content";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLessons().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return { title: "Aula não encontrada" };
  return {
    title: `${lesson.titulo} — Tech Class`,
    description: lesson.descricao,
  };
}

export default async function AulaPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) notFound();

  const lessons = getAllLessons();
  const currentIndex = lessons.findIndex((l) => l.slug === slug);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <main className="min-h-screen pb-16">
      <AulaProgressBar />

      <div className="border-b border-[var(--color-border)] px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/lessons"
            className="text-sm font-mono text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            ← Todas as aulas
          </Link>
          <span className="text-xs font-mono text-[var(--color-muted)]">
            {String(currentIndex + 1).padStart(2, "0")}/{String(lessons.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <AulaHeader
        modulo={lesson.modulo}
        titulo={lesson.titulo}
        subtitulo={lesson.subtitulo}
      />

      <div className="max-w-3xl mx-auto px-6">
        <MarkdownContent content={lesson.content} />
      </div>

      <AulaQuiz questoes={lesson.quiz} />

      <AulaNextSteps passos={lesson.proximosPassos} />

      <div className="max-w-3xl mx-auto px-6 pt-8 border-t border-[var(--color-border)]">
        <div className="flex justify-between gap-4">
          {prevLesson ? (
            <Link
              href={`/lessons/${prevLesson.slug}`}
              className="flex-1 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors text-left"
            >
              <span className="text-xs font-mono text-[var(--color-muted)]">← Anterior</span>
              <p className="text-sm font-semibold mt-1">{prevLesson.titulo}</p>
            </Link>
          ) : <div className="flex-1" />}
          {nextLesson ? (
            <Link
              href={`/lessons/${nextLesson.slug}`}
              className="flex-1 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors text-right"
            >
              <span className="text-xs font-mono text-[var(--color-muted)]">Próxima →</span>
              <p className="text-sm font-semibold mt-1">{nextLesson.titulo}</p>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </main>
  );
}
