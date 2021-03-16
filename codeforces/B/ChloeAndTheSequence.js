const chloeAndTheSequence=(n,k)=>{
    let res=1
    while(k%2===0){
        k/=2
        res+=1
    }
    return res
}
console.log(chloeAndTheSequence(4,20))
