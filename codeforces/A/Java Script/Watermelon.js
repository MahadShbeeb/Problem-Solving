const watermelon=(num)=>{
    let pairs=[]
    for (let i=0;i<num;i++){
        for (let j=0;j<=Math.floor(num/2);j++){
            let a=i,b=j
            if (a%2==0 && b%2==0 && a+b===num){pairs.push([a,b])}
        }
    }
    return pairs.length>2?'YES':'NO'
}
console.log(watermelon(20))

