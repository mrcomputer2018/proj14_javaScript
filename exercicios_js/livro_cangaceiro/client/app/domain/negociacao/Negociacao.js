//* Criando a classe 
class Negociacao {

    //* Construtor
    constructor(data, quantidade, valor) {
        //* data atual
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        //* Congelando a instancia
        Object.freeze(this);
    }

    //*Getters
    get data() {
        //* tornando a data imutavel
        return new Date(this._data.getTime());
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