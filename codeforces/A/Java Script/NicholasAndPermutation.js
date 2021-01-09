const nicholasAndPermutation=(n,numbers)=>{
    numbers=numbers.split(" ")
    let min= [...numbers].sort()[0]
    let max= [...numbers].sort()[numbers.length-1]
    let minIndex=numbers.indexOf(min)
    let maxIndex=numbers.indexOf(max)
    maxIndex>minIndex?maxIndex=numbers.length-1:minIndex=numbers.length-1
    return Math.abs(maxIndex-minIndex)
}
console.log(nicholasAndPermutation(6,'6 5 4 3 2 1'))