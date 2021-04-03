const teamsForming=(n,skills)=>{
    let problemsNeededToBeSolved=0,i=0
    skills.sort((a,b)=>a-b)
    while (i<n-1){
        problemsNeededToBeSolved+=(skills[i+1]-skills[i])
        i+=2
    }
    return problemsNeededToBeSolved
}
console.log(teamsForming(2,[1 ,100]))
