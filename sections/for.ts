// Ciclo For

export let limite: number = 100
;

for ( let i = 1; i <= limite; i++ ){

  if ( i === 5) {
    continue
  }
  console.log('let i = ', i);
  if ( i === 5 ) {
    break;
  }
}

console.log('Fin del Programa')