const fence=(n,k,heights)=>{
    let sum=0,sums=[],min=10000000,index=0
    for (let i=0;i<n;i++){
        sum+=heights[i]
        sums.push(sum)
    }
    k-=1
    for (let j=k;j<=n;j++){
        if (min>sums[j]-sums[j-k]){
            min=sums[j]-sums[j-k]
            index=j
        }
    }    
    return index-k+1
}
console.log(fence(7 ,3,[1, 2 ,6 ,1 ,1 ,7 ,1]))
