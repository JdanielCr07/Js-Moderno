//Destructuring con objetos anidados

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion : {
        medidas: {
            medida: '1m',
            alto: '2m'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}

//Forma de agregar a una variable nuevo con destructuring
// const {nombre} = producto;
// const {nombre, informacion} = producto;

//Para acceder a los objetos anidados debe hacerse asi
const {nombre, informacion, informacion: {fabricacion},  informacion:{fabricacion: {pais}}} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);

