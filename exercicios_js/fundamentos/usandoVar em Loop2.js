const funcs = [] // array vazio []

for (var i = 0; i < 10; i++) {
    // PUSH Adiciona dados na array
    funcs.push(function () { // FUNCTION () - Funcao anonima
        console.log(i)
    })

}
funcs[2] () // 10
funcs[8] () //  10
// Por que nao tem escopoem uma funcao