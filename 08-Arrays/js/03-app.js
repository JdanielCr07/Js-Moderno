//Recorrer un arrary 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

console.table(meses);

//Para saber cuanto mide un arreglo usamos la propiedad length
console.log(meses.length);

//Para recorrer un arreglo, podemos hacer un for
//Asi se obtiene cada una de los valores del array
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

