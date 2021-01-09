const choosingTeams = (n, k, teams) => {
    teams = teams.sort((a,b)=>b-a)
    let countTeams = 0
    for (let i=0;i<n;i++){
        if(i+1<n && i+2<n){
            console.log(teams[i],teams[i+1],teams[i+2])
            if(teams[i]+k<=5 && teams[i+1]+k<=5 && teams[i+2]+k<=5){
                countTeams+=1
                i+=2
            }
        }    
    }
    return countTeams
}
console.log(choosingTeams(5,2,[0, 4, 5 ,1 ,0]))