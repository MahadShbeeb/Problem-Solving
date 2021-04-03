const sortedAdjacentDifferences=(n,nums)=>{
    let sameNumber=0
    nums.sort((a,b)=>a-b)
    for (let i=0;i<nums.length;i++){
        if (nums[i]===nums[i+1]){
            sameNumber=nums[i]
            nums.splice(i,1)
            nums.splice(i+1,1)
            nums.unshift(sameNumber)
            nums.unshift(sameNumber)
        }
    }
    
    return nums
}
console.log(sortedAdjacentDifferences(4,[8, 1,-2,100,5,9,0,5 ,4 ,2]))
