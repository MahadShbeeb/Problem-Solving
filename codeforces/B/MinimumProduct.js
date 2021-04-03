const minimumProduct=(a,b,x,y,n)=>{
    return Math.min(calc_min_moves(a, b, x, y, n), calc_min_moves(b, a, y, x, n))
}
const calc_min_moves =(a, b, x, y, n)=>{
    let moves_a = Math.min(n, a - x)
    let moves_b = Math.min(n - moves_a, b - y)
    return (a - moves_a) * (b - moves_b)
}
console.log(minimumProduct(10 ,11, 2, 1 ,5))
