function testVarFirst() {
    console.log()
    console.log("TEST VAR FIRST")
    var a1 = 1

    if (true) {
        var a2 = 2
        console.log(a1)
        console.log(a2)
    }

    console.log(a1)
    console.log(a2)
}

function testVarSecond() {
    console.log()
    console.log("TEST VAR SECOND")
    var a1 = 1

    if (false) {
        var a2 = 2
        console.log(a1)
        console.log(a2)
    }

    console.log(a1)
    console.log(a2)
}

function testVarThird() {
    console.log()
    console.log("TEST VAR THIRD")
    var a1 = 1

    if (true) {
        console.log(a1)
        var a1 = 2
        console.log(a1)
    }

    var a1 = 3
    console.log(a1)
}

testVarFirst()
testVarSecond()
testVarThird()