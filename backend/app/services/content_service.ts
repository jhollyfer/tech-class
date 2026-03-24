import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import app from '@adonisjs/core/services/app'
import type { ICourseConfig, ILesson, IQuizDataQuestion } from '#core/entity.core'

const COURSES: Record<string, ICourseConfig> = {
  'logica-programacao-typescript': {
    slug: 'logica-programacao-typescript',
    dir: 'logica-proramaca-typescript',
    label: 'Lógica de Programação',
    language: 'TypeScript',
  },
  'logica-programacao-python': {
    slug: 'logica-programacao-python',
    dir: 'logica-programacao-python',
    label: 'Lógica de Programação',
    language: 'Python',
  },
  'informatica-avancada-word': {
    slug: 'informatica-avancada-word',
    dir: 'informatica-avancada-word',
    label: 'Informática Avançada',
    language: 'Word',
  },
}

const PRACTICE_MODULES: Record<string, string[]> = {
  'logica-programacao-typescript': ['Módulo 5 — Prática'],
  'logica-programacao-python': ['Módulo 6 — Projetos Práticos'],
}

export default class ContentService {
  private cache: Map<string, ILesson[]> = new Map()

  constructor() {
    this.loadAll()
  }

  private loadAll() {
    for (const [slug, config] of Object.entries(COURSES)) {
      const dir = path.join(app.appRoot.pathname, 'content', config.dir)
      if (!fs.existsSync(dir)) continue

      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
      const lessons: ILesson[] = files.map((filename) => {
        const filePath = path.join(dir, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug: data.slug as string,
          modulo: data.modulo as string,
          titulo: data.titulo as string,
          subtitulo: (data.subtitulo ?? '') as string,
          descricao: (data.descricao ?? '') as string,
          ordem: data.ordem as number,
          content,
          quiz: (data.quiz ?? []) as ILesson['quiz'],
          proximosPassos: (data.proximosPassos ?? []) as ILesson['proximosPassos'],
        }
      })

      lessons.sort((a, b) => a.ordem - b.ordem)
      this.cache.set(slug, lessons)
    }
  }

  getCourses() {
    return Object.entries(COURSES).map(([slug, config]) => {
      const lessons = this.cache.get(slug) ?? []
      const modules = new Set(lessons.map((l) => l.modulo))
      return {
        slug,
        label: config.label,
        language: config.language,
        lessonCount: lessons.length,
        moduleCount: modules.size,
      }
    })
  }

  getLessons(courseSlug: string): ILesson[] | null {
    if (!COURSES[courseSlug]) return null
    return this.cache.get(courseSlug) ?? []
  }

  getLesson(courseSlug: string, lessonSlug: string): ILesson | null {
    const lessons = this.getLessons(courseSlug)
    if (!lessons) return null
    return lessons.find((l) => l.slug === lessonSlug) ?? null
  }

  getQuizQuestions(courseSlug: string, excludePractice: boolean): IQuizDataQuestion[] | null {
    const lessons = this.getLessons(courseSlug)
    if (!lessons) return null

    const practiceModules = excludePractice ? (PRACTICE_MODULES[courseSlug] ?? []) : []

    const questions: IQuizDataQuestion[] = []
    for (const lesson of lessons) {
      if (practiceModules.some((pm) => lesson.modulo.includes(pm))) continue

      for (const q of lesson.quiz) {
        questions.push({
          lessonTitulo: lesson.titulo,
          lessonDescricao: lesson.descricao,
          lessonModulo: lesson.modulo,
          pergunta: q.pergunta,
          opcoes: q.opcoes,
          correta: q.correta,
          explicacao: q.explicacao,
          explicacaoErrada: q.explicacaoErrada,
        })
      }
    }

    return questions
  }
}
