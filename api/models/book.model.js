const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
    },
    description: {
        type: String,
        lowercase: true,
        required: false,
    },
    stockQuantity: {
        type: Number,
        min: 0,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
        required: true,
    },
    priceHistory: {
        type: Array,
        default: [],
        required: false,
    },
    numberOfSell: {
        type: Number,
        default: 0,
        required: false,
    },
    genres: {
        type: Array,
        default: [],
        required: true,
    },
})

bookSchema.virtual('priceDiff').get(function () {
    // TODO: find diff between prices
    return this.priceHistory + ' falan ' + this.priceHistory
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
