/* 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false 

------Resumo Enunciado------
- função 
- recebe string 'word' e string 'ending'
- verificar se a string ending é o final da string word 
- considerar sempre que a string ending é menor que a string word
- retornar true ou false?
*/

function checkEndOfWord(word, endOfWord) {
  word = word.split("");
  endOfWord = endOfWord.split("");
  control = true;
  
  for (let index = 0; index < endOfWord.length; index++) { //index = index + 1
    if(word[word.length - endOfWord.length + index] !== endOfWord[index]) {
      control = false;
    }
  }
  return control;
}
  
console.log(checkEndOfWord('trybe', 'be'));
console.log(checkEndOfWord('cristina', 'ana'));


