const URL = require('./urlSchema')
const db = require('../config/mongoose')

// basic information
const shortUrlLength = 5
const basicUrl = 'https://url-shortener.herokuapp.com/'

// all letters & numbers
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '0123456789'
const allCollection = (lowerCaseLetters + upperCaseLetters + numbers).split('')

let randomText = ''
let randomIndex = 0

function generateRandomUrl() {
  for (let i = 0; i < shortUrlLength; i++) {
    randomIndex = Math.floor(Math.random() * allCollection.length)
    randomText += allCollection[randomIndex]
  }
  return shortUrl = basicUrl + randomText
}

module.exports.shortenUrl = generateRandomUrl()