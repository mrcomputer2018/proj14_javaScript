class Negociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        //* Adicionaa negociacao ao Array Negociacoes
        this._negociacoes.push(negociacao);
    }

    //* Retorna o array interno encapsulado pela classe
    paraArray() {
        return this._negociacoes;
    }
}