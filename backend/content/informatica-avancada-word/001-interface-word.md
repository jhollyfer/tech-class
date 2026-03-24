---
slug: "interface-word"
modulo: "Módulo 1 — Primeiros Passos no Word"
titulo: "Interface do Word"
subtitulo: "Conheça a tela do Word e prepare seu documento"
descricao: "Aprenda a usar a interface do Word, personalize sua área de trabalho e configure o documento antes de começar."
ordem: 1
proximosPassos:
  - titulo: "Fonte, Parágrafo & Estilos"
    descricao: "Formate textos e padronize documentos com estilos"
  - titulo: "Atalhos de teclado"
    descricao: "Atalhos essenciais para trabalhar mais rápido"
quiz:
  - pergunta: "Qual atalho apaga uma palavra inteira à esquerda do cursor?"
    opcoes: ["Ctrl + Delete", "Ctrl + Backspace", "Alt + Backspace", "Shift + Backspace"]
    correta: 1
    explicacao: "Ctrl + Backspace apaga a palavra inteira à esquerda do cursor."
    explicacaoErrada: "O atalho correto é Ctrl + Backspace."
  - pergunta: "Qual é a margem superior padrão ABNT?"
    opcoes: ["2 cm", "3 cm", "2,5 cm", "4 cm"]
    correta: 1
    explicacao: "Superior e esquerda = 3 cm. Inferior e direita = 2 cm."
    explicacaoErrada: "Margem superior ABNT é 3 cm. Grave: 3/2/3/2."
  - pergunta: "O que é a Barra de Ferramentas de Acesso Rápido (QAT)?"
    opcoes: ["A barra com as abas do Ribbon", "Uma barra personalizável com botões mais usados", "A barra de status na parte inferior", "O menu Arquivo"]
    correta: 1
    explicacao: "A QAT fica no canto superior e você personaliza com os botões que mais usa."
    explicacaoErrada: "A QAT é a barra personalizável no canto superior esquerdo."
  - pergunta: "Qual atalho mostra/oculta os caracteres ocultos (marcas de parágrafo)?"
    opcoes: ["Ctrl + H", "Ctrl + *", "Ctrl + P", "Alt + F"]
    correta: 1
    explicacao: "Ctrl + * mostra marcas de parágrafo, espaços e outros caracteres invisíveis."
    explicacaoErrada: "O atalho é Ctrl + * (ou Ctrl + Shift + 8)."
  - pergunta: "Como gerar texto automático em português no Word?"
    opcoes: ["Copiar da internet", "Digitar =rand(2,3) e pressionar Enter", "Clicar em Inserir → Texto", "Usar Ctrl + T"]
    correta: 1
    explicacao: "=rand(p,f) gera p parágrafos com f frases em português. =lorem(p,f) gera em latim."
    explicacaoErrada: "Digite =rand(parágrafos,frases) e pressione Enter."
  - pergunta: "Como acessar qualquer comando do Ribbon usando apenas o teclado?"
    opcoes: ["Ctrl + R", "Pressionar e soltar Alt — letras aparecem sobre cada aba", "F1", "Ctrl + F"]
    correta: 1
    explicacao: "Pressione e solte Alt — letras aparecem sobre cada aba. Digite a letra para acessar."
    explicacaoErrada: "Pressione e solte Alt — letras aparecem sobre as abas."
---

## Gerando Texto Automaticamente

Antes de formatar, você precisa de texto para praticar. O Word gera isso pra você.

**Texto em latim:** digite `=lorem(2,3)` e pressione Enter.
Resultado: 2 parágrafos, 3 frases cada.

**Texto em português:** digite `=rand(2,3)` e pressione Enter.
Resultado: 2 parágrafos, 3 frases cada, em português.

> [!info] O primeiro número é a quantidade de parágrafos, o segundo é a quantidade de frases.

---

## 10 Dicas Essenciais

| #  | Dica                    | Como usar                                                        |
|----|-------------------------|------------------------------------------------------------------|
| 01 | Texto automático        | `=rand(p,f)` em PT · `=lorem(p,f)` em latim                     |
| 02 | Aumentar/diminuir fonte | `Ctrl + ]` aumenta 1pt · `Ctrl + [` diminui 1pt                 |
| 03 | Limpar formatação       | `Ctrl + Espaço` — volta ao estilo Normal                         |
| 04 | Apagar palavra inteira  | `Ctrl + Backspace` — apaga a palavra à esquerda                  |
| 05 | Área de transferência   | Guarda até 24 itens copiados · **Página Inicial → setinha**      |
| 06 | Símbolos automáticos    | `(C)` vira © · `(R)` vira ®                                     |
| 07 | Tabela pelo teclado     | Digite `+---+---+` e pressione Enter                            |
| 08 | Editor de equações      | **Inserir → Equação à Tinta** — desenhe a fórmula com o mouse   |
| 09 | Pesquisa inteligente    | Selecione a palavra → botão direito → **Pesquisa Inteligente**   |
| 10 | Traduzir e ouvir texto  | **Revisão → Traduzir** · Botão Play lê o texto em voz alta      |

### Detalhes sobre algumas dicas

**Dica 02 — Diferença nos atalhos de fonte:**
- `Ctrl + ]` / `Ctrl + [` — muda 1 ponto por vez (18 → 19 → 20)
- `Ctrl + Shift + >` / `Ctrl + Shift + <` — pula pelos tamanhos predefinidos (18 → 20 → 22)

**Dica 05 — Área de transferência:**
- O `Ctrl + C` / `Ctrl + V` guarda só 1 item
- Abrindo a Área de Transferência (**Página Inicial → setinha**), você copia vários trechos e cola um por um ou todos de vez

**Dica 08 — Equação à tinta:**
- **Inserir → Equação → Equação à Tinta** — desenhe a fórmula e o Word converte em fórmula editável

---

## Elementos da Interface

### Barra de Título

Topo da janela — mostra o nome do arquivo.
Ícone de nuvem = salvo no OneDrive.

### Barra de Ferramentas de Acesso Rápido (QAT)

Canto superior esquerdo. Botões padrão: Salvar, Desfazer e Refazer.

Clique na **setinha** para adicionar botões. Recomendo: Impressão Rápida e Novo.

> [!info] Coloque na QAT os botões que você mais usa — ficam visíveis o tempo todo.

### Faixa de Opções — Ribbon

Área com abas no topo. Cada aba agrupa comandos relacionados.

No Office 2016+: campo **"Diga-me o que você quer fazer"** (atalho: `Alt + G`).

Setinhas nos cantos dos grupos abrem opções extras.

| Guia           | Para que serve                                |
|----------------|-----------------------------------------------|
| Página Inicial | Fonte, parágrafo, estilos — a mais usada      |
| Inserir        | Imagens, tabelas, formas, cabeçalho/rodapé    |
| Layout         | Margens, tamanho, orientação, colunas, quebras |
| Referências    | Sumário, notas de rodapé, citações ABNT        |
| Revisão        | Ortografia, comentários, controle de alterações|
| Exibir         | Modos de exibição, régua, zoom, navegação      |

### Navegando pelo Ribbon com o teclado

1. Pressione e solte `Alt` — letras aparecem sobre cada aba
2. Digite a letra da aba (ex: `C` para Página Inicial)
3. Novas letras aparecem — digite para ativar o comando

> [!sucesso] Use `Alt` para navegar no Ribbon sem tirar a mão do teclado. Muito mais rápido.

### Modos de exibição do Ribbon

| Modo              | Como funciona                               |
|-------------------|---------------------------------------------|
| Guias e comandos  | Padrão — tudo visível                       |
| Somente guias     | Ribbon escondido, clique na aba para abrir  |
| Ocultar tudo      | Tela limpa — `Alt` para reexibir            |

### Barra de Status

Base da janela. Mostra: páginas, contagem de palavras, idioma.

Zoom no canto direito: arraste, clique + ou -, ou use `Ctrl + scroll`.
Para voltar a 100%: **Exibir → 100%** ou `Alt + K + D`.

> [!info] Use o **Layout de Impressão** — mostra o documento como vai ficar impresso. O **Modo de Leitura** é bom para ler sem editar.

---

## Configuração Inicial do Documento

### Margens ABNT

**Layout → Margens → Margens Personalizadas**

| Margem   | Valor |
|----------|-------|
| Superior | 3 cm  |
| Inferior | 2 cm  |
| Esquerda | 3 cm  |
| Direita  | 2 cm  |

### Outras configurações

- **Tamanho do papel:** A4 (21 x 29,7 cm)
- **Orientação:** Retrato (vertical)
- **Idioma:** **Revisão → Idioma → Português (Brasil)**
- **Caracteres ocultos:** `Ctrl + *` para mostrar/ocultar
- **Tema do Office:** **Arquivo → Opções → Geral → Tema**

### Ativar a guia Desenvolvedor

**Arquivo → Opções → Personalizar Faixa de Opções → marcar Desenvolvedor → OK**

---

## Atalhos Essenciais

| Atalho             | Função                                      |
|--------------------|---------------------------------------------|
| `Ctrl + B`         | Salvar (PT-BR; `Ctrl + S` no inglês)        |
| `Ctrl + Z`         | Desfazer                                    |
| `Ctrl + R`         | Refazer / Repetir                           |
| `Ctrl + T`         | Selecionar tudo                             |
| `Ctrl + N`         | Negrito                                     |
| `Ctrl + I`         | Itálico                                     |
| `Ctrl + Backspace` | Apagar palavra inteira                      |
| `Ctrl + *`         | Mostrar/ocultar caracteres ocultos          |
| `Alt + G`          | "Diga-me o que você quer fazer"             |
| `Alt` (soltar)     | Atalhos de letra no Ribbon                  |
| `F12`              | Salvar como                                 |

---

## Checklist da Aula

- [ ] Gerei texto com `=rand(3,4)` e `=lorem(2,3)`
- [ ] Identifiquei os elementos da interface
- [ ] Adicionei botões na QAT
- [ ] Personalizei o tema do Office
- [ ] Naveguei pelo Ribbon usando `Alt` + letras
- [ ] Ativei a guia Desenvolvedor
- [ ] Configurei margens ABNT (3/2/3/2)
- [ ] Configurei idioma como Português (Brasil)
- [ ] Testei `Ctrl + Backspace` para apagar palavra
- [ ] Testei `Ctrl + *` para caracteres ocultos
- [ ] Testei o zoom pela Barra de Status
- [ ] Experimentei o Modo de Leitura

---

## Referências

- [10 Dicas para Word 2016 (~15min)](https://www.youtube.com/watch?v=qVoiU4MMCZ8)
- [Primeiros Passos no Word 2016 (~13min)](https://www.youtube.com/watch?v=iOlONI3F300)
