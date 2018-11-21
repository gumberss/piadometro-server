const Joke = require('../models/Joke')

module.exports = {
    async index(req, res) {
        const jokes = await Joke.find({}).sort('-createdAt')

        return res.json(jokes)
    },

    async store(req, res) {
        const joke = await Joke.create(req.body)

        req.io.emit('newJoke', joke)

        return res.json(joke)
    }
}