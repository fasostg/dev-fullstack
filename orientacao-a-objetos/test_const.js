function testConstFirst() {
    console.log()
    console.log("TEST CONST FIRST")
    const a1 = 1

    if (true) {
        const a2 = 2
        console.log(a1)
        console.log(a2)
    }

    //a1 = 3 - Não é possível reatribuir valor para um const já valorado
    console.log(a1)
}

function testConstSecond() {
    console.log()
    console.log("TEST CONST SECOND")
    const a1 = { chave: 1}
    console.log(a1.chave)

    a1.chave = 2
    console.log(a1.chave)
}

function testLetThird() {
    console.log()
    console.log("TEST CONST SECOND")
    const a1 = { chave: 1}
    console.log(a1.chave)

    //a1 = { chave: 2 } - Não é possível reatribuir um objeto inteiro para um const já valorado, apenas seus atributos
    console.log(a1.chave)
}

testConstFirst()
testConstSecond()
testLetThird()