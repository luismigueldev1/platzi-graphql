const { Schema, model } = require("mongoose")

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
})

const Student = model('Student', studentSchema)

const courseSchema = new Schema({
    title: String,
    teacher: String,
    description: String,
    topic: String
})

const Course = model('Course', courseSchema)

module.exports = { Student, Course }