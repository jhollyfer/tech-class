# Aula 04 — Estruturas de Repetição e Arrays Tipados

**Data:** 27/02 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** I — Fundamentos do TypeScript

---

## 🎯 Objetivos de Aprendizagem

- Usar `for`, `for...of` e `while` com TypeScript de forma tipada
- Dominar os métodos funcionais de array: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.some()`, `.every()`
- Tipar corretamente arrays multidimensionais e arrays de objetos
- Usar `break` e `continue` de forma consciente
- Resolver problemas reais do contexto local com iteração e transformação de listas

---

## 📚 Conteúdo

### 1. Laço `for` Clássico

```typescript
const passageiros: string[] = ["Ana", "Bruno", "Carla", "Daniel"]

for (let i = 0; i < passageiros.length; i++) {
  console.log(`${i + 1}. ${passageiros[i]}`)
}
```

> Use `for` clássico quando precisar do índice `i` e quando quiser controle total sobre a iteração.

---

### 2. `for...of` — Iteração Direta

Mais legível quando só precisa do valor:

```typescript
const cidades: string[] = ["Benjamin Constant", "Tabatinga", "Atalaia do Norte"]

for (const cidade of cidades) {
  console.log(`Cidade: ${cidade}`)
}
```

Para iterar com índice de forma elegante:

```typescript
for (const [index, cidade] of cidades.entries()) {
  console.log(`${index + 1}. ${cidade}`)
}
```

---

### 3. `while` — Repetição por Condição

```typescript
let tentativas = 0
const maxTentativas = 3

while (tentativas < maxTentativas) {
  console.log(`Tentativa ${tentativas + 1} de conexão...`)
  tentativas++
}

console.log("Conexão encerrada após tentativas máximas.")
```

---

### 4. `break` e `continue`

```typescript
const produtos = ["arroz", "feijão", "", "açaí", "farinha"]

for (const produto of produtos) {
  if (!produto) continue  // pula strings vazias
  if (produto === "açaí") {
    console.log("Açaí encontrado! Parando a busca.")
    break  // interrompe o loop
  }
  console.log(`Produto: ${produto}`)
}
```

> **Boas práticas:** evite usar `break` excessivamente. Muitas vezes um `.find()` é mais elegante.

---

### 5. Métodos Funcionais de Array

Esses métodos não modificam o array original — eles retornam novos valores:

#### 5.1 `.map()` — Transforma cada elemento

```typescript
interface Produto {
  nome: string
  preco: number
}

const produtos: Produto[] = [
  { nome: "Açaí (kg)", preco: 8.0 },
  { nome: "Farinha d'água", preco: 12.5 },
  { nome: "Pirarucu (kg)", preco: 35.0 }
]

// Aumentar todos os preços em 10%
const precoReajustado = produtos.map(p => ({
  ...p,
  preco: p.preco * 1.1
}))

// Extrair apenas os nomes
const nomes: string[] = produtos.map(p => p.nome)
```

#### 5.2 `.filter()` — Filtra elementos por condição

```typescript
// Produtos com preço acima de R$ 10
const caros = produtos.filter(p => p.preco > 10)

// Produtos com "kg" no nome
const vendidosPorKg = produtos.filter(p => p.nome.includes("kg"))
```

#### 5.3 `.reduce()` — Acumula um resultado

```typescript
// Total do carrinho
const totalCarrinho = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco
}, 0)

console.log(`Total: R$ ${totalCarrinho.toFixed(2)}`)
```

#### 5.4 `.find()` — Encontra o primeiro elemento

```typescript
const pirarucu = produtos.find(p => p.nome.includes("Pirarucu"))
// Retorna Produto | undefined — sempre verifique!

if (pirarucu) {
  console.log(`Encontrado: ${pirarucu.nome} — R$ ${pirarucu.preco}`)
}
```

#### 5.5 `.some()` e `.every()`

```typescript
// .some() — retorna true se ALGUM elemento satisfaz a condição
const temProdutoCaro = produtos.some(p => p.preco > 30)
console.log(`Tem produto acima de R$30: ${temProdutoCaro}`)

// .every() — retorna true se TODOS satisfazem a condição
const todosMaisDeUmReal = produtos.every(p => p.preco > 1)
console.log(`Todos acima de R$1: ${todosMaisDeUmReal}`)
```

---

### 6. Arrays Multidimensionais e de Objetos

```typescript
// Array de arrays (matriz)
const rotasFluviais: string[][] = [
  ["Benjamin Constant", "Atalaia do Norte", "Tabatinga"],
  ["Tabatinga", "São Paulo de Olivença", "Amaturá"],
]

for (const rota of rotasFluviais) {
  console.log(`Rota: ${rota.join(" → ")}`)
}

// Array de objetos complexos
interface Passageiro {
  nome: string
  destino: string
  bagagemKg: number
}

const manifesto: Passageiro[] = [
  { nome: "Maria Silva", destino: "Tabatinga", bagagemKg: 15 },
  { nome: "João Santos", destino: "Atalaia do Norte", bagagemKg: 8 },
  { nome: "Ana Costa", destino: "Tabatinga", bagagemKg: 22 }
]
```

---

## 💻 Código de Exemplo Completo

```typescript
// Aula 04 — Processamento de manifesto de passageiros

interface Passageiro {
  id: number
  nome: string
  destino: string
  bagagemKg: number
  pagou: boolean
}

const manifesto: Passageiro[] = [
  { id: 1, nome: "Maria Silva",   destino: "Tabatinga",        bagagemKg: 15, pagou: true  },
  { id: 2, nome: "João Santos",   destino: "Atalaia do Norte", bagagemKg: 8,  pagou: false },
  { id: 3, nome: "Ana Costa",     destino: "Tabatinga",        bagagemKg: 22, pagou: true  },
  { id: 4, nome: "Pedro Lima",    destino: "Tabatinga",        bagagemKg: 5,  pagou: true  },
  { id: 5, nome: "Lucia Matos",   destino: "Atalaia do Norte", bagagemKg: 30, pagou: false },
]

const LIMITE_BAGAGEM_KG = 20
const TARIFA_EXCESSO_POR_KG = 5.0

// 1. Quem ainda não pagou?
const inadimplentes = manifesto.filter(p => !p.pagou)
console.log("Passageiros inadimplentes:")
inadimplentes.forEach(p => console.log(`  - ${p.nome} (${p.destino})`))

// 2. Quem tem excesso de bagagem?
const excessoBagagem = manifesto
  .filter(p => p.bagagemKg > LIMITE_BAGAGEM_KG)
  .map(p => ({
    nome: p.nome,
    excesoKg: p.bagagemKg - LIMITE_BAGAGEM_KG,
    taxa: (p.bagagemKg - LIMITE_BAGAGEM_KG) * TARIFA_EXCESSO_POR_KG
  }))

console.log("\nExcesso de bagagem:")
for (const item of excessoBagagem) {
  console.log(`  - ${item.nome}: +${item.excesoKg}kg = R$ ${item.taxa.toFixed(2)}`)
}

// 3. Total de bagagem por destino (reduce)
const bagagemPorDestino = manifesto.reduce<Record<string, number>>((acc, p) => {
  acc[p.destino] = (acc[p.destino] ?? 0) + p.bagagemKg
  return acc
}, {})

console.log("\nTotal de bagagem por destino:")
for (const [destino, total] of Object.entries(bagagemPorDestino)) {
  console.log(`  ${destino}: ${total}kg`)
}

// 4. A viagem pode partir? (every + some)
const todosVacinados = manifesto.every(p => p.pagou)  // simplificado
const algumCritico = manifesto.some(p => p.bagagemKg > 40)
console.log(`\nTodos pagaram: ${todosVacinados}`)
console.log(`Alguma bagagem crítica (>40kg): ${algumCritico}`)
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Laços Básicos
Dado um array de números representando cotas de produção de farinha (em sacos) de 7 agricultores:

```typescript
const producao: number[] = [45, 32, 67, 28, 89, 41, 55]
```

Use `for` clássico para imprimir cada valor com seu índice, depois use `for...of` para somar o total.

---

### Exercício 2 — Pipeline Funcional
Com o manifesto abaixo, resolva **sem usar `for`** (apenas métodos de array):

```typescript
interface Aluno {
  nome: string
  nota: number
  frequencia: number  // percentual 0-100
}

const turma: Aluno[] = [
  { nome: "Ana",    nota: 8.5, frequencia: 92 },
  { nome: "Bruno",  nota: 5.0, frequencia: 78 },
  { nome: "Carla",  nota: 9.2, frequencia: 95 },
  { nome: "Diego",  nota: 6.8, frequencia: 60 },  // reprovado por falta
  { nome: "Elaine", nota: 7.1, frequencia: 88 },
]

// Crie:
// 1. Lista de aprovados (nota >= 7 E frequencia >= 75)
// 2. Média da turma (use .reduce())
// 3. Nome do melhor aluno (maior nota) — use .reduce()
// 4. A turma toda atingiu frequência mínima? (.every())
// 5. Algum aluno tirou 10? (.some())
```

---

### Exercício 3 — Agrupamento com reduce ⭐ (desafio)
Agrupe os produtos abaixo por categoria, resultando em um objeto `Record<string, Produto[]>`:

```typescript
interface Produto {
  nome: string
  categoria: "alimento" | "bebida" | "limpeza"
  preco: number
}

const estoque: Produto[] = [
  { nome: "Arroz", categoria: "alimento", preco: 6.0 },
  { nome: "Feijão", categoria: "alimento", preco: 8.5 },
  { nome: "Água mineral", categoria: "bebida", preco: 3.0 },
  { nome: "Refrigerante", categoria: "bebida", preco: 7.0 },
  { nome: "Detergente", categoria: "limpeza", preco: 4.5 },
]
```

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| MDN — Array methods | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array | Documentação |
| JavaScript.info — Array methods | https://javascript.info/array-methods | Tutorial |
| TypeScript — Iterators | https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html | Documentação |

---

**← Aula anterior:** Aula 03 — Estruturas Condicionais e Type Guards
**Próxima aula →** Aula 05 — Funções Tipadas e Generics
