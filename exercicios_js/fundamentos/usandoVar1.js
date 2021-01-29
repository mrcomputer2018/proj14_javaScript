{
    {
        {
            { var sera = 'Sera????'}
        }
    }
}
console.log(sera) // Var global

// Dentro de uma funcao var se torna local
function teste() {
    var local = 123
    console.log(local)
}
teste()  //123
