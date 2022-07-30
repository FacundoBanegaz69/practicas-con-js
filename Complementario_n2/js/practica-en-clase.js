

let login = {
    nombre:"facu",
    apellido:"banegaz",
    terminos: "si",
    tel: {
        cod: "121"
    }
}


console.log(
login.tel.cod)


function user(nombre,apellido,terminos) { 
        this.nombre = nombre;
        this.apellido = apellido;
        this.terminos = terminos;
}
let user1 = new user("sadds","asdsd","si");


class Log { 
    constructor(nombre, apellido, terminos) { 
        this.nombre = nombre;
        this.apellido = apellido;
        this.terminos = terminos;
    }
    saludar() { 
        alert(`Bienvedido! ${this.nombre} ${this.apellido}`);
    }

}

function auto(nombre, modelo, año, marca,precio) { 
    this.nombre = nombre;
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
    this.precio = precio;

    this.comprar = function comprar() { 
        alert(`Compro un auto ${nombre}, ${modelo}, ${marca} , a $ ${precio}`);
    }
    this.iva = function iva() { 
        return this.precio * 0.21;
    }
}

let persona1= new auto("Gol", "GTI",2019,"Volkswagen",6000000)


persona1.comprar();





function sumar(num1,num2) { 
    let resultado = num1 + num2;
}

function restar(num1,num2) { 
    let resultado = num1 - num2;
}



function iva(valor) { 
    valor * 1.21;
}


//  ¿cuántos constructores podemos crear en una clase?


//  ¿cuántos  clases con su constructor podemos crear ?
function mult(cal) {
    return num => num * cal;

}

let duplicar = mult(2);
console.log(duplicar(5));



function sumador(inicio, final) {
    let acumulador = 0;

    if (inicio <= final) {
        for (inicio; inicio <= final; inicio++) {
            acumulador += inicio;

            console.log(inicio);
        }
    } else { 
         for (inicio; inicio >= final; inicio--) {
        acumulador += inicio;

        console.log(inicio);
    }
    }
    return acumulador;
}


let resultado = sumador(1, 10)
let resultado2 = sumador(10, 1)
console.log(resultado)

console.log(resultado2)



let pedirPrestamo = (monto, banco) => {
    if (monto <= 10000) { 
        alert("monto invalido")
        return;
    }
    let total = 0;
    switch (banco) { 
        case "Galicia":
            total= monto *1.5
            break;
        case "Santander":
            total= monto *1.55
            break;
        case "Nacion":
            total= monto *1.7
            break;
        default:
            alert("Banco ingresado incorrecto!!!");
            break;
    }
    return alert(`el monto ingresado fue de ${monto}, con el interes agredado seria ${total}`)
}



const pedirDdatos = () => { 
let banco = prompt("nombre del banco");
let monto = Number(prompt("ingrese monto"))


    return pedirPrestamo(monto, banco)
}

let prestamo = pedirDdatos();

console.log(prestamo)


const pedirDatos = () => { 
let banco = prompt("nombre del banco");
    let monto = Number(prompt("ingrese monto"));
    let edad = Number(prompt("ingrese edad"));
    
    let usuario =new auto(nombre, modelo, año, marca,precio)
}

let riesgo = (user) => { 
    alert("hola"+user.persona)
    alert("segun su salirio dispone de "+user.salario)
}




let productos = {
    id: 1,
    nombre: "Gotas",
    marca: "poen",
    precio:2500
}


let productos1 = {
    id: 2,
    nombre: "Foco",
    marca: "Rayo",
    precio:250
}
const producto = [];
// yo les recomiendo usar clase
// partiendo de un array vacio
// array.push(new Objeto(….))

class tarjeta{ 
    constructor(nombre_tarjeta, nombre_propietario, numero, monto) { 
        this.nombre_tarjeta = nombre_tarjeta;
        this.nombre_propietario = nombre_propietario;
        this.numero = numero;
        this.monto = monto;
    }

    deposito() { 
        let deposito=`   "Dinero En Cuenta"\n
                Usuario: ${this.nombre_propietario}\n
                Monto actual: ${this.monto}\n
                Nombre de Tarjeta: ${this.nombre_tarjeta}`
        return deposito;
    }
    ingresar() { 
        let nuevoMonto = parseFloat(prompt("Ingrese el dinero"));
        alert(`"Ingresaste dinero"\n
                Usuario: ${this.nombre_propietario}\n
                Nuevo Monto: ${nuevoMonto +=this.monto}\n
                Nombre de Tarjeta: ${this.nombre_tarjeta}`)
    }
    retirar() { 
        alert(` "Retiraste dinero"\n
                Usuario: ${this.nombre_propietario}\n
                Nuevo Monto: ${this.monto}\n
                Nombre de Tarjeta: ${this.nombre_tarjeta}`)
    }
    pedirPrestamo() { 
        let monto = parseFloat(prompt("ingrese el monto de dinero a pedir"));
        let banco = prompt(`ingrese el nombre del banco\n
                            Los Bancos aceptados son:\n
                            "Galicia", "Santander", "Nacion", "Hipotecario"\n
                            "Rio",  "Macro",   "Frances"`);

        if (monto >= 0) {
            alert(`El monto ingresado ${monto} es invalido`)
            return ;
        } else {
            let total = 0;
            switch (banco) {
                case "Galicia":
                    total = monto * 1.57
                    break;
                case "Santander":
                    total = monto * 1.45
                    break;
                case "Nacion":
                    total = monto * 1.80
                    break;
                case "Hipotecario":
                    total = monto * 1.30
                    break;
                case "Rio":
                    total = monto * 1.20
                    break;
                case "Macro":
                    total = monto * 2.00
                    break;
                case "Frances":
                    total = monto * 1.91
                    break;
                default:
                    alert("El Banco ingresado no es valido.");
                    break;
            }
            return total;
        }
    }
}
let tarjeta = new tarjeta("Banco Nacion","Facundo Francisco Banegaz","121 122 3333 1212",10000);
console.log(tarjeta)
tarjeta.deposito();
console.log(tarjeta)
tarjeta.pedirPrestamo()

console.log(tarjeta)




// borrar elemento
// let nombres = ["facundo", "francisco", "andres", "franco", "Nicolas"]

// console.log(nombres)
// console.log(nombres.length)

// let borrar = prompt("que nombre borrar")

// let resultaado = nombres.indexOf(borrar)

// if (resultaado >= 0) {
//     nombres.splice(resultaado,1)
// }
// console.log(nombres)
// console.log(nombres.length)


//saber si esta el valor

let nombres = ["facundo", "francisco", "andres", "franco", "Nicolas"]


let valor = prompt("verificar nombre")

let resultaado = nombres.includes(valor)

if (resultaado) {
    console.log(resultaado)
} else { 
    console.log("no existe")
}
