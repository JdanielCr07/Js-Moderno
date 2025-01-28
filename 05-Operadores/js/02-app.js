//Comparar dos valores

const numero = 20;
const numero2 = '20'
const numero3 = 65;

//Revisaro si dos numeros son iguales
console.log(numero == numero3);
console.log(numero == numero2);//comprador no tan estricto, solo se fija en el valor

//comparador estricto
console.log(numero === numero2);//comparador estricto se fija en el valor y en el tipo de dato
console.log(numero === parseInt(numero2)); //converitmos a number y comparamos
console.log(typeof numero);
console.log(typeof numero2);

//Diferente a 
const password = 'admin';
const password2 = 'Admin';

console.log(password != password2);
console.log(numero != numero2); //diferenciador no estricto
console.log(numero !== numero2); //diferenciador estricto
