const casual = require('casual')

export function genRandInt(min, max) {
    return casual.integer((from = min), (to = max))
}

export function genRandUserId() {
    return `${genRandInt(111, 999)}-${genRandInt(111, 999)}-${genRandInt(
        111,
        999
    )}`
}
