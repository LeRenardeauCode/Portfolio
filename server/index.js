const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

const apiRouter = require('./routes/api')

const app = express()

app.use(helmet())
app.use(express.json())
app.use(
  cors({
    origin: 'true',
  })
)

app.use('/api', apiRouter)

module.exports = app
