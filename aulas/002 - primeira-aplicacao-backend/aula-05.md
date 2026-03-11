# Aula 05 — Funções Tipadas e Generics

**Data:** 02/03 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** I — Fundamentos do TypeScript

---

## 🎯 Objetivos de Aprendizagem

- Declarar funções com tipagem completa de parâmetros e retorno
- Usar parâmetros opcionais `?` e com valor padrão corretamente
- Escrever arrow functions tipadas de forma concisa
- Criar funções genéricas `<T>` e entender quando utilizá-las
- Trabalhar com callbacks e higher-order functions tipadas
- Compreender closures no contexto do TypeScript

---

## 📚 Conteúdo

### 1. Declaração de Funções com Tipos

A tipagem completa documenta o contrato da função:

```typescript
// Sintaxe: parâmetros tipados + tipo de retorno
function calcularFrete(
  pesoKg: number,
  distanciaKm: number,
  urgente: boolean
): number {
  const base = pesoKg * 2.5
  const distancia = distanciaKm * 0.15
  const multiplicador = urgente ? 1.8 : 1.0
  return (base + distancia) * multiplicador
}
```

**Tipo `void`** — função sem retorno:
```typescript
function registrarLog(mensagem: string): void {
  console.log(`[${new Date().toISOString()}] ${mensagem}`)
}
```

**Tipo `never`** — função que nunca retorna (lança erro ou loop infinito):
```typescript
function lancarErro(mensagem: string): never {
  throw new Error(mensagem)
}
```

---

### 2. Parâmetros Opcionais `?` e com Valor Padrão

```typescript
// Parâmetro opcional: pode ser undefined
function saudar(nome: string, sobrenome?: string): string {
  if (sobrenome) {
    return `Olá, ${nome} ${sobrenome}!`
  }
  return `Olá, ${nome}!`
}

saudar("Maria")              // "Olá, Maria!"
saudar("Maria", "Silva")     // "Olá, Maria Silva!"

// Parâmetro com valor padrão: mais recomendado que opcional
function calcularDesconto(preco: number, percentual: number = 10): number {
  return preco * (1 - percentual / 100)
}

calcularDesconto(100)       // 90 (10% de desconto)
calcularDesconto(100, 20)   // 80 (20% de desconto)
```

> Prefira **valor padrão** a **parâmetro opcional** quando possível — o código fica mais previsível.

---

### 3. Arrow Functions Tipadas

```typescript
// Forma completa
const dobrar = (n: number): number => n * 2

// Com tipo declarado na variável
const triplicar: (n: number) => number = n => n * 3

// Arrow function com objeto como retorno (atenção aos parênteses)
const criarPassageiro = (nome: string, destino: string): { nome: string; destino: string } => ({
  nome,
  destino
})
```

---

### 4. Funções Genéricas `<T>`

Generics permitem criar funções que funcionam com **qualquer tipo**, mantendo a segurança de tipos:

**Problema sem generics:**
```typescript
// Funciona só com number — precisaria duplicar para string, boolean...
function primeiroElemento(arr: number[]): number {
  return arr[0]
}
```

**Solução com generic:**
```typescript
function primeiroElemento<T>(arr: T[]): T | undefined {
  return arr[0]
}

const n = primeiroElemento([1, 2, 3])          // TypeScript infere: number
const s = primeiroElemento(["a", "b", "c"])    // TypeScript infere: string
const v = primeiroElemento([])                 // TypeScript infere: undefined
```

**Generic com restrição (`extends`):**
```typescript
interface ComId {
  id: number
}

// T deve ter pelo menos um campo 'id'
function buscarPorId<T extends ComId>(lista: T[], id: number): T | undefined {
  return lista.find(item => item.id === id)
}
```

**Múltiplos parâmetros genéricos:**
```typescript
function criarPar<K, V>(chave: K, valor: V): [K, V] {
  return [chave, valor]
}

const par = criarPar("nome", "Benjamin Constant")  // [string, string]
const par2 = criarPar(1, true)                      // [number, boolean]
```

---

### 5. Callbacks e Higher-Order Functions

Higher-order function: função que recebe ou retorna outra função.

```typescript
// Tipo de função como parâmetro
type Transformador<T> = (item: T) => T

function aplicarTransformacao<T>(lista: T[], transformar: Transformador<T>): T[] {
  return lista.map(transformar)
}

const precos = [10, 20, 30, 40]
const comDesconto = aplicarTransformacao(precos, p => p * 0.9)
// [9, 18, 27, 36]

// Retornando uma função (factory)
function criarMultiplicador(fator: number): (n: number) => number {
  return (n: number) => n * fator
}

const dobrar = criarMultiplicador(2)
const triplicar = criarMultiplicador(3)
console.log(dobrar(5))     // 10
console.log(triplicar(5))  // 15
```

---

### 6. Closures no TypeScript

Closure: uma função que "lembra" as variáveis do escopo onde foi criada.

```typescript
function criarContador(inicial: number = 0) {
  let contagem = inicial  // variável capturada pela closure

  return {
    incrementar: (): void => { contagem++ },
    decrementar: (): void => { contagem-- },
    valor: (): number => contagem,
    resetar: (): void => { contagem = inicial }
  }
}

const contador = criarContador(10)
contador.incrementar()
contador.incrementar()
contador.incrementar()
console.log(contador.valor())  // 13
contador.resetar()
console.log(contador.valor())  // 10
```

---

## 💻 Código de Exemplo Completo

```typescript
// Aula 05 — Biblioteca de utilitários para sistema de vendas local

// ─── Tipos ────────────────────────────────────────────────
interface Item {
  id: number
  nome: string
  preco: number
  quantidade: number
}

type Filtro<T> = (item: T) => boolean
type Transformacao<T, R> = (item: T) => R

// ─── Funções genéricas utilitárias ────────────────────────
function filtrar<T>(lista: T[], filtro: Filtro<T>): T[] {
  return lista.filter(filtro)
}

function transformar<T, R>(lista: T[], transformacao: Transformacao<T, R>): R[] {
  return lista.map(transformacao)
}

function somarCampo<T>(lista: T[], obterValor: (item: T) => number): number {
  return lista.reduce((acc, item) => acc + obterValor(item), 0)
}

function buscarPorCampo<T, K extends keyof T>(
  lista: T[],
  campo: K,
  valor: T[K]
): T | undefined {
  return lista.find(item => item[campo] === valor)
}

// ─── Dados de exemplo ─────────────────────────────────────
const estoque: Item[] = [
  { id: 1, nome: "Açaí (litro)",     preco: 8.00,  quantidade: 50 },
  { id: 2, nome: "Farinha d'água",   preco: 12.50, quantidade: 30 },
  { id: 3, nome: "Pirarucu (kg)",    preco: 35.00, quantidade: 10 },
  { id: 4, nome: "Castanha (kg)",    preco: 25.00, quantidade: 20 },
  { id: 5, nome: "Banana (cacho)",   preco: 6.00,  quantidade: 15 },
]

// ─── Uso das funções ──────────────────────────────────────
const caros = filtrar(estoque, item => item.preco > 15)
console.log("Itens acima de R$15:", caros.map(i => i.nome))

const nomes = transformar(estoque, item => item.nome.toUpperCase())
console.log("Nomes em maiúsculas:", nomes)

const valorTotalEstoque = somarCampo(estoque, item => item.preco * item.quantidade)
console.log(`Valor total em estoque: R$ ${valorTotalEstoque.toFixed(2)}`)

const acai = buscarPorCampo(estoque, "nome", "Açaí (litro)")
console.log("Açaí encontrado:", acai)

// ─── Factory function com closure ─────────────────────────
function criarCarrinho() {
  const itens: Array<Item & { qtdSelecionada: number }> = []

  return {
    adicionar(item: Item, qtd: number = 1): void {
      const existente = itens.find(i => i.id === item.id)
      if (existente) {
        existente.qtdSelecionada += qtd
      } else {
        itens.push({ ...item, qtdSelecionada: qtd })
      }
    },
    total(): number {
      return somarCampo(itens, i => i.preco * i.qtdSelecionada)
    },
    listar(): void {
      itens.forEach(i => {
        console.log(`  ${i.nome} x${i.qtdSelecionada} = R$ ${(i.preco * i.qtdSelecionada).toFixed(2)}`)
      })
    }
  }
}

const carrinho = criarCarrinho()
carrinho.adicionar(estoque[0], 3)
carrinho.adicionar(estoque[2], 1)
console.log("\nCarrinho:")
carrinho.listar()
console.log(`Total: R$ ${carrinho.total().toFixed(2)}`)
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Funções Básicas Tipadas
Implemente as seguintes funções com tipagem completa:

1. `calcularIMC(peso: number, altura: number): number` — retorna o IMC
2. `classificarIMC(imc: number): string` — retorna a classificação (Abaixo do peso, Normal, Sobrepeso, Obesidade)
3. `calcularIdadeEmDias(anoNascimento: number): number` — retorna a idade em dias

---

### Exercício 2 — Generics na Prática
Implemente as seguintes funções genéricas:

```typescript
// 1. embaralhar<T>(lista: T[]): T[] — retorna o array em ordem aleatória
// 2. agrupar<T, K extends string>(lista: T[], obterChave: (item: T) => K): Record<K, T[]>
// 3. paginar<T>(lista: T[], pagina: number, tamanhoPagina: number): T[]
```

---

### Exercício 3 — Higher-Order Functions ⭐ (desafio)
Implemente um sistema de **pipeline de transformações** usando currying e closures:

```typescript
// Cada função abaixo retorna outra função (currying)
// Encadeie-as para processar uma lista de produtos

// criarFiltroPreco(min: number, max: number) => Filtro<Produto>
// criarTransformacaoDesconto(percentual: number) => Transformacao<Produto, Produto>
// criarOrdenadorPreco(ordem: "asc" | "desc") => (a: Produto, b: Produto) => number

// Exemplo de uso esperado:
// const pipeline = estoque
//   .filter(criarFiltroPreco(5, 30))
//   .map(criarTransformacaoDesconto(15))
//   .sort(criarOrdenadorPreco("asc"))
```

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| TypeScript — Generics | https://www.typescriptlang.org/docs/handbook/2/generics.html | Documentação |
| TypeScript — Functions | https://www.typescriptlang.org/docs/handbook/2/functions.html | Documentação |
| JavaScript.info — Closures | https://javascript.info/closure | Tutorial |
| Artigo: Higher-Order Functions | https://eloquentjavascript.net/05_higher_order.html | Leitura |

---

**← Aula anterior:** Aula 04 — Estruturas de Repetição e Arrays Tipados
**Próxima aula →** Aula 06 — Módulos, Variáveis de Ambiente e AV1
