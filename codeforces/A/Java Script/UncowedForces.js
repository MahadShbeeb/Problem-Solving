const uncowedForces=(submissionTime,submissionWrongs,hs,hu)=>{
    let total=0,x=500
    for(let i=0;i<5;i++){
        let firstValue=0.3*x*(i+1)
        let secondValue=(1-(parseInt(submissionTime.split(" ")[i])/250))*x*(i+1)-50*parseInt(submissionWrongs.split(" ")[i])
        total+=Math.max(firstValue,secondValue)
    }
    return total+hs*100-hu*50
}
console.log(uncowedForces('20 40 60 80 100','0 1 2 3 4',1, 0))