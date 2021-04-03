const maximums=(n,b)=>{
    let a=[b[0]],a_i=0
    let curr_x = Math.max(0, a[0])
    for (let i=1;i<n;i++){
        a_i = b[i] + curr_x
        a[i] = a_i
        curr_x = Math.max(curr_x,a_i)
    }
    return a   
}
console.log(maximums(3,[1000 ,999999000 ,-1000000000]))
