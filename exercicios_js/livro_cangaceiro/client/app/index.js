//* Buscando os elementos atraves do seletor CSS
var campos = [
    document.querySelector("#data"),
    document.querySelector("#valor"),
    document.querySelector("#quantidade")
];

console.log(campos); // Verificando o conteudo da array

//* Buscando tbody
var tbody = document.querySelector("table tbody");

//* Buscando form atraves do evento submit
document.querySelector(".form").addEventListener("submit", function(event){
    //* Cancelando a submissao doo formulario
    event.preventDefault();

    var tr = document.createElement("tr");

    campos.forEach(function(campo){
        //*cria um atd sem informacoes
        var td = document.createElement("td");
        //* Atrbui o valor doo campo a td
        td.textContent = campo.value;
        //* Adiciona td na tr
        tr.appendChild(td);
    });
    // * Nova td que rmazenara o volume da negociacao
    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value*campos[2].value;
    tr.appendChild(tdVolume);

    //* adicionado a tr
    tbody.appendChild(tr);

    //* Limpa os campos
    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    //* Focandoo no campo data
    campos[0].focus();

    alert("Dados cadastrados com sucesso!!!");
});