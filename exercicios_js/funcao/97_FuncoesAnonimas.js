const soma = function(a, b) {
    return a + b
}

// Se terceiro parametro for undefined sera feito uma soma
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4) // 7
imprimirResultado(3, 4, soma) //7
imprimirResultado(3,4, function(a, b) {
    return a - b;
}) // -1
imprimirResultado(3, 4, (a,b) => a * b) //12

const pessoa = {
    falar: function() {
        console.log("opa")
    }
}
pessoa.falar()