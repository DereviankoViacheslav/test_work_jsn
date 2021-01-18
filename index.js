const express = require('express')
const knex = require('./knex/knex.js')
const bookshelf = require('bookshelf')(knex)

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
