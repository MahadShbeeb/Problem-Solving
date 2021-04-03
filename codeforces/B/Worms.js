const worms=(n,piles,m,worms)=>{
    let capacitiy=[],sum=0
    for (let i=0;i<n;i++){
        sum+=piles[i]
        capacitiy.push(sum)
    }
    for (let j=0;j<m;j++){
        for (let i=0;i<n;i++){
            if (worms[j]<=capacitiy[i]){
                console.log(i+1)
                break
            }
        }
    }
}
console.log(worms(5,[2, 7, 3 ,4 ,9],3,[1 ,25, 11]))
