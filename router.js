const express = require('express')
const app = express()
const { filter } = require('cheerio/lib/api/traversing')
const controller = require('./controller')
const { response } = require('express')
const router = express.Router

app.get('/', (req, res) => {
  res.send("server running")
})

app.get('/lenovo', (req, res) => {
    res.json(response.json)
})
