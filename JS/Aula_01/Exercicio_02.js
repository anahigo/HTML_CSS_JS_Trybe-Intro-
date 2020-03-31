/* 2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados  

----Interpretando o enunciado---
- number 1 e number 2
- se number 1 for maior imprima o number 1
- se number 2 for maior imprima o number 2
*/

let number1 = 2020;
let number2 = 1983;

if (number1 > number2) {
    console.log('the largest number is', number1);
} else if  (number1 < number2) {
    console.log('the largest number is', number2);
} else {
    console.log('the numbers is equal')
}
