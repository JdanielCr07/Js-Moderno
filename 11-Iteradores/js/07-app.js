//For of es una forma mas compacta de iterar sobre arreglos se asigna una especie de parametro y el se lo asigna por cada valor que tenga el arreglo 

const pendientes = ['comer', 'cantar', 'bailar', 'aprender js'];

const carrito = [
    {nombre: 'monitor', precio: 100},
    {nombre: 'Tv', precio: 200},
    {nombre: 'Mouse', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'telefono', precio: 500},
    {nombre: 'celular', precio: 600},
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (const producto of carrito ) {
    console.log(producto.nombre, producto.precio);
}