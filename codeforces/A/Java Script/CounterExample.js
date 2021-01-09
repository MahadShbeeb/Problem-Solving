const counterExample = (firstNumber, secondNumber) => {
    let numbers = []
    let divs = {}
    let len = 0
    let count = 0
    for (let i = firstNumber; i <= secondNumber; i++) {
        numbers.push(i)
    }
    numbers.map((number) => {
        divs[number] = []
        for (let i = 0; i <= number; i++) {
            if (number % i === 0) {
                divs[number].push(i)
            }
        }
    })
    for (let key of Object.keys(divs)) {
        if (divs[(parseInt(key) + 1).toString()] !== undefined) {
            len = divs[key].length + divs[(parseInt(key) + 1).toString()].length
            if ([...new Set([...divs[key], ...divs[(parseInt(key) + 1).toString()]])].length + 1 === len) {
                count += 1
            }
        }
    }
    return count === 2 ? numbers.join(" ") : '-1'
}
console.log(counterExample(2, 4))