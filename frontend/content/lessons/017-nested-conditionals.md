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

## Operadores lógicos em TypeScript

Condições simples nem sempre bastam. Os operadores lógicos combinam múltiplas condições em uma só expressão:

```typescript
const temCarteira = true;
const idade = 20;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}
```

Os três operadores lógicos:

- **`&&` (E)** — ambas as condições precisam ser verdadeiras. `true && true` resulta em `true`. Qualquer `false` torna tudo `false`.
- **`||` (OU)** — pelo menos uma condição precisa ser verdadeira. `false || true` resulta em `true`. Só é `false` quando ambas são `false`.
- **`!` (NÃO)** — inverte o valor. `!true` vira `false`, `!false` vira `true`.

```typescript
const chovendo = false;
const temGuardaChuva = true;

if (!chovendo || temGuardaChuva) {
  console.log("Pode sair");
}
```

## Condicionais aninhadas

Às vezes uma decisão depende de outra. Isso gera condicionais dentro de condicionais:

```typescript
const hora = 14;
const diaUtil = true;

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

Cada nível de aninhamento adiciona complexidade. A leitura fica mais difícil conforme os níveis aumentam.

> [!alerta]
> Evite aninhar mais de 2-3 níveis. Código muito aninhado fica difícil de ler. Se passar disso, refatore usando guard clauses ou funções auxiliares.

## Guard clauses — simplificando com retorno antecipado

Guard clauses são uma técnica que elimina aninhamento. Em vez de encapsular toda a lógica em if/else, teste as condições de saída primeiro e retorne imediatamente:

```typescript
function verificarAcesso(idade: number, temIngresso: boolean): string {
  if (idade < 18) return "Proibido para menores";
  if (!temIngresso) return "Compre seu ingresso";
  return "Acesso liberado!";
}
```

Compare com a versão aninhada equivalente:

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

> [!sucesso]
> Guard clauses eliminam aninhamento. Em vez de if/else/else/else, teste as condições de saída primeiro. O código fica linear e mais fácil de seguir.

## Exemplo: classificação de IMC

Um exemplo real que aplica guard clauses para classificar o Índice de Massa Corporal:

```typescript
function classificarIMC(peso: number, altura: number): string {
  const imc = peso / (altura * altura);

  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

console.log(classificarIMC(70, 1.75)); // "Peso normal"
console.log(classificarIMC(90, 1.70)); // "Sobrepeso"
```

Cada `if` funciona como um filtro. Se a condição é verdadeira, retorna imediatamente. Se não, segue para a próxima verificação. Sem nenhum `else` e sem aninhamento.
