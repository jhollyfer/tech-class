---
slug: "block-programming"
modulo: "Módulo 2 — Algoritmos"
titulo: "Escrevendo programas em blocos"
subtitulo: "Programação visual com Scratch — encaixando blocos como peças de Lego"
descricao: "Programação visual em blocos com Scratch: interface, categorias de blocos, exemplos práticos e formas dos blocos."
ordem: 11
proximosPassos:
  - titulo: "Crie no Scratch"
    descricao: "Acesse scratch.mit.edu e crie seu primeiro projeto"
  - titulo: "Preparando o ambiente"
    descricao: "Configure seu computador para programar em TypeScript"
  - titulo: "Projetos práticos"
    descricao: "Crie um jogo completo usando blocos"
quiz:
  - pergunta: "Quem criou o Scratch?"
    opcoes: ["Google", "Microsoft", "MIT", "Apple"]
    correta: 2
    explicacao: "✓ O Scratch foi criado pelo MIT Media Lab e é gratuito."
    explicacaoErrada: "✗ O Scratch foi desenvolvido pelo MIT (Massachusetts Institute of Technology)."
  - pergunta: "Blocos hexagonais (6 lados) no Scratch representam:"
    opcoes: ["Ações/comandos", "Valores numéricos", "Condições booleanas (V/F)", "Eventos"]
    correta: 2
    explicacao: "✓ Blocos hexagonais são condições booleanas — retornam verdadeiro ou falso."
    explicacaoErrada: "✗ Hexagonal = condição (V/F), arredondado = valor, quadrado = ação."
  - pergunta: "Qual bloco cria a animação de caminhada do gato?"
    opcoes: ["Mova 10 passos", "Próxima fantasia", "Gire 15 graus", "Deslize até"]
    correta: 1
    explicacao: "✓ 'Próxima fantasia' alterna entre as imagens do gato, criando animação de caminhada."
    explicacaoErrada: "✗ A animação vem da troca de fantasias (imagens) do ator, não do movimento."
  - pergunta: "As 3 áreas da interface do Scratch são:"
    opcoes:
      - "Código, terminal e saída"
      - "Palco, ator e blocos/scripts"
      - "Editor, compilador e depurador"
      - "Entrada, processamento e saída"
    correta: 1
    explicacao: "✓ O Scratch tem: palco (resultado visual), ator (personagem) e área de blocos/scripts."
    explicacaoErrada: "✗ A interface do Scratch é visual: palco à direita, blocos à esquerda, scripts no centro."
  - pergunta: "Qual o próximo passo natural após aprender Scratch?"
    opcoes:
      - "Parar de programar"
      - "Aprender uma linguagem textual (Python, JS...)"
      - "Continuar só no Scratch"
      - "Estudar hardware"
    correta: 1
    explicacao: "✓ Após dominar blocos, a transição natural é para linguagens textuais."
    explicacaoErrada: "✗ Scratch é a porta de entrada — depois vêm linguagens textuais como Python."
---

## O que é Scratch?

Scratch é uma plataforma de programação visual criada pelo MIT (scratch.mit.edu).

Em vez de digitar código, você arrasta e encaixa blocos coloridos — como montar com Lego.

É usado mundialmente para ensinar lógica de programação a iniciantes de todas as idades.

> [!sucesso]
> Scratch é gratuito e roda no navegador. Acesse scratch.mit.edu para experimentar!

## A interface do Scratch

O Scratch tem 3 áreas principais:

- **PALCO** (à direita) — onde o resultado do programa aparece. O ator (sprite) se movimenta aqui.
- **ATOR** (sprite) — o personagem que executa as ações. O padrão é o gato do Scratch.
- **BLOCOS** (à esquerda) — categorias coloridas de blocos que você arrasta para a área de scripts.

A área de scripts (centro) é onde você monta o programa encaixando blocos.

## Categorias de blocos e suas formas

- **Eventos** (amarelo) — disparam ações: "quando bandeira clicada", "quando tecla pressionada"
- **Movimento** (azul) — movem o ator: "mova 10 passos", "gire 15 graus"
- **Aparência** (roxo) — mudam visual: "diga olá", "próxima fantasia"
- **Som** (rosa) — reproduzem sons: "toque som meow"
- **Controle** (laranja) — estruturas: "repita 10 vezes", "se...então"
- **Variáveis** (vermelho) — armazenam dados: "mude X para 0"

### Formas dos blocos

- Blocos **HEXAGONAIS** (6 lados) — condições booleanas (verdadeiro/falso)
- Blocos **ARREDONDADOS** — valores (números, textos)
- Blocos **QUADRADOS** (com encaixes) — ações/comandos

## Exemplo: gato caminhando

```
Quando bandeira verde clicada:
  Repita 10 vezes:
    Mova 10 passos
    Próxima fantasia
    Espere 0.2 segundos
```

O bloco "próxima fantasia" alterna entre as imagens do gato (pernas abertas/fechadas), criando animação de caminhada.

## Exemplo: fatorial no Scratch

```
Quando bandeira verde clicada:
  Pergunte "Digite um número" e espere
  Mude N para (resposta)
  Mude resultado para 1
  Repita até que N ≤ 1:
    Mude resultado para (resultado × N)
    Adicione -1 a N
  Diga (resultado)
```

> [!info]
> O fatorial no Scratch usa os mesmos conceitos do pseudocódigo: variáveis, loop com condição de parada, e entrada/saída. A diferença é apenas visual — a lógica é idêntica.
