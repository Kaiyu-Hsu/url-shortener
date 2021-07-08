const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
const shortenUrl = require('./models/urlSeeder')
const URL = require('./models/urlSchema')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'))

// index
app.get('/', (req, res) => {
  res.render('index')
})

// post
app.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  const randomUrl = shortenUrl.shortenUrl
  const urlResult = {
    originalUrl, randomUrl
  }
  URL.create(urlResult)
    .then(() => {
      res.render('index', { originalUrl, randomUrl})
    })
    .catch(error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`APP is working on http://localhost:${PORT}`)
})