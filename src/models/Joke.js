const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    author: String,
    content: String,
    context: String,
    registredBy: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Joke', JokeSchema)