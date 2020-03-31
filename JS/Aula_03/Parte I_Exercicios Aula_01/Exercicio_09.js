/* 9- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.
Bônus: use somente um if. 
 
------Interpretando o enunciado------
- numero 1, numero 2 e numero 3
- true se numero 1 ou numero 2 ou numero 3 for impar (%2 === 1)
- false se numero 1 ou numero 2 ou numero 3 for par (%2 !== 1)
- Usar somente um if

*/

function odd(number1, number2, number3) {
    if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
        return true;
    } else {
        return false;
    }
}    
console.log(odd(2020, 1983, 1953))