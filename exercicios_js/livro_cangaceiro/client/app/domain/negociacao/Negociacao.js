//* Criando a classe 
class Negociacao {

    //* Construtor
    constructor(_data, _quantidade, _valor) {
         //* data atual
        Object.assign( this, { _quantidade, _valor });
       
        this._data = new Date(data.getTime());
        
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