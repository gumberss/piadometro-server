const express = require('express')
const JokeController = require('./controllers/JokeController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router()

routes.get('/jokes', JokeController.index)
routes.post('/jokes', JokeController.store)

routes.post('/likes', LikeController.toggleLike)

module.exports = routes