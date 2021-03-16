const IOU=(m,n,arr)=>{
    let debth={},own={},a=0,b=0,c=0,sum=0
    if (n===0){return 0}
    for (let row of arr){
        [a,b,c]=row
        Object.keys(debth).includes(b)? debth[b]+=c : debth[b]=c
        Object.keys(own).includes(a)? own[a]+=c : own[a]=c
    } 
    for (let i=1;i<=n;i++){
        i=i.toString()
        debth[i] = debth[i]===undefined ? 0 : debth[i]
        own[i] = own[i]===undefined ? 0 : own[i]
        if (debth[i]<own[i]){sum += own[i] - debth[i]}
    }  
    return sum   
}
console.log(IOU(4, 3,[[1 ,2, 10],[2, 3 ,30],[3, 4, 50]]))

