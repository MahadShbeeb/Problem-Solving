const physicsPractical=(n,measures)=>{
    let count=0,j=1
    measures.sort()
    for (let i=0;i<n;i++){
        if(measures[n-j] > 2*measures[0]){
            measures[n-j]=0
            count+=1
            j+=1
        }
    }
    return count
}
console.log(physicsPractical(4,[4, 3, 2, 4]))
