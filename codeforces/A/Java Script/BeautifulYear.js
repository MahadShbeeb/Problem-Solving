const beautifulYear = (year) => {
    for (let i = year + 1; i <= 2020; i++) {
        if ([...new Set(i.toString().split(""))].length === 4) {
            return i
        }
    }
}
console.log(beautifulYear(2013))