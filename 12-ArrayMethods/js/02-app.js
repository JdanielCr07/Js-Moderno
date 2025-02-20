//FindIndex es un array methods que se usa para saber el indice de un valor en un arreglo
//nota: si hay dos valores iguales el solo tomara en cuenta el primero

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Ejmplo con foreach para saber el indice de un valor en un array
meses.forEach( (mes, index) => {
    if( mes === 'Mayo'){
        console.log(index);
    }
})

//Ejemplo con findIndex
const resultado = meses.findIndex( mes => mes === 'Febrero')
console.log(resultado);

const resultados = meses.findIndex( (mes) => {
    return mes === 'Febrero'
})

console.log(resultados);

//Practicando ejemplo con arreglo de objetos
const producto = carrito.findIndex( (carro) => {
    return carro.nombre === 'Monitor 27 Pulgadas'
})
console.log(producto);