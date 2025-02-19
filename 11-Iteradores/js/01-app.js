//FOR
console.warn('Ejemplo inicial for');
for (let i = 0; i <= 10; i++) {
    console.log(`numero: ${i}`);
}

// EJEMPLO DE FOR, PARA SABER SI NUMERO ES PAR E IMPAR con un if
console.warn('Ejemplo numero par o impar');
for (let i = 0; i <= 10; i++) {
    if ( i % 2 === 0) {
        console.log(`El numero: ${i} es par`);
    }else{
        console.log(`El numero: ${i} es impar`);
    }
}

//EJEMPLO CON UN ARRAY OBJETO USO DE FOR

console.warn('Ejemplo #3 FOR CON ARRAY Y OBJETOS');

const carrito = [
    {nombre: 'monitor', precio: 100},
    {nombre: 'Tv', precio: 200},
    {nombre: 'Mouse', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'telefono', precio: 500},
    {nombre: 'celular', precio: 600},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
