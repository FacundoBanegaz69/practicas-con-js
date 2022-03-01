//ejercicio clase 7 compras de productos
//entrada  
//proceso
//proceso  

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

        this.fechaVencimiento = fechaVencimiento;
    }
        //metodos
    sumarIva() {
            let subTotal = this.precioProducto * this.cantidadComprada;
            let iva =subTotal * 1.21;
            console.log(`El total de la compra + el "IVA" es de ${iva}`);
    }
    
        subTotal() {
            let subTotal = this.precioProducto * this.cantidadComprada;
            console.log(`El subtotal de la compra sin el "IVA"  de ${this.tipoProducto} de la marca ${this.marcaProducto} es de:$${subTotal} pesos`);
    }
    
    actualizarStock() {
        const actualizado = this.stock - this.cantidadComprada;
        if (actualizado > 0) {
            console.log(` Con la actualizacion el stock esta en ${actualizado} productos`)
        }
        else if (actualizado <= 0){ 
            console.log(`El estock esta en ${actualizado} vacio, reponer urgentemente!!! `)
        }
        else if (actualizado!= "") { 
            console.log(` debe ingresar el stock  de  productos para relizar la actulizacion`)
        }
    }
        mostrarDatos() {
                        console.log(`tipo de producto: ${this.tipoProducto},
                        Marca: ${this.marcaProducto},
                        precio del producto: ${this.precioProducto},
                        Stock: ${this.stock}, 
                        cantidad comprada: ${this.cantidadComprada},
                        Vencimiento: ${this.fechaVencimiento}`)
    }
    estadoProducto() { 
        let estadoProducto = this.fechaVencimiento;
        switch (estadoProducto) { 
            case "no":
                console.log(`El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en buen estado "es apto para el consumo"`)
                break;
            case "si":
                console.log(`El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en mal estado "no se recomienda consumirlo"`) 
                break;
            default:
                console.log(`El estado del producto ${this.tipoProducto} y marca  es deconocido: ${this.marcaProducto}  "POR FAVOR INGRESAR NUEVAMENTE LO ESTABLECIDO "`)
                break;
        }
    }
}


let Productos1 = [];
Productos1.push(new Productos("Arroz","Gallo",200,100,3,"no"));

Productos1.push(new Productos("Cerveza","Norte",250,30,3,"si"));

Productos1.push(new Productos("Galletas","Serranas",130,45,3,"si"));

Productos1.push(new Productos("Leche", "Manfrey", 130, 300, 12, "no"));

Productos1.push(new Productos("Vino", "Norton", 1300, 300, 2, "no"));

Productos1.push(new Productos("Galletas", "Oreo", 150, 40, 3, "no"));

Productos1.push(new Productos("Gaseosas", "Mirinda Manzana", 160, 45, 2, "no"));

Productos1.push(new Productos("celular", "Motorola", 8000, 15, 1, "no"));

for (let Productos of Productos1) {
Productos.mostrarDatos();
Productos.subTotal();
Productos.actualizarStock();
Productos.estadoProducto();
Productos.sumarIva();
}
