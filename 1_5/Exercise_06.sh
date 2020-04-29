: '

6. Escreva um Shell Script que peça ao usuário um caminho de arquivo ou diretório e, em seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.

'

#!/bin/bash

read -p "Escreva o nome de um arquivo ou um diretório:  " dado

echo "$dado"

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


