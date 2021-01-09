var _ = require('lodash');
const helpfulMaths = (equationString) => {
    let solution = [];
    const isDigit = (str) => /\d+/.test(str);
    let sortedItems = equationString.split("").filter((element) => {
        return isDigit(element)
    }).sort();
    let operations = equationString.split("").filter((element) => {
        return !isDigit(element) > 0
    }).sort();
    _.zip(sortedItems, operations).map((arr) => solution.push(...arr))
    return solution.filter((element) => element).join("")
}
console.log(helpfulMaths("1+1+3+1+3"))
//zip in js
// is number  in js 