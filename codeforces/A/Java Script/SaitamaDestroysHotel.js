const saitamaDestroysHotel=(n,s,passengers)=>{
    // max(ta + fa, tb + fb).
    let max=0
    for (let passenger of passengers){
        if (max<passenger[0]+passenger[1]){
            max=passenger[0]+passenger[1]
        } 
    }
    return max
}
console.log(saitamaDestroysHotel(3,7,[[2, 1],[3 ,8],[5 ,2]]))