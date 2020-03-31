/* 8- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if.  

------Interpretando o enunciado------
- numero 1, numero 2 e numero 3
- true se numero 1 ou numero 2 ou numero 3 for par (%2 === 0)
- false se numero 1 ou numero 2 ou numero 3 for impar (%2 !== 0)
*/

function even(number1, number2, number3) {
    if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
       return true;
    } else {
        return false;
    }
}    
console.log(even(2020, 1983, 1953))


