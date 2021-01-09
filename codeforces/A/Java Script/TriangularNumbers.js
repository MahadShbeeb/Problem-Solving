const triangularNumbers = (num) => {
    let sum =0
    for(let i=1;i<num;i++){
    sum+=i
    }
    return sum===num ||num===1   ? 'YES' : 'NO'
}
console.log(triangularNumbers(3))

