---
slug: "nested-conditionals"
modulo: "Módulo 4 — Controle de Fluxo"
titulo: "Condicionais Aninhadas"
subtitulo: "Combinando decisões com operadores lógicos"
descricao: "Condicionais aninhadas, operadores lógicos (&&, ||, !), guard clauses e boas práticas."
ordem: 17
proximosPassos:
  - titulo: "Estruturas de repetição"
    descricao: "Automatize tarefas repetitivas com loops"
  - titulo: "Funções"
    descricao: "Organize código em blocos reutilizáveis"
  - titulo: "Arrays"
    descricao: "Trabalhe com listas de dados"
quiz:
  - pergunta: "O que o operador && (E) retorna?"
    opcoes: ["true se pelo menos uma condição for verdadeira", "true se ambas as condições forem verdadeiras", "true se ambas forem falsas", "Sempre true"]
    correta: 1
    explicacao: "✓ O operador && (E lógico) só retorna true quando AMBAS as condições são verdadeiras. Se qualquer uma for falsa, o resultado é false."
    explicacaoErrada: "✗ O && exige que as duas condições sejam verdadeiras. Para 'pelo menos uma', use || (OU)."
  - pergunta: "O que faz o operador ! (NÃO)?"
    opcoes: ["Compara dois valores", "Inverte o valor booleano", "Multiplica por -1", "Verifica se é nulo"]
    correta: 1
    explicacao: "✓ O ! inverte: !true vira false e !false vira true. É a negação lógica."
    explicacaoErrada: "✗ O operador ! é a negação lógica — ele inverte true para false e vice-versa."
  - pergunta: "Qual o problema de aninhar muitos if/else?"
    opcoes: ["O programa fica mais lento", "O código fica difícil de ler e manter", "Causa erros de compilação", "Não há problema nenhum"]
    correta: 1
    explicacao: "✓ Muitos níveis de aninhamento tornam o código difícil de ler, entender e modificar. Guard clauses são uma alternativa mais limpa."
    explicacaoErrada: "✗ Aninhamento excessivo não causa erro nem lentidão, mas torna o código muito difícil de ler e manter."
  - pergunta: "O que é uma guard clause?"
    opcoes: ["Um tipo de loop", "Um retorno antecipado que elimina aninhamento", "Uma variável de proteção", "Um operador lógico"]
    correta: 1
    explicacao: "✓ Guard clauses testam condições de saída no início da função e retornam imediatamente, eliminando a necessidade de else e aninhamento."
    explicacaoErrada: "✗ Guard clauses são retornos antecipados — testam condições de saída primeiro para evitar aninhamento desnecessário."
---

## Operadores logicos em TypeScript

Na aula sobre logica booleana (Modulo 2), voce conheceu os operadores logicos E, OU e NAO como conceitos da logica matematica. Agora vamos usa-los na pratica, dentro do codigo TypeScript. A sintaxe muda, mas a logica e a mesma:

| Logica | TypeScript | Significado |
| ------ | ---------- | ----------- |
| E      | `&&`       | Ambas precisam ser verdadeiras |
| OU     | `\|\|`     | Pelo menos uma precisa ser verdadeira |
| NAO    | `!`        | Inverte o valor |

```typescript
const temCarteira: boolean = true;
const idade: number = 20;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}
```

Nesse exemplo, a pessoa so pode dirigir se **ambas** as condicoes forem verdadeiras: ter 18 anos ou mais **E** ter carteira. Se qualquer uma for falsa, o bloco nao executa.

### O operador `||` (OU)

Basta que **uma** das condicoes seja verdadeira:

```typescript
const chovendo: boolean = false;
const temGuardaChuva: boolean = true;

if (!chovendo || temGuardaChuva) {
  console.log("Pode sair");
}
```

Aqui a pessoa pode sair se **nao estiver chovendo** OU se **tiver guarda-chuva**. Qualquer uma das duas condicoes verdadeiras ja basta.

### O operador `!` (NAO)

Inverte qualquer valor booleano:

```typescript
const logado: boolean = false;

if (!logado) {
  console.log("Por favor, faça login");
}
```

> [!info]
> Lembre-se da tabela-verdade da aula de logica booleana: `&&` so resulta em `true` quando **ambos** os lados sao `true`. `||` so resulta em `false` quando **ambos** os lados sao `false`. O `!` simplesmente inverte.

### Combinando operadores

Voce pode combinar multiplos operadores em uma unica expressao. Use parenteses para deixar a intencao clara:

```typescript
const idade: number = 25;
const temIngresso: boolean = true;
const ehVIP: boolean = false;

if ((idade >= 18 && temIngresso) || ehVIP) {
  console.log("Entrada permitida");
}
```

Nesse caso, a entrada e permitida se a pessoa for maior de idade **E** tiver ingresso, **OU** se for VIP (independente das outras condicoes).

> [!alerta]
> Sempre use parenteses quando combinar `&&` e `||` na mesma expressao. Sem parenteses, o `&&` tem precedencia maior que o `||`, o que pode gerar resultados inesperados.

## Condicionais aninhadas

As vezes uma decisao depende de outra. Isso gera condicionais dentro de condicionais:

```typescript
const hora: number = 14;
const diaUtil: boolean = true;

if (diaUtil) {
  if (hora >= 8 && hora < 18) {
    console.log("Expediente");
  } else {
    console.log("Fora do horário");
  }
} else {
  console.log("Fim de semana");
}
```

Cada nivel de aninhamento adiciona complexidade. A leitura fica mais dificil conforme os niveis aumentam. Veja como o codigo fica confuso com 3 niveis:

```typescript
// Difícil de ler e manter
const usuarioExiste: boolean = true;
const contaAtiva: boolean = true;
const temPermissao: boolean = false;

if (usuarioExiste) {
  if (contaAtiva) {
    if (temPermissao) {
      console.log("Acesso liberado");
    } else {
      console.log("Sem permissão");
    }
  } else {
    console.log("Conta desativada");
  }
} else {
  console.log("Usuário não encontrado");
}
```

> [!alerta]
> Evite aninhar mais de 2 niveis. Codigo muito aninhado (chamado de "pyramid of doom") fica dificil de ler, testar e modificar. Se perceber que esta aninhando muito, e hora de refatorar.

## Guard clauses --- simplificando com retorno antecipado

Guard clauses sao uma das tecnicas mais importantes para escrever codigo limpo. A ideia e simples: em vez de encapsular toda a logica em if/else, **teste as condicoes de saida primeiro e retorne imediatamente**:

```typescript
function verificarAcesso(idade: number, temIngresso: boolean): string {
  if (idade < 18) return "Proibido para menores";
  if (!temIngresso) return "Compre seu ingresso";
  return "Acesso liberado!";
}
```

Compare com a versao aninhada equivalente:

```typescript
// Versão aninhada — mais difícil de ler
function verificarAcesso(idade: number, temIngresso: boolean): string {
  if (idade >= 18) {
    if (temIngresso) {
      return "Acesso liberado!";
    } else {
      return "Compre seu ingresso";
    }
  } else {
    return "Proibido para menores";
  }
}
```

As duas funcoes fazem exatamente a mesma coisa, mas a versao com guard clauses e mais curta, mais facil de ler e mais facil de estender.

> [!sucesso]
> **Regra pratica:** se voce pode "sair cedo" de uma funcao, saia. Teste primeiro as condicoes que impedem a execucao normal (erros, valores invalidos, casos especiais) e retorne imediatamente. O codigo que sobra e o "caminho feliz" --- o caso principal.

### Mais exemplos de guard clauses

**Validacao de dados:**

```typescript
function calcularDesconto(preco: number, cupom: string): number {
  if (preco <= 0) return 0;
  if (cupom === "") return preco;

  if (cupom === "METADE") return preco * 0.5;
  if (cupom === "DEZ") return preco - 10;

  return preco; // cupom inválido, sem desconto
}
```

**Processamento de usuario:**

```typescript
function saudacao(nome: string, hora: number): string {
  if (nome === "") return "Visitante, identifique-se";
  if (hora < 0 || hora > 23) return "Hora inválida";

  if (hora < 12) return `Bom dia, ${nome}!`;
  if (hora < 18) return `Boa tarde, ${nome}!`;
  return `Boa noite, ${nome}!`;
}
```

**Verificacao de elegibilidade:**

```typescript
function podeVotar(idade: number, tituloAtivo: boolean): string {
  if (idade < 16) return "Não pode votar";
  if (!tituloAtivo) return "Regularize seu título";
  if (idade < 18 || idade > 70) return "Voto facultativo";
  return "Voto obrigatório";
}
```

Perceba o padrao: cada guard clause trata **um caso especifico** e sai da funcao. O codigo segue linear, sem nenhum aninhamento.

## Exemplo: classificacao de IMC

Um exemplo completo que aplica guard clauses para classificar o Indice de Massa Corporal:

```typescript
function classificarIMC(peso: number, altura: number): string {
  if (peso <= 0 || altura <= 0) return "Valores inválidos";

  const imc: number = peso / (altura * altura);

  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

console.log(classificarIMC(70, 1.75)); // "Peso normal"
console.log(classificarIMC(90, 1.70)); // "Sobrepeso"
console.log(classificarIMC(-5, 1.70)); // "Valores inválidos"
```

Cada `if` funciona como um filtro. Se a condicao e verdadeira, retorna imediatamente. Se nao, segue para a proxima verificacao. Sem nenhum `else` e sem aninhamento.

> [!info]
> Guard clauses nao servem apenas para funcoes com `return`. Em loops, voce pode usar `continue` para pular iteracoes (veremos isso na proxima aula sobre loops).

## Resumo: quando usar cada tecnica

| Situacao | Tecnica |
| -------- | ------- |
| Duas possibilidades simples | `if/else` |
| Varias condicoes que dependem umas das outras | `if/else if/else` |
| Combinar condicoes | Operadores `&&`, `\|\|`, `!` |
| Funcao com validacoes antes da logica principal | Guard clauses |
| Codigo com mais de 2 niveis de aninhamento | Refatore com guard clauses |
