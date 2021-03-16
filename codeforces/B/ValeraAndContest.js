const valeraAndContest=(n, k, l, r, sall, sk)=>{
    let j=0,h=k
    for (let i=0; i<n;i++){
        if (j<k){
            sall-=r
            sk-=r
            k-=1
            console.log(r)
        } else {
            let x=sall/(n-h)
            while(sall >0){
                sall-=x
                console.log(x)
            }
        }
    }
}
console.log(valeraAndContest(5, 3, 1, 3 ,15 ,9))
