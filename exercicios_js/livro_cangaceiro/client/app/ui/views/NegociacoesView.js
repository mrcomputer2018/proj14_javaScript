class NegociacoesView {
    //* Construtor
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }

    //* Metodo
    update() {
        this._elemento.innerHTML = this.template();
    }

    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>data</th>
                        <th>quantidade</th>
                        <th>valor</th>
                        <th>volume</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>

                <tfoot>

                </tfoot>
            </table>`
    }
    
}