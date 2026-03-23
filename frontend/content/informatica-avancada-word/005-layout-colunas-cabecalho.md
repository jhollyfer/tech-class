---
slug: "layout-colunas-cabecalho"
modulo: "Módulo 3 — Documentos Profissionais"
titulo: "Layout, Colunas, Cabeçalho & Rodapé"
subtitulo: "Configurando a estrutura completa de uma página profissional"
descricao: "Configure margens, colunas, quebras de seção e cabeçalho/rodapé automático para criar documentos profissionais de múltiplas páginas."
ordem: 5
proximosPassos:
  - titulo: "Referências, Sumário & ABNT"
    descricao: "Gere sumário automático, citações e bibliografia no formato ABNT"
  - titulo: "Avaliação AV2"
    descricao: "Prepare-se para a avaliação final do módulo Word"
quiz:
  - pergunta: "Qual atalho insere uma quebra de página?"
    opcoes: ["Ctrl + Enter", "Ctrl + Shift + Enter", "Alt + Enter", "Shift + Enter"]
    correta: 0
    explicacao: "Ctrl + Enter força o texto para a próxima página, criando uma quebra de página limpa."
    explicacaoErrada: "O atalho para quebra de página é Ctrl + Enter. Ele move todo o conteúdo após o cursor para a próxima página."
  - pergunta: "O que permite a Quebra de Seção em um documento?"
    opcoes: ["Apenas mudar a fonte", "Ter margens, orientação e cabeçalhos diferentes no mesmo documento", "Adicionar imagens", "Mudar o idioma"]
    correta: 1
    explicacao: "Quebras de Seção dividem o documento em seções independentes, cada uma com suas próprias configurações de layout."
    explicacaoErrada: "A Quebra de Seção permite configurações diferentes por seção: margens, orientação, colunas e cabeçalhos independentes."
  - pergunta: "Como fazer a capa ficar sem cabeçalho?"
    opcoes: ["Deletar o cabeçalho manualmente", "Marcar 'Primeira Página Diferente' na guia Design", "Usar quebra de página", "Não é possível"]
    correta: 1
    explicacao: "Com o cabeçalho aberto, marque 'Primeira Página Diferente' na guia Design para deixar a primeira página sem cabeçalho."
    explicacaoErrada: "Abra o cabeçalho e marque 'Primeira Página Diferente' na guia Design — assim a capa fica limpa."
---

## Configurações da Página

`Layout → Margens → Margens Personalizadas`

### Margens ABNT

| Margem   | Valor | Observação             |
| -------- | ----- | ---------------------- |
| Superior | 3 cm  | Onde fica o cabeçalho  |
| Inferior | 2 cm  | Onde fica o rodapé     |
| Esquerda | 3 cm  | Margem de encadernação |
| Direita  | 2 cm  | Margem menor           |

### Orientação e Tamanho

| Opção      | Descrição                                             |
| ---------- | ----------------------------------------------------- |
| Retrato    | Folha vertical — padrão para a maioria dos documentos |
| Paisagem   | Folha horizontal — para tabelas muito largas          |
| Tamanho A4 | 21 × 29,7 cm — padrão no Brasil                       |

> **Dica do professor:** Se você não sabe o tamanho do papel, pegue uma régua e meça a largura e a altura. Em `Layout → Tamanho → Mais Tamanhos de Papel`, você pode digitar as medidas exatas. Isso evita que a impressão corte o conteúdo.

### Margens para encadernação

Se o documento vai ser encadernado (espiral, grampo), a margem interna precisa ser maior para que o texto não fique escondido na encadernação.

- **Margem espelhada:** `Layout → Margens → Espelhada` — ideal para impressão frente e verso
- Com margem espelhada, a margem interna (lado da encadernação) fica maior automaticamente
- Em um livro aberto, a margem do centro é sempre maior que a margem externa

---

## Texto em Colunas

`Layout → Colunas → escolha ou Mais Colunas...`

### Opções disponíveis

| Opção            | Resultado                                    |
| ---------------- | -------------------------------------------- |
| 2 colunas iguais | Divide a largura em dois                     |
| 3 colunas iguais | Divide a largura em três                     |
| Esquerda         | Coluna estreita à esquerda + larga à direita |
| Direita          | Coluna larga à esquerda + estreita à direita |
| Mais Colunas...  | Define número, largura e espaçamento exatos  |

> **Para aplicar colunas em apenas um trecho:** selecione o trecho antes de aplicar. O Word insere quebras de seção automaticamente.

### Linha divisória entre colunas

`Colunas → Mais Colunas... → marcar "Linha entre colunas"`

---

## Quebras de Página e de Seção

`Layout → Quebras`

| Tipo                   | Função                               | Atalho         |
| ---------------------- | ------------------------------------ | -------------- |
| Quebra de Página       | Força o texto para a próxima página  | `Ctrl + Enter` |
| Quebra de Coluna       | Força o texto para a próxima coluna  | —              |
| Seção — Próxima Página | Nova seção na próxima página         | —              |
| Seção — Contínua       | Nova seção na mesma página           | —              |
| Seção — Par/Ímpar      | Próxima seção em página par ou ímpar | —              |

> **A Quebra de Seção permite:** margens diferentes, orientação diferente, número de colunas diferente e cabeçalhos/rodapés diferentes — tudo no mesmo documento.

### Como ter orientação paisagem em páginas específicas

1. Cursor antes da página que vai mudar → `Layout → Quebras → Seção — Próxima Página`
2. Na nova seção: `Layout → Orientação → Paisagem`
3. Inserir outra Quebra de Seção e voltar para Retrato

---

## Cabeçalho e Rodapé

Zonas especiais que se repetem automaticamente em todas as páginas — fora da área de texto principal.

### Como entrar e sair

- **Entrar:** duplo clique na área cinza acima/abaixo do texto — ou `Inserir → Cabeçalho/Rodapé`
- **Sair:** clique em **"Fechar Cabeçalho e Rodapé"** na Ribbon — ou duplo clique na área de texto

> **Dica do professor:** O duplo clique é a forma mais rápida. Clique duas vezes na parte de cima da página para editar o cabeçalho, duas vezes na parte de baixo para o rodapé. Dois cliques no texto para sair da edição.

### O que colocar

| Elemento            | Posição sugerida           |
| ------------------- | -------------------------- |
| Nome da instituição | Cabeçalho — esquerda       |
| Título do documento | Cabeçalho — centro         |
| Logo                | Cabeçalho — direita        |
| Número de página    | Rodapé — direita ou centro |
| Nome do aluno       | Rodapé — esquerda          |

### Número de página

`Inserir → Número de Página → escolha posição e formato`

Em **Formatar Números de Página** você define:

- Algarismos romanos (i, ii, iii) → páginas preliminares
- Algarismos arábicos (1, 2, 3) → texto principal
- **Iniciar em:** define o número inicial (ex: começar na página 3 se a capa e sumário não contam)

> **Dica do professor:** Se você quer que a capa seja a página 1 mas sem mostrar o número, use "Primeira Página Diferente" e configure o início da numeração. Assim a contagem continua correta, mas a capa fica limpa.

### Como remover cabeçalho/rodapé de uma quebra

Para exibir e apagar uma quebra de página ou seção: ative os caracteres ocultos (`Ctrl + *`), clique logo após a marca da quebra e pressione `Backspace`.

### Primeira página sem cabeçalho (capas)

Com o cabeçalho aberto → **Guia Design → marcar "Primeira Página Diferente"**

### Cabeçalhos diferentes por seção

Com o cabeçalho da nova seção aberto → desmarcar **"Vincular ao Anterior"** → edite à vontade

---

## Checklist da Aula

- [ ] Configurei as margens ABNT em um documento (3/2/3/2)
- [ ] Criei um texto em 2 colunas
- [ ] Inseri uma quebra de página com `Ctrl + Enter`
- [ ] Usei Quebra de Seção para mudar a orientação de uma página
- [ ] Criei cabeçalho com nome da escola
- [ ] Adicionei número de página no rodapé
- [ ] Ativei "Primeira Página Diferente" para a capa ficar sem cabeçalho
