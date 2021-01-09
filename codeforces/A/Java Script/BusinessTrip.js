const businessTrip=(k,a)=>{
    if (k===0){return 0}
    a.sort((a,b)=>b-a)
    let sum=0,month=0
    for (let i of a){
        if (sum+i<=k){
            sum+=i
            month+=1
        }else{
            return month+=1
        }
    }
    return sum>=k?month:-1
}
console.log(businessTrip(11,[1 ,1 ,4 ,1, 1, 5, 1, 1, 4 ,1 ,1 ,1]))