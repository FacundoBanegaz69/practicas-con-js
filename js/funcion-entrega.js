 let num1 = 0;
let num2 = 0;

let cantidad = 0;
// funciones flecha 12

const sumar = () => num1 + num2;

const restar = () =>num1 - num2;

const multiplicar =()=> num1 * num2;

const dividir = () => num1 / num2;


function calculadora() {
    
    cantidad = parseInt(prompt(`ingrese la cantidad de la operaciones que relizara "-, +, *, /"`));
    
    for (let i = 1; i <= cantidad; i++) {
        // sobre >>"vueltas del ciclo" ${i} es para comprobar la cantidad de vueltas 
        num1 = parseInt(prompt(`INGRESE EL PRIMER VALOR   "vueltas del ciclo" ${i}`));

        let operacion = prompt(`INGRESE EL SIGNO DE LA OPERACION "-, +, *, /"   "vueltas del ciclo" ${i}`);

    num2 = parseInt(prompt(`INGRESE EL SEGUNDO VALOR    "vueltas del ciclo" ${i}`));
    //para entrar al if se tiene que cumplir las  dos condiciones 
    if (operacion != "" && (operacion=="-" || operacion=="+"|| operacion=="*" || operacion=="/")) {
        
        switch (operacion) {
            case "-":
                alert(`El resultado de la resta de los numeros  ${num1} - ${num2} es = ${restar()}`);
                break;
            case "+":
                sumar();
                alert(`El resultado de la suma de los numeros  ${num1} + ${num2} es =  ${sumar()}`);
                break;
            case "/":
                alert(`El resultado de la division entre los numeros  ${num1} / ${num2} es =  ${ dividir()}`);
                break;
            case "*":2
                alert(`El resultado de la multiplicacion ente los  numeros  ${num1} * ${num2} es =  ${multiplicar()}`);
                break;
            
        }
    }
    else {
    alert("Error no puede mandar vacio o caracteres diferentes al pedido")
    }
    }
    alert("Termino la ejecucion del programa")
}
calculadora();