---
slug: "interface-word"
modulo: "Módulo 1 — Primeiros Passos no Word"
titulo: "Primeiros Passos & Interface do Word"
subtitulo: "Conhecendo a interface, personalizando o ambiente e configurando o documento"
descricao: "Conheça a interface do Word, personalize o ambiente de trabalho e configure um documento com as configurações corretas antes de começar a digitar."
ordem: 1
proximosPassos:
  - titulo: "Fonte, Parágrafo & Estilos"
    descricao: "Aprenda a formatar textos com precisão e padronizar documentos com estilos"
  - titulo: "Atalhos de teclado"
    descricao: "Domine os atalhos essenciais para trabalhar mais rápido"
quiz:
  - pergunta: "Qual atalho apaga uma palavra inteira à esquerda do cursor?"
    opcoes: ["Ctrl + Delete", "Ctrl + Backspace", "Alt + Backspace", "Shift + Backspace"]
    correta: 1
    explicacao: "Ctrl + Backspace apaga a palavra inteira à esquerda do cursor, economizando tempo ao editar."
    explicacaoErrada: "O atalho correto é Ctrl + Backspace — ele apaga a palavra completa à esquerda do cursor."
  - pergunta: "Qual é a margem superior padrão ABNT?"
    opcoes: ["2 cm", "3 cm", "2,5 cm", "4 cm"]
    correta: 1
    explicacao: "A margem superior ABNT é 3 cm (superior e esquerda = 3 cm; inferior e direita = 2 cm)."
    explicacaoErrada: "Nas normas ABNT, a margem superior é 3 cm. Lembre: 3/2/3/2 (superior/inferior/esquerda/direita)."
  - pergunta: "O que é a Barra de Ferramentas de Acesso Rápido (QAT)?"
    opcoes: ["A barra com as abas do Ribbon", "Uma barra personalizável com botões mais usados", "A barra de status na parte inferior", "O menu Arquivo"]
    correta: 1
    explicacao: "A QAT (Quick Access Toolbar) fica no canto superior e pode ser personalizada com os botões que você mais usa."
    explicacaoErrada: "A QAT é a barra personalizável no canto superior esquerdo — coloque nela os botões que usa com mais frequência."
  - pergunta: "Qual atalho mostra/oculta os caracteres ocultos (marcas de parágrafo)?"
    opcoes: ["Ctrl + H", "Ctrl + *", "Ctrl + P", "Alt + F"]
    correta: 1
    explicacao: "Ctrl + * (ou Ctrl + Shift + 8) alterna a exibição dos caracteres ocultos como marcas de parágrafo e espaços."
    explicacaoErrada: "O atalho é Ctrl + * — ele mostra marcas de parágrafo, espaços e outros caracteres invisíveis no documento."
  - pergunta: "Como gerar texto automático em português no Word?"
    opcoes: ["Copiar da internet", "Digitar =rand(2,3) e pressionar Enter", "Clicar em Inserir → Texto", "Usar Ctrl + T"]
    correta: 1
    explicacao: "=rand(p,f) gera p parágrafos com f frases em português. =lorem(p,f) gera em latim (Lorem Ipsum)."
    explicacaoErrada: "Para gerar texto automático, digite =rand(parágrafos,frases) e pressione Enter. O Word preenche o texto sozinho."
  - pergunta: "Como acessar qualquer comando do Ribbon usando apenas o teclado?"
    opcoes: ["Ctrl + R", "Pressionar e soltar Alt — letras aparecem sobre cada aba", "F1", "Ctrl + F"]
    correta: 1
    explicacao: "Ao pressionar e soltar Alt, letras-guia aparecem sobre cada aba do Ribbon. Digite a letra para acessar."
    explicacaoErrada: "Pressione e solte a tecla Alt — letras aparecem sobre as abas. Digite a letra correspondente para navegar sem mouse."
---

## Gerando Texto Automaticamente

Antes de começar a formatar, você precisa de texto para praticar. O Word gera texto automaticamente — sem precisar digitar ou copiar da internet.

### Texto em latim (Lorem Ipsum)

Digite `=lorem(2,3)` e pressione Enter — o Word gera 2 parágrafos com 3 frases cada em latim (Lorem Ipsum), o texto padrão dos designers.

### Texto em português

Digite `=rand(2,3)` e pressione Enter — gera 2 parágrafos com 3 frases cada em português, usando textos sobre funcionalidades do Word.

> **Dica do professor:** Use esses comandos sempre que precisar de texto para praticar formatação. O primeiro número é a quantidade de parágrafos e o segundo é a quantidade de frases por parágrafo.

---

## As 10 Dicas Essenciais

| #   | Dica                    | Como usar                                                             |
| --- | ----------------------- | --------------------------------------------------------------------- |
| 01  | Texto automático        | `=rand(p,f)` gera texto em PT · `=lorem(p,f)` gera Lorem Ipsum       |
| 02  | Aumentar/diminuir fonte | `Ctrl + ]` aumenta 1pt · `Ctrl + [` diminui 1pt                      |
| 03  | Limpar formatação       | `Ctrl + Espaço` — volta ao estilo Normal e remove links               |
| 04  | Apagar palavra inteira  | `Ctrl + Backspace` — apaga a palavra à esquerda do cursor             |
| 05  | Área de transferência   | Guarda até 24 itens copiados · Página Inicial → setinha do grupo      |
| 06  | Símbolos automáticos    | `(C)` vira © · `(R)` vira marca registrada ®                         |
| 07  | Tabela pelo teclado     | Digite `+---+---+` e pressione Enter                                  |
| 08  | Editor de equações      | Inserir → Equação à Tinta — desenhe a fórmula com o mouse            |
| 09  | Pesquisa inteligente    | Selecione a palavra → botão direito → Pesquisa Inteligente            |
| 10  | Traduzir e ouvir texto  | Revisão → Traduzir · Botão Play lê o texto em voz alta               |

### Detalhes importantes sobre as dicas

**Dica 02 — Diferença entre `Ctrl + []` e `Ctrl + Shift + <>`:**
- `Ctrl + ]` e `Ctrl + [` mudam o tamanho **1 ponto por vez** (ex: 18 → 19 → 20)
- `Ctrl + Shift + >` e `Ctrl + Shift + <` pulam pelos tamanhos predefinidos do Word (ex: 18 → 20 → 22 → 24)

**Dica 05 — Área de transferência múltipla:**
- O `Ctrl + C` / `Ctrl + V` normal guarda apenas 1 item
- Abrindo a Área de Transferência (Página Inicial → setinha), você pode copiar vários trechos e colar individualmente ou todos de uma vez
- Botão **Colar Tudo** cola tudo na ordem · **Limpar Tudo** zera a área

**Dica 08 — Equação à tinta:**
- `Inserir → Equação → Equação à Tinta` abre uma janela onde você **desenha** a fórmula com o mouse ou caneta
- O Word reconhece o desenho e converte em fórmula editável — muito mais prático que procurar imagens na internet

---

## Elementos da Interface

### Barra de Título

- Topo da janela — mostra o nome do arquivo
- Ícone de nuvem = salvo no OneDrive
- Personalize clicando com o botão direito nela

### Barra de Ferramentas de Acesso Rápido (QAT)

- Canto superior esquerdo
- Botões padrão: Salvar, Desfazer e Refazer
- Clique na **setinha pequena** para adicionar botões
- Recomendado adicionar: Impressão Rápida e Novo

> **Dica:** A QAT é a barra que você personaliza para você. Coloque os botões mais usados aqui — ficam visíveis o tempo todo.

### Faixa de Opções — Ribbon

- Grande área com abas no topo
- Cada guia agrupa comandos relacionados
- No Office 2016+: campo **"Diga-me o que você quer fazer"** (atalho: `Alt + G`)
- Setinhas pequenas nos cantos dos grupos abrem opções extras (ex: grupo Fonte → janela completa de Fonte)

| Guia           | Para que serve                                       |
| -------------- | ---------------------------------------------------- |
| Página Inicial | Fonte, parágrafo, estilos — a mais usada             |
| Inserir        | Imagens, tabelas, formas, SmartArt, cabeçalho/rodapé |
| Layout         | Margens, tamanho, orientação, colunas, quebras       |
| Referências    | Sumário automático, notas de rodapé, citações ABNT   |
| Revisão        | Ortografia, comentários, controle de alterações      |
| Exibir         | Modos de exibição, régua, zoom, painel de navegação  |

### Navegando pelo Ribbon com o teclado

Você pode acessar **qualquer comando do Ribbon sem usar o mouse**:

1. Pressione e solte a tecla `Alt` — letras aparecem sobre cada aba
2. Digite a letra da aba desejada (ex: `C` para Página Inicial, `K` para Exibir)
3. Novas letras aparecem sobre cada comando — digite para ativá-lo

> **Dica do professor:** Acostume-se a usar `Alt` para acessar o Ribbon. Você não precisa tirar a mão do teclado para nada — é muito mais rápido que usar o mouse.

### Modos de exibição do Ribbon

| Modo | Como funciona |
| --- | --- |
| Guias e comandos | Padrão — tudo visível |
| Somente guias | Ribbon escondido, clique na aba para abrir |
| Ocultar tudo | Tela limpa — `Alt` para reexibir temporariamente |

### Barra de Status

- Base da janela
- Mostra: número de páginas, contagem de palavras, idioma
- Controle de zoom no canto direito (arrastar, clicar + ou -, ou usar `Ctrl + scroll do mouse`)
- Modos de visualização rápidos: Layout de Impressão, Modo de Leitura, Layout Web
- Para voltar ao zoom 100%: `Exibir → 100%` ou atalho `Alt + K + D`

> **Use sempre o Layout de Impressão** — mostra margens e cabeçalhos exatamente como vai ficar impresso. O **Modo de Leitura** é ideal para ler documentos sem editar — abre em tela cheia focado no conteúdo.

---

## Configuração Inicial do Documento

### Margens ABNT

`Layout → Margens → Margens Personalizadas`

| Margem   | Valor |
| -------- | ----- |
| Superior | 3 cm  |
| Inferior | 2 cm  |
| Esquerda | 3 cm  |
| Direita  | 2 cm  |

### Outras configurações obrigatórias

- **Tamanho do papel:** A4 (21 × 29,7 cm) — se não souber o tamanho, meça com uma régua
- **Orientação:** Retrato (vertical) — Paisagem (horizontal) só para tabelas muito largas
- **Idioma:** Revisão → Idioma → Português (Brasil)
- **Caracteres ocultos:** `Ctrl + *` (ou `Ctrl + Shift + 8`) para mostrar/ocultar
- **Tema do Office:** Arquivo → Opções → Geral → Tema (Colorido, Cinza Escuro ou Branco)

### Ativar a guia Desenvolvedor

`Arquivo → Opções → Personalizar Faixa de Opções → marcar Desenvolvedor → OK`

---

## Atalhos de Teclado Essenciais

| Atalho             | Função                             |
| ------------------ | ---------------------------------- |
| `Ctrl + B`         | Salvar (em PT-BR; `Ctrl + S` no inglês)  |
| `Ctrl + Z`         | Desfazer                                 |
| `Ctrl + R`         | Refazer / Repetir                        |
| `Ctrl + T`         | Selecionar tudo                          |
| `Ctrl + N`         | Negrito                                  |
| `Ctrl + I`         | Itálico                                  |
| `Ctrl + Backspace` | Apagar palavra inteira                   |
| `Ctrl + *`         | Mostrar/ocultar caracteres ocultos       |
| `Alt + G`          | Abrir "Diga-me o que você quer fazer"    |
| `Alt` (soltar)     | Exibir atalhos de letra no Ribbon        |
| `F12`              | Salvar como                              |

---

## Checklist da Aula

- [ ] Gerei texto automático com `=rand(3,4)` e `=lorem(2,3)`
- [ ] Identifiquei todos os elementos da interface no meu Word
- [ ] Adicionei botões na Barra de Acesso Rápido (QAT)
- [ ] Personalizei o tema do Office (Arquivo → Opções → Geral)
- [ ] Naveguei pelo Ribbon usando `Alt` + letras, sem usar o mouse
- [ ] Ativei a guia Desenvolvedor
- [ ] Configurei as margens ABNT (3 / 2 / 3 / 2)
- [ ] Configurei o idioma como Português (Brasil)
- [ ] Testei `Ctrl + Backspace` para apagar palavra inteira
- [ ] Testei `Ctrl + *` para mostrar caracteres ocultos
- [ ] Testei o zoom pela Barra de Status e voltei a 100%
- [ ] Experimentei o Modo de Leitura e voltei para Layout de Impressão

---

## Referências

- [10 Dicas para Word 2016 (~15min)](https://www.youtube.com/watch?v=qVoiU4MMCZ8)
- [Primeiros Passos no Word 2016 (~13min)](https://www.youtube.com/watch?v=iOlONI3F300)
