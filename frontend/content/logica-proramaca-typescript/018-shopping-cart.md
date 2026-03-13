---
slug: "shopping-cart"
modulo: "Módulo 5 — Prática"
titulo: "Projeto: Carrinho de Compras"
subtitulo: "Arrays, funções e type aliases em um sistema real"
descricao: "Carrinho de compras com type aliases, imutabilidade, map/find/reduce, adicionar produtos, calcular total e exibir relatório."
ordem: 18
proximosPassos:
  - titulo: "Projeto: Jogo da Velha"
    descricao: "Jogo completo no terminal"
  - titulo: "Próximos passos"
    descricao: "O que estudar depois de lógica"
quiz:
  - pergunta: "O que o spread operator (...) faz com arrays?"
    opcoes: ["Deleta o array", "Cria uma cópia do array com os elementos espalhados", "Ordena o array", "Inverte o array"]
    correta: 1
    explicacao: "✓ O spread (...) espalha os elementos de um array. [...carrinho, novoProduto] cria um novo array com todos os itens anteriores mais o novo."
    explicacaoErrada: "✗ O spread (...) copia os elementos para um novo array. É a base da imutabilidade — nunca modifica o original."
  - pergunta: "Por que as funções retornam um novo array em vez de modificar o original?"
    opcoes: ["Por obrigação do TypeScript", "Para manter imutabilidade — o original fica intacto, evitando bugs", "Porque arrays não podem ser modificados", "Por performance"]
    correta: 1
    explicacao: "✓ Imutabilidade = não modificar dados existentes. Criar novos arrays evita bugs causados por modificações inesperadas."
    explicacaoErrada: "✗ Imutabilidade é uma boa prática. Modificar o array original pode causar bugs difíceis de rastrear."
  - pergunta: "O que reduce faz no calcularTotal?"
    opcoes: ["Remove produtos", "Soma preço × quantidade de todos os produtos", "Ordena por preço", "Filtra produtos caros"]
    correta: 1
    explicacao: "✓ reduce acumula o total somando (preço × quantidade) de cada produto no carrinho."
    explicacaoErrada: "✗ reduce percorre o array acumulando um valor. Aqui, soma preço × quantidade de cada item."
---

## O projeto

Simule as operacoes basicas de um carrinho de compras: adicionar produtos, atualizar quantidades, calcular total e exibir relatorio.

## Definindo os tipos

```typescript
type Produto = {
  nome: string;
  preco: number;
  quantidade: number;
};

type Carrinho = Produto[];
```

`Produto` define a estrutura de cada item. `Carrinho` e um array de produtos. Type aliases tornam o codigo mais legivel.

## Funcoes do carrinho

### Adicionar produto

```typescript
function adicionarProduto(carrinho: Carrinho, produto: Produto): Carrinho {
  const existente = carrinho.find((p) => p.nome === produto.nome);
  if (existente) {
    return carrinho.map((p) =>
      p.nome === produto.nome
        ? { ...p, quantidade: p.quantidade + produto.quantidade }
        : p,
    );
  }
  return [...carrinho, produto];
}
```

Se o produto ja existe, atualiza a quantidade com `map`. Se nao, adiciona ao final com spread (`...`). A funcao **nunca modifica** o array original --- retorna um novo.

> [!info]
> O spread operator (`...`) copia todos os elementos de um array ou propriedades de um objeto. `[...carrinho, novoProduto]` cria um novo array com tudo que tinha antes mais o novo item.

### Calcular total

```typescript
function calcularTotal(carrinho: Carrinho): number {
  return carrinho.reduce((total, p) => total + p.preco * p.quantidade, 0);
}
```

### Exibir carrinho

```typescript
function exibirCarrinho(carrinho: Carrinho): void {
  console.log("\nCARRINHO DE COMPRAS");
  console.log("-".repeat(40));
  for (const item of carrinho) {
    const subtotal = item.preco * item.quantidade;
    console.log(
      `${item.nome.padEnd(15)} x${item.quantidade}  R$ ${subtotal.toFixed(2)}`,
    );
  }
  console.log("-".repeat(40));
  console.log(`TOTAL: R$ ${calcularTotal(carrinho).toFixed(2)}`);
}
```

## Usando o carrinho

```typescript
let carrinho: Carrinho = [];

carrinho = adicionarProduto(carrinho, {
  nome: "Teclado",
  preco: 150.0,
  quantidade: 1,
});
carrinho = adicionarProduto(carrinho, {
  nome: "Mouse",
  preco: 80.0,
  quantidade: 2,
});
carrinho = adicionarProduto(carrinho, {
  nome: "Teclado",
  preco: 150.0,
  quantidade: 1,
}); // já existe — atualiza quantidade

exibirCarrinho(carrinho);

// → CARRINHO DE COMPRAS
// → ----------------------------------------
// → Teclado         x2  R$ 300.00
// → Mouse           x2  R$ 160.00
// → ----------------------------------------
// → TOTAL: R$ 460.00
```

Note que `carrinho` usa `let` porque a variavel e reatribuida a cada operacao. O array anterior nao e modificado --- um novo e criado.

> [!alerta]
> A imutabilidade (nunca modificar o original) parece mais trabalhosa, mas evita bugs dificeis de rastrear. Em projetos reais com React e Redux, esse padrao e obrigatorio.

## Conceitos aplicados

| Trecho | Conceito |
|---|---|
| `type Produto`, `type Carrinho` | Type aliases |
| `carrinho.find(...)` | Busca em array |
| `carrinho.map(...)` | Transformacao imutavel |
| `[...carrinho, produto]` | Spread operator |
| `carrinho.reduce(...)` | Acumulacao |
| `{ ...p, quantidade: ... }` | Spread em objeto |
| `padEnd`, `toFixed` | Formatacao |

> [!sucesso]
> Este projeto combina type aliases, metodos funcionais de arrays, spread operator e imutabilidade. Sao padroes que voce vai usar diariamente em projetos com React, Node.js e APIs.

## Exercicio extra

Adicione uma funcao `removerProduto` que remove um item do carrinho pelo nome:

```typescript
function removerProduto(carrinho: Carrinho, nome: string): Carrinho {
  // Use filter para retornar um novo array sem o produto
}
```
