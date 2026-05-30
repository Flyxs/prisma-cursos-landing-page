# Guia Rápido: Como contribuir com o projeto (Git & GitHub)
Este é um guia básico para trabalharmos juntos no código sem dores de cabeça.

A nossa branch main (onde fica a versão oficial da landing page) é protegida. Isso proíbe que qualquer pessoa envie código direto para ela, evitando que o site quebre. Por isso, todos nós vamos trabalhar criando Branches (ramificações) e enviando Pull Requests (pedidos de revisão).

Siga o passo a passo abaixo toda vez que for programar a sua parte:

## Passo 0: Preparando o terreno (Git & GitHub)
Antes de começar, você precisa garantir que tem as ferramentas básicas configuradas na sua máquina:

- O Programa (Git): É ele quem gerencia o versionamento do nosso código no seu computador. Se ainda não tem instalado, [baixe o Git aqui](https://git-scm.com/install/). Ao instalar, pode ir clicando em "Next" aceitando as configurações padrão.
- A Plataforma (GitHub): É a "rede social" onde o nosso repositório e o projeto da equipe vivem. Se ainda não tem, crie sua conta.
- O Editor (VS Code): Para facilitar a nossa vida, usaremos o Visual Studio Code para programar e enviar os códigos de forma visual. (se você prefere outro editor é contigo)

## Passo 1: Baixar o projeto para o seu computador (Clone)
Você só precisa fazer isso na primeira vez!
Abra o terminal no seu computador, navegue até a pasta onde quer guardar o projeto e digite:
```
git clone https://github.com/Flyxs/prisma-cursos-landing-page.git
```
> [!tip]  
> Para acessar alguma pasta no seu computador pelo terminal você pode usar os seguintes comandos:  
> `ls` lista todos os arquivos e pastas na pasta atual.  
> `cd` acessa uma pasta expecifica -> EX.: `cd Documentos/`.

Depois basta abrir a pasta pelo VsCode (ou o outro programa que esteja utilizando)

> [!warning]
> Antes de começar, certifique-se de estar atualizado! As vezes outra pessoa pode estar trabalhando no mesmo arquivo que você ou um arquivo que tem alguma relação com ele, e isso pode resultar em um conflito posteriormente. Portanto sempre use o comando `git pull origin main` antes de continuar seu trabalho. 

## Passo 2: Criar a sua Branch (Sua área de trabalho segura)
Antes de alterar qualquer código HTML, CSS ou JS, você precisa criar a sua própria ramificação. Nós usamos um padrão de nomes focado no desenvolvedor:
```
git checkout -b feature/[sua-secao]
```
Exemplo práticos:
 
- Se você é o P2 fazendo a seção Hero: `git checkout -b feature/secao-hero-cursos`  
- Se você é o P4 fazendo o Quiz: `feature/gamificacao-quiz`  

O que cada um irá fazer já foi definido em grupo e está no discord.

## Passo 3: Salvar suas alterações locais (Add e Commit) e enviar as mudanças para o repositório no git hub (push)
Fez o seu código e testou no navegador? Agora vamos salvar essas mudanças no Git.  
Existem duas maneiras diferentes de fazer isso: uma maneira mais fácil Via Interface do VS Code (Visual) e a maneira complicada Via Terminal (Linha de Comando).

### Método 1: Via Terminal (Linha de Comando)

Primeiro, adicione todos os arquivos modificados:
```
git add .
```
> [!tip]
> Caso não queira adicionar todos os arquivos, você pode escolher um especifico com `git add [nome do arquivo]`

Depois, "carimbe" essas mudanças com uma mensagem clara sobre o que você fez:

```
git commit -m "[coloque aqui de maneira abreviada o que vc fez]"
```
Agora você vai mandar a sua branch (que estava só no seu computador) lá para o GitHub da equipe:
```
git push origin [nome-da-sua-branch]
```
Exemplo: `git push origin feature/secao-hero-cursos`

### Maneira mais simples
A maneira que eu recomendo:

1. No menu lateral esquerdo do VS Code, clique no ícone de Controle de Código-Fonte (Source Control — o ícone se parece com um galho com três bolinhas) ou aperte Ctrl + Shift + G.
2. Você verá uma lista com os arquivos modificados. Passe o mouse sobre a palavra "Alterações" (Changes) e clique no ícone de + (Estagiar Todas as Alterações). Isso adiciona todos os arquivos de uma vez.
3. Na caixa de texto no topo dessa aba, "carimbe" essas mudanças com uma mensagem clara sobre o que você fez (ex: Adiciona CSS da seção hero).
4. Clique no botão azul Confirmar (Commit).

Agora você vai mandar a sua branch (que estava só no seu computador) lá para o GitHub da equipe:

1. Logo após o Commit do passo anterior, o botão azul mudará de nome.
2. Se for a primeira vez enviando essa branch, clique em Publicar Branch (Publish Branch). Se você já tiver enviado atualizações dessa branch antes, clique em Sincronizar Alterações (Sync Changes).

> [!warning]
> O VS Code pode abrir uma notificação rápida no topo perguntando se você deseja executar a ação. Basta clicar em "OK" ou "Sim". E pronto, código enviado!

## Passo 4: Pedir a aprovação (Pull Request)

1. Abra a página do nosso repositório no GitHub.
2. Você verá um botão verde escrito "Compare & pull request". Clique nele!
3. Coloque um título claro e uma breve descrição do que você construiu.
4. Clique em Create pull request.

Pronto! Agora o Revisor Principal (no caso eu) vai testar o seu código. Se tudo estiver perfeito, ele aprovará e juntará o seu trabalho à branch main. Se houver algum bug, ele deixará um comentário solicitando correções.
