const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {//Se ejecuta cuando se presiona una tecla
//     console.log('escribiendo...');
// });

// busqueda.addEventListener('keyup', () => {//Se ejecuta cuando se suelta una tecla
//     console.log('up...');
// });

// busqueda.addEventListener('copy', () => {//Se ejecuta cuando se copia control + c
//     console.log('Copiado...');
// });

// busqueda.addEventListener('paste', () => {//se ejecuta cuando se pega control + v
//     console.log('pegar...');
// });

// busqueda.addEventListener('blur', () => {//se ejecuta cuando se sale del input
//     console.log('blur...');
// });
// busqueda.addEventListener('input', () => {//se ejecuta cuando se escribe en el input copia pega hace todo mennos el blur
//     console.log('input...');
// });

busqueda.addEventListener('input', (e) => {//Asi podemos ver lo que el usuario escribe
    console.log(e.target.value);
});
