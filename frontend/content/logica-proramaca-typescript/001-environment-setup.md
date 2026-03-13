---
slug: "environment-setup"
modulo: "Módulo 1 — Começando a Programar"
titulo: "Preparando o Ambiente"
subtitulo: "Instalando as ferramentas para programar em TypeScript"
descricao: "Como instalar Node.js, VS Code e configurar o ambiente para escrever seus primeiros programas em TypeScript."
ordem: 1
proximosPassos:
  - titulo: "Primeiro programa"
    descricao: "Escreva e execute seu primeiro código"
  - titulo: "Variáveis e tipos"
    descricao: "Aprenda a armazenar dados no programa"
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
4. Abra o terminal e verifique a instalação:

```bash
node --version
# Deve aparecer algo como: v20.11.0

npm --version
# Deve aparecer algo como: 10.2.4
```

O **npm** (Node Package Manager) vem junto com o Node.js. É o gerenciador de pacotes — ele instala bibliotecas e ferramentas extras que você vai usar nos seus projetos.

> [!info]
> Se o terminal exibir "comando não encontrado" após a instalação, feche e abra o terminal novamente. Em alguns sistemas, é necessário reiniciar o terminal para que os novos comandos sejam reconhecidos.

## Instalando o VS Code

VS Code (Visual Studio Code) é o editor de código mais usado no mundo. É gratuito, leve e tem suporte nativo a TypeScript.

**Passo a passo:**

1. Acesse [code.visualstudio.com](https://code.visualstudio.com)
2. Baixe a versão para o seu sistema operacional
3. Instale normalmente

**Extensões recomendadas:**

- **Portuguese (Brazil) Language Pack** — traduz a interface para português
- **ESLint** — detecta erros e problemas no código automaticamente

Para instalar extensões: abra o VS Code, clique no icone de quadradinhos na barra lateral, pesquise o nome e clique em "Install".

## Instalando o tsx

Para executar TypeScript diretamente no terminal, vamos instalar o `tsx` de forma global:

```bash
npm install -g tsx
```

O `tsx` permite rodar arquivos `.ts` sem precisar compilar antes. Depois de instalar, verifique:

```bash
tsx --version
# Deve aparecer a versão instalada
```

## Seu primeiro comando no terminal

Crie uma pasta para seus projetos e abra no VS Code:

```bash
mkdir meus-programas
cd meus-programas
code .
```

Dentro do VS Code, crie um arquivo chamado `ola.ts` com este conteudo:

```typescript
console.log("Olá, mundo!");
```

Agora abra o terminal integrado do VS Code (atalho: `Ctrl + '`) e execute:

```bash
npx tsx ola.ts
```

Se aparecer `Olá, mundo!` no terminal, tudo esta funcionando.

> [!sucesso]
> O comando `npx tsx` executa TypeScript diretamente, sem precisar compilar antes. E a forma mais rapida de testar codigo durante o aprendizado.

## Verificacao final do ambiente

Para garantir que tudo esta configurado corretamente, execute os seguintes comandos no terminal:

```bash
# 1. Verificar Node.js
node --version

# 2. Verificar npm
npm --version

# 3. Verificar tsx
npx tsx --version

# 4. Testar execucao de TypeScript
npx tsx ola.ts
```

Todos os comandos devem retornar uma resposta sem erros. Se algum falhar, revise o passo de instalacao correspondente.

| Ferramenta | Comando de verificacao | Resultado esperado |
|------------|----------------------|-------------------|
| Node.js | `node --version` | v20.x.x ou superior |
| npm | `npm --version` | 10.x.x ou superior |
| tsx | `npx tsx --version` | Numero da versao |
| VS Code | Abrir normalmente | Interface do editor |

> [!info]
> Node.js é o motor que alimenta servidores, APIs e ferramentas no mundo inteiro. Empresas como Netflix, PayPal e LinkedIn usam Node.js em produção. Ao instalar o Node.js, você tem acesso ao mesmo ambiente usado em aplicações reais.
