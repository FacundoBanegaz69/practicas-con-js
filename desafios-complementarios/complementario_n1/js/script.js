let nombre = prompt("Para ingresar debe introducir su nombre").toLocaleUpperCase();
let apellido = prompt("Para ingresar debe introducir su Apellido").toLocaleUpperCase();

let ingresar;
//&& (nombre != "" && apellido != "")

if ((nombre.length >= 4 && apellido.length >= 4)) {
    alert(`¡Bienvenido/a a la tienda! ${nombre} ${apellido}`);
    
    ingresar = prompt(`¿Desea comprar si/no ? ${nombre} ${apellido}`).toLocaleUpperCase();

    while (ingresar == "SI" && (ingresar != "" || ingresar != "NO")) {

        let productos = parseInt(prompt(`¿Que necesita comprar?\n
        Nuestros productos son:\n
        1 *--Pastas--*\n
        2 *--Refrescos--*\n
        3 *--Bebidas Alcohólicas--*\n
        Elegir una opcion\n
        Para salir ingrese el numero "0";
                            `));

        let Pastas;
        let Refrescos;
        let Alcohol;

        if (productos == 1) {
            alert(`eligio la opcion 1\n
                *--Pastas--*`);
        
            Pastas = parseInt(prompt(`Seccion pastas\n
                Nuestros productos son:\n
                1 *--Fideos--*\n
                
                2 *--Arroz--*\n
                
                3 *--Ñoquis--*\n
                
                4 *--Ravioles--*\n
                
                Elegir una opcion\n
                Ingresar un numero de lo contrario "0"
                                    `));
            if (Pastas == 1) {
                alert(`eligio la opcion 1\n
                        *--Fideos--*\n
                        $250\n
                        ¡Gracias!`);
            }
            else
                if (Pastas == 2) {
                    alert(`eligio la opcion 2\n
                        3 *--Arroz--*\n
                            $220\n
                        ¡Gracias!`);
        
                }
                else
                    if (Pastas == 3) {
                        alert(`eligio la opcion 3\n
                        3 *--Ñoquis--*\n
                            $390\n
                        ¡Gracias!`);
                    }
                    else
                        if (Pastas == 4) {
                            alert(`eligio la opcion 4\n
                        3 *--Ñoquis--*\n
                            $390\n
                        ¡Gracias!`);
                        }
                        else { 
                            alert("Eligio la opcion 0 salir")
                            break;
                        }
        
        }
        
        else if (productos == 2 ) {
            Refrescos = parseInt(prompt(`Seccion Refrescos\n
                Nuestros productos son:\n
                1 *--Coca Cola--*\n
                
                2 *--Sprite--*\n
                
                3 *--Mirinda Manzana--*\n
        
                4 *--Secco--*\n
                
                Elegir una opcion\n
                Ingresar un numero de lo contrario "0"
                                    `));
            if (Refrescos == 1 ) {
                alert(`eligio la opcion 1\n
                    1 *--Coca Cola--*\n
                    $310\n
                    ¡Gracias!`);
            }
            else
                if (Refrescos == 2 ) {
                    alert(`eligio la opcion 2\n
                    2 *--Sprite--*\n
                    $280\n
                    ¡Gracias!`);
    
                }
                else
                    if (Refrescos == 3 ) {
                        alert(`eligio la opcion 3\n
                    3 *--Mirinda Manzana--*\n
                        $210\n
                    ¡Gracias!`);
                    }
                    else
                        if (Refrescos == 4 ) {
                            alert(`eligio la opcion 4\n
                    4 *--Secco--*\n
                        $200\n
                    ¡Gracias!`);
                        }
                    else { 
                            alert("Eligio la opcion 0 salir")
                            break;
                        }
        }
        else if (productos == 3 ) {
            let edad = parseInt(prompt("¿Que edad tienes?"));
            if (edad >= 18) {
                Alcohol = parseInt(prompt(`Seccion Bebidas Alcohólicas\n
                Nuestros productos son:\n
                1 *--Vodka--*\n
                
                2 *--Coñac--*\n
                
                3 *--Fernet Branca--*\n
        
                4 *--Whisky--*\n
                
                Elegir una opcion\n
                Ingresar un numero de lo contrario "0"
                                    `));
                if (Alcohol == 1 ) {
                    alert(`eligio la opcion 1\n
                        1 *--Vodka--*\n
                        $5.530\n
                        ¡Gracias!`);
                }
                else
                    if (Alcohol == 2 ) {
                        alert(`eligio la opcion 2\n
                        2 *--Coñac--*\n
                        $3.599\n
                        ¡Gracias!`);
        
                    }
                    else
                        if (Alcohol == 3) {
                            alert(`eligio la opcion 3\n
                        3 *--Fernet Branca--*\n
                            $1350\n
                        ¡Gracias!`);
                        }
                        else
                            if (Alcohol == 4 ) {
                                alert(`eligio la opcion 4\n
                        4 *--Whisky--*\n
                            $7.200\n
                        ¡Gracias!`);
                            }
                            else { 
                            alert("Eligio la opcion 0 salir")
                            break;
                        }
            }
            else if (edad < 18) {
                alert("En Argentina prohíben vender alcohol a los menores de 18 en todo el país");
            }
        }
        else if ( productos == 0){
            alert(`Eligio la opcion 0 salir\n
                ¡Vuelva prontos!`)
            break;
        }
        
        ingresar =prompt(`¿Desea volver a comprar comprar si/no ? ${nombre} ${apellido}`).toLocaleUpperCase();
    }
}
else { 
alert("Debe ingresar como minimo 4 letras en los dos campo requeridos anteriormente")
}








