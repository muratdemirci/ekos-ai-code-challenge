const express = require('express')
const dbConfig = require('./api/config/db.config')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const db = require('./api/models')
// MongoDB connect
db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Successfully connect to MongoDB.')
    })
    .catch((err) => {
        console.error('Connection error', err)
        process.exit()
    })

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to BuyTheBook API.' })
})

// routes
require('./api/routes/auth.routes')(app)
require('./api/routes/book.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
