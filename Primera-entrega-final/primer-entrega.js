

class login{ 
	constructor(nombre,contraseña) { 
		this.nombre = nombre;
		this.contraseña = contraseña;
	}
}

let usuarios = [];

class Producto{ 
	constructor(nombre, marca, precio, cantidad) { 
		this.nombre = nombre;
		this.marca = marca;
		this.precio = precio;
		this.cantidad = cantidad;
	}
}

let productos = [];

let inicio = confirm("Bienvenido a la tienda\n Para ingresar debes crear una cuenta");


while (inicio === true ) { 
	
	let usuario = prompt("ingrese el nombre").toUpperCase();
	let contrasenia = prompt("ingrese la contraseña");
	
	if (usuario != "" && contrasenia != "") {
		usuarios.push(new login(usuario, contrasenia));

		alert(`Bienvenido ${usuario}, su cuenta fue creada`);
		
        let comprar = confirm(` Desea comprar? `);


		while (comprar === true) {
			alert(`Usuario/a ${usuario}, para compra debe especificar lo siguiente`);

			let nombre = prompt(`Ingrese el nombre del producto`);
			let marca = prompt(`Ingrese la marca  del producto`);
			let precio = Number(prompt(`Ingrese el precio del producto`));
			let cantidad = Number( prompt(`Ingrese la  dcantidad comprada del producto`));

			if (nombre!="" && marca!="" && precio!=0 && cantidad!=0) { 
				productos.push(new Producto(nombre, marca, precio, cantidad));
				alert("Se agregaron al carrito "+ productos.length+" productos")
			}
			else { 
		            alert("Invalido, debe completar los campos");
		            break;
	            }
			

			comprar = confirm(` Desea vovler comprar? `);

		}
		let ver = prompt("ver resumen SI/NO? ").toUpperCase();
		
		while (ver=="SI" && ver!=""&& ver!="NO") { 
			mostrar();
			let SubTotalCompra = productos.map((e) => `El subtotal: Nombre:${e.nombre}, Marca: ${e.marca}, SubTotal: ${e.precio * e.cantidad}\n`)
			alert(SubTotalCompra)
			let total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
			alert("El total es "+total)
			//aqui tendria que poner alert pero me sale [object, object] asi que le puse un console .log() no tenia tiempo
            let mayorAmenor = productos.sort((a, b) => b.precio - a.precio)
			console.log(" Mayor precio")
			console.log(mayorAmenor)
			
			let MenorAmayor = productos.sort((a, b) => a.precio - b.precio)
			console .log(" Menor precio") 
			console .log(MenorAmayor)
			let masCompradao = productos.filter((e) => e.cantidad > 3)
			console .log(" Mas comprado") 
			console.log(masCompradao)
			
			ver = prompt("Desea  volver ver resumen SI/NO? ").toUpperCase();
		}
		

	} else { 
		alert("Invalido, debe completar los campos");
		break;
	}
	inicio = confirm(`Esta segura de quere VOLVER a ingresar? `);

}

console.log(usuarios)
console.log(productos)

function mostrar() { 
	let ver = prompt("Desea ver el listado  de los productos Marque SI/NO").toUpperCase();
	if (ver == "SI") {
		alert("a continuacion se mostrar la lista de productos")
		let mostrar = productos.map(
			(productos) => `Nombre del producto :${productos.nombre} 
			                Marca del producto: ${productos.marca}
							Precio: $ ${productos.precio}
							Cantidad: ${productos.cantidad} `);
		alert(mostrar.join(" \n "))
	} else {
		alert("HASTA LUEGO!!!")
	}

}




// tambien practique con array ya cargados pero que hacer  que el usuario cargue sus producto, aunque si queria le podia mostrar un listado PD ESTO NO ES EL DESAFIO😁

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ej de listado

// let comida = [
// 	{ name: "🍕", precio: 850, cantidad: 2 },
// 	{ name: "🍔", precio: 650, cantidad: 1 },
// 	{ name: "🍟", precio: 250, cantidad: 3 },
// 	{ name: "🍦",precio:450,cantidad:4 },
// ]


// comida.map(e=> e.name)

// function recorrer(numero,mostrar) {
// 	for (const numeros of numero) {
// 		mostrar(numeros)
// 	}

// }

// function recorrer(array, fn) { 
// 	for (const iterator of array) {
// 		fn(iterator)
// 	}
// }
// let total = 0;

// function acumulador(numeros) { 
// 	total += numeros;

// }

// recorrer(numeros,acumulador)
 
// alert("El total es "+total);

// const duplicador = [];

// function duplicado(numeros) { 
// 	duplicador.push(numeros*2)
// }

// recorrer(numeros,duplicado)


// console.log(duplicador)


// comida.forEach(e => { 
// 	console.log(
// 		e.name,
// 	e.cantidad,
// 	e.precio
// 	)
// })

// let resultado = comida.find((e) => e.name === "🍕");
// console.log(resultado)
 

// let resultado1 = comida.find((e) => e.name === "🍕");
//  console.log(resultado1)


// const total = comida.reduce((acc, el) => acc + el.precio, 0)


// let mayorAmenor = comida.sort((a, b) => b.precio - a.precio)
// console.log(mayorAmenor)
// let MenorAmayor= comida.sort((a,b)=> a.precio- b.precio)
// console.log(MenorAmayor)
