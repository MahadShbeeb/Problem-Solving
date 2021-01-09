const poloThePenguinAndSegments = (n, k, elements) => {
    let res = []
    elements.map((row) => {
        res.push(...row)
    })
    return [...new Set(res)].length % k === 0 ? console.log(0) : console.log(k - [...new Set(res)].length % k)
}
console.log(poloThePenguinAndSegments(3, 7, [
    [2, 3],
    [5, 5],
    [8, 9]
]))