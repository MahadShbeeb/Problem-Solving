const combinationLock = (num1, num2) => {
    let moves = 0
    for (let i = 0; i < num1.split("").length; i++) {
        for (let j = 0; j < num2.split("").length; j++) {
            if (i === j) {
                let dif = Math.abs(parseInt(num1.split("")[i]) - parseInt(num2.split("")[j]))
                let min = Math.min(parseInt(num1.split("")[i]), parseInt(num2.split("")[j]))
                let max = Math.max(parseInt(num1.split("")[i]), parseInt(num2.split("")[j]))
                let oppDif = min + (9 - max) + 1
                if (dif < oppDif) {
                    moves += dif
                } else if (dif > oppDif) {
                    moves += oppDif
                }
            }
        }
    }
    return moves
}
console.log(combinationLock('82195', '64723'))