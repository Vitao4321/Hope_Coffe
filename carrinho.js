// CARRINHO

document.addEventListener("DOMContentLoaded", function () {

    // Selecionar os botões
    const quantidadeElement = document.getElementById("quantidade");
    const incrementButton = document.querySelector(".plus img");
    const decrementButton = document.querySelector(".minus img");

    // Botão de soma
    incrementButton.addEventListener("click", function () {
        let quantidade = parseInt(quantidadeElement.innerText);
        quantidade++;
        quantidadeElement.innerText = quantidade;
    });

    // Botão de diminuir
    decrementButton.addEventListener("click", function () {
        let quantidade = parseInt(quantidadeElement.innerText);
        if (quantidade != 0) {
            quantidade--;
            quantidadeElement.innerText = quantidade;
        }
    });


    // Guardar o valor do item e Qtdade
    const carrinhoButton = document.querySelector(".button")
    carrinhoButton.addEventListener("click", function () {

        const productTitle = document.querySelector(".content h1").innerText;

        const productPrice = document.getElementsByClassName("Preço")[0].innerText.replace("$", "");

        const quantidadeitem = document.getElementById("quantidade").innerText;

        const produtcImagem = document.querySelector(".select-image img").src;

        // Armazenar os dados do produto
        localStorage.setItem("titulo", productTitle);
        localStorage.setItem("preco", productPrice);
        localStorage.setItem("qtdade", quantidadeitem);
        localStorage.setItem("imagem", produtcImagem);

    });

});