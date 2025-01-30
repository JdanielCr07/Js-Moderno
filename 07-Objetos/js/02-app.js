//Como acceder a los valores de un objeto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//De esta manera de puede acceder a un valor de un objeto con .
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Existe otra forma no muy usada
console.log(producto['nombre']);