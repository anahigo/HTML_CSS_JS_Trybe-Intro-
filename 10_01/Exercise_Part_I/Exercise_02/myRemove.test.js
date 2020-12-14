const myRemove = require('./myRemove');

describe('myRemove', () => {
  //Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it('returns a new array without the item if the item belongs to it', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  //Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('returns the correct array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  //Verifique se o array passado por parâmetro não sofreu alterações
  it('does not change the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  //Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('does not change the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});
