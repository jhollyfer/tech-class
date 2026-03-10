---
name: aula-html-interativa
description: Gera aulas interativas como páginas Next.js (App Router) com React 19, Tailwind v4 e TypeScript. Acione quando o usuário pedir "aula interativa", "página de aula", "nova aula", ou quiser transformar conteúdo didático em experiência de aprendizado visual com quizzes, simuladores e elementos interativos.
---

# Aula Interativa — Next.js

Gera páginas de aula interativas no projeto Tech Class usando o design system `.aula-theme`, componentes React reutilizáveis e dados estruturados em TypeScript.

---

## Stack

- **Next.js 16** (App Router, Server Components por padrão)
- **React 19** (`"use client"` apenas quando necessário)
- **Tailwind CSS v4** (inline `@theme` em `globals.css`)
- **TypeScript 5** (strict mode)
- **Lucide React** para ícones

---

## Workflow para nova aula

1. **Ler** o arquivo de transcrição em `aulas/*.md` (frontmatter `titulo`, `descricao`, `transcricao`)
2. **Extrair** conteúdo pedagógico: conceitos-chave, exemplos, exercícios
3. **Adicionar** dados estruturados em `frontend/lib/aulas-data.ts` (tipo `Aula`)
4. A página é gerada automaticamente via rota dinâmica `frontend/app/aulas/[slug]/page.tsx`

---

## Estrutura obrigatória de cada aula

1. **Header** — badge de módulo + título + subtítulo (`AulaHeader`)
2. **Barra de progresso** — scroll-based (`AulaProgressBar`)
3. **Seções numeradas** — `// 01`, `// 02`... com animação de entrada (`AulaSection`)
4. **Elemento interativo** — mínimo 1 (ver lista abaixo)
5. **Bloco de código** — quando aplicável (`AulaCodeBlock` com tokens tipados)
6. **Quiz** — mínimo 4 questões com feedback (`AulaQuiz`)
7. **Próximos passos** — cards de continuidade (`AulaNextSteps`)

---

## Design system — `.aula-theme`

Definido em `frontend/app/globals.css`:

```css
.aula-theme {
  --color-background: #0a0a0f;
  --color-surface: #111118;
  --color-border: #1e1e2e;
  --color-foreground: #e8e8f0;
  --color-muted: #6b6b8a;
  --color-primary: #6c63ff;
  --color-primary-foreground: #ffffff;
  --color-aula-success: #00ff9d;
  --color-aula-error: #ff4d6d;
  --color-aula-highlight: #ffb347;
}
```

**Cores semânticas:**
- Verde `--color-aula-success` → verdadeiro, correto
- Vermelho `--color-aula-error` → falso, erro
- Laranja `--color-aula-highlight` → números, atenção

**Tipografia:**
- Nunito (corpo) — carregada no root layout via `next/font/google`
- Space Mono (código, badges, quiz) — carregada no aulas layout, variável `--font-mono`

**Background grid** — via classe `.aula-grid-bg` aplicada no layout de aulas.

---

## Componentes disponíveis

Todos em `frontend/components/aula/`:

| Componente | Tipo | Import |
|-----------|------|--------|
| `AulaHeader` | Server | `aula-header.tsx` |
| `AulaSection` | Client | `aula-section.tsx` |
| `AulaCodeBlock` | Server | `aula-code-block.tsx` |
| `AulaCallout` | Server | `aula-callout.tsx` |
| `AulaTruthTable` | Server | `aula-truth-table.tsx` |
| `AulaNextSteps` | Server | `aula-next-steps.tsx` |
| `AulaProgressBar` | Client | `aula-progress-bar.tsx` |
| `AulaQuiz` | Client | `aula-quiz.tsx` |
| `AulaFlipBits` | Client | `aula-flip-bits.tsx` |
| `AulaSimulator` | Client | `aula-simulator.tsx` |
| `AulaExpandableCard` | Client | `aula-expandable-card.tsx` |
| `AulaCodeToggle` | Client | `aula-code-toggle.tsx` |

---

## Tipos principais (em `frontend/lib/aulas-data.ts`)

```typescript
interface Aula {
  slug: string;
  modulo: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  secoes: AulaSection[];
  quiz: QuizQuestion[];
  proximosPassos: ProximoPasso[];
  interativos: string[];
}

interface AulaSection {
  titulo: string;
  conteudo: string[];
  callout?: { texto: string; tipo: "info" | "sucesso" | "alerta" };
  codeBlock?: { tokens: CodeToken[]; language?: string };
  truthTable?: TruthTableData;
}

interface QuizQuestion {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
  explicacaoErrada: string;
}
```

---

## Interativos disponíveis

| Elemento | Quando usar |
|----------|-------------|
| `flip-bits` | Lógica binária, booleana, estados |
| `simulator` | Cálculo, verificação, comparação prática |
| `truth-table` | Tabelas verdade interativas (dados via `AulaTruthTable`) |
| `expandable-card` | Conceitos com exemplos ou detalhes extras |
| `code-toggle` | Alternar entre código errado e correto |

Adicionar interativos customizados no componente `AulaInterativos` dentro de `frontend/app/aulas/[slug]/page.tsx`.

---

## Quiz — regras

- Mínimo 4, ideal 5 questões
- Tipos: múltipla escolha (2–4 opções), verdadeiro/falso
- Geradas a partir do conteúdo REAL da aula
- Cada questão: `pergunta`, `opcoes`, `correta` (índice), `explicacao`, `explicacaoErrada`
- Quiz usa `useReducer` internamente

---

## Padrões de código

- **Nomes:** kebab-case para arquivos, PascalCase para componentes
- **Props:** interface no mesmo arquivo, não exportar separadamente
- **`"use client"`:** apenas em componentes que usam hooks, eventos ou estado
- **CSS:** usar `var(--color-*)` do tema, não valores hardcoded
- **Acessibilidade:** `aria-label` em interativos, respeitar `prefers-reduced-motion`

---

## Checklist antes de entregar

- [ ] Dados adicionados em `frontend/lib/aulas-data.ts`
- [ ] Slug adicionado no array `aulas`
- [ ] Mínimo 3 seções de conteúdo
- [ ] Pelo menos 1 elemento interativo
- [ ] Quiz com mínimo 4 questões baseadas no conteúdo
- [ ] Próximos passos preenchidos
- [ ] `npm run build` compila sem erros
- [ ] Página acessível em `/aulas/[slug]`
- [ ] Responsivo (mobile 600px)
- [ ] Navegação anterior/próxima funcional
