/* 10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no cálculo do lucro.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero  

------Interpretando o enunciado------

- dado o custo de venda e valor de venda de um produto
- calcular o lucro, em número absoluto, ao vender 1000 unidades
- imposto de 20% sobre o produto deve considerar no lucro
- caso o valor for menor que 0 deve imprimir uma msg de erro
*/

let costProduct = 1000;
let saleValue = 1500;

if(costProduct > 0 && saleValue > 0){
    let totalProfit = ((saleValue - (costProduct * 1.2)) * 1000)
    console.log(totalProfit);
} else {
    console.log("Error");
}