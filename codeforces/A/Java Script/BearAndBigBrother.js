const bearAndBigBrother = (limak, bob) => {
    let year = 0
    while (limak <= bob) {
        limak *= 3
        bob *= 2
        year += 1
    }
    return year
}
console.log(bearAndBigBrother(4, 9))