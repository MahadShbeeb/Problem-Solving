const launchOfColliders = (n, str, a) => {
    let ans = 1000000000
    for (let i = 0; i < n; i++) {
        if (str[i] === 'R' && str[i + 1] === 'L') {
            console.log(a[i + 1] - a[i] / 2)
            ans = Math.min(ans, a[i + 1] - a[i] / 2)
        }
    }
    return ans === 1000000000 ? -1 : ans
}
console.log(launchOfColliders(3, 'LLR', [40, 50, 60]))