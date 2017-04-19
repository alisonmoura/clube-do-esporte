function buscarLivro() {
    var busca = document.getElementById("inputBusca").value;

    var divCard = document.createElement("div");

    var divImagem = document.createElement("div");
    var imagem = document.createElement("img");
    imagem.setAttribute("src", "https://upload.wikimedia.org/wikipedia/pt/7/78/Inferno_livro.jpg");
    divImagem.appendChild(imagem);

    var divTexto = document.createElement("div");
    var span = document.createElement("span");
    span.innerHTML = "Inferno";

    var p = document.createElement("p");
    p.innerHTML = "Dan Brown";

    divTexto.appendChild(span);
    divTexto.appendChild(p);

    divCard.appendChild(divImagem);
    divCard.appendChild(divTexto);

    document.getElementById("body").appendChild(divCard);
}