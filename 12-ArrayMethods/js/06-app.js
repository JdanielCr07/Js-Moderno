//every se deben cumplir todas las condiciones del array para que de true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 1000);//con .every todos deben cumplir la condicion 
const resultado2 = carrito.every( producto => producto.precio < 500);
console.log(resultado);
console.log(resultado2);

//mientras que con .some con que unos pasen la condicion da true
const resultado3 = carrito.some( producto => producto.precio < 500);
console.log(resultado3);
