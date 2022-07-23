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
    return total;
 }



// const pedirDatos = () => { 
// let banco = prompt("nombre del banco");
// let monto = Number(prompt("ingrese monto"))


//     return pedirPrestamo(monto, banco)
// }

// let prestamo = pedirDatos();

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