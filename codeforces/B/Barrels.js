const Barrels=(n,k,barrels)=>{
    barrels.sort((a,b)=>b-a)
    let different = barrels[0] , i = 1
    while ( k > 0 ){
        different += barrels[i]
        barrels[i]=0
        k-=1
        i+=1
    }
    return different
}
console.log(Barrels(4,1,[5 ,5 ,5 ,5]))
