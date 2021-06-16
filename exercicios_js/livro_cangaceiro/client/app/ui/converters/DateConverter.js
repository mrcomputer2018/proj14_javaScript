class DateConverter {
    //* Aviso de que classe nao deve ser instanciada
    constructor() {
        throw new Error("Esta classe nao deve ser instanciada!!!");
    }

    static paraTexto(data) {
        //* Acessando o getter de data
        //* Transformando data no padrao portugues brasil
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }

    static paraData(texto) {
         //* Condicional
         if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
         }

        //* Construtor de data esta recebendo um array
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));      
    }
}