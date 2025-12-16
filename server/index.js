const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

const apiRouter = require('./routes/api')

const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
