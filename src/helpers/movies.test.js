import axios from 'axios'
import '../../startScripts/setupTests'
import { fetchMovieSearch, fetchMovieDetails, fetchPopularMovies } from './movieData'
import { movieSearchMockData } from './moviesMockData/movies.search.mockData'
import { TrendingMoviesMockData } from './moviesMockData/movies.trending.mockData'
import { movieDetails } from './moviesMockData/movie.details'
import { popularMovies } from './moviesMockData/movies.popular'
jest.mock('axios')

describe('fetch movie search data', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should fetch search data from an API', async (done) => {
    try {
      axios.get.mockResolvedValue(movieSearchMockData)
      const response = await fetchMovieSearch('beauty', 1)
      expect(response).toEqual(movieSearchMockData.data)
      done()
    } catch (error) {
      done(error)
    }
  })
  it('should return response of length 0', async (done) => {
    const response = {
      data: {
        page: 190,
        total_results: 1301,
        total_pages: 66,
        results: []
      }
    }
    try {
      axios.get.mockResolvedValue(response)
      const data = await fetchMovieSearch('beauty', 190)
      expect(data).toEqual(response.data)
      done()
    } catch (error) {
      done(error)
    }
  })
})

describe('fetch trending movies', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should fetch trending movies', async (done) => {
    try {
      axios.get.mockResolvedValue(TrendingMoviesMockData)
      const response = await fetchMovieSearch('day')
      expect(response).toEqual(TrendingMoviesMockData.data)
      done()
    } catch (error) {
      done(error)
    }
  })
})

describe('fetch movie details', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should fetch movie details', async (done) => {
    try {
      axios.get.mockResolvedValue(movieDetails)
      const response = await fetchMovieDetails(337401)
      expect(response).toEqual(movieDetails.data)
      done()
    } catch (error) {
      done(error)
    }
  })
  it('should fetch erroneous data', async (done) => {
    const errorResponse = {
      data: {
        success: false,
        status_code: 34,
        status_message: 'The resource you requested could not be found.'
      }
    }
    try {
      axios.get.mockResolvedValue(errorResponse)
      const response = await fetchMovieDetails(337401233)
      expect(response).toEqual(errorResponse.data)
      done()
    } catch (error) {
      done(error)
    }
  })
})

describe('fetch popular movies', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should fetch popular movies', async (done) => {
    try {
      axios.get.mockResolvedValue(popularMovies)
      const response = await fetchPopularMovies(1)
      expect(response).toEqual(popularMovies.data)
      done()
    } catch (error) {
      done(error)
    }
  })
})
