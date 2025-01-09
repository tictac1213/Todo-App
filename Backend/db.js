const mongoose = require('mongoose')

//  we should put this in a .env file
mongoose.connect('mongodb+srv://admin:juUxopPlH4LZfhS0@cluster0.h91uh.mongodb.net/todos')
const todoSchema = mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
}