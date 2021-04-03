const restoreThePermutationByMerger=(n,nums)=>{
    let newArray=[]
    for (let num of nums){
        if(!newArray.includes(num)) {
            newArray.push(num)
        }
    }
    return newArray.join(" ")
}
console.log(restoreThePermutationByMerger(4,[1, 1, 2 ,2]))
