---
slug: "environment-setup"
modulo: "Módulo 3 — Primeiros Programas"
titulo: "Preparando o Ambiente"
subtitulo: "Instalando as ferramentas para programar em TypeScript"
descricao: "Como instalar Node.js, VS Code e configurar o ambiente para escrever seus primeiros programas em TypeScript."
ordem: 12
proximosPassos:
  - titulo: "Primeiro programa"
    descricao: "Escreva e execute seu primeiro código"
  - titulo: "Terminal"
    descricao: "Aprenda os comandos básicos do terminal"
  - titulo: "Git"
    descricao: "Controle de versão para seus projetos"
quiz:
  - pergunta: "O que é o Node.js?"
    opcoes: ["Um editor de código", "Um runtime que executa JavaScript/TypeScript fora do navegador", "Um sistema operacional", "Uma linguagem de programação"]
    correta: 1
    explicacao: "✓ Node.js é o runtime (ambiente de execução) que permite rodar JavaScript e TypeScript fora do navegador."
    explicacaoErrada: "✗ Node.js não é editor, SO nem linguagem — é o motor que executa JavaScript/TypeScript no seu computador."
  - pergunta: "Qual editor de código é recomendado para iniciantes em TypeScript?"
    opcoes: ["Notepad", "Word", "VS Code", "Paint"]
    correta: 2
    explicacao: "✓ VS Code (Visual Studio Code) é gratuito, leve e tem excelente suporte a TypeScript."
    explicacaoErrada: "✗ VS Code é o editor recomendado — gratuito, da Microsoft, com suporte nativo a TypeScript."
  - pergunta: "Qual comando verifica se o Node.js está instalado?"
    opcoes: ["node --start", "node --version", "node --install", "node --check"]
    correta: 1
    explicacao: "✓ node --version exibe a versão instalada. Se aparecer um número (ex: v20.11.0), está funcionando."
    explicacaoErrada: "✗ O comando correto é node --version (ou node -v). Ele mostra a versão instalada do Node.js."
  - pergunta: "O que é o npm?"
    opcoes: ["Um navegador web", "O gerenciador de pacotes do Node.js", "Um compilador de TypeScript", "Um sistema de arquivos"]
    correta: 1
    explicacao: "✓ npm (Node Package Manager) é o gerenciador de pacotes que vem junto com o Node.js."
    explicacaoErrada: "✗ npm = Node Package Manager. É a ferramenta que instala bibliotecas e dependências para seus projetos."
---

## O que você vai precisar

Para programar em TypeScript, três ferramentas são essenciais:

- **Node.js** — runtime que executa JavaScript/TypeScript fora do navegador
- **VS Code** — editor de código da Microsoft, gratuito e poderoso
- **Terminal** — linha de comando para executar seus programas

Sem essas três ferramentas instaladas, não é possível escrever, salvar e executar código TypeScript no seu computador.

## Instalando o Node.js

Node.js é o motor que executa código JavaScript e TypeScript fora do navegador.

**Passo a passo:**

1. Acesse [nodejs.org](https://nodejs.org)
2. Baixe a versão **LTS** (Long Term Support) — é a mais estável
3. Execute o instalador e siga as instruções (Next, Next, Finish)
4. Abra o terminal e verifique:

```typescript
// No terminal, digite:
// node --version
// Deve aparecer algo como: v20.11.0

// npm --version
// Deve aparecer algo como: 10.2.4
```

O **npm** (Node Package Manager) vem junto com o Node.js. É o gerenciador de pacotes — ele instala bibliotecas e ferramentas extras que você vai usar nos seus projetos.

## Instalando o VS Code

VS Code (Visual Studio Code) é o editor de código mais usado no mundo. É gratuito, leve e tem suporte nativo a TypeScript.

**Passo a passo:**

1. Acesse [code.visualstudio.com](https://code.visualstudio.com)
2. Baixe a versão para o seu sistema operacional
3. Instale normalmente

**Extensões recomendadas:**

- **Portuguese (Brazil) Language Pack** — traduz a interface para português
- **ESLint** — detecta erros e problemas no código automaticamente

Para instalar extensões: abra o VS Code → clique no ícone de quadradinhos na barra lateral → pesquise o nome → clique em "Install".

## Seu primeiro comando no terminal

Crie um arquivo chamado `ola.ts` no VS Code com este conteúdo:

```typescript
console.log("Olá, mundo!");
```

Agora abra o terminal e execute:

```typescript
// Para TypeScript diretamente:
// npx tsx ola.ts

// Ou, se estiver usando JavaScript puro (arquivo .js):
// node ola.js
```

Se aparecer `Olá, mundo!` no terminal, tudo está funcionando. Seu ambiente está pronto.

O comando `npx tsx` executa TypeScript diretamente, sem precisar compilar antes. É a forma mais rápida de testar código durante o aprendizado.

> [!info]
> Node.js é o motor que alimenta servidores, APIs e ferramentas no mundo inteiro. Empresas como Netflix, PayPal e LinkedIn usam Node.js em produção. Ao instalar o Node.js, você tem acesso ao mesmo ambiente usado em aplicações reais.