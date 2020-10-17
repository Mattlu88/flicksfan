const moviesRouter = require('express').Router()
const axios = require('axios')
const querystring = require('querystring')
const config = require('../utils/config')
const getTmdbConfigure = require('../utils/tmdb')

const discoverMovie = async () => {
  try {
    const queryObj = {
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1
    }
    const queryStr = querystring.stringify(queryObj)
    const url = `${config.TMDB_BASE_URL}/discover/movie?${config.TMDB_API_KEY}&${queryStr}`
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    return error
  }
}

moviesRouter.get('/popular', async (req, res) => {

  const data = await discoverMovie(req, res)
  if (!data.results || data.results.length === 0) {
    res.status(404).send()
    return
  }

  const tmdb = await getTmdbConfigure()
  const movies = [
    ...data.results.map(r =>
      ({
        id: r.id,
        title: r.title,
        poster: `${tmdb.imagesBaseUrl}${tmdb.posterSize.sm}/${r.poster_path}`
      }))
  ]
  res.status(200).send(movies)
})

module.exports = moviesRouter
