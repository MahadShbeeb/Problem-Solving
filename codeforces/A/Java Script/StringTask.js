const stringTask = (str) => {
    let vowels = 'aeioyu'
    return `.${str.toLowerCase().split("").filter((letter) => !vowels.includes(letter)).join(".")}`
}
console.log(stringTask('BCb'))