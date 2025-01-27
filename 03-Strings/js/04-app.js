//Metodo para cortar espacios en blanco string

const producto = '             monitor de 20 pulgadas          '

console.log(producto);
console.log(producto.length);

//eliminar espacios en blanco del inicio
console.log(producto.trimStart());

//eliminar espacion en blanco del final 
console.log(producto.trimEnd());
console.log(producto.trimEnd().trimStart());

//eliminar ambos al mismo tiempo 
console.log(producto.trim());
