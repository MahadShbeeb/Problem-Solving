const minimumDifficulty=(n,r)=>{ 
    let i=0,maxDistance=0,minDistance=1000000
    r=r.split(" ")
    for(i=1;i<r.length;i++){
        maxDistance=Math.max(maxDistance,parseInt(r[i])-parseInt(r[i-1]))
    }
    for(i=1;i<r.length;i++){
        if(i+1<r.length){
            minDistance=Math.min(minDistance,Math.max(maxDistance,parseInt(r[i+1])-parseInt(r[i-1])))
        }
    }
    console.log(minDistance)
}
console.log(minimumDifficulty(3,'1 4 6'))
