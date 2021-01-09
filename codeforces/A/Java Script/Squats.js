const squats=(n,str)=>{
    let stand='X',sitdown='x',standCounter=0,sitdownCounter=0,minutes=0
    for (let i of str){i===stand?standCounter+=1:sitdownCounter+=1}
    let min=Math.min(standCounter,sitdownCounter)
    let max=Math.max(standCounter,sitdownCounter)
    for (let i=1;i<str.length;i++){
        min+=1
        if (min<max){
         minutes+=1
        } 
    }
    for (let i=0;i<minutes;i++){standCounter>sitdownCounter?str=str.replace(`${stand}`,sitdown):str=str.replace(`${sitdown}`,stand)}
    return [minutes,str]
}
console.log(squats(6,'xXXxXx'))