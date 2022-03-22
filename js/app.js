
let cards = document.getElementById("cards");
let items = document.getElementById("items");
let footer = document.getElementById("footer");
//con content accedo al elemento
let templateCards = document.getElementById("template-card").content;
let templateFooter = document.getElementById("template-footer").content;
let templateCarrito = document.getElementById("template-carrito").content;

let fragment = document.createDocumentFragment();
// coleccion de objetos
let carrito = {};

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", e => fetchData());

cards.addEventListener("click", e => añadirAlCarrito(e))
items.addEventListener("click", e => { 
    btnAccion();
});

// Traer productos 

// nota despues practicar con placeholder
let fetchData = async () => { 
    try {
        //agrego mi json
        let res = await fetch("api.json")
        let data = await res.json()
        pintarCards(data)
    } catch (error) { 
        console.log(error)
    }
}

// Mostrar productos
let pintarCards=datos => { 
    datos.forEach(productos => { 
        templateCards.querySelector("h5").textContent = productos.titulo;
        templateCards.querySelector("p").textContent = productos.precio;
        //etAttribute recibe un                          nombre y un valor
        templateCards.querySelector("img").setAttribute("src", productos.Url);

        templateCards.querySelector(".btn").dataset.id;
        let clone = templateCards.cloneNode(true);
        //guardo en la variable y evito el reflow 
        fragment.appendChild(clone);
    })
    cards.appendChild(fragment);
}

// Agregar al carrito
let añadirAlCarrito = e => { 
    //me ayuda a saber al momento de hacer click si lo hago al boton
    if (e.target.classList.contains("btn")) { 
        setCarrito( e.target.parentElement)
    } 
    /*stopPropagation(); es para detener los eventos del item que elija
    nota por eso cuando apretaba en consola salian muchos click era porque se propagaba y accedia al div*/
    e.stopPropagation();
}
//captura los items
let setCarrito = item => {
    let productos = {
        id: item.querySelector(".btn").dataset.id,
        titulo: item.querySelector("h5").textContent,
        precio: item.querySelector("p").textContent,
        cantidad:1
    }//pregunto si existe la propieda producto si existe +1 sino muestro 1 por defecto
    if (carrito.hasOwnProperty(productos.id)) {
        //
        productos.cantidad = carrito[productos.id].cantidad;
    }
    carrito[productos.id] = {...productos }

        pintarCarrito()
}

let pintarCarrito = () => { 
    
    //al trabajar con objeto no puedo usar las funciones de los array por eso tengo que usar Object.values
    Object.values(carrito).forEach(productos => {
        templateCarrito.querySelector("th").textContent = productos.id
        //accedo al 1er td
        templateCarrito.querySelectorAll("td")[0].textContent = productos.titulo
        //accedo al 2do td
        templateCarrito.querySelectorAll("td")[1].textContent = productos.cantidad
        
        templateCarrito.querySelector("span").textContent = productos.cantidad * productos.precio;
         //botones
        templateCarrito.querySelector(".btn-info").dataset.id = productos.id
        templateCarrito.querySelector(".btn-danger").dataset.id = productos.id
        
        let clon = templateCarrito.cloneNode(true);
        fragment.appendChild(clon);
    });
    items.appendChild(fragment);
    pintarFooter();
}


let pintarFooter = () => { 
    footer.innerHTML = "";
    //si esta vacio
    if (object.keys(carrito).length === 0) {
        
        footer.innerHTML =
            `<th scope="row" class="text-center" colspan="5">Carrito vacío - comience a comprar!</th>`;
        return
    }
    let sumaCantidad = object.values(carrito).reduce((Acu, { cantidad }) => Acu + cantidad,0);
    
    let sumaPrecio=object.values(carrito).reduce((Acu, {cantidad,precio}) => Acu + cantidad * precio,0);
    templateFooter.querySelectorAll("td")[0].textContent = sumaCantidad;
    templateFooter.querySelector("span").textContent = sumaPrecio;
    let clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    let btnVaciar = document.getElementById("vaciar-carrito");
    btnVaciar.addEventListener("click", () => { 
        carrito = {};
        pintarCarrito();
    })
}

let btnAccion = e => { 
    // aumentar ++
     
    if (e.target.classList.contains("btn-info")) {
       console.log(carrito[e.target.dataset.id])
        let producto = carrito[e.target.dataset.id];

        producto.cantidad = carrito[e.target.dataset.id].producto.cantidad ++;
        carrito[e.target.dataset.id] = { ...producto };
         pintarCarrito();
    } 
    if (e.target.classList.contains("btn-danger")) { 

          producto.cantidad = carrito[e.target.dataset.id].producto.cantidad--;
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito();
    }
    e.stopPropagation();
}

