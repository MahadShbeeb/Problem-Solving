const laptops = (arr) => {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i + 1 < arr[i].length && j + 1 < arr[i].length) {
                if (arr[i][j] < arr[i + 1][j] && arr[i + 1][j + 1] < arr[i + 1][j]) {
                    return 'Happy Alex'
                } else {
                    return 'Poor Alex'
                }
            }
        }
    }
   
}
console.log(laptops([
    [1, 2],
    [2, 1]
]))