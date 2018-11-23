const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    author: String,
    content: String,
    context: String,
    registredBy: String,
    likes: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Joke', JokeSchema)