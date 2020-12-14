: '

4. Escreva um Shell Script que verifique se o caminho até um arquivo existe (“file path”). Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". O _ nas mensagens deve ser substituído pelo (“file path”).

'


#!/bin/bash

arquivo="/home/ana/Documentos/Curso_Trybe/Exercicios/Aula_03/Exercicio_Trybe/Exercicio_01.sh"

if [ -e "$arquivo" ]
then
    echo "O caminho $arquivo está habilitado"
fi

if [ -w "$arquivo" ]
then 
    echo "Você tem permissão para editar $arquivo"
else
    echo "Você NÃO foi autorizado a editar $arquivo"
fi