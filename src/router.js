const { response } = require('express')
const express = require('express')
const router = express.Router()
const scraper = require('./services/scraper/scraperController.js')

router.get('/', (req, res) => {
  return res.send({message: "Welcome to my webScraper API!"})
})

router.get('/lenovo', (req, res) => {
    return res.download('./services/scraper/data/response.json')
})


module.exports = router