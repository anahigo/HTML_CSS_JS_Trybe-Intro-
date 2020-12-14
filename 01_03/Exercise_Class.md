# Parte I 
1 - Digite ls  
  ls  

2 - Digite ls -a 
  ls -a  

3 - Digite mkdir unixstuff e depois ls  
  mkdir unixstuff  
  ls  

4 - Digite cd unixstuff e depois ls 
  cd unixstuff  
  ls  

* Exercício 1a - Crie outro diretório dentro do diretório unixstuff chamado backup. Antes verificar se está no diretório unixstuff, se tiver continuar e se não tiver voltar para o anterior 
  mkdir backup   
  ls  

5 - Digite ls –a 
  ls -a  

6 - Digite cd . 
  cd .  

7 - Digite cd ..  
  cd ..  

8 - Digite pwd  
  pwd  

*Exercício 1b - Use os comandos cd, ls e pwd para explorar o sistema de arquivos 
  ls  
  cd Documentos  
  ls  
  cd Curso_Trybe 
  ls  
  pwd  

9 - Digite cd e depois ls unixstuff 
  cd  
  ls unixstuff  

10 - Digite ls backup e depois ls unixstuff/backup 
  ls backup  
  ls unixstuff/backup  

11 - Digite ls ~/unixstuff  
  ls ~/unixstuff  

12 - Digite ls ~ e depois ls ~/.. 
  ls ~   
  ls ~/..  

# Parte II 
Antes de começar o exercício, salve o documento science.txt na pasta unixstuff 
1 - Digite cd ~/unixstuff e depois ls 
  cd ~/unixstuff 
  ls  

* Exercício 2a - Crie um backup do seu arquivo science.txt, copiando-o para um arquivo chamado science.bak  
  cp science.txt science.bak  
  ls  

2 - Digite mv science.bak backup/ e depois ls e ls backup 
  mv science.bak backup/ - movendo o arquivo  
  ls - listando os arquivos e diretórios 
  ls backup - listando os arquivos e diretórios 

3 - Digite cp science.txt temfile.txt, depois ls, rm temfile.txt, ls 
  cp science.txt temfile.txt  
  ls  
  rm temfile.txt  
  ls  

4 - Digite rmdir backup 
  rmdir backup  

* Exercício 2b - Crie um diretório chamado tempstuff usando o mkdir e remova-o usando o comando rmdir 
  mkdir tempstuff 
  ls 
  rmdir tempstuff  
  ls  

5 - Digite clear  
  clear  

6 - Digite cat science.txt 
  cat science.txt  

7 - Digite less science.txt  
  less science.txt 

8 - Digite head science.txt e depois clear 
  head science.txt  
  clear  

9 - Digite head -5 science.txt e depois clear 
  head -5 science.txt   
  clear  

10 - Digite tail science.txt e depois clear 
  tail science.txt  
  clear  

11 - Digite tail -15 science.txt e depois clear
  tail -15 science.txt  
  clear  

12 - Digite less science.txt, depois no arquivo digite /science e clear 
  less science.txt  
  /science  
  clear 

13 - Digite grep science science.txt 
  grep science science.txt  

14 - Digite grep Science science.txt 
  grep Science science.txt  

15 - Digite grep -i science science.txt 
  grep -i science science.txt  
 
16 - Digite grep -i 'spinning top' science.txt 
  grep -i 'spinning top' science.txt  

17 - Digite grep -v science science.txt 
  grep -v science science.txt  

18 - Digite grep -n science science.txt 
  grep -n science science.txt  

19 - Digite grep -c science science.txt 
  grep -c science science.txt  

20 - Digite grep -ivc science science.txt 
  grep -ivc science science.txt  

21 - Digite wc -w science.txt 
  wc -w science.txt  

22 - Digite wc -l science.txt 
  wc -l science.txt  

# Parte III    
1 - Digite ls list* 
  ls list*  

2 - Digite ls *list 
  ls *list  

3 - Digite ls ?list 
  ls ?list  

4 - Digite man wc         
  man wc  

5 - Digite whatis wc         
  whatis wc  

6 - Digite apropos copy 
  apropos copy  

7 - Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele. 
  pwd  
  ls -a  

8 - Apague o diretório backup. 
  rm - rd backup 
  ls  

9 - Limpe o terminal. 
  clear  

10 - Para os exercícios, 14 e 15, crie um arquivo de texto com o conteúdo: Internet, Unix, Bash, HTML, CSS, JavaScript, React, SQL 
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

11 - Mostre na tela as 5 primeiras skills do arquivo skills.txt. 
  head -5 skills.txt  

12 - Mostre na tela as 4 últimas skills do arquivo skills.txt. 
  tail -4 skills.txt  

13 - Apague todos os arquivos que terminem em .txt.
  rm *.txt
  ls 

# Exercício Aula - Quiz - https://docs.google.com/forms/d/e/1FAIpQLSepTyiKBu1XitWMzZlFIQ4WRFtM7ejqO7P8VWkfLnMkHltwRQ/alreadyresponded



