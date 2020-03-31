/* 4- Faça um programa que, dado um valor definido numa variável, retorne “positive” se esse valor for positivo, “negative” se for negativo e “zero” caso contrário.  

------Interpretando o enunciado------
- number
- se number for maior que 0 imprima positive 
- se number for menor que 0 imprima negative
- se number for igual a 0 imprima zero
*/

let number = 0;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}