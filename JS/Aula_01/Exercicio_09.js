/* 9- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.
Bônus: use somente um if. 
 
------Interpretando o enunciado------
- numero 1, numero 2 e numero 3
- true se numero 1 ou numero 2 ou numero 3 for impar (%2 === 1)
- false se numero 1 ou numero 2 ou numero 3 for par (%2 !== 1)
- Usar somente um if

*/

let number1 = 2020;
let number2 = 1983;
let number3 = 1953;

if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
    console.log(true);
} else {
    console.log(false);
}

//Ou usando somente um if 

let number1 = 2020;
let number2 = 1983;
let number3 = 1953;
let odd = false;

if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
    is0dd = true;
}

console.log(is0dd)