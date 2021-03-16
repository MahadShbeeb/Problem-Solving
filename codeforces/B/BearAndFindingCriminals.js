const bearAndFindingCriminals=(n,a,crimanals)=>{
    let count=0
    a-=1
    if (crimanals[a]===1){count+=1}
    for (let i=1;i<n;i++){
        if(crimanals[a-i]===1 && crimanals[a+i]===1){count+=2}
        if(a-i<0 && crimanals[a+i]===1 || crimanals[a-i]===1 && a+i>=n){count+=1}
    }
    return count
}
console.log(bearAndFindingCriminals(5 ,2,[1, 0, 0 ,1 ,0]))
