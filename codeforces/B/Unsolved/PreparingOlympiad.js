const preparingOlympiad=(n, l, r, x,problems)=>{
    let count=0,sum=0
    for (let i=0;i<n;i++){
        sum=0
        for (let j=0;j<n;j++){
            if (Math.abs(problems[i]-problems[j])===x && i!==j){
                sum+=problems[i]+problems[j]
                console.log(sum,problems[i],problems[j])
            }
            if (sum>r){sum=0}
            else if(sum===l) {
                count+=1
                sum=0
            }else if (sum===r){
                count+=1
                sum=0
            }
        } 
    }
    return count
}
console.log(preparingOlympiad(4 ,40 ,50 ,10,[10 ,20 ,30 ,25]))
