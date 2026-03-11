import { notFound } from "next/navigation";
import { getLessonBySlug, getAllLessons } from "@/lib/lessons";
import { highlightCodeBlocks } from "@/lib/highlight";
import { AulaHeader } from "@/components/aula/aula-header";
import { AulaNextSteps } from "@/components/aula/aula-next-steps";
import { AulaProgressBar } from "@/components/aula/aula-progress-bar";
import { AulaQuiz } from "@/components/aula/aula-quiz";
import { AulaSidebar } from "@/components/aula/aula-sidebar";
import { BackToTop } from "@/components/aula/back-to-top";
import { MarkdownContent } from "@/components/aula/markdown-content";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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

  const readingTime = Math.max(5, Math.ceil(lesson.content.split(/\s+/).length / 200));
  const highlightedCode = await highlightCodeBlocks(lesson.content);

  return (
    <>
      <AulaProgressBar />

      <div className="max-w-[1440px] mx-auto flex min-h-screen relative">
        {/* Sidebar TOC */}
        <AulaSidebar
          modulo={lesson.modulo}
          titulo={lesson.titulo}
          contentHtml={lesson.content}
          currentIndex={currentIndex + 1}
          totalAulas={lessons.length}
        />

        {/* Main content */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 lg:px-12 py-12 pb-32">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/lessons"
              className="text-sm font-mono text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              Todas as aulas
            </Link>
            <span className="text-xs font-mono text-[var(--color-muted)]">
              {String(currentIndex + 1).padStart(2, "0")}/{String(lessons.length).padStart(2, "0")}
            </span>
          </div>

          <AulaHeader
            modulo={lesson.modulo}
            titulo={lesson.titulo}
            subtitulo={lesson.subtitulo}
            ordem={lesson.ordem}
            totalAulas={lessons.length}
            readingTime={readingTime}
          />

          <div className="prose-aula">
            <MarkdownContent content={lesson.content} highlightedCode={highlightedCode} />
          </div>

          <AulaQuiz questoes={lesson.quiz} />

          <AulaNextSteps passos={lesson.proximosPassos} />

          {/* Prev/Next Navigation */}
          <nav className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevLesson ? (
              <Link
                href={`/lessons/${prevLesson.slug}`}
                className="group p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all"
              >
                <span className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2 block">
                  Aula anterior
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors shrink-0">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-base leading-tight">
                    {String(currentIndex).padStart(2, "0")}. {prevLesson.titulo}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextLesson ? (
              <Link
                href={`/lessons/${nextLesson.slug}`}
                className="group p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all text-right"
              >
                <span className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2 block">
                  Próxima aula
                </span>
                <div className="flex items-center justify-end gap-4">
                  <p className="font-bold text-base leading-tight">
                    {String(currentIndex + 2).padStart(2, "0")}. {nextLesson.titulo}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors shrink-0">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* CTA Footer */}
          {nextLesson && (
            <footer className="mt-24 pt-12 border-t border-[var(--color-border)] text-center">
              <h4 className="text-2xl font-black mb-4">Pronto para avançar?</h4>
              <p className="text-[var(--color-muted)] mb-8">
                Siga para a próxima aula e continue sua jornada de aprendizado.
              </p>
              <Link
                href={`/lessons/${nextLesson.slug}`}
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Concluir e ir para próxima aula
                <ArrowRight className="w-5 h-5" />
              </Link>
            </footer>
          )}
        </main>
      </div>

      <BackToTop />
    </>
  );
}
