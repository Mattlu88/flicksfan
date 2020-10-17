const axios = require('axios')
const config = require('./config')

const getTmdbConfigure = async (req, res, next) => {
  const response = await axios.get(`${config.TMDB_BASE_URL}/configuration?${config.TMDB_API_KEY}`)
  return setTmdb(response.data)
}

const setTmdb = (data) => {
  return {
    imagesBaseUrl: data.images.secure_base_url,
    imageBackdropSize: {
      sm: data.images.backdrop_sizes[0],
      md: data.images.backdrop_sizes[1],
      lg: data.images.backdrop_sizes[2],
      original: data.images.backdrop_sizes[3]
    },
    logoSize: {
      xxs: data.images.logo_sizes[0],
      xs: data.images.logo_sizes[1],
      sm: data.images.logo_sizes[2],
      md: data.images.logo_sizes[3],
      lg: data.images.logo_sizes[4],
      xl: data.images.logo_sizes[5],
      original: data.images.logo_sizes[6]
    },
    posterSize: {
      xxs: data.images.poster_sizes[0],
      xs: data.images.poster_sizes[1],
      sm: data.images.poster_sizes[2],
      md: data.images.poster_sizes[3],
      lg: data.images.poster_sizes[4],
      xl: data.images.poster_sizes[5],
      original: data.images.poster_sizes[6]
    },
    profileSize: {
      sm: data.images.profile_sizes[0],
      md: data.images.profile_sizes[1],
      lg: data.images.profile_sizes[2],
      original: data.images.profile_sizes[3]
    },
    stillSize: {
      sm: data.images.still_sizes[0],
      md: data.images.still_sizes[1],
      lg: data.images.still_sizes[2],
      original: data.images.still_sizes[3]
    }
  }
}

module.exports = getTmdbConfigure
