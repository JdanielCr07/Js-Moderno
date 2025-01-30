//Asignar el valor de un objetro a una variable Tambien llamado Destructuring de objeto
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//La forma antigua y mas usada es 
// const nombre = producto.nombre;
// const precio = producto.precio;
// const disponible = producto.disponible;



//Destructuring seria asi:
// const { nombre } = producto;
// const { precio } = producto;
// const { disponible } = producto;

// Tambien se puede simplificar mas asi
const {nombre, precio, disponible} = producto;//Esto lo que hace es extraer el valor del obejto y lo crea con ese nombre


console.log(nombre, precio, disponible);