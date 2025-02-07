//Parametros por default

//Los parametros por default son valores que se agregan en los parametros por si la funcion no conoce los argumentos,

function saludar(nombre, apellido = 'No tiene apellido'){//Asi apellido, marcada 'no tiene apellido', ya que nos se le dio el argumento
    console.log(`hola ${nombre} ${apellido}`);
}

saludar('jose');

function saludar2(nombre, apellido = ''){//Asi apellido, marcara en blanco, ya que nos se le dio el argumento
    console.log(`hola ${nombre} ${apellido}`);
}

saludar2('jose');

function saludar3(nombre = 'desconocido', apellido = ''){//Asi nombre, marcara desconocido y apellido en blanco, ya que nos se le dio el argumento
    console.log(`hola ${nombre} ${apellido}`);
}

saludar3();