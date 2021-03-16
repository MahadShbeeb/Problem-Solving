const burglarAndMatches = (capacity,n,matches) => {
    let matchesCounter=0,i=0   
    matches.sort((a,b)=>b[1]-a[1])
    while (i<n){
        for (let k=0;k<matches[i][0];k++){
            if (capacity>0){
                matchesCounter+=matches[i][1]
                capacity-=1
            }
        }
        i+=1
    }
    return matchesCounter
}
console.log(burglarAndMatches(3 ,3,[[1, 3],[2 ,2],[3, 1]]))