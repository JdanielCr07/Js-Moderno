//BREAK Y CONTINUE

//BREAK = ES UNA INSTRUCCION USADA EN LOS BUCLES QUE AL SER USADA ROMPE EL CICLO 
//CONTINUE = ES UNA INSTRUCCION USADA EN LOS BUCLES QUE AL SER USADA, DETIENE EL CICLO Y SALTA A LA SIGUIENTE ITEREACION 

//ejemplo break
//Se requiere que identificar al llegar al numero 6 y cortar el bucle ademas mostarlo en letra
console.warn('BREAK')
for ( let i = 0; i <= 10; i++ ){
    if( i === 6){
        console.log('SEIS');//dejandolo solo hasta aqui, entraria en esta validacion pero seguria y mostraria el valor de iteracion por tanto colocamos break para romper la ejecucion
        break;
    }
    console.log(`numero: ${i}`);
}

//Ejemplo de continue 
//Se requiere identificar el numero 4 y colocarlo en letra
console.warn('CONTINUE')
for( let i = 0; i <= 10; i++){
    if( i === 4){
        console.log('CUATRO');//Si se deja hasta aqui, entraria en la validacion pero tambien ejecutaria la iteracion y solo se quiere mostrar el numero en letra  por tanto ejecutamos continue para saltar a laa siguiente iteracion
        continue;
    }
    console.log(`numero: ${i}`)
}

//Ejemplo de continue
//Se requiere identificar el elemtno con descuento
console.warn('EJEMPLO #3')
const carrito = [
    {nombre: 'monitor', precio: 100},
    {nombre: 'Tv', precio: 200},
    {nombre: 'Mouse', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'telefono', precio: 500, descuento: true},
    {nombre: 'celular', precio: 600},
]

for( let i = 0; i<carrito.length; i++){
    if( carrito[i].descuento === true){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento!!`);
        continue;
    }
    console.log(carrito[i].nombre);
}