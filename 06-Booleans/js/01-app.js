const boolean1 = true;
const boolean2 = false;
const boolean3 = 'false';

console.log(boolean1);
console.log(boolean2);
console.log(boolean3);
console.log(typeof boolean3);
console.log(typeof boolean1);
console.log(typeof boolean2);

console.log(boolean2 == boolean3);

const boolean4 = new Boolean(true);//Esta forma crea mas un objeto que un booolean como tal
console.log(typeof boolean4);