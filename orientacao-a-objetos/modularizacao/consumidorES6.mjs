import * as circulo from './definicaoES6.mjs';

console.log("Area " + circulo.area(5));
console.log("Circunferencia " + circulo.circunferencia(5));


const c1 = new circulo.Circulo(4)
console.log("Circunferencia " + c1.circunferencia());