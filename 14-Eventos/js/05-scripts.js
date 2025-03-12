//Eventos al dar scroll con el mouse

//ubicacion.top indica la distancia entre la parte superior del elemento y la parte superior de la ventana del navegador.
// window.innerHeight nos da la altura visible de la ventana del navegador en píxeles.
// ubicacion.bottom nos dice dónde termina el elemento en relación con la parte superior de la ventana.
//getBoundingClientRect() nos dice dónde está el elemento en la ventana.

// window.addEventListener('scroll', () => {
//     const scrollPX = window.scrollY;//Asi nos  muestra los pixeles que se han movido de arriba hacia abajo
//     console.log(scrollPX);
// })

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();//Nos da la ubicacion del elemento
    
    console.log(ubicacion);

    // if ( ubicacion.top < 682){  
    //     console.log('Se ve');
    // }else{
    //     console.log('No se ve');
    // }

    if (ubicacion.top < window.innerHeight && ubicacion.bottom >= 0) {//Asi se ajusta a cada pantalla teniendo los pixles que tenga
        console.log('El elemento .premium está en la vista del usuario');
    } else {
        console.log('El elemento .premium no está en la vista del usuario');
    }
})