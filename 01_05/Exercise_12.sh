: '

11. Modifique o Shell Script do exercício anterior para receber o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro). Adicione também um mensagem mostrando como eram o como vão ficar os nomes dos arquivos a serem modificados.

'

#!/bin/bash

diretorio=$1
extensao=$2

dia=$(date +%F)

cd $diretorio

for arquivo in `ls *.png`
do
    echo "Os arquivos $arquivo foram renomeados como $(dia)-$(arquivo)"
    mv $arquivo $(dia)-$(arquivo)
done
    