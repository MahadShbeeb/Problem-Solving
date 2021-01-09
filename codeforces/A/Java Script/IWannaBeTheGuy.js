const iWannaBeTheGuy = (levels, Xlevels, Ylevels) => {
    let res = []
    let levelsSuccssed = [...new Set([...Xlevels, ...Ylevels])]
    for (let i = 1; i <= levels; i++) {
        res.push(levelsSuccssed.includes(i))
    }
    return res.includes(false) ? 'Oh ,my keyboard!' : 'I become the guy'
}
console.log(iWannaBeTheGuy(4, [3, 2, 4], [2, 2, 3]))