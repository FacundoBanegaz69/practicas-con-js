

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
//con content accedo al contenido
const templateCards = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

const  fragment = document.createDocumentFragment();
// coleccion de objetos
let carrito = {};

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    // if (localStorage.getItem("carrito")) {
    //     carrito = JSON.parse(localStorage.getItem("carrito"))
    //     pintarCarrito()
    // }
        carrito = JSON.parse(localStorage.getItem('carrito')) || {}
      pintarCarrito()

});

cards.addEventListener("click", e => añadirAlCarrito(e))

items.addEventListener("click", e => btnAcciones(e));

// Traer productos 

// nota despues practicar con placeholder
const fetchData = async () => {
    const res = await fetch('api.json');
    const data = await res.json()
    // console.log(data)
    pintarCards(data)
}

// Mostrar productos
let pintarCards=datos => { 
    datos.forEach(productos => { 
        templateCards.querySelector("h5").textContent = productos.titulo;
        templateCards.querySelector("p").textContent = productos.precio;
        //etAttribute recibe un                          nombre y un valor
        templateCards.querySelector("img").setAttribute("src", productos.thumbnailUrl);

        templateCards.querySelector("button").dataset.id = productos.id;
        let clone = templateCards.cloneNode(true);
        //guardo en la variable y evito el reflow 
        fragment.appendChild(clone);
    })
    cards.appendChild(fragment);
}

// Agregar al carrito
let añadirAlCarrito = e => { 
    //me ayuda a saber al momento de hacer click si lo hago al boton
    if (e.target.classList.contains("btn-success")) { 
        setCarrito( e.target.parentElement)
    } 
    /*stopPropagation(); es para detener los eventos del item que elija
    nota por eso cuando apretaba en consola salian muchos click era porque se propagaba y accedia al div
    que contenia los demas nodos*/
    e.stopPropagation();
}
//captura los items
let setCarrito = item => {
    let productos = {
        id: item.querySelector("button").dataset.id,
        titulo: item.querySelector("h5").textContent,
        precio: item.querySelector("p").textContent,
        cantidad: 1
    }//pregunto si existe la propieda producto si existe +1 sino muestro 1 por defecto
    if (carrito.hasOwnProperty(productos.id)) {
        
        productos.cantidad = carrito[productos.id].cantidad +1;
    }//       aplico el      Spread
    carrito[productos.id] = {...productos }

        pintarCarrito()
}

let pintarCarrito = () => { 
   //limpio para que no se repita el elemento seleccionado anteriormente
    items.innerHTML = "";
    //al trabajar con objeto no puedo usar las funciones de los array por eso tengo que usar Object.values
    Object.values(carrito).forEach(productos => {
   
        templateCarrito.querySelector("th").textContent = productos.id;
        //accedo al 1er td
        templateCarrito.querySelectorAll("td")[0].textContent = productos.titulo;
        //accedo al 2do td
        templateCarrito.querySelectorAll("td")[1].textContent = productos.cantidad;
        
        templateCarrito.querySelector("span").textContent = productos.cantidad * productos.precio;
         //botones
        templateCarrito.querySelector(".btn-info").dataset.id = productos.id;
        templateCarrito.querySelector(".btn-danger").dataset.id = productos.id;
        
        let clon = templateCarrito.cloneNode(true);
        fragment.appendChild(clon);
    });
    items.appendChild(fragment);
    pintarFooter()
    //    localStorage.setItem("carrito", JSON.stringify(carrito));

}


let pintarFooter = () => { 
    //limpio
    footer.innerHTML = "";
    // si esta vacio
    // if (Object.keys(carrito).length === 0) {
    //        //agrego el mensaje 
    //     footer.innerHTML = `
    //     <th scope="row" colspan="5">Carrito vacío,</th>
    //     `
    //     return
    // }
     //aquien caso de que elija uno y mediante el boton eliminar producto quedaaria en 0 pero queda guardo el el storage entonces si es 0 lo saca
    Object.keys(carrito).length === 0 &&   localStorage.setItem("carrito", JSON.stringify(carrito));
    // sumar cantidad y sumar totales
      
    let sumaCantidad = Object.values(carrito).reduce((acumulador, { cantidad }) => acumulador + cantidad,0);
    
    let sumaPrecio = Object.values(carrito).reduce((acumulador, { cantidad, precio }) => acumulador + cantidad * precio, 0);
    
    templateFooter.querySelectorAll("td")[0].textContent = sumaCantidad;
    templateFooter.querySelector("span").textContent = sumaPrecio;

    let clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    let btnLimpiar = document.getElementById("vaciar-carrito");
    btnLimpiar.addEventListener("click", () => { 
        carrito = {};
        localStorage.setItem("carrito", JSON.stringify(carrito));
        pintarCarrito();
    })
            // agrego los productos al localStorage
    let btnGuardarCompra = document.getElementById("guardar-compra")
    btnGuardarCompra.addEventListener("click", () => {
    
        localStorage.setItem("carrito", JSON.stringify(carrito));
            pintarCarrito();
    })
}

let btnAcciones = e => { 
    // aumentar ++
     
    if (e.target.classList.contains("btn-info")) {
    
        let producto = carrito[e.target.dataset.id];

        producto.cantidad++;

        carrito[e.target.dataset.id] = {...producto};
         pintarCarrito();
    } 
    if (e.target.classList.contains("btn-danger")) { 

            let producto = carrito[e.target.dataset.id];

        producto.cantidad--;

        // if (producto.cantidad === 0) {
        //     delete carrito[e.target.dataset.id];
        // } else {
        //     carrito[e.target.dataset.id] = {...producto}
        // }
         //aplico el operador terneario
        producto.cantidad === 0 ? delete carrito[e.target.dataset.id] : carrito[e.target.dataset.id] = {...producto}
        pintarCarrito();
    }
    e.stopPropagation();

}