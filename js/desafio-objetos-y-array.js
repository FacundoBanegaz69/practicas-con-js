//ejercicio clase 6  compras de productos
/*entrada  ---- pedir al usuario que ingrese los productos que compro
*/
/*proceso   --- con los productos almacenarlo en un array y modificarlo(sarca algunos producto si el usuario lo requiere) */
//salida mostrar todo por un alert / console

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
                        alert(`tipo de producto: ${this.tipoProducto},
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
                alert(`El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en buen estado "es apto para el consumo"`)
                break;
            case "si":
                alert(`El estado del producto: ${this.tipoProducto} marca ${this.marcaProducto} esta en mal estado "no se recomienda consumirlo"`) 
                break;
            default:
                alert(`El estado del producto ${this.tipoProducto} y marca  es deconocido: ${this.marcaProducto}  "POR FAVOR INGRESAR NUEVAMENTE LO ESTABLECIDO "`)
                break;
        }
    }
}
let Productos1 = new Productos(
        prompt("digite el tipo de producto comprado"),
        prompt("digite la marca del producto"),
        prompt("digite el precio del producto"),
        prompt("digite el stock"),
        prompt("digite la cantidad comprada"),
        prompt(`digite si el producto esta Vencido. Si esta vencido esccriba "si" de lo contrario escriba "no"`)
    );

Productos1.mostrarDatos();
Productos1.subTotal();
Productos1.actualizarStock();
Productos1.estadoProducto();
Productos1.sumarIva();
