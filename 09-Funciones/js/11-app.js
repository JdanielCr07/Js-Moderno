//Parametros en arrow functions

//En esta funcion seria
const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('Js');


//ARROW FUNCTION
//En los arrow functions seria asi
//NOTA, SI EL PARAMETRO A PASAR ES UNO SOLO EL ARROW FUNTIONS TE DEJA COLOCARLO SIN PARENTESIS
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo2('Js'));

//En caso de ser dos parametros si tiene que tener el parentesis
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo3('Js', 'Node.js'));


