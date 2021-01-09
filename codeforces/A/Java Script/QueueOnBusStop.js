const queueOnBusStop=(numberOfBuses,limitOfPeoples,Groups)=>{
    let peoples=0,buses=1
    for (let i=0;i<numberOfBuses;i++){
        if (peoples+Groups[i]<=limitOfPeoples){
            peoples+=Groups[i]
        }else {
            buses+=1
            peoples=Groups[i]
        }
    }
    return buses
}
console.log(queueOnBusStop(4,3,[2 ,3, 2, 1]))