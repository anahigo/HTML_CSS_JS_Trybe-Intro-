/* 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.  

------Interpretando o enunciado------
- number 1, number 2 e number 3
- se number 1 for maior imprima o number 1
- se number 2 for maior imprima o number 2
- se number 3 for maior imprima o number 3
*/

let number1 = 2020;
let number2 = 1983;
let number3 = 1953;

if (number1 > number2 && number1 > number3) {
    console.log('the largest number is', number1);
} else if (number2 > number1 && number2 > number3) {
    console.log('the largest number is', number2);
} else {
    console.log('the largest number is', number3);
}


