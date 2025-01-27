//String Methods - INCLUDES Y LENGTH

//Metodo .Length = te indica cuantas letras tiene la variable
const producto = 'monitor 20 pulgadas';
const precio = '20$';

//conocer la cantidad de letras del string
console.log(producto.length);

//Indexof nos ayuda a identificar si un string se encuentra dentro de la variable
console.log(producto.indexOf('pulgadas'));

//includes nos ayuda a identificar si un string esta dentre de la variable pero nos devuelve un valor boleean 
console.log(producto.includes('monitor'));

//Concat nos permite concatenar
console.log(producto.concat(' ' + precio));

