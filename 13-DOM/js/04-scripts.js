//querySelector te permite seleccionar elementos del dom, ya sean clases, id o etiquetas HTML
//Haciendo uso de una sintaxis parecida a CSS para seleccionar elementos
//QuerySelector actua como id, en caso te tener varias clases solo mostrara la primera que lea

const card = document.querySelector('.card');//Usa la sintaxis parecida a css en caso de ser clases con .
console.log(card);

//Podemos tener selectores especificos con en CSS
const info = document.querySelector('.premium .info');
console.log(info);

//Podemos seleccionar un segundo card de un grupo de cards
const card2 = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(card2);

//Seleccionar un id
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

//seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);