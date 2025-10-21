const botaoMostraPalavras = documento.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventLitener("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    alert("Fui clicado!");
}