const service = require('./Exemplo_02');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});