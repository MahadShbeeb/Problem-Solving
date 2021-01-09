const evenOdds = (range, index) => {
    let odd = []
    let even = []
    for (let i = 1; i <= range; i++) {
        i % 2 !== 0 ? odd.push(i) : even.push(i)
    }
    return [...odd, ...even][index - 1]
}
console.log(evenOdds(7, 7))