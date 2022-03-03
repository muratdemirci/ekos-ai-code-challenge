const casual = require('casual')

const genres = [
    'fantasy',
    'adventure',
    'romance',
    'contemporary',
    'dystopian',
    'mystery',
    'horror',
    'thriller',
    'paranormal',
    'historical-fiction',
    'science-fiction',
    'childrens',
    'memoir',
    'cooking',
    'art',
    'self-help-personal',
    'development',
    'motivational',
    'health',
    'history',
    'travel',
    'guide-how-to',
    'families-and-relationships',
    'humor',
]

function getMultipleRandom(arr, num) {
    const shuffled = [...(arr || [])].sort(() => 0.5 - Math.random())

    return shuffled.slice(0, num)
}

function genRandInt(min, max) {
    return casual.integer((from = min), (to = max))
}

function genRandUserId() {
    return `${genRandInt(111, 999)}-${genRandInt(111, 999)}-${genRandInt(
        111,
        999
    )}`
}

function genRandomBookGenres() {
    return getMultipleRandom(genres, genRandInt(0, 5))
}

function genRandomBookName() {
    return casual.words((n = 2))
}

function genRandomBookDesc() {
    return casual.sentences((n = 3))
}

function genRandDecimals(min, max, decimalPlaces) {
    const rand = Math.random() * (max - min) + min
    const power = Math.pow(10, decimalPlaces)
    return Math.floor(rand * power) / power
}

function genRandomPriceHistory(params) {
    // this might be more flex and deep but enough for now
    const priceArray = [
        genRandDecimals(0, 10, 2),
        genRandDecimals(0, 10, 2),
        genRandDecimals(0, 10, 2),
    ]

    return priceArray
}

module.exports = {
    genRandInt,
    genRandUserId,
    genRandomBookGenres,
    genRandomBookName,
    genRandomBookDesc,
    genRandomPriceHistory,
}
