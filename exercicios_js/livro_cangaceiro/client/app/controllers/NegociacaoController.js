class NegociacaoController {
    //* Metodo
    adiciona(event) {
        //*cancelando submissao de formulario
        event.preventDefault();

        //* $ - transformando em querySlector
        let $ = document.querySelector.bind(document);

        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));

    }
}