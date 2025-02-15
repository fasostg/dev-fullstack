class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

try {
    throw new Error("Error gerado!!")
}
catch (e) {
    console.error(e.name)
    console.error(e.message)
}
finally {
    console.log("finally1")
}

try {
    throw new ValidationError("ValidationError gerado!!")
}
catch (e) {
    console.error(e.name)
    console.error(e.message)
}
finally {
    console.log("finally2")
} 
