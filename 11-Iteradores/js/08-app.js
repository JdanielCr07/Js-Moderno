//for in opera sobre obejetos mientras for of opera sobre arreglos

const automovil = {
    marca: 'camaro',
    year: 1969,
    motor: '6.0'
}

for (let propiedad in automovil) {//Aqui vemos la llave del objeto
    console.log(`${automovil[propiedad]}`);
}

for (let [llave,valor] of Object.entries(automovil)){
    console.log(llave);
    console.log(valor);
}