//Agregar propiedades a un objeto o eliminarlas

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//Forma para agregarlas
producto.imagen = 'Producto.jpg';//Solo hay que colocar el nombre de la variable objeto, seguido de . y elnombre de la nueva propiedad y el valor
producto.edad = 23;

//Forma para eliminar una propiedad de un objeto
delete producto.disponible;

console.log(producto);