const dbConfig = require('../config/db.config')
const db = require('../models')

const connectDB = async () => {
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
}

module.exports = connectDB
