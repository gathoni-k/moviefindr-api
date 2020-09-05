import express from 'express'
import { searchMovie } from '../controllers/movies.controllers'

const router = express.Router()

router.get('/search', searchMovie)

export default router
