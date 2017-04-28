var times = [
    {
        nome: "Corinthians",
        idade: 200,
        imagem: "http://images.terra.com/2015/05/20/corinthians.png",
        tecnico: {
            nome: "Fábrio Carille",
            idade: 43
        }
    },
    {
        nome: "São Paulo",
        idade: 105,
        imagem: "http://vignette3.wikia.nocookie.net/futebol/images/4/49/Escudo-do-s%C3%A3o-paulo.png/revision/latest?cb=20140728195901",
        tecnico: {
            nome: "Rogério Ceni",
            idade: 44
        }
    },
    {
        nome: "Palmeiras",
        idade: 103,
        imagem: "https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-3.png",
        tecnico: {
            nome: "Eduardo Baptista",
            idade: 44
        }
    },
    {
        nome: "Flamengo",
        idade: 105,
        imagem: "http://icons.iconarchive.com/icons/giannis-zographos/south-american-football-club/128/Flamengo-icon.png",
        tecnico: {
            nome: "Zé Ricardo",
            idade: 44
        }
    },
    {
        nome: "Cruzeiro",
        idade: 102,
        imagem: "data:image/png;base64,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",
        tecnico: {
            nome: "Mano Menezes",
            idade: 44
        }
    },
];

function carregaTimes() {

    for (var i = 0; i < times.length; i++) {

        var divCard = document.createElement("div");
        divCard.setAttribute("class", "card-time");

        var divImagem = document.createElement("div");
        var imagem = document.createElement("img");
        imagem.setAttribute("src", times[i].imagem);
        divImagem.appendChild(imagem);

        var divTexto = document.createElement("div");
        var span = document.createElement("span");
        span.innerHTML = times[i].nome;

        var p = document.createElement("p");
        p.innerHTML = "Técnico: " + times[i].tecnico.nome;

        divTexto.appendChild(span);
        divTexto.appendChild(p);

        divCard.appendChild(divImagem);
        divCard.appendChild(divTexto);

        document.getElementById("body").appendChild(divCard);
    }

}

function buscarTime() {
    var nomeTime = document.getElementById("inputBusca").value;
    var timesResultado = [];

    for (var i = 0; i < times.length; i++) {
        if (times[i].nome == nomeTime) {
            timesResultado.push(times[i]);
        }
    }

    var cardTimes = document.getElementsByClassName("card-time");
    var max = cardTimes.length;

    for (var i = 0; i < max; i++) {
        cardTimes[0].remove();
    }

    var timesNaoEncontrados = document.getElementsByClassName("time-nao-encontrado");
    max = timesNaoEncontrados.length;

    for (var i = 0; i < max; i++) {
        timesNaoEncontrados[0].remove();
    }

    if (timesResultado.length < 1) {
        var p = document.createElement("p");
        p.setAttribute("class", "time-nao-encontrado")
        p.innerHTML = "Nenhum time encontrado!";
        document.getElementById("body").appendChild(p);
    }

    for (var i = 0; i < timesResultado.length; i++) {

        var divCard = document.createElement("div");
        divCard.setAttribute("class", "card-time");

        var divImagem = document.createElement("div");
        var imagem = document.createElement("img");
        imagem.setAttribute("src", timesResultado[i].imagem);
        divImagem.appendChild(imagem);

        var divTexto = document.createElement("div");
        var span = document.createElement("span");
        span.innerHTML = timesResultado[i].nome;

        var p = document.createElement("p");
        p.innerHTML = "Técnico: " + timesResultado[i].tecnico.nome;

        divTexto.appendChild(span);
        divTexto.appendChild(p);

        divCard.appendChild(divImagem);
        divCard.appendChild(divTexto);

        document.getElementById("body").appendChild(divCard);
    }
}