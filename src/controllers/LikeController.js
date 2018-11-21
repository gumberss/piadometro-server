const Joke = require('../models/Joke')

module.exports = {
    async store(req, res) {
        const joke = await Joke.findById(req.params.id)

        joke.set({ likes: joke.likes + 1 })

        await joke.save()

        req.io.emit('likeJoke', joke)

        return res.json(joke)
    }
}