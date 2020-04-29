/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.  

------Resumo Enunciado------
- função 
- recebe array de nomes 
- retorna o onome com maior quantidade caracter
*/

function largerWord(word) {
  let largerWords = word[0];

  for (let index in word) {
    if(largerWords.length <  word[index].length) {
      largerWords = word[index];
    }
  }
  return largerWords;
}

console.log(largerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));