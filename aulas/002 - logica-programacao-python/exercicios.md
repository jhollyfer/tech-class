Desafios de Lógica de Programação com Python

37+ exercícios práticos — do iniciante ao intermediário

Cada desafio tem: enunciado, exemplo de entrada/saída esperada e dica de raciocínio.
Tente resolver antes de buscar qualquer solução. O erro faz parte do aprendizado.

Módulo 1 — Variáveis e Tipos de Dados
Desafio 1.1 — Ficha de Aluno
Declare variáveis para armazenar as informações de um aluno: nome, idade, matrícula, nota média e se está ativo. Exiba todas as informações em uma única string formatada usando f-string.

# Saída esperada:

# Aluno: Marcos Rodrigues | Matrícula: 2024001 | Idade: 22 anos

# Nota Média: 8.5 | Status: Ativo

Dica: use type hints e escolha o tipo correto para cada variável (str, int, float, bool).

Desafio 1.2 — Conversor de Temperatura
Declare uma variável com temperatura em Celsius e converta para Fahrenheit e Kelvin. Exiba os três valores formatados com 2 casas decimais.

# Entrada: 100 (Celsius)

# Saída:

# Celsius: 100.00°C

# Fahrenheit: 212.00°F

# Kelvin: 373.15K

Fórmulas: F = C \* 9/5 + 32 | K = C + 273.15

Desafio 1.3 — Troca de Valores
Declare duas variáveis a e b com valores diferentes. Troque os valores entre elas usando a sintaxe elegante do Python. Exiba antes e depois.

# Antes: a = 10, b = 25

# Depois: a = 25, b = 10

Dica: Python permite a, b = b, a — isso é um dos recursos mais elegantes da linguagem.

Desafio 1.4 — Detector de Tipo em Runtime
Crie variáveis de tipos diferentes (str, int, float, bool, None). Para cada uma, use type() e isinstance() para detectar e exibir o tipo junto com o valor.

# Saída esperada:

# "Marcos" → tipo: <class 'str'> | é str? True

# 42 → tipo: <class 'int'> | é int? True

# True → tipo: <class 'bool'> | é bool? True

# None → tipo: <class 'NoneType'> | é None? True

Desafio 1.5 — Calculadora de IMC
Declare variáveis para peso (kg) e altura (m). Calcule o IMC e armazene o resultado. Exiba o valor com 2 casas decimais e a classificação (use somente variáveis e operadores, sem if ainda).

# Entrada: peso = 75, altura = 1.78

# Saída: IMC: 23.67

Fórmula: IMC = peso / (altura \*\* 2)

Desafio 1.6 — Informações de Produto
Declare variáveis para: nome do produto, preço unitário, quantidade em estoque e se está disponível. Calcule o valor total em estoque e exiba um resumo formatado.

# Saída esperada:

# Produto: Notebook | Preço: R$ 3500.00

# Estoque: 12 unidades | Total: R$ 42000.00 | Disponível: Sim

Módulo 2 — Operadores
Desafio 2.1 — Calculadora Básica
Dados dois números a e b, calcule e exiba o resultado de todas as operações aritméticas, incluindo a divisão inteira (//) que é exclusiva do Python.

# Entrada: a = 17, b = 5

# Saída:

# 17 + 5 = 22

# 17 - 5 = 12

# 17 \* 5 = 85

# 17 / 5 = 3.4

# 17 // 5 = 3 ← divisão inteira

# 17 % 5 = 2 ← resto

# 17 \*\* 5 = 1419857

Desafio 2.2 — Verificador de Acesso
Dados: idade, se tem cadastro e se assinou o plano premium. Usando somente operadores lógicos (sem if/else), crie expressões booleanas que respondam às perguntas abaixo.

# Entrada: idade = 17, tem_cadastro = True, premium = False

# Saída:

# Acesso básico: True

# Acesso premium: False

# Bloqueado: False

Desafio 2.3 — Tabela Verdade do AND
Gere as 4 combinações possíveis do operador and com dois operandos e exiba o resultado de cada uma.

# Saída:

# True and True = True

# True and False = False

# False and True = False

# False and False = False

Desafio 2.4 — Calculadora de Troco
Dados o valor de uma compra e o valor pago pelo cliente, calcule o troco. Exiba se o cliente pagou a mais, exatamente ou a menos.

# Entrada: compra = 47.50, pago = 50.00

# Saída:

# Valor da compra: R$ 47.50

# Valor pago: R$ 50.00

# Troco: R$ 2.50

# Pagamento exato: False

Desafio 2.5 — Verificador de Divisibilidade
Dado um número, verifique usando % se ele é divisível por 2, 3, 5 e 10.

# Entrada: 60

# Saída:

# Divisível por 2: True

# Divisível por 3: True

# Divisível por 5: True

# Divisível por 10: True

Desafio 2.6 — Comparador de Senhas
Dados dois campos de senha, verifique: se são iguais, se ambas têm mais de 8 caracteres e se o cadastro pode ser concluído.

# Entrada: senha = "minhasenha123", confirmacao = "minhasenha123"

# Saída:

# Senhas iguais: True

# Tamanho suficiente: True

# Cadastro liberado: True

Módulo 3 — Estruturas de Decisão
Desafio 3.1 — Classificador de Notas
Dado um valor de nota (0–10), classifique o aluno em: Excelente (≥9), Aprovado (≥7), Recuperação (≥5) ou Reprovado (<5). Use if/elif/else.

# Entrada: 6.5

# Saída: Situação: Recuperação

Desafio 3.2 — Calculadora com Operação Escolhida
Dados dois números e um símbolo de operação (+, -, \*, /), use match/case para calcular o resultado. Trate a divisão por zero.

# Entrada: 10, "/", 0

# Saída: Erro: divisão por zero não permitida

# Entrada: 10, "\*", 4

# Saída: 10 \* 4 = 40

Dica: se não tiver Python 3.10+, use if/elif.

Desafio 3.3 — Classificador de Triângulo
Dados três lados, verifique se formam um triângulo válido. Se sim, classifique como: Equilátero, Isósceles ou Escaleno.

# Entrada: a = 5, b = 5, c = 8

# Saída: Triângulo Isósceles

# Entrada: a = 1, b = 2, c = 10

# Saída: Não forma um triângulo

Triângulo válido: cada lado deve ser menor que a soma dos outros dois.

Desafio 3.4 — Calculadora de Frete
Dado o peso (kg) e o estado de destino/origem, calcule o frete:

Até 1kg: R$ 15,00
1kg a 5kg: R$ 30,00
Acima de 5kg: R$ 50,00
Mesmo estado: desconto de 20%

# Entrada: peso = 3, destino = "AM", origem = "AM"

# Saída: Frete: R$ 24.00 (com desconto de 20%)

# Entrada: peso = 3, destino = "SP", origem = "AM"

# Saída: Frete: R$ 30.00

Desafio 3.5 — Verificador de Ano Bissexto
Dado um ano, verifique se é bissexto usando o encadeamento de comparações e operadores lógicos do Python.

# 2000 → Bissexto (divisível por 400)

# 1900 → Não bissexto (divisível por 100, mas não por 400)

# 2024 → Bissexto (divisível por 4 e não por 100)

# 2023 → Não bissexto

Regra: divisível por 4, exceto os divisíveis por 100, a menos que também sejam divisíveis por 400.

Desafio 3.6 — Semáforo Inteligente
Dado o estado atual do semáforo ("verde", "amarelo" ou "vermelho"), exiba a instrução ao motorista e o próximo estado.

# Entrada: "verde"

# Saída:

# Instrução: Siga em frente

# Próximo estado: amarelo

Módulo 4 — Estruturas de Repetição
Desafio 4.1 — Tabuada Completa
Dado um número, exiba a tabuada completa de 1 a 10 usando for com range(). Use formatação alinhada com f-string.

# Entrada: 7

# Saída:

# 7 x 1 = 7

# 7 x 2 = 14

# ...

# 7 x 10 = 70

Dica: use {i:2d} e {n\*i:3d} dentro do f-string para alinhar os números.

Desafio 4.2 — Contagem Regressiva com Mensagem Final
Use while para fazer uma contagem regressiva de N até 0. Use o else do while para exibir a mensagem final (recurso exclusivo do Python!).

# Entrada: 5

# Saída:

# 5...

# 4...

# 3...

# 2...

# 1...

# 🚀 Lançamento!

Desafio 4.3 — Soma de Dígitos
Dado um número inteiro positivo, some todos os seus dígitos usando um loop.

# Entrada: 4523

# Saída: Soma dos dígitos de 4523 = 14 (4+5+2+3)

Dica Pythônica: converta para string, percorra com for, converta cada caractere de volta para int.

Desafio 4.4 — Sequência de Fibonacci
Gere os primeiros N termos da sequência de Fibonacci.

# Entrada: 10

# Saída: 0 1 1 2 3 5 8 13 21 34

Dica: use o desempacotamento do Python: a, b = b, a + b para atualizar os dois valores de uma vez.

Desafio 4.5 — Números Primos até N
Liste todos os números primos de 2 até N. Tente usar list comprehension para deixar o código mais pythônico.

# Entrada: 30

# Saída: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

Dica de otimização: para verificar se N é primo, teste divisores apenas até int(N\*\*0.5) + 1.

Desafio 4.6 — Validador com Tentativas Limitadas
Simule um sistema de login com senha fixa. O usuário tem 3 tentativas (use uma lista de tentativas pré-definidas). Use o else do for para detectar quando todas as tentativas foram esgotadas.

# Senha correta: "py2024"

# tentativas = ["errada", "errada", "py2024"]

# → "Senha incorreta. 2 tentativas restantes."

# → "Senha incorreta. 1 tentativa restante."

# → "✓ Acesso concedido!"

Desafio 4.7 — Padrão de Asteriscos
Use loops aninhados para imprimir um triângulo de asteriscos. Em seguida, use list comprehension para criar a versão em uma linha.

# Entrada: 5

# Saída:

# \*

# \*\*

# \*\*\*

# \*\*\*\*

# **\***

# Versão list comprehension (uma linha):

# print('\n'.join(['*' * i for i in range(1, 6)]))

Módulo 5 — Listas
Desafio 5.1 — Estatísticas de Notas
Dado uma lista de notas, calcule e exiba: maior nota, menor nota, média e quantos alunos foram aprovados (nota >= 7). Use as funções built-in max(), min(), sum() do Python.

# Entrada: [8.5, 6.0, 9.5, 5.0, 7.0, 4.5, 10.0]

# Saída:

# Maior nota: 10.0

# Menor nota: 4.5

# Média: 7.21

# Aprovados: 4 de 7

Desafio 5.2 — Remover Duplicatas
Dado uma lista com valores repetidos, retorne uma nova lista apenas com os valores únicos, mantendo a ordem de aparição.

# Entrada: [1, 2, 2, 3, 4, 3, 5, 1]

# Saída: [1, 2, 3, 4, 5]

Dica Python: list(dict.fromkeys(lista)) mantém a ordem e remove duplicatas de forma elegante. Tente também implementar manualmente com not in.

Desafio 5.3 — Inverter Lista
Inverta a ordem dos elementos de uma lista sem usar .reverse() ou [::-1] — implemente a lógica manualmente.

# Entrada: ["a", "b", "c", "d", "e"]

# Saída: ["e", "d", "c", "b", "a"]

Dica: percorra a lista de trás para frente com range(len(lista)-1, -1, -1).

Desafio 5.4 — Segundo Maior Valor
Dado uma lista de números, encontre o segundo maior valor sem usar sorted().

# Entrada: [3, 1, 7, 4, 7, 2, 5]

# Saída: Segundo maior: 5

Desafio 5.5 — Filtrar Alunos com Todas as Notas Acima de 6
Dada uma lista de dicionários com nome e notas, retorne apenas os nomes dos alunos com todas as notas acima de 6.
python# Entrada:
turma = [
{"nome": "Ana", "notas": [7, 8, 9]},
{"nome": "Bruno", "notas": [5, 8, 7]},
{"nome": "Carol", "notas": [9, 8, 10]},
]

# Saída: ["Ana", "Carol"]

Dica: use all() — equivale ao .every() do JS. Ex: all(n > 6 for n in notas).

Desafio 5.6 — Contador de Ocorrências
Dado uma lista de strings, conte quantas vezes cada elemento aparece.

# Entrada: ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]

# Saída:

# maçã: 3 vez(es)

# banana: 2 vez(es)

# laranja: 1 vez(es)

Dica Pythônica: use collections.Counter — ou implemente manualmente com um dicionário {}.

Desafio 5.7 — Mesclar e Ordenar Listas
Dadas duas listas de números ordenadas, mescle-as em uma única lista também ordenada, sem usar sorted() — implemente o algoritmo de merge.

# Entrada: [1, 3, 5, 7] e [2, 4, 6, 8]

# Saída: [1, 2, 3, 4, 5, 6, 7, 8]

Módulo 6 — Funções
Desafio 6.1 — Funções Matemáticas Puras
Crie as funções: somar, subtrair, multiplicar, dividir e potencia, cada uma com type hints. A função dividir deve lançar ValueError se o divisor for zero.
python# Assinaturas esperadas:
def somar(a: float, b: float) -> float: ...
def dividir(a: float, b: float) -> float: ... # raise ValueError se b == 0

Desafio 6.2 — Função de Validação de CPF (formato)
Crie uma função que receba um CPF como string e valide somente o formato "000.000.000-00".

# "123.456.789-09" → True

# "12345678909" → False

# "123.456.789-0" → False

Dica: verifique len(), a posição dos pontos e do traço com indexação direta.

Desafio 6.3 — Fábrica de Saudações (Closure)
Crie uma função criar_saudacao que recebe o turno e retorna outra função que recebe um nome e retorna a saudação completa.
pythonsaudacao_manha = criar_saudacao("manhã")
print(saudacao_manha("Marcos")) # "Bom dia, Marcos!"
print(saudacao_manha("Ana")) # "Bom dia, Ana!"

saudacao_noite = criar_saudacao("noite")
print(saudacao_noite("Bruno")) # "Boa noite, Bruno!"

Conceito: isso é chamado de closure — uma função que "lembra" do contexto em que foi criada.

Desafio 6.4 — Calculadora de Desconto Genérica
Crie uma função aplicar_desconto que recebe um valor, um percentual e uma função de arredondamento opcional (padrão: math.floor).
pythonimport math

aplicar_desconto(100, 15) # → 85
aplicar_desconto(100, 15, math.ceil) # → 85
aplicar_desconto(99.90, 10, round) # → 90

Desafio 6.5 — Pipeline de Transformação
Crie uma função pipeline que recebe um valor inicial e uma lista de funções. Aplique cada função em sequência, passando o resultado de uma para a próxima.
pythonfrom functools import reduce

resultado = pipeline(
5,
[
lambda n: n * 2, # 10
lambda n: n + 3, # 13
lambda n: n ** 2, # 169
]
)
print(resultado) # 169

Dica: use functools.reduce() para encadear as funções.

Desafio 6.6 — Função Recursiva: Fatorial
Crie uma função recursiva fatorial(n) sem usar nenhum loop.

# fatorial(0) → 1

# fatorial(1) → 1

# fatorial(5) → 120

# fatorial(10) → 3628800

Regra da recursão: a função chama a si mesma com um valor menor e tem um caso base que para a recursão.

Desafio 6.7 — Decorador de Log
Crie um decorador @log_chamada que, ao ser aplicado em uma função, imprime o nome da função, os argumentos recebidos e o valor retornado.
python@log_chamada
def somar(a: int, b: int) -> int:
return a + b

somar(3, 5)

# → [LOG] somar chamada com args=(3, 5)

# → [LOG] somar retornou 8

Conceito: decoradores são funções que envolvem outras funções — recurso exclusivo e poderoso do Python.

Módulo 7 — Prática com Problemas Reais
Desafio 7.1 — Sistema de Estoque
Crie um sistema com as funções:

adicionar_produto — adiciona ou atualiza quantidade
remover_produto — remove pelo nome
buscar_produto — retorna o produto ou None
listar_estoque — exibe todos formatados
calcular_valor_total — retorna o valor total

pythonfrom typing import TypedDict

class Produto(TypedDict):
nome: str
preco: float
quantidade: int

Desafio 7.2 — Jogo de Adivinhação
Simule um jogo onde o computador tem um número secreto entre 1 e 100. O usuário tem 7 tentativas (use lista pré-definida para simular). Use o else do for para detectar derrota.

# Número secreto: 42

# tentativas = [50, 25, 42]

# → "Menor! 6 tentativas restantes."

# → "Maior! 5 tentativas restantes."

# → "🎉 Acertou em 3 tentativas!"

Desafio 7.3 — Analisador de Texto
Dada uma string, crie funções que retornem:

Número de palavras
Número de caracteres (sem espaços)
Palavra mais longa
Número de vogais
As 3 palavras mais frequentes

# Entrada: "o rato roeu a roupa do rei de roma"

# Saída:

# Palavras: 9

# Caracteres: 29

# Palavra mais longa: roupa

# Vogais: 14

# Mais frequentes: ['o', 'de', 'rato']

Dica: collections.Counter + .most_common(3) resolve as mais frequentes com elegância.

Desafio 7.4 — Conversor de Bases Numéricas
Crie funções para converter entre decimal, binário, octal e hexadecimal sem usar bin(), oct(), hex() ou int(valor, base) — implemente a lógica manualmente.

# decimal_para_binario(10) → "1010"

# decimal_para_octal(255) → "377"

# binario_para_decimal("1010") → 10

Desafio 7.5 — Mini Banco de Dados em Memória (CRUD)
Crie um sistema de cadastro de usuários com as operações completas de CRUD: criar, ler, atualizar, deletar e listar, usando uma lista como banco de dados.
pythonfrom typing import TypedDict, Optional

class Usuario(TypedDict):
id: int
nome: str
email: str
ativo: bool

# criar({"nome": "Ana", "email": "ana@email.com"}) → {"id": 1, "nome": "Ana", ...}

# ler(1) → {"id": 1, "nome": "Ana", ...}

# atualizar(1, {"nome": "Ana Lima"}) → {"id": 1, "nome": "Ana Lima", ...}

# deletar(1) → True

# listar() → [...]

Desafio 7.6 — Calculadora de Parcelamentos
Dado o valor de uma compra, número de parcelas e taxa de juros mensal, calcule e exiba a tabela completa de parcelas.

# Entrada: valor = 1000, parcelas = 3, juros_mensal = 0.02 (2%)

# Saída:

# Parcela 1: R$ 346.75 | Saldo restante: R$ 673.25

# Parcela 2: R$ 346.75 | Saldo restante: R$ 340.07

# Parcela 3: R$ 346.75 | Saldo restante: R$ 0.00

# Total pago: R$ 1040.25 | Juros: R$ 40.25

Fórmula: P = PV _ (i _ (1+i)^n) / ((1+i)^n - 1)

Desafio 7.7 — Validador de Formulário
Crie um conjunto de funções de validação e uma função principal validar_formulario que retorna um dicionário com os erros encontrados (campo sem erro = chave ausente no dict).
pythonfrom typing import TypedDict

class FormularioCadastro(TypedDict):
nome: str
email: str
senha: str
idade: int

# Regras:

# nome: mínimo 3 caracteres, sem dígitos

# email: contém "@" e "."

# senha: mínimo 8 caracteres, pelo menos 1 dígito

# idade: entre 18 e 120

# validar_formulario({"nome": "Al", "email": "sem-arroba", "senha": "abc", "idade": 15})

# → {

# "nome": "Nome deve ter no mínimo 3 caracteres",

# "email": "Email inválido",

# "senha": "Senha deve ter no mínimo 8 caracteres e conter um número",

# "idade": "Idade mínima é 18 anos"

# }

Tabela de Dificuldade
DesafioMóduloDificuldade1.1 a 1.4Variáveis⭐ Fácil1.5, 1.6Variáveis⭐⭐ Médio2.1 a 2.4Operadores⭐ Fácil2.5, 2.6Operadores⭐⭐ Médio3.1, 3.2Decisão⭐ Fácil3.3 a 3.6Decisão⭐⭐ Médio4.1, 4.2Repetição⭐ Fácil4.3 a 4.5Repetição⭐⭐ Médio4.6, 4.7Repetição⭐⭐ Médio5.1, 5.2Listas⭐⭐ Médio5.3 a 5.5Listas⭐⭐ Médio5.6, 5.7Listas⭐⭐⭐ Difícil6.1, 6.2Funções⭐⭐ Médio6.3, 6.4Funções⭐⭐⭐ Difícil6.5 a 6.7Funções⭐⭐⭐ Difícil7.1, 7.2Prática⭐⭐ Médio7.3 a 7.5Prática⭐⭐⭐ Difícil7.6, 7.7Prática⭐⭐⭐ Difícil

Diferenciais do Python que aparecem nos desafios
RecursoOnde aparecePor que é relevantea, b = b, aDesafio 1.3Troca elegante sem variável auxiliarEncadeamento de comparaçõesDesafio 2.25 <= nota <= 10 é exclusivo do Pythonand / or / notMódulo 2Palavras em vez de símboloselse no for/whileDesafio 4.6Detecta término sem breakList comprehensionDesafio 4.7, 5.xSintaxe funcional e concisaenumerate()Módulo 4Índice + valor ao mesmo tempoall() / any()Desafio 5.5Alternativas pythônicas ao .every()/.some()collections.CounterDesafio 5.6, 7.3Contagem de elementos com uma linhaDecoradores @Desafio 6.7Recurso poderoso e idiomáticofunctools.reduceDesafio 6.5Pipeline de transformaçõesTypedDictMódulo 7Tipagem de dicionários

Como praticar com eficiência

Leia o enunciado completo antes de escrever qualquer linha.
Esboce o algoritmo em português (pseudocódigo) antes de codar.
Escreva o código e teste com os casos do enunciado.
Crie seus próprios casos de teste, incluindo casos extremos (zero, negativo, lista vazia, None).
Refatore usando recursos pythônicos: se usou um for com append, pense se um list comprehension ficaria mais claro.

37 desafios — Lógica de Programação com PythonCompartilhar
