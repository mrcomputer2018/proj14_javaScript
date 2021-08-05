//* Criando de foorma Literal
function fun1() {}

//* Armazenar em uma varivel
const fun2 = function(){}

//* Armazenar em um array
const array = [function(a,b) { return a + b}, fun1, fun2]
//* executando a funcao 1 do array
console.log(array[0](1,2))

//* Armazenar eem um atributo de objeto
const obj = {}
obj.falar = function() {return "Opa"}
console.log(obj.falar())

//* Passar funcao como parametro
function run(fun) {
    fun()
}

run(function() {
    console.log("Executando.....")
})

//* Uma funcao pode retornar / conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)