#!/bin/bash

read -p "Digite um número:  " num1

read -p "Digite outro número:  " num2

echo "scale=2; $num1 / $num2" | bc