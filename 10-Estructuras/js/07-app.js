//OPERADOR OR REVISA QUE SE CUMPLA UNA O LA OTRA CONDICION

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Podemos pagar');
}else{
    console.log('Fondos insuficientes');
}