const youngPhysicist = (coords) => {
    for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
            if (i + 2 < coords.length && j + 2 < coords[i].length) {
                if (coords[i][j] + coords[i + 1][j] + coords[i + 2][j] === 0 && coords[i][j + 1] + coords[i + 1][j + 1] + coords[i + 2][j + 1] === 0 && coords[i][j + 2] + coords[i + 1][j + 2] + coords[i + 2][j + 2] === 0) {
                    return 'YES'
                }
            }
        }
    }
    return 'NO'
}
console.log(youngPhysicist([
    [3, -1, 7],
    [-5, 2, -4],
    [2, -1, -3]
]))