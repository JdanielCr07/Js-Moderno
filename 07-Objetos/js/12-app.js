//Object constructor otra forma de crear objetos

//Object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//object constructor
function Producto( nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('hola', 45);
console.log(producto2);

const producto3 = new Producto('television', 455);
console.log(producto3);

