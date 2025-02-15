// const circulo = require('./definicaoCJS.js');
// console.log("Area " + circulo.area(5));

// const {area} = require('./definicaoCJS.js');
// console.log("Area " + area(5));

// const circulo2 = require('./definicaoCJS.js');
// console.log("Circunferencia " + circulo.circunferencia(5));

// const {circunferencia} = require('./definicaoCJS.js');
// console.log("Circunferencia " + circunferencia(5));

const Circulo = require('./definicaoCJS.js');
const c1 = new Circulo(4)
console.log("Circunferencia " + c1.area());