const pashaMaximizes=(num,swaps)=>{
    let digits=num.toString().split(""),i=0
    while (i<digits.length){
        if (parseInt(digits[i])<parseInt(digits[i+1]) && swaps>0){
            [digits[i],digits[i+1]]= [digits[i+1],digits[i]]
            swaps-=1
            i-=(i+1)
        }
        i+=1
    }
    return digits.join("")
}
console.log(pashaMaximizes(9090000078001234 ,6))
