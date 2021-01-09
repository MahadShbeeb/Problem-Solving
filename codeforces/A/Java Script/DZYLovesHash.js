const DZYLovesHash=(p,n,x)=>{
    let hashes=[]
    let conflict=0
    for (let i of x.split(" ")){
        hashes[parseInt(i)%p]===undefined?hashes[parseInt(i)%p]=parseInt(i)%p:conflict=-1
    }
    return conflict===-1?hashes[hashes.length-1]+1:-1
}
console.log(DZYLovesHash(10 ,5,'0 21 53 41 53'))