const bitPlusPlus = (n, bits) => {
    let countplus = 0
    let countminus = 0
    bits.map((bit) => {
        bit.split("").map((letter) => {
            letter === '+' ? countplus += 1 : countplus += 0
            letter === '-' ? countminus += 1 : countminus += 0
        })
    })
    return countplus / 2 - countminus / 2
}
console.log(bitPlusPlus(1, ['++x', 'x--', 'x++', 'x++', 'x++']))