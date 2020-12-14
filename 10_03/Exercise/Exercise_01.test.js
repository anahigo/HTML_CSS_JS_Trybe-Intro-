const number = require('./Exercise_01_02_03');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  number.randomNumber = jest.fn().mockReturnValue(10);

  expect(number.randomNumber()).toBe(10);
  expect(number.randomNumber).toHaveBeenCalled();
  expect(number.randomNumber).toHaveBeenCalledTimes(1);
});