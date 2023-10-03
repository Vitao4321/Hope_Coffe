
document.addEventListener("DOMContentLoaded", function () {

// Remover item do carrinho
const removeProductButtons = document.getElementsByClassName("button-car");
for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", function (event) {
        event.target.parentElement.parentElement.parentElement.parentElement.remove()

        const tituloArmazenado = localStorage.getItem("titulo");
        const precoArmazenado = localStorage.getItem("preco");
        const quantidadeArmazenada = localStorage.getItem("qtdade");
        const imagemArmazenada = localStorage.getItem("imagem");

        console.log("Titulo:", tituloArmazenado);
        console.log("Preço:", precoArmazenado);
        console.log("Quantidade:", quantidadeArmazenada);
        console.log("Imagem:", imagemArmazenada);
        
    })
}

let newItemCar = document.createElement("div");
newItemCar.classList.add("car-item")



/*newCartProduct.innerHTML =
    ` 
            <div class="container-car">
                <div class="car-item">
                    <div class="select-image-car">
                        <img src="img/tres_cafeteria2.png">
                    </div>
                    <div class="descricao-car">
                        <div class="content-car">
                            <h1>EXPRESSO PASSIONE TRÊS CORAÇÕES</h1>
                            <span class="Preço">$529.00</span>
                            <div class="options">
                                <div class="amount">
                                    <div class="minus">
                                        <img src="img/icon-minus.svg">
                                    </div>
                                    <span id="quantidade">0</span>
                                    <div class="plus">
                                        <img src="img/icon-plus.svg">
                                    </div>
                                </div>
                                <a class="button"><img src="img/x-circle-regular-24.png">REMOVER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `*/

});