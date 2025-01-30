//Crear objetos anidados

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

//Para acceder a un objeto anidado seri igual con el .
console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion.medidas.alto);

