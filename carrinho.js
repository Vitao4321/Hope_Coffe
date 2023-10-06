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

        function gerarIdUnico() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }

        const item = {
            id: gerarIdUnico(),
            titulo: productTitle,
            preco: productPrice,
            quantidade: quantidadeitem,
            imagem: produtcImagem
        };

        // Obtém os itens do carrinho do localStorage (se houver)
        let carrinhoItens = JSON.parse(localStorage.getItem("carrinhoItens")) || [];

        // Adiciona o novo item ao array
        carrinhoItens.push(item);

        // Atualiza os itens do carrinho no localStorage
        localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));

    });

});