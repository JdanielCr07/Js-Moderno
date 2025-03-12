const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () =>{
    if(nav.style.backgroundColor === 'red'){
        nav.style.backgroundColor = 'transparent';
    }else{
        nav.style.backgroundColor = 'red';
    }
})

nav.addEventListener('mouseenter', () =>{//Se ejecuta cuando el mouse entra al elemento sin dar click
    console.log('Entraste');
})

nav.addEventListener('mouseout', () =>{//Se ejecuta cuando el mouse sale del elemento sin dar click
    console.log('saliste');
})

nav.addEventListener('mousedown', () =>{//Similar a un click
    console.log('Down');
})

nav.addEventListener('mouseup', () =>{//Se ejecuta cuando se suelta el click
    console.log('soltaste');
})
nav.addEventListener('dblclick', () =>{//Se ejecuta cuando se da doble click
    console.log('doble');
})