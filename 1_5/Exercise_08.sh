: '

8. Modifique o Shell Script do exercício anterior para aceitar uma quantidade ilimitada de arquivos ou diretórios como argumento (ou parâmetro).

'

#!/bin/bash

dado=$@

for dado in $dado
do    
    if [ -f "$dado" ] 
    then
        echo "$dado é um arquivo comum"
    elif [ -d "$dado" ]
    then 
        echo "$dado é um diretório"
    else
        echo "$dado é outro tipo de arquivo"
    fi
ls -l $dado
done
