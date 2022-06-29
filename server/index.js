require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const sequlize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./rotes/routing')
// const errorsHandler = require('./error/errorsHandler')

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(cors())
app.use(express.json())
app.use('/api', router)
// app.use(errorsHandler)

const run = async () => {
  try {
    await sequlize.authenticate()
    await sequlize.sync()
    console.log("Connect to db "+ process.env.POSTGRES_DB )
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  }
  catch (e) {
    console.log("ERROR: " + e)
  }
}


run()