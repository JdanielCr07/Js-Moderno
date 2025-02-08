//ESTRUCTURAS DE CONTROL--IF-COMPARADOR ESTRICTO

// = srive para igualar a algo
// == Comparador no estricto, no se fija en el typo de dato
// === comparador estricto, se fija en el tipo de dato
// !== Diferente estricto


const numero = 1000;
const numero2 = "1000";

console.log(typeof numero);
console.log(typeof numero2);


if (numero == numero2) {//Este dara como resultado que si son iguales por no ser estricto
    console.log('Si es igual...');    
}else{
    console.log('No es igual');
}

if (numero === numero2) {
    console.log('Si es igual...');    
}else{
    console.log('No es igual');
}

if (numero !== numero2){
    console.log('Si es diferente');
}else{
    console.log('No es diferente');
}


