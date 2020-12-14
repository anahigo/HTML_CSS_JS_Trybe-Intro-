# 1
Corrija o código para que i declarado na instrução if seja uma variável separada daquela declarada na i primeira linha da função. Certifique-se de não usar a palavra-chave var em nenhum lugar do código.

Este exercício foi elaborado para ilustrar a diferença entre como as palavras-chave var e let atribuem escopo à variável declarada. Ao programar uma função semelhante à usada neste exercício, geralmente é melhor usar nomes de variáveis ​​diferentes para evitar confusão.

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

# 2
Uma matriz é declarada como const s = [5, 7, 2]. Altere a matriz para [2, 5, 7] usar várias atribuições de elemento.

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

# 3 
Crie uma função que receba um número e retorne seu fatorial.

- Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.

- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

# 4 
Crie uma função que receba uma frase e retorne qual a maior palavra.

Exemplo: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

# 5
Crie uma página que contenha:

- Um botão ao qual será associado um event listener;

- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

# 6
Crie um código JavaScript com a seguinte especificação:

Não se esqueça de usar template literals

- Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"

- Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

- Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

Exemplo:
"Tryber x aqui!

Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe".