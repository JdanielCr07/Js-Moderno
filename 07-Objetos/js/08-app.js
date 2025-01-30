//Congelar un objeto para no poder modifcar sus valores

'use strict'//Asi hacemos que verifique de manera estricta nuestro codigo en busca de errores

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto);//Esta es la manera de hacer que el objeto se comporte como constante

// producto.imagen = 'imagen'
// producto.disponible = false

console.log(producto);
console.log(Object.isFrozen(producto));//Con este metodo podemos ver si el objeto esta congelado