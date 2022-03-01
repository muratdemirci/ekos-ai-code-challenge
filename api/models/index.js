const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// explain this maybe
const db = {}

db.mongoose = mongoose

db.user = require('./user.model')
db.book = require('./book.model')

module.exports = db
