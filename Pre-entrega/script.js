
let array = [1,2,3,4,5,6,7,8,9,10];



const porCadaUno=(array,fin)=>{ 
    for (let elemento of array) { 
        fin(elemento);
    }
}

porCadaUno(array,console.log);




















