//Forma de prevenir el event bubbling con delegation

const card = document.querySelector('.card');
card.addEventListener('click', (e) => {
    // console.log(e);

    if(e.target.classList.contains('titulo')){
        console.log('seleccionaste titulo');
    }

    if(e.target.classList.contains('info')){
        console.log('seleccionaste info');
    }

    if(e.target.classList.contains('precio')){
        console.log('seleccionaste precio');
    }
})