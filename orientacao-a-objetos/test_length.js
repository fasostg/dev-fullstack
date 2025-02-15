var a = []
a[0] = Math.random()
console.log(a.length)
a.forEach(value => console.log(value))

a.push(Math.random())
console.log(a.length)
a.forEach(value => console.log(value))

a[9] = Math.random()
console.log(a.length)
a.forEach(value => console.log(`valor: ${value}`))