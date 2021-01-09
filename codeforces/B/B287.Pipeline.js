const pipeline = (pips, spliters) => {
    let res = []
    if (pips === spliters) {
        return 1
    }
    for (let i = 2; i <= spliters; i++) {
        res.push(i)
    }
    return res.reduce((acc, ele) => acc + ele, 0) - (res.length - 1) < pips ? -1 : res.reduce((acc, ele) => acc + ele, 0) - (res.length - 1)
}
console.log(pipeline(8, 4))