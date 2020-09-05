import { fetchMovieSearch } from '../helpers/movieData'

export const searchMovie = async (req, res) => {
  try {
    const response = await fetchMovieSearch(req.query.query, req.query.page)

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
