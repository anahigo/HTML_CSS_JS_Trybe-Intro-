: '

5. Escreva um Shell Script que imprima as palavras "shell", "script", "usando", "estrutura", "repetição", "for", "terminal" na tela, uma palavra por linha. Tente fazer isso usando o menor número de comandos possível.

'


#!/bin/bash

palavras="shell script usando estrutura repetição for terminal"

for palavras in $palavras
    do 
        echo $palavras
done
