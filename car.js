
document.addEventListener("DOMContentLoaded", function () {

    // Remover item do carrinho
    const removeProductButtons = document.getElementsByClassName("button-car");
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", function (event) {
            event.target.parentElement.parentElement.parentElement.parentElement.remove()
        })
    }

    const tituloArmazenado = localStorage.getItem("titulo");
    const precoArmazenado = localStorage.getItem("preco");
    const quantidadeArmazenada = localStorage.getItem("qtdade");
    const imagemArmazenada = localStorage.getItem("imagem");

    console.log("Titulo:", tituloArmazenado);
    console.log("Preço:", precoArmazenado);
    console.log("Quantidade:", quantidadeArmazenada);
    console.log("Imagem:", imagemArmazenada);

    // Remove texto sem itens no carrinho
    const removeNoItens = document.querySelector(".center-text-car h2");
    removeNoItens.parentElement.remove()
    

    let newItemCar = document.createElement("div");
    newItemCar.classList.add("car-item")

    newItemCar.innerHTML =
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `

    // Obtenha o elemento do corpo da tabela pelo ID (corrija o erro de digitação aqui)
    const tableBody = document.getElementById("product-car");

    // Adicione o novo item do carrinho ao corpo da tabela
    tableBody.append(newItemCar);

});