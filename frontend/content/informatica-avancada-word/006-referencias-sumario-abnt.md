---
slug: "referencias-sumario-abnt"
modulo: "Módulo 3 — Documentos Profissionais"
titulo: "Referências, Sumário & ABNT"
subtitulo: "Sumário automático, notas de rodapé, citações e bibliografia ABNT"
descricao: "Gere sumário automático, insira notas de rodapé e crie citações e bibliografia no formato ABNT — tudo automaticamente pelo Word. Inclui Avaliação AV2."
ordem: 6
proximosPassos: []
quiz:
  - pergunta: "O que é necessário no documento para que o sumário automático funcione?"
    opcoes: ["Usar fonte Arial 12", "Aplicar os estilos Título 1, Título 2 e Título 3", "Numerar as páginas", "Inserir quebras de página"]
    correta: 1
    explicacao: "O sumário automático é gerado a partir dos estilos Título 1, 2 e 3. Sem eles, o Word não sabe quais são os capítulos."
    explicacaoErrada: "O sumário automático depende dos estilos Título 1, 2 e 3 aplicados no documento. Sem eles, não funciona."
  - pergunta: "Qual atalho insere uma nota de rodapé?"
    opcoes: ["Ctrl + F", "Alt + Ctrl + F", "Ctrl + Shift + F", "Alt + F"]
    correta: 1
    explicacao: "Alt + Ctrl + F insere uma nota de rodapé. O cursor vai automaticamente para o rodapé da página para digitar a nota."
    explicacaoErrada: "O atalho é Alt + Ctrl + F. O Word numera automaticamente e posiciona o cursor no rodapé para você digitar."
  - pergunta: "Qual é o formato correto de uma citação indireta (paráfrase) na ABNT?"
    opcoes: ["\"texto\" (AUTOR, ano, p.)", "Autor (ano)", "(AUTOR, ano)", "Autor, ano, página"]
    correta: 1
    explicacao: "Na citação indireta, você parafraseia o autor e usa o formato: Autor (ano). Ex: De acordo com Manzano (2022)."
    explicacaoErrada: "Citação indireta (paráfrase) usa o formato Autor (ano). Ex: 'De acordo com Manzano (2022), o algoritmo é...'"
  - pergunta: "Como atualizar o sumário após editar o documento?"
    opcoes: ["Deletar e inserir novamente", "Pressionar F9 dentro do sumário", "Salvar o documento", "Fechar e reabrir o Word"]
    correta: 1
    explicacao: "F9 com o cursor dentro do sumário atualiza os títulos e números de página automaticamente."
    explicacaoErrada: "Clique no sumário e pressione F9, ou clique em 'Atualizar Sumário → Atualizar o índice inteiro'."
  - pergunta: "Qual a diferença entre notas de rodapé e comentários?"
    opcoes: ["Não há diferença", "Notas aparecem no documento impresso, comentários não", "Comentários aparecem no documento impresso, notas não", "Ambos aparecem na impressão"]
    correta: 1
    explicacao: "Notas de rodapé são para o leitor final e aparecem na impressão. Comentários são para revisão interna e NÃO aparecem na impressão."
    explicacaoErrada: "Notas de rodapé = para o leitor (impresso). Comentários = para revisão (não impresso). São ferramentas com finalidades diferentes."
---

## Sumário Automático

O Word gera o sumário sozinho baseado nos estilos **Título 1, Título 2 e Título 3** aplicados no documento.

> **Atenção:** sem os estilos Título 1, 2 e 3 no documento o sumário automático NÃO funciona. Volte na Aula 02 e aplique os estilos antes de continuar.

### Como inserir o sumário

1. Posicione o cursor onde o sumário vai aparecer (após a capa, antes da introdução)
2. `Referências → Sumário → escolha Automático 1 ou Automático 2`
3. O sumário é gerado com os títulos e números de página

### Como atualizar o sumário

Sempre que adicionar ou remover conteúdo:

- Clique no sumário → **Atualizar Sumário → Atualizar o índice inteiro**
- Ou pressione `F9` com o cursor dentro do sumário

### Sumário personalizado

`Referências → Sumário → Sumário Personalizado...`

| Opção                      | O que controla                                     |
| -------------------------- | -------------------------------------------------- |
| Mostrar níveis             | Quantos níveis de título aparecem (padrão ABNT: 3) |
| Caractere de preenchimento | Pontos, hífens ou linha entre título e página      |
| Formato                    | Clássico, Elegante, Moderno                        |

### Exemplo de sumário gerado

```
Sumário

1. Introdução ............................................................... 3
   1.1 Contexto do problema ..................................... 4
       1.1.1 Dados históricos ..................................... 5
2. Desenvolvimento ...................................................... 7
   2.1 Metodologia ........................................................ 8
3. Conclusão ................................................................ 25
Referências .................................................................. 28
```

---

## Notas de Rodapé e Comentários

### Inserir nota de rodapé

`Referências → Inserir Nota de Rodapé`
**Atalho:** `Alt + Ctrl + F`

O cursor vai automaticamente para o rodapé da página onde você digita a nota. O Word numera automaticamente.

> **Dica do professor:** As notas de rodapé servem para o autor conversar com o leitor — explicar um termo técnico, dar uma informação extra que não cabe no parágrafo. Coloque o cursor logo após a palavra que quer explicar e pressione `Alt + Ctrl + F`.

### Comportamento inteligente das notas

Se você adicionar texto e a palavra com a nota de rodapé pular para outra página, **a nota de rodapé pula junto automaticamente**. O Word gerencia a numeração e o posicionamento — você não precisa fazer nada.

### Notas de fim (Endnotes)

`Referências → Inserir Nota de Fim`

Funcionam igual às notas de rodapé, mas aparecem no final do documento. Usadas em livros e monografias.

### Comentários — comunicação durante a revisão

`Revisão → Novo Comentário`

Comentários são diferentes de notas de rodapé:
- **Notas de rodapé** = para o leitor final (aparecem no documento impresso)
- **Comentários** = para você e outros editores (NÃO aparecem na impressão)

### Como usar comentários

1. Selecione a palavra, frase ou parágrafo que quer comentar
2. `Revisão → Novo Comentário`
3. Digite o comentário (ex: "Verificar se este termo está correto")
4. Clique fora — o comentário fica na margem do documento

### Revisão colaborativa com comentários

- Outros usuários que compartilham o documento (via OneDrive) veem seus comentários em tempo real
- Cada comentário tem um botão **Responder** — criando uma conversa
- Use `Revisão → Próximo Comentário / Comentário Anterior` para navegar
- **Resolver:** aceita o comentário (fica tracejado) · **Excluir:** remove o comentário
- Clique em **Mostrar Comentários** para ver todos na lateral direita

> **Dica do professor:** Use comentários como lembretes para si mesmo durante a escrita. Por exemplo: "melhorar este parágrafo", "verificar citação", "adicionar dados". Na revisão final, resolva ou exclua todos.

---

## Citações e Bibliografia ABNT Automática

### Como cadastrar uma fonte

1. `Referências → Inserir Citação → Adicionar Nova Fonte`
2. Escolha o tipo: Livro, Artigo, Site, etc.
3. Preencha: Autor, Título, Ano, Editora, Cidade
4. Clique em **OK** — a citação aparece no texto

### Escolher o estilo ABNT

`Referências → Estilo → ABNT`

> Se o estilo ABNT não aparecer, pesquise "instalar estilo ABNT Word" para baixar o arquivo de estilo.

### Gerar a bibliografia automaticamente

`Referências → Bibliografia → Inserir Bibliografia`

O Word gera a lista de referências em ordem alfabética com todas as fontes citadas.

### Tipos de citação ABNT no texto

| Tipo                            | Formato                                                    | Exemplo                                        |
| ------------------------------- | ---------------------------------------------------------- | ---------------------------------------------- |
| Indireta (paráfrase)            | Autor (ano)                                                | De acordo com Manzano (2022), o algoritmo é... |
| Direta curta (até 3 linhas)     | "texto" (AUTOR, ano, p.)                                   | "O algoritmo é..." (MANZANO, 2022, p. 15).     |
| Direta longa (mais de 3 linhas) | Parágrafo separado com recuo de 4cm, fonte 10pt, sem aspas | —                                              |

### Exemplo de referência completa ABNT

```
MANZANO, J. A. Algoritmos. 30. ed. São Paulo: Érica, 2022.

FORBELLONE, A. L.; EBERSPÄCHER, H. Lógica de Programação.
3. ed. São Paulo: Pearson, 2021.
```

---

## Avaliação AV2

**Arquivo:** `AV2_[SeuNome]_Aula06.docx`

| Critério                                                                                                           | Pontos   |
| ------------------------------------------------------------------------------------------------------------------ | -------- |
| Estrutura com estilos: Título 1 para capítulos, Título 2 para subcapítulos, Normal para corpo · mínimo 3 capítulos | 2,0      |
| Sumário automático gerado pelo Word com pelo menos 2 níveis de hierarquia                                          | 2,0      |
| Mínimo 2 notas de rodapé com texto explicativo                                                                     | 2,0      |
| Mínimo 2 citações ABNT: uma indireta e uma direta curta                                                            | 2,0      |
| Lista de referências gerada automaticamente com mínimo 2 fontes                                                    | 2,0      |
| **Total**                                                                                                          | **10,0** |

**Critérios de aprovação:** frequência >= 75% · nota >= 6,0

---

## Checklist pré-AV2

- [ ] Apliquei Título 1, Título 2 e Título 3 no documento
- [ ] Gerei o sumário automático com `Referências → Sumário`
- [ ] Atualizei o sumário com `F9` após editar o documento
- [ ] Inseri pelo menos 2 notas de rodapé com `Alt + Ctrl + F`
- [ ] Cadastrei fontes em `Referências → Inserir Citação`
- [ ] Escrevi uma citação indireta (paráfrase com autor e ano)
- [ ] Escrevi uma citação direta curta (com aspas, autor, ano e página)
- [ ] Gerei a bibliografia automática com `Referências → Inserir Bibliografia`
