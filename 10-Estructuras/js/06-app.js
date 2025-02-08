//Operador && Revisa que se cumplan dos o mas condiciones

const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
}else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
}else if(!usuario){
    console.log('Inicia sesion o registrate');
}else if(!puedePagar){
    console.log('Fondos insuficinetes');
}