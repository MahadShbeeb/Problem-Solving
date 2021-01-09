const easyMath = (n, m, a, d) => {
    let count = 0
    for (let i = n; i <= m; i++) {
        if (i % a !== 0 && i % (a + d) !== 0 && i % (a + 2 * d) !== 0 && i % (a + 3 * d) !== 0 && i % (a + 4 * d) !== 0) {
            count += 1
        }
    }
    return count
}
console.log(easyMath(100, 1000, 4, 5))