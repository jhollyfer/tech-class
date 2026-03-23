import { notFound } from "next/navigation";
import { getAllLessonsByDir } from "@/lib/lessons";
import { getCourseConfig, getAllCourseKeys } from "@/lib/courses";
import type { Metadata } from "next";
import { QuizGeralApp } from "@/components/quiz-geral/quiz-geral-app";

export interface QuizGeralQuestion {
  lessonTitulo: string;
  lessonDescricao: string;
  lessonModulo: string;
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
  explicacaoErrada: string;
}

interface PageProps {
  params: Promise<{ course: string }>;
}

export function generateStaticParams() {
  return getAllCourseKeys().map((course) => ({ course }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { course } = await params;
  const config = getCourseConfig(course);
  if (!config) return { title: "Curso não encontrado" };
  return {
    title: `Quiz Geral — ${config.label} com ${config.language}`,
    description: `Quiz geral de ${config.label} com ${config.language} — todas as perguntas do curso.`,
  };
}

export default async function QuizGeralPage({ params }: PageProps) {
  const { course } = await params;
  const config = getCourseConfig(course);
  if (!config) notFound();

  const lessons = getAllLessonsByDir(config.dir);

  const questions: QuizGeralQuestion[] = lessons.flatMap((lesson) =>
    lesson.quiz.map((q) => ({
      lessonTitulo: lesson.titulo,
      lessonDescricao: lesson.descricao,
      lessonModulo: lesson.modulo,
      pergunta: q.pergunta,
      opcoes: q.opcoes,
      correta: q.correta,
      explicacao: q.explicacao,
      explicacaoErrada: q.explicacaoErrada,
    })),
  );

  return (
    <QuizGeralApp
      questions={questions}
      courseSlug={course}
      courseLabel={config.label}
      courseLanguage={config.language}
    />
  );
}
