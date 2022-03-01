const mongoose = require('mongoose')

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        email: String,
        password: String,
        interests: Array,
    })
)

module.exports = User
