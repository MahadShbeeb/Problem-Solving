const circleLine=(n,d,s,t)=>{
    if(s === t) return 0
    if(s > t) [t,s]=[s,t]
    let sum1 = 0, sum2 = 0
    for(let i = s-1; i < t-1; i++){sum1 += d[i]}
    for(let i = t-1; i <= n-1; i++){sum2 += d[i]}
    for(let i = 1; i < s; i++){sum2 += d[i]}
    return Math.min(sum1,sum2)
}

console.log(circleLine(3,[1,1,1],3,1))

