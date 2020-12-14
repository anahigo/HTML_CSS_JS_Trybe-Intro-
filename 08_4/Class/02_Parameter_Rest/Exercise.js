// Modifique a função sum usando o parâmetro rest de forma que a função sumpossa receber qualquer número de argumentos e retornar sua soma.


// const sum = (x, y, z) => {
  const sum = (...args) => {
  // const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}


