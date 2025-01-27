//CONCATENAR STRINGS 

const producto = 'monitor 20 pulgadas';
const precio = '30$';

//metodo concat
console.log(producto.concat(' ' + precio));
console.log(producto.concat(' grande'));
console.log(producto, precio);
console.log(producto + ' ' + precio)//Asi para separar las palabras entre ambas variables
console.log(`${producto} cuesta ${precio}`);
console.log('el producto ' + producto + ' ' + 'cuesta ' + precio);