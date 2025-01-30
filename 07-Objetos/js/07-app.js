//Nota curiosa de los objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//Los valores de la constante como objeto si se pueden modificar, 

producto.disponible = false
delete producto.precio

console.log(producto);