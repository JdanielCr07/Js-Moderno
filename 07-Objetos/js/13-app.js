// Metodos object .keys .values .entries

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}


//Para obtener las llaves del objeto
//.keys
console.log(Object.keys(producto));

//Retorna los valores de un objeto
//.values
console.log(Object.values(producto));


//retorna todo en pares array
//.entries
console.log(Object.entries(producto));