let nomeCompleto = ["Joao", "Felipe", "Lucas"]

let [primeroNome, segundoNome, terceiroNome] = nomeCompleto
console.log("primeiro nome: " + primeroNome)

let [primeiroNome, ...outrosNomes] = nomeCompleto
console.log("outros nomes: " + outrosNomes)