const sum = require('./sum');

describe('sum', () => {
  // Teste se o retorno de sum(4, 5) é 9
  it('Four plus five equal nine', () => {
    expect(sum(5,4)).toBe(9);
  });
  //Teste se o retorno de sum(0, 0) é 0
  it('Zero plus zero equal zero', () => {
    expect(sum(0,0)).toBe(0);
  });
  // Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
  it('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  // Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
  it('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});