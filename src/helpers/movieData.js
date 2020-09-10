import axios from 'axios'

import dotenv from 'dotenv'
import { async } from 'regenerator-runtime'

dotenv.config()

const { TMDB_API_KEY } = process.env

/**
 *
 * @param {string} query
 * @param {number} page
 * @returns {Object} { results: null/object, error: null/string }
 */
export const fetchMovieSearch = async (query, page) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
  const response = await axios.get(url)
  return response.data
}

export const fetchTrending = async (time) => {
  const url = `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${TMDB_API_KEY}`
  const response = await axios.get(url)
  return response.data
}

export const fetchMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
  const response = await axios.get(url)
  return response.data
}

export const fetchPopularMovies = async (page) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
  const response = await axios.get(url)
  return response.data
}

export const fetchTopRatedMovies = async (page) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
  const response = await axios.get(url)
  return response.data
}

export const fetchSimilarMovies = async (movieId, page) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${TMDB_API_EY}&language=42269en-US&page=${page}`
  const response = await axios.get(url)
  return response.data
}

// recommended movies
