const express = require('express')
const middleware = require('./utils/middleware')
const cors = require('cors')
const moviesRouter = require('./controllers/movies')
const { configTmdb } = require('./utils/tmdb')

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/movies', moviesRouter)

app.use(middleware.unknownEndpoint)

module.exports = app
