import express from 'express'
import { searchMovie, trendingMovies } from '../controllers/movies.controllers'

const router = express.Router()

router.get('/search', searchMovie)

router.get('/trending/:time', trendingMovies)
export default router
