const raisingBacteria = (bacteria) => {
    let count = 0
    while (bacteria !== 0) {
        if (bacteria % 2 !== 0) {
            bacteria -= 1
            count += 1
        }
        bacteria = Math.floor(bacteria / 2)
    }
    return count
}
console.log(raisingBacteria(7))