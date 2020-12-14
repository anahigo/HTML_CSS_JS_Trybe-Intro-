//sessionStorage - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba(tab) ou browser

console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firsname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
