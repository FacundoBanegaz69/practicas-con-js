function login() {

    let nombre = prompt("introduzca su nombre").toLocaleUpperCase();
    let apellido = prompt(" introduzca su Apellido").toLocaleUpperCase();
    let terminos = confirm("Acepta los terminos y condiciones?");

    if (nombre != "" && apellido != "" && terminos == true) {
        
            if ((nombre.length >= 4 && apellido.length >= 4)) { 
                let usuario = `¡Bienvenido/a  ${nombre} ${apellido}`;
                return usuario;
            }
            else {
            alert("Debe ingresar como minimo 4 letras en los dos campo requeridos anteriormente")
        }
        
    }
    else {
        alert("Para  ingresar debe complempletar los dos campo  requeridos anteriormente ")
    }
}

//guardo mi funcion en una variable

 let user =login()
 // obtengo el parametro
function tienda(user) { 
    
    
    // aqui tenia un problema era que si no ponia ningun valor en login, igualmente se segui ejecutando el codigo, pero con Igualdad estricta y undefined evito el problema
    if (user !== undefined) { 
        
        let ingresar = prompt(` ${user}\n
        ¿Desea comprar si/no ?  `).toLocaleUpperCase();
        
        while (ingresar == "SI" && (ingresar != "" || ingresar != "NO")) {
            secciones(user)
            ingresar =prompt(`¿Desea volver a comprar comprar si/no ?`).toLocaleUpperCase();
        }
    }
}
//le paso el argumento y ejecuto la funcion padre contenedora de todos

tienda(user)
function secciones(user) { 
    let productos = parseInt(prompt(`${user} \n
        ¿Que necesita comprar? \n
        Nuestros productos son:\n
        1 *--Pastas--*\n
        2 *--Refrescos--*\n
        3 *--Bebidas Alcohólicas--*\n
        Elegir una opcion\n
        Para salir ingrese el numero "0";
                            `));
    
    switch (productos) { 
        case 1:
            SeccionPastas()
            break;
        case 2:
            seccionRefrescos()
            break;
        case 3:
            seccionBebidasAlcoholicas()
            break;
        default:
            alert("Eligio la opcion 0 salir")
            break;
        
    }
    
}




function SeccionPastas() { 
    alert(`eligio la opcion 1\n
                *--Pastas--*`);
    pasta();
}
function pasta() { 
    let Pastas = parseInt(prompt(`Seccion pastas\n
                Nuestros productos son:\n
                1 *--Fideos--*\n
                
                2 *--Arroz--*\n
                
                3 *--Ñoquis--*\n
                
                4 *--Ravioles--*\n
                
                Elegir una opcion\n
                Ingresar un numero de lo contrario "0"
                                    `));
    switch (Pastas) { 
        case 1:
            alert(`eligio la opcion 1\n
                        *--Fideos--*\n
                        $250\n
                        ¡Gracias!`);
            break;
        case 2:
            alert(`eligio la opcion 2\n
                        3 *--Arroz--*\n
                            $220\n
                        ¡Gracias!`);
            break;
        case 3:
            alert(`eligio la opcion 3\n
                        3 *--Ñoquis--*\n
                            $390\n
                        ¡Gracias!`);
            break;
        case 4:
            alert(`eligio la opcion 4\n
                        3 *--Ñoquis--*\n
                            $390\n
                        ¡Gracias!`);
            break;
        default:
            alert("Eligio la opcion 0 salir")
            break;
        
    }

}


function seccionRefrescos() { 
    alert(`eligio la opcion 2\n
                *--Refrescos--*`);
    refrescos()
}
function refrescos() { 
    let Refrescos = parseInt(prompt(`Seccion Refrescos\n
                Nuestros productos son:\n
                1 *--Coca Cola--*\n
                
                2 *--Sprite--*\n
                
                3 *--Mirinda Manzana--*\n
        
                4 *--Secco--*\n
                
                Elegir una opcion\n
                Ingresar un numero de lo contrario "0"
                                    `));
    switch (Refrescos) { 
        case 1:
            alert(`eligio la opcion 1\n
                    1 *--Coca Cola--*\n
                    $310\n
                    ¡Gracias!`);
            break;
        case 2:
            alert(`eligio la opcion 2\n
                    2 *--Sprite--*\n
                    $280\n
                    ¡Gracias!`);
            break;
        case 3:
            alert(`eligio la opcion 3\n
                    3 *--Mirinda Manzana--*\n
                        $210\n
                    ¡Gracias!`);
                    
            break;
        case 4:
            alert(`eligio la opcion 4\n
                    4 *--Secco--*\n
                        $200\n
                    ¡Gracias!`);
            break;
        default:
            alert("Eligio la opcion 0 salir")
            break;
        
    }
}


function seccionBebidasAlcoholicas() { 
    alert(`eligio la opcion 3\n
                *--Bebidas Alcohólicas--*`);
    bebidasAlcoholicas()
}

function bebidasAlcoholicas() {
    let edad = parseInt(prompt("¿Que edad tienes?"));
    
    if (edad >= 18 && edad < 100) {
        let Alcohol = parseInt(prompt(`Seccion Bebidas Alcohólicas\n
                Nuestros productos son:\n
                1 *--Vodka--*\n
                
                2 *--Coñac--*\n
                
                3 *--Fernet Branca--*\n
        
                4 *--Whisky--*\n
                
                Elegir una opcion\n
                Ingresar un numero de lo contrario "0"
                                    `));
        switch (Alcohol) {
            case 1:
                alert(`eligio la opcion 1\n
                                        1 *--Vodka--*\n
                                        $5.530\n
                                        ¡Gracias!`);
                break;
            case 2:
                alert(`eligio la opcion 2\n
                                        2 *--Coñac--*\n
                                        $3.599\n
                                        ¡Gracias!`);
                break;
            case 3:
                alert(`eligio la opcion 3\n
                                        3 *--Fernet Branca--*\n
                                            $1350\n
                                        ¡Gracias!`);
                break;
            case 4:
                alert(`eligio la opcion 4\n
                                        4 *--Whisky--*\n
                                            $7.200\n
                                        ¡Gracias!`);
                break;
            default:
                alert("Eligio la opcion 0 salir")
                break;
                        
        }
    }
    else {
        alert("En Argentina prohíben vender alcohol a los menores de 18 en todo el país");
            }
}



       function eliminar() { 
        let eliminar = prompt("Que nombre decea eliminar");
        let resultaado = carrito.indexOf(eliminar)
            if (resultaado != -1) {
                carrito.splice(resultaado, 1)
            }
            else { 
                alert("no se encontraron resultados")
            }
    }




