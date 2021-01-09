const antonAndDanik = (str) => {
    return str.split("").filter((letter) => letter === 'A').length > Math.floor(str.split("").length / 2) ? 'Anton' : str.split("").filter((letter) => letter === 'D').length > Math.floor(str.split("").length / 2) ? 'Danik' : 'Friendship'
}
console.log(antonAndDanik('ADAAAA'))