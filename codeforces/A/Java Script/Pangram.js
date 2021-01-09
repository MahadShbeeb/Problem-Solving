const pangram = (lengthOfString, string) => {
    let alphabet = 'abcdefjhijklmnopqrstuvwxyz'
    let count = 0
    alphabet.split("").map((letter) => {
        string.toLowerCase().split("").includes(letter) ? count += 1 : count
    })
    return count === 26 ? 'YES' : 'NO'
}
console.log(pangram(35, 'theQuickBrownFoxJumpsOverTheLazyDog'))