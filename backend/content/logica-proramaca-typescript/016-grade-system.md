---
slug: "grade-system"
modulo: "Módulo 5 — Prática"
titulo: "Desafio: Sistema de Aprovação"
subtitulo: "Calculando médias e classificando alunos"
descricao: "Sistema de aprovação com type aliases, arrays de objetos, reduce para média, classificação com guard clauses e formatação de relatório."
ordem: 16
proximosPassos:
  - titulo: "Desafio: Números Primos"
    descricao: "Verifique e liste números primos"
  - titulo: "Projeto: Carrinho de Compras"
    descricao: "Simule um carrinho com arrays e funções"
quiz:
  - pergunta: "O que o type alias Aluno faz?"
    opcoes: ["Cria uma variável", "Define a estrutura de dados de um aluno", "Importa um módulo", "Cria uma classe"]
    correta: 1
    explicacao: "✓ type Aluno = { nome: string; notas: number[] } define que todo objeto Aluno deve ter nome (string) e notas (array de números)."
    explicacaoErrada: "✗ type alias define a forma (shape) de um objeto — quais propriedades ele tem e de que tipo são."
  - pergunta: "O que reduce faz neste contexto?"
    opcoes: ["Remove notas baixas", "Soma todas as notas para calcular a média", "Ordena as notas", "Conta os alunos"]
    correta: 1
    explicacao: "✓ reduce acumula a soma de todas as notas. Depois, dividimos pelo total para obter a média."
    explicacaoErrada: "✗ Aqui, reduce soma todos os elementos do array. A média é essa soma dividida pelo número de notas."
  - pergunta: "O que toFixed(1) faz?"
    opcoes: ["Arredonda para inteiro", "Formata com 1 casa decimal", "Remove decimais", "Converte para string"]
    correta: 1
    explicacao: "✓ toFixed(1) formata o número com exatamente 1 casa decimal. 8.167 vira '8.2'."
    explicacaoErrada: "✗ toFixed(n) formata o número com n casas decimais e retorna uma string."
---

## O desafio

**Problema:** dada uma lista de alunos com suas notas, calcule a media e classifique cada um.

### Definindo o tipo

```typescript
type Aluno = {
  nome: string;
  notas: number[];
};
```

O `type` alias cria um nome descritivo para a estrutura de dados. Todo `Aluno` precisa ter `nome` (string) e `notas` (array de numeros).

### Funcoes do sistema

```typescript
function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length;
}

function classificar(media: number): string {
  if (media >= 9) return "Excelente";
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}
```

Cada funcao faz **uma coisa so**: `calcularMedia` calcula, `classificar` classifica. Guard clauses tornam a classificacao linear e legivel.

### Gerando o relatorio

```typescript
function avaliarTurma(turma: Aluno[]): void {
  console.log("=".repeat(45));
  console.log("          RESULTADO DA TURMA");
  console.log("=".repeat(45));

  for (const aluno of turma) {
    const media = calcularMedia(aluno.notas);
    const status = classificar(media);
    const icone = media >= 7 ? "✓" : "✗";
    console.log(
      `${icone} ${aluno.nome.padEnd(15)} | Média: ${media.toFixed(1)} | ${status}`,
    );
  }

  console.log("=".repeat(45));
}
```

### Executando

```typescript
const turma: Aluno[] = [
  { nome: "Ana", notas: [8.0, 9.0, 7.5] },
  { nome: "Bruno", notas: [5.0, 6.0, 4.0] },
  { nome: "Carol", notas: [9.5, 10.0, 9.0] },
  { nome: "Diego", notas: [6.5, 5.5, 7.0] },
];

avaliarTurma(turma);

// → =============================================
// →           RESULTADO DA TURMA
// → =============================================
// → ✓ Ana             | Média: 8.2 | Aprovado
// → ✗ Bruno           | Média: 5.0 | Recuperação
// → ✓ Carol           | Média: 9.5 | Excelente
// → ✓ Diego           | Média: 6.3 | Recuperação
// → =============================================
```

> [!sucesso]
> Conceitos aplicados: type aliases, arrays de objetos, reduce para soma, guard clauses, for...of, template literals, `padEnd` e `toFixed` para formatacao.

## Exercicio extra

Adicione ao relatorio: a media geral da turma, o aluno com maior media e a porcentagem de aprovados:

```typescript
// Dicas:
// 1. Use map para extrair as médias de cada aluno
// 2. Use reduce para somar e calcular a média geral
// 3. Use filter para contar aprovados (média >= 7)
// 4. Use reduce ou sort para encontrar a maior média
```
