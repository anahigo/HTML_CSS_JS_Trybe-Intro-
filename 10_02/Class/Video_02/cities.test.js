const { 
  resetCities, 
  getCities, 
  removeCity, 
  retrieveCitiesFromCache, 
  requestCities, 
  isCity 
} = require('./cities');

describe('Retrieving cities from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });

  afterEach(() => {
    resetCities();
  });
  it('Should have 1 city after remove Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    expect(getCities().lenght).toBe(1)
  });
  it('Should have 2 cities after retrieving from cache', () => {
    expect(getCities().lenght).toBe(2)
  });
});

describe('Retrieving cities from api', () => {
  beforeEach(() => {
    return requestCities();
  });

  afterEach(() => {
    resetCities();
  });
  it('Should have 8 city after requesting from api', () => {
    expect(getCities().lenght).toBe(8)
  });
  it('Should have the city of Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy();
  });
  it('Should have the city of Belo Horizonte', () => {
    expect(isCity('Belo Horizonte')).toBeTruthy();
  });
  it('Should have the city of São Paulo', () => {
    expect(isCity('São Paulo')).toBeTruthy();
  });
  it('Should have the city of Recife', () => {
    expect(isCity('Recife')).toBeTruthy();
  });
  it('Should have the city of Porto Alegre', () => {
    expect(isCity('Porto Alegre')).toBeTruthy();
  });
  it('Should have the city of Goiânia', () => {
    expect(isCity('Goiânia')).toBeTruthy();
  });
  it('Should have the city of Manaus', () => {
    expect(isCity('Manaus')).toBeTruthy();
  });
  it('Should have the city of Piauí', () => {
    expect(isCity('Piauí')).toBeTruthy();
  });
});