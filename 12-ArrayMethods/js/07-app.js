//.concat concatenar arreglos


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];

//concat
const resultado = meses.concat(meses2, meses3);
console.log(resultado);

//spread operator tambien se puede usar para concatenar
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);