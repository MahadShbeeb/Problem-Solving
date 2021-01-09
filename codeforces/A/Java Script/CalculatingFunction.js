const calculatingFunction = (n) => {
    let fx = 0
    for (let i = 0; i <= n; i++) {
        fx += Math.pow(-1, i) * i
    }
    return fx
}
console.log(calculatingFunction(5))