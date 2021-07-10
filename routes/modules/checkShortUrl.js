const URL = require('../../models/urlSchema')

function checkShortUrl(res, randomUrl, Input, basicUrl) {
  new Promise ((resolve, reject) => {
    URL.findOne({ randomUrl })
      .then( other => {
        if( !other ) {
          URL.create({ url: Input, randomUrl})
            .then(() => {
              console.log('成功產生新網址!')
              let value = `${basicUrl}${randomUrl}`
              console.log(value)
              resolve(res.render('index', { resultUrl: value}))
            })
            .catch(error => console.log(error))
        }
      })
      .catch(error => console.log(error))
  })
}

module.exports = checkShortUrl