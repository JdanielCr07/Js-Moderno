//Eventos Submit a un formulario

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();//Asi evitamos que el navegador haga el evento por defecto que en este caso es redirigir a otra pagina
    console.log('buscando...');
    console.log(e.target.method);
})
