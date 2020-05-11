/* 3- Agora inverta o lado do triângulo. Por exemplo:
1n = 5
2
3    *
4   **
5  ***
6 ****
7***** 

----Interpretando o enunciado----

- valor n qualquer;
- sendo n maior que 1;
- imprimir um triangulo de astericos
        -  com n coluna na base(primeira linha)
        -  onde as outras linhas ira diminuindo um asterisco, ao contrário */
             

let n = 10;
let inputLine = '';
let symbol = "*";
let inputPosition = n;
        
for (let indexY = 0; indexY < n ; indexY++) { //indexY++ == indexY + 1
  for (let indexX = 0; indexX <= n; indexX++) { //index++ == index + 1
    if (indexX < inputPosition) { 
      inputLine += ' '; //inputLine = inputLine + ' '
    } else {
      inputLine += symbol; //inputLine = inputLine + symbol
    }
  }
  console.log(inputLine); 
  inputPosition -= 1; //inputPosition  = inputPosition - 1
  inputLine = '';
}
