function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter')
    }, 100);
  })
}

function fetchDataPromiseWithErrorMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 100);
  })
}


test('the data is peanut butter', () => {
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchDataPromiseWithErrorMessage()).rejects.toMatch('error');
});