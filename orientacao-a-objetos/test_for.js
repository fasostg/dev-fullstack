const a = []
a[0] = 1
a[1] = 2
a[9] = 10

console.log("for in")
for (let val in a) {
    console.log(val)
}

console.log()
console.log("for of")
for (let val of a) {
    console.log(val)
}

console.log()
console.log("for val++")
for (let i=0; i < 10; i++) {
    console.log(a[i])
}