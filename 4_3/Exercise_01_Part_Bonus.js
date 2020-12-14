/*(Difícil) Faça um programa que receba uma string em algarismos romans e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:

Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

------Resumo Enunciado------
- programa  
- recebe string de algarismo romans - string é um array
- retorna o número que a string representa
- objeto - cada letra - um numeral
- quando: 
    .número pequeno à direita do número grande - somar 
    .número pequeno à esquerda do número grande - subtrair 
*/

const roman = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function romans(text) {
  text = text.toUpperCase();
  let number = 0;
  let vector = [];

  for(let i = 0; i < text.length ; i++) {
    for(key in roman) {
      if(key === text[i]) {
        vector.push(roman[key]);
      }
    }
  }
  
  for(let i = 0; i < vector.length ; i++) {
    if(vector[i] < vector[i + 1]) {
      number += vector[i + 1] - vector[i];
      i++;
    } else {
      number += vector[i];
    }
  }
  return number;
}

console.log(romans('viii'));