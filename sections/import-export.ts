// Funciones
//exportando modulos
import {
  addTwoNumbers,
  divideNumbers,
  subtractTwoNumbers,
  timesNumbers,
} from "../helpers/math-helpers";

let a = 10;
let b = 20;

let total1: number = addTwoNumbers(a, b);
let total2: number = subtractTwoNumbers(a, b);
let total3: number = timesNumbers(a, b);
let total4: number = divideNumbers(a, b);

console.log("Total suma: " + total1);
console.log("Total resta: " + total2);
console.log("Total multiplicación: " + total3);
console.log("Total división: " + total4);
