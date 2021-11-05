const express = require('express')
const app = express()
const axios = require("axios")
const cheerio = require("cheerio")
const { prop } = require("cheerio/lib/api/attributes")
const fs = require("fs")
const request = require("request")
const controller = require('./controller')
const router = require('./router.js')
const { json } = require('express')

const port = 4000
app.listen(port)