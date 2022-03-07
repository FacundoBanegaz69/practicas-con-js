//SON 2 PROGRAMAS PARECIDOS NADA MAS QUE 1 CON CLASS Y OTRO NO
let productos = [
    { id:1,tipoProducto: "Aceitunas", marcaProducto: "Nucete", origen: "Uruguay", precioProducto: 155, stock: 30,  fechaVencimiento: true ,descuento:10,cantidadComprada:0},
    
    { id:2,tipoProducto: "Picadillo ", marcaProducto: "Swift", origen: "Argentina", precioProducto: 77, stock: 30,  fechaVencimiento: true,descuento:20 ,cantidadComprada:1},
                  ///ENLATADOS
    {id:3, tipoProducto: "Atun", marcaProducto: "El Dorado", origen: "Ecuador", precioProducto: 380, stock: 60, fechaVencimiento: false ,descuento:15,cantidadComprada:2},

    {id:4, tipoProducto: "Arroz", marcaProducto: "Arcor",origen: "Argentina",  precioProducto: 300, stock: 20,  fechaVencimiento: true ,descuento:11,cantidadComprada:0},
                                     //SECCION FIDEOS
    {id:5, tipoProducto: "Fideos ", marcaProducto: "Arcor", origen: "Argentina", precioProducto: 90, stock: 305,  fechaVencimiento: true ,descuento:19,cantidadComprada:1},

                                 ///SECCION Infusiones
    { id:6,tipoProducto: "Yerba", marcaProducto: "Pajarito", origen: "Paraguay", precioProducto: 300, stock: 5,  fechaVencimiento: false,descuento:10,cantidadComprada:0 },

    {id:7, tipoProducto: "Te", marcaProducto: "Rosa Monte", origen: "Argentina", precioProducto: 90, stock: 4,  fechaVencimiento: false ,descuento:10,cantidadComprada:2},
    
    { id: 8, tipoProducto: "Cafe", marcaProducto: "La Virginia", origen: "Argentina", precioProducto: 290, stock: 45, fechaVencimiento: false, descuento: 90, cantidadComprada:3},
    
    {id:9, tipoProducto: "Celular", marcaProducto: "Xiaomi", origen: "China", precioProducto: 90000, stock: 4,  fechaVencimiento: false ,descuento:10,cantidadComprada:0},
    
    { id:10, tipoProducto: "Smart Tv", marcaProducto: "LG", origen: "Corea Del Sur", precioProducto: 129000, stock: 15, fechaVencimiento: false, descuento: 5, cantidadComprada: 1}
]

function precioConDescuento(precioProducto, descuento) {
    return precioProducto - ((precioProducto * descuento) / 100);
}


let entrada = prompt(`        
                                BIENVENIDO!!!
            PÁRA INGRESAR ESCRIBA "SI"en MAYUSCULA.
                DE LO CONTRARIO ESCRIBA "ESC" PARA SALIR`);


while (entrada == "SI" && entrada != "ESC") {
    let producto = prompt(`BUENOS DIAS!!!
        SI DECEA VER EL CATALOGO DE PRODUCTOS QUE COMPRO? ESCRIBA "SI".`);
    if (producto == "SI") {

        alert("LISTADOS DE LOS PRODUCTOS ENLATADOS");
        //muestra el listado
productos.forEach((producto) => {
     console.log(`SECCION PRODUCTOS Id:${producto.id}`);
            alert(` Id:${producto.id}
                    tipo de producto: ${producto.tipoProducto},
                    Marca:${producto.marcaProducto},
                    Origen:${producto.origen},
                    Precio: ${producto.precioProducto},
                    Stock: ${producto.stock}, 
                    FechaVencimiento:${producto.fechaVencimiento}
                    Descuento:${producto.descuento}
                    cantidadComprada: ${producto.cantidadComprada}`);
        });
    }
    else { 
        alert("No ingreso nada, fin del programa");
    }
    entrada = prompt(`SI TERMINO DE VER LOS PRODUCTOS ESCRIBA "ESC" PARA SALIR.
    DE LO CONTRARIO ESCRIBA  "SI" en MAYUSCULA PARA CONTINUAR MIRANDO EL CATALOGO DE  PRODUCTOS`);
}

        // + descuento
    let descuento =productos.forEach((p)=> {
            //si no compro no se aplica el descuento
    if (p.cantidadComprada >0) { 
        alert(` EL DESCUENTO DE Los productos comprados ES:
                    Id:${p.id}
                    tipo de producto: ${p.tipoProducto},
                    Marca:${p.marcaProducto},
                    Origen:${p.origen},
                    Precio: ${p.precioProducto},
                    Stock: ${p.stock}, 
                    FechaVencimiento:${p.fechaVencimiento}
                    Descuento:${p.descuento}
                    cantidadComprada: ${p.cantidadComprada},
                    PRECIO FINAL CON DESCUENTO:${precioConDescuento(p.precioProducto,p.descuento)}`)
    };
    });

// productos con vencimiento

let productosVencidos = productos.some(vencimiento => { 
    if (vencimiento.fechaVencimiento === true) { 
        console.log(` LOS PRODUCTOS VENCIDOS SON:
                    Id:${vencimiento.id}
                    tipo de producto: ${vencimiento.tipoProducto},
                    Marca:${vencimiento.marcaProducto},
                    Origen:${vencimiento.origen},
                    Precio: ${vencimiento.precioProducto},
                    Stock: ${vencimiento.stock}, 
                    FechaVencimiento:${vencimiento.fechaVencimiento}
                    Descuento:${vencimiento.descuento},
                    cantidadComprada: ${vencimiento.cantidadComprada}`)
    }
});





///PRODUCTOS CAROS

let productoCaro = productos.filter(producto => { 
     if (producto.precioProducto >= 20000) { 
         console.log(`LOS PRODUCTOS MAS CAROS SON:
                    Id:${producto.id}
                    tipo de producto: ${producto.tipoProducto},
                    Marca:${producto.marcaProducto},
                    Origen:${producto.origen},
                    Precio: ${producto.precioProducto},
                    Stock: ${producto.stock}, 
                    FechaVencimiento:${producto.fechaVencimiento}
                    Descuento:${producto.descuento},
                    cantidadComprada: ${producto.cantidadComprada}`);
    }
});

//productos Baratos

let productoBarato = productos.filter(producto => { 
     if (producto.precioProducto <=1000) { 
         console.log(`LOS PRODUCTOS MAS BARATOS SON: 
                    Id:${producto.id}
                    tipo de producto: ${producto.tipoProducto},
                    Marca:${producto.marcaProducto},
                    Origen:${producto.origen},
                    Precio: ${producto.precioProducto},
                    Stock: ${producto.stock}, 
                    FechaVencimiento:${producto.fechaVencimiento}
                    Descuento:${producto.descuento},
                    cantidadComprada: ${producto.cantidadComprada}`);
    }
});


//////CON CLASES




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
            let iva =subTotal * 1.21;
            alert(`El total de la compra + el "IVA" es de ${iva}`);
    }
    
        subTotal() {
            let subTotal = this.precioProducto * this.cantidadComprada;
            alert(`El subtotal de la compra sin el "IVA"  de ${this.tipoProducto} de la marca ${this.marcaProducto} es de:$${subTotal} pesos`);
    }
    
    actualizarStock() {
        const actualizado = this.stock - this.cantidadComprada;
        if (actualizado > 0) {
            alert(` Con la actualizacion el stock esta en ${actualizado} productos`)
        }
        else if (actualizado <= 0){ 
            alert(`El estock esta en ${actualizado} vacio, reponer urgentemente!!! `)
        }
        else if (actualizado!= "") { 
            alert(` debe ingresar el stock  de  productos para relizar la actulizacion`)
        }
    }
        mostrarDatos() {
            alert(`
                        tipo de producto: ${this.tipoProducto},
                        Marca: ${this.marcaProducto},
                        precio del producto: ${this.precioProducto},
                        Stock: ${this.stock}, 
                        cantidad comprada: ${this.cantidadComprada},
                        Vencimiento: ${this.fechaVencimiento}`)
    }
    estadoProducto() { 
        let estadoProducto = this.fechaVencimiento;
        switch (estadoProducto) { 
            case "NO":
                alert(`El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en buen estado "es apto para el consumo"`)
                break;
            case "SI":
                alert(`El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en mal estado "no se recomienda consumirlo"`) 
                break;
            default:
                alert(`El estado del producto ${this.tipoProducto} marca:  ${this.marcaProducto}  es deconocido: "POR FAVOR INGRESAR NUEVAMENTE LO ESTABLECIDO "`)
                break;
        }
    }
}

let entrar = prompt(`        
                                BIENVENIDO!!!
            PARA INGRESAR LOS PRODUCTOS COMPRADOS ESCRIBA "SI"en MAYUSCULA.
                DE LO CONTRARIO ESCRIBA "ESC" PARA SALIR`);
let Productos1 = [];

while (entrar == "SI" && entrar != "ESC") {
    let producto = prompt("digite el tipo de producto comprado");
    let marca = prompt("digite la marca del producto");
    let precio = parseFloat(prompt("digite el precio del producto"));
    let stock = parseInt(prompt("digite el stock"));
    let cantidad = parseInt(prompt("digite la cantidad comprada"));
    let vencimiento = prompt(`digite si el producto esta Vencido. Si esta vencido esccriba "si" de lo contrario escriba "no"`);
    
    Productos1.push(new Productos(producto, marca, precio, stock, cantidad, vencimiento));
    
    entrar = prompt(`SI TERMINO DE INGRESAR LOS PRODUCTOS ESCRIBA "ESC" PARA SALIR.
    DE LO CONTRARIO ESCRIBA  "SI" en MAYUSCULA PARA CONTINUAR INGRESANDO LOS PRODUCTOS`);
}


for(Productos of Productos1){
Productos.mostrarDatos(),
Productos.subTotal();
Productos.actualizarStock();
Productos.estadoProducto();
Productos.sumarIva();
}
//ver los productos ingresados
console.log(Productos1)
//
//meto el MAP para tener un array de productos

let soloMarcas = Productos1.map(p => {
    return console.log(` Los productos comprados son:${p.tipoProducto}, marca ${p.marcaProducto}`);
});

//meto el FIND  productos con vencimiento

let productosVencidoss = Productos1.find(vencimiento => { 
    if (vencimiento.fechaVencimiento == "SI") { 
        console.log(`Los productos vencidos son:${vencimiento.tipoProducto},
         marca ${vencimiento.marcaProducto},vencido ${vencimiento.fechaVencimiento}`)
    }
});






//meto el filter para tener un array de productos caros

let productoCaros = Productos1.filter(producto => { 
     if (producto.precioProducto >= 1000) { 
        console.log(`El producto mas caro es: ${producto.tipoProducto}, marca ${producto.marcaProducto} su precio es de ${producto.precioProducto} pesos`);
    }
});

//meto el filter para tener un array de productos Baratos

let productoBaratos = Productos1.filter(producto => { 
     if (producto.precioProducto <=950) { 
        console.log(`El producto mas Barato es: ${producto.tipoProducto}, marca ${producto.marcaProducto} su precio es de ${producto.precioProducto} pesos`);
    }
});





















