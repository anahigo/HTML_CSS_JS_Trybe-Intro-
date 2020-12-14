/* 
# Para fixar
1 - Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:

const randomNumber = () => // Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0

Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().

2 - Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.

3 - Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.
*/

const randomNumber = () => Math.floor((Math.random() * 100) + 1);

const isDivisible = (number) => (randomNumber() % number) === 0;

describe('isDivisible', () => {
  it('deveria chamar a função randomNumber quando a função isDivisible é invocada', () => {
    randomNumber = jest.fn()
    isDivisible(10);
    expect(randomNumber).toHaveBeenCalled();
  })
  it('quando randomNumber() retorna um número par e isDivisible() recebe um 2, o retorno é true.', () => {
    randomNumber = jest.fn().mockReturnValue(12)
    expect(isDivisible(2)).toBe(true);
  })
  it('a função isDivisible tem os retornos esperados', () => {
    randomNumber = jest.fn()
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)
      .mockReturnValue(4)
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(3)).toBe(true);
    expect(isDivisible(3)).toBe(false);
    expect(isDivisible(4)).toBe(true);
  });
})