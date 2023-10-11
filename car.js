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
                                <a class="button-car"><img src="img/x-circle-regular-24.png">REMOVER</a>
                                <input type="hidden" id="idRemove" name="IdUnicoCar" value="${IdUnicoCar}">                                
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
            const idToRemove = document.getElementById('idRemove').value;

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

        if (emptyCar != 0) {
            const removeNoItems = document.querySelector(".center-text-car h2");
            removeNoItems.parentElement.parentElement.remove();
        }
        else {            
            const removeValorTotMenssage = document.querySelector(".valor-tot-car");
            console.log(removeValorTotMenssage)
            removeValorTotMenssage.parentElement.parentElement.remove();
        }
    }



    calculoValorTot();

    function calculoValorTot() {
        let totalAmount = 0;

        // Selecione todos os itens no carrinho
        const items = document.querySelectorAll('.container-car');
        console.log(items)

        // Itere sobre cada item no carrinho
        items.forEach(function (item) {
            // Obtenha o preço e a quantidade para cada item
            const productPrice = parseFloat(item.querySelector('.Preço').innerText.replace('$', ''));
            const quantidadeitem = parseInt(item.querySelector('#quantidade').innerText);

            // Calcule o subtotal para o item atual e adicione ao totalAmount
            const subtotal = productPrice * quantidadeitem;
            totalAmount += subtotal;
        });

        // Exiba o valor total no console
        console.log('O valor total é de: $' + totalAmount.toFixed(2));

        const valorTot = document.querySelector(".valor-tot-car span");
        console.log(valorTot);
    
        valorTot.innerText = "R$" + totalAmount.toFixed(2);
    }

});
