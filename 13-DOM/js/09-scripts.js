//Remover elementos desde js

const primerEnlace = document.querySelector('a');
primerEnlace.remove();//Eliminamos desde el mismo elemento

//Podemos eliminar tambien desde el padre

const card = document.querySelector('.contenedor-cards');
console.log(card);
console.log(card.children);

// card.children[2].remove();//Asi podemos pero tambien puede hacer

card.removeChild(card.children[2]);//Asi eliminamos