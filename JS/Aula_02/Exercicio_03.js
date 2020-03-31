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
        
for (let i = 0; i < n ; i+=1) {
    for (let j = 0; j <= n; j+=1) {
        if (j < inputPosition) { 
            inputLine = inputLine + ' ';
        }
        else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine); 
    inputPosition = inputPosition - 1;
    inputLine = '';
}
