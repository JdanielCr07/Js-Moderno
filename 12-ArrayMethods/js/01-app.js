//.includes y .some Ambos son metodos de arrays
//Sirven para identificar si hay un valor dentro de un array en el caso del includes y el caso de .some sirve con ambos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.warn('Comprobar si un valor existe en un arreglo');
meses.forEach(mes => {
    if( mes === 'Enero'){
        console.log('Si existe');
    }
});

console.warn('Ejemplo de includes')//El includes solo funciona en arreglo de solo valor
const resultado = meses.includes('Diciembre');
console.log(resultado);

console.warn('ejemplo de .some');
const existe = carrito.some((producto) => {
    return producto.nombre === 'Celular'
})
console.log(existe);

const existe2 = meses.some((mes) => {   
    return mes === 'Enero'
})

console.log(existe2);


