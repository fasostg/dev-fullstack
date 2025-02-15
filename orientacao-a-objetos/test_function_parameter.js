function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }

    return resultado;
}

console.log(potencia())
console.log(potencia(4))
console.log(potencia(4, 3))
console.log(potencia(4, 3, 3))
