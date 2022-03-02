const connectDB = require('./mongodb-connect')
const bcrypt = require('bcryptjs')
const {
    genRandInt,
    genRandomPriceHistory,
    genRandomBookGenres,
    genRandomBookName,
    genRandomBookDesc,
} = require('../helpers')
// MongoDB connect
connectDB()

const User = require('../models/user.model')
const Book = require('../models/book.model')

const createFirstUser = async () => {
    const user = new User({
        email: 'adam@heaven.com',
        password: bcrypt.hashSync('123456', 8),
        interests: ['dystopian', 'history'],
    })

    await User.deleteMany({})
    await user.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('First user was created successfully!')
        }
    })
}

const createBooks = async () => {
    const books = []
    const totalBooks = genRandInt(0, 999)
    const priceHistory = genRandomPriceHistory()

    for (let index = 0; index < totalBooks; index++) {
        books.push({
            name: genRandomBookName(),
            description: genRandomBookDesc(),
            stockQuantity: genRandInt(0, 999),
            price: priceHistory[2],
            priceHistory: priceHistory,
            numberOfSell: genRandInt(0, 999),
            genres: genRandomBookGenres(),
        })
    }

    await Book.deleteMany({})
    await Book.insertMany(books)

    console.log(`${books.length} books generated!`)
}

const seedDB = async () => {
    await createFirstUser()
    await createBooks()
}

seedDB().then(() => {
    console.log('Seed process finish')
})
