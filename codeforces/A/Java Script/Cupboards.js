const cupboards=(n,left,right)=>{
    let r0=0,r1=0,l0=0,l1=0
    for(let i=0;i<n;i++){
        right[i]===1?r1+=1:r0+=1
    }
    for(let i=0;i<n;i++){
        left[i]===1?l1+=1:l0+=1  
    }
    return Math.min(r1,r0) + Math.min(l1,l0)
}
console.log(cupboards(5,[0,1,0,1,0],[1,0,1,1,1]))

