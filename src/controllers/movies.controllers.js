import { fetchMovieSearch } from '../helpers/movieData'

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
