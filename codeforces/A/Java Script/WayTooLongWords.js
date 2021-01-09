const WayTooLongWords = (arrayOfWords) => {
    let arrayOfSolution = []
    arrayOfWords.map((word) => {
        arrayOfSolution.push(`${word[0]}${word.length - 2}${word[`${word.length-1}`]}`)
    });
    return arrayOfSolution
}
console.log(WayTooLongWords(['localization', 'interationalization']))