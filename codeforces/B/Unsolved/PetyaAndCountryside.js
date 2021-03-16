const petyaAndCountryside=(n,sectionsHeight)=>{
    let count=0,min=[],i=0,j=0,k=n
    while (i<n){
        if (sectionsHeight[i]>=sectionsHeight[i+1]){count+=1}
        else{
            i=n
            min.push(count+1)
        }
        i+=1
    }
    count=0
    i=0
    for(let j=0;j<n;j++){
        while (i<n){
            if (sectionsHeight[j]>=sectionsHeight[i]){count+=1}
            else{
            i=n
            min.push(count+1)
            }
            i+=1
        }
    }
    count=0
    while (k>=0){
        if (sectionsHeight[k]>=sectionsHeight[k-1]){count+=1}
        else{
            k=-1
            min.push(count+1)
        }
        k-=1
    }
    return min
}
console.log(petyaAndCountryside(8,[1, 1,2, 1, 1 ,1 ,3 ,3, 4]))

