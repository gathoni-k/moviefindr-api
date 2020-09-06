import axios from 'axios'
import '../../startScripts/setupTests'
import { fetchMovieSearch } from './movieData'
import { movieSearchMockData } from './movies.search.mockData'
import { TrendingMoviesMockData } from './movies.trending.mockData'
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
