: '

7. Modifique o Shell Script do exercício anterior de forma que ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário. Pesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no Shell Script.

'


#!/bin/bash

dado=$1

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