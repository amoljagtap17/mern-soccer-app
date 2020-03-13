import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

// mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send(`App is running on port ${PORT}`))

app.listen(PORT, () => console.log(`App is running on localhost : ${PORT}`))
