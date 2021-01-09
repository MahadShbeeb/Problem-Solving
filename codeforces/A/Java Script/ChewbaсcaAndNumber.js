const chewbaсcaAndNumber = (num) => {
    let res = []
    res.push(num)
    res.push(parseInt(`${num.toString()[0]}${9-parseInt(num.toString()[1])}`))
    res.push(parseInt(`${9-parseInt(num.toString()[0])===0?9:9-parseInt(num.toString()[0])}${num.toString()[1]}`))
    res.push(parseInt(`${9-parseInt(num.toString()[0])===0?9:9-parseInt(num.toString()[0])}${9-parseInt(num.toString()[1])}`))
    return res.sort((a, b) => a - b)[0]
}
console.log(chewbaсcaAndNumber(29))