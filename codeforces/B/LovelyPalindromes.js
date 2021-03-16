const lovelyPalindromes=(num)=>{
return num.toString()+num.toString().split("").reverse().join("")
}
console.log(lovelyPalindromes(1))