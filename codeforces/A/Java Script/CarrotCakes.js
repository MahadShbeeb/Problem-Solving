const carrotCakes = (numberOfCake, timeToBake, cakesBakeInTime, ovenTimeToBeBulid) => {
    let oven1 = 0;
    let oven2 = ovenTimeToBeBulid;
    let numberOfBakes = Math.ceil(numberOfCake / cakesBakeInTime)
    for (let i = 0; i < numberOfBakes; i++) {
        if (oven1 <= oven2) {
            oven1 += timeToBake;
        } else {
            oven2 += timeToBake;
        }
    }
    return oven1 < oven2 ? "Yes" : "No";
}
console.log(carrotCakes(8, 6, 4, 6));