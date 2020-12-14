const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  //Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  it('returns `fizzbuzz` if the argument is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  //Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  it('return `fizz` if the argument is divisible only by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  //Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  it('return `fizz` if the argument is divisible only by 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  //Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  it('returns the own argument if it is not disisible by 3 or 5', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });
  //Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado 
  it('returns `false` if the argument is not a number', () => {
    expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});
