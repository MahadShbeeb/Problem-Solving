const panoramixsPrediction = (firstNumber, secondNumber) => {
    let res = []
    let count = 0
    for (let i = firstNumber; i <= secondNumber; i++) {
        count = 0
        for (let j = 0; j <= i; j++) {
            i % j === 0 ? count += 1 : count += 0
        }
        count === 2 ? res.push(i) : ''
    }
    return res.includes(firstNumber) && res.includes(secondNumber) ? 'Yes' : 'No'
}
console.log(panoramixsPrediction(3, 5))