//MODIFICAR TEXTOS O IMAGENES CON JS

const heading = document.querySelector('.contenido-hero h1');//Aqui selecionamos el h1 
console.log(heading);//lo mostramos y en firefox nos muestras las diferentes metodos
console.log(heading.innerText);//Asi nos muestra solo el texto=== Si en el CSS esta el visibility: hidden no lo va a encontrar
console.log(heading.textContent);//Acaa igual solo texto===Este si lo va a encontrar
console.log(heading.innerHTML);//Aca se trae el texto como html

const prueba = document.querySelector('.contenido-hero h1').innerText;
console.log(prueba);

//De esta manera podemos cambiar el texto de ese h1
document.querySelector('.contenido-hero h1').innerText = 'Prueba';

//Otro ejemplo
const prueba2 = 'prueba2';
document.querySelector('.contenido-hero h1').textContent = prueba2;

//Las imagenes tambien podriamos cambiarla con js, haciendole un cambio de src

const imagen = document.querySelector('.card img');
console.log(imagen);

//Asi se podria cambiar la iamgen
const imagen2 = document.querySelector('.card img');
imagen2.src = 'img/hacer3.jpg'
