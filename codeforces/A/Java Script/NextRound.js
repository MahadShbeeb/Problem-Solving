const nextRound = (n, k, scores) => {
    return scores.filter((score) => score > k).length
}
console.log(nextRound(8, 5, [10, 9, 8, 7, 7, 7, 5, 5]))