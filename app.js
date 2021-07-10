const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
const URL = require('./models/urlSchema')
const router = require('./routes/index')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'))

app.use(router)

app.listen(PORT, () => {
  console.log(`APP is working on http://localhost:${PORT}`)
})