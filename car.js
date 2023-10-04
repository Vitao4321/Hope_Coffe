document.addEventListener("DOMContentLoaded", function () {

    // Remove texto sem itens no carrinho
    const removeNoItens = document.querySelector(".center-text-car h2");
    removeNoItens.parentElement.remove()

    /*const tituloArmazenado = localStorage.getItem("titulo");
    const precoArmazenado = localStorage.getItem("preco");
    const quantidadeArmazenada = localStorage.getItem("qtdade");
    const imagemArmazenada = localStorage.getItem("imagem");

    console.log("Titulo:", tituloArmazenado);
    console.log("Preço:", precoArmazenado);
    console.log("Quantidade:", quantidadeArmazenada);
    console.log("Imagem:", imagemArmazenada);*/

    const ItemCar = JSON.parse(localStorage.getItem("carrinhoItens")) || [];
    const newItemCar = [];
    //localStorage.clear();

    console.log(ItemCar)

    for (var i = 0; i < ItemCar.length; i++) {
        const idItemCar = ItemCar[i].id;
        const tituloArmazenado = ItemCar[i].titulo;
        const precoArmazenado = ItemCar[i].preco;
        const quantidadeArmazenada = ItemCar[i].quantidade;
        const imagemArmazenada = ItemCar[i].imagem;

        let novoItem = document.createElement("div");
        novoItem.classList.add("car-item");

        novoItem.innerHTML =
            `
            <div class="container-car">
                <div class="car-item">
                    <div class="select-image-car">
                        <img src="${imagemArmazenada}">
                    </div>
                    <div class="descricao-car">
                        <div class="content-car">
                            <h1>${tituloArmazenado}</h1>
                            <span class="Preço">${precoArmazenado}</span>
                            <div class="options">
                                <div class="amount">
                                    <div class="minus">
                                        <img src="img/icon-minus.svg">
                                    </div>
                                    <span id="quantidade">${quantidadeArmazenada}</span>
                                    <div class="plus">
                                        <img src="img/icon-plus.svg">
                                    </div>
                                </div>
                                <a class="button-car" data-id="${[i]}"><img src="img/x-circle-regular-24.png">REMOVER ${[i]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adicione o novo item do carrinho ao array de itens do carrinho
        newItemCar.push(novoItem);
    }

    // Obtenha o elemento do corpo da tabela pelo ID
    const tableBody = document.getElementById("product-car");

    // Adicione os itens do carrinho ao corpo da tabela
    tableBody.append(...newItemCar);



    // Remover item do carrinho
    const removeProductButtons = document.getElementsByClassName("button-car");
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", function (event) {
            event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

        })
    }


    // Adicione um event listener para os botões "REMOVER"
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("button-car")) {
            // Obtenha o identificador único do item a ser removido
            const itemId = event.target.dataset.id;

            // Remova o item correspondente da variável global
            const novoCarrinho = ItemCar.filter(item => item.id !== itemId);

            // Atualize o localStorage com o novo array de carrinho
            localStorage.setItem("carrinhoItens", JSON.stringify(novoCarrinho));

            // Recarregue a página ou atualize a interface do carrinho para refletir as alterações
            // ...

            // Por exemplo, você pode remover o elemento do DOM associado ao item removido
            event.target.closest(".car-item").remove();
        }
    });


});