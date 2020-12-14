/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.

Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero. 

----Interpretando o enunciado---
- numero é primo ou não
- numero primo - n / n === 0 e n / n === 1 

*/

function primo(number) {
  for (let index = 2; index <= number / 2 + 1; index++) { //index++ == index + 1
    if (number % index === 0) {
      console.log(`${number} isn't prime!`);
      break;
    } else {
      console.log(`${number} is prime!`);
      break;
    }
  }
}

console.log(primo(97))