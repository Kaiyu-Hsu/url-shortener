const express = require('express')
const router = express.Router()
const URL = require('../../models/urlSchema')
const generateShortUrl = require('./generateShortUrl')
const basicUrl = 'https://agile-hollows-67457.herokuapp.com/'

// index
router.get('/', (req, res) => {
  res.render('index')
})

// post
router.post('/', (req, res) => {
  const input = req.body.input
  let randomUrl = generateShortUrl()
  if (!input) {
    res.redirect('/')
    return
  }

  URL.find()
    .then( allURLs => {
      while (allURLs.map(files => files.randomUrl).includes(randomUrl)) {
        randomUrl = generateShortUrl()
      }

      URL.create({ url: input, randomUrl })
        .then(() => {
          console.log('成功產生新網址!')
          return (res.render('index', { url: input, basicUrl, randomUrl }))
        })
        .catch(error => console.log(error))
    })
    .catch (error => console.log(error))
  
})

module.exports = router