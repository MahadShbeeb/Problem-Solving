const dreamoonAndWiFi=(s1,s2)=>{
    let probabilities=[]
    if (s1.split("").sort().join("") === s2.split("").sort().join("")){ return 1.0.toFixed(9) }
    if (s2.includes('?')){
        probabilities.push(s2.replace(/\?/g,'+'))
        probabilities.push(s2.replace(/\?/g,'-'))
    }
     if (s2.includes('??')){
        probabilities.push(s2.replace(/\?\?/g,'+-'))
        probabilities.push(s2.replace(/\?\?/g,'-+'))
    }
    let firstResult = findResult(s1)
    let secondResult = []
    for (let probability of probabilities){
        secondResult.push(findResult(probability))
    }
    let precent=0
    for (let res of secondResult){
        if (res===firstResult){
            precent+=1
        }
    }
    return (precent/secondResult.length).toFixed(9)
}
const findResult=(str)=>{
    let res=0
    for (let i=0;i<str.length;i++){
        str[i] === '+' ? res+=1:str[i] === '-' ? res-=1 : ' '
    }
    return res
}  
console.log(dreamoonAndWiFi('+++','??-'))



