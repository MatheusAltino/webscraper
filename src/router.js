const { response } = require('express')
const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', (req, res) => {
  return res.send({message: "Welcome to my webScraper API!"})
})

router.get('/lenovo', (req, res) => {
    return res.download('./data/response.json')
})


module.exports = router