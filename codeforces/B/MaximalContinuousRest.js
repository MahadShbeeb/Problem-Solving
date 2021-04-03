const maximalContinuousRest=(n,hours)=>{
    let maxRestHour=0,max=0
    for (let hour of hours){
        if(hour===1){
            maxRestHour+=1
        }else{
            max=Math.max(max,maxRestHour)
            maxRestHour=0
        }
    } 
    return hours[0]===1 && hours[hours.length-1]===1 ? Math.max(2,max):max
}
console.log(maximalContinuousRest(7,[1, 0, 1, 1, 1 ,0 ,1]))
