const db = require('../models')

const Book = db.book
const User = db.user

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: 'Content can not be empty!' })
        return
    }

    // Create a Book
    const book = new Book({
        name: req.body.name,
        description: req.body.description,
        stockQuantity: req.body.stockQuantity,
        price: req.body.price,
        priceHistory: req.body.priceHistory,
        numberOfSell: req.body.numberOfSell,
        genres: req.body.genres,
    })

    // Save Book in the database
    book.save(book)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the Book.',
            })
        })
}

// Update a Book by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Data to update can not be empty!',
        })
    }

    const { id } = req.params

    Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Book with id=${id}. Maybe Book was not found!`,
                })
            } else res.send({ message: 'Book was updated successfully.' })
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error updating Book with id=${id}`,
            })
        })
}

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
    const { id } = req.params

    Book.findByIdAndRemove(id, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Book with id=${id}. Maybe Book was not found!`,
                })
            } else {
                res.send({
                    message: 'Book was deleted successfully!',
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Could not delete Book with id=${id}`,
            })
        })
}

// Find a single Book with an id
exports.findOne = (req, res) => {
    const { id } = req.params

    Book.findById(id)
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: `Not found Book with id ${id}`,
                })
            else res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error retrieving Book with id=${id}`,
            })
        })
}

exports.discoverBooks = async (req, res) => {
    // get the user
    const user = await User.findOne({ id: req.userId })

    // find perfect matchs between interests and book genres, sort by low price and high sells, limit 5

    Book.find({ genres: { $all: user.interests } })
        // get low price, high sells
        .sort({ price: 1, numberOfSell: -1 })
        .limit(5)
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: `Not found Book with id ${id}`,
                })
            else res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error retrieving Book with id=${id}`,
            })
        })
}
