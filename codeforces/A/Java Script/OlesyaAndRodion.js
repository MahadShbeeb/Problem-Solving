const olesyaAndRodion = (n, t) => {
    if (n <= 1 && t > n) return -1
    while (t.toString().length !== n) {
        t = t * 10
    }
    return t
}
console.log(olesyaAndRodion(10, 1))