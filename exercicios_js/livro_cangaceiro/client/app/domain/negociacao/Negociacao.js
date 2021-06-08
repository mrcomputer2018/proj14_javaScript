//* Criando a classe 
class Negociacao {

    //* Construtor
    constructor(data, quantidade, valor) {
        //* data atual
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //*Getters
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}