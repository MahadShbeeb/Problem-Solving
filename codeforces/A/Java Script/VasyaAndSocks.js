const vasyaAndSocks=(n,m)=>{
    let days = extraSocks = n
    while( extraSocks >= m){
        days += (extraSocks/m)
        extraSocks = extraSocks/m + extraSocks % m
    }
    return days
}
console.log(vasyaAndSocks(8,2))
