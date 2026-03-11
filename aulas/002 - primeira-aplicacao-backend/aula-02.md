# Aula 02 — Tipos Compostos, Interfaces e Type Aliases

**Data:** 25/02 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** I — Fundamentos do TypeScript

---

## 🎯 Objetivos de Aprendizagem

- Modelar dados do mundo real com objetos tipados, propriedades opcionais e readonly
- Distinguir `type` alias de `interface` e escolher o mais adequado para cada caso
- Criar union types e intersection types para representar variações de dados
- Usar literal types para restringir valores possíveis de uma variável
- Aplicar utility types nativos (`Partial`, `Required`, `Omit`, `Pick`) para transformar tipos existentes
- Modelar domínios locais (sistemas regionais, cadastros) com tipos TypeScript

---

## 📚 Conteúdo

### 1. Objetos Tipados

Em TypeScript, a forma de um objeto é descrita por seus campos e tipos:

```typescript
// Objeto inline tipado
const embarcacao: { nome: string; capacidade: number; ativa: boolean } = {
  nome: "Barco Sol do Solimões",
  capacidade: 120,
  ativa: true
}
```

Essa sintaxe fica verbosa rapidamente — é aí que entram `interface` e `type`.

---

### 2. Propriedades Opcionais `?` e Readonly

```typescript
interface Produto {
  id: number
  nome: string
  descricao?: string     // opcional — pode ser undefined
  readonly codigo: string // somente leitura — não pode ser alterado após criação
}

const p: Produto = { id: 1, nome: "Açaí", codigo: "ACA001" }
// p.codigo = "XYZ"  // ← ERRO: Cannot assign to 'codigo' because it is a read-only property
```

> `readonly` é ideal para identificadores que não devem mudar (IDs, códigos de sistema).

---

### 3. Arrays Tipados

```typescript
// Sintaxe 1 — mais comum
const cidades: string[] = ["Benjamin Constant", "Atalaia do Norte", "Tabatinga"]

// Sintaxe 2 — genérica (equivalente)
const populacoes: Array<number> = [42000, 15000, 65000]

// Array de objetos
interface Municipio {
  nome: string
  populacao: number
}

const municipios: Municipio[] = [
  { nome: "Benjamin Constant", populacao: 42000 },
  { nome: "Tabatinga", populacao: 65000 }
]
```

---

### 4. `type` alias vs. `interface`

| Característica | `interface` | `type` |
|---|---|---|
| Extensão | `extends` (herança) | `&` (intersection) |
| Reabertura (declaration merging) | ✅ Sim | ❌ Não |
| Union types | ❌ Não | ✅ Sim |
| Primitivos e tuplas | ❌ Não | ✅ Sim |
| Uso recomendado | Objetos / contratos de API | Tudo o mais |

```typescript
// Interface — ideal para objetos e contratos
interface Usuario {
  id: number
  nome: string
  email: string
}

// Type — ideal para unions, primitivos, composições
type ID = string | number
type Status = "ativo" | "inativo" | "pendente"
```

> **Regra prática:** use `interface` para objetos que descrevem entidades do seu sistema. Use `type` para todo o resto.

---

### 5. Union Types: `string | number`

Union type significa "pode ser um **ou** outro":

```typescript
type IDDocumento = string | number

function buscarPessoa(id: IDDocumento): void {
  if (typeof id === "string") {
    console.log(`Buscando por CPF: ${id}`)
  } else {
    console.log(`Buscando por código: ${id}`)
  }
}

buscarPessoa("123.456.789-00")
buscarPessoa(42)
```

---

### 6. Intersection Types: `TypeA & TypeB`

Intersection type significa "tem **todos** os campos de A **e** de B":

```typescript
interface Endereco {
  rua: string
  cidade: string
  estado: string
}

interface Contato {
  telefone: string
  email: string
}

type PessoaCompleta = Endereco & Contato

const pessoa: PessoaCompleta = {
  rua: "Av. Castelo Branco",
  cidade: "Benjamin Constant",
  estado: "AM",
  telefone: "(97) 9xxxx-xxxx",
  email: "contato@exemplo.com"
}
```

---

### 7. Literal Types

Restringem uma variável a um conjunto fixo de valores:

```typescript
type DirecaoVento = "Norte" | "Sul" | "Leste" | "Oeste"
type NivelRio = "baixo" | "normal" | "cheio" | "transbordando"
type StatusViagem = "agendada" | "em_andamento" | "concluida" | "cancelada"

function alertarRio(nivel: NivelRio): void {
  if (nivel === "transbordando") {
    console.log("⚠️ ALERTA: Rio em nível crítico!")
  }
}

alertarRio("transbordando")  // ✅
// alertarRio("seco")         // ❌ ERRO: Argument of type '"seco"' is not assignable
```

---

### 8. Utility Types Nativos

TypeScript oferece tipos utilitários para transformar tipos existentes:

```typescript
interface Embarcacao {
  id: number
  nome: string
  capacidade: number
  destino: string
  proprietario: string
}

// Partial<T> — todos os campos viram opcionais (útil para updates)
type AtualizarEmbarcacao = Partial<Embarcacao>

// Required<T> — todos os campos viram obrigatórios
type EmbarcacaoCompleta = Required<Embarcacao>

// Pick<T, K> — pega apenas os campos escolhidos
type ResumoEmbarcacao = Pick<Embarcacao, "id" | "nome" | "capacidade">

// Omit<T, K> — remove os campos escolhidos
type EmbarcacaoSemID = Omit<Embarcacao, "id">
```

---

## 💻 Código de Exemplo Completo

```typescript
// Aula 02 — Modelagem de domínio: Sistema de Embarcações

// ─── Tipos base ───────────────────────────────────────────
type StatusViagem = "agendada" | "em_andamento" | "concluida" | "cancelada"
type TipoEmbarcacao = "lancha" | "barco_regional" | "balsa" | "canoa_motor"

// ─── Interfaces ───────────────────────────────────────────
interface Passageiro {
  id: number
  nome: string
  cpf: string
  destino: string
  bagagemKg?: number  // opcional
}

interface Embarcacao {
  readonly id: number
  nome: string
  tipo: TipoEmbarcacao
  capacidadePassageiros: number
  capacidadeCargaKg: number
}

interface Viagem {
  readonly codigo: string
  embarcacao: Embarcacao
  origem: string
  destino: string
  dataPartida: string
  status: StatusViagem
  passageiros: Passageiro[]
}

// ─── Utility types em uso ─────────────────────────────────
type NovaViagem = Omit<Viagem, "codigo" | "passageiros" | "status">
type ResumoViagem = Pick<Viagem, "codigo" | "origem" | "destino" | "status">

// ─── Dados de exemplo ─────────────────────────────────────
const lanchaRapida: Embarcacao = {
  id: 1,
  nome: "Flecha do Javari",
  tipo: "lancha",
  capacidadePassageiros: 40,
  capacidadeCargaKg: 500
}

const viagem: Viagem = {
  codigo: "VGM-2025-001",
  embarcacao: lanchaRapida,
  origem: "Benjamin Constant",
  destino: "Tabatinga",
  dataPartida: "2025-03-01T08:00:00",
  status: "agendada",
  passageiros: []
}

// ─── Funções tipadas ──────────────────────────────────────
function exibirResumo(resumo: ResumoViagem): void {
  console.log(`[${resumo.codigo}] ${resumo.origem} → ${resumo.destino} (${resumo.status})`)
}

exibirResumo(viagem)
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Modelagem de Entidades
Crie tipos e interfaces para um sistema de **comércio local** de Benjamin Constant. Modele:

1. `Produto` — com id, nome, preço, categoria (`"alimenticio" | "eletronico" | "vestuario" | "outros"`), e estoque opcional
2. `Vendedor` — com id, nome, cpf, e endereço (crie uma interface `Endereco` separada e use intersection)
3. `Venda` — com código, vendedor, lista de produtos, total, data e status (`"pendente" | "paga" | "cancelada"`)

---

### Exercício 2 — Utility Types na Prática
Com base nos tipos do Exercício 1:

```typescript
// Crie os seguintes tipos derivados:
// 1. AtualizarProduto — todos os campos de Produto ficam opcionais (Partial)
// 2. CadastroProduto — igual a Produto mas sem o campo 'id' (Omit)
// 3. ListagemProduto — apenas 'id', 'nome' e 'preco' (Pick)

// Crie uma função que recebe CadastroProduto e retorna Produto (adicione um id)
```

---

### Exercício 3 — Discriminated Union ⭐ (desafio)
Crie um tipo que represente diferentes formas de pagamento com campos específicos para cada uma:

```typescript
// Dica: use um campo "tipo" como discriminador
type Pagamento =
  | { tipo: "dinheiro"; valorRecebido: number }
  | { tipo: "pix"; chave: string; comprovante: string }
  | { tipo: "credito"; parcelas: number; bandeira: string }

// Crie uma função calcularTroco(pagamento: Pagamento, total: number): string
// que lida com cada tipo de pagamento de forma diferente
```

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| TypeScript — Interfaces | https://www.typescriptlang.org/docs/handbook/interfaces.html | Documentação |
| TypeScript — Type Aliases | https://www.typescriptlang.org/docs/handbook/advanced-types.html | Documentação |
| TypeScript — Utility Types | https://www.typescriptlang.org/docs/handbook/utility-types.html | Documentação |
| TS Playground | https://www.typescriptlang.org/play | Ferramenta online |

---

**← Aula anterior:** Aula 01 — Introdução ao TypeScript
**Próxima aula →** Aula 03 — Estruturas Condicionais e Type Guards
