class NegociacaoController {
    //* Metodo
    adiciona(event) {
        //*cancelando submissao de formulario
        event.preventDefault();

        let inputData = document.querySelector('#data');
        let inputQuantidade = document.querySelector('#quantidade');
        let inputValor = document.querySelector('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));

    }
}