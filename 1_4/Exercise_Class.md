# Parte I 
1 - Digite cat e pressone enter, depois ctrl + D  
  cat + enter  
  ctrl + D  

2 - Digite cat> list1 e pressione enter, depois digite maçã, mamão, manga, kiwi e pressione ctrl+D. Digite cat list1 e depois ls 
  cat> list1 + enter  
  maçã,  
  mamão,  
  manga,  
  kiwi  
ctrl + D  
 cat list1  
 ls  

* Exercício 3a - Usando o método acima, crie outro arquivo chamado list2 contendo as seguintes frutas: morango, maracujá, abacaxi, abacate e banana. Leia o conteúdo da list2 
  cat> list2 + enter  
  morango,  
  maracujá,  
  abacaxi,  
  abacate e  
  banana  
ctrl + D  
  cat list2  
  ls - listando os arquivos e diretórios 

3 - Digite cat>>list1 e pressione enter, depois digite laranja e limão e pressione ctrl+D. Digite cat list1 
  cat>>list1 + enter  
  laranja,  
  limão         
ctrl + D  
  cat list1  

4 - Digite cat list1 list2>biglist e depois cat biglist 
  cat list1 list2>biglist  
  cat biglist  

5 - Digite sort e pressione enter, depois digite cachorro, gato, passáro, macaco e pressione ctrl+D.      
  sort + enter 
  Cachorro 
  Gato 
  Pássaro 
  Macaco 
ctrl+D  

6 - Digite sort <biglist 
  sort <biglist  

7 - Digite sort <biglist> slist 
  sort <biglist> slist  
 
8 - Digite who 
  who  

9 - Digite who > names.txt          
  who > names.txt  

10 - Digite sort < names.txt 
  sort < names.txt  

11 - Digite who | sort 
  who | sort  

12 - Digite who | wc -1 
  who | wc -1  

* Exercício 3b - Usando pipes, exiba todas as linhas da list1 e da list2 contendo a letra m e classifique o resultado 
  cat list1 list2 | grep m | sort 

# Parte II          
1 - Digite chmod go-rwx biglist 
  chmod go-rwx biglist  

2 - Digite chmod a+rw biglist 
  chmod a+rw biglist  

* Exercício 5a - Tente alterar as permissões de acesso no arquivo science.txt e no diretório backup. Use ls -l para verificar se as permissões foram alteradas 
  ls -l  
  chmod o-rwx science.txt  
  ls -l  
  chmod g-rwx science.txt  
  ls -l  
  chmod u-rwx science.txt  
  ls -l  
  chmod a+rwx science.txt  
  ls -l  
  chmod o-rwx backup   
  ls -l  
  chmod g-rwx backup  
  ls -l         
  chmod u-rwx backup  
  ls -l  
  chmod a+rwx backup     
 
3 - Digite ps 
  ps  

4 - Digite sleep 10 
  sleep 10  

5 - Digite sleep 10& 
  sleep 10&  

6 - Digite sleep 1000 
  sleep 1000 

7 - Digite bg 
  bg 

8 - Digite jobs 
  jobs 

9 - Digite fg %jobnumber 
  fg %jobnumber 

10 - Digite fg %1 
  fg %1 

11 - Digite sleep 100 e pressione ctrl+c 
  sleep 100 
ctrl+c 

12 - Digite kill %jobnumber 
  kill %jobnumber 

13 - Digite sleep 100& e depois digite jobs 
  sleep 100& 
  jobs 

14 - Digite kill %4 
  kill %4 

15 - Digite sleep 1000 & e depois digite ps 
  sleep 1000 & 
  ps 

16 - Digite kill 20077 
  kill 20077 

17 - Digite kill -9 20077 
  kill -9 20077