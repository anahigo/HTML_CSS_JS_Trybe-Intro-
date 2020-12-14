// 4. Teste se uma função foi definida

const assert = require('assert');

function thereIs() {}

assert.deepStrictEqual(typeof thereIs, 'function');