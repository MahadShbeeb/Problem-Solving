const cards = (cardNumbers) => {
    let res = []
    let cards = [...cardNumbers].sort((a, b) => a - b)
    for (let i = 0; i < Math.floor(cards.length / 2); i++) {
        let a = cardNumbers.indexOf(cards[i])
        cardNumbers[cardNumbers.indexOf(cards[i])] = 0
        let b = cardNumbers.indexOf(cards[cards.length - 1 - i])
        cardNumbers[cardNumbers.indexOf(cards[cards.length - 1 - i])] = 0
        res.push([a + 1, b + 1])
    }
    return res
}
console.log(cards([10, 10, 10, 10]))