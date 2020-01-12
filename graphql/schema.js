const { makeExecutableSchema } = require("graphql-tools")
const resolvers = require("./resolvers")

const typeDefs = ` 
type Student {
  _id: ID!
  firstName: String!
  lastName: String!
  email: String!
}

input StudentInput {
  firstName: String!
  lastName: String!
  email: String!
}

input StudentEditInput {
  firstName: String
  lastName: String
  email: String
}

type Course {
  _id: ID!
  title: String!
  teacher: String!
  description: String!
  topic: String!
  people: [Student]
}

input CourseInput{
  title: String!
  teacher: String!
  description: String!
  topic: String!
}

input CourseEditInput{
  title: String!
  teacher: String!
  description: String!
  topic: String!
}

type Query {
  "Retorna un Object de type Student"
  getStudent(id : ID!): Student
  "Retorna un Array de type Student"
  getStudents: [Student]

  "Retorna un Object de type Course"
  getCourse(id : ID!): Course
  "Retorna un Array de type Course"
  getCourses: [Course]
}

type Mutation {
  "Crear un nuevo estudiante"
  createStudent(input : StudentInput!) : Student
  "Editar un estudiante"
  editStudent(id: ID! , input : StudentEditInput ) : Student
  "Eliminar un estudiante"
  deleteStudent(id: ID!): Student

  "Crear un nuevo curso"
  createCourse(input : CourseInput!) : Course
  "Editar un curso"
  editCourse(id: ID! , input : CourseEditInput ) : Course
  "Eliminar un curso"
  deleteCourse(id: ID!): Course

  "Agregar una persona a un curso"
  addPeople(courseID: ID!, personID: ID!) : Course
}
`
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})

