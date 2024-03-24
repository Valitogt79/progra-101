// Funciones

export function greet( name:string = 'Usuario' ) {
  console.log('Hola como estas: ' + name);
}
let firstName = 'Roberto';
greet( firstName );