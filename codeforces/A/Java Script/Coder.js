const coder = (num) => {
    let res = []
    for (let i = 0; i < num; i++) {
        res[i] = []
        for (let j = 0; j < num; j++) {
            res[i][j] = '.'
        }
    }
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (j - 1 < 0 && i - 1 < 0) {
                if (res[i + 1][j] === '.' && res[i][j + 1] === '.') {
                    res[i][j] = 'C'
                }
            } else if (j - 1 < 0 && i + 1 < num && i - 1 >= 0 && j + 1 < num) {
                if (res[i + 1][j] === '.' && res[i - 1][j] === '.' && res[i][j + 1] === '.') {
                    res[i][j] = 'C'
                }
            } else if (i - 1 < 0 && j - 1 >= 0 && i + 1 < num && j + 1 < num) {
                if (res[i + 1][j] === '.' && res[i][j + 1] === '.' && res[i][j - 1] === '.') {
                    res[i][j] = 'C'
                }
            } else if (j + 1 >= num && i + 1 >= num) {
                if (res[i - 1][j] === '.' && res[i][j - 1] === '.') {
                    res[i][j] = 'C'
                }
            } else if (i + 1 >= num && j + 1 < num && i - 1 >= 0 && j - 1 >= 0) {
                if (res[i - 1][j] === '.' && res[i][j - 1] === '.' && res[i][j + 1] === '.') {
                    res[i][j] = 'C'
                }
            } else if (j + 1 >= num && i + 1 < num && i - 1 >= 0 && j - 1 >= 0) {
                if (res[i - 1][j] === '.' && res[i][j - 1] === '.' && res[i + 1][j] === '.') {
                    res[i][j] = 'C'
                }
            } else if (i + 1 < num && j + 1 < num && i - 1 >= 0 && j - 1 >= 0) {
                if (res[i + 1][j] === '.' && res[i][j + 1] === '.' && res[i - 1][j] === '.' && res[i][j - 1] === '.') {
                    res[i][j] = 'C'
                }
            }
        }
    }
    return res
}
console.log(coder(4))