//ESTRUCTURAS DE CONTROL- else if

const dinero = 100;
const totalApagar = 300;
const tarjeta = false;
const cheque = true

if (dinero > totalApagar) {
    console.log('Si puede pagar');
}else if(tarjeta){
    console.log('si puedo pagar, tengo la tarjeta');
}else if(cheque){
    console.log('Si tengo un cheque para pagar');
}else{
    console.log('Fondos insuficientes');
}

