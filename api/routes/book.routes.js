const { authJwt } = require('../middlewares')
const bookController = require('../controllers/book.controller')

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    // Create a new Book
    app.post('/api/books', [authJwt.verifyToken], bookController.create)

    // Retrieve a single Book with id
    app.get('/api/books/:id', [authJwt.verifyToken], bookController.findOne)

    // Update a Book with id
    app.put('/api/books/:id', [authJwt.verifyToken], bookController.update)

    // Delete a Book with id
    app.delete('/api/books/:id', [authJwt.verifyToken], bookController.delete)

    // Retrieve a books for user
    app.get(
        '/api/books/discover/:userId',
        [authJwt.verifyToken],
        bookController.discoverBooks
    )
}
