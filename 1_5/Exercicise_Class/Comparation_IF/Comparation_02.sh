#!/bin/bash

read -p "Escreva o primeiro nome:  " nom1

read -p "Escreva o segundo nome:  " nom2

if [ $nom1 = $nom2 ]
then
    echo "$nom1 é igual ao $nom2"                                
else 
    echo "$nom1 é diferente de $nom2" 
fi
