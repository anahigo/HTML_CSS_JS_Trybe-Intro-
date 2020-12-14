#!/bin/bash

for item in /home/ana/Documentos/Curso_Trybe/Exercicios/Aula_03/Exercicio_Video/*
do
    if [ -d $item ]
    then
        echo "o item $item é um diretório"
    elif [ -f $item ]
    then
        echo "o item $item é um arquivo"
    else
        echo "o item $item não é um diretório e nem um arquivo"
    fi
done