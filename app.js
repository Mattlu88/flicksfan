const express = require('express')
const middleware = require('./utils/middleware')
const cors = require('cors')
const router = require('express').Router()

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/', router.get('/index', (req, res) => {
  res.status(200).send('Welcome to Flicksfan')
}))

app.use(middleware.unknownEndpoint)

module.exports = app
