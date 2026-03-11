import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface QuizQuestion {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
  explicacaoErrada: string;
}

export interface ProximoPasso {
  titulo: string;
  descricao: string;
}

export interface Lesson {
  slug: string;
  modulo: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  ordem: number;
  content: string;
  quiz: QuizQuestion[];
  proximosPassos: ProximoPasso[];
}

const lessonsDirectory = path.join(process.cwd(), "content/lessons");

export function getAllLessons(): Lesson[] {
  const files = fs.readdirSync(lessonsDirectory).filter((f) => f.endsWith(".md"));
  const lessons = files.map((filename) => {
    const filePath = path.join(lessonsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: data.slug as string,
      modulo: data.modulo as string,
      titulo: data.titulo as string,
      subtitulo: data.subtitulo as string,
      descricao: data.descricao as string,
      ordem: data.ordem as number,
      content,
      quiz: (data.quiz ?? []) as QuizQuestion[],
      proximosPassos: (data.proximosPassos ?? []) as ProximoPasso[],
    };
  });
  return lessons.sort((a, b) => a.ordem - b.ordem);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return getAllLessons().find((l) => l.slug === slug);
}

export function getAllLessonSlugs(): string[] {
  return getAllLessons().map((l) => l.slug);
}
