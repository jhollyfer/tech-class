import fs from "fs";
import matter from "gray-matter";
import path from "path";

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

export function getAllLessonsByDir(dir: string): Lesson[] {
  const directory = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(directory)) return [];
  const files = fs.readdirSync(directory).filter((f) => f.endsWith(".md"));
  const lessons = files.map((filename) => {
    const filePath = path.join(directory, filename);
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

export function getLessonByDirAndSlug(
  dir: string,
  slug: string,
): Lesson | undefined {
  return getAllLessonsByDir(dir).find((l) => l.slug === slug);
}

export function getAllSlugsByDir(dir: string): string[] {
  return getAllLessonsByDir(dir).map((l) => l.slug);
}
