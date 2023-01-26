const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentschema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('Student', studentschema);

module.exports = Student;