const Joke = require('../models/Joke')

module.exports = {

    async toggleLike(req, res) {
        var data = req.body

        var userId = data.userId

        const joke = await Joke.findById(data.jokeId)
        if (joke.likes.includes(userId)) {
            console.log('2')
            
            joke.likes = joke.likes.filter(jokeUserId => jokeUserId != userId)

        } else {
            joke.likes.constructor === Array 
            ? joke.likes.push(userId)
            : joke.likes = [userId]
        }
        await joke.save()

        req.io.emit('likeJoke', joke)

        return res.json(joke)
    }
}
