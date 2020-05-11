# Parte I - Criação de arquivos e diretório 
1 - Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele. 
  cd  
  mkdir unix_tests  

2 - Crie um arquivo de texto com o nome trybe.txt. 
  cd unix_tests  
  touch trybe.txt  
  ls  

3 - Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt. 
  cp trybe.txt trybe_backup.txt 
  ls - listando os arquivos e diretórios 

4 - Renomeie o arquivo trybe.txt. 
  mv trybe.txt trybe_2.text 
  ls  

5 - Dentro de unix_tests, crie um novo diretório chamado backup. 
  mkdir backup   
  ls  

6 - Mova o arquivo trybe_backup.txt para o diretório backup. 
  mv trybe_backup.txt backup/  
  cd backup  
  ls  

7 - Dentro de unix_tests, crie um novo diretório chamado backup2. 
  cd ..  
  mkdir backup2  
  ls  

8 - Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2. 
  cd backup  
  mv trybe_backup.txt ~/unix_tests/backup2 
  cd ..  
  cd backup2  
  ls  

9 - Apague a pasta backup. 
  cd ..  
  rmdir backup  

10 - Renomeie a pasta backup2 para backup. 
  mv backup2 backup 
  Ls 
 
11 - Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele. 
  pwd  
  ls -a  

12 - Apague o diretório backup. 
  rm - rd backup  
  ls      

13 - Limpe o terminal. 
  clear  

14 - Para os exercícios, 15 e 16, crie um arquivo de texto com o conteúdo: Internet, Unix, Bash, HTML, CSS, JavaScript, React, SQL 
  cat >skills.txt 
enter  
  Internet 
  Unix 
  Bash 
  HTML 
  CSS 
  JavaScript 
  React 
  SQL  
ctrl+d 
  ls  
  cat skills.txt  

15 - Mostre na tela as 5 primeiras skills do arquivo skills.txt. 
  head -5 skills.txt  

16 - Mostre na tela as 4 últimas skills do arquivo skills.txt. 
  tail -4 skills.txt  

18 - Apague todos os arquivos que terminem em .txt. 
  rm *.txt  
  ls  

# Parte II - Manipulação & Busca 
1 - Na pasta unix-tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl: 
  curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries" 
  ls  

2 - Mostre todo o conteúdo do arquivo countries.txt na tela. 
  cat countries.txt 

3 - Mostre o conteúdo de countries.txt, página por página, até encontra a Zambia. 
  less countries.txt  
enter  
barra de espaço          
  q 

4 - Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia. 
  less countries.txt 
enter 
  /Zambia 
  q  

5 - Busque por Brazil no countries.txt.  
  less countries.txt  
enter  
  /Brazil  
  q  

6 - Busque novamente por brazil, mas agora utilizando o lower case. 
  less countries.txt  
enter  
  /brazil  
  q  

7 - Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal. 
  cat >phrases.txt  
enter 
  “É sempre divertido fazer o impossível”. (Walt Disney); 
  “Tente de novo. Fracasse de novo. Mas fracasse melhor”. (Samuel Beckett);   
  “Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.” (Henry Ford);   
  “Comemore os seus sucessos. Veja com humor os seus fracassos”. (Sam Walton);  
  “Toda empresa precisa ter gente que erra, que não tem medo de errar e que aprende com erro”. (Bill Gates) ctrl+d  
  ls  

8 - Busque pelas frases que não contenham a palavra fox. 
  grep -v fox phrases.txt  

9 - Conte o número de palavras do arquivo phrases.txt. 
  wc -w phrases.txt  

10 - Conte o número de linhas do arquivo phrases.txt. 
  wc -l phrases.txt  

11 - Crie os arquivos empty.tbt e empty.pdf. 
  touch empty.tbt  
enter 
  touch empty.pdf  
enter      

12 - Liste todos os arquivos do diretório unix_tests. 
  ls - listando os arquivos e diretórios 

13 - Liste todos os arquivos que terminem com txt. 
  ls *.txt  

14 - Liste todos os arquivos que terminem com tbt ou txt. 
  ls *.txt *.tbt  

15 - Acesse o manual do comando ls. 
  man ls  
  q  