//Cambiando el css con JS
//En js cuando hacemos cambios en css las palabras o propiedades que iban separadas con un guion aqui se diferencian que van pegadas y en vez de tener el guion la segunda palabra va con la inicial en mayuscula

const header = document.querySelector('h1');//Aqui seleccionamos el elemento h1
header.style.backgroundColor = 'red'; //De esta manera modificamos el css con js, haciendo un cambio en el background color
header.style.textTransform = 'uppercase';//Aqui cambiamos el estilo para que todo sea mayuscula

console.log(header.style);

console.log(header);

//LO MAS RECOMENDABLE, es agregar o quitar clases en lugar de estar cambiando el css
//Por ejemplo 

const card = document.querySelector('.card');
console.log(card);
console.log(card.classList);//Asi mostramos las clases que lo componen al elemento 
// console.log(card.className);//Asi mostramos el nombre en texto de la clase

card.classList.add('NuevaClase');//Asi agregamos nueva clase
console.log(card.classList);

//Tambien podemos remover clases de un elemento 
card.classList.remove('card');
console.log(card);
console.log(card.classList);