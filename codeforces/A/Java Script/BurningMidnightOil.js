const burningMidnightOil = (n, k) => {
    let left = 1
    let right = n
    while (left != right) {
        let x = middle = (left + right) / 2
        let sum = 0
        while (x != 0) {
            sum += x
            x /= k
        }
        sum >= n ? right = middle : left = middle + 1
    }
    return left
}
console.log(burningMidnightOil(7, 2))