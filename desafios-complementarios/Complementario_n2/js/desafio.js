class Usuario { 
    constructor(nombre, apellido, edad,nacionalida) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = parseInt(edad);
        this.nacionalida = nacionalida;
    }
    bienvenido() { 
        alert(`Haz Iniciado sesion!  \n  ${this.nombre} ${this.apellido}`);
    }
    saludar() { 
        alert(`Bienvedido! \n  ${this.nombre} ${this.apellido}`);
    }
    salir() { 
        alert(` "Haz cerrado  sesion"  \n Saludos!  ${this.nombre} ${this.apellido}`);
    }
}

let usuario = [];



class Auto { 
    constructor(modelo, fabricante, origen, color, precio, anio,cantidad) { 
        this.modelo = modelo.toUpperCase();
        this.fabricante = fabricante.toUpperCase();
        this.origen = origen.toUpperCase();
        this.color = color;
        this.precio = parseFloat(precio);
        this.anio = anio;
        this.cantidad = parseInt(cantidad);
    }
    comprar() { 
        alert(`Compro  ${this.modelo}\n
            marca ${this.fabricante}\n
            origen ${this.origen} \n
            año ${this.anio} \n
            Precio:$ ${this.precio}
            Cantidad: ${this.cantidad}`);
    }
    iva() { 
         let compra = this.precio * this.cantidad;
        let IVA =compra* 1.21;
        return alert(`El producto  comprado" ${this.fabricante}, ${this.modelo}" con el IVA  su precio seria de ${IVA}`);
    }
    descuento() { 
        let compra = this.precio * this.cantidad;
        let descuento = compra - (compra * 0.25);
        return alert(`Tiene un descuento del  25%, con lo cual su Precio final seria de: ${descuento}`);
    }


}


let productos = [];





let  ingresar = prompt(`¿Desea Crear una cuenta de logeo si/no ?`).toUpperCase();

while (ingresar == "SI" && (ingresar != "" || ingresar != "NO"||ingresar != 0)) {

    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    let edad = prompt("ingrese su edad")
    let nacionalida = prompt("ingrese su nacionaidad")

    if (nombre != "" && apellido != "" && edad >= 18 && nacionalida != "") {
        
        usuario.push(new Usuario(nombre, apellido, edad, nacionalida));

        for (const user of usuario ) {
            user.bienvenido();
            user.saludar();
        }
        let compra = prompt(`¿ Desea  comprar un auto escriba   si/no ?`).toUpperCase();

        
        while(compra == "SI" && (compra != "" || compra != "NO")) {

            let modelo = prompt("Ingrese el modelo del Auto");
            let fabricante = prompt("Ingrese el Fabricante del Auto ");
            let origen = prompt("Ingrese el origen del Auto");
            let color = prompt("Ingrese el color del Auto");
            let precio = prompt("Ingrese el precio del Auto");
            let anio = prompt("Ingrese el año del Auto");
            let cantidad = prompt("Ingrese la cantidad  comprada de Autos");
            //me aburri jajajaja validando
            if (modelo != "" && fabricante != "" && origen != ""
                && color != "" && precio != "" && anio != "" && cantidad != "") {
                
                productos.push(new Auto(modelo, fabricante, origen, color, precio, anio, cantidad));
                for (const producto of productos) {
                    producto.comprar();
                    producto.iva();
                    producto.descuento();
                }
            }else {
            alert("Para  ingresar debe complempletar los dos campo  requeridos anteriormente ")
        }

        compra = prompt(`¿si Desea vovler  comprar un auto escriba   si/no ?`).toUpperCase();
        }
        
        ingresar = prompt(`¿Si desea crear otra cuenta escriba "SI", si desea  salir escriba "0"`).toUpperCase();
        for (const user of usuario) {
            user.salir();
        }

    }else {
        alert("Para  ingresar debe complempletar los dos campo  requeridos anteriormente ")
        break;
        }

}
console.log(productos)

console.log(usuario)
