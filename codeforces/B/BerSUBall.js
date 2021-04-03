const berSUBall=(n,boys,m,girls)=>{
    let count=0
    for (let boy of boys){
        for (let girl of girls){
            if (Math.abs(girl-boy)<=1){
                count+=1
                girls.splice(girls.indexOf(girl),1)
                boys.splice(boys.indexOf(boy),1)
            }
        }
    }
    return count
}
console.log(berSUBall(5,[1 ,2,3,4,5],4,[10,12,13,14]))

