//Arreglos - arrays

export let employs: string[]= ['John', 'Melissa', 'Fernando',];
let flowers: string[] = ['Rosa', 'Girosal', 'Lirios', 'Rosa Azul'];
let salaries: number[] = [1500, 2400, 3200];

for (let i=0; i <= employs.length - 1; i++) {
  console.log(employs[i] + ' tiene un salario de ' + salaries[i]);
}