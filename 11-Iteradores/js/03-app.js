//FIZZ BUZZ- 100 numeros

//3, 6, 9, 12...LOS MULTIPLOS DE 3 PONEN FIZZ
//5, 10, 15, 20...LOS MULTIPLOS DE 5 PONEN BUZZ
//15, 30, 45...LOS MULTIPLOS QUE TENGAN AMBOS PONEN FIZZBUZZ

for( let i = 1; i < 100; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ`);
    }
    else if( i % 3 === 0){
       console.log(`${i} FIZZ`); 
    }else if( i % 5 === 0){
        console.log(`${i} BUZZ`);
    }
    
}