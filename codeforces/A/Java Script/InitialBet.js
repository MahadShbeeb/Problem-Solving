const initialBet=(nums)=>{
nums=nums.split(" ").map(n=>parseInt(n))
let sum=nums.reduce((acc,ele)=>acc+ele,0)
return sum===0||sum%nums.length!==0?-1:sum/nums.length
}
console.log(initialBet('2 5 4 0 4'))
