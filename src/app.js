import express from 'express'
import logger from 'morgan'
import movieRouter from './routes/movies.routes'
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/movies', movieRouter)
module.exports = app
