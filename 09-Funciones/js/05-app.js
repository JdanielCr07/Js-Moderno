//Parametros y argumentos en funciones 

function sumar( a , b ) {//a y b son parametros, variables ya que ellos van a depender de los argumentos que se les pasen al llamar la funcion
    console.log( a + b );
}

sumar(4, 855);//Estos dos numeros son los argumentos, cada numero toma el valor en los parametros respectivamente

function saludar(nombre, apellido){//Nombre y apellido son los parametros
    console.log(`Hola ${nombre} ${apellido} mucho gusto`);
}

saludar('Jose', 'Castro');//Estos son los argumentos