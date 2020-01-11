const express = require("express")

require("dotenv").config()
const morgan = require("morgan")
const gqlMiddleware = require("express-graphql")
const schema = require("./graphql/schema")
const PORT = process.env.PORT || 3000

const app = express()
require("./db/connection")
app.use(morgan("tiny"))

app.use("/graphql", gqlMiddleware({
  schema: schema,
  graphiql: true

}))

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/graphql`)
})


//Ejecutar el query hello
//graphql(schema, '{ hello }', resolvers)
//  .then(data => console.log(data))