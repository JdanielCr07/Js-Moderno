//Traversing the DOM --- Recorrer el dom con js

const navegacion = document.querySelector('.navegacion');//Seleccionamos
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

console.log(navegacion.childNodes);//ChildNodes muestra en un array los hijos pero toma los espacios en blanco como elementos
console.log(navegacion.children);//aca igual pero este si toma elementos reales

console.log(navegacion.children[3]);
console.log(navegacion.children[3].nodeType);
console.log(navegacion.children[3].nodeName);

const card = document.querySelector('.card');
console.log(card.children[0]);

card.children[0].src = 'img/hacer2.jpg';//Cambiamos la imagen con children

card.children[1].textContent = 'Nueva entrada';//Cambiamos el texto

//TRAVERSING DE HIJO A PADRE

console.log(card);
console.log(card.parentNode); //Aqui estamos en la clase card y buscamos el padre de esa clase
console.log(card.parentElement.parentElement.parentElement);//Asi subimos al padre, mientras mas pongamos mas subimos

console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);//saltamos al siguiente hijo