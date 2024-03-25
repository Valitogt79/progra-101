/* 8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el  
nombre que tenga más letras del arreglo, y debe de trabajar así: 
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 
let hero = largestNameOfArray( heroes ); 
console.log( hero ); // Profesor Charles Xavier */

export function largestNameOfArray(heroes: string[]) {
  let hero = heroes[0];
  for (let i = 1; i < heroes.length; i++) {
    if (heroes[i].length > hero.length) {
      hero = heroes[i];
    }
  }
  return hero;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 
let hero = largestNameOfArray( heroes ); 
console.log( hero ); // Profesor Charles Xavier 