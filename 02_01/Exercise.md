# Quiz
https://docs.google.com/forms/d/e/1FAIpQLSeWB0UzGb6SIAGmMgff2EJWRZBcePSJlmb0o0vHd5wUGzDUFA/viewform

# Parte 1 - Instalação e Configuração 
1 - Instalando o Git - Git Setup  
  sudo apt-get install git-all 

2 - Configuração inicial - Git Config                          
  git config --global 
    git config --global user.name "digitar nome cadastrado no github"
    git config --global user.email "digitar email cadastrado no github" 
    git config --global core.editor "code --wait" 
    git config --list - Para verificar as alterações 
    git --version - Verifica qual versão do git está instalada  (git version 2.17.1) 

# Parte 2 - Criar conta no GitHub 
1 - Criar conta no GitHub 
  https://github.com/
 
# Parte 3 - Adicionando uma chave SSH na sua conta do GitHub 
1 - Adicionando uma chave SSH na sua conta do GitHub -         
https://medium.com/@rgdev/como-adicionar-uma-chave-ssh-na-sua-conta-do-github-linux-e0f19bbc4265
ou 
https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

# Parte 4 - Do git init ao git push 
http://devfuria.com.br/git/tutorial-iniciando-git/

1 - Criando um repositório 
  mkdir nome_diretório 
  cd nome_diretório 
  git init 
  git status 

2 - Adicionando e Comitando 
  touch readme.md 
  git add readme.md  
  git commit -m "my first commit" 

3 - Criando um repositório no GitHub 
  a - No site, no canto direita em cima a um ícone com um sinal de mais (+), selecione a opção new repository  
  b - Crie um nome para Repository name 
  c - Uma descrição para Description 
  d - Aperte o botão verde Create Repository 
  e - Conectando o repositório local com o da web 

4 - Clique no botão verde Clone or download e clique na prancheta 
  git remote add origin git@github.com:user/XXXXX.git(link copiado) 
  git remote –v 
Irá Aparecer XXXXX   https://github.com/user/XXXXX.git (fetch) e XXXXX   https://github.com/user/XXXXXX.git (push) 

5 - Sincronizando os repositórios 
  git push origin master 
Irá aparecer: Username for 'https://github.com':  
  digite seu username 
Irá aparecer: Password for https:user@github.com:  
  digite sua senha 

# Parte 5 - O seu repositório no GitHub 
1 - Antes de começar você de criar uma pasta como o nome my_shell_scripts e colocar um os exercícios da aula 03 - Exercício 01 - Exercício 11 

2 - Inicialize o repositório com git init; 
  cd  
  cd my_shell_scripts 
  git init  

3 - Crie um arquivo de README utilizando o comando touch README.md; 
  touch readme.md 

4 - Crie um commit inicial utilizando: 
  git add 
  git commit -m "Initial commit" 

5 - Vá até o seu GitHub e crie um repositório público ; 
 - No canto direita em cima a um ícone com um sinal de mais (+), selecione a opção new repository  
 - Crie um nome para Repository name 
 - Uma descrição para Description 
 - Não selecionar o botão create readme 
 - Aperte o botão verde Create Repository 
 - Conectando o repositório local com o da web 
 
6 - Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO"; 
 - Clique no botão verde Clone or download e clique na prancheta  
    git remote add  my_shell_scripts git@github.com:user/XXXX.git" (link copiado) 

7 - Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v. Seu terminal deve conter algo similar a isso: 
  git remote -v 
Deverá aparecer: my_shell_scripts   git@github.com:user/XXXXX.git (fetch) e XXXXX   git@github.com:user/XXXXX.git (push) 

8 - Execute o comando git push origin master no terminal; 
  git push my_shell_scripts master 
Deverá aparecer: Username for 'https://github.com': digite seu username 
Password for https:user@github.com: digite sua senha 

9 - Vá até o seu GitHub e verifique as novas alterações. 
 - Atualize e verifique se os arquivos subiram 
