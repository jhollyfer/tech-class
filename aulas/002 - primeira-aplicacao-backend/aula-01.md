# Aula 01 — Introdução ao TypeScript e Configuração do Ambiente

**Data:** 24/02 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** I — Fundamentos do TypeScript

---

## 🎯 Objetivos de Aprendizagem

- Compreender o que é TypeScript e por que ele existe em relação ao JavaScript
- Configurar o ambiente de desenvolvimento completo (Node.js, npm, VS Code)
- Inicializar um projeto TypeScript com `tsconfig.json` em modo `strict`
- Escrever e executar o primeiro programa TypeScript
- Entender type inference e quando usar anotação explícita de tipos
- Reconhecer os riscos do uso de `any` e como evitá-lo

---

## 📚 Conteúdo

### 1. TypeScript vs. JavaScript — Por que Existe?

TypeScript é um **superset tipado de JavaScript** criado pela Microsoft em 2012. Todo código JavaScript válido é TypeScript válido, mas TypeScript adiciona:

- **Tipagem estática**: erros detectados em tempo de compilação, não em execução
- **Melhor autocompletar** (IntelliSense) no editor
- **Refatoração segura**: o compilador avisa o que vai quebrar
- **Documentação embutida**: os tipos descrevem o contrato do código

> 💡 **Contexto local:** Imagine um sistema de controle de embarcações do Rio Solimões. Em JavaScript, ninguém impede que `velocidade` receba `"rápido"` em vez de `45`. TypeScript barra isso antes de o barco sair do porto.

---

### 2. Arquitetura Cliente-Servidor e HTTP (visão geral)

```
[Cliente — Browser/App]  ←──HTTP──→  [Servidor — Node.js]
       Request (pedido)                  Response (resposta)
```

- **HTTP** é o protocolo de comunicação da Web
- O servidor processa pedidos e devolve respostas
- Ao longo do curso vamos construir esse servidor com **Fastify**

---

### 3. Instalação e Configuração do Ambiente

**Ferramentas necessárias:**

| Ferramenta | Versão recomendada | Finalidade |
|---|---|---|
| Node.js | LTS (20.x ou 22.x) | Executar JavaScript/TypeScript no servidor |
| npm | Incluído com Node | Gerenciar pacotes |
| VS Code | Última estável | Editor de código |
| Extensão: ESLint | — | Lint de código |
| Extensão: Error Lens | — | Exibir erros inline |
| Extensão: TypeScript Hero | — | Imports automáticos |

**Verificar instalação:**
```bash
node --version
npm --version
```

---

### 4. Estrutura de um Projeto TypeScript

```
meu-projeto/
├── src/
│   └── server.ts       ← ponto de entrada
├── package.json
├── tsconfig.json
└── node_modules/
```

**Inicializar o projeto:**
```bash
mkdir meu-projeto && cd meu-projeto
npm init -y
npm install -D typescript tsx @types/node
```

---

### 5. tsconfig.json com strict

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

> `"strict": true` ativa um conjunto de regras que previne os erros mais comuns. Nunca desative sem motivo.

---

### 6. Scripts npm

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

- `tsx watch` recarrega automaticamente ao salvar (como nodemon, mas com TypeScript nativo)

---

### 7. Type Inference vs. Anotação Explícita

**Type inference** — TypeScript deduz o tipo sozinho:
```typescript
const nome = "Benjamin Constant"  // TypeScript sabe: string
const populacao = 42000            // TypeScript sabe: number
```

**Anotação explícita** — você declara o tipo:
```typescript
const cidade: string = "Benjamin Constant"
const populacao: number = 42000
```

**Quando anotar explicitamente?**
- Parâmetros de funções (sempre)
- Quando o tipo inferido não é o desejado
- Para documentar a intenção do código

---

### 8. Por que Evitar `any`

```typescript
// ❌ Com any — TypeScript desliga a proteção
let dado: any = "texto"
dado = 42
dado.metodoQueNaoExiste()  // Sem erro! Bug em produção.

// ✅ Com tipo correto
let dado: string = "texto"
dado = 42  // ERRO: Type 'number' is not assignable to type 'string'
```

> `any` é uma válvula de escape. Use `unknown` quando precisar de flexibilidade com segurança.

---

## 💻 Código de Exemplo Completo

**`src/server.ts` — primeiro programa:**

```typescript
// Aula 01 — Primeiro programa TypeScript

const curso: string = "Linguagem de Programação II"
const turma: number = 2025
const moderno: boolean = true

console.log(`Curso: ${curso}`)
console.log(`Turma: ${turma}`)
console.log(`Usa TypeScript: ${moderno}`)

// Type inference em ação
const alunos = ["Ana", "Bruno", "Carla"]  // TypeScript infere: string[]
// alunos.push(42)  // ← descomente para ver o erro

// Função com tipos
function saudar(nome: string): string {
  return `Olá, ${nome}! Bem-vindo ao curso.`
}

console.log(saudar("turma"))
// console.log(saudar(123))  // ← ERRO: aguardado string, recebeu number
```

**Executar:**
```bash
npm run dev
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Configuração (obrigatório)
Configure o ambiente na sua máquina e crie um projeto do zero seguindo os passos da aula. Execute `npm run dev` com sucesso.

**Entrega:** screenshot do terminal com o programa rodando.

---

### Exercício 2 — Tipos Básicos
Crie um arquivo `src/exercicio.ts` e declare variáveis com os seguintes tipos, usando valores do contexto local:

```typescript
// Declare as variáveis com os tipos corretos:
// 1. Nome de uma cidade do Alto Solimões (string)
// 2. Distância de Benjamin Constant até Tabatinga em km (number)
// 3. Se a cidade tem acesso por estrada (boolean)
// 4. Lista de rios que passam pela região (string[])
// 5. Ano de fundação da cidade (number)

// Crie uma função que recebe nome (string) e distância (number)
// e retorna uma frase descritiva (string)
```

---

### Exercício 3 — Caçada ao `any` ⭐ (desafio)
O código abaixo usa `any` em vários lugares. Substitua todos os `any` pelos tipos corretos:

```typescript
// ❌ Código problemático — corrija os tipos:
function calcularFrete(peso: any, destino: any): any {
  const tarifaBase: any = 15.5
  return `Frete para ${destino}: R$ ${peso * tarifaBase}`
}

const resultado: any = calcularFrete(10, "Atalaia do Norte")
console.log(resultado)
```

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| TypeScript Docs Oficiais | https://www.typescriptlang.org/docs | Documentação |
| TS Playground (browser) | https://www.typescriptlang.org/play | Ferramenta online |
| Node.js LTS Download | https://nodejs.org | Download |
| VS Code | https://code.visualstudio.com | Download |
| tsx (executor TS) | https://github.com/privatenumber/tsx | npm package |

---

**Próxima aula →** Aula 02 — Tipos Compostos, Interfaces e Type Aliases
