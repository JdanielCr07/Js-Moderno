//Copiar 2 objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso : '1kg',
    medida: '1m'
}
console.log(producto);
console.log(medidas);

//metodo assign permite unir ambos objetos
const resultado = Object.assign(producto, medidas);
// console.log(Object.assign(producto, medidas));

//Otro metodo 
//Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };//los tres puntos significacion una copia del objeto
console.log(resultado);
console.log(resultado2);