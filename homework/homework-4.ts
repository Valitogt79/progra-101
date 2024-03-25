/* - Dado el siguiente arreglo: 
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor? */

export let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let mayor: number = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > mayor) {
        mayor = numbers[i];
    }
}
console.log('El número mayor es: ' + mayor);