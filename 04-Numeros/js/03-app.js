//Objeto Math

let resultado 


//PI
resultado = Math.PI;

//Round == redondear
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.5);
resultado = Math.round(2.6);

//Redondear hacia arriba -- forma forsosa 
resultado = Math.ceil(2.1);
resultado = Math.ceil(2.02);

//Redondear hacia abajo de forma forsosa
resultado = Math.floor(2.9);
resultado = Math.floor(2.5);

// raiz cuadrada
resultado = Math.sqrt(144);

//valor absoluto
resultado = Math.abs(-500);

//Potencia
resultado = Math.pow(2,4);


//Para saber cual es el minimo 
resultado = Math.min(3 , 5);
resultado = Math.min(2.5, 2.4);

//Para saber cual es maximo
resultado = Math.max(100, 200, 32);

//Aleatorio
resultado = Math.random();
resultado = Math.random() * 20;

//Ejemplo de aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30);




console.log(resultado);