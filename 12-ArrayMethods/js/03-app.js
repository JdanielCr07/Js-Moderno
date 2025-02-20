//Reduce

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Con foreach
let total = 0;

carrito.forEach( (producto) => {
    return total += producto.precio
})

console.log(total);

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0)//0 es el valor que agarra total que es donde inicia
console.log(resultado);