// Par nome/valor
const saudacao = 'Opa' // Contexto lexico 1

function exec (){
    const saudacao = 'Falaaaa' // Um outro contexto - contexto lexico 2
    return saudacao
}
// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: ' Rua Miriti',
        numero: 312
    }
}

console.log(saudacao) // opa
console.log(exec()) // Falaaa
console.log(cliente) //  { nome: 'pedro',  idade: 32,  peso: 90, 
                     // endereco: { logradouro: ' Rua Miriti', numero: 312 }}
