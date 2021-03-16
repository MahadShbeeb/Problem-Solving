const interestingDrink=(n,prices,m,coins)=>{
    let count=0
    for (let i=0;i<m;i++){
        count=0
        for (let j=0;j<n;j++){
            if(coins[i]>=prices[j]){
               count+=1
            } 
        }
        console.log(count)
    }
}
console.log(interestingDrink(5,[3, 10, 8, 6, 11],4,[1,10,3,11]))
