function avaliaParidade(limite) {
    for(let i=0; i<limite; i++) {
        if (i%2 == 0)
            console.log(`${i} é um numero par`)
        else
            console.log(`${i} é um numero impar`)
    }
}

function iterarMapa() {
    let meuMapa = new Map();
    meuMapa.set(1, "um")
    meuMapa.set(2, "dois")
    
    for(let [key, value] of meuMapa) {
        console.log(`${key} - ${value}`)
    }
    
    meuMapa.forEach((key,value) => console.log(`${key} - ${value}`))
}

function fatorial(number) {
    if(number < 0)
        return undefined;

    let total = 1;
    console.log(total)
    for(let n = number; n > 1; n--) {
        console.log(total)
        total = total*n
    }
        
    return total
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))