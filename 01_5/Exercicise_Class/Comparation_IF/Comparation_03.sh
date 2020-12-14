#!/bin/bash

arquivo1="comparacao.sh"

if [ -e $arquivo1 ]
then
    echo "$arquivo1 existe"                                
else 
    echo "$arquivo2 não existe  " 
fi