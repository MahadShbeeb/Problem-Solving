const theatreSquare = (n, m, flagstone) => {
    return Math.ceil(n / flagstone) * Math.ceil(m / flagstone)
}
console.log(theatreSquare(6, 6, 4))

const theatreSquare2 = (n, m, flagstone) => {
    let x = Math.ceil(n / flagstone)
    let y = Math.ceil(m / flagstone)
    x += n % flagstone !== 0 ? 1 : 0
    y += m % flagstone !== 0 ? 1 : 0
    return x * y
}
console.log(theatreSquare2(6, 6, 4))