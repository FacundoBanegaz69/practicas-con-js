let input = document.getElementById("input");

let btnAgregar = document.querySelector(".btn-agregar");

let mostrarElementos = document.querySelector("ul");

let mostrarVacio= document.getElementById("vacio")


btnAgregar.addEventListener("click", e => { 
    //para evitar que se recargue la pagina uso
    e.preventDefault();
    //guardo el valor del input
    let info = input.value;
    //valido que ingrese un elemento
    if (info !== "") {
    
    let li = document.createElement("li");

    let p = document.createElement("p");

    p.textContent = info;

    li.appendChild(p);
    li.appendChild(btnEliminar());
    mostrarElementos.appendChild(li);
    //para que se quite lo escrito anteriormente 
    input.value = "";
    //  agrego un elemento al btnAgregar para no salga la frase No tienes Tareas Pendientes
    mostrarVacio.style.display="none";
    }
})

function btnEliminar() { 
    //creo un boton 
    let btnEliminar = document.createElement("button")
    //escribo el texto
    btnEliminar.textContent = "Eliminar";
    //creo la evento 
    btnEliminar.addEventListener("click", e => {
        //con target
        let item = e.target.parentElement;
        mostrarElementos.removeChild(item);
        //selecciono todos los li
        let items = document.querySelectorAll("li");
        //verifico que hay li
        if (items.length == 0) { 
            mostrarVacio.style.display="block";

        }
    })
    return btnEliminar; 
}







