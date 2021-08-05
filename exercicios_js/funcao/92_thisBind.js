const pessoa = {
    // Atributo
    saudacao: "bom dia",
    falar(){
        // this do objeto que dono dessa funcao
        // Acessando o atributo da funcao
        console.log(this.saudacao) 
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //Undefined - conflito entre paradigmas: funcional e OO

// Bind  - passa um objeto no qual quer que seja resolvido o This
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia