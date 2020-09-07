import axios from 'axios'
import '../../startScripts/setupTests'
import { fetchMovieSearch, fetchMovieDetails, fetchPopularMovies, fetchTopRatedMovies, fetchSimilarMovies, fetchRecommendedMovies } from './movieData'
import { movieSearchMockData } from './moviesMockData/movies.search.mockData'
import { TrendingMoviesMockData } from './moviesMockData/movies.trending.mockData'
import { movieDetails } from './moviesMockData/movie.details'
import { popularMovies } from './moviesMockData/movies.popular'
import { topMovies } from './moviesMockData/movies.top'
import { similarMovies, noSimilarMovies, noMovieId } from './moviesMockData/movies.similar'
import { recommendedMovies, noRecommendedMovies, noRecommendedMovieId } from './moviesMockData/movie.recommended'

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

describe('fetch top rated movies', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should fetch popular movies', async (done) => {
    try {
      axios.get.mockResolvedValue(topMovies)
      const response = await fetchTopRatedMovies(1)
      expect(response).toEqual(topMovies.data)
      done()
    } catch (error) {
      done(error)
    }
  })
})

describe('fetch similar movies', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should fetch similar movies', async (done) => {
    try {
      axios.get.mockResolvedValue(noSimilarMovies)
      const response = await fetchSimilarMovies(302312, 1)
      expect(response).toEqual(noSimilarMovies.data)
      done()
    } catch (error) {
      done(error)
    }
  })
  it('should not return similar movies', async (done) => {
    try {
      axios.get.mockResolvedValue(similarMovies)
      const response = await fetchSimilarMovies(302312, 1)
      expect(response).toEqual(similarMovies.data)
      done()
    } catch (error) {
      done(error)
    }
  })
  it('should be unsuccessful', async (done) => {
    try {
      axios.get.mockResolvedValue(noMovieId)
      const response = await fetchSimilarMovies(123, 1)
      expect(response).toEqual(noMovieId.data)
      done()
    } catch (error) {
      done(error)
    }
  })
})

describe('fetch recommended movies', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should fetch recommended movies', async (done) => {
    try {
      axios.get.mockResolvedValue(recommendedMovies)
      const response = await fetchRecommendedMovies(302312, 1)
      expect(response).toEqual(recommendedMovies.data)
      done()
    } catch (error) {
      done(error)
    }
  })
  it('should not return similar movies', async (done) => {
    try {
      axios.get.mockResolvedValue(noRecommendedMovies)
      const response = await fetchRecommendedMovies(302312, 1)
      expect(response).toEqual(noRecommendedMovies.data)
      done()
    } catch (error) {
      done(error)
    }
  })
  it('should be unsuccessful', async (done) => {
    try {
      axios.get.mockResolvedValue(noRecommendedMovieId)
      const response = await fetchRecommendedMovies(123, 1)
      expect(response).toEqual(noRecommendedMovieId.data)
      done()
    } catch (error) {
      done(error)
    }
  })
})
