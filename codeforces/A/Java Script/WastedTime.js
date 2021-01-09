const wastedTime = (n, k, x, y, x0, y0) => {
    let total = 0
    while (--n) {
        total += Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0))
        x0 = x
        y0 = y
    }
    return total * k / 50
}
console.log(wastedTime(2, 1, 0, 0, 10, 0))