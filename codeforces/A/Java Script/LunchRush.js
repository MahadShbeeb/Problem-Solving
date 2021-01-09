const lunchRush=(n,k,restaurants)=>{
    let f=0,t=0,max=-1,joy=-1
    for (let restaurant of restaurants){
        [f,t]=restaurant
        if (t>=k){
            if (max < f - (t - k)){
                max=f - (t - k)
            }
        }
    }
    return Math.max(max,joy)
}
console.log(lunchRush(1 ,5,[[1,7]]))



