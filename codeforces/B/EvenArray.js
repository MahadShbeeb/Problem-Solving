const evenArray=(n,array)=>{
    let swapsCount=0,i=0
    if (array.length===1 && array[0]%2!==0) return -1
    while (i<array.length){
        if (i%2!==array[i]%2){
            [array[i],array[i+1]]=[array[i+1],array[i]]
            swapsCount+=1
        }
        i+=1
    }
    return swapsCount
}
console.log(evenArray(1,[5]))
