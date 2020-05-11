/*1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false

------Resumo Enunciado------
- função 
- recebe string 
- retorna true se for palindromo ou false se nao for palidromo
*/

function checkingPalindrome(word) {
  let arrayLetters = word.split('');
  let isPalindrome = true; 

  for (let index in arrayLetters){
    if (arrayLetters[index] !== arrayLetters[(arrayLetters.length - 1) - index]) {
      isPalindrome = false;
    }

    if(index <= (arrayLetters.length / 2) + 1)
      break;
  }
  return isPalindrome
}

console.log(checkingPalindrome("arara"));
console.log(checkingPalindrome("macarrao"));   