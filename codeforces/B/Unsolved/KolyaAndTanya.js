var mod=Math.pow(10,9)+7
const kolyaAndTanya=(num)=>{
    return (func(3,3*num)-mod(7,num)+mod)%mod
}
const func=(a,b)=>{
    let res=1
    while(b){
        if(b&1){
            res=(res*a)%mod
        }
        a=(a*a)%mod
        b>=1
    }
    return res
}
console.log(kolyaAndTanya(2))
