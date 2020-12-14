const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  it('returns the same array without the item if the item belongs to it', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('returns the correct array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  it('changes the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4]);
  });
  //Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  it('returns an identical array if the item does not belong to it', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

