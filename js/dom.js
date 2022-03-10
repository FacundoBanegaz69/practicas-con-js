//titulo de BIENVENID0

let title = document.getElementById("titulo");

title.innerText = ("BIENVENIDO A LA TIENDA ONLINE!!!");


// creo mi clase 
class Productos {
    // creo el constructor con mis propiedades
    constructor(tipoProducto, marcaProducto, precioProducto, stock, cantidadComprada, fechaVencimiento) {
        //asignacion de las propiedades

        this.tipoProducto = tipoProducto.toUpperCase();

        this.marcaProducto = marcaProducto.toUpperCase();

        this.precioProducto = parseFloat(precioProducto);

        this.stock = parseInt(stock);

        this.cantidadComprada = parseInt(cantidadComprada);

        this.fechaVencimiento = fechaVencimiento.toUpperCase();;
    }
        //metodos
    sumarIva() {
        let subTotal = this.precioProducto * this.cantidadComprada;
        let iva = subTotal * 1.21;

        let mensaje = document.getElementById("msj");
            let text = `El total de la compra + el "IVA" es de ${iva}`;
            mensaje.innerText = text;
    }
    
        subTotal() {
            let subTotal = this.precioProducto * this.cantidadComprada;
            let mensaje2 = document.getElementById("msj2");
            let texto2 = `El subtotal de la compra sin el "IVA"  de ${this.tipoProducto} de la marca ${this.marcaProducto} es de:$${subTotal} pesos`;
            mensaje2.innerText = texto2;
    }
    
    actualizarStock() {
        const actualizado = this.stock - this.cantidadComprada;
        let mensaje3;
        let texto3;
        if (actualizado > 0) {
            mensaje3 = document.getElementById("msj3");
            texto3 = ` Con la actualizacion el stock esta en ${actualizado} productos`;
            mensaje3.innerText = texto3;
        }
        else if (actualizado <= 0) { 
            mensaje3 = document.getElementById("msj3");
            texto3 = `El estock esta en ${actualizado} vacio, reponer urgentemente!!!`;
            mensaje3.innerText = texto3;
        }
        else if (actualizado != "") { 
            mensaje3 = document.getElementById("msj3");
            texto3 = ` debe ingresar el stock  de  productos para relizar la actulizacion`;
            mensaje3.innerText = texto3;
            
        }
    }
    mostrarDatos() {
        let mostrar = document.getElementById("mostrarDatos");
        
            let info= ` 
                        tipo de producto: ${this.tipoProducto},
                        Marca: ${this.marcaProducto},
                        precio del producto: ${this.precioProducto},
                        Stock: ${this.stock}, 
                        cantidad comprada: ${this.cantidadComprada},
                        Vencimiento: ${this.fechaVencimiento}`;
        
            mostrar.innerText = info;
            
    }
    estadoProducto() { 
        let estadoProducto = this.fechaVencimiento;
        let estado;
        let verEstado;
        switch (estadoProducto) { 
            case "NO":
                estado = document.getElementById("vencimiento");
                verEstado = `El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en buen estado "es apto para el consumo"`;
                estado.innerHTML = verEstado;
                break;
            case "SI":
                estado = document.getElementById("vencimiento");
                verEstado = `El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en mal estado "no se recomienda consumirlo"`;
                estado.innerHTML = verEstado;
                break;
            default:
                estado = document.getElementById("vencimiento");
                verEstado = `El estado del producto ${this.tipoProducto} marca:  ${this.marcaProducto}  es deconocido: "POR FAVOR INGRESAR NUEVAMENTE LO ESTABLECIDO "`;
                estado.innerHTML = verEstado;
                break;
        }
    }
}

let entrada = prompt(`        
                                BIENVENIDO!!!
            PARA INGRESAR LOS PRODUCTOS COMPRADOS ESCRIBA "SI"en MAYUSCULA.
                DE LO CONTRARIO ESCRIBA "ESC" PARA SALIR`);
let Productos1 = [];

while (entrada == "SI" && entrada != "ESC") {
    let producto= prompt("digite el tipo de producto comprado");
    let marca = prompt("digite la marca del producto");
    let precio = parseFloat(prompt("digite el precio del producto"));
    let stock = parseInt(prompt("digite el stock"));
    let cantidad = parseInt(prompt("digite la cantidad comprada"));
    let vencimiento = prompt(`digite si el producto esta Vencido. Si esta vencido esccriba "si" de lo contrario escriba "no"`);
    
    Productos1.push(new Productos(producto, marca, precio, stock, cantidad, vencimiento));
    
    entrada = prompt(`SI TERMINO DE INGRESAR LOS PRODUCTOS ESCRIBA "ESC" PARA SALIR.
    DE LO CONTRARIO ESCRIBA  "SI" en MAYUSCULA PARA CONTINUAR INGRESANDO LOS PRODUCTOS`);
}


for (Productos of Productos1) {
Productos.mostrarDatos(),
Productos.subTotal();
Productos.actualizarStock();
Productos.estadoProducto();
Productos.sumarIva()
}

//ver los productos ingresados
console.log(Productos1);


//meto el MAP para tener un array de productos

let soloMarcas = Productos1.map(p => {
    marcas = document.getElementById("marcas")
    verMarcas = ` Los productos comprados son:${p.tipoProducto}, marca ${p.marcaProducto}`;
    return marcas.innerText = verMarcas;
});

//meto el FIND  productos con vencimiento

let productosVencidos = Productos1.find(vencimiento => { 
    let productoven;
    let mostrarVen;
    if (vencimiento.fechaVencimiento == "SI") { 
        productoven = document.getElementById("vencimiento")
        mostrarVen = `El producto vencido es:${vencimiento.tipoProducto}, marca ${vencimiento.marcaProducto}, vencido ${vencimiento.fechaVencimiento}`;
        productoven.innerText = mostrarVen;
    }
    else if (vencimiento.fechaVencimiento == "NO") { 
        productoven = document.getElementById("vencimiento")
        mostrarVen = `EL producto :${vencimiento.tipoProducto}, marca ${vencimiento.marcaProducto},NO ESTA VENCIDO ${vencimiento.fechaVencimiento}`;
        productoven.innerText = mostrarVen;

    }
});






//meto el filter para tener un array de productos caros

let productoCaro = Productos1.filter(producto => { 
    let caro;
    let verProductoCaro;
    if (producto.precioProducto >= 1000) { 
        caro = document.getElementById("caro");
        verProductoCaro = `El producto mas caro es: ${producto.tipoProducto}, marca ${producto.marcaProducto} su precio es de ${producto.precioProducto} pesos`;
        caro.innerText = verProductoCaro;

    }
});

//meto el filter para tener un array de productos Baratos

let productoBarato = Productos1.filter(producto => { 
    let barato;
    let verProductoBarato;
    if (producto.precioProducto <= 950) { 
        barato = document.getElementById("caro");
        verProductoBarato = `El producto mas Barato es: ${producto.tipoProducto}, marca ${producto.marcaProducto} su precio es de ${producto.precioProducto} pesos`;
        barato.innerText = verProductoBarato;
    }
});