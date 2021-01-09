const oathOfTheNightsWatch = (numberOfStewards, stewards) => {
    let count = 0
    stewards = stewards.split("").sort((a, b) => a - b).join("")
    for (let i = 0; i < numberOfStewards; i++) {
        if (stewards[i + 1] > stewards[i] && stewards[i - 1] < stewards[i]) {
            count += 1
        }
    }
    return count
}
console.log(oathOfTheNightsWatch(4, '154'))