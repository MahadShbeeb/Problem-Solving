const twoArraysAndSwaps=(n,k,a,b)=>{
    b.sort((a,b)=>b-a)
    a.sort((a,b)=>a-b)
    for (let i=0;i<k;i++){
        a[i]=Math.max(a[i],b[i])
    }
    return a.reduce((ele,acc)=>ele+acc)
}
console.log(twoArraysAndSwaps(4, 4,[1, 2, 2, 1],[4 ,4 ,5 ,4]))
