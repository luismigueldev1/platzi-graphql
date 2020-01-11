const { Student, Course } = require("../db/schema")

module.exports = {
    //Students
    getStudent: async (root, { id }) => {
        try {
            const student = await Student.findOne({ _id: id })
            return student
        } catch (err) {
            console.log(err);

        }

    },
    getStudents: async () => {
        const students = await Student.find()
        return students
    },

    //Courses
    getCourse: async (root, { id }) => {
        const course = await Course.findOne({ _id: id })
        return course
    },
    getCourses: async () => {
        const courses = await Course.find()
        return courses
    }
}