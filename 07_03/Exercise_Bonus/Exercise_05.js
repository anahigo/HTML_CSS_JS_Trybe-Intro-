/* 5- Kata ou Code Kata são exercícios de programação que ajudam a aprimorar as habilidades através da prática e da repetição.

Kata 'Verificador de senhas': Crie uma função Verify() que retorne false para os casos listados no repositório e true caso contrário. Não é necessário fazer os itens extras (2, 3 e 4) do repositório. 

https://github.com/CodeYourFuture/js-exercises-tdd/tree/master/III.tdd-katas/password-verifier

Crie uma classe de verificação de senha chamada “PasswordVerifier”.

1 - Adicione as seguintes verificações a uma função mestre chamada “Verify ()”

  * a senha deve ser maior que 8 caracteres
  * a senha não deve ser nula
  * a senha deve ter pelo menos uma letra maiúscula
  * a senha deve ter pelo menos uma letra minúscula
  * a senha deve ter pelo menos um número

Cada um deles deve lançar uma exceção com uma mensagem diferente de sua escolha

2 - Adicionar recurso: a senha está OK se pelo menos três das condições anteriores forem verdadeiras

3 - Adicionar recurso: a senha nunca está OK se o item 1.4 não for verdadeiro.

4 - Pressupõe que cada verificação leva 1 segundo para ser concluída. Como você resolveria os itens 2 e 3 para que os testes pudessem ser executados mais rapidamente?
*/

const assert = require('assert');

function verify(password) {
  if (password == null) return false;
  else if (password.length <= 8) return false;
  else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password))
    return false;
  return true;
}

module.exports = verify;

const verify = require('./password-verification');
const assert = require('assert');

assert.strictEqual(typeof verify, 'function');

// a senha deve ser maior que 8 caracteres
assert(!verify('12345678'));

// a senha não deve ser nula
assert(!verify(null));

// a senha deve ter pelo menos uma letra maiúscula
assert(!verify('gandalfthegray'));

// Password should have one lowercase letter at least
assert(!verify('YOUSHALLNOTPASS'));

// a senha deve ter pelo menos uma letra minúscula
assert(!verify('GandalfTheWhite'));

// a senha deve ter pelo menos um número
assert(verify('G4nd4lfTh3Wh1t3'));
