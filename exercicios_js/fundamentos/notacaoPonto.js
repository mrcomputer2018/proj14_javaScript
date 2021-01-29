console.log(typeof console) // . chamando a funcao log (Console - Object)

// Math.ceil arredondamento para baixo
console.log(Math.ceil(6.6)) // 7

const object1 = {}
object1.nome = 'Larrisa'
object1['nome'] = 'Fabricia'

console.log(object1) //{ nome: 'Fabricia' }
console.log(object1.nome) // Fabricia

function Obj(nome) {
    this.nome = nome // this. - gera um objeto global
    this.exec = function() {
        console.log('Exec.....')
    }
}

const Obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Mesa')
console.log(Obj2) // Obj { nome: 'Cadeira' }
console.log(Obj2.nome) // cadeira
console.log(Obj3.nome) // Mesa
console.log(Obj) //[Function: Obj]
Obj3.exec() //Exec.....
console.log(Obj3) // Obj { nome: 'Mesa', exec: [Function (anonymous)] }