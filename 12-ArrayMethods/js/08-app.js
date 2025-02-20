//spread operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Asi agregamos elementos a un arreglo
//spread operator
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const producto = { nombre: 'Disco Duro', precio: 200};

const resultado = [...carrito, producto];
console.log(resultado);