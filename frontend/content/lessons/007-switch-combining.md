---
slug: "switch-combining"
modulo: "Módulo 3 — Controle de Fluxo"
titulo: "switch/case e Combinando Condições"
subtitulo: "Múltiplas opções fixas e operadores lógicos na prática"
descricao: "switch/case para comparações diretas, operadores lógicos (&&, ||, !) para combinar condições, guard clauses e boas práticas."
ordem: 7
proximosPassos:
  - titulo: "Loops"
    descricao: "Automatize tarefas repetitivas com loops"
  - titulo: "Arrays"
    descricao: "Agrupe dados em listas"
quiz:
  - pergunta: "Quando usar switch em vez de if/else if?"
    opcoes: ["Quando há apenas 2 opções", "Quando há muitos valores fixos para comparar", "Quando a condição usa maior/menor", "Nunca, switch é obsoleto"]
    correta: 1
    explicacao: "✓ switch é ideal quando você compara uma variável contra vários valores fixos (strings, números). Fica mais legível que uma cadeia longa de if/else if."
    explicacaoErrada: "✗ switch é útil quando há muitos valores fixos para comparar. Para condições com >, <, >=, use if/else."
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
  - pergunta: "O que é uma guard clause?"
    opcoes: ["Um tipo de loop", "Um retorno antecipado que elimina aninhamento", "Uma variável de proteção", "Um operador lógico"]
    correta: 1
    explicacao: "✓ Guard clauses testam condições de saída no início da função e retornam imediatamente, eliminando a necessidade de else e aninhamento."
    explicacaoErrada: "✗ Guard clauses são retornos antecipados — testam condições de saída primeiro para evitar aninhamento desnecessário."
---

## switch/case --- comparando valores fixos

O `switch` compara uma variavel contra valores especificos. E mais legivel que varios `else if` quando se trata de comparar uma unica variavel contra muitos valores fixos:

```typescript
const diaDaSemana: string = "segunda";

switch (diaDaSemana) {
  case "sábado":
  case "domingo":
    console.log("Fim de semana — sem aula!");
    break;
  case "segunda":
  case "quarta":
  case "sexta":
    console.log("Aula de Lógica de Programação");
    break;
  default:
    console.log("Dia útil normal");
}
```

Cada `case` compara o valor. O `break` encerra o switch --- sem ele, a execucao "cai" para o proximo case (isso se chama **fall-through**). O `default` funciona como o `else`: executa quando nenhum case corresponde.

> [!alerta]
> Nao esqueca o `break`! Sem ele, o codigo "cai" para o proximo `case` automaticamente. Esse comportamento (fall-through) e proposital em alguns casos (como agrupar sabado e domingo), mas geralmente e um bug.

Outro exemplo pratico --- um menu de opcoes:

```typescript
const opcao: number = 2;

switch (opcao) {
  case 1:
    console.log("Cadastrar novo aluno");
    break;
  case 2:
    console.log("Consultar notas");
    break;
  case 3:
    console.log("Gerar relatório");
    break;
  default:
    console.log("Opção inválida. Escolha 1, 2 ou 3.");
}
```

> [!sucesso]
> Use `switch` quando comparar uma variavel contra **valores fixos e conhecidos** (como dias da semana, opcoes de menu, codigos). Para condicoes com `>`, `<`, `>=` ou intervalos, use `if/else if`.

## Operadores logicos

Operadores logicos combinam condicoes booleanas. Sao essenciais para criar decisoes mais complexas:

| Operador | Nome      | Resultado                                     |
| -------- | --------- | --------------------------------------------- |
| `&&`     | AND (E)   | `true` somente se **ambos** forem verdadeiros |
| `\|\|`   | OR (OU)   | `true` se **pelo menos um** for verdadeiro    |
| `!`      | NOT (NÃO) | Inverte o booleano                            |

```typescript
const idade: number = 20;
const temCarteira: boolean = true;

// AND — ambas precisam ser verdadeiras
const podeConduizir = idade >= 18 && temCarteira; // true

// OR — basta uma ser verdadeira
const podeEntrar = idade >= 18 || temCarteira; // true

// NOT — inverte
const menorIdade = !(idade >= 18); // false
```

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

### Exemplo pratico: validacao de acesso

```typescript
const chovendo: boolean = false;
const temGuardaChuva: boolean = true;

if (!chovendo || temGuardaChuva) {
  console.log("Pode sair");
}

const logado: boolean = false;

if (!logado) {
  console.log("Por favor, faça login");
}
```

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
> **Regra pratica:** se voce pode "sair cedo" de uma funcao, saia. Teste primeiro as condicoes que impedem a execucao normal e retorne imediatamente. O codigo que sobra e o "caminho feliz".

### Mais exemplos

```typescript
function calcularDesconto(preco: number, cupom: string): number {
  if (preco <= 0) return 0;
  if (cupom === "") return preco;

  if (cupom === "METADE") return preco * 0.5;
  if (cupom === "DEZ") return preco - 10;

  return preco; // cupom inválido, sem desconto
}

function podeVotar(idade: number, tituloAtivo: boolean): string {
  if (idade < 16) return "Não pode votar";
  if (!tituloAtivo) return "Regularize seu título";
  if (idade < 18 || idade > 70) return "Voto facultativo";
  return "Voto obrigatório";
}
```

Perceba o padrao: cada guard clause trata **um caso especifico** e sai da funcao. O codigo segue linear, sem nenhum aninhamento.

## Resumo: quando usar cada tecnica

| Situacao | Tecnica |
| -------- | ------- |
| Muitos valores fixos para comparar | `switch/case` |
| Combinar condicoes | Operadores `&&`, `\|\|`, `!` |
| Funcao com validacoes antes da logica principal | Guard clauses |
| Codigo com mais de 2 niveis de aninhamento | Refatore com guard clauses |
