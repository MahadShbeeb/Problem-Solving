const permutation=(n,nums)=>{
    return nums.length-(new Set(nums)).size
}
console.log(permutation(5,[5 ,3 ,3 ,3 ,1]))
