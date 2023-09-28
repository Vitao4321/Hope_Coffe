// CARRINHO

document.addEventListener("DOMContentLoaded", function () {

    // Selecionar os botões
    const quantidadeElement = document.getElementById("quantidade");
    const incrementButton = document.querySelector(".plus img");
    const decrementButton = document.querySelector(".minus img");

    // Botão de soma
    incrementButton.addEventListener("click", function() {
        let quantidade = parseInt(quantidadeElement.innerText);
        quantidade++;
        quantidadeElement.innerText = quantidade;
    });

    // Botão de diminuir
    decrementButton.addEventListener("click", function() {
        let quantidade = parseInt(quantidadeElement.innerText);
        if (quantidade != 0) {
            quantidade--;
            quantidadeElement.innerText = quantidade;
        }
    });


    // Guardar o valor do item e Qtdade
    const carrinhoButton = document.querySelector(".button")
    carrinhoButton.addEventListener("click", function() {

        const productPrice = document.getElementsByClassName("Preço")[0].innerText.replace("$", "");

        const quantidadeitem = document.getElementById("quantidade").innerText;

        localStorage.setItem("preco", productPrice);
        localStorage.setItem("qtdade", quantidadeitem);

        const precoArmazenado = localStorage.getItem("preco");
        const quantidadeArmazenada = localStorage.getItem("qtdade");

        console.log("Preço:", precoArmazenado);
        console.log("Quantidade:", quantidadeArmazenada);

    });
    
    
});