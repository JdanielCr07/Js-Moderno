//Comunicacion de funciones

//Aqui vemos un claro ejemplo de como las funciones se mandan a llamar unas a otras, con parametros y argumentos incluidos

inicioApp();


function inicioApp(){
    console.log('Iniciando app');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');

    autenticando('Jose Daniel');
}

function autenticando(usuario){
    console.log('Autenticando usuario, espere...');
    console.log(`Usuario AUTENTICADO: ${usuario}`);

}