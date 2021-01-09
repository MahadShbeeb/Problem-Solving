const alenasSchedule=(n,sessions)=>{
    if (sessions.every(session=>session===0)){return 0}
    let lessions=n-sessions.indexOf(1)-(n-(sessions.lastIndexOf(1)+1))
    for (let i=0;i<n;i++){
        if (sessions[i]===0 && sessions[i+1]===0){
            lessions-=2
        }
    }
    return lessions
}
console.log(alenasSchedule(1,[0]))