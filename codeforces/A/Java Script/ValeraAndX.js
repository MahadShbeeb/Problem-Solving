const valeraAndX = (n, grid) => {
    let letters = []
    let differents = []
    let res = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            i === j ? letters.push(grid[i][j]) : i === n - 1 - j ? letters.push(grid[i][j]) : differents.push(grid[i][j])
        }
    }
    letters.map((letter) => {
        letters[letters.indexOf(letter)] === letters[letters.indexOf(letter) + 1] ? res.push(true) : res.push(false)
    })
    differents.map((different) => {
        differents[differents.indexOf(different)] === differents[differents.indexOf(different) + 1] ? res.push(true) : res.push(false)
    })
    return res.includes(false) ? 'No' : 'Yes'
}
console.log(valeraAndX(3, [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
]))