# Método Window setTimeout ()
# Definição e Uso
O método setTimeout () chama uma função ou avalia uma expressão após um número especificado de milissegundos.
1. Dica: 1000 ms = 1 segundo.
2. Dica: a função é executada apenas uma vez. Se você precisar repetir a execução, use o método setInterval () .
3. Dica: Use o método clearTimeout () para evitar que a função seja executada.

# Sintaxe
setTimeout(function, milliseconds, param1, param2, ...)

# Valores de Parâmetro
* function - Requeridos. A função que será executada
* milliseconds - Opcional. O número de milissegundos a aguardar antes de executar o código. Se omitido, o valor 0 é usado
* param1, param2, ...	- Opcional. Parâmetros adicionais para passar para a função (não suportado no IE9 e anteriores)

# Método Window setInterval ()
# Definição e Uso
O método setInterval () chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos).

O método setInterval () continuará chamando a função até que clearInterval () seja chamado ou a janela seja fechada.

O valor de ID retornado por setInterval () é usado como o parâmetro para o método clearInterval ().
1. Dica: 1000 ms = 1 segundo.
2. Dica: para executar uma função apenas uma vez, após um número especificado de milissegundos, use o método setTimeout () .

# Sintaxe
setInterval(function, milliseconds, param1, param2, ...)

# Valores de Parâmetro
* function - Requeridos. A função que será executada
* milliseconds - Requeridos. Os intervalos (em milissegundos) sobre a freqüência de execução do código. Se o valor for menor que 10, o valor 10 é usado
* param1, param2, ...	- Opcional. Parâmetros adicionais para passar para a função (não suportado no IE9 e anteriores)
