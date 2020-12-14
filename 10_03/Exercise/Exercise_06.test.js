const fun = require('./Exercise_06');

describe("testando a requisição", () => {
 fun.fetchDog = jest.fn();
  afterEach fun.fetchDog.mockReset;

  test("testando requisição caso a promisse resolva", async () => {
   fun.fetchDog.mockResolvedValue("request sucess");

   fun.fetchDog();
    expect fun.fetchDog().toHaveBeenCalled();
    expect fun.fetchDog().toHaveBeenCalledTimes(1);
    expect fun.fetchDog().resolves.toBe("request sucess");
    expect fun.fetchDog().toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
   fun.fetchDog.mockRejectedValue("request failed");

    expect fun.fetchDog().toHaveBeenCalledTimes(0);
    expect fun.fetchDog().rejects.toMatch("request failed");
    expect fun.fetchDog().toHaveBeenCalledTimes(1);
  });
});