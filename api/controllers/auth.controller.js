const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authConfig = require('../config/auth.config')
const db = require('../models')

const User = db.user

exports.signup = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        interests: req.body.interests,
    })

    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            res.send({ message: 'User was registered successfully!' })
        }
    })
}

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }

        if (!user) {
            res.status(404).send({ message: 'User Not found.' })
            return
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if (!passwordIsValid) {
            res.status(401).send({
                accessToken: null,
                message: 'Invalid Password!',
            })
            return
        }

        const token = jwt.sign({ id: user.id }, authConfig.SECRET, {
            expiresIn: 86400, // 24 hours
        })

        res.status(200).send({
            id: user.id,
            email: user.email,
            accessToken: token,
        })
    })
}
