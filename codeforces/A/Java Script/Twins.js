const twins = (numberOfCoins, coins) => {
    let count = 0
    let sum2 = 0
    const sum = coins.split("").reduce((sum, currentValue) => {
        return sum + parseInt(currentValue)
    }, 0);
    coins.split("").sort((a, b) => b - a).map((coin) => {
        if (sum2 > sum / 2) {
        } else {
            count += 1
            sum2 += parseInt(coin)
        }
    });
    return count
}
console.log(twins(2, '33'))