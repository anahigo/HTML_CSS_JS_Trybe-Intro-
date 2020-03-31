/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
1n = 5
2
3*
4**
5***
6****
7*****

----Interpretando o enunciado----

- valor n qualquer;
- sendo n maior que 1;
- imprimir um triangulo de astericos
        -  com n coluna na base(primeira linha)
        -  onde as outras linhas ira diminuindo um asterisco 
*/

let n = 10;
let inputLine = ''; 

for (let index = 1; index <= n; index++) {
  inputLine += '*';  
  console.log(inputLine);
}