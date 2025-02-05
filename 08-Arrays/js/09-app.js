const carrito = [
    {nombre: 'monitor', precio: 100},
    {nombre: 'Tv', precio: 200},
    {nombre: 'Mouse', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'telefono', precio: 500},
    {nombre: 'celular', precio: 600},
]
//Asi podriamos recorrer un objeto dentro de un array
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - precio ${carrito[i].precio}`);   
}

//La otra opcion es un Foreach

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})