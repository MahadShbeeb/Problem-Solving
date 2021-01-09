const lifeWithoutZeros=(num1,num2)=>{
let sum1=parseInt((num1+num2).toString().split('0').join(""))
let sum2=parseInt(num1.toString().split('0').join(""))+parseInt(num2.toString().split('0').join(""))
return sum1===sum2?'YES':'NO'
}
console.log(lifeWithoutZeros(105,106))