async function doSomething() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 2000)
    })

    let resultado = await promise;
    return resultado
}

// console.log("inicia programa")
// doSomething().then((message) => console.log(message))
// console.log("termina programa")
async function main() {
    console.log("inicia programa")
    console.log(await(doSomething()))
    console.log("termina programa")
}

main()