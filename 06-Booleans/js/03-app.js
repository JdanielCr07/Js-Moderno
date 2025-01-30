//Buenas practicas a la hora de trabajar con boolean
//Ejemplos ce como hacer

const autenticado = true;

//ejemplo #1
if (autenticado === true) {
    console.log('Si esta autenticado');    
}else{
    console.log('No, no esta autenticado');
}

//Ejemplo #2
if (autenticado) {//En este ejemplo se ve que no hace falta poner el igual a true porque el valor se le pasa por implicito
    console.log('Si esta autenticado');
}else{
    console.log('No no esta autenticado');
}

//ejemplo #3 Operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');

