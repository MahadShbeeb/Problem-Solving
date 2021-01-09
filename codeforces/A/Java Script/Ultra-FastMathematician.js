const ultraFastMathematician = (num1, num2) => {
    let num = ''
    for (let i = 0; i < num1.split("").length; i++) {
        for (let j = 0; j < num2.split("").length; j++) {
            i === j && num1[i] === num2[j] ? num += '0' : i === j && num1[i] !== num2[j] ? num += '1' : 0
        }
    }
    return num
}
console.log(ultraFastMathematician('01110', '01100'))