---
slug: "layout-colunas-cabecalho"
modulo: "Módulo 3 — Documentos Profissionais"
titulo: "Layout, Colunas, Cabeçalho & Rodapé"
subtitulo: "Monte a estrutura completa de uma página profissional"
descricao: "Configure margens, colunas, quebras de seção e cabeçalho/rodapé para documentos de múltiplas páginas."
ordem: 5
proximosPassos:
  - titulo: "Referências, Sumário & ABNT"
    descricao: "Gere sumário automático, citações e bibliografia ABNT"
  - titulo: "Avaliação AV2"
    descricao: "Prepare-se para a avaliação final do módulo Word"
quiz:
  - pergunta: "Qual atalho insere uma quebra de página?"
    opcoes: ["Ctrl + Enter", "Ctrl + Shift + Enter", "Alt + Enter", "Shift + Enter"]
    correta: 0
    explicacao: "Ctrl + Enter move tudo após o cursor para a próxima página."
    explicacaoErrada: "O atalho é Ctrl + Enter."
  - pergunta: "O que permite a Quebra de Seção em um documento?"
    opcoes: ["Apenas mudar a fonte", "Ter margens, orientação e cabeçalhos diferentes no mesmo documento", "Adicionar imagens", "Mudar o idioma"]
    correta: 1
    explicacao: "Quebras de Seção criam seções independentes com configurações próprias de layout."
    explicacaoErrada: "Quebra de Seção permite configurações diferentes por seção: margens, orientação, colunas e cabeçalhos."
  - pergunta: "Como fazer a capa ficar sem cabeçalho?"
    opcoes: ["Deletar o cabeçalho manualmente", "Marcar 'Primeira Página Diferente' na guia Design", "Usar quebra de página", "Não é possível"]
    correta: 1
    explicacao: "Abra o cabeçalho e marque 'Primeira Página Diferente' na guia Design."
    explicacaoErrada: "Marque 'Primeira Página Diferente' na guia Design do cabeçalho."
---

## Configurações da Página

**Layout → Margens → Margens Personalizadas**

### Margens ABNT

| Margem   | Valor |
|----------|-------|
| Superior | 3 cm  |
| Inferior | 2 cm  |
| Esquerda | 3 cm  |
| Direita  | 2 cm  |

### Orientação e Tamanho

| Opção      | Descrição                              |
|------------|----------------------------------------|
| Retrato    | Vertical — padrão para a maioria       |
| Paisagem   | Horizontal — para tabelas muito largas |
| Tamanho A4 | 21 x 29,7 cm — padrão no Brasil       |

> [!info] Não sabe o tamanho do papel? Meça com uma régua e digite em **Layout → Tamanho → Mais Tamanhos de Papel**.

### Margens para encadernação

Se o documento vai ser encadernado, a margem interna precisa ser maior.

- **Margem espelhada:** **Layout → Margens → Espelhada** — ideal para frente e verso
- A margem interna (lado da encadernação) fica maior automaticamente

---

## Texto em Colunas

**Layout → Colunas → escolha ou Mais Colunas...**

| Opção            | Resultado                                    |
|------------------|----------------------------------------------|
| 2 colunas iguais | Divide a largura em dois                     |
| 3 colunas iguais | Divide a largura em três                     |
| Esquerda         | Coluna estreita à esquerda + larga à direita |
| Direita          | Coluna larga à esquerda + estreita à direita |
| Mais Colunas...  | Largura e espaçamento exatos                 |

> [!info] Para colunas em apenas um trecho: selecione o trecho antes de aplicar.

Linha divisória entre colunas: **Mais Colunas... → marcar "Linha entre colunas"**

---

## Quebras de Página e de Seção

**Layout → Quebras**

| Tipo                   | Função                              | Atalho         |
|------------------------|-------------------------------------|----------------|
| Quebra de Página       | Força texto para a próxima página   | `Ctrl + Enter` |
| Quebra de Coluna       | Força texto para a próxima coluna   | —              |
| Seção — Próxima Página | Nova seção na próxima página        | —              |
| Seção — Contínua       | Nova seção na mesma página          | —              |
| Seção — Par/Ímpar      | Próxima seção em página par ou ímpar| —              |

> [!sucesso] A Quebra de Seção permite margens, orientação, colunas e cabeçalhos diferentes no mesmo documento.

### Paisagem em páginas específicas

1. Cursor antes da página → **Layout → Quebras → Seção — Próxima Página**
2. Na nova seção: **Layout → Orientação → Paisagem**
3. Outra Quebra de Seção e volte para Retrato

---

## Cabeçalho e Rodapé

Zonas que se repetem em todas as páginas, fora da área de texto.

### Como entrar e sair

- **Entrar:** duplo clique na parte de cima/baixo da página — ou **Inserir → Cabeçalho/Rodapé**
- **Sair:** clique em **Fechar Cabeçalho e Rodapé** — ou duplo clique no texto

> [!info] Duplo clique é a forma mais rápida. Cima = cabeçalho. Baixo = rodapé. Texto = sair.

### O que colocar

| Elemento            | Posição sugerida           |
|---------------------|----------------------------|
| Nome da instituição | Cabeçalho — esquerda       |
| Título do documento | Cabeçalho — centro         |
| Logo                | Cabeçalho — direita        |
| Número de página    | Rodapé — direita ou centro |
| Nome do aluno       | Rodapé — esquerda          |

### Número de página

**Inserir → Número de Página → escolha posição e formato**

Em **Formatar Números de Página** você define:

- Romanos (i, ii, iii) → páginas preliminares
- Arábicos (1, 2, 3) → texto principal
- **Iniciar em:** define o número inicial

> [!info] Quer capa sem número mas contando? Use "Primeira Página Diferente" e configure o início da numeração.

### Removendo uma quebra

Ative os caracteres ocultos (`Ctrl + *`), clique após a marca da quebra e pressione `Backspace`.

### Capa sem cabeçalho

Cabeçalho aberto → **Design → marcar "Primeira Página Diferente"**

### Cabeçalhos diferentes por seção

Cabeçalho da nova seção aberto → desmarcar **"Vincular ao Anterior"** → edite à vontade

---

## Checklist da Aula

- [ ] Configurei margens ABNT (3/2/3/2)
- [ ] Criei texto em 2 colunas
- [ ] Inseri quebra de página com `Ctrl + Enter`
- [ ] Usei Quebra de Seção para mudar orientação de uma página
- [ ] Criei cabeçalho com nome da escola
- [ ] Adicionei número de página no rodapé
- [ ] Ativei "Primeira Página Diferente" para a capa

---

## Referências

- [Configurações na Página (~10min)](https://www.youtube.com/watch?v=2aFDaHEjWbM)
- [Texto em Colunas (~11min)](https://www.youtube.com/watch?v=w3G2pnx5vJY)
- [Quebras de Texto (~13min)](https://www.youtube.com/watch?v=OLxPKMf7HJI)
- [Cabeçalho e Rodapé (~10min)](https://www.youtube.com/watch?v=ck-Bx_KAmPg)
