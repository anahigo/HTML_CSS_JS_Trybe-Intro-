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
      resject('error')
    }, 100);
  })
}

function fetchDataPromiseWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resject(new Error ('error'))
    }, 100);
  })
}

test('the data is peanut butter', async () => {
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseWithErrorMessage();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataPromiseWithError()).rejects.toThrow('error');
});