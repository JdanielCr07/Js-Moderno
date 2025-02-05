//Agregar elementos al inicio y al final con metodos de array
const carrito = [];

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
};

const producto2 = {
    nombre: 'telefono',
    precio: 800
};

//metodo .push agrega siempre al final, sin importar de que tama;o dea el arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'teclado',
    precio: 300
};

//Metodo .unshift funciona para agregar un producto al comienzo
carrito.unshift(producto3);

console.table(carrito);