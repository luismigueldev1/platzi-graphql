function errorHandler(error) {
    console.log(error)
    throw new Error("Ocurrido un error en el servidor")
}

module.exports = errorHandler