//Ejercicio multiplicacion de la tabla del 10

export let base: number = 10;
export let limit: number = 50;

//FOR 
/* for ( let i = 1; i <= limit; i++ ){
  let resultado: number = base * i;
  console.log(`${base} * ${i} = ${resultado}`);
} */

//While
/* let i: number = 1;

while (i <= limit) {
  console.log(base, 'x', i, ' =', base * i);
  i++;
} */

//Do While
let i: number = 1;
do {
  console.log(base, 'x', i,'=', base * i);
  i++;
} while (i <= limit);