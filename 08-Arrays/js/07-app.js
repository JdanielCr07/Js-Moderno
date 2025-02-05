//Eliminar elementos de un array
const carrito = [];
const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
};
const producto2 = {
    nombre: 'telefono',
    precio: 800
};
const producto3 = {
    nombre: 'teclado',
    precio: 300
};

//metodo .push agrega siempre al final, sin importar de que tama;o dea el arreglo
carrito.push(producto);
carrito.push(producto2);
//Metodo .unshift funciona para agregar un producto al comienzo
carrito.unshift(producto3);

console.table(carrito);

//ELIMINACION DE EL ULTIMO VALOR DE UN ARRAY 

// carrito.pop();
// console.table(carrito);//Elimina el ultimo registro

// carrito.pop();
// console.table(carrito);

//PARA ELIMINAR EL PRIMERO REGISTRO HAY QUE APLICAR
// carrito.shift();
// console.table(carrito);

//ELIMINACION EN UN RANGO SERIA
carrito.splice(1, 2);
console.table(carrito);