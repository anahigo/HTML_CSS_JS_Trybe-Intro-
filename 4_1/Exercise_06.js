/* 6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals  

------Interpretando o enunciado------
- Recebe a peça xadrez e retorna o movimento que faz
- receber o nome tanto com letra maiscula ou minuscula -lowercase 
- peça inexistente - mensagem de erro
*/

switch(chessPiece.toLowerCase()) {
  case 'pawn':
    console.log('pawn -> movement: straight and forward | move: one square');
    break;
  case 'bishop':
    console.log('bishop -> movement: diagonally | move :one to seven squares');
    break;
  case 'rook':
    console.log('rook -> movement: straight | move: one to seven squares');
    break;
  case 'knight':
    console.log('knight -> movement: shape looks similar to the shape of the letter "L" | move in one direction two squares and then turns to the left or right moving one more square');
    break;
  case 'queen':
    console.log('queen -> movement: diagonally or straight | move: one to seven squares');
    break;
  case 'king':
    console.log('king -> movement: diagonally or straight | move: one square');
    break;
  default:
    console.log('invalid piece!');
}


