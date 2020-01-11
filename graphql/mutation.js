const { Student, Course } = require("../db/schema")

module.exports = {

    //Student Mutation
    createStudent: async (root, { input }) => {
        try {
            const student = await Student.create(input)
            return student
        } catch (err) {
            console.log(err)
        }
    },
    editStudent: async (root, { id, input }) => {
        try {
            const student = await Student.findByIdAndUpdate(id, input, { new: true })
            return student
        } catch (err) {
            console.log(err)
        }
    },
    deleteStudent: async (root, { id }) => {
        try {
            const student = await Student.findByIdAndDelete(id)
            return student
        } catch (err) {
            console.log(err)
        }

    },


    //Course Mutation
    createCourse: async (root, { input }) => {
        try {
            const course = await Course.create(input)
            return course
        } catch (err) {
            console.log(err)
        }
    },
    editCourse: async (root, { id, input }) => {
        try {
            const course = await Course.findByIdAndUpdate(id, input, { new: true })
            return course
        } catch (err) {
            console.log(err)
        }
    },
    deleteCourse: async (root, { id }) => {
        try {
            const course = await Course.findByIdAndDelete(id)
            return course
        } catch (err) {
            console.log(err)
        }

    }
}