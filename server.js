const express = require('express')
const app = express()
const connectDB = require('./api/db/mongodb-connect')

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// MongoDB connect
connectDB()

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
