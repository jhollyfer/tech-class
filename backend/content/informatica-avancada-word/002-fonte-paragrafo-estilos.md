---
slug: "fonte-paragrafo-estilos"
modulo: "Módulo 1 — Primeiros Passos no Word"
titulo: "Fonte, Parágrafo & Estilos"
subtitulo: "Formate textos e padronize documentos com estilos"
descricao: "Aprenda a formatar fonte e parágrafo com precisão e a padronizar documentos inteiros usando estilos."
ordem: 2
proximosPassos:
  - titulo: "Tabulações, Listas & Tabelas"
    descricao: "Organize informações com tabulações, listas e tabelas"
  - titulo: "Avaliação AV1"
    descricao: "Prepare-se para a primeira avaliação prática"
quiz:
  - pergunta: "Qual é o erro mais comum ao espaçar parágrafos?"
    opcoes: ["Usar Tab no início", "Pressionar Enter duas vezes", "Usar espaçamento de 1,5", "Aplicar estilo Normal"]
    correta: 1
    explicacao: "Enter duplo cria espaçamento inconsistente. Use 'Espaçamento Depois' em Parágrafo."
    explicacaoErrada: "O erro é dar Enter duas vezes. Use 'Espaçamento Depois' em Parágrafo."
  - pergunta: "Qual atalho configura o alinhamento Justificado (padrão ABNT)?"
    opcoes: ["Ctrl + E", "Ctrl + J", "Ctrl + Q", "Ctrl + G"]
    correta: 1
    explicacao: "Ctrl + J aplica Justificado, o padrão ABNT para corpo do texto."
    explicacaoErrada: "Justificado = Ctrl + J. Centralizado = Ctrl + E. Esquerda = Ctrl + Q."
  - pergunta: "Por que é importante usar estilos (Título 1, Título 2, Normal)?"
    opcoes: ["Para deixar o texto mais bonito", "Para que o sumário automático funcione e padronizar o documento", "Para mudar a cor do texto", "Para adicionar bordas"]
    correta: 1
    explicacao: "Estilos padronizam o documento e são obrigatórios para o sumário automático."
    explicacaoErrada: "Estilos padronizam tudo de uma vez e são essenciais para o sumário automático."
  - pergunta: "Qual o espaçamento entre linhas padrão ABNT?"
    opcoes: ["Simples (1,0)", "1,5 linhas", "Duplo (2,0)", "2,5 linhas"]
    correta: 1
    explicacao: "Padrão ABNT: 1,5 linhas. Atalho: Ctrl + 5."
    explicacaoErrada: "ABNT pede 1,5 linhas (Ctrl + 5)."
---

## Formatação de Fonte

Tudo fica em **Página Inicial → grupo Fonte**.
Atalho para abrir todas as opções: `Ctrl + D`.

### Tipos de fonte

| Tipo          | Exemplos                  | Quando usar             |
|---------------|---------------------------|-------------------------|
| Com serifa    | Times New Roman, Garamond | Acadêmicos e formais    |
| Sem serifa    | Arial, Calibri            | Modernos e digitais     |
| Monoespaçada  | Courier New               | Código e texto técnico  |

> [!info] Use no máximo 2 fontes por documento.

### Atalhos de caractere

| Atalho          | Efeito            |
|-----------------|--------------------|
| `Ctrl + N`      | **Negrito**        |
| `Ctrl + I`      | _Itálico_          |
| `Ctrl + S`      | Sublinhado         |
| `Ctrl + D`      | Janela Fonte       |
| `Ctrl + Espaço` | Limpar formatação  |
| `Ctrl + ]`      | Aumentar fonte     |
| `Ctrl + [`      | Diminuir fonte     |

### Limpar formatação de texto colado da internet

Texto copiado da internet vem com formatação bagunçada. Duas soluções:

1. **Colar limpo:** **Página Inicial → setinha de Colar → Manter Somente Texto**
2. **Limpar depois:** selecione o texto → `Ctrl + Espaço`

> [!info] Na hora de colar, use o terceiro ícone (Manter Somente Texto) para textos da internet.

### Pincel de Formatação

Copia a formatação de um trecho e aplica em outro. Ícone de pincel em **Área de Transferência**.

- **1 clique** = aplica em um trecho
- **Duplo clique** = modo contínuo (vários trechos)

---

## Formatação de Parágrafo

Acesse em **Página Inicial → grupo Parágrafo** ou botão direito → **Parágrafo**.

### O erro mais comum

> [!alerta] Nunca use Enter duplo para espaçar parágrafos. Configure o campo **"Espaçamento Depois"** em Parágrafo — isso garante consistência.

### Alinhamento

| Atalho     | Tipo         | Quando usar              |
|------------|--------------|--------------------------|
| `Ctrl + Q` | Esquerda     | Textos informais, e-mails|
| `Ctrl + E` | Centralizado | Títulos, capas           |
| `Ctrl + G` | Direita      | Datas, assinaturas       |
| `Ctrl + J` | Justificado  | **Padrão ABNT**          |

### Espaçamento entre linhas

| Atalho     | Espaçamento   | Uso                     |
|------------|---------------|-------------------------|
| `Ctrl + 1` | Simples (1,0) | Rodapés, legendas       |
| `Ctrl + 5` | 1,5 linhas    | **Padrão ABNT**         |
| `Ctrl + 2` | Duplo (2,0)   | Documentos de revisão   |

### Configuração ABNT — passo a passo

1. Fonte: **Arial** ou **Times New Roman**, tamanho **12**
2. Alinhamento: **Justificado** — `Ctrl + J`
3. Espaçamento entre linhas: **1,5** — `Ctrl + 5`
4. Espaçamento Depois: **0pt** — Parágrafo → Espaçamento → Depois: 0
5. Recuo de primeira linha: **1,25cm** — Parágrafo → Recuos Especiais → Primeira linha

---

## Estilos de Texto

Um **estilo** é um conjunto de formatações com nome. Mude o estilo uma vez e todos os trechos que usam ele atualizam juntos.

### Hierarquia de estilos

| Estilo       | Uso                               |
|--------------|-----------------------------------|
| **Título 1** | Capítulos principais              |
| **Título 2** | Subcapítulos                      |
| **Título 3** | Subsubcapítulos                   |
| **Normal**   | Corpo do texto                    |
| **Citação**  | Citações longas (ABNT: recuo 4cm) |

> [!alerta] Sem Título 1, 2 e 3, o sumário automático (Aula 06) não funciona.

### Por que usar estilos

| Sem estilos                               | Com estilos                            |
|-------------------------------------------|----------------------------------------|
| 80 títulos para mudar: 30 min de trabalho | Modificar o estilo uma vez: 10 segundos|
| Inconsistências visuais                   | Padronização automática                |
| Sumário automático não funciona           | Sumário gerado em 1 clique             |

### Como modificar um estilo

1. Botão direito no estilo na galeria → **Modificar**
2. Altere fonte, tamanho, cor, espaçamento
3. **OK** — tudo atualiza

### Como criar um estilo novo

1. Setinha na galeria de estilos → **Criar um Estilo**
2. Dê um nome (ex: "Frase Importante")
3. **Modificar** → configure fonte, tamanho, cor, recuo
4. Em **"Estilo do parágrafo seguinte"**, escolha Normal
5. **OK** — aparece na galeria

> [!sucesso] Configure "estilo do parágrafo seguinte" como Normal nos títulos. Ao dar Enter após um título, o Word já muda para o corpo do texto automaticamente.

---

## Checklist da Aula

- [ ] Configurei um parágrafo ABNT completo
- [ ] Testei negrito (`Ctrl+N`), itálico (`Ctrl+I`) e limpeza (`Ctrl+Espaço`)
- [ ] Usei o Pincel de Formatação
- [ ] Apliquei Título 1, Título 2 e Normal
- [ ] Modifiquei um estilo e vi tudo atualizar

---

## Referências

- [Digitação e Formatação Básica (~21min)](https://www.youtube.com/watch?v=JvSVkrDbzf0)
- [Formatações Baseadas em Estilos (~13min)](https://www.youtube.com/watch?v=ELtk2wmrmQc)
