//Arrow function o funcion de flecha

//Funcion normal
const aprendiendo = function(){
    console.log('Aprendiendo JS');
}

//ARROW FUNCTION
const aprendiendo2 = () => {
    console.log('Prueba de que se esta aprendiendo');
}
//En el ejemplo anterior, se puede aplicar, que como es un arrow funtion, y es de una sola linea de pueden quitar las llaves
const aprendiendo3 = () => console.log('otra prueba');//La norma indica que ya que es de una sola linea, el return se da por inplicito, por ende podria quedar

const aprendiendo4 = () => 'nueva prueba';

aprendiendo();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4());