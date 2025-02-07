//Ejemplo de funciones que se pasan valores
//Esto con la finalidad de que yo tenga que utilizar el valor de una funcion mas adelante debo hacerlo asi, tener una varible donde almacenar el resultado de la funcion


function suma(a,b){
    return a + b
}

const numero = suma(40, 50);
console.log(numero);


//Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio){    
    return total += precio
}
function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);

const impuesto = calcularImpuesto(total);
console.log(`el valor de impuesto es ${impuesto}`);

console.log(total);