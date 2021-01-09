const dividingOrange=(n,k,a)=>{
    let b=[],d = 0
    for (let i = 0; i < k; i++){b[a[i]]=true}
    for (let i = 0; i < k; i++){
        console.log(a[i]) 
        for (let j = 1; j < n; j++){
            d+=1
            while (b[d]){d+=1}
            console.log(d)
        }
    }
}

console.log(dividingOrange(3 ,1,[2]))