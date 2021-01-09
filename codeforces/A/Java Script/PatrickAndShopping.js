const patrickAndShopping = (d1, d2, d3) => {
    let firstWay = d1 + d1 + d2 + d2
    let secondWay = d1 + d2 + d3
    let thirdWay = 2 * (Math.min(d1, d2) + d3)
    return Math.min(Math.min(firstWay, secondWay),thirdWay)
}
console.log(patrickAndShopping(1,1,5))
