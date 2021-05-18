function tratarErroELancar () {
    // throw new Error(".......")
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!!")
    }
    catch (e) {
        tratarErroELancar(e)
    }
    // Mesmo que ocorra erro ou nao este bloco
    // Vai ser chamado
    finally {
        console.log("Final!!!")
    }
}

const obj = { nome : "Roberto"}
imprimiNomeGritado(obj)