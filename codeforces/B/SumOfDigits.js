const sumOfDigits=(num)=>{
    let sum=0,count=0
    while(num.toString().length>1){
        for (let i of num.toString()){sum+=parseInt(i)}
        num=sum
        sum=0
        count+=1
    }
    return count
}
console.log(sumOfDigits(666))