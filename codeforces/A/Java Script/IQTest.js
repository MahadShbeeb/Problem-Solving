const IQTest = (grid) => {
    let res = []
    let arr = []
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i + 1 < grid[i].length && j + 1 < grid.length) {
                res.push([grid[i][j], grid[i][j + 1], grid[i + 1][j], grid[i + 1][j + 1]])
            }
        }
    }
    res.map((row) => {
        count = 0
        for (let i = 0; i < row.length; i++) {
            row[0] !== row[i + 1] && i + 1 < row.length ? count += 1 : count += 0
        }
        count === 1 || count === 3 ? arr.push(true) : arr.push(false)
    })
    return arr.includes(true) ? console.log('YES') : console.log('NO')
}
console.log(IQTest([
    ['#', '#', '#', '#'],
    ['.', '.', '.', '.'],
    ['#', '#', '#', '#'],
    ['.', '.', '.', '.']
]))