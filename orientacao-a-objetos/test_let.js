function testLetFirst() {
    console.log()
    console.log("TEST LET FIRST")
    let a1 = 1

    if (true) {
        let a2 = 2
        console.log(a1)
        console.log(a2)
    }

    console.log(a1)
}

function testLetSecond() {
    console.log()
    console.log("TEST LET SECOND")
    let a1 = 1

    if (true) {
        let a2 = 2
        console.log(a1)
        console.log(a2)
    }

    console.log(a1)
    //console.log(a2) - Não consegue acessar, pois foi declarada dentro de um escopo menor
}

function testLetThird() {
    console.log()
    console.log("TEST LET THIRD")
    let a1 = 1

    if (true) {
        //console.log(a1) - Não consegue acessar, pois foi declarada em outro escopo
        let a1 = 2
        console.log(a1)
    }

    console.log(a1)
}

testLetFirst()
testLetSecond()
testLetThird()