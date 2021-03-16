const balancedRatingChanges=(n, rates)=>{
    let odd=false
    let res=[]
    for (let i of rates){
        if(i %2!==0){
            !odd?res.push(Math.ceil(i/2)):res.push(Math.floor(i/2))
            odd=!odd
        }else{
            res.push(i/2)
        }
    }
    return res
}
console.log(balancedRatingChanges(7,[10,-5,-5]))
