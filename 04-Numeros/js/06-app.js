//Metodos utiles para trabajar  con numeros

const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20;

console.log(numero1);
//convertir un string a number
console.log(Number.parseInt(numero1));//Para numeros enteros
console.log(Number.parseFloat(numero2));//Para numeros flotantes
console.log(Number.parseInt(numero3));

//Saber si un numero es entero
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));