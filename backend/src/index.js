import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import { routes } from './routes'

const app = express()
const PORT = 4000

// mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// CORS setup
app.use(cors())

routes(app)

app.get('/', (req, res) => res.send(`App is running on port ${PORT}`))

app.listen(PORT, () => console.log(`App is running on localhost : ${PORT}`))
