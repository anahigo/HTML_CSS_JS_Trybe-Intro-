const fun = require('./Exercise_04_05');
jest.mock("./Exercise_04_05'");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    fun.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(fun.firstFunction("UPPERCASE")).toBe("uppercase");
    expect(fun.firstFunction).toHaveBeenCalled();
    expect(fun.firstFunction).toHaveBeenCalledTimes(1);
    expect(fun.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    fun.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(fun.secondFunction("letter")).toBe("r");
    expect(fun.secondFunction).toHaveBeenCalled();
    expect(fun.secondFunction).toHaveBeenCalledTimes(1);
    expect(fun.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    fun.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(fun.thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(fun.thirdFunction).toHaveBeenCalled();
    expect(fun.thirdFunction).toHaveBeenCalledTimes(1);
    expect(fun.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});