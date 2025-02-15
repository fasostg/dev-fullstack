array = [2, 4, 5, 8]

let newArray = array.map(item => item*2)
console.log(newArray)

newArray = array.map(item => {return {x: item, y:item*2}})
console.log(newArray)