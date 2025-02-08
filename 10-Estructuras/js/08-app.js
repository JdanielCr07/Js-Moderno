//BUENAS PRACTICAS A LA HORA DE TRABAJAR CON IF

//La primera buena practica es que cuando el valor de un variable sea igual a true, en la condicion no hace falta volver a igualar solo colocando la variable se sobreeentiende que es true
const autenticado = true

if(autenticado){
    console.log('Si esta autenticado');
}

//Otra buena practica es es la detencion de un if con una funcion, en la vida real y cotidiana se suele manejar los if  de la siguiente manera
//Se hace uso de return para salir del if cado contrario ejecutara todos los if, el return solo funciona en una funcion, por ejemplo 

const puntaje = 450;

function revisarPuntaje() {
    if (puntaje > 400){
        console.log('Excelente');
        return
    }

    if(puntaje > 350){
        console.log('Buen puntaje');
        return
    }
}

revisarPuntaje();

