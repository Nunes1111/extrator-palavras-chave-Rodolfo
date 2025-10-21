const botaoMostraPalavras = documento.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click",mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querySelector("#entrada-de-texto").Value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavra = texto.split(" ");

    campoResultado.textContent = palavra.join(", ")
}