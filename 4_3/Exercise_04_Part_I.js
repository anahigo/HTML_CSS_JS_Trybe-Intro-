/* 4- Faça um programa que, dado um valor definido numa variável, retorne “positive” se esse valor for positivo, “negative” se for negativo e “zero” caso contrário.  

------Interpretando o enunciado------
- number
- se number for maior que 0 imprima positive 
- se number for menor que 0 imprima negative
- se number for igual a 0 imprima zero
*/

function number(n) {
  if (n > 0) {
    return 'positive';
  } else if (n < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}    

console.log(number(0))