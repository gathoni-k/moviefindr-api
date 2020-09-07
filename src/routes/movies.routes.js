import express from 'express'
import { searchMovie, trendingMovies, movieDetails, popularMovies, topMovies, similarMovies } from '../controllers/movies.controllers'

const router = express.Router()

router.get('/:movieId/similar', similarMovies)

router.get('/top-rated', topMovies)

router.get('/popular', popularMovies)

router.get('/search', searchMovie)

router.get('/trending/:time', trendingMovies)

router.get('/:movieId', movieDetails)

export default router
