const nome ='rebeca'
const concatenacao = 'Ola ' + nome +' !!!'

/// Criando uma template string
const template =`
ola 
${nome} !!!`
console.log(concatenacao,template)

// Template string com expressoes
console.log(`1 + 1 = ${1+1}`)

// Template string convertendo para maiusculo
const up = texto => texto.toUpperCase()
console.log(up)
console.log(`Ei..... ${up('cuidado')}!!!`)