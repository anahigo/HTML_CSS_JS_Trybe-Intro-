/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
1n = 5
2
3*****
4*****
5*****
6*****
7*****

----Interpretando o enunciado----

- valor n qualquer;
- sendo n maior que 1;
- imprimir um quadrado de astericos
        -  com n colunas  
        -  com n linhas
*/

 
let n = 10;
let inputLine = ''

for (let index = 0; index < n; index++) {
    let inputLine = '';
  for (let indexY = 0; indexY < n; indexY++) {
    inputLine += '*';
  }
  console.log(inputLine);
}