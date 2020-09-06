import express from 'express'
import { searchMovie, trendingMovies, movieDetails, popularMovies } from '../controllers/movies.controllers'

const router = express.Router()

router.get('/popular', popularMovies)

router.get('/search', searchMovie)

router.get('/trending/:time', trendingMovies)

router.get('/:movieId', movieDetails)

export default router
