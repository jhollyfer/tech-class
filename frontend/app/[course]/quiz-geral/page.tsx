import { notFound } from "next/navigation";
import { getAllLessonsByDir } from "@/lib/lessons";
import { getCourseConfig, getAllCourseKeys } from "@/lib/courses";
import type { Metadata } from "next";
import { QuizGeralApp } from "@/components/quiz-geral/quiz-geral-app";

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
    description: `Quiz geral de ${config.label} com ${config.language} — tempo real com WebSocket.`,
  };
}

export default async function QuizGeralPage({ params }: PageProps) {
  const { course } = await params;
  const config = getCourseConfig(course);
  if (!config) notFound();

  const lessons = getAllLessonsByDir(config.dir);
  const questionCount = lessons.reduce((sum, l) => sum + l.quiz.length, 0);

  return (
    <QuizGeralApp
      courseSlug={course}
      courseLabel={config.label}
      courseLanguage={config.language}
      questionCount={questionCount}
    />
  );
}
