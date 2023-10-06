document.addEventListener("DOMContentLoaded", function () {

    const ItemCar = JSON.parse(localStorage.getItem("carrinhoItens")) || [];
    const newItemCar = [];

    for (var i = 0; i < ItemCar.length; i++) {
        const IdUnicoCar = ItemCar[i].id;
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
                                <a class="button-car"><img src="img/x-circle-regular-24.png"><p>${IdUnicoCar}</p></a>
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
            const idToRemove = event.target.parentElement.querySelector("p").textContent;

            const updatedCartItems = ItemCar.filter(item => item.id !== idToRemove);
            localStorage.setItem("carrinhoItens", JSON.stringify(updatedCartItems));
            console.log('Item removido do carrinho.');
            location.reload();
        });
    }


    // Verificar se o carrinho está vazio e exibir uma mensagem apropriada
    messageCarEmpty();

    function messageCarEmpty() {
        const emptyCar = document.getElementsByClassName("car-item").length;
        console.log(emptyCar);

        if (emptyCar != 0) {
            const removeNoItems = document.querySelector(".center-text-car h2");
            removeNoItems.parentElement.remove();
        }
    }

    calculoValorTot();

    // DECLARAÇÃO DA VARIAVEL DE SOMA TOTAL
    let totalAmount = 0;

    function calculoValorTot() {

        for (var i = 0; i < ItemCar.length; i++) {
            const productPrice = parseFloat(ItemCar[i].document.getElementsByClassName("Preço")[0].innerText.replace("$", ""));
            const quantidadeitem = parseInt(ItemCar[i].getElementById("quantidade").innerText);

            //const productPrice = document.getElementsByClassName("Preço")[0].innerText.replace("$", "");
            console.log("calculo do valor total");

            //const quantidadeitem = document.getElementById("quantidade").innerText;
            console.log(productPrice);
            console.log(quantidadeitem);

            totalAmount += (productPrice * quantidadeitem);
            console.log(totalAmount);
        }

        // FARER A SOMA DO TOTAL --> CARRINHO
        //console.log("O valor totoal é de: " + totalAmount);

    }
});
