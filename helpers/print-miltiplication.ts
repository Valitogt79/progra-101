export function printMultiplicationTable(base: number, limit: number = 10){

  if ( limit <= 0 ){
    throw new Error ('El limite debe de ser mayor a cero (0)')
  }
  
  for (let i = 1; i <= limit; i++) {
    let resultado: number = base * i;
    console.log(`${base} * ${i} = ${resultado}`);
  }
}
