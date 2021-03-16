const effectiveApproach=(n,a,m,b)=>{
    let sum=0,sum1=0
    for(let i of b){
        for(let j of a){
            if(i===j){sum+=a.indexOf(i)+1}
        }
    } 
    a.reverse()
    for(let i of b){
        for(let j of a){
            if(i===j){sum1+=a.indexOf(i)+1}
        }
    } 
    console.log (sum,sum1)
}
console.log(effectiveApproach(3,[3 ,1 ,2],3,[1,2,3]))


