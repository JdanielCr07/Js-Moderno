//Foreach y .map
//Son arrow function y se ejecuta las veces que tenga valores los arreglos, hay que pasarselos como parametro

const pendientes = ['comer', 'cantar', 'bailar', 'aprender js'];

pendientes.forEach( (pendiente, index) =>{//,Si aqui se le pasa un segundo parametro nos mostraria la posicion en el arrreglo
    console.log(`${index} : ${pendiente}`);
})

const carrito = [
    {nombre: 'monitor', precio: 100},
    {nombre: 'Tv', precio: 200},
    {nombre: 'Mouse', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'telefono', precio: 500},
    {nombre: 'celular', precio: 600},
]

carrito.forEach( (compras) => {
    console.log(compras.nombre);//Asi podrias ponerlo a funcionar con objetos
})

//.map funciona igual que foreach la unica diferencia es que .map crea un nuevo arreglo mientras que foreach no

const nuevoarreglo = carrito.forEach( (compras) => {
    return compras.nombre;
})

console.log(nuevoarreglo);

const nuevoarreglo2 = carrito.map( (compras) => {//Aqui estariamos creando un arreglo de cada nombre de el objeto
    return compras.nombre;
})

console.log(nuevoarreglo2);