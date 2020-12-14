# Testando códigos assíncronos
Leia esse artigo para compreender como escrever testes para códigos assíncronos feitos utilizando Callbacks, Promises e Async/Await.

Clique aqui se quiser ver um vídeo a respeito em inglês!

# Callbacks
Ao realizar testes assíncronos, é necessário ter cuidado com falso-positivos, pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona. Ou seja, você roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.

O exemplo abaixo gera um falso-positivo:

test("Não deveria passar!", () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
  }, 500);
});

Execute-o na sua máquina para ver! Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase 'Deveria falhar!' sequer aparece no console. O Jest não espera o test acabar, gerando esse resultado falso-positivo.

Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done, que precisa ser chamada após os testes assíncronos.

Agora o Jest no exemplo abaixo consegue identificar o erro.

test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});

Outro exemplo para fixar melhor:

const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})

Quando estiver realizando testes, sempre procure verificar se o seu teste não está exibindo resultados falso-positivos. No exemplo acima, em que o teste está passando, basta mudar o valor final do expect de .toBe(15) para analisar outros cenários.

Mude o valor .toBe(15) para .toBe(10) e verifique. O esperado é o teste identificar o erro. Caso isso ocorra, quer dizer que o seu teste está correto; caso continue passando e não encontre o erro, provavelmente seu teste está com algum falso-positivo.

# Promises
Para testar uma promise será usado o código abaixo. Ele possui um array Animals, contendo animais com seu nome, idade e tipo.

Observe que a função findAnimalsByType é uma promise, responsável por buscar os animais de determinado tipo no array. Em caso de sucesso, ela retornará um resolve com um array de dados. Em caso de falha, retornará um reject com um objeto com a chave error, possuindo uma mensagem.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

O primeiro teste desse código verificará se, ao chamar a função getListAnimals com Dog como parâmetro, o seu retorno será os dois cachorros do array Animals.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

Rode o teste e verifique se ele não está dando algum falso-positivo. Mude o Dorminhoco para Agitado. Viu? O teste não passou, logo não possui falso-positivos.

Agora veja o passo a passo de como o teste foi feito.

Primeiro criamos o describe, onde os testes serão executados.

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {

  });
});

Agora, adicione a função a ser testada. Como ela retorna uma Promise, é necessário adicionarmos o .then para pegar o seu resultado.

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {

    });
  });
});

Agora adicione os testes e os execute.

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

Verifique se deu algum falso-positivo, mude o nome do Dorminhoco para Bob. Observe:

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

O teste continuou passando sem encontrar o erro (o que não era o esperado), o que indica que ele está com um falso-positivo.

Para resolver esse problema, é necessário inserir um return antes da função e, em seguida, adicionar a quantidade de expect esperadas por meio do comando expect.assertions(2).

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

Agora o teste conseguiu identificar o erro, retornando dois erros. Um dos erros é o que esperava Bob, mas recebeu o Dorminhoco. Como o Jest apenas recebeu 1 assertion, mas eram esperados 2, surge o segundo erro no nosso teste. Agora, desfaça as alterações para o teste voltar a funcionar. Como esse teste conseguiu encontrar o erro, fica claro que o problema de resultados falso-positivos foi resolvido.

Se quiser, remova o expect.assertions(2) e veja que o teste passa!

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

Essa promise possui dois casos: quando ela funciona, ocorre o resolve e, no erro, ocorre o reject. Como o resolve já foi testado, faltam apenas os testes do erro.

O código abaixo testa, exatamente, o caso de erro.

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});

Como o array Animals não possui nenhum Lion (tipo inserido no teste), será disparada a reject, que retornará um objeto com uma chave error com o valor Não possui esse tipo de animal.. A diferença entre esse teste e os outros é o .catch no lugar do .then. O .catch trabalha o resultado da promise quando ocorre um reject; já o .then, quando ocorre o resolve.

# Async/Await
Para testar o código Async/Await, será usado o mesmo código anterior, mas com pequenas mudanças. Observe:

test('Testando com async/await', async () => {
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

Perceba que a diferença entre elas é o async. Como existe uma promise a ser testada, é necessário o uso do await, para que o teste espere a finalização da promise e, em seguida, execute o teste remanescente. A variável listDogs recebe o retorno da promise e executa os testes.

Abaixo está o código para quando ocorre o reject da promise. É necessário adicionar o bloco try/catch.

test('Testando com async/await, testando o reject', async () => {
  try {
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "Não possui esse tipo de animal." })
  }
});
