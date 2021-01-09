const isItRated = (participators, rates) => {
    let res = []
    let secondTerm = ''
    for (let rate = 0; rate < rates.length; rate++) {
        for (let j = 0; j < rates[rate].length - 1; j++) {
            res.push(rates[rate][j] !== rates[rate][j + 1] ? true : false)
            secondTerm = rates[0][j + 1] > rates[1][j + 1] ? true : false
        }
    }
    return res.includes(true) || secondTerm ? 'rated' : 'unrated'
}
console.log(isItRated(4, [
    [1500, 1500],
    [2194, 2194],
    [1300, 1300],
    [2624, 2624],
]))