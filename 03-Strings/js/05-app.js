//String methods - Replace, slice, substring

const producto = 'Monitor de 20 pulgadas'

//REPLACE = Reemplaza
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//SLICE = Sirve para cortar
console.log(producto.slice(0, 3));
console.log(producto.slice(0, 8));
console.log(producto.slice(8));
// console.log(producto.slice(2, 1)); //Slice no reconoce esto porque el primer numero debe ser mayor que el segundo
 
//ALTERNATIVA A SLICE --- SUBSTRING
console.log(producto.substring(0,8));
console.log(producto.substring(2,1));//Aqui si funciona


//EJEMPLOS DE LAS INICIALES EN LAS APP DE GOOGLE PARA EL PERFIL
console.log(producto.slice(0, 1));
console.log(producto.substring(0, 1));
console.log(producto.charAt(0));//ESTE METODO ACTUA IGUAL PORQUE EL SUBSTRAE UN VALOR EN EL PUNTO DADO QUE UNO ELIJA
