const product = (firstNumber, secondNumber) => {
    let res = 0
    let longestNumber = firstNumber.length > secondNumber.length ? firstNumber.split("").reverse().join("") : secondNumber.split("").reverse().join("")
    let shortestNumber = firstNumber.length > secondNumber.length ? secondNumber : firstNumber
    let space = [1, 10, 100, 1000, 10000, 100000, 1000000]
    for (let i = 0; i <= longestNumber.length - 1; i++) {
        res += parseInt(longestNumber[i]) * parseInt(shortestNumber) * space[i]
    }
    return res
}
console.log(product('75', '324'))