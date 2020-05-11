/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.  

------Resumo Enunciado------
- função 
- recebe array de nomes 
- retorna o onome com maior quantidade caracter
*/

function largerName(arrayNames) {
  let largerName = arrayNames[0];
  for (let index in arrayNames) {
    if (largerName.length < arrayNames[index].length) {
      largerName = arrayNames[index];
    }
  }
  return largerName;
}


console.log(largerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));