array = [2, 4, 5, 8]

let resultado = array.reduce((acc, val) => acc+=(val%2==0 ? val : 0), 0)

console.log(resultado)