const { Schema, model } = require('mongoose')

const constactSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message:{
        type: String,
        require: false
    }
});
const Contact = model('Contact',constactSchema)

module.exports = Contact;