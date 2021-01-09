const yaroslavAndPermutations = (arr) => {
    let count = 1
    let counts = []
    if (arr.length === 1 || [...new Set(arr)].length === arr.length) {
        return "YES";
    }
    if ([...new Set(arr)].length === 1) {
        return "NO";
    }
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && i + 1 < arr.length) {
            count += 1
        } else {
            counts.push(count)
            count = 1
        }
    }
    if (arr.length >= 2 * counts.sort((a, b) => b - a)[1]) {
        return 'YES'
    } else {
        return 'NO'
    }
};
console.log(yaroslavAndPermutations([1, 1, 1, 1, 2, 2, 2, 3, 3, 3]));