const carrito = [
    {nombre: 'monitor', precio: 100},
    {nombre: 'Tv', precio: 200},
    {nombre: 'Mouse', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'telefono', precio: 500},
    {nombre: 'celular', precio: 600},
]

//La otra opcion es un Foreach
carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

//Otra variante, de foreach trabaja igual solo que .map te crea un nuevo array
const nueva_v = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);


console.log(nueva_v);