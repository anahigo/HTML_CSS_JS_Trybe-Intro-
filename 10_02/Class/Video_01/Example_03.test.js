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
  return fetchDataPromise().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataPromiseWithErrorMessage().catch(e => expect(e).toMatch('error'));
});
