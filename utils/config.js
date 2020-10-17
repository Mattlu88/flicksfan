require('dotenv').config()

const PORT = process.env.PORT || 3001
const TMDB_API_KEY = process.env.TMDB_API_KEY
const TMDB_BASE_URL = process.env.TMDB_BASE_URL

module.exports = {
  PORT,
  TMDB_API_KEY,
  TMDB_BASE_URL
}
