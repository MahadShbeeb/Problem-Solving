const vasyaAndDigitalRoot=(k,d)=>{
return d===0?k===1?'0':'No solution':parseInt(d.toString()+'0'.repeat(k-1))

}
console.log(vasyaAndDigitalRoot(4 ,4))
