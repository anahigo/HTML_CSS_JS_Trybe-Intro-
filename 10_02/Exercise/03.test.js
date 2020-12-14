/* 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

Dica: Utilize o try/catch para o caso de erro. */

const getUserName = require('./02_03');

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' });
      }
    });
  });
});