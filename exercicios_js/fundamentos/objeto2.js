console.log(typeof Object) // Function

console.log(typeof new Object) // Object - New Object cria um objeto

const Cliente = function () {}
console.log(typeof Cliente) // Function
console.log(typeof new Cliente) // Object

/** Criando uma Classe */
class Produto {}
console.log(typeof Produto) // Function
console.log(typeof new Produto) // Object / NEW instancia uma funcao