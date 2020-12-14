#!/bin/bash

read -p "Escreva o primeiro número:  " num1

read -p "Escreva o segundo número:  " num2

if [ $num1 -eq $num2 ]
    then
        echo " $num1 é igual $num2 "                                
    else
        echo " $num1 é diferente $num2 "
fi