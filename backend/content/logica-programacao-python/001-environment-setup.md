---
slug: "environment-setup"
modulo: "Módulo 1 — Começando com Python"
titulo: "Preparando o Ambiente"
subtitulo: "Instalando Python e configurando o editor para programar"
descricao: "Como instalar Python, VS Code e configurar o ambiente para escrever seus primeiros programas."
ordem: 1
proximosPassos:
  - titulo: "Primeiro programa"
    descricao: "Escreva e execute seu primeiro código Python"
  - titulo: "Variáveis e tipos"
    descricao: "Aprenda a armazenar dados no programa"
quiz:
  - pergunta: "O que é o Python?"
    opcoes: ["Um editor de código", "Uma linguagem de programação interpretada de alto nível", "Um sistema operacional", "Um banco de dados"]
    correta: 1
    explicacao: "✓ Python é uma linguagem de programação interpretada, de alto nível, conhecida por sua sintaxe clara e legível."
    explicacaoErrada: "✗ Python é uma linguagem de programação — não é editor, SO nem banco de dados."
  - pergunta: "Qual editor de código é recomendado para programar em Python?"
    opcoes: ["Notepad", "Word", "VS Code", "Paint"]
    correta: 2
    explicacao: "✓ VS Code (Visual Studio Code) é gratuito, leve e tem excelente suporte a Python com extensões."
    explicacaoErrada: "✗ VS Code é o editor recomendado — gratuito, com suporte a Python através de extensões oficiais."
  - pergunta: "Qual comando verifica se o Python está instalado?"
    opcoes: ["python --start", "python --version", "python --install", "python --check"]
    correta: 1
    explicacao: "✓ python --version exibe a versão instalada. Se aparecer um número (ex: 3.12.0), está funcionando."
    explicacaoErrada: "✗ O comando correto é python --version (ou python -V). Ele mostra a versão instalada do Python."
  - pergunta: "O que é o pip?"
    opcoes: ["Um navegador web", "O gerenciador de pacotes do Python", "Um compilador de Python", "Um sistema de arquivos"]
    correta: 1
    explicacao: "✓ pip (Package Installer for Python) é o gerenciador de pacotes que vem junto com o Python."
    explicacaoErrada: "✗ pip = Package Installer for Python. É a ferramenta que instala bibliotecas e pacotes para seus projetos."
---

## O que você vai precisar

Para programar em Python, três ferramentas são essenciais:

- **Python** — a linguagem de programação que vamos usar
- **VS Code** — editor de código da Microsoft, gratuito e poderoso
- **Terminal** — linha de comando para executar seus programas

## Instalando o Python

Python é uma linguagem interpretada — o código é executado diretamente, sem necessidade de compilação.

**Passo a passo:**

1. Acesse [python.org](https://www.python.org/downloads/)
2. Clique em **Download Python 3.x** (versão mais recente)
3. Execute o instalador
4. **Importante:** marque a opção **"Add Python to PATH"** antes de instalar

**Verificando a instalação:**

```python
# No terminal, digite:
python --version
# → Python 3.12.0 (ou superior)

# Verificar o pip (gerenciador de pacotes):
pip --version
# → pip 23.x.x
```

> **Nota:** No Linux/Mac, pode ser necessário usar `python3` e `pip3` em vez de `python` e `pip`.

## Instalando o VS Code

VS Code é o editor que usaremos para escrever código Python.

1. Acesse [code.visualstudio.com](https://code.visualstudio.com)
2. Baixe e instale a versão para seu sistema
3. Instale a extensão **Python** (da Microsoft) pelo marketplace

## Criando seu primeiro arquivo

1. Abra o VS Code
2. Crie uma pasta para seus projetos (ex: `meus-programas`)
3. Crie um arquivo chamado `ola.py`
4. Escreva o código:

```python
print("Olá, mundo!")
```

5. Abra o terminal integrado (`Ctrl + '`)
6. Execute: `python ola.py`

Você deve ver a saída:

```
Olá, mundo!
```

## Diferenças do TypeScript

Se você já estudou TypeScript, vai notar algumas diferenças:

| Característica | TypeScript | Python |
| --- | --- | --- |
| Execução | Precisa compilar (tsc) | Executa direto |
| Tipagem | Estática obrigatória | Dinâmica (type hints opcionais) |
| Blocos de código | Chaves `{}` | Indentação (4 espaços) |
| Ponto e vírgula | Opcional (recomendado) | Não usa |
| Nomenclatura | camelCase | snake_case |

## Pronto para começar!

Com Python e VS Code instalados, você está pronto para escrever seus primeiros programas. Na próxima aula, vamos criar nosso primeiro programa real em Python.
