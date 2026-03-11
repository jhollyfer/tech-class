# Aula 03 — Estruturas Condicionais e Type Guards

**Data:** 26/02 | **Carga horária:** 4h (1h teoria + 3h prática)
**Unidade:** I — Fundamentos do TypeScript

---

## 🎯 Objetivos de Aprendizagem

- Usar `if/else`, operador ternário e `switch` com TypeScript de forma tipada
- Aplicar type narrowing com `typeof`, `instanceof` e `in`
- Modelar decisões seguras com discriminated unions
- Escrever código condicional legível seguindo boas práticas
- Relacionar as estruturas condicionais a problemas do contexto local

---

## 📚 Conteúdo

### 1. `if/else` com TypeScript

TypeScript adiciona verificação de tipos nas condicionais — o compilador entende o que é possível dentro de cada branch:

```typescript
function verificarIdade(idade: number): string {
  if (idade < 0) {
    return "Idade inválida"
  } else if (idade < 18) {
    return "Menor de idade"
  } else {
    return "Maior de idade"
  }
}
```

---

### 2. Operador Ternário

```typescript
// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso
const nivel = 8.5
const aprovado = nivel >= 7 ? "Aprovado" : "Reprovado"
console.log(aprovado)  // "Aprovado"

// Evitar ternários aninhados — prejudicam a legibilidade
// ❌ Difícil de ler:
const resultado = nivel >= 9 ? "Excelente" : nivel >= 7 ? "Aprovado" : "Reprovado"

// ✅ Use if/else para 3+ condições
```

---

### 3. `switch` com TypeScript

Ideal para múltiplas condições sobre o mesmo valor, especialmente com literal types:

```typescript
type StatusRio = "baixo" | "normal" | "cheio" | "transbordando"

function mensagemAlerta(status: StatusRio): string {
  switch (status) {
    case "baixo":
      return "Atenção: nível baixo, navegação reduzida."
    case "normal":
      return "Condições normais de navegação."
    case "cheio":
      return "Cuidado: correnteza forte."
    case "transbordando":
      return "⚠️ ALERTA: suspenda as viagens imediatamente!"
    // Com literal type, TypeScript sabe que cobrimos todos os casos
  }
}
```

> Quando usamos um literal type no `switch`, TypeScript avisa se deixarmos algum caso sem tratar (exhaustiveness check).

---

### 4. Type Narrowing — Refinamento de Tipos

Type narrowing é o processo de **reduzir** um tipo amplo para um tipo mais específico dentro de um bloco de código.

#### 4.1 `typeof`

```typescript
function processar(valor: string | number): string {
  if (typeof valor === "string") {
    // Aqui TypeScript sabe que 'valor' é string
    return valor.toUpperCase()
  } else {
    // Aqui TypeScript sabe que 'valor' é number
    return valor.toFixed(2)
  }
}
```

#### 4.2 `instanceof`

```typescript
class ErroDeNegocio extends Error {
  constructor(mensagem: string, public codigo: number) {
    super(mensagem)
  }
}

function tratarErro(erro: Error): void {
  if (erro instanceof ErroDeNegocio) {
    // TypeScript sabe que 'erro' é ErroDeNegocio aqui
    console.log(`Erro de negócio [${erro.codigo}]: ${erro.message}`)
  } else {
    console.log(`Erro inesperado: ${erro.message}`)
  }
}
```

#### 4.3 `in` — verificar se propriedade existe

```typescript
interface Barco {
  nome: string
  capacidade: number
}

interface Aviao {
  modelo: string
  altitude: number
}

type Transporte = Barco | Aviao

function descreverTransporte(t: Transporte): string {
  if ("capacidade" in t) {
    // TypeScript sabe que é Barco
    return `Barco "${t.nome}" com ${t.capacidade} lugares`
  } else {
    // TypeScript sabe que é Aviao
    return `Avião modelo ${t.modelo}, altitude max ${t.altitude}m`
  }
}
```

---

### 5. Discriminated Unions — A Forma Mais Segura

Discriminated union usa um campo literal como "chave" para distinguir variantes. É a abordagem mais recomendada:

```typescript
type EventoViagem =
  | { tipo: "partida"; hora: string; embarcacao: string }
  | { tipo: "atraso"; motivo: string; novaHora: string }
  | { tipo: "cancelamento"; motivo: string; reembolso: boolean }
  | { tipo: "chegada"; hora: string; portao: number }

function processarEvento(evento: EventoViagem): void {
  switch (evento.tipo) {
    case "partida":
      console.log(`🛥️  ${evento.embarcacao} partiu às ${evento.hora}`)
      break
    case "atraso":
      console.log(`⏳ Atraso: ${evento.motivo}. Nova hora: ${evento.novaHora}`)
      break
    case "cancelamento":
      const reembolso = evento.reembolso ? "com reembolso" : "sem reembolso"
      console.log(`❌ Cancelado (${reembolso}): ${evento.motivo}`)
      break
    case "chegada":
      console.log(`✅ Chegou às ${evento.hora}, portão ${evento.portao}`)
      break
  }
}
```

---

### 6. Boas Práticas de Legibilidade

```typescript
// ❌ Condições aninhadas demais (Pyramid of Doom)
function validarCadastro(nome: string, cpf: string, idade: number) {
  if (nome) {
    if (cpf) {
      if (idade >= 18) {
        // lógica principal aqui
      }
    }
  }
}

// ✅ Early return — inverta as condições e retorne cedo
function validarCadastro(nome: string, cpf: string, idade: number): string {
  if (!nome) return "Nome é obrigatório"
  if (!cpf) return "CPF é obrigatório"
  if (idade < 18) return "Usuário deve ser maior de idade"

  return "Cadastro válido"
}
```

---

## 💻 Código de Exemplo Completo

```typescript
// Aula 03 — Sistema de monitoramento de nível do Rio Javari

type NivelRio = "critico_baixo" | "baixo" | "normal" | "alto" | "critico_alto"
type TipoAlerta = "info" | "atencao" | "perigo"

interface MedicaoRio {
  data: string
  nivelMetros: number
  localidade: string
}

interface Alerta {
  tipo: TipoAlerta
  mensagem: string
  acaoRecomendada: string
}

// Type guard customizado
function isNivelCritico(nivel: NivelRio): nivel is "critico_baixo" | "critico_alto" {
  return nivel === "critico_baixo" || nivel === "critico_alto"
}

function classificarNivel(metros: number): NivelRio {
  if (metros < 1.0) return "critico_baixo"
  if (metros < 3.0) return "baixo"
  if (metros < 7.0) return "normal"
  if (metros < 10.0) return "alto"
  return "critico_alto"
}

function gerarAlerta(nivel: NivelRio): Alerta {
  switch (nivel) {
    case "critico_baixo":
      return {
        tipo: "perigo",
        mensagem: "Nível crítico — navegação impossível em vários trechos.",
        acaoRecomendada: "Suspender todas as viagens fluviais."
      }
    case "baixo":
      return {
        tipo: "atencao",
        mensagem: "Nível baixo — cuidado com bancos de areia.",
        acaoRecomendada: "Apenas embarcações de pequeno calado."
      }
    case "normal":
      return {
        tipo: "info",
        mensagem: "Condições normais de navegação.",
        acaoRecomendada: "Operação regular."
      }
    case "alto":
      return {
        tipo: "atencao",
        mensagem: "Nível alto — correnteza forte.",
        acaoRecomendada: "Redobrar atenção em curvas e estreitamentos."
      }
    case "critico_alto":
      return {
        tipo: "perigo",
        mensagem: "TRANSBORDAMENTO iminente — risco às margens.",
        acaoRecomendada: "Acionar Defesa Civil e suspender operações."
      }
  }
}

function monitorar(medicao: MedicaoRio): void {
  const nivel = classificarNivel(medicao.nivelMetros)
  const alerta = gerarAlerta(nivel)

  console.log(`\n📍 ${medicao.localidade} — ${medicao.data}`)
  console.log(`📏 Nível: ${medicao.nivelMetros}m (${nivel})`)
  console.log(`[${alerta.tipo.toUpperCase()}] ${alerta.mensagem}`)
  console.log(`→ Ação: ${alerta.acaoRecomendada}`)

  if (isNivelCritico(nivel)) {
    console.log("🚨 SITUAÇÃO CRÍTICA — Notifique as autoridades!")
  }
}

// Testes
monitorar({ data: "2025-02-26", nivelMetros: 5.2, localidade: "Benjamin Constant" })
monitorar({ data: "2025-02-26", nivelMetros: 11.3, localidade: "Atalaia do Norte" })
monitorar({ data: "2025-02-26", nivelMetros: 0.8, localidade: "São Paulo de Olivença" })
```

---

## 🛠️ Exercícios Práticos

### Exercício 1 — Type Narrowing Básico
Crie uma função `formatarValor(valor: string | number | boolean): string` que:
- Se for `string`: retorna em maiúsculas
- Se for `number`: formata como moeda brasileira (`R$ X,XX`)
- Se for `boolean`: retorna `"Sim"` ou `"Não"`

---

### Exercício 2 — Switch com Discriminated Union
Modele um sistema de notificações para um aplicativo de comércio local:

```typescript
type Notificacao =
  | { tipo: "novo_pedido"; numeroPedido: string; cliente: string }
  | { tipo: "pagamento"; valor: number; metodo: string }
  | { tipo: "entrega"; endereco: string; previsao: string }
  | { tipo: "erro"; codigo: number; descricao: string }

// Implemente: function processarNotificacao(n: Notificacao): void
```

---

### Exercício 3 — Early Return na Prática ⭐ (desafio)
Refatore a função abaixo para usar early return, eliminando o aninhamento:

```typescript
// ❌ Refatore este código:
function registrarVenda(
  produto: string,
  quantidade: number,
  preco: number,
  comprador: string
): string {
  if (produto) {
    if (quantidade > 0) {
      if (preco > 0) {
        if (comprador) {
          const total = quantidade * preco
          return `Venda registrada: ${quantidade}x ${produto} para ${comprador} = R$ ${total}`
        } else {
          return "Comprador não informado"
        }
      } else {
        return "Preço inválido"
      }
    } else {
      return "Quantidade inválida"
    }
  } else {
    return "Produto não informado"
  }
}
```

---

## 📎 Recursos e Referências

| Recurso | Link | Tipo |
|---|---|---|
| TypeScript — Narrowing | https://www.typescriptlang.org/docs/handbook/2/narrowing.html | Documentação |
| TypeScript — Discriminated Unions | https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions | Documentação |
| Artigo: Early Return Pattern | https://dev.to/jpswade/return-early-pattern-4cgn | Leitura |

---

**← Aula anterior:** Aula 02 — Tipos Compostos, Interfaces e Type Aliases
**Próxima aula →** Aula 04 — Estruturas de Repetição e Arrays Tipados
