# Quiz
https://docs.google.com/forms/d/e/1FAIpQLSfbi5ZzghiU29X6zgiLgeehPYhR4IXzm4D4GYCWQfPZ4s-UHA/alreadyresponded

# Parte I 
1 - Navegue até a raiz do projeto com os scripts em Shell Script; 
  cd .. 
  cd my_shell_scripts 

2 - Verifique se não existe nada sem “commitar” utilizando git status; 
  git status 

2.1 - Caso exista algo, verifique se é necessário e faça o    
- commit  
  git commit –m "Texto" 

- remova-o  
  git rm nome_arquivo 

3 - Crie uma nova branch com o nome shell-script-changes e faça checkout nela; 
  git branch shell-script-changes 
  git checkout shell-script-changes 
  git branch 

4 - Em algum arquivo .sh, na linha #2 , adicione o comentário: “Eu sou Tryber e…”; 
  touch Exercicio_Teste.sh 
  chmod a+rwx Exercicio_Teste.sh 
  ls 
  nano Exercicio_Teste.sh 
  #!/usr/bin bash 
  #Eu sou Trybe e ... 
ctrl+S 
ctrl+X 

4.1 - Faça um git add nome_arquivo.sh; 
  git add Exercicio_Teste.sh 

4.2 - Agora um git commit -m "Mensagem que você gostaria"; 
  git commit -m "Exercicio Parte I" 

4.3 - E por último um git push -u origin shell-script-changes; 
  git push -u origin shell-script-changes 

4.4 - Abra um Pull Request com uma descrição detalhada: 
  - No site Github, na pasta Trybe e no Menu Pull Request 
  - Abrir um New Pull Request 
  - Selecione a base master e compare shell-scrip-changes 
  - Abrir a nova request, no botão "Create a New Request" 
  - Fazer uma descrição do que foi alterado 
  - Abrir um novo pull request, no botão "Create a Pull Request" 

5 - Retorne para a branch principal, master, com o comando: git checkout master; 
  git checkout master 

6 - Verifique que você está na branch master, com o comando: git branch; 
  git branch 

7 - Crie uma nova branch shell-script-updates a partir da master e faça checkout nela 
  git branch shell-script-updates 
  git checkout shell-script-updates 

8 - No mesmo arquivo .sh que você modificou no passo 4, também na linha #2 adicione o comentário: “Vou ter muito sucesso na programação!”; 
  nano Exercicio_Teste.sh 
  vou ter muito sucesso na programação!" 
ctrl+S 
ctrl+X 

8.1 - Faça um git add nome_arquivo.sh 
  git add Exercicio_Teste.sh 

8.2 - Agora um git commit -m "Mensagem que você gostaria" 
  git commit -m "Alteraćão no cometário da frase na linha 2" 

8.3 - E por último um git push -u origin shell-script-updates 
  git push -u origin shell-script-updates 

8.4 - Abra um Pull Request com uma descrição amigável. 
  - No site Github, na pasta Trybe e no Menu Pull Request 
  - Abrir um New Pull Request 
  - Selecione a base master e compare shell-scrip-changes 
  - Abrir a nova request, no botão "Create a New Request" 
  - Fazer uma descrição do que foi alterado 
  - Abrir um novo pull request, no botão "Create a Pull Request 

9 - No Slack, procure pelo canal “code-review-*” relativo à sua turma, e avise que você chegou a este ponto. O próximo passo será realizar o Code Review (CR) do projeto de outro estudante. Entre em pelo menos um Pull Request e deixe alguns comentários para seus colegas; 

10 - Agora, faça o merge das branches shell-script-changes e shell-script-updates na branch master, através do Pull Request: 
  - Primeiro, vá até a página do primeiro Pull Request (branch shell-script-changes) e faça o merge clicando no botão verde “Merge pull request”; 
  - Agora, vá até página do outro Pull Request (branch shell-script-updates) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta. 
  - Você terá que resolver esse conflito antes de “mergear” o Pull Request. Clique no botão “Resolve conflicts”, escolha uma das duas versões do texto (lembre-se de apagar as linha com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em “Mark as resolved” e, em seguida, em “Commit merge”. 
  - Agora você deve conseguir “mergear” seu Pull Request normalmente. 