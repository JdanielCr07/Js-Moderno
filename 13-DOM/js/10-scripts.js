//Generar htlmml con js

//Ejmemplo agregando un nuevo elemento a la navegacion 

// const elemento = document.createElement('a');//Primero debemos crearlo, podemos crear un h1, un div, img, etc...
// console.log(elemento);//Aqui podemos verificar que si se creo
// // elemento.innerText = 'Hola mundo';//De esta manera le agregamos un contenido, un texto
// elemento.textContent = 'Mundo';//Asi tambien lo agregamos, todas estas funciones la podemos ver en firefox developer edition
// elemento.href = 'mundo.html';//Asi le agregamos un href que seria la ruta a donde dirigira el enlace
// elemento.classList.add('hola');//Asi le agregamos una clase, classlist tiene las funcion de add que nos permite agregarla

// elemento.onclick = mifuncion;//Aqui agregamos una funcion a un boton


// //Ahora que ya tenemos el enlace creado hay que buscar posicionarlo en donde queremos
// //Para eso debemos selecionar la navegacion

// const navegacion = document.querySelector('.navegacion');//Primero listamos el lugar donde lo queremos colocar

// // navegacion.append(elemento);//Asi lo agregamos al final de los elementos

// //Existe otra manera, que seria insertandolo donde nosotros queramos, primero tendriamos que aplicar el .children para saber la posicion de los hijos
// console.log(navegacion.children);

// navegacion.insertBefore(elemento, navegacion.children[2]);//De esta manera insertamos un nuevo enlace, en la navegacion

// function mifuncion (){//Aqui hacemos el efecto con la funcion
//     alert('Nueva entrada');
// }

//Crearemos ahora un nuevo card

//Primero creamor los parrafos--Definimos sus textos y sus clases
const parrafo1 = document.createElement('p');//Iniciamos creando los parrafo
parrafo1.textContent = 'Concierto';//Aqui definimos el texto que tendran 
parrafo1.classList.add('categoria', 'concierto');//Aqui definimos la clases que tendran

const parrafo2 = document.createElement('p');//Iniciamos creando los parrafo
parrafo2.textContent = 'Concierto de rock pesado';//Aqui definimos el texto que tendran 
parrafo2.classList.add('titulo');//Aqui definimos la clases que tendran

const parrafo3 = document.createElement('p');//Iniciamos creando los parrafo
parrafo3.textContent = '800$ por persona';//Aqui definimos el texto que tendran 
parrafo3.classList.add('precio');//Aqui definimos la clases que tendran

//Ahora revisando lo que tenemos en html vemos que el padre de estos parrafos esta compuesto por un div de clase info por ende tenmos que crearlo tambien

const info = document.createElement('div');//Creamos primero el div de info
info.classList.add('info')//Aqui definimos la clase que tendra

//Ahora procedemos a insertar cada uno de los parrafos dentro del div
info.appendChild(parrafo1);//Aca ya insertamos todos los parrafos ahora pertencen a el div info
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Ahora nos tocaria crear la imagen

const imagen = document.createElement('img');//creamos la imagen, para luego darle un valor
imagen.src = 'img/hacer2.jpg';

//Ya teniendo la imagen nos faltaria el div padre que los contendra

const card = document.createElement('div');//Aqui creamos el padre
card.classList.add('card');//Aqui definimos la clase que tendra

//Ahora debemos insertar los elementos respectivos
card.appendChild(imagen);//Aca insertamos dentro de card la imagen
card.appendChild(info);//Aca insertamos el div info que contiene los parrafos

//Ahora ya tenemos la estructura creada completamente, ahora resta incorporarlo al html, en este caso buscariamos listar la clase padre

const padre = document.querySelector('.hacer .contenedor-cards')//Asi podemos listar
// padre.appendChild(card);//Aca agreamos al final del contenedor

//En caso de querer colocarlo de primero tendriamos que hacer
padre.insertBefore(card, padre.children[0]);//Asi lo integramos de primero

console.log(padre);