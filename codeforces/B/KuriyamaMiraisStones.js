const kuriyamaMiraisStones=(n,nums,m,array)=>{
    let type=0,l=0,r=0
    let sortedArray=[...nums].sort()
    for (let row of array){
        [type,l,r]=row
        type===1?console.log(nums.slice(l-1,r).reduce((ele,acc)=>ele+acc,0)):console.log(sortedArray.slice(l-1,r).reduce((ele,acc)=>ele+acc,0))
    }
}
console.log(kuriyamaMiraisStones(6,
[6, 4, 2 ,7 ,2 ,7],
3,
[[2, 3, 6],
[1, 3, 4],
[1, 1, 6]]))
// 24
// 9
// 28