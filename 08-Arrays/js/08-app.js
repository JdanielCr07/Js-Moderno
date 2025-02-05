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

//Destructuring en ARRAY
const numero = [10,20,30,40,50];

// const [primero] = numero;
// const [primero, segundo] = numero;
// console.log(primero);
// console.log(segundo);

// const [ , , , Cuarto] = numero;//Asi seria si quiero obtener solo el cuarto valor
// console.log(Cuarto);

const [primero, ...tercero] = numero;//spread operator, hace un array nuevo, apartir del lugar donde lo coloque
console.log(primero, tercero);

