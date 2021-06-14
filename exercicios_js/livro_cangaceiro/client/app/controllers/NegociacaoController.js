class NegociacaoController {
    constructor() {
        //* $ - transformando em querySlector
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    //* Metodo
    adiciona(event) {
        //*cancelando submissao de formulario
        event.preventDefault();

        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));

    }
}