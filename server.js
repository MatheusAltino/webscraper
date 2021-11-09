const express = require('express')
const router = require('./router.js')
const { json, Router } = require('express')

const app = express()
app.use(express.json())
app.use('/', router)


const port = 4000
app.listen(process.env.PORT || port)