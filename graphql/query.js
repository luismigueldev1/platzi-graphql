const { Student, Course } = require("../db/schema")
const errorHandler = require("./errorHandler")

module.exports = {
    //Students
    getStudent: async (root, { id }) => {
        try {
            const student = await Student.findOne({ _id: id })
            return student
        } catch (err) {
            errorHandler(err)

        }

    },
    getStudents: async () => {
        try {
            const students = await Student.find()
            return students
        } catch (err) {
            errorHandler(err)
        }

    },

    //Courses
    getCourse: async (root, { id }) => {
        try {
            const course = await Course.findOne({ _id: id })
            return course
        } catch (err) {
            errorHandler(err)
        }

    },
    getCourses: async () => {
        try {
            const courses = await Course.find()
            return courses
        } catch (err) {
            errorHandler(err)
        }
    }
}