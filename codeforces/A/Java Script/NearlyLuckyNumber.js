const nearlyLuckyNumber = (num) => {
    let count = 0
    num.split("").map((letter) => {
        if (letter === '7' || letter === '4') {
            count += 1
        }
    })
    return count === num.split("").length ? 'YES' : 'NO'
}
console.log(nearlyLuckyNumber('1000000000000000000'))