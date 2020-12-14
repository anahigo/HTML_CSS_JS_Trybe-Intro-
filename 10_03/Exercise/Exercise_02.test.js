const number = require('./Exercise_01_02_03');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  number.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(number.randomNumber(10, 2)).toBe(5);
  expect(number.randomNumber).toHaveBeenCalled();
  expect(number.randomNumber).toHaveBeenCalledTimes(1);
  expect(number.randomNumber).toHaveBeenCalledWith(10, 2);
});