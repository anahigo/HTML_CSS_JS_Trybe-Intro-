/*2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.

------Resumo Enunciado------
- função 
- recebe array de numeros inteiros 
- retorna o índice de maior valor
*/

function higherValueIndex(numbers){
    let valueIndex = 0
    for (let index in numbers) {
        if(numbers[valueIndex] < numbers[index]) {
            valueIndex = index;
        }
    }
    return valueIndex;
}    
  
  console.log(higherValueIndex([2,3,6,7,10,1]));

 