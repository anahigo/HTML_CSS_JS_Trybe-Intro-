#!/bin/bash

var1="Teste01"
var2="Teste02"
var3="Teste" 


if ls $var1
then
    echo "Diretório $var1 encontrado"
elif ls $var2
then
    echo "Diretório $var2 encontrado"
elif ls $var3
then
    echo "Diretório $var3 encontrado"  
else      
    echo "Diretório não encontrado"
fi
