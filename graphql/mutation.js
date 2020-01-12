const { Student, Course } = require("../db/schema")
const errorHandler = require("./errorHandler")

module.exports = {

    //Student Mutation
    createStudent: async (root, { input }) => {
        try {
            const student = await Student.create(input)
            return student
        } catch (err) {
            errorHandler(err)
        }
    },
    editStudent: async (root, { id, input }) => {
        try {
            const student = await Student.findByIdAndUpdate(id, input, { new: true })
            return student
        } catch (err) {
            errorHandler(err)
        }
    },
    deleteStudent: async (root, { id }) => {
        try {
            const student = await Student.findByIdAndDelete(id)
            return student
        } catch (err) {
            errorHandler(err)
        }

    },


    //Course Mutation
    createCourse: async (root, { input }) => {
        try {
            const course = await Course.create(input)
            return course
        } catch (err) {
            errorHandler(err)
        }
    },
    editCourse: async (root, { id, input }) => {
        try {
            const course = await Course.findByIdAndUpdate(id, input, { new: true })
            return course
        } catch (err) {
            errorHandler(err)
        }
    },
    deleteCourse: async (root, { id }) => {
        try {
            const course = await Course.findByIdAndDelete(id)
            return course
        } catch (err) {
            errorHandler(err)
        }

    },
    addPeople: async (root, { courseID, personID }) => {
        try {
            const course = await Course.findOne({ _id: courseID })
            const person = await Student.findOne({ _id: personID })
            if (!course || !person) throw new Error("El curso o  la persona no existe")
            const addPersonToCourse = await Course.findByIdAndUpdate(
                { _id: courseID },
                { $addToSet: { people: personID } },
                //$addToSet verifica que exista y no permite ids repetidos
                //{ $push: { people: courseID } } $push agrega sin importar si existe uno identico
                { useFindAndModify: false }
            )

            return addPersonToCourse

        } catch (err) {
            errorHandler(err)
        }
    }
}