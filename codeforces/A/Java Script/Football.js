const football = (players) => {
    let count = 1
    for (let i = 0; i < players.split("").length; i++) {
        if (parseInt(players[i]) !== parseInt(players[i + 1]) && count + 1 < 7) {
            count = 0
        } else {
            count += 1
        }
    }
    return count >= 7 ? 'YES' : 'No'
}
console.log(football('1000000111111111'))