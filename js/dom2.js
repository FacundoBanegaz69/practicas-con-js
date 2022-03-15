// Notas
// /*getElementBYIDsirve sirve para acceder a un elemento de la estructura html
// con un id.

// getElementByClassName sirve para acceder a un conjunto de elementos de la estructura html con class

// getElementByTagName  sirve para acceder a un conjunto de elementos de la estructura html utilizando un nombre de etiqueta como identificacion no recomendable

// */

let btnAumentar = document.querySelector(".btn-info");

let span = document.getElementById("span");

let contador = 0;

btnAumentar.addEventListener("click", () => {
    contador++;
    span.textContent = contador;
})


let btnDisminuir = document.querySelector(".btn-danger");

btnDisminuir.addEventListener("click", () => {
    contador--;
    span.textContent=contador;

})
