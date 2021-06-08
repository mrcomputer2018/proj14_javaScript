//* Criando a classe 
class Negociacao {

    //* Construtor
    constructor(data, quantidade, valor) {
        //* data atual
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //* Metodo
    obtemVolume() {
        return this._quantidade * this._valor;
    }

    //*Getters
    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}