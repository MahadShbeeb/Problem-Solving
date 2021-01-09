const onedimensionalJapaneseCrossword = (str) => {
    let countBlack = 0
    let encrypt = 0
    let res = ''
    if (!str.toLowerCase().split("").includes('b')) {
        return 0
    }
    str.toLowerCase().split("").map((letter) => {
        if (letter === 'b') {
            countBlack += 1
        } else {
            res += `${countBlack===0?'':countBlack}`
            if (countBlack > 0) {
                encrypt += 1
            }
            countBlack = 0
        }
    })
    if (str[str.length - 1] === 'B') {
        encrypt += 1
        res += `${countBlack===0?'':countBlack}`
    }
    return [encrypt, res]
}
console.log(onedimensionalJapaneseCrossword('BBW'))