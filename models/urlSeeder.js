const URL = require('./urlSchema')
const db = require('../config/mongoose')

// basic information
const shortUrlLength = 5
const basicUrl = 'https://agile-hollows-67457.herokuapp.com/'

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
  return shortUrl = basicUrl + randomText
}

// 無法存取 uniqueUrl
// let uniqueUrl= ''
// function unique(){
//   URL.find({ randomUrl: shortUrl }).lean()
//     .then( record => {
//       if (record === 0) {
//         uniqueUrl = shortUrl
//         console.log(uniqueUrl)
//       }else {
//         uniqueUrl = generateRandomUrl()
//         console.log(`${uniqueUrl} is unique!`)
//       }
//     })
//     .catch(error => console.log(error))
//   return uniqueUrl
// }

module.exports.shortenUrl = generateRandomUrl()