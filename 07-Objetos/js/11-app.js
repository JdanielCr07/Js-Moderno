//this, hace referencia dentro del mismo objeto

// const nombre = 'hola';
// const precio = 44;

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`); //Con el this indica hacer referencia a los valores dentro del objeto sin estar asignando un valor anteriormente
    }
}

const producto2 = {
    nombre: 'tablet',
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`); //Con el this indica hacer referencia a los valores dentro del objeto sin estar asignando un valor anteriormente
    }
}

//En este ejemplo podemos ver que la funcion hace uso de los valores nombre y precio, con el this, indicamos que queremos los valores propios de cada objeto
producto.mostrarInfo();
producto2.mostrarInfo();

