const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const courses = {
  "logica-programacao-typescript": {
    dir: "logica-proramaca-typescript",
  },
  "logica-programacao-python": {
    dir: "logica-programacao-python",
  },
  "informatica-avancada-word": {
    dir: "informatica-avancada-word",
  },
};

const result = {};

for (const [slug, config] of Object.entries(courses)) {
  const contentDir = path.join(__dirname, "..", "content", config.dir);
  if (!fs.existsSync(contentDir)) {
    result[slug] = [];
    continue;
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const lessons = files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(contentDir, filename), "utf8");
      const { data } = matter(raw);
      return {
        titulo: data.titulo || "",
        descricao: data.descricao || "",
        modulo: data.modulo || "",
        ordem: data.ordem || 0,
        quiz: data.quiz || [],
      };
    })
    .sort((a, b) => a.ordem - b.ordem);

  const questions = [];
  for (const lesson of lessons) {
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
      });
    }
  }
  result[slug] = questions;
}

const outPath = path.join(__dirname, "..", "quiz-data.json");
fs.writeFileSync(outPath, JSON.stringify(result));
console.log(
  `quiz-data.json generated: ${Object.entries(result).map(([k, v]) => `${k}=${v.length}q`).join(", ")}`,
);
