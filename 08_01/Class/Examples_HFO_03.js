/*  Higher Order Function (HOF) */ 

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const printValues = arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

/*=> Cada elemento do array: josé
   Cada elemento do array: 50
   Cada elemento do array: 0.25
   Cada elemento do array: { comida: 'Chocolate' }*/


// Sua estrutura:

arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});
/*=> Cada elemento do array: josé
   Cada elemento do array: 50
   Cada elemento do array: 0.25
   Cada elemento do array: { comida: 'Chocolate' }*/

/*Suas partes:
- arrayOfValues - Nome do array que será percorrido;
- .forEach - A HOF, pode ser, .find, .filter, .some, .every;
- element - Valor do elemento do array;
- (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyNote.
*/

