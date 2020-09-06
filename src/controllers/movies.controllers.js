import { fetchMovieSearch, fetchTrending, fetchMovieDetails, fetchPopularMovies } from '../helpers/movieData'

export const searchMovie = async (req, res) => {
  try {
    if (!req.query.query) {
      return res.status(400).json({
        results: null,
        error: 'query term is required'
      })
    }
    const response = await fetchMovieSearch(req.query.query, req.query.page || 1)

    if (!response) {
      return res.status(422).json({
        results: null,
        error: 'Error fetching data'
      })
    }
    res.status(200).json({
      results: response.results,
      error: null
    })
  } catch (error) {
    res.status(500).json({
      results: null,
      error: error.message
    })
  }
}

export const trendingMovies = async (req, res) => {
  try {
    if (req.params.time !== 'day' && req.params.time !== 'week') {
      return res.status(400).json({
        results: null,
        error: 'Time window must be either day or week'
      })
    }
    const response = await fetchTrending(req.params.time)
    if (!response) {
      return res.status(422).json({
        results: null,
        error: 'Error fetching data'
      })
    }
    res.status(200).json({
      results: response,
      error: null
    })
  } catch (error) {
    res.status(500).json({
      results: null,
      error: error.message
    })
  }
}

export const movieDetails = async (req, res) => {
  try {
    const response = await fetchMovieDetails(Number(req.params.movieId))
    if (!response) {
      return res.status(422).json({
        results: null,
        error: 'Error fetching data'
      })
    }
    res.status(200).json({
      results: response,
      error: null
    })
  } catch (error) {
    res.status(500).json({
      results: null,
      error: error.message
    })
  }
}

export const popularMovies = async (req, res) => {
  try {
    const response = await fetchPopularMovies(req.query.page)
    if (!response) {
      return res.status(422).json({
        results: null,
        error: 'Error fetching data'
      })
    }
    return res.status(200).json({
      results: response,
      error: null
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      results: null,
      error: error.message
    })
  }
}
