#!/bin/bash

arquivos="/home/ana/Documentos/Curso_Trybe/Exercicios/Aula_03/Exercicio_Video/listas.txt"

for nomes in `cat $arquivos`
do
    echo $nomes
done