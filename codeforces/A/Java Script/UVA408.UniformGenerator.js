const uniformGenerator = (step, mod) => {
    let res = [0]
    for (let i = 0; i < mod; i++) {
        if (i + step >= mod) {
            res.push((i + step) % mod)
            i = (i + (step - 1)) % mod
        } else {
            res.push(i + step)
            i = i + (step - 1)
        }
    }
    return res
}
console.log(uniformGenerator(3, 5))