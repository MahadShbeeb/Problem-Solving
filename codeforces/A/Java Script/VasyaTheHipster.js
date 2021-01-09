const vasyaTheHipster = (redSocks, blueSocks) => {
    let socks = Math.min(redSocks, blueSocks)
    let days = Math.floor(Math.floor(redSocks + blueSocks) / 2) - socks
    return [socks, days]
}
console.log(vasyaTheHipster(3, 1))