const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema ({
  url: {
    type: String,
    required: true,
    index: true,
  },
  randomUrl: {
    type: String,
    required: true,
    index: true,
  }
})

module.exports = mongoose.model('URL', urlSchema)