const funcs = [] // array vazio []

for (let i = 0; i < 10; i++) {
    // PUSH Adiciona dados na array
    funcs.push(function () { // FUNCTION () - Funcao anonima
        console.log(i)
    })

}
funcs[2] () // 2
funcs[8] () // 8