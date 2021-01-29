// Operador que tira da estrutura uma coisa // Estrutura seria um objeto

/** Constante literal de objeto - const/chave/valor */
const pessoa = {
    nome: 'Marcelo',
    idade: 50,
    endereço: {
        logradouro: 'malheiros',
        numero: '312'
    }
}

const {nome, idade} = pessoa
console.log(nome, idade) // Marcelo 50

// Adiciona a n e i
const {nome: n, idade: i} = pessoa
console.log(n,i) // Marcelo 50
console.log(pessoa) // {
                    // nome: 'Marcelo',
                    // idade: 50,
                    // 'endereço': { logradouro: 'malheiros', numero: '312' }
                    // }
const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada) // undefined true

const { endereço: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep) // malheiros 312 undefined