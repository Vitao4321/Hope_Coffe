// CARRINHO

document.addEventListener("DOMContentLoaded", function () {
    const removeProductButtons = document.getElementsByClassName('minus');

    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", function (event) {
            //event.target.parentElement.parentElement.remove()
            //console.log("cliquei")
        })
    }
});