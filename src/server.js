const app = require('./app.js')

const PORT = process.env.PORT || 3333
const server = app.listen(PORT)


module.exports = server