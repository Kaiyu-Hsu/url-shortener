// basic information
const shortUrlLength = 5

// all letters & numbers
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '0123456789'
const allCollection = (lowerCaseLetters + upperCaseLetters + numbers).split('')

let randomText = ''
let randomIndex = 0
let shortUrl = ''

function generateRandomUrl() {
  for (let i = 0; i < shortUrlLength; i++) {
    randomIndex = Math.floor(Math.random() * allCollection.length)
    randomText += allCollection[randomIndex]
  }
  return shortUrl += randomText
}

module.exports = generateRandomUrl