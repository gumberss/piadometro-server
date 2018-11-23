const Joke = require('../models/Joke')

module.exports = {

    async toggleLike(req, res) {
        var data = req.body

        var userId = data.userId

        const joke = await Joke.findById(data.jokeId)
console.log(data)
        if (joke.likes.includes(userId)) {
            console.log('2')
            
            joke.likes = joke.likes.filter(jokeUserId => jokeUserId != userId)

        } else {
console.log('3')
            
            joke.likes.constructor === Array 
            ? joke.likes.push(userId)
            : joke.likes = [userId]
        }
        console.log(joke)

        await joke.save()

console.log('5')
        
        req.io.emit('likeJoke', joke)

        return res.json(joke)
    }
}