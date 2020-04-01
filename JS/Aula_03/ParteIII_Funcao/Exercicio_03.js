/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6. 

------Resumo Enunciado------
- função 
- recebe array de numeros inteiros 
- retorna o índice de menor valor
*/

function smallValueIndex(numbers){
    let valueIndex = 0
    for (let index in numbers) {
        if(numbers[valueIndex] > numbers[index]) {
            valueIndex = index;
        }
    }
    return valueIndex;
}    

console.log(smallValueIndex([2,3,6,7,10,1]));
