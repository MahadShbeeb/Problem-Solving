const snowFootprints = (str) => {
    let directionArray = str.split("").filter((letter) => letter === 'R' || letter === 'L')
    if (directionArray.includes('L') === false) {
        let firstIndex = str.split("").indexOf(directionArray[0])
        let secondIndex = firstIndex + directionArray.length - 1
        return [firstIndex, secondIndex]
    } else if (directionArray.includes('R') === false) {
        let firstIndex = str.split("").indexOf(directionArray[0])
        let secondIndex = firstIndex + directionArray.length - 1
        return [firstIndex, secondIndex]
    } else {
        let firstIndex = str.split("").indexOf(directionArray[0])
        let oppLetter = directionArray[0] === 'R' ? 'L' : 'R'
        let res = str.split("").filter((letter) => letter === oppLetter)
        let secondIndex = str.split("").indexOf(res[res.length - 1]) - 1
        return [firstIndex, secondIndex]
    }
};
console.log(snowFootprints('...RRRLLL...'));