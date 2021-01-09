const luckyDivision=(num)=>{
let luckyNumbers = [4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777]
return luckyNumbers.map(number=>number%num===0).some(val=>val)?'YES':'NO'
}
console.log(luckyDivision(774))
