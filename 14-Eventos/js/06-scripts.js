//Event Bubbling
// El Event Bubbling (burbujeo de eventos) es 
// un comportamiento en JavaScript donde un evento que 
// ocurre en un elemento se propaga hacia arriba a través de sus elementos contenedores

const card = document.querySelector('.card');
console.log(card);

const info = document.querySelector('.info');
console.log(info);

const titulo = document.querySelector('.titulo');
console.log(titulo);

card.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Card activo');
})

info.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('info activo');
})

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('titulo activo');
})