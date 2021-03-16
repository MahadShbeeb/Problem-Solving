const relativelyPrimePairs=(l,r)=>{
    const gcd=(x,y)=>{
        while(y){
            let t=y
            y=x%y
            x=t 
        }
        return x
    }
    let pairs=[]
    let n=((r-l)+1)/2
    for (let i=l;i<r;i++){
        for (let j=l;j<r;j++){
            if (n>0 && i!==j && gcd(i,j)===1){
                pairs.push([i,j])
                n-=1
            }
        }
    }
    console.log(pairs.length===((r-l)+1)/2?'YES':'NO')
    console.log(pairs.map(pair=>console.log(...pair)))
}
console.log(relativelyPrimePairs(1,8))