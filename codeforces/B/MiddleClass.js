const middleClass=(n,wealthCondition,burles)=>{
    let wealthCounter=0,i=1,avg=burles[0]
    while (i<=n){
        if (Math.round(avg/i) >= wealthCondition){
            wealthCounter+=1
            avg+=burles[i]
        }
        i+=1
    }
    return wealthCounter
}
console.log(middleClass(3, 7,[9 ,4,9]))
