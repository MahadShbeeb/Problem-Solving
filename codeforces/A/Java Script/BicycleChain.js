const bicycleChain=(n,a,m,b)=>{
    let max=0
    let occu={}
    for (let i=0;i<n;i++){
        for (let j=0;j<m;j++){
           if (max<=b[j]/a[i]&& Number.isInteger(b[j]/a[i])){
                max=b[j]/a[i]
                Object.keys(occu).includes(max.toString())?occu[max]+=1:occu[max]=1
            }
        }
    }
    return occu[max]
}
console.log(bicycleChain(2,
[4, 5],
3,
[12 ,13 ,15]))