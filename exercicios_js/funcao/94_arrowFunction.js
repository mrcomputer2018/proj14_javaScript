let dobro = function(a) {
    return 2 * a
}

// Funcao arrow e sempre anonima
// Se quiser chamar depois armazenar
// em uma variavel ou constante 
dobro = (a) => { 
    return 2 * a
}

// retorno implicito
// Usado em funcoes de uma unica linha
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() { return "Ola" }
ola = () => "Ola"
console.log(ola())