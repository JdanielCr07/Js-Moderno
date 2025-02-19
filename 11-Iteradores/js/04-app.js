//WHILE LOP
//EL CICLO WHILE SE CUMPLIRA SIEMPRE Y CUANDO SE CUMPLA LA CONDICION

let numero = 1;//Primero se incializa la variable

console.warn('While')
while( numero <= 10 ){//Se asigna la condicion
    console.log(`Numero: ${numero}`);

    numero++;//Se incrmenta el valor
}


console.warn('Ejemplo#2 while FIZZBUZZ')

let i = 1;

while( i < 100 ){
    if( i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ`);
    }
    else if( i % 3 === 0){
       console.log(`${i} FIZZ`); 
    }else if( i % 5 === 0){
        console.log(`${i} BUZZ`);
    }

    i++;
}

console.warn('Ejmplo #3 pares o nones')
let j = 0;

while (j <= 20) {
    if( j % 2 === 0 ){
        console.log(`${j} : Par`);
    }else{
        console.log(`${j} : None`);
    }
    j++;
}