# Parte I     
1 - Navegue até a pasta unix_tests; 
  cd  
  cd unix_tests  

2 - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha. 
  cat >skills2.txt   
  Internet,  
  Unix,  
  Bash  
ctrl+d  
  ls  
  cat skills2.txt  

3 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.  
  cat >> skills2.txt 
  Shell Script, 
  HTML e CSS 
  Java Script 
  Lógica de Programação 
  React 
ctrl+d  
  cat skills2.txt | sort  

4 - Conte quantas linhas tem o arquivo skills2.txt. 
  wc -l skills2.txt  

5 - Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética. 
  sort skills2.txt | head -3 > top_skills.txt 

6 - Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de sua escolha 
  cat >phrases2.txt  
  “A confiança em si mesmo é o primeiro segredo do sucesso”. (Ralph Waldo Emerson),  
  “Nada de importante no mundo foi realizado sem paixão”. (Georg Wilhelm),  
  “Se não puder destacar-se pelo talento, vença pelo esforço”. (Dave Weinbaum),  
  “Somente os que ousam errar muito podem realizar muito”. (John F. Kennedy),  
  “O pior fracassado do mundo é aquele que perdeu o entusiasmo”. (H. W. Arnold)  
ctrl+d  
  cat phrases2.txt  

7 - Conte o número de linhas que contêm as letras br. 
  grep -ic br phrases2.txt  

8 - Conte o número de linhas que não contêm as letras br. 
  grep -ivc br phrases2.txt  

9 - Adicione dois nomes de países ao final do arquivo phrases2.txt. 
  cat >> phrases2.txt  
  Brasil 
  Argentina  
ctrl+d  
  cat phrases2.txt  

10 - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt 
  cat phrases2.txt countries.txt>bunch_of_things.txt 
  cat bunch_of_things.txt 

11 - Ordene o arquivo bunch_of_things.txt. 
  sort <bunch_of_things.txt  

# Parte II - Permissões 
1 - Navegue até a pasta unix_tests; 
  cd  
  cd unix_tests  
 
2 - Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l; 
  ls -l 
  chmod a+rw bunch_of_things.txt 
  ls -l  

3 - Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l; 
  chmod a-w bunch_of_things.txt  
  ls -l  

4 - Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt. Leia este artigo para entender mais sobre o que é e como funciona essa numeração 644. 
  chmod 644 bunch_of_things.txt  
  ls -l  

# Parte III - Processos & Jobs 
1 - Liste todos os processos 
  ps  

2 - Agora use o comando sleep 30 & 
  sleep 30 &  

3 - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo); 
  ps  
  kill PID_number  
  ps  

4 - Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background; 
  sleep 30 
ctrl + z  
  bg  
  kill PID_number  
  ps  

5 - Crie um processo em background que rode o comando sleep por 300 segundos. 
  sleep 300 & 
  ps  

6 - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. Você deve criá-los em foreground (sem usar o &) e enviá-los para background após cada um começar a executar. 
  sleep 200  
ctrl + z  
  ps  
  sleep 100  
ctrl + z  
  ps  

7 - Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo (você vai precisar trazer o processo para foreground e suspendê-lo, ou enviar um sinal). 
  jobs  
  fg %jobnumber  
ctrl + c  
  jobs 

8 - Retome a execução do processo sleep 100 em background. 
  fg %jobnumber  
ctrl + c  
  jobs  

9 - Termine a execução de todos os processos sleep (mate os processos). 
  jobs  
  kill %jobnumber  
  jobs  
  ps  

# Parte IV - O despertar do terminal 
* E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do UNIX? Leia este artigo para fazer os exercícios de aquecimento abaixo https://canaltech.com.br/linux/11-comandos-divertidos-e-inuteis-para-usar-no-linux/ 

1 - Abra o terminal e execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+c para voltar ao terminal;  
  sudo apt-get install cmatrix  
  cmatrix  
ctrl+c  

2 - Crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >; 
  sudo apt-get install fortune  
  fortune > fortune.txt 

3 - Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc; 
  wc -w fortune.txt  

4 - Execute o comando sl. Agora tente sl -f; 
  sudo apt-get install sl  
  sl  
  sl -f  

5 - Execute o comando cowsay. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt; 
  sudo apt-get install cowsay  
  fortune | cowsay  

6 - Descubra os fatores primos do número 42 usando o comando factor; 
  factor  
  42  
ctrl+d  

7 - Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev. 
  rev - executando o comando 
  Good news from afar can bring you a welcome visitor 
ctrl+d  

8 - Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer!  
  telnet towel.blinkenlights.nl  