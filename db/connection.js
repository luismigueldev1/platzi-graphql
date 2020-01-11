const { connect } = require("mongoose")

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME
const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
const MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

connect(MONGO_URI, MONGO_OPTIONS)
    .then(() => { console.log('Conectado a DB') },
        (err) => { console.log(err) })

module.exports = connect