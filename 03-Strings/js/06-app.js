//String Methods -------- Repeat y split
const producto = 'monitor de 20 pulgadas'

const texto = 'en promocion ';

//REPEAT = Permite repetir una cadena de texto
console.log(texto.repeat(3));
console.log(`${producto} ${texto.repeat(3)}!!!`);

//SPLIT = Dividir un string
const actividad = 'Estoy aprendiendo Js moderno';
console.log(actividad.split(' '));

const hobies = 'leer, escribir, escuchar musica, aprender programacion';
console.log(hobies.split(','));

const tweet = 'Aprendiendo js moderno #jsmodenoconjuan'
console.log(tweet.split('#'));