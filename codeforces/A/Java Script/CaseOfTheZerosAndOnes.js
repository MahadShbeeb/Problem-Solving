const caseOfTheZerosAndOnes = (num) => {
    let zeros = []
    let ones = []
    num = num.split("").sort((a, b) => a - b)
    for (let i = 0; i < num.length; i++) {
        parseInt(num[i]) === 0 ? ones.push(parseInt(num[i])) : zeros.push(parseInt(num[i]))
    }
    return Math.abs(zeros.length - ones.length)
}
console.log(caseOfTheZerosAndOnes('11101111'))