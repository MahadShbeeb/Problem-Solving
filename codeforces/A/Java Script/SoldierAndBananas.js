const soldierAndBananas = (firstBananaPrice, dollers, wantedBanana) => {
    for (let i = 0; i <= wantedBanana; i++) {
        dollers > 0 ? dollers -= i * firstBananaPrice : dollers -= i * firstBananaPrice
    }
    return Math.abs(dollers)
}
console.log(soldierAndBananas(3, 17, 4))