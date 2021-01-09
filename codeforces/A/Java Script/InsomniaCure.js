const insomniaCure=(k,l,m,n,d)=>{
    let count = 0
    for (let i=1;i<=d;i++){
        if(i%k === 0 || i%l===0 || i%m===0 || i%n===0){
            count+=1
        }
    }  
    return count
}
console.log(insomniaCure(2,3,4,5,24))
