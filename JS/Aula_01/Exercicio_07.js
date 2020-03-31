/* 7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. 

------Interpretando o enunciado------

- nota - 0 a 100
- se a nota for maior ou igual a 90 e menor e igual a 100 - imprima nota A 
- se a nota for maior ou igual a 80 e menor que 90 - imprima nota B
- se a nota for maior ou igual a 70 e menor que 80 - imprima nota C
- se a nota for maior ou igual a 60 e menor que 70 - imprima nota D
- se a nota for maior ou igual a 50 e menor que 60 - imprima nota E
- se a nota for maio ou igual a 0 e menor  que 50 - imprima nota F   
- se a nota for menor que 0 ou maior que 100 - imprima nota inválida
*/

let note = 95;

if (note >= 90 && note <= 100) {
    console.log('Note A')
} else if (note >= 80 && note < 90) {
    console.log('Note B')
} else if (note >= 70 && note < 80) {
    console.log('Note C')
} else if (note >= 60 && note < 70) {
    console.log('Note D')
} else if (note >= 50 && note < 60) {
    console.log('Note E')
} else if (note >= 0 && note < 50) {
    console.log('Note F')
} else (note < 0 && note > 100) 
    console.log('Invalid Note')