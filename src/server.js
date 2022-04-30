const app = require('./app')

const port = process.env.PORT || 4000


const server = app.listen(PORT, () => {console.log(`Example app listening at http://localhost:4000`)})


module.exports = server