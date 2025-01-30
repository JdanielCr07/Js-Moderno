//metodo seal= permite modificar las llaves de un objeto pero no te permite agregar nuevo ni eliminar

'use strict'//Asi hacemos que verifique de manera estricta nuestro codigo en busca de errores

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.seal(producto);//Esta indica que no se pueden agregar ni modificar propiedadees pero si se pueden modificar
// producto.imagen = 'imagen'
producto.disponible = false

console.log(producto);
console.log(Object.isSealed(producto));//Asi sabemos si un objeto esta sellado 
