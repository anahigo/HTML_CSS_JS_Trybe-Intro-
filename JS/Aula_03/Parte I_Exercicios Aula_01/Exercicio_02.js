/* 2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados  

----Interpretando o enunciado---
- number 1 e number 2
- se number 1 for maior imprima o number 1
- se number 2 for maior imprima o number 2
*/

function largestNumber(number1, number2) {
    if (number1 > number2) {
        return 'the largest number is', number1;
    } else if  (number1 < number2) {
        return 'the largest number is', number2;
    } else {
        return 'the numbers is equal'
    }
}

console.log(largestNumber(2020, 1983))